import { VaultNote } from '../types';

export const gloryGiantsBestiaryPart1Notes: VaultNote[] = [
  {
    id: "glory-bestiary-part-1",
    title: "Glory of the Giants Bestiary (A to F) - Stat Blocks",
    folder: "Bigby's Glory of the Giants/Bestiary",
    category: "Creature",
    tags: ["glory-of-the-giants", "bestiary", "statblocks", "giants", "dinosaurs", "hulks", "colossus"],
    aliases: [
      "Bag Jelly", "Barrowghast", "Cairnwight", "Cinder Hulk", 
      "Cloud Giant Destiny Gambler", "Cloud Giant of Evil Air", 
      "Death Giant Reaper", "Death Giant Shrouded One",
      "Aerosaur", "Altisaur", "Ceratops", "Regisaur",
      "Dust Hulk", "Echo of Demogorgon", "Ettin Ceremorph",
      "Fensir Devourer", "Fensir Skirmisher", "Firbolg Primeval Warden", 
      "Firbolg Wanderer", "Firegaunt", "Fire Giant Forgecaller", 
      "Fire Giant of Evil Fire", "Fire Hellion", "Flesh Colossus"
    ],
    content: `---
title: Glory of the Giants Bestiary (A to F) - Stat Blocks
category: Creature
folder: Bigby's Glory of the Giants/Bestiary
tags: [glory-of-the-giants, bestiary, statblocks, giants, dinosaurs, hulks, colossus]
---

# Glory of the Giants Bestiary: Part 1 (A to F)

---

## 🫙 Bag Jelly
*Medium Ooze, Unaligned* | **CR 1** (200 XP) | PB +2
- **AC**: 8 | **HP**: 42 (5d8 + 20) | **Speed**: 10 ft., climb 10 ft.
- **STR**: 13 (+1) | **DEX**: 6 (-2) | **CON**: 19 (+4) | **INT**: 2 (-4) | **WIS**: 7 (-2) | **CHA**: 2 (-4)
- **Damage Resistances**: acid, bludgeoning | **Condition Immunities**: exhaustion
- **Senses**: blindsight 60 ft. (blind beyond), passive Perception 8 | **Languages**: —
- **Amorphous**: Can move through a space as narrow as 1 inch without squeezing.
- **Actions**:
  - **Multiattack**: Makes two Pseudopod attacks.
  - **Pseudopod**: *+3 to hit*, reach 5 ft. *Hit*: 8 (2d6 + 1) acid damage. If Medium or smaller, grappled (escape DC 11) with disadvantage on ability checks made to escape.

---

## 🧟 Barrowghast
*Huge Undead, Typically Chaotic Evil* | **CR 7** (2,900 XP) | PB +3
- **AC**: 12 (natural armor) | **HP**: 138 (12d12 + 60) | **Speed**: 40 ft.
- **STR**: 21 (+5) | **DEX**: 8 (-1) | **CON**: 20 (+5) | **INT**: 5 (-3) | **WIS**: 9 (-1) | **CHA**: 6 (-2)
- **Damage Resistances**: necrotic, poison | **Condition Immunities**: exhaustion, poisoned
- **Senses**: darkvision 60 ft., passive Perception 9 | **Languages**: Giant
- **Stench**: Any creature starting turn within 10 ft must make a DC 16 Con save or be poisoned for 1 minute (can't regain HP while poisoned). Immune for 24h on save.
- **Actions**:
  - **Multiattack**: Makes two Slam attacks. Can replace one with Life Drain.
  - **Slam**: *+8 to hit*, reach 10 ft. *Hit*: 18 (2d12 + 5) bludgeoning damage.
  - **Life Drain**: *+8 to hit*, reach 10 ft. *Hit*: 9 (1d8 + 5) necrotic damage, and DC 16 Con save or max HP reduced by damage taken until long rest (dies if max HP reaches 0). Humanoid slain rises as a zombie.
- **Reactions**:
  - **Noxious Wound**: When taking piercing or slashing damage, poisonous ichor sprays: each creature within 5 ft makes DC 16 Dex save or takes 10 (3d6) poison damage (half on save).

---

## 🪨 Cairnwight
*Huge Undead, Typically Neutral* | **CR 9** (5,000 XP) | PB +4
- **AC**: 19 (natural armor) | **HP**: 138 (12d12 + 60) | **Speed**: 40 ft.
- **STR**: 23 (+6) | **DEX**: 10 (+0) | **CON**: 21 (+5) | **INT**: 10 (+0) | **WIS**: 12 (+1) | **CHA**: 9 (-1)
- **Saving Throws**: Con +9, Wis +5 | **Skills**: Athletics +10, Perception +5, Stealth +8
- **Condition Immunities**: charmed, exhaustion, frightened, petrified
- **Senses**: darkvision 60 ft., passive Perception 15 | **Languages**: Giant
- **Actions**:
  - **Multiattack**: Makes two Slam attacks or two Rock attacks, and uses Petrifying Touch if available.
  - **Slam**: *+10 to hit*, reach 10 ft. *Hit*: 22 (3d10 + 6) bludgeoning damage.
  - **Rock**: *+10 to hit*, range 60/240 ft. *Hit*: 19 (3d8 + 6) bludgeoning damage + DC 17 Str save or prone.
  - **Petrifying Touch (Recharge 5–6)**: Touches creature within 10 ft: DC 17 Con save or takes 26 (4d12) force damage and restrained as it begins turning to stone. Repeat save at end of next turn; petrified on failure.

---

## 🔥 Cinder Hulk
*Large Elemental, Typically Chaotic Evil* | **CR 7** (2,900 XP) | PB +3
- **AC**: 16 (natural armor) | **HP**: 84 (8d10 + 40) | **Speed**: 40 ft.
- **STR**: 20 (+5) | **DEX**: 12 (+1) | **CON**: 20 (+5) | **INT**: 9 (-1) | **WIS**: 14 (+2) | **CHA**: 10 (+0)
- **Saving Throws**: Dex +4, Con +8, Wis +5 | **Skills**: Perception +5
- **Damage Immunities**: fire, poison | **Condition Immunities**: exhaustion, poisoned
- **Death Burst**: Explodes in 10-ft radius cloud of cinders: heavily obscured; entering/starting turn requires DC 16 Con save or 10 (3d6) fire damage (lasts 1 min).
- **Actions**:
  - **Multiattack**: Makes two Slam attacks.
  - **Slam**: *+8 to hit*, reach 5 ft. *Hit*: 16 (2d10 + 5) bludgeoning damage + 10 (3d6) fire damage.
  - **Wave of Cinders (Recharge 5–6)**: 30-ft cone: DC 16 Dex save or 31 (7d8) fire damage and blinded until end of next turn (half on save).

---

## 🎲 Cloud Giant Destiny Gambler
*Huge Giant (Bard), Any Alignment* | **CR 19** (22,000 XP) | PB +6
- **AC**: 15 (natural armor) | **HP**: 337 (27d12 + 162) | **Speed**: 40 ft., fly 40 ft. (hover)
- **STR**: 27 (+8) | **DEX**: 12 (+1) | **CON**: 22 (+6) | **INT**: 19 (+4) | **WIS**: 16 (+3) | **CHA**: 22 (+6)
- **Saving Throws**: Con +12, Int +10, Wis +9, Cha +12 | **Skills**: Deception +18, Insight +9, Perception +9
- **Damage Immunities**: thunder | **Senses**: truesight 30 ft. (with Cloud Rune), passive Perception 19
- **Cloud Rune**: Inscribed on mask (AC 15, 45 HP, immune necrotic/poison/psychic). Grants truesight 30 ft, Thunderous Clap, and Negate Spell reaction.
- **Actions**:
  - **Multiattack**: Makes three Flying Staff attacks.
  - **Flying Staff**: *+14 to hit*, reach 10 ft. or range 30/90 ft. *Hit*: 18 (3d6 + 8) bludgeoning + 16 (3d10) thunder damage (returns immediately).
  - **Spellcasting (DC 20)**: At will: *detect magic*, *fog cloud*, *light*, *minor illusion*; 1/day each: *dream* (as action), *gaseous form*, *major image*.
  - **Thunderous Clap (Requires Cloud Rune)**: 30-ft-radius sphere within 60 ft: DC 20 Con save or **52 (8d12) thunder damage** and knocked prone (half on save).
- **Reactions**:
  - **Negate Spell (Requires Cloud Rune)**: Interrupts spellcast within 60 ft. If 3rd level or lower, fails automatically. If 4th+, DC 18 Int save or fails.

---

## 🌪️ Cloud Giant of Evil Air
*Huge Giant, Typically Neutral Evil* | **CR 12** (8,400 XP) | PB +4
- **AC**: 14 (natural armor) | **HP**: 200 (16d12 + 96) | **Speed**: 40 ft., fly 40 ft. (Flyby)
- **STR**: 27 (+8) | **DEX**: 10 (+0) | **CON**: 22 (+6) | **INT**: 12 (+1) | **WIS**: 16 (+3) | **CHA**: 19 (+4)
- **Actions**:
  - **Multiattack**: Makes two Scimitar attacks and one Storm Boomerang attack.
  - **Scimitar**: *+12 to hit*, reach 10 ft. *Hit*: 18 (3d6 + 8) slashing damage.
  - **Storm Boomerang**: *+12 to hit*, range 60/240 ft. *Hit*: 15 (3d4 + 8) bludgeoning + 7 (2d6) thunder damage, and DC 16 Con save or **stunned** until end of next turn (returns immediately).
  - **Spellcasting (DC 16)**: At will: *detect magic*, *fog cloud*, *light*; 2/day: *telekinesis*; 1/day: *gaseous form*.

---

## 💀 Death Giant Reaper
*Huge Giant, Any Alignment* | **CR 12** (8,400 XP) | PB +4
- **AC**: 18 (plate) | **HP**: 172 (15d12 + 75) | **Speed**: 40 ft.
- **STR**: 27 (+8) | **DEX**: 14 (+2) | **CON**: 20 (+5) | **INT**: 18 (+4) | **WIS**: 16 (+3) | **CHA**: 16 (+3)
- **Damage Immunities**: necrotic | **Condition Immunities**: frightened
- **Senses**: darkvision 120 ft., passive Perception 17 | **Languages**: Giant
- **Actions**:
  - **Multiattack**: Makes two Scythe or Soul Bolt attacks.
  - **Scythe**: *+12 to hit*, reach 15 ft. *Hit*: 21 (3d8 + 8) slashing + 11 (2d10) necrotic damage.
  - **Soul Bolt**: *+8 to hit*, range 120 ft. *Hit*: 26 (4d10 + 4) necrotic damage, target frightened until end of next turn, and reaper gains temp HP equal to damage dealt.
- **Bonus Actions**:
  - **Frightening Teleport (Recharge 4–6)**: Teleports 40 ft. Each creature within 10 ft of departure space: DC 16 Wis save or frightened until end of creature's next turn.

---

## 👻 Death Giant Shrouded One
*Huge Giant (Wizard), Any Alignment* | **CR 15** (13,000 XP) | PB +5
- **AC**: 12 (15 with *mage armor*) | **HP**: 195 (17d12 + 85) | **Speed**: 40 ft.
- **STR**: 27 (+8) | **DEX**: 14 (+2) | **CON**: 20 (+5) | **INT**: 23 (+6) | **WIS**: 16 (+3) | **CHA**: 16 (+3)
- **Death Rune**: Inscribed on giant skull (AC 18, 35 HP). Grants Reaping Scythe and Shroud of Souls.
- **Actions**:
  - **Multiattack**: Makes three Soul Burst attacks, or three Reaping Scythe attacks if Death Rune is active.
  - **Soul Burst**: *+11 to hit*, reach 10 ft. or range 120 ft. *Hit*: 28 (4d10 + 6) necrotic damage + frightened + temporary HP.
  - **Reaping Scythe**: *+11 to hit*, reach 15 ft. *Hit*: 38 (7d10) necrotic damage, can't regain HP until end of next turn, dies if reduced to 0 HP!
  - **Spellcasting**: At will: *detect magic*, *mage armor*; 3/day: *speak with dead*, *Tenser's floating disk*.
- **Bonus Actions**:
  - **Frightening Teleport (Recharge 4–6)**: Teleport 40 ft + DC 19 Wis save or frightened.
  - **Shroud of Souls**: 5-ft aura: DC 19 Wis save or disadvantage on saves until end of creature's next turn.

---

## 🦕 Primeval Dinosaurs

### Aerosaur
*Gargantuan Monstrosity, Unaligned* | **CR 10** (5,900 XP) | PB +4
- **AC**: 14 | **HP**: 155 (10d20 + 50) | **Speed**: 20 ft., fly 120 ft. | **STR**: 26 (+8), **CON**: 21 (+5)
- **Magic Resistance** | **Proficiency in Perception +4**
- **Bite**: *+12 to hit*, reach 10 ft. *Hit*: 27 (3d12 + 8) piercing + grappled & restrained (escape DC 18).
- **Talons**: *+12 to hit*, reach 10 ft. *Hit*: 24 (3d10 + 8) slashing.
- **Wing Gusts (Recharge 5–6)**: Within 10 ft: DC 20 Str save or **38 (7d10) thunder damage** and pushed 30 ft horizontally + knocked prone.

### Altisaur
*Gargantuan Monstrosity, Unaligned* | **CR 13** (10,000 XP) | PB +5
- **AC**: 15 | **HP**: 198 (12d20 + 72) | **Speed**: 40 ft. | **STR**: 28 (+9), **CON**: 23 (+6)
- **Magic Resistance** | **Skills**: Perception +11
- **Stomp**: *+14 to hit*, reach 10 ft. *Hit*: 33 (7d6 + 9) bludgeoning + DC 22 Str save or prone.
- **Tail**: *+14 to hit*, reach 20 ft. *Hit*: 45 (8d8 + 9) bludgeoning + pushed 20 ft horizontally.

### Ceratops
*Gargantuan Monstrosity, Unaligned* | **CR 9** (5,000 XP) | PB +4
- **AC**: 16 | **HP**: 139 (9d20 + 45) | **Speed**: 50 ft. | **STR**: 24 (+7), **CON**: 21 (+5)
- **Gore**: *+11 to hit*, reach 10 ft. *Hit*: 29 (4d10 + 7) piercing. If moved 20+ ft straight, extra 11 (2d10) piercing + DC 19 Str save or pushed 20 ft and prone.
- **Stomp**: *+11 to hit*, reach 5 ft. *Hit*: 29 (4d10 + 7) bludgeoning.

### Regisaur
*Gargantuan Monstrosity, Unaligned* | **CR 14** (11,500 XP) | PB +5
- **AC**: 17 | **HP**: 181 (11d20 + 66) | **Speed**: 40 ft. | **STR**: 27 (+8), **CON**: 23 (+6)
- **Bite**: *+13 to hit*, reach 10 ft. *Hit*: 47 (6d12 + 8) piercing + grappled & restrained (escape DC 18).
- **Tail**: *+13 to hit*, reach 20 ft. *Hit*: 26 (4d8 + 8) bludgeoning.
- **Swallow (Bonus Action)**: Swallows Huge or smaller grappled creature. Inside takes **7 (2d6) acid damage** at start of regisaur's turns. Regurgitates if takes 25+ damage in a single turn.

---

## 🌪️ Dust Hulk
*Large Elemental, Typically Chaotic Neutral* | **CR 5** (1,800 XP) | PB +3
- **AC**: 16 | **HP**: 68 (8d10 + 24) | **Speed**: 0 ft., fly 30 ft. (hover) | **STR**: 15 (+2), **DEX**: 19 (+4)
- **Air Form** | **Death Burst** (10-ft radius, DC 14 Con save or blinded for 1 min).
- **Actions**: Multiattack (three Slams, can replace one with Stinging Dust).
  - **Slam**: *+7 to hit*, reach 10 ft. *Hit*: 13 (2d8 + 4) bludgeoning.
  - **Stinging Dust**: DC 14 Con save or 10 (3d6) bludgeoning + blinded until end of next turn.

---

## 👹 Echo of Demogorgon
*Large Fiend (Demon), Typically Chaotic Evil* | **CR 6** (2,300 XP) | PB +3
- **AC**: 14 | **HP**: 85 (10d10 + 30) | **Speed**: 40 ft. | **STR**: 22 (+6), **CON**: 17 (+3)
- **Wakeful** | **Magic Resistance**
- **Tentacle**: *+9 to hit*, reach 10 ft. *Hit*: 13 (2d6 + 6) bludgeoning + 9 (2d8) necrotic.
- **Discordant Screams (Bonus Action)**: DC 13 Wis save or chooses:
  - *Confused Reaction*: Uses reaction to make melee attack against another creature.
  - *Psychic Torment*: Takes **13 (2d12) psychic damage**.

---

## 🐙 Ettin Ceremorph
*Large Aberration, Typically Lawful Evil* | **CR 8** (3,900 XP) | PB +3
- **AC**: 15 | **HP**: 104 (11d10 + 44) | **Speed**: 40 ft. | **STR**: 18 (+4), **INT**: 18 (+4)
- **Tentacles**: *+7 to hit*, reach 10 ft. *Hit*: 15 (2d10 + 4) psychic + grappled (escape DC 14) + DC 15 Int save or **stunned**.
- **Extract Brain**: *+7 to hit*, reach 5 ft. against incapacitated grappled Humanoid. *Hit*: **55 (10d10) piercing damage**, instant death and brain consumed if reduced to 0 HP.
- **Mind Bolt (3/Day)**: Range 120 ft. *Hit*: 17 (2d12 + 4) psychic + DC 15 Int save or stunned.

---

## 🌲 Fensirs

### Fensir Skirmisher
*Large Giant, Any Alignment* | **CR 6** (2,300 XP) | PB +3
- **AC**: 15 | **HP**: 94 (9d10 + 45) | **Speed**: 30 ft. | **STR**: 18 (+4), **CON**: 20 (+5)
- **Regeneration**: 10 HP/turn (stopped by acid/fire). **Sunlight Hypersensitivity**: DC 15 Con save or petrified.
- **Battleaxe**: *+7 to hit*. *Hit*: 13 (2d8 + 4) slashing (or 15 two-handed).
- **Magic Stone**: Range 60 ft. *Hit*: 15 (2d12 + 2) bludgeoning + DC 13 Str save or prone.
- **Mud to Stone (Recharge 6)**: 30-ft sphere: DC 13 Dex save or 13 (3d8) bludgeoning and restrained; repeat save or **petrified for 24 hours**.

### Fensir Devourer
*Huge Celestial, Typically Chaotic Neutral* | **CR 8** (3,900 XP) | PB +3
- **AC**: 17 | **HP**: 138 (12d12 + 60) | **Speed**: 40 ft. | **STR**: 20 (+5), **CON**: 21 (+5)
- **Death Curse**: Slain without regenerating: DC 13 Cha save or cursed: gains no benefit from rests, and must make hourly DC 13 Cha saves or take 11 (2d10) psychic damage.
- **Rend**: *+8 to hit*, reach 10 ft. *Hit*: 21 (3d10 + 5) slashing.
- **Boulder**: *+8 to hit*, range 60/240 ft. *Hit*: 18 (2d12 + 5) bludgeoning + DC 16 Str save or prone.

---

## 🍃 Firbolgs

### Firbolg Primeval Warden
*Medium Humanoid (Druid), Any Alignment* | **CR 4** (1,100 XP) | PB +2
- **AC**: 16 | **HP**: 65 (10d8 + 20) | **Speed**: 30 ft. | **WIS**: 16 (+3)
- **Spear**: *+5 to hit*. *Hit*: 6 (1d6 + 3) piercing + 9 (2d8) fire damage.
- **Fire Lance**: *+5 to hit*, range 120 ft. *Hit*: 14 (2d10 + 3) fire damage.
- **Spells**: *entangle*, *speak with animals*, *speak with plants*, *commune with nature*, *detect magic*, *disguise self*.
- **Hidden Step (2/Day)**: Bonus action turns invisible until start of next turn.

### Firbolg Wanderer
*Medium Humanoid (Cleric), Any Alignment* | **CR 5** (1,800 XP) | PB +3
- **AC**: 16 | **HP**: 90 (12d8 + 36) | **Speed**: 30 ft. | **WIS**: 17 (+3)
- **Longsword**: *+6 to hit*. *Hit*: 7 (1d8 + 3) slashing (or 8 two-handed) plus 9 (2d8) psychic damage.
- **Bewitching Bolt**: Range 60 ft. *Hit*: 10 (2d6 + 3) psychic damage + DC 14 Cha save or charmed.
- **Duplicitous Movement (1/Day)**: Projects illusory duplicate within 30 ft, can swap places as bonus action.

---

## 🔥 Firegaunt
*Huge Undead, Typically Lawful Evil* | **CR 11** (7,200 XP) | PB +4
- **AC**: 15 | **HP**: 175 (14d12 + 84) | **Speed**: 40 ft. | **STR**: 25 (+7), **CON**: 23 (+6)
- **Fire Blood**: When hit within 5 ft by piercing/slashing, attacker takes **5 (1d10) fire damage**.
- **Heated Maul**: *+11 to hit*, reach 10 ft. *Hit*: 23 (3d10 + 7) bludgeoning + DC 18 Dex save or 10 (3d6) fire + 10 (3d6) necrotic.
- **Crimson Rays (Recharge 5–6)**: 30-ft cone: DC 18 Dex save or **31 (7d8) fire damage**, catches fire (takes 5 (1d10) fire damage at start of turns and can't regain HP until put out).

---

## 🔨 Fire Giant Forgecaller
*Huge Giant (Cleric), Any Alignment* | **CR 18** (20,000 XP) | PB +6
- **AC**: 18 (plate) | **HP**: 312 (25d12 + 150) | **Speed**: 30 ft., fly 30 ft. (hover)
- **STR**: 25 (+7), **CON**: 23 (+6), **WIS**: 21 (+5) | **Legendary Resistance (3/Day)**
- **Fire Rune**: Inscribed on medallion (AC 15, 40 HP). Enables Magma Wave and Furnace Armor.
- **Forge Hammer**: *+13 to hit*, reach 10 ft. *Hit*: 24 (5d6 + 7) bludgeoning, and emits heat: DC 19 Con save or 10 (3d6) fire damage and disadvantage on attacks.
- **Heated Rock**: *+13 to hit*, range 60/240 ft. *Hit*: 23 (3d10 + 7) bludgeoning + 19 (3d12) fire.
- **Magma Wave (Requires Fire Rune)**: 30-ft cone: DC 19 Dex save or **36 (8d8) fire damage** and restrained in hardening rock (half on save).
- **Furnace Armor (Bonus Action)**: Smoke and cinders billow in 30-ft radius (half cover for giant).

---

## 🔥 Fire Giant of Evil Fire
*Huge Giant, Typically Lawful Evil* | **CR 10** (5,900 XP) | PB +4
- **AC**: 18 | **HP**: 150 (12d12 + 72) | **Speed**: 30 ft. | **STR**: 25 (+7), **CON**: 23 (+6)
- **Shrapnel Explosion**: Dies: armor explodes: creatures within 10 ft make DC 18 Dex save or take **21 (6d6) piercing damage** (half on save).
- **Searing Scepter**: *+11 to hit*, reach 10 ft. *Hit*: 17 (3d6 + 7) bludgeoning + 9 (2d8) fire + magically branded (can't become invisible, sheds light).
- **Bolt of Imix**: Range 120 ft. *Hit*: 20 (3d10 + 4) fire + DC 16 Wis save or frightened.

---

## 😈 Fire Hellion
*Huge Fiend (Devil), Typically Lawful Evil* | **CR 11** (7,200 XP) | PB +4
- **AC**: 18 (plate) | **HP**: 175 (14d12 + 84) | **Speed**: 30 ft. | **STR**: 25 (+7), **CHA**: 21 (+5)
- **Soul Taker**: Slain creatures rise as lemures in Avernus.
- **Morningstar**: *+11 to hit*, reach 10 ft. *Hit*: 20 (3d8 + 7) piercing + 11 (2d10) fire + target can't regain HP until start of hellion's next turn.
- **Infernal Orb**: 20-ft radius sphere within 120 ft: DC 17 Dex save or **18 (4d8) fire + 18 (4d8) necrotic damage** (half on save).

---

## 💀 Flesh Colossus
*Gargantuan Construct, Unaligned* | **CR 20** (25,000 XP) | PB +6
- **AC**: 14 (natural armor) | **HP**: 280 (16d20 + 112) | **Speed**: 60 ft.
- **STR**: 24 (+7), **CON**: 24 (+7) | **Damage Immunities**: lightning, poison, psychic; nonmagical b/p/s
- **Berserk**: Attacks nearest creature if stone core inside is destroyed.
- **Fist**: *+13 to hit*, reach 20 ft. *Hit*: 17 (3d6 + 7) bludgeoning + pulled 15 ft + grappled (escape DC 17).
- **Elemental Breath (Recharge 5–6)**: 90-ft cone: DC 21 Dex save or **40 (9d8) damage** of acid, cold, fire, or lightning. Creatures swallowed in chest cavity take 40 (9d8) force damage.
- **Bite / Swallow (Bonus Action)**: Swallows grappled creature into chest cavity (holds up to 2). Inside takes **10 (3d6) force damage** per turn.
`
  }
];
