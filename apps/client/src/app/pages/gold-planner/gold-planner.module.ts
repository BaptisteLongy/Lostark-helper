import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GoldPlannerComponent } from "./gold-planner/gold-planner.component";
import { RouterModule, Routes } from "@angular/router";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { NzRadioModule } from "ng-zorro-antd/radio";
import { FormsModule } from "@angular/forms";
import { NzPageHeaderModule } from "ng-zorro-antd/page-header";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { IconsProviderModule } from "../../icons-provider.module";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";

const routes: Routes = [{
  path: "",
  component: GoldPlannerComponent
}];

@NgModule({
  declarations: [GoldPlannerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzCardModule,
    NzTableModule,
    NzSwitchModule,
    NzRadioModule,
    FormsModule,
    NzPageHeaderModule,
    NzCheckboxModule,
    IconsProviderModule,
    NzToolTipModule,
    NzInputModule,
    NzInputNumberModule,
    NzButtonModule
  ]
})
export class GoldPlannerModule {
}
