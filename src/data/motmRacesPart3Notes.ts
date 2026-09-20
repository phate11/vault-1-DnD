import { VaultNote } from '../types';

export const motmRacesPart3Notes: VaultNote[] = [
  {
    id: "motm-races-part-3",
    title: "Monsters of the Multiverse - Fantastical Races (Part 3: Minotaur to Yuan-ti)",
    folder: "Monsters of the Multiverse/Races",
    category: "Race",
    tags: [
      "motm", "races", "minotaur", "orc", "satyr", "sea-elf",
      "shadar-kai", "shifter", "tabaxi", "tortle", "triton", "yuan-ti"
    ],
    aliases: [
      "MotM Minotaur", "MotM Orc", "MotM Satyr", "MotM Sea Elf",
      "MotM Shadar-kai", "MotM Shifter", "MotM Tabaxi", "MotM Tortle",
      "MotM Triton", "MotM Yuan-ti", "MotM Yuan-ti Pureblood"
    ],
    content: `---
title: Monsters of the Multiverse - Fantastical Races (Part 3: Minotaur to Yuan-ti)
category: Race
folder: Monsters of the Multiverse/Races
tags: [motm, races, minotaur, orc, satyr, sea-elf, shadar-kai, shifter, tabaxi, tortle, triton, yuan-ti]
source: Mordenkainen Presents: Monsters of the Multiverse (Chapter 1)
---

# Fantastical Races: Part 3 (Minotaur to Yuan-ti)

---

## 🐂 21. Minotaur
Barrel-chested humanoids with the heads of bulls and cloven hooves, gifted with unerring direction sense and deadly goring charges.

### Minotaur Traits
- **Creature Type**: Humanoid.
- **Size**: Medium.
- **Speed**: 30 ft.
- **Horns**: Horns make unarmed strikes dealing **1d6 + Str modifier** piercing damage.
- **Goring Rush**: Immediately after taking the Dash action and moving at least 20 feet on your turn, make one melee attack with your **Horns as a bonus action**.
- **Hammering Horns**: Immediately after hitting a creature with a melee attack as part of the Attack action on your turn, use a **bonus action** to attempt to push the target with your horns (within 5 ft, no more than one size larger). Target must succeed on a Strength saving throw (DC 8 + PB + Str mod) or be **pushed up to 10 feet away**.
- **Labyrinthine Recall**: Always know which direction is north, and have **advantage on Wisdom (Survival)** checks to navigate or track.

---

## ⚔️ 22. Orc
Tireless guardians and unstoppable warriors blessed by Gruumsh with extraordinary vitality, relentless endurance, and adrenal surges.

### Orc Traits
- **Creature Type**: Humanoid.
- **Size**: Medium.
- **Speed**: 30 ft.
- **Darkvision**: 60 ft.
- **Adrenaline Rush**: You can take the **Dash action as a bonus action**. Whenever you use this trait, you gain **temporary hit points equal to your proficiency bonus** (**PB times per long rest**).
- **Powerful Build**: Count as one size larger when determining carrying capacity and weight you can push, drag, or lift.
- **Relentless Endurance**: When reduced to 0 hit points but not killed outright, you drop to **1 hit point instead** (1/long rest).

---

## 🐐 23. Satyr
Merry fey wanderers of the Feywild with goat legs, cloven hooves, and horns, possessing an irrepressible flair for performance and magic resistance.

### Satyr Traits
- **Creature Type**: **Fey**.
- **Size**: Medium.
- **Speed**: **35 ft**.
- **Ram**: Horns deal **1d6 + Str modifier** bludgeoning damage on unarmed strikes.
- **Magic Resistance**: **Advantage on saving throws against spells**.
- **Mirthful Leaps**: Whenever you make a long jump or high jump, roll **1d8** and add the number rolled to the feet covered (even when standing jump; costs movement).
- **Reveler**: Proficiency in the **Performance** and **Persuasion** skills, and proficiency with one **musical instrument** of your choice.

---

## 🌊 24. Sea Elf
Ocean-dwelling elves who explored the currents of the multiverse and bonded with the Elemental Plane of Water. Live over 750 years.

### Sea Elf Traits
- **Creature Type**: Humanoid (also considered an **elf**).
- **Size**: Medium.
- **Speed**: 30 ft. walking, **30 ft. swimming**.
- **Child of the Sea**: Can breathe air and water, and have **resistance to cold damage**.
- **Darkvision**: 60 ft.
- **Fey Ancestry**: Advantage on saves vs charmed.
- **Friend of the Sea**: Communicate simple ideas to any Beast that has a swimming speed.
- **Keen Senses**: Proficiency in the **Perception** skill.
- **Trance**: 4-hour long rest meditation. Whenever you finish this trance, you can gain two weapon or tool proficiencies of your choice from the *Player's Handbook*.

---

## 💀 25. Shadar-kai
Elves of the Shadowfell who serve the Raven Queen, suspended between life and death with ashen skin and ghostly teleportation. Live over 750 years.

### Shadar-kai Traits
- **Creature Type**: Humanoid (also considered an **elf**).
- **Size**: Medium.
- **Speed**: 30 ft.
- **Darkvision**: 60 ft.
- **Fey Ancestry**: Advantage on saves vs charmed.
- **Keen Senses**: Proficiency in **Perception**.
- **Necrotic Resistance**: Resistance to **necrotic damage**.
- **Trance**: 4-hour meditation long rest with daily weapon/tool proficiencies swap.
- **Blessing of the Raven Queen**: As a bonus action, magically teleport up to 30 feet to an unoccupied space you see (**proficiency bonus times per long rest**).
  - *Starting at 3rd level*: You also gain **resistance to ALL damage** when you teleport using this trait! This universal resistance lasts until the start of your next turn, during which you appear ghostly and translucent.

---

## 🐺 26. Shifter
Descendants of humanoids who contracted lycanthropy ("weretouched"), capable of entering a feral transformation called shifting.

### Lycanthrope Ancestor Table (1d6)
| d6 | Ancestor | Suggested Shifting Option |
|:--:|:---------|:--------------------------|
| 1 | Werebear | **Beasthide** |
| 2 | Wereboar | **Beasthide** |
| 3 | Wererat | **Swiftstride** |
| 4 | Weretiger | **Swiftstride** |
| 5 | Werewolf (wolflike) | **Longtooth** |
| 6 | Werewolf (doglike) | **Wildhunt** |

### Shifter Traits
- **Creature Type**: Humanoid.
- **Size**: Medium.
- **Speed**: 30 ft.
- **Bestial Instincts**: Proficiency in one of: *Acrobatics, Athletics, Intimidation, or Survival*.
- **Darkvision**: 60 ft.
- **Shifting**: As a bonus action, assume a bestial appearance for 1 minute (or until you die or revert as a bonus action). When you shift, gain **temporary hit points equal to 2 × your proficiency bonus** (**PB times per long rest**). Choose one shifting feature at creation:
  1. **Beasthide**: Gain **1d6 additional temporary hit points**. While shifted, you have a **+1 bonus to your Armor Class**.
  2. **Longtooth**: When you shift and as a bonus action on later turns while shifted, use elongated fangs to make an unarmed strike dealing **1d6 + Str modifier** piercing damage.
  3. **Swiftstride**: While shifted, walking speed increases by **+10 ft**. Additionally, move up to 10 feet as a reaction when a creature ends its turn within 5 ft of you (doesn't provoke opportunity attacks).
  4. **Wildhunt**: While shifted, you have **advantage on Wisdom checks**, and **no creature within 30 feet of you can make an attack roll with advantage against you** unless you are incapacitated!

---

## 🐱 27. Tabaxi
Cat-like humanoids created by the Cat Lord, possessing unmatched climbing claws and blinding bursts of feline agility.

### Tabaxi Traits
- **Creature Type**: Humanoid.
- **Size**: Medium or Small.
- **Speed**: 30 ft. walking, **30 ft. climbing**.
- **Cat's Claws**: Claws deal **1d6 + Str modifier** slashing damage on unarmed strikes.
- **Cat's Talent**: Proficiency in **Perception** and **Stealth**.
- **Darkvision**: 60 ft.
- **Feline Agility**: When you move on your turn in combat, you can **double your speed until the end of the turn**. Once used, you can't use it again until you move 0 feet on one of your turns.

---

## 🐢 28. Tortle
Turtle-like nomads who carry their shelters on their backs, perfectly suited for coastal and wilderness expeditions.

### Tortle Traits
- **Creature Type**: Humanoid.
- **Size**: Medium or Small.
- **Speed**: 30 ft.
- **Claws**: Unarmed strikes deal **1d6 + Str modifier** slashing damage.
- **Hold Breath**: Hold breath for up to **1 hour**.
- **Natural Armor**: Your shell provides a base AC of **17** (Dex modifier does not apply). You cannot wear light, medium, or heavy armor, but **shields apply as normal** (+2 AC = AC 19).
- **Nature's Intuition**: Proficiency with one skill: *Animal Handling, Medicine, Nature, Perception, Stealth, or Survival*.
- **Shell Defense**: As an action, withdraw into your shell. Until you emerge (bonus action), gain **+4 bonus to AC** (e.g. AC 21 or 23 with shield!), and **advantage on Strength and Constitution saving throws**. While in shell: you are prone, speed is 0, disadvantage on Dex saves, cannot take reactions.

---

## 🔱 29. Triton
Oceanic guardians hailing from the Elemental Plane of Water, commanding the currents and deep-sea creatures.

### Triton Traits
- **Creature Type**: Humanoid.
- **Size**: Medium.
- **Speed**: 30 ft. walking, **30 ft. swimming**.
- **Amphibious**: Breathe air and water.
- **Control Air and Water**:
  - 1st level: \`[[fog cloud]]\`.
  - At 3rd level: \`[[gust of wind]]\` (1/long rest or using spell slots).
  - At 5th level: \`[[water walk]]\` (1/long rest or using spell slots).
  - Int, Wis, or Cha spellcasting ability.
- **Darkvision**: 60 ft.
- **Emissary of the Sea**: Communicate simple ideas to any Beast, Elemental, or Monstrosity that has a swimming speed.
- **Guardian of the Depths**: Resistance to **cold damage**.

---

## 🐍 30. Yuan-ti
Serpentine humanoids created through ancient transformations, wielding serpent magic and impenetrable magical and venomous resistance.

### Yuan-ti Traits
- **Creature Type**: Humanoid.
- **Size**: Medium or Small.
- **Speed**: 30 ft.
- **Darkvision**: 60 ft.
- **Magic Resistance**: **Advantage on saving throws against spells**.
- **Poison Resilience**: Advantage on saving throws to avoid or end the **poisoned condition**; resistance to **poison damage**.
- **Serpentine Spellcasting**:
  - Cantrip: \`[[poison spray]]\`.
  - Cast \`[[animal friendship]]\` an **unlimited number of times**, but targeting only **snakes**.
  - At 3rd level: Cast \`[[suggestion]]\` (1/long rest or using spell slots of 2nd level or higher).
  - Int, Wis, or Cha spellcasting ability.
`
  }
];
