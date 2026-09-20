import { VaultNote } from '../types';

export const xgteDowntimeAndMagicItemsNotes: VaultNote[] = [
  {
    id: "xgte-downtime-revisited",
    title: "XGtE - Downtime Revisited - Rivals & Activities",
    folder: "Xanathar's Guide (XGtE)",
    category: "Tool",
    tags: ["xgte", "downtime", "rivals", "campaign", "activities", "dnd5e"],
    aliases: [
      "Downtime Revisited",
      "Rivals Generator",
      "Buying Magic Items",
      "Carousing",
      "Crafting Magic Items",
      "Scribing Spell Scrolls"
    ],
    content: `---
title: XGtE - Downtime Revisited - Rivals & Activities
category: Tool
folder: Xanathar's Guide (XGtE)
tags: [xgte, downtime, rivals, campaign, activities, dnd5e]
---

# Downtime Revisited - Rivals & Activities

Between grand quests, heroes train, forge weapons, carouse at local taverns, conduct research, and navigate the machinations of recurring rivals.

---

## 1. Creating Rivals (d20)

Rivals are NPCs who oppose the party politically, socially, or commercially without necessarily initiating combat.

| d20 | Rival Archetype |
|:---:|---|
| 1 | Tax collector who is convinced the characters are dodging municipal fees. |
| 2 | Politician concerned the party causes more collateral damage than they solve. |
| 3 | High priest worried the characters are diminishing the temple's divine prestige. |
| 4 | Arcane wizard who blames the characters for recent magical disturbances. |
| 5 | Rival adventuring party competing for the same bounties and glory! |
| 6 | Bard who loves a sensational scandal enough to invent one. |
| 7 | Childhood rival or member of a rival clan or family. |
| 8 | Scorned sibling, parent, or disinherited relative. |
| 9 | Merchant who blames the party's antics for ruined trade routes. |
| 10 | Ambitious newcomer mercenary trying to make a name on the characters' turf. |
| 11 | Sibling or lieutenant of a previously defeated villain. |
| 12 | Corrupt city watch commander attempting to frame the party. |
| 13 | Deadly villain disguised as a sophisticated social peer. |
| 14 | Fiend or cambion attempting to tempt the party toward evil. |
| 15 | Spurned former romantic interest seeking public humiliation. |
| 16 | Political opportunist using the party as a convenient scapegoat. |
| 17 | Traitorous noble attempting to foment a coup. |
| 18 | Tyrannical crime lord who brooks no unapproved muscle in town. |
| 19 | Exiled noble seeking vengeance against civilization. |
| 20 | Official worried the party will uncover their secret embezzlement. |

---

## 2. Complete Downtime Activities

### Buying a Magic Item
- **Resources**: 1 workweek + **100 gp** in search expenses (wealthy lifestyle to impress brokers). Each extra workweek or 100 gp grants +1 on the check (max +10).
- **Resolution**: Charisma (Persuasion) check:
  - *1–5*: Magic Item Table A (1d6 items)
  - *6–10*: Magic Item Table B (1d4 items)
  - *11–15*: Magic Item Table C (1d4 items)
  - *16–20*: Magic Item Table D (1d4 items)
  - *21–25*: Magic Item Table E (1d4 items)
  - *26–30*: Magic Item Table F (1d4 items)
  - *31–35*: Magic Item Table G (1d4 items)
  - *36–40*: Magic Item Table H (1d4 items)
  - *41+*: Magic Item Table I (1d4 items)
- **Pricing**:
  - Common: \`(1d6 + 1) × 10 gp\`
  - Uncommon: \`1d6 × 100 gp\`
  - Rare: \`2d10 × 1,000 gp\`
  - Very Rare: \`(1d4 + 1) × 10,000 gp\`
  - Legendary: \`2d6 × 25,000 gp\`
  *(Halved for consumables like potions or scrolls).*

---

### Carousing
- **Resources**: 1 workweek. Lower class (10 gp), Middle class (50 gp), Upper class (250 gp + noble access).
- **Resolution**: Charisma (Persuasion) check:
  - *1–5*: Made a **hostile contact**.
  - *6–10*: No new contacts made.
  - *11–15*: Made **1 allied contact**.
  - *16–20*: Made **2 allied contacts**.
  - *21+*: Made **3 allied contacts**!
- Contacts provide single-use favors (information, bail, alibi, discounts). Max unspecified contacts = \`1 + Charisma mod\`.

---

### Crafting Items & Magic Items

#### Mundane Gear
- Raw materials cost **half the item's market value**.
- Work pace: **50 gp of market value per workweek** (e.g., plate armor costing 1,500 gp takes 30 workweeks, or 6 weeks with 5 smiths).

#### Magic Item Crafting
Requires formula, rare monster component (by CR), appropriate tool or Arcana proficiency:

| Item Rarity | Required Monster CR | Time (Workweeks) | Creation Cost |
|---|:---:|:---:|:---:|
| **Common** | CR 1–3 | 1 workweek | 50 gp |
| **Uncommon** | CR 4–8 | 2 workweeks | 200 gp |
| **Rare** | CR 9–12 | 10 workweeks | 2,000 gp |
| **Very Rare** | CR 13–18 | 25 workweeks | 20,000 gp |
| **Legendary** | CR 19+ | 50 workweeks | 100,000 gp |

*(Halve time and cost for consumable items).*

#### Brewing Potions of Healing
*Requires Herbalism Kit proficiency.*
- **Healing**: 1 day, 25 gp
- **Greater Healing**: 1 workweek, 100 gp
- **Superior Healing**: 3 workweeks, 1,000 gp
- **Supreme Healing**: 4 workweeks, 10,000 gp

---

### Crime & Heists
- **Resources**: 1 workweek + 25 gp gathering intel.
- **Player Selects DC**:
  - DC 10: 50 gp loot (struggling merchant)
  - DC 15: 100 gp loot (prosperous merchant)
  - DC 20: 200 gp loot (wealthy noble)
  - DC 25: 1,000 gp loot (richest tycoon in town)
- **Resolution**: 3 checks at the chosen DC:
  1. Dexterity (Stealth)
  2. Dexterity (Thieves' Tools)
  3. Investigation, Perception, or Deception
- **Outcomes**:
  - *0 successes*: Caught & jailed! Fine equal to potential loot, 1 week jail per 25 gp fine.
  - *1 success*: Heist fails, but escape clean.
  - *2 successes*: Partial success! Earn half the loot value.
  - *3 successes*: Full heist success! Earn full loot value.

---

### Gambling
- **Resources**: 1 workweek + stake (10 gp to 1,000 gp).
- **Resolution**: 3 checks (Wis Insight, Cha Deception, Cha Intimidation; gaming set proficiency can substitute) vs. random DCs of \`5 + 2d10\` each.
  - *0 successes*: Lose stake and accrue debt equal to stake!
  - *1 success*: Lose half the stake.
  - *2 successes*: Win stake + 50% profit.
  - *3 successes*: Win double the stake!

---

### Pit Fighting
- **Resources**: 1 workweek.
- **Resolution**: 3 checks:
  1. Strength (Athletics)
  2. Dexterity (Acrobatics)
  3. Constitution (+ highest Hit Die roll without spending it)
  *(Can replace one check with a weapon attack roll).*
  Checks are vs. random DCs of \`5 + 2d10\` each.
- **Results**:
  - *0 successes*: Lost all bouts (0 gp).
  - *1 success*: Win 50 gp.
  - *2 successes*: Win 100 gp.
  - *3 successes*: Champion! Win 200 gp.

---

### Scribing a Spell Scroll
*Requires Arcana proficiency and spell prepared/known.*

| Spell Level | Scribing Time | Scribing Cost |
|:---:|:---:|:---:|
| Cantrip | 1 day | 15 gp |
| 1st | 1 day | 25 gp |
| 2nd | 3 days | 250 gp |
| 3rd | 1 workweek | 500 gp |
| 4th | 2 workweeks | 2,500 gp |
| 5th | 4 workweeks | 5,000 gp |
| 6th | 8 workweeks | 15,000 gp |
| 7th | 16 workweeks | 25,000 gp |
| 8th | 32 workweeks | 50,000 gp |
| 9th | 48 workweeks | 250,000 gp |

---

### Other Downtime Pursuits
- **Relaxation**: 1 week of modest living; advantage on saving throws to recover from long-acting disease/poison; restore one reduced ability score.
- **Religious Service**: Religion or Persuasion check earns 1–2 divine temple favors.
- **Research**: 1 workweek + 50 gp; Intelligence check yields 1–3 pieces of true lore about a person, dungeon, or artifact.
- **Training**: Learn a language or tool proficiency in 10 workweeks (minus Intelligence modifier), at 25 gp per workweek.
- **Work**: Honest wage check (Athletics, Acrobatics, Tools, or Performance):
  - *9 or lower*: Poor lifestyle
  - *10–14*: Modest lifestyle
  - *15–20*: Comfortable lifestyle
  - *21+*: Comfortable lifestyle + 25 gp!
`
  },
  {
    id: "xgte-awarding-magic-items",
    title: "XGtE - Awarding Magic Items & Common Magic Items",
    folder: "Xanathar's Guide (XGtE)",
    category: "Magic Item",
    tags: ["xgte", "magic-items", "loot", "dm-tools", "treasure", "dnd5e"],
    aliases: [
      "Awarding Magic Items",
      "Magic Items by Tier",
      "Common Magic Items",
      "Clockwork Amulet",
      "Ruby of the War Mage"
    ],
    content: `---
title: XGtE - Awarding Magic Items & Common Magic Items
category: Magic Item
folder: Xanathar's Guide (XGtE)
tags: [xgte, magic-items, loot, dm-tools, treasure, dnd5e]
---

# Awarding Magic Items & Common Magic Items

XGtE introduces an item budget system based on rarity across the four tiers of play, ensuring a typical party acquires roughly **100 magic items** from level 1 to level 20.

---

## 1. Magic Items Awarded by Tier

| Character Level Tier | Minor Items (Tables A–E) | Major Items (Tables F–I) | Total Items Awarded |
|:---:|:---:|:---:|:---:|
| **Tier 1 (Levels 1–4)** | 9 | 2 | 11 |
| **Tier 2 (Levels 5–10)** | 28 | 6 | 34 |
| **Tier 3 (Levels 11–16)** | 24 | 6 | 30 |
| **Tier 4 (Levels 17–20)** | 19 | 6 | 25 |
| **Total Campaign Budget** | **80 Minor Items** | **20 Major Items** | **100 Magic Items** |

### Minor Items by Rarity Budget
| Tier | Common | Uncommon | Rare | Very Rare | Legendary |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **1–4** | 6 | 2 | 1 | 0 | 0 |
| **5–10** | 10 | 12 | 5 | 1 | 0 |
| **11–16** | 3 | 6 | 9 | 5 | 1 |
| **17–20** | 0 | 0 | 4 | 9 | 6 |
| **Total** | **19** | **20** | **19** | **15** | **7** |

### Major Items by Rarity Budget
| Tier | Uncommon | Rare | Very Rare | Legendary |
|:---:|:---:|:---:|:---:|:---:|
| **1–4** | 2 | 0 | 0 | 0 |
| **5–10** | 5 | 1 | 0 | 0 |
| **11–16** | 1 | 2 | 2 | 1 |
| **17–20** | 0 | 1 | 2 | 3 |
| **Total** | **8** | **4** | **4** | **4** |

> [!tip] Overstocking Adventures (+25%)
> Characters will not uncover every secret room. You should stock adventures with **25% more magic items** than shown in the tables (e.g., placing 14 items in a Tier 1 adventure expecting 11 to be found).

---

## 2. Iconic Common Magic Items

XGtE introduces a celebrated collection of wondrous common magic items:

- **Armor of Gleaming**: Never gets dirty or tarnished by mud, blood, or grime.
- **Cast-Off Armor**: Can be doffed as a single action with a quick release cord.
- **Cloak of Billowing**: Can be made to billow dramatically in the wind as a bonus action!
- **Clockwork Amulet**: Once per day, you can forgo rolling a d20 for an attack roll to treat the roll as a **10**.
- **Dread Helm**: Makes your eyes glow red while worn.
- **Enduring Spellbook**: Impervious to fire, water, and age degradation.
- **Hat of Vermin**: 3 charges/day to pull a bat, frog, or rat from the hat.
- **Horn of Silent Alarm**: Sounds an alarm audible only to one designated creature within 600 feet.
- **Instrument of Scribing**: Writes floating glowing musical notes and script as you play.
- **Moon-Touched Sword**: Sheds moonlight (15 ft. bright / 15 ft. dim) when drawn.
- **Orb of Direction**: Shows true magnetic north when held in your palm.
- **Pipe of Smoke Monsters**: Blow smoke rings in the shape of fantastic beasts.
- **Pole of Angling**: Collapsible 10-foot pole that converts into a fishing rod.
- **Potion of Climbing**: Grants a climbing speed equal to your walking speed for 1 hour.
- **Rope of Mending**: A 50-foot rope that mends cuts when tied in a knot.
- **Ruby of the War Mage** *(Attunement)*: An etched ruby affixed to a simple or martial weapon, allowing the weapon to be used as a **spellcasting focus**.
- **Shield of Expression**: The face on the shield alters its emotional expression on command.
- **Smoldering Armor**: Constant wisps of harmless smoke rise from the armor plates.
- **Staff of Adornment**: Causes three tiny nonmagical objects to float around the staff's head.
- **Wand of Pyrotechnics**: Creates harmless bursts of fireworks or smoke.
- **Wand of Scowls / Smiles**: Forces a target to frown or smile for 1 minute.
`
  },
  {
    id: "xgte-shared-campaigns-names",
    title: "XGtE - Shared Campaigns & Character Names",
    folder: "Xanathar's Guide (XGtE)",
    category: "Lore",
    tags: ["xgte", "shared-campaigns", "adventurers-league", "names", "dm-tools", "dnd5e"],
    aliases: [
      "Shared Campaigns",
      "Adventurers League Rules",
      "PHB Plus One",
      "Character Names Overview"
    ],
    content: `---
title: XGtE - Shared Campaigns & Character Names
category: Lore
folder: Xanathar's Guide (XGtE)
tags: [xgte, shared-campaigns, adventurers-league, names, dm-tools, dnd5e]
---

# Shared Campaigns & Character Names

*Xanathar's Guide to Everything* concludes with vital frameworks for community play and on-the-fly worldbuilding.

---

## 1. Shared Campaigns (Adventurers League Framework)

A shared campaign is episodic rather than continuous, allowing players to carry their characters across different tables and DMs in clubs, conventions, or game stores.

### The PHB + 1 Rule
To ensure campaign balance and simplicity for rotating DMs, each character must be built using only the **Player's Handbook plus one other official D&D sourcebook** (e.g., PHB + XGtE, or PHB + SCAG).

### Adventure Pacing & Durations
Adventures are designed in strict **2-hour** or **4-hour** modules that must start and resolve within the same session:
- **PerHour Baseline**: Expect 3–4 simple combat encounters (or 1–2 complex tactical battles) plus 3–4 exploration/social scenes per hour.
- **Tier Starting Levels**: Encounters within each tier are balanced around:
  - Tier 1: Five 3rd-level characters
  - Tier 2: Five 8th-level characters
  - Tier 3: Five 13th-level characters
  - Tier 4: Five 18th-level characters

---

## 2. Character Names Appendix Overview

XGtE provides expansive name generation tables organized by culture and race:
- **Nonhuman Races**: Dragonborn, Dwarf, Elf, Gnome, Halfling, Half-Elf, Half-Orc, Tiefling.
- **Real-World Cultural Names**: Arabic, Celtic, Chinese, Egyptian, English, French, German, Greek, Indian, Japanese, Mesoamerican, Niger-Congo, Norse, Polynesian, Roman, Slavic, Spanish, and Turkish names.

---

## 3. The Legend of Sylgar the Goldfish

> *"I can disintegrate things whenever I want. Like now. And now. And now. And now... Hey, where'd everybody go?"* — **Xanathar**

Xanathar's criminal empire is run with paranoid, psychotic ruthlessness, but its heart belongs exclusively to **Sylgar**, its beloved goldfish. Whenever Sylgar dies of natural causes, Xanathar's panicked lieutenants secretly replace the fish with an identical one before the beholder notices, preserving both the syndicate and Waterdeep from a beholder's wrath!
`
  }
];
