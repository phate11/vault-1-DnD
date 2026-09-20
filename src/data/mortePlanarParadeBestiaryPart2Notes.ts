import { VaultNote } from '../types';

export const mortePlanarParadeBestiaryPart2Notes: VaultNote[] = [
  {
    id: "morte-kolyarut",
    title: "Kolyarut - Inevitable Arbiter of the Hall of Concordance",
    folder: "Planescape/Bestiary",
    category: "Creature",
    tags: ["planescape", "morte", "inevitable", "construct", "sigil", "mechanus", "cr20", "boss"],
    aliases: ["Kolyarut", "Kolyarut Stat Block", "Inevitable Kolyarut"],
    content: `---
title: Kolyarut - Inevitable Arbiter of the Hall of Concordance
category: Creature
folder: Planescape/Bestiary
tags: [planescape, morte, inevitable, construct, sigil, mechanus, cr20, boss]
source: Morte's Planar Parade (pg. 34–35)
---

# Kolyarut

Created by Primus, the leader of the modrons, the Kolyarut is a wondrous machine capable of forging binding contracts between parties. From the Hall of Concordance in Sigil, the Kolyarut judges the needs of planar beings seeking uniquely binding terms and forges ironclad agreements. Those who break these contracts are pursued by *maruts* and punished in brutally decisive fashion.

In cases where terms of a contract or foundational truths come into question, the Kolyarut dispatches component parts of itself into the planes—four-armed multiversal investigators known as **kolyaruts**.

---

## ⚖️ Kolyarut Stat Block
*Medium Construct (Inevitable), Typically Lawful Neutral*

- **Armor Class**: 18 (natural armor)
- **Hit Points**: 297 (35d8 + 140)
- **Speed**: 50 ft., fly 35 ft. (hover)
- **STR**: 25 (+7) | **DEX**: 12 (+1) | **CON**: 19 (+4) | **INT**: 25 (+7) | **WIS**: 22 (+6) | **CHA**: 18 (+4)
- **Saving Throws**: Int +13, Wis +12, Cha +10
- **Skills**: History +13, Insight +12, Perception +12
- **Damage Resistances**: thunder; bludgeoning, piercing, and slashing from nonmagical attacks
- **Damage Immunities**: poison
- **Condition Immunities**: charmed, exhaustion, frightened, paralyzed, poisoned, unconscious
- **Senses**: darkvision 60 ft., passive Perception 22
- **Languages**: all
- **Challenge**: 20 (25,000 XP) | **Proficiency Bonus**: +6

### Traits
- **Immutable Form**: Immune to any spell or effect that would alter its form.
- **Legendary Resistance (4/Day)**: Succeeds on a failed saving throw.
- **Magic Resistance**: Advantage on saves vs spells and magical effects.

### Actions
- **Multiattack**: Makes four Unerring Blade attacks.
- **Unerring Blade**: Melee Weapon Attack: **automatic hit**, reach 5 ft., one target. Hit: **24 force damage** plus one additional effect (choose or roll d6):
  - *1–2 Disarm*: Target drops one held item of kolyarut's choice.
  - *3–4 Imbalance*: Target cannot take reactions until start of kolyarut's next turn.
  - *5–6 Push*: Large or smaller target is pushed up to 15 ft away.
- **Edict of Blades (Recharge 5–6)**: Moves up to speed without provoking opportunity attacks and makes one Unerring Blade attack against each creature it moves past. Each hit ends all spells of 5th level or lower on the creature and inflicts the **incapacitated condition** until end of kolyarut's next turn!
- **Plane Shift (3/Day)**: Int-based. Can target an unwilling creature within 60 ft (**DC 18 Charisma save** or banished to a teleportation circle inside the **Hall of Concordance in Sigil**).

### Reactions
- **Parry**: Adds 6 to its AC against one attack roll that would hit it.
`
  },
  {
    id: "morte-hierarch-modrons",
    title: "Hierarch Modrons (Decaton, Hexton, Nonaton, Octon, Septon) - High Officers of Mechanus",
    folder: "Planescape/Bestiary",
    category: "Creature",
    tags: ["planescape", "morte", "modron", "mechanus", "construct", "cr8", "cr10", "cr11", "cr12", "cr13"],
    aliases: ["Decaton Modron", "Hexton Modron", "Nonaton Modron", "Octon Modron", "Septon Modron"],
    content: `---
title: Hierarch Modrons (Decaton, Hexton, Nonaton, Octon, Septon) - High Officers of Mechanus
category: Creature
folder: Planescape/Bestiary
tags: [planescape, morte, modron, mechanus, construct, cr8, cr10, cr11, cr12, cr13]
source: Morte's Planar Parade (pg. 36–41)
---

# Hierarch Modrons of Mechanus

Above the base modrons (monodrones through pentadrones) stand the **hierarch modrons**—the bureaucratic command staff and field generals governing Mechanus and leading the **Great Modron March**.

---

## ⚡ Decaton Modron (CR 8, 3,900 XP)
*Large Construct, Lawful Neutral*
- **AC**: 16 | **HP**: 144 (17d10 + 51) | **Speed**: 30 ft., fly 30 ft. (hover)
- **Features**: *Axiomatic Mind*, *Combat Ready* (adv on initiative), *Disintegration* (turns to dust on death).
- **Actions**: Multiattack (3 Tentacle attacks); **Tentacle** (+7 to hit, 15 piercing + grapple DC 14, 10 tentacles total); **Lightning Rays (Recharge 6)**: 30-ft radius DC 13 Dex save or **38 (7d10) lightning damage**.

---

## 🪱 Nonaton Modron (CR 10, 5,900 XP)
*Large Construct, Lawful Neutral*
- **AC**: 16 | **HP**: 161 (19d10 + 57) | **Speed**: 30 ft., fly 30 ft.
- **Nine Mechanical Arms**: Multiattack (3 Arm attacks + Pillar of Truth or Spellcasting).
- **Pillar of Truth**: 60-ft-tall, 20-ft-radius cylinder within 60 ft. DC 15 Dex save or **21 (6d6) force damage and reverts to true form** (cannot shapechange until end of next turn).

---

## 🐙 Octon Modron (CR 11, 7,200 XP)
*Large Construct, Lawful Neutral*
- **AC**: 18 | **HP**: 187 (22d10 + 66) | **Speed**: 30 ft., fly 30 ft., swim 30 ft.
- **Actions**: Multiattack (3 Tentacle attacks: 14 bludgeoning + 9 lightning); **Whirlwind of Tentacles (Recharge 5–6)**: Pulls all within 20 ft 10 ft closer (DC 16 Str save), then makes two tentacle attacks against all within 10 ft!

---

## 🌐 Septon Modron (CR 12, 8,400 XP)
*Large Construct, Lawful Neutral*
- **AC**: 17 | **HP**: 204 (24d10 + 72) | **Speed**: 30 ft., fly 30 ft., swim 30 ft.
- **Actions**: Multiattack (4 Tentacle attacks + Lightning Network or Spellcasting).
- **Lightning Network**: 30-foot cube. DC 16 Dex save or **33 (6d10) lightning damage and stunned for 1 minute**.

---

## 🎖️ Hexton Modron (CR 13, 10,000 XP)
*Huge Construct, Lawful Neutral*
- **AC**: 17 | **HP**: 209 (22d12 + 66) | **Speed**: 40 ft., fly 40 ft.
- **Field General of the Great Modron March**: Solid frame bristling with six shining flanges, massive pincers, and tentacles.
- **Actions**: Multiattack (1 Pincer, 2 Tentacles); **Pincer**: +9 to hit, reach 10 ft., 13 bludgeoning + 10 force + DC 17 Con save or **incapacitated**; **Tentacle**: +9 to hit, 15 piercing + grapple DC 14 (has 6 tentacles).
- **Reactions (3 per round, 1 per turn)**:
  - **Counter Magic**: DC 10 + spell level to counter 4th+ level spells (3rd level or lower auto-fails).
  - **Lightning Rebuke**: When damaged from within 120 ft, retorts with **11 (2d10) lightning damage** (DC 17 Dex save).
`
  },
  {
    id: "morte-shemeshka-rilmani",
    title: "Shemeshka the Arcanaloth & Rilmani Protectors of the Spire",
    folder: "Planescape/Bestiary",
    category: "Creature",
    tags: ["planescape", "morte", "shemeshka", "rilmani", "outlands", "sigil", "fortune-wheel", "cr9", "cr12", "cr14", "cr17"],
    aliases: ["Shemeshka", "Shemeshka the Arcanaloth", "Rilmani", "Aurumach", "Cuprilach", "Ferrumach"],
    content: `---
title: Shemeshka the Arcanaloth & Rilmani Protectors of the Spire
category: Creature
folder: Planescape/Bestiary
tags: [planescape, morte, shemeshka, rilmani, outlands, sigil, fortune-wheel, cr9, cr12, cr14, cr17]
source: Morte's Planar Parade (pg. 44–47)
---

# Shemeshka the Arcanaloth & Rilmani Guardians

---

## 🦊 Shemeshka
*Medium Fiend (Yugoloth), Neutral Evil (CR 14, 11,500 XP)*
*Mistress of the Fortune's Wheel Casino, Kingpin of Sigil's Criminal Underworld*

- **Armor Class**: 17 (natural armor) | **Hit Points**: 162 (25d8 + 50) | **Speed**: 30 ft., fly 30 ft. (hover)
- **STR 20 (+5), DEX 14 (+2), CON 14 (+2), INT 21 (+5), WIS 16 (+3), CHA 18 (+4)**
- **Saving Throws**: Dex +7, Int +10, Wis +8, Cha +9
- **Special Equipment - Razorvine Tiara**: Acts as a magic tentacle rod dealing slashing damage.
- **Traits**: Legendary Resistance (4/Day), Magic Resistance.
- **Actions**:
  - **Multiattack**: Uses Arcane Flux or Spellcasting, then makes one Claw or Razorvine Tiara attack.
  - **Arcane Flux**: 120-ft range burst. DC 18 Dex save or **45 (7d12) force damage and incapacitated** until end of next turn (half on save).
  - **Claw**: +10 to hit, 10 slashing + 14 poison.
  - **Razorvine Tiara**: +10 to hit, reach 15 ft. Hit: 10 slashing + 9 necrotic, and target must make **DC 15 Con save** or speed is halved with disadvantage on attacks/saves.
  - **Spellcasting**: DC 18. At will: *alter self*, *darkness*, *invisibility*, *mage hand*, *prestidigitation*; 2/day: *detect thoughts*, *dimension door*, *suggestion*; 1/day: *banishment*, *contact other plane*, *mind blank*.
- **Bonus Action - Teleport**: Up to 60 ft.
- **Reaction - Fell Counterspell (3/Day)**: Interrupts spells; caster is also **poisoned** until end of its next turn!

---

## 🪙 Rilmani of the Spire (Concordant Opposition)
Living metal humanoids preserving absolute cosmic neutrality across the multiverse:

### 🥇 Aurumach Rilmani (CR 17, 18,000 XP)
- **AC**: 18 | **HP**: 285 (30d10 + 120) | **Fly**: 40 ft. (hover)
- **Actions**: Three Manifested Blade (+11 to hit, reach 10 ft., 23 force) or Gleaming Ray attacks (range 120 ft., 24 force).
- **Aura of Blades (Bonus Action)**: 10-ft aura; DC 19 Dex save or 16 (3d10) force damage.
- **Invoke Weakness (Recharge 5–6)**: Curses creature within 120 ft (DC 19 Wis save); next hit deals an extra **27 (6d8) force damage**.

### 🥉 Cuprilach Rilmani (CR 12, 8,400 XP)
- **AC**: 16 | **HP**: 202 (27d8 + 81) | **Speed**: 40 ft. Copper assassin whose torso floats above hips.
- **Actions**: Three Burnished Blade (+9 to hit, 8 piercing + 13 psychic) or Bolt attacks (+9 to hit, 7 piercing + 13 psychic).
- **Traits**: *Assassin's Agility* (bonus action Dash/Disengage or blade attack), *Uncanny Dodge*.

### ⚔️ Ferrumach Rilmani (CR 9, 5,000 XP)
- **AC**: 18 | **HP**: 136 (16d8 + 64) | **Speed**: 30 ft. Iron martial shock trooper.
- **Bladed Edges**: Grappling deals 10 (3d6) slashing damage at start of turn.
- **Skewering Charge**: 20-ft charge deals extra 10 piercing + grapple (escape DC 18).
`
  },
  {
    id: "morte-time-dragons",
    title: "Time Dragons (Wyrmling, Young, Adult, Ancient) - Masters of the Chronostream",
    folder: "Planescape/Bestiary",
    category: "Creature",
    tags: ["planescape", "morte", "dragon", "time-dragon", "chronomancy", "cr5", "cr11", "cr18", "cr26", "boss"],
    aliases: ["Time Dragon", "Ancient Time Dragon", "Adult Time Dragon", "Time Dragon Wyrmling"],
    content: `---
title: Time Dragons (Wyrmling, Young, Adult, Ancient) - Masters of the Chronostream
category: Creature
folder: Planescape/Bestiary
tags: [planescape, morte, dragon, time-dragon, chronomancy, cr5, cr11, cr18, cr26, boss]
source: Morte's Planar Parade (pg. 48–52)
---

# Time Dragons

> *"Don't pick fights with dragons, and especially not ones that already remember eating you."*
> —Morte

Sleek, iridescent dragons that manipulate the past, present, and future. Their horns feature branching rainbow veins mapping out temporal timelines. Ancient time dragons can create temporal gates across epochs.

---

## ⏳ Ancient Time Dragon (CR 26, 90,000 XP / CR 27 in Lair)
*Gargantuan Dragon, Typically Neutral*

- **Armor Class**: 22 (natural armor)
- **Hit Points**: 536 (29d20 + 232)
- **Speed**: 40 ft., climb 40 ft., fly 80 ft.
- **STR**: 28 (+9) | **DEX**: 14 (+2) | **CON**: 26 (+8) | **INT**: 27 (+8) | **WIS**: 18 (+4) | **CHA**: 23 (+6)
- **Saving Throws**: Dex +10, Con +16, Wis +12, Cha +14
- **Skills**: Arcana +16, History +24, Perception +20, Stealth +18
- **Senses**: blindsight 60 ft., darkvision 120 ft., passive Perception 30
- **Cycle of Rebirth**: On death, soul coalesces into an invulnerable steely egg on a random plane that hatches in 1d100 years retaining all memories!
- **Legendary Resistance (5/Day)**: Automatic save success.

### Actions
- **Multiattack**: Three Rend attacks (+17 to hit, reach 15 ft., 22 slashing + 10 force).
- **Time Breath (Recharge 5–6)**: 90-foot cone of shimmering light. Unattended objects crumble to dust. **DC 24 Con save** or **52 (8d12) force damage** and magically weakened (attacks against it have advantage, it has poisoned condition, and others resist all its damage). Requires 3 successful saves to end!
- **Time Gate (1/Day)**: Conjures a 20-ft portal connecting to any point in time up to **8,000 years in the past or future** on any plane!

### Reactions (3 per round, 1 per turn)
- **Reactive Rend**: Rend attack after using Legendary Resistance or being hit.
- **Slow Time**: Target weakened by Time Breath has speed reduced to 0.
- **Time Slip**: Halves damage from an attack and teleports 60 ft!

---

## ⏳ Adult Time Dragon (CR 18, 20,000 XP / CR 19 in Lair)
*Huge Dragon, AC 19, HP 250 (20d12 + 120), Fly 80 ft.*
- **Time Breath (Recharge 5–6)**: 60-ft cone; DC 20 Con save or 36 (8d8) force damage + weakened.
- **Reactions**: Reactive Rend, Slow Time (speed 0), Time Slip (halve damage + 30 ft teleport).

---

## ⏳ Young Time Dragon (CR 11, 7,200 XP)
*Large Dragon, AC 18, HP 210 (20d10 + 100), Fly 80 ft.*
- **Time Breath (Recharge 5–6)**: 30-ft cone; DC 17 Con save or 31 (7d8) force damage + weakened.

---

## ⏳ Time Dragon Wyrmling (CR 5, 1,800 XP)
*Medium Dragon, AC 17, HP 75 (10d8 + 30), Fly 60 ft.*
- **Time Breath (Recharge 5–6)**: 15-ft cone; DC 14 Con save or 27 (6d8) force damage + weakened.

---

## 🏛️ Time Dragon Lair Actions & Regional Effects
- **Temporal Fling**: DC 18 Wis save or flung 1 round forward into the future (vanishes from battlefield).
- **Temporal Lag**: Creatures in 60 ft can move OR act on turn (not both), no bonus actions or reactions!
- **Timeline Divergence**: Dragon exists simultaneously in two spaces until next round.
- **Regional Time Dilations**: Short rests take 10 minutes or 2 hours; creatures age only 1 year per decade within 3 miles.
`
  },
  {
    id: "morte-planar-incarnate-others",
    title: "Planar Incarnate, Maelephant, Sunflies, Razorvine & Vargouille Reflection",
    folder: "Planescape/Bestiary",
    category: "Creature",
    tags: ["planescape", "morte", "planar-incarnate", "maelephant", "sunfly", "razorvine", "vargouille", "cr1", "cr10", "cr22"],
    aliases: ["Planar Incarnate", "Maelephant", "Sunfly", "Swarm of Sunflies", "Razorvine Blight", "Vargouille Reflection"],
    content: `---
title: Planar Incarnate, Maelephant, Sunflies, Razorvine & Vargouille Reflection
category: Creature
folder: Planescape/Bestiary
tags: [planescape, morte, planar-incarnate, maelephant, sunfly, razorvine, vargouille, cr1, cr10, cr22]
source: Morte's Planar Parade (pg. 35, 41–43, 47, 52)
---

# Planar Marvels & Horrors

---

## 🌌 Planar Incarnate
*Gargantuan Celestial or Fiend, Any Alignment (CR 22, 41,000 XP)*
Primal living manifestations of whole planes of existence:
- **AC**: 20 | **HP**: 333 (18d20 + 144) | **Fly**: 40 ft.
- **Damage Immunities**: necrotic, poison, radiant; nonmagical physical attacks.
- **Actions**: Two Slams (+15 to hit, reach 15 ft., 27 force) or Energy Bolts (range 120 ft., 32 necrotic/radiant).
- **Planar Exhalation (Recharge 5–6)**: 60-ft cone; DC 23 Con save or **52 (8d12) necrotic/radiant damage and blinded**.
- **Reactions (3 per round)**: Searing Gaze (command to combust, 16 fire damage); Teleport (60 ft after any creature's turn).

---

## 🐘 Maelephant
*Large Fiend, Typically Lawful Evil (CR 10, 5,900 XP)*
Pachyderm-headed fiendish guardians bound to guard vaults across the Lower Planes:
- **AC**: 15 | **HP**: 161 (17d10 + 68) | **Speed**: 40 ft.
- **Actions**: Multiattack (1 Barbed Trunk, 2 Glaives).
  - **Barbed Trunk**: +8 to hit, 13 piercing + 13 poison + grapple DC 14 (restrained).
  - **Mind Poison (Recharge 5–6)**: 60-ft cone; DC 16 Con save or **39 (6d12) poison damage and loses all weapon/skill proficiencies and spellcasting**!

---

## 🐝 Sunfly & Swarm of Sunflies
- **Sunfly (CR 0, 10 XP)**: Tiny Celestial glowing pet. AC 13, HP 2, fly 40 ft. Stinger injects planar toxin (Upper: glows bright light; Neutral: disadvantage on concentration; Lower: speed reduced by 5 ft).
- **Swarm of Sunflies (CR 1, 200 XP)**: Medium Swarm. AC 13, HP 22. Dazzling Lights (DC 10 Con save or stunned for 1 min).

---

## 🌿 Razorvine Blight
*Medium Plant, Typically Neutral Evil (CR 1, 200 XP)*
- **AC**: 12 | **HP**: 27 (5d8 + 5) | **Speed**: 30 ft., climb 30 ft.
- **False Appearance**: Undetectable when motionless (DC 18 Investigation).
- **Life-Draining Vines (Recharge 6)**: 10-ft burst DC 12 Dex save or 9 slashing damage; heals 9 HP.

---

## 🦇 Vargouille Reflection
*Tiny Fiend, Typically Chaotic Evil (CR 1, 200 XP)*
- Disembodied winged heads haunting Undersigil that mimic the exact visage of their target.
- **Abyssal Curse**: Charisma decreases by 1 every hour; at Charisma 2, target dies and head tears off to become a new vargouille reflection!
`
  }
];
