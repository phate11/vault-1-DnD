import { VaultNote } from "../types";

export const tcoeDmToolsAndPuzzlesNotes: VaultNote[] = [
  {
    id: "tcoe-dm-tools-and-supernatural-regions",
    title: "TCoE - Dungeon Master's Tools & Supernatural Environments",
    folder: "Rules & Mechanics",
    category: "Rulebook",
    tags: ["tcoe", "dm-tools", "supernatural-regions", "hazards", "mimic-colony", "session-zero"],
    aliases: ["DM Tools", "Supernatural Regions", "Mimic Colony", "Magical Phenomena", "Parleying with Monsters"],
    content: `---
title: TCoE - Dungeon Master's Tools & Supernatural Environments
category: Rulebook
folder: Rules & Mechanics
tags: [tcoe, dm-tools, supernatural-regions, hazards, mimic-colony, session-zero]
source: Tasha's Cauldron of Everything
---

# Tasha's Cauldron of Everything: Dungeon Master's Tools

Chapter 3 of *Tasha's Cauldron of Everything* equips DMs with tools for campaign setup, monster negotiations, environmental hazards, and surreal supernatural regions.

---

## 1. Session Zero & Campaign Boundaries
A Session Zero establishes ground rules, themes, expectations, and comfort levels before characters are created:
- **Core Expectations**: Discuss house rules, lethality, character retirement, and attendance.
- **Safety Tools**: Agree upon tools like the X-Card, Lines and Veils, or open-door pauses.
- **Theme & Tone**: Align whether the campaign is gritty dark fantasy, heroic epic, political intrigue, or lighthearted exploration.

---

## 2. Parleying with Monsters
Not every encounter must culminate in initiative and bloodshed. Monsters have desires, fears, and dietary requirements:
- **Monster Desires (d6)**:
  1. Food or specialized sustenance.
  2. Safety from a rival apex predator or occupying force.
  3. Shiny trinkets, coins, or magical curios.
  4. Flattery, respect, or acknowledgment of status.
  5. Removal of an uncomfortable parasite or curse.
  6. Return of a stolen egg, hatchling, or sacred idol.
- **Researching Foes**: A character who makes a successful DC 10 + monster's CR check (Arcana, History, Nature, or Religion) can discern one of the creature's personality traits, bonds, or preferred bribes.

---

## 3. Supernatural Regions
Magical energies warp the climate, gravity, and physics of entire wilderness regions:

### 1. Blessed Radiance
Basked in celestial grace:
- **Holy Beacon**: Non-evil creatures have advantage on death saving throws.
- **Spontaneous Blessing (d6)**: 1. Radiant weapons; 2. Bane of fiends/undead; 3. Wings of light (+10 ft. speed); 4. Visions of comfort (heal 2d6); 5. Aura of calm emotions; 6. Searing rebuke.

### 2. Far Realm Infestation
Reality unravels under eldritch geometries:
- **Warped Space**: Distances fluctuate. A DC 15 Intelligence check is required to navigate without moving in an unintended direction.
- **Alien Mutations**: Sleeping characters must succeed on a DC 13 Constitution save or wake with a cosmetic aberration (eyestalk, slimy skin, third joint in arms).

### 3. Haunted Realm
Lingering emotional anguish binds ghosts to the land:
- **Chill of the Grave**: Fires emit blue light and no warmth.
- **Eerie Apparitions**: Passive Perception checks detect weeping shadows or faces screaming in tree bark.

### 4. Mimic Colony
A cluster of juvenile and adult mimics working in symbiotic concert to impersonate an entire abandoned inn, bridge, or village:

\`\`\`statblock
name: Juvenile Mimic
size: Tiny
type: monstrosity (shapechanger)
alignment: neutral
ac: 11
hp: 7 (2d4 + 2)
speed: 10 ft.
stats: [10, 12, 13, 6, 11, 8]
skills: Stealth +5
damage_immunities: acid
condition_immunities: prone
senses: darkvision 60 ft., passive Perception 10
cr: 1/8 (25 XP)
traits:
  - name: False Appearance (Object Form Only)
    desc: While the mimic remains motionless, it is indistinguishable from an ordinary object (such as a coin, cup, or dagger).
  - name: Sticky Appendage
    desc: The mimic adheres to anything that touches it. A Small or smaller creature adhered to the mimic is grappled by it (escape DC 10).
actions:
  - name: Pseudopod
    desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage plus 2 (1d4) acid damage."
\`\`\`
`
  },
  {
    id: "tcoe-puzzles-and-enigmas",
    title: "TCoE - Puzzles & Enigmas Guide",
    folder: "Rules & Mechanics",
    category: "Rulebook",
    tags: ["tcoe", "puzzles", "dungeon-master", "riddles", "traps"],
    aliases: ["TCoE Puzzles", "Puzzles Guide", "Skeleton Keys", "Creature Paintings"],
    content: `---
title: TCoE - Puzzles & Enigmas Guide
category: Rulebook
folder: Rules & Mechanics
tags: [tcoe, puzzles, dungeon-master, riddles, traps]
source: Tasha's Cauldron of Everything
---

# Tasha's Cauldron of Everything: Puzzles & Enigmas

Chapter 4 of *Tasha's Cauldron of Everything* presents ready-to-run puzzles with concrete visual clues, mechanics, failure consequences, hints, and full solutions.

---

## 1. Creature Paintings
- **Difficulty**: Easy
- **Puzzle Setup**: A chamber contains four large framed paintings of iconic D&D monsters: a **Beholder**, a **Displacer Beast**, a **Mind Flayer**, and a **Rust Monster**. Below each portrait is an empty stone receptacle. On a nearby pedestal sit four carved stone tokens: an **Eye**, six **Tentacles**, a pair of **Tentacles with Feeler Hooks**, and two **Feathery Antennae**.
- **Hint Checks**:
  - *DC 10 Nature / Arcana*: Identifies each creature's unique anatomical feature depicted on the tokens.
- **Solution**:
  1. Token with **Eye** goes into the **Beholder** receptacle.
  2. Token with **Tentacles with Hooks** goes into the **Displacer Beast** receptacle.
  3. Token with **Six Facial Tentacles** goes into the **Mind Flayer** receptacle.
  4. Token with **Feathery Antennae** goes into the **Rust Monster** receptacle.
- **Result**: Upon placement, the heavy iron portcullis raises smoothly.

---

## 2. Skeleton Keys
- **Difficulty**: Medium
- **Puzzle Setup**: A locked vault door has three distinct keyholes shaped like hollow skull eye sockets. Scattered across the floor are 8 bone skeleton keys carved into different skeletal limbs (femur, rib, humerus, spinal column, phalanges, clavicle, etc.).
- **Hint Checks**:
  - *DC 12 Medicine / Investigation*: Notices the specific joints and sockets that fit together anatomically without breaking.
- **Solution**: The keys that unlock the three locks correspond to bones from the **Head and Torso**: the Cranial Pin, the Rib Spoke, and the Spinal Column Key. Extremity bones (femur, tibia, finger phalanges) trigger a needle trap dealing 2d6 piercing damage.

---

## 3. Four Elements (The Prismatic Pillars)
- **Difficulty**: Medium
- **Puzzle Setup**: Four marble pillars surround a locked crystal door. Each pillar bears a runic carving representing an elemental plane (Earth, Air, Fire, Water). Beneath each rune is a small concave bowl.
- **Hint Checks**:
  - *DC 13 Arcana*: Recalls the complementary reactions between elemental opposing forces.
- **Solution**:
  - **Earth Bowl**: Place mineral soil, gemstone, or crushed rock.
  - **Air Bowl**: Blow a continuous breath or cast *gust*.
  - **Fire Bowl**: Touch with open flame or cast *fire bolt*.
  - **Water Bowl**: Pour water, wine, or holy water.
- **Result**: When all four are filled simultaneously within 1 round, the crystal door dissolves into harmless mist.

---

## 4. Members Only
- **Difficulty**: Hard
- **Puzzle Setup**: The entrance to an exclusive wizard sanctum requires reciting the proper anagram password. Inscribed on the archway is:  
  *"Only those of true order and vision may cross. Speak the name of the master's art."*  
  Carved letters around the door frame can be pushed: **A, C, D, E, L, M, N, O, R, S, U**.
- **Solution**: The characters must rearrange the letters to spell **NECROMANCER** or **DIVINATION** depending on the school of the archmage.
`
  }
];
