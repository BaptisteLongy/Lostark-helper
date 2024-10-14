import { Component } from "@angular/core";
import { BehaviorSubject, combineLatest, map, Observable, pluck } from "rxjs";
import { TaskFrequency } from "../../../model/task-frequency";
import { TaskScope } from "../../../model/task-scope";
import { LostarkTask } from "../../../model/lostark-task";
import { Energy } from "../../../model/energy";
import { getCompletionEntry, getCompletionEntryKey } from "../../../core/get-completion-entry-key";
import { RosterService } from "../../../core/database/services/roster.service";
import { Settings } from "../../../model/settings";
import { SettingsService } from "../../../core/database/services/settings.service";
import { EnergyService } from "../../../core/database/services/energy.service";
import { TasksService } from "../../../core/database/services/tasks.service";
import { LocalStorageService } from "../../../core/database/services/local-storage.service";
import { AuthService } from "../../../core/database/services/auth.service";
import { Roster } from "../../../model/roster";
import { Character } from "../../../model/character/character";

@Component({
  selector: "lostark-helper-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.less"]
})
export class SettingsComponent {
  public energyReloader$ = new BehaviorSubject<void>(void 0);

  public uid$ = this.auth.uid$;

  public anonymous$ = this.auth.isAnonymous$;

  public settings$: Observable<Settings> = this.settings.settings$;

  public lazyTracking$ = this.settings$.pipe(pluck("lazytracking"));

  public energy$ = this.energyService.energy$;

  public roster$ = this.rosterService.roster$.pipe(
    map(roster => roster.characters.filter(c => c.lazy))
  );

  public fullRoster$ = this.rosterService.roster$.pipe(
    pluck("characters")
  );

  public rawRoster$ = this.rosterService.roster$;

  public lazyFlags$ = combineLatest([
    this.tasksService.tasks$,
    this.roster$,
    this.lazyTracking$
  ]).pipe(
    map(([tasks, roster, tracking]) => {
      return tasks
        .filter(task => task.frequency === TaskFrequency.DAILY && task.scope === TaskScope.CHARACTER)
        .map(task => {
          return {
            task,
            flags: roster
              .map(character => {
                const flag = tracking[`${character.name}:${task.$key}`];
                return flag === undefined ? true : flag;
              })
          };
        });
    })
  );

  public restBonus$ = combineLatest([
    this.tasksService.tasks$,
    this.rosterService.roster$,
    this.energy$
  ]).pipe(
    map(([tasks, roster, energy]) => {
      return tasks
        .filter(task => task.frequency === TaskFrequency.DAILY
          && task.scope === TaskScope.CHARACTER
          && !task.custom
          && ["Chaos", "Guardian", "Una"].some(n => task.label?.startsWith(n)))
        .map(task => {
          return {
            task,
            energy: roster.characters.map(c => getCompletionEntry(energy.data, c, task)?.amount || 0)
          };
        });
    })
  );

  public taskTracking$ = combineLatest([
    this.tasksService.tasks$,
    this.rosterService.roster$
  ]).pipe(
    map(([tasks, roster]) => {
      return tasks
        .filter(task => task.scope === TaskScope.CHARACTER)
        .map(task => {
          return {
            task,
            data: roster.characters.map(c => {
              const entry = getCompletionEntry(roster.trackedTasks, c, task, true);
              if (entry === undefined) {
                return true;
              }
              return entry;
            })
          };
        });
    })
  );

  public hasLazyCharacters$ = this.roster$.pipe(
    map(roster => roster.some(c => c.lazy))
  );

  public hasLocalstorageData = false;

  constructor(private rosterService: RosterService, private tasksService: TasksService,
              private settings: SettingsService, private energyService: EnergyService,
              private localStorageService: LocalStorageService, private auth: AuthService) {
    this.updateHasLocalStorageData();
  }

  private updateHasLocalStorageData(): void {
    this.hasLocalstorageData = this.localStorageService.canMigrateEverything();
  }

  saveSettings(settings: Settings): void {
    this.settings.save(settings);
  }

  migrate(): void {
    this.localStorageService.migrate();
  }

  clearLocalstorageData(): void {
    this.localStorageService.clear();
    this.updateHasLocalStorageData();
  }

  trackByTask(index: number, row: { task: LostarkTask }): string | undefined {
    return row.task.label;
  }

  trackByIndex(index: number): number {
    return index;
  }

  setLazyFlag(settingsKey: string, tracking: Record<string, boolean>, task: LostarkTask, character: Character, flag: boolean): void {
    tracking[`${character.name}:${task.$key}`] = flag;
    this.settings.patch({
      $key: settingsKey,
      lazytracking: tracking
    });
  }

  setRestBonus(energy: Energy, task: LostarkTask, character: Character, value: number): void {
    this.energyService.updateOne(energy.$key, {
      [`data.${getCompletionEntryKey(character, task)}`]: { amount: Math.max(Math.min(task.label === 'Chaos Dungeon' ? 200 : 100, value), 0) }
    });
  }

  setTrackedTask(roster: Roster, task: LostarkTask, character: Character, value: boolean): void {
    this.rosterService.updateOne(roster.$key, {
      [`trackedTasks.${getCompletionEntryKey(character, task)}`]: value
    });
  }

  resetBonuses(key: string): void {
    this.energyService.setOne(key, { data: {}, updated: Date.now() });
  }
}
