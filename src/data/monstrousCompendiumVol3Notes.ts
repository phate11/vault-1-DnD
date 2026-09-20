import { VaultNote } from '../types';

export const monstrousCompendiumVol3Notes: VaultNote[] = [
  {
    id: "monstrous-compendium-vol-3-minecraft",
    title: "Monstrous Compendium Vol. 3: Minecraft Creatures",
    folder: "Adventures & Settings/Minecraft Compendium",
    category: "Creature",
    tags: ["minecraft", "monstrous-compendium", "bestiary", "ender-dragon", "creeper", "enderman", "blaze", "wolf"],
    aliases: [
      "Blaze", "Creeper", "Ender Dragon", "Enderman", "Wolf of the Overworld",
      "End Crystals", "Ender Pearl", "Blaze Rod"
    ],
    content: `---
title: Monstrous Compendium Vol. 3: Minecraft Creatures
category: Creature
folder: Adventures & Settings/Minecraft Compendium
tags: [minecraft, monstrous-compendium, bestiary, ender-dragon, creeper, enderman, blaze, wolf]
---

# Monstrous Compendium Vol. 3: Minecraft Creatures

Official D&D 5e conversions for the five iconic mobs from Minecraft: Blaze, Creeper, Ender Dragon, Enderman, and Wolf of the Overworld.

---

## 🔥 Blaze
*Medium Elemental, Typically Neutral Evil* | **CR 5** (1,800 XP) | PB +3
- **AC**: 13 | **HP**: 75 (10d8 + 30) | **Speed**: 20 ft., fly 20 ft. (vertical movement only; hover)
- **STR**: 16 (+3), **DEX**: 17 (+3), **CON**: 16 (+3)
- **Damage Resistances**: Nonmagical B/P/S | **Damage Immunities**: Fire
- **Condition Immunities**: Exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained
- **Blaze Rod**: When destroyed, 50% chance of leaving a glowing rod worth 100 gp (sheds 5 ft dim light). A creature can snap it (DC 14 Str check) to release a 5-ft-radius fiery blast: DC 14 Dex save or **6 (1d12) fire damage**.
- **Heat Aura**: Creatures starting turn within 5 ft take **3 (1d6) fire damage**.
- **Water Susceptibility**: Takes 1 cold damage per 5 ft moved in water, per gallon splashed, or starting turn in rain.
- **Actions**:
  - **Multiattack**: Three Fiery Doom attacks.
  - **Fiery Doom**: Melee or Ranged Spell (+6 to hit, reach 5 ft or range 60 ft). *Hit*: **8 (1d10 + 3) fire damage**, and target catches fire (takes 1d6 fire damage at end of each turn until action used to extinguish).

---

## 🧨 Creeper
*Medium Monstrosity, Typically Neutral Evil* | **CR 1/2** (100 XP) | PB +2
- **AC**: 12 (natural armor) | **HP**: 19 (3d8 + 6) | **Speed**: 30 ft.
- **STR**: 10 (+0), **CON**: 14 (+2), **DEX**: 11 (+0)
- **Damage Immunities**: Lightning | **Condition Immunities**: Exhaustion
- **Bizarre Physiology**: Can only take Dash, Disengage, Hide, and Search actions. No bonus actions or reactions.
- **Fear of Felines**: Frightened whenever starting turn within 60 ft of a feline creature it can see.
- **Electrical Charge**: When hit by lightning damage, takes 0 damage and becomes charged for 1 minute (glows blue 5 ft).
- **Creeper Head**: If slain by a charged creeper's blast, drops a wearable hollow head.
- **Destruction**: When ending turn within 10 ft of a Humanoid it sees, it stops and hisses (audible 30 ft). At start of next turn:
  - If Humanoids are still within 10 ft, it **explodes in a 20-foot-radius sphere**: DC 12 Dex save or **14 (4d6) force damage** (half on success).
  - *Charged Damage*: Deals **21 (6d6) force damage** to creatures and objects!

---

## 🟣 Ender Dragon & End Crystals
*Gargantuan Dragon, Chaotic Evil* | **CR 19** (22,000 XP) | PB +6
- **AC**: 22 (natural armor) | **HP**: 350 (20d20 + 140) | **Speed**: 30 ft., fly 120 ft.
- **STR**: 27 (+8), **CON**: 25 (+7), **CHA**: 19 (+4) | Darkvision 240 ft.
- **Dragon Egg**: On 0 HP, radiates beams of purple light and leaves an inert, jet-black dragon egg worth 5,000 gp.
- **Legendary Resistance (4/Day)**.
- **Actions**:
  - **Multiattack**: One Bite and Beating Wings.
  - **Bite**: *+14 to hit*, reach 15 ft. *Hit*: 18 (3d6 + 8) piercing + **7 (2d6) necrotic**.
  - **Beating Wings**: 15-ft radius: DC 21 Dex save or **10 (1d4 + 8) bludgeoning**, pushed 10 ft, and knocked prone.
  - **Harmful Breath (Recharge 5–6)**: 60-ft cone; DC 21 Con save or **52 (15d6) necrotic damage** (half on success). Creates a 10-ft-high, 10-ft-radius cylinder of lingering gas until next turn (**10 (3d6) necrotic damage** on start of turn).

### End Crystals
- **Object Stats**: AC 11, 30 HP, vulnerable to bludgeoning/thunder, immune to poison/psychic.
- **Crystal Healing**: When dragon ends turn within 60 ft of an End Crystal, it regains **20 hit points**.
- **Destructive Explosion**: When destroyed, explodes in a 20-ft sphere: DC 15 Dex save or **21 (6d6) force damage**.

---

## 🌌 Enderman
*Medium Aberration, Typically Chaotic Neutral* | **CR 6** (2,300 XP) | PB +3
- **AC**: 14 | **HP**: 78 (12d8 + 24) | **Speed**: 40 ft.
- **STR**: 15 (+2), **DEX**: 18 (+4), **WIS**: 18 (+4) | Darkvision 60 ft.
- **Languages**: Endspeech
- **Evasive Teleportation**: Whenever taking damage or targeted by a ranged attack, immediately teleports up to 20 feet (causing ranged attacks to miss!).
- **Implosion**: On 0 HP, roll d10. On a 10, leaves behind a glowing purple **Ender pearl** worth 500 gp (can be thrown 60 ft to teleport the thrower).
- **Sunlight Sensitivity & Water Susceptibility**: Disadvantage in sunlight; 1 cold damage per 5 ft in water or rain.
- **Multiattack**: Two Slams (*+7 to hit*, reach 10 ft). *Hit*: 8 bludgeoning + **9 (2d8) necrotic**.

---

## 🐺 Wolf of the Overworld
*Medium Beast, Unaligned* | **CR 1/4** (50 XP) | PB +2
- **AC**: 13 (natural armor) | **HP**: 11 (2d8 + 2) | **Speed**: 40 ft.
- **Pack Tactics**: Advantage on attacks if ally within 5 ft is not incapacitated.
- **Bite**: *+4 to hit*, reach 5 ft. *Hit*: 7 (2d4 + 2) piercing; DC 11 Str save or knocked prone.
- **Behavior**: Instinctively hostile toward animated skeletons. Can be tamed by feeding and caring for them.

---

*Related notes: [[Boo's Astral Menagerie - Bestiary Part 1 (A to G)]], [[The Draconomicon: Part 1 (Amethyst to Emerald)]], [[Monstrous Compendium Vol. 1: Spelljammer Creatures]].*
`
  }
];
