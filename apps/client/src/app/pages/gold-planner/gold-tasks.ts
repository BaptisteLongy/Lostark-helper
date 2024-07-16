import { GoldTask } from "./gold-task";

export const goldTasks: GoldTask[] = [

  // T2 Abyss Dungeon
  {
    name: "Demon Beast Canyon",
    taskName: "Demon Beast Canyon",
    completionId: "T2.A1.G1",
    modes: [
      {
        name: "NM",
        goldReward: 80,
        chestPrice: 0,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  },
  {
    name: "Necromancer's Origin",
    taskName: "Necromancer's Origin",
    completionId: "T2.A1.G2",
    modes: [
      {
        name: "NM",
        goldReward: 80,
        chestPrice: 0,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  },
  {
    name: "Hall of the Twisted Warlord",
    taskName: "Hall of the Twisted Warlord",
    completionId: "T2.A2.G1",
    modes: [
      {
        name: "NM",
        goldReward: 80,
        chestPrice: 0,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  },
  {
    name: "Hildebrandt Palace",
    taskName: "Hildebrandt Palace",
    completionId: "T2.A2.G2",
    modes: [
      {
        name: "NM",
        goldReward: 80,
        chestPrice: 0,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  },
  {
    name: "Road of Lament",
    taskName: "Road of Lament",
    completionId: "T2.A3.G1",
    modes: [
      {
        name: "NM",
        goldReward: 100,
        chestPrice: 0,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  },
  {
    name: "Forge of Fallen Pride",
    taskName: "Forge of Fallen Pride",
    completionId: "T2.A3.G2",
    modes: [
      {
        name: "NM",
        goldReward: 100,
        chestPrice: 0,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  },
  {
    name: "Sea of Indolence",
    taskName: "Sea of Indolence",
    completionId: "T2.A4.G1",
    modes: [
      {
        name: "NM",
        goldReward: 100,
        chestPrice: 0,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  },
  {
    name: "Tranquil Karkosa",
    taskName: "Tranquil Karkosa",
    completionId: "T2.A4.G2",
    modes: [
      {
        name: "NM",
        goldReward: 100,
        chestPrice: 0,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  },
  {
    name: "Alaric's Sanctuary",
    taskName: "Alaric's Sanctuary",
    completionId: "T2.A4.G3",
    modes: [
      {
        name: "NM",
        goldReward: 100,
        chestPrice: 0,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  },

  // T3 Abyss Dungeon - ilvl below Argos
  {
    name: "Aira's Oculus",
    taskName: "Aira's Oculus",
    completionId: "T3.A1.G1",
    modes: [
      {
        name: "NM",
        goldReward: 200,
        chestPrice: 100,
        HMThreashold: 1370,
        goldILvlLimit: Infinity
      },
      {
        name: "HM",
        goldReward: 300,
        chestPrice: 100,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  },
  {
    name: "Oreha Preveza",
    taskName: "Oreha Preveza",
    completionId: "T3.A1.G2",
    modes: [
      {
        name: "NM",
        goldReward: 300,
        chestPrice: 150,
        HMThreashold: 1370,
        goldILvlLimit: Infinity
      },
      {
        name: "HM",
        goldReward: 400,
        chestPrice: 150,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  },

  // T3 Abyss Raid - Argos
  {
    name: "Argos Gate 1",
    taskName: "Argos",
    completionId: "T3.AR1.G1",
    chestId: "Argos1",
    modes: [
      {
        name: "NM",
        goldReward: 150,
        chestPrice: 50,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  },
  {
    name: "Argos Gate 2",
    taskName: "Argos",
    completionId: "T3.AR1.G2",
    chestId: "Argos2",
    modes: [
      {
        name: "NM",
        goldReward: 150,
        chestPrice: 75,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  },
  {
    name: "Argos Gate 3",
    taskName: "Argos",
    completionId: "T3.AR1.G3",
    chestId: "Argos3",
    modes: [
      {
        name: "NM",
        goldReward: 200,
        chestPrice: 75,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  },

  // T3 Legion Raid
  {
    name: "Valtan Gate 1",
    taskName: "Valtan",
    completionId: "T3.L12.G1",
    chestId: "Valtan1",
    modes: [
      {
        name: "NM",
        goldReward: 300,
        chestPrice: 180,
        HMThreashold: 1445,
        goldILvlLimit: Infinity
      },
      {
        name: "HM",
        goldReward: 400,
        chestPrice: 255,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      },
      {
        name: "Solo",
        goldReward: 120,
        chestPrice: 45,
        HMThreashold: Infinity,
        goldILvlLimit: 1600
      }
    ]
  },
  {
    name: "Valtan Gate 2",
    taskName: "Valtan",
    completionId: "T3.L1.G2",
    chestId: "Valtan2",
    modes: [
      {
        name: "NM",
        goldReward: 450,
        chestPrice: 255,
        HMThreashold: 1445,
        goldILvlLimit: Infinity
      },
      {
        name: "HM",
        goldReward: 700,
        chestPrice: 380,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      },
      {
        name: "Solo",
        goldReward: 230,
        chestPrice: 60,
        HMThreashold: Infinity,
        goldILvlLimit: 1600
      }
    ]
  },
  {
    name: "Vykas Gate 1",
    taskName: "Vykas",
    completionId: "T3.L2.G1",
    chestId: "Vykas1",
    modes: [
      {
        name: "NM",
        goldReward: 350,
        chestPrice: 175,
        HMThreashold: 1460,
        goldILvlLimit: Infinity
      },
      {
        name: "HM",
        goldReward: 500,
        chestPrice: 280,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      },
      {
        name: "Solo",
        goldReward: 170,
        chestPrice: 60,
        HMThreashold: Infinity,
        goldILvlLimit: 1600
      }
    ]
  },
  {
    name: "Vykas Gate 2",
    taskName: "Vykas",
    completionId: "T3.L2.G2",
    chestId: "Vykas2",
    modes: [
      {
        name: "NM",
        goldReward: 650,
        chestPrice: 290,
        HMThreashold: 1460,
        goldILvlLimit: Infinity
      },
      {
        name: "HM",
        goldReward: 1000,
        chestPrice: 432,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      },
      {
        name: "Solo",
        goldReward: 330,
        chestPrice: 100,
        HMThreashold: Infinity,
        goldILvlLimit: 1600
      }
    ]
  },
  {
    name: "Kakul-Saydon Gate 1",
    taskName: "Kakul-Saydon",
    completionId: "T3.L3.G1",
    chestId: "Kakul1",
    modes: [
      {
        name: "NM",
        goldReward: 400,
        chestPrice: 200,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      },
      {
        name: "Solo",
        goldReward: 200,
        chestPrice: 70,
        HMThreashold: Infinity,
        goldILvlLimit: 1610
      }
    ]
  },
  {
    name: "Kakul-Saydon Gate 2",
    taskName: "Kakul-Saydon",
    completionId: "T3.L3.G2",
    chestId: "Kakul2",
    modes: [
      {
        name: "NM",
        goldReward: 600,
        chestPrice: 335,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      },
      {
        name: "Solo",
        goldReward: 250,
        chestPrice: 95,
        HMThreashold: Infinity,
        goldILvlLimit: 1610
      }
    ]
  },
  {
    name: "Kakul-Saydon Gate 3",
    taskName: "Kakul-Saydon",
    completionId: "T3.L3.G3",
    chestId: "Kakul3",
    modes: [
      {
        name: "NM",
        goldReward: 1000,
        chestPrice: 470,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      },
      {
        name: "Solo",
        goldReward: 450,
        chestPrice: 130,
        HMThreashold: Infinity,
        goldILvlLimit: 1610
      }
    ]
  },
  {
    name: "Brelshaza Gate 1",
    taskName: "Brelshaza Gate 1-2",
    completionId: "T3.L4.G1",
    chestId: "BrelshazaN1",
    modes: [
      {
        name: "NM",
        goldReward: 1000,
        chestPrice: 250,
        HMThreashold: 1540,
        goldILvlLimit: Infinity
      },
      {
        name: "HM",
        goldReward: 1200,
        chestPrice: 400,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      },
      {
        name: "Solo",
        goldReward: 400,
        chestPrice: 100,
        HMThreashold: Infinity,
        goldILvlLimit: 1620
      }
    ]
  },
  {
    name: "Brelshaza Gate 2",
    taskName: "Brelshaza Gate 1-2",
    completionId: "T3.L4.G2",
    chestId: "BrelshazaN2",
    modes: [
      {
        name: "NM",
        goldReward: 1000,
        chestPrice: 300,
        HMThreashold: 1540,
        goldILvlLimit: Infinity
      },
      {
        name: "HM",
        goldReward: 1200,
        chestPrice: 400,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      },
      {
        name: "Solo",
        goldReward: 500,
        chestPrice: 150,
        HMThreashold: Infinity,
        goldILvlLimit: 1620
      }
    ]
  },
  {
    name: "Brelshaza Gate 3",
    taskName: "Brelshaza Gate 3",
    completionId: "T3.L5.G1",
    chestId: "BrelshazaN3",
    modes: [
      {
        name: "NM",
        goldReward: 1000,
        chestPrice: 400,
        HMThreashold: 1550,
        goldILvlLimit: Infinity
      },
      {
        name: "HM",
        goldReward: 1200,
        chestPrice: 500,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      },
      {
        name: "Solo",
        goldReward: 800,
        chestPrice: 200,
        HMThreashold: Infinity,
        goldILvlLimit: 1620
      }
    ]
  },
  {
    name: "Brelshaza Gate 4",
    taskName: "Brelshaza Gate 4",
    completionId: "T3.L6.G1",
    chestId: "BrelshazaN4",
    modes: [
      {
        name: "NM",
        goldReward: 1600,
        chestPrice: 600,
        HMThreashold: 1560,
        goldILvlLimit: Infinity
      },
      {
        name: "HM",
        goldReward: 2000,
        chestPrice: 800,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      },
      {
        name: "Solo",
        goldReward: 900,
        chestPrice: 375,
        HMThreashold: Infinity,
        goldILvlLimit: 1620
      }
    ]
  },

  // Abyss Raid - Kayangel
  {
    name: "Kayangel Gate 1",
    taskName: "Kayangel",
    completionId: "T3.AR2.G1",
    chestId: "KayangelN1",
    modes: [
      {
        name: "NM",
        goldReward: 800,
        chestPrice: 300,
        HMThreashold: 1580,
        goldILvlLimit: Infinity
      },
      {
        name: "HM",
        goldReward: 1000,
        chestPrice: 350,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      },
      {
        name: "Solo",
        goldReward: 400,
        chestPrice: 200,
        HMThreashold: Infinity,
        goldILvlLimit: 1640
      }
    ]
  },
  {
    name: "Kayangel Gate 2",
    taskName: "Kayangel",
    completionId: "T3.AR2.G2",
    chestId: "KayangelN2",
    modes: [
      {
        name: "NM",
        goldReward: 1200,
        chestPrice: 400,
        HMThreashold: 1580,
        goldILvlLimit: Infinity
      },
      {
        name: "HM",
        goldReward: 1600,
        chestPrice: 500,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      },
      {
        name: "Solo",
        goldReward: 500,
        chestPrice: 225,
        HMThreashold: Infinity,
        goldILvlLimit: 1640
      }
    ]
  },
  {
    name: "Kayangel Gate 3",
    taskName: "Kayangel",
    completionId: "T3.AR2.G3",
    chestId: "KayangelN3",
    modes: [
      {
        name: "NM",
        goldReward: 1600,
        chestPrice: 500,
        HMThreashold: 1580,
        goldILvlLimit: Infinity
      },
      {
        name: "HM",
        goldReward: 2200,
        chestPrice: 700,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      },
      {
        name: "Solo",
        goldReward: 800,
        chestPrice: 300,
        HMThreashold: Infinity,
        goldILvlLimit: 1640
      }
    ]
  },

  // Legion Raid - Akkan
  {
    name: "Akkan Gate 1",
    taskName: "Akkan",
    completionId: "T3.L7.G1",
    chestId: "AkkanN1",
    modes: [
      {
        name: "NM",
        goldReward: 1750,
        chestPrice: 450,
        HMThreashold: 1600,
        goldILvlLimit: Infinity
      },
      {
        name: "HM",
        goldReward: 2250,
        chestPrice: 600,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      },
      {
        name: "Solo",
        goldReward: 800,
        chestPrice: 225,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  },
  {
    name: "Akkan Gate 2",
    taskName: "Akkan",
    completionId: "T3.L7.G2",
    chestId: "AkkanN2",
    modes: [
      {
        name: "NM",
        goldReward: 2250,
        chestPrice: 550,
        HMThreashold: 1600,
        goldILvlLimit: Infinity
      },
      {
        name: "HM",
        goldReward: 2750,
        chestPrice: 700,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      },
      {
        name: "Solo",
        goldReward: 900,
        chestPrice: 275,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  },
  {
    name: "Akkan Gate 3",
    taskName: "Akkan",
    completionId: "T3.L7.G3",
    chestId: "AkkanN3",
    modes: [
      {
        name: "NM",
        goldReward: 4500,
        chestPrice: 750,
        HMThreashold: 1600,
        goldILvlLimit: Infinity
      },
      {
        name: "HM",
        goldReward: 6000,
        chestPrice: 950,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      },
      {
        name: "Solo",
        goldReward: 1600,
        chestPrice: 375,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  },

  // Abyss Raid - Ivory Tower - Voldis
  {
    name: "Ivory Tower Gate 1",
    taskName: "Ivory Tower",
    completionId: "T3.AR3.G1",
    chestId: "IvoryTowerN1",
    modes: [
      {
        name: "NM",
        goldReward: 2000,
        chestPrice: 500,
        HMThreashold: 1620,
        goldILvlLimit: Infinity
      },
      {
        name: "HM",
        goldReward: 3500,
        chestPrice: 750,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      },
      {
        name: "Solo",
        goldReward: 1000,
        chestPrice: 210,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  },
  {
    name: "Ivory Tower Gate 2",
    taskName: "Ivory Tower",
    completionId: "T3.AR3.G2",
    chestId: "IvoryTowerN2",
    modes: [
      {
        name: "NM",
        goldReward: 3000,
        chestPrice: 550,
        HMThreashold: 1620,
        goldILvlLimit: Infinity
      },
      {
        name: "HM",
        goldReward: 4500,
        chestPrice: 900,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      },
      {
        name: "Solo",
        goldReward: 1200,
        chestPrice: 300,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  },
  {
    name: "Ivory Tower Gate 3",
    taskName: "Ivory Tower",
    completionId: "T3.AR3.G3",
    chestId: "IvoryTowerN3",
    modes: [
      {
        name: "NM",
        goldReward: 4000,
        chestPrice: 900,
        HMThreashold: 1620,
        goldILvlLimit: Infinity
      },
      {
        name: "HM",
        goldReward: 6500,
        chestPrice: 1350,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      },
      {
        name: "Solo",
        goldReward: 1700,
        chestPrice: 500,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  },

  // Legion Raid - Thaemine
  {
    name: "Thaemine Gate 1",
    taskName: "Thaemine",
    completionId: "T3.L8.G1",
    chestId: "ThaemineN1",
    modes: [
      {
        name: "NM",
        goldReward: 3500,
        chestPrice: 1500,
        HMThreashold: 1630,
        goldILvlLimit: Infinity
      },
      {
        name: "HM",
        goldReward: 5000,
        chestPrice: 2000,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  },
  {
    name: "Thaemine Gate 2",
    taskName: "Thaemine",
    completionId: "T3.L8.G2",
    chestId: "ThaemineN2",
    modes: [
      {
        name: "NM",
        goldReward: 4000,
        chestPrice: 1800,
        HMThreashold: 1630,
        goldILvlLimit: Infinity
      },
      {
        name: "HM",
        goldReward: 6000,
        chestPrice: 2400,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  },
  {
    name: "Thaemine Gate 3",
    taskName: "Thaemine",
    completionId: "T3.L8.G3",
    chestId: "ThaemineN3",
    modes: [
      {
        name: "NM",
        goldReward: 5500,
        chestPrice: 2500,
        HMThreashold: 1630,
        goldILvlLimit: Infinity
      },
      {
        name: "HM",
        goldReward: 9000,
        chestPrice: 2800,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  },
  {
    name: "Thaemine Gate 4",
    taskName: "Thaemine G4",
    completionId: "T3.L9.G1",
    chestId: "ThaemineH4",
    modes: [
      {
        name: "NM", // We set it to NM because there is only 1 difficulty, even though it's Hard Mode in game
        goldReward: 21000,
        chestPrice: 3600,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  },

  // Kazeros Raid
  {
    name: "Echidna Gate 1",
    taskName: "Echidna",
    completionId: "T3.K1.G1",
    chestId: "EchidnaN1",
    modes: [
      {
        name: "NM",
        goldReward: 5000,
        chestPrice: 2200,
        HMThreashold: 1630,
        goldILvlLimit: Infinity
      },
      {
        name: "HM",
        goldReward: 6000,
        chestPrice: 2800,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  },
  {
    name: "Echidna Gate 2",
    taskName: "Echidna",
    completionId: "T3.K1.G2",
    chestId: "EchidnaN2",
    modes: [
      {
        name: "NM",
        goldReward: 9500,
        chestPrice: 3400,
        HMThreashold: 1630,
        goldILvlLimit: Infinity
      },
      {
        name: "HM",
        goldReward: 12500,
        chestPrice: 4100,
        HMThreashold: Infinity,
        goldILvlLimit: Infinity
      }
    ]
  }
];
