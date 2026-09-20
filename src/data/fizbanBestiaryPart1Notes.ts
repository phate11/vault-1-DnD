import { VaultNote } from '../types';

export const fizbanBestiaryPart1Notes: VaultNote[] = [
  {
    id: "fizban-bestiary-part-1",
    title: "Fizban's Treasury Bestiary - Part 1 (Amethyst to Dragonbone Golem)",
    folder: "Fizban's Treasury of Dragons/Bestiary",
    category: "Creature",
    tags: ["fizbans", "bestiary", "dragons", "amethyst", "bahamut", "tiamat", "greatwyrm", "crystal", "deep", "draconians"],
    aliases: [
      "Ancient Amethyst Dragon", "Adult Amethyst Dragon", "Young Amethyst Dragon", "Amethyst Dragon Wyrmling",
      "Animated Breath", "Aspect of Bahamut", "Aspect of Tiamat", "Chromatic Greatwyrm",
      "Ancient Crystal Dragon", "Adult Crystal Dragon", "Young Crystal Dragon", "Crystal Dragon Wyrmling",
      "Ancient Deep Dragon", "Adult Deep Dragon", "Young Deep Dragon", "Deep Dragon Wyrmling",
      "Dracohydra", "Draconian Dreadnought", "Draconian Foot Soldier", "Draconian Infiltrator",
      "Draconian Mage", "Draconian Mastermind", "Draconic Shard", "Dragonblood Ooze", "Dragonbone Golem"
    ],
    content: `---
title: Fizban's Treasury Bestiary - Part 1 (Amethyst to Dragonbone Golem)
category: Creature
folder: Fizban's Treasury of Dragons/Bestiary
tags: [fizbans, bestiary, dragons, amethyst, bahamut, tiamat, greatwyrm, crystal, deep, draconians]
---

# Fizban's Treasury Bestiary: Part 1

Complete 5e stat blocks and combat mechanics from *Fizban's Treasury of Dragons* Chapter 6.

---

## 🔮 Amethyst Dragons

### Ancient Amethyst Dragon
*Gargantuan Dragon (Gem), Typically Neutral* | **CR 23** (50,000 XP) | PB +7
- **AC**: 20 (natural armor) | **HP**: 444 (24d20 + 192) | **Speed**: 40 ft., fly 80 ft. (hover), swim 40 ft.
- **STR**: 26 (+8), **DEX**: 14 (+2), **CON**: 27 (+8), **INT**: 26 (+8), **WIS**: 19 (+4), **CHA**: 23 (+6)
- **Saves**: Dex +9, Con +15, Wis +11, Cha +13 | **Skills**: Arcana +22, Perception +18, Persuasion +13, Stealth +9
- **Resistances**: Force, psychic | **Condition Immunities**: Frightened, prone
- **Senses**: Blindsight 60 ft., darkvision 120 ft., passive Perception 28 | **Languages**: Common, Draconic, telepathy 120 ft.
- **Amphibious**: Breathe air and water. | **Legendary Resistance (3/Day)**.
- **Actions**:
  - **Multiattack**: One Bite and two Claws.
  - **Bite**: *+15 to hit*, reach 15 ft. *Hit*: 19 (2d10 + 8) piercing + 13 (3d8) force.
  - **Claw**: *+15 to hit*, reach 10 ft. *Hit*: 15 (2d6 + 8) slashing.
  - **Singularity Breath (Recharge 5–6)**: 90-ft cone; DC 23 Str save. Failed: **63 (14d8) force damage**, and speed becomes 0 until start of dragon's next turn. Success: half damage, speed not reduced.
  - **Spellcasting (Psionics; DC 23, +15 to hit)**: 1/day each: *blink*, *control water*, *dispel magic*, *freedom of movement*, *globe of invulnerability*, *plane shift*, *protection from evil and good*, *sending*.
- **Bonus Actions**:
  - **Change Shape**: Magically transforms into Medium or Small creature.
  - **Psychic Step**: Teleport up to 60 ft.
- **Legendary Actions (3/Turn)**: Claw (1 action); Psionics (2 actions: Psychic Step or Spellcasting); Explosive Crystal (3 actions: explodes at point in 60 ft; DC 23 Dex save, 18 (4d8) force damage and knocked prone).

### Adult Amethyst Dragon
*Huge Dragon (Gem), Typically Neutral* | **CR 16** (15,000 XP) | PB +5
- **AC**: 19 | **HP**: 229 (17d12 + 119) | **Speed**: 40 ft., fly 80 ft. (hover), swim 40 ft.
- **STR**: 25 (+7), **CON**: 25 (+7), **INT**: 20 (+5), **WIS**: 17 (+3), **CHA**: 21 (+5)
- **Singularity Breath (Recharge 5–6)**: 60-ft cone; DC 20 Str save. **45 (10d8) force damage** and speed 0 on fail.
- **Psionics (DC 18)**: *blink*, *control water*, *dispel magic*, *protection from evil and good*, *sending*.

### Young Amethyst Dragon
*Large Dragon (Gem), Typically Neutral* | **CR 9** (5,000 XP) | PB +4
- **AC**: 18 | **HP**: 168 (16d10 + 80) | **Speed**: 40 ft., fly 80 ft. (hover), swim 40 ft.
- **Singularity Breath (Recharge 5–6)**: 30-ft cone; DC 17 Str save. **36 (8d8) force damage** and speed 0 on fail.
- **Psionics (DC 16)**: *blink*, *dispel magic*, *protection from evil and good*, *sending*.

### Amethyst Dragon Wyrmling
*Medium Dragon (Gem), Typically Neutral* | **CR 4** (1,100 XP) | PB +2
- **AC**: 17 | **HP**: 75 (10d8 + 30) | **Speed**: 30 ft., fly 60 ft. (hover), swim 30 ft.
- **Singularity Breath (Recharge 5–6)**: 15-ft cone; DC 13 Str save. **22 (5d8) force damage** and speed 0 on fail.
- **Psionics (DC 13)**: *protection from evil and good*, *Tenser's floating disk*, *unseen servant*.

---

## 💨 Animated Breath
*Large Elemental, Typically Neutral Evil* | **CR 6** (2,300 XP) | PB +3
- **AC**: 15 (natural armor) or 17 (Cold form only) | **HP**: 95 (10d10 + 40) | **Speed**: 30 ft., fly 30 ft. (hover)
- **STR**: 19 (+4), **CON**: 18 (+4), **WIS**: 10 (+0)
- **Damage Resistances**: Type matching form (acid, cold, fire, lightning, or poison)
- **Condition Immunities**: Exhaustion, paralyzed, petrified, poisoned, restrained, unconscious
- **Chromatic Form**: Acid, Cold, Fire, Lightning, or Poison form.
- **Fire Aura (Fire only)**: Creatures starting turn within 5 ft take 3 (1d6) fire damage.
- **Putrid Aura (Acid/Poison only)**: 5 ft DC 15 Con save or poisoned until next turn.
- **Actions**: Multiattack (two Slams: *+7 to hit*, reach 5 ft., 13 bludgeoning + 11 (2d10) elemental damage).
- **Bonus Action (Lightning only)**: Lightning Burst (teleports 30 ft, dealing 1d6 lightning to adjacent creatures).

---

## 👑 Aspect of Bahamut
*Gargantuan Dragon (Metallic), Lawful Good* | **CR 30** (155,000 XP / 310,000 XP total) | PB +9
- **AC**: 23 (natural armor) | **HP**: 585 (30d20 + 270) | **Speed**: 60 ft., burrow 60 ft., fly 120 ft., swim 60 ft.
- **STR**: 30 (+10), **DEX**: 18 (+4), **CON**: 29 (+9), **INT**: 25 (+7), **WIS**: 28 (+9), **CHA**: 30 (+10)
- **Saves**: Con +18, Int +16, Wis +18, Cha +19 | **Skills**: Insight +18, Perception +18, Persuasion +19
- **Immunities**: Acid, cold, fire, lightning, radiant; nonmagical B/P/S; Charmed, deafened, frightened, paralyzed, stunned
- **Senses**: Truesight 120 ft., passive Perception 28 | **Languages**: Common, Draconic
- **Platinum Brilliance (Recharges after Short or Long Rest)**: If reduced to 0 HP, resets to **500 HP**, recharges Breath Weapon, regains Legendary Resistance, and unlocks Mythic Actions for 1 hour.
- **Legendary Resistance (5/Day)**.
- **Actions**:
  - **Multiattack**: One Bite, one Claw, one Tail.
  - **Bite**: *+19 to hit*, reach 20 ft. *Hit*: 23 (2d12 + 10) piercing + 22 (4d10) force.
  - **Claw**: *+19 to hit*, reach 15 ft. *Hit*: 21 (2d10 + 10) slashing, and Huge or smaller target is grappled (escape DC 20) and restrained.
  - **Tail**: *+19 to hit*, reach 15 ft. *Hit*: 23 (2d12 + 10) bludgeoning (DC 27 Str or prone).
  - **Breath Weapon (Recharge 5–6)**: Choose one:
    - *Exalting Breath*: 300-ft cone. Chosen creatures regain **71 (13d10) HP**, and dead creatures (dead <= 1 hr) return to life with full HP.
    - *Platinum Breath*: 300-ft cone. DC 26 Dex save or take **66 (12d10) radiant damage** (half on success).
- **Mythic Actions**:
  - *Celestial Shield (Costs 2 Actions)*: Manifests seven spectral gold dragons; gains **77 temporary HP**.
  - *Celestial Lances (Costs 3 Actions)*: Four 100-ft cylinders within 150 ft; DC 27 Dex save or **24 (7d6) force damage**.

---

## 🐉 Aspect of Tiamat
*Gargantuan Dragon (Chromatic), Chaotic Evil* | **CR 30** (155,000 XP / 310,000 XP total) | PB +9
- **AC**: 23 (natural armor) | **HP**: 574 (28d20 + 280) | **Speed**: 60 ft., burrow 60 ft., fly 120 ft., swim 60 ft.
- **STR**: 30 (+10), **DEX**: 14 (+2), **CON**: 30 (+10), **INT**: 21 (+5), **WIS**: 20 (+5), **CHA**: 26 (+8)
- **Immunities**: Acid, cold, fire, lightning, poison; nonmagical B/P/S; Blinded, charmed, deafened, frightened, poisoned, stunned
- **Chromatic Wrath (Recharges after Short or Long Rest)**: If reduced to 0 HP, resets to **500 HP**, recharges Chromatic Flames, regains Legendary Resistance, and unlocks Mythic Actions.
- **Legendary Resistance (5/Day)**.
- **Actions**:
  - **Multiattack**: One Bite, one Claw, one Tail.
  - **Bite**: *+19 to hit*, reach 20 ft. *Hit*: 23 (2d12 + 10) piercing + 19 (3d12) force.
  - **Claw**: *+19 to hit*, reach 15 ft. *Hit*: 21 (2d10 + 10) slashing (DC 20 grapple/restrain).
  - **Tail**: *+19 to hit*, reach 15 ft. *Hit*: 23 (2d12 + 10) bludgeoning (DC 27 Str or prone).
  - **Chromatic Flames (Recharge 5–6)**: 300-ft cone. DC 27 Dex save, taking **71 (11d12) damage** of chosen chromatic type: acid, cold, fire, lightning, or poison.
- **Mythic Actions**:
  - *Hurl Through Avernus (Costs 2 Actions)*: Target grappled creature makes DC 25 Cha save or takes **44 (8d10) psychic damage** and is banished to Avernus until start of Tiamat's next turn.
  - *Chromatic Flare (Costs 3 Actions)*: 60-ft-radius sphere; DC 27 Dex save or **39 (6d12) elemental damage**.

---

## ⚡ Chromatic Greatwyrm
*Gargantuan Dragon (Chromatic), Typically Chaotic Evil* | **CR 27** (105,000 XP / 210,000 XP total) | PB +8
- **AC**: 22 | **HP**: 533 (26d20 + 260) | **Speed**: 60 ft., burrow 60 ft., fly 120 ft., swim 60 ft.
- **Damage Immunities**: Acid (black), cold (white), fire (red), lightning (blue), or poison (green)
- **Chromatic Awakening**: Resets to **425 HP** at 0 HP; unlocks Mythic Actions.
- **Breath Weapon (Recharge 5–6)**: 300-ft cone; DC 26 Dex save or **78 (12d12) damage**.
- **Mythic Action - Chromatic Flare (Costs 2 Actions)**: 60-ft-radius sphere; DC 26 Dex save or **22 (5d8) elemental damage**.

---

## 💎 Crystal Dragons (Ancient to Wyrmling)
- **Ancient Crystal Dragon** (*CR 19*, 222 HP, AC 20): Scintillating Breath (90-ft cone, **49 radiant damage**, dragon gains 25 temp HP); Starlight Strike (38 radiant).
- **Adult Crystal Dragon** (*CR 12*, 172 HP, AC 16): Scintillating Breath (60-ft cone, **40 radiant damage**, dragon gains 15 temp HP).
- **Young Crystal Dragon** (*CR 5*, 95 HP, AC 15): Scintillating Breath (30-ft cone, **27 radiant damage**, dragon gains 10 temp HP).
- **Crystal Dragon Wyrmling** (*CR 2*, 32 HP, AC 14): Scintillating Breath (15-ft cone, **18 radiant damage**, dragon gains 5 temp HP).

---

## 🍄 Deep Dragons (Ancient to Wyrmling)
- **Ancient Deep Dragon** (*CR 18*, 201 HP, AC 20): Nightmare Breath (90-ft cone, DC 19 Wis save, **49 psychic damage** and frightened 1 min); Spore Salvo (28 poison damage).
- **Adult Deep Dragon** (*CR 11*, 147 HP, AC 17): Nightmare Breath (60-ft cone, **33 psychic damage** and frightened).
- **Young Deep Dragon** (*CR 5*, 93 HP, AC 16): Nightmare Breath (30-ft cone, **22 psychic damage** and frightened).
- **Deep Dragon Wyrmling** (*CR 1*, 27 HP, AC 15): Nightmare Breath (15-ft cone, **5 psychic damage** and frightened).

---

## 🐍 Dracohydra
*Huge Monstrosity, Typically Chaotic Evil* | **CR 11** (7,200 XP) | PB +4
- **AC**: 17 | **HP**: 218 (19d12 + 95) | **Speed**: 30 ft., fly 30 ft., swim 30 ft.
- **Multiple Heads**: Starts with 5 heads. Whenever it takes 30+ damage in a single turn, one head dies. Regrows two heads at end of turn (unless it took radiant damage), regaining 10 HP per head.
- **Reactive Heads**: Extra reaction for opportunity attacks for each head beyond one.
- **Prismatic Breath (Recharge 4–6)**: 60-ft cone; DC 17 Dex save or **33 (6d10) damage** of chosen chromatic type.

---

## ⚔️ Draconians

### Draconian Dreadnought (from Silver/Blue/Sapphire Eggs)
*Large Monstrosity, Any Alignment* | **CR 4** (1,100 XP) | PB +2
- **AC**: 16 | **HP**: 57 (6d10 + 24) | **Speed**: 30 ft., fly 60 ft.
- **Death Throes**: Bursts into flames; 10-ft sphere DC 13 Dex save or **10 (3d6) fire damage**.
- **Shape Theft (Reaction)**: Magically mimics Medium/smaller Humanoid it killed.

### Draconian Foot Soldier (from Brass/White/Crystal Eggs)
*Medium Monstrosity, Any Alignment* | **CR 1/2** (100 XP) | PB +2
- **AC**: 14 | **HP**: 22 (4d8 + 4) | **Speed**: 30 ft. (Controlled Fall 100 ft).
- **Death Throes**: Turns to stone releasing petrifying gas (5-ft sphere DC 11 Con save or restrained/petrified).

### Draconian Infiltrator (from Copper/Black/Topaz Eggs)
*Medium Monstrosity, Any Alignment* | **CR 3** (700 XP) | PB +2
- **AC**: 15 | **HP**: 39 (6d8 + 12) | **Speed**: 40 ft., climb 30 ft. (Glide).
- **Death Throes**: Dissolves into a pool of acid; 5 ft DC 12 Dex save or covered in acid (**2d6 acid damage** per turn).
- **Paralytic Dagger**: Hit with two daggers forces DC 12 Con save or poisoned and paralyzed.

### Draconian Mage (from Bronze/Green/Emerald Eggs)
*Medium Monstrosity, Any Alignment* | **CR 2** (450 XP) | PB +2
- **AC**: 15 | **HP**: 40 (9d8) | **Speed**: 30 ft. (Glide).
- **Death Throes**: Bones explode into magical splinters; 10 ft DC 10 Dex save or **9 (2d8) force damage**.
- **Spells (DC 12)**: *enlarge/reduce*, *invisibility*, *stinking cloud*.

### Draconian Mastermind (from Gold/Red/Amethyst Eggs)
*Medium Monstrosity, Any Alignment* | **CR 6** (2,300 XP) | PB +3
- **AC**: 17 | **HP**: 67 (9d8 + 27) | **Speed**: 35 ft. | Truesight 60 ft.
- **Death Throes**: Ball of lightning strikes nearest target within 30 ft then arcs to two more: DC 14 Dex save or **9 (2d8) lightning damage and stunned**.
- **Noxious Breath (Recharge 5–6)**: 15-ft cone; DC 14 Con save or **21 (6d6) poison damage and 1 level of exhaustion**.
- **Magic Shield (3/Day, Reaction)**: +5 bonus to AC against an attack roll.

---

## 🔮 Draconic Shard, Dragonblood Ooze & Dragonbone Golem

### Draconic Shard
*Huge Undead, Typically Neutral* | **CR 17** (18,000 XP) | PB +6
- **AC**: 17 (Deflection) | **HP**: 168 (16d12 + 64) | **Speed**: 0 ft., fly 80 ft. (hover)
- **Inhabit Object**: Magically possesses a Medium or smaller non-sentient object. Bearer deals extra **1d8 force damage** on attacks and gains psychic resistance.
- **Psychic Crush (Recharge 5–6)**: 60-ft sphere; DC 20 Int save or **55 (10d10) psychic damage and stunned**.
- **Rejuvenation**: On 0 HP, leaves cracked gemstone (AC 20, 15 HP); re-forms in 1d20 days unless destroyed.

### Dragonblood Ooze
*Large Ooze, Unaligned* | **CR 5** (1,800 XP) | PB +3
- **AC**: 14 | **HP**: 68 (8d10 + 24) | **Speed**: 20 ft., climb 20 ft. (Amorphous, Spider Climb)
- **Slime Breath (Recharge 6)**: 30-ft cone; DC 14 Dex save or **22 (4d10) acid damage** and pulled up to 30 feet toward ooze.

### Dragonbone Golem
*Large Construct, Unaligned* | **CR 11** (7,200 XP) | PB +4
- **AC**: 17 | **HP**: 161 (19d10 + 57) | **Speed**: 40 ft. (Magic Resistance, Fear Aura 20 ft)
- **Pinion**: *+9 to hit*, reach 5 ft. *Hit*: 12 piercing; pins Medium or smaller target (DC 17 Athletics escape).
- **Petrifying Breath (Recharge 5–6)**: 60-ft cone; DC 15 Con save or **35 (10d6) poison damage** and restrained/petrified.

---

*Continue to [[Fizban's Treasury Bestiary - Part 2]] for Greatwyrms, Sentinels, Moonstone, Sapphire, and Topaz Dragons.*
`
  }
];
