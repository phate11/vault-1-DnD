import { VaultNote } from "../types";

export const encounterBuilderNotes: VaultNote[] = [
  {
    id: "dm-tools-encounter-builder-and-xp",
    title: "DM Guide - Encounter Builder & XP Thresholds",
    folder: "Rules & Mechanics",
    category: "Rulebook",
    tags: ["dm-tools", "encounter-builder", "xp", "challenge-rating", "cr", "combat-balance", "adventuring-day"],
    aliases: [
      "Encounter Builder",
      "XP Thresholds",
      "Challenge Rating Tables",
      "CR to XP",
      "Combat Balancing",
      "Adventuring Day Budget"
    ],
    content: `---
title: DM Guide - Encounter Builder & XP Thresholds
category: Rulebook
folder: Rules & Mechanics
tags: [dm-tools, encounter-builder, xp, challenge-rating, cr, combat-balance, adventuring-day]
source: Dungeon Master's Guide (Chapter 3)
---

# DM Guide: Encounter Builder & XP Thresholds

> *"Balancing combat encounters is both a mathematical formula and an art form. Action economy, terrain, cover, and surprise can tip a moderate encounter into a lethal bloodbath."*  
> — Dungeon Master's Guide, Ch. 3

This reference provides exact XP threshold tables for levels 1–20, encounter multipliers, daily XP budgets, and the complete CR-to-XP conversion table.

---

## ⚖️ Step-by-Step Encounter Calculation

1. **Determine Party XP Thresholds**: Multiply the number of characters at each level by the values in the table below for the desired difficulty. Sum them to find the party's threshold.
2. **Sum Monster XP**: Add together the base XP of all monsters in the encounter.
3. **Apply Encounter Multiplier**: Multiply the total monster XP by the multiplier based on the number of monsters.
4. **Compare Adjusted XP to Thresholds**:
   - **Easy**: An encounter that taxes few resources; victory is certain with little risk.
   - **Medium**: Characters might need to cast a spell or two; one or two characters might take moderate damage.
   - **Hard**: A significant challenge. Weaker characters might fall unconscious; risk of death if tactical errors occur.
   - **Deadly**: Lethal risk. Could easily result in the death of one or more characters without optimal tactics and rolls.

---

## 📊 XP Thresholds per Character (Levels 1–20)

| Level | Easy XP | Medium XP | Hard XP | Deadly XP | Daily Budget (Per Character) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **1st** | 25 | 50 | 75 | 100 | 300 |
| **2nd** | 50 | 100 | 150 | 200 | 600 |
| **3rd** | 75 | 150 | 225 | 400 | 1,200 |
| **4th** | 125 | 250 | 375 | 500 | 1,700 |
| **5th** | 250 | 500 | 750 | 1,100 | 3,500 |
| **6th** | 300 | 600 | 900 | 1,400 | 4,000 |
| **7th** | 350 | 750 | 1,100 | 1,700 | 5,000 |
| **8th** | 450 | 900 | 1,400 | 2,100 | 6,000 |
| **9th** | 550 | 1,100 | 1,600 | 2,400 | 7,500 |
| **10th** | 600 | 1,200 | 1,900 | 2,800 | 9,000 |
| **11th** | 800 | 1,600 | 2,400 | 3,600 | 10,500 |
| **12th** | 1,000 | 2,000 | 3,000 | 4,500 | 11,500 |
| **13th** | 1,100 | 2,200 | 3,400 | 5,100 | 13,500 |
| **14th** | 1,250 | 2,500 | 3,800 | 5,700 | 15,000 |
| **15th** | 1,400 | 2,800 | 4,300 | 6,400 | 18,000 |
| **16th** | 1,600 | 3,200 | 4,800 | 7,200 | 20,000 |
| **17th** | 2,000 | 3,900 | 5,900 | 8,800 | 25,000 |
| **18th** | 2,100 | 4,200 | 6,300 | 9,500 | 27,000 |
| **19th** | 2,400 | 4,900 | 7,300 | 10,900 | 30,000 |
| **20th** | 2,800 | 5,700 | 8,500 | 12,700 | 40,000 |

---

## ✖️ Encounter Multipliers (Action Economy Adjustment)

Because having more combatants provides a massive advantage in action economy, multiply total monster XP by the following:

| Number of Monsters | Standard Multiplier (3–5 Players) | Small Party (1–2 Players) | Large Party (6+ Players) |
|:---:|:---:|:---:|:---:|
| **1 monster** | ×1 | ×1.5 | ×0.5 |
| **2 monsters** | ×1.5 | ×2 | ×1 |
| **3–6 monsters** | ×2 | ×2.5 | ×1.5 |
| **7–10 monsters** | ×2.5 | ×3 | ×2 |
| **11–14 monsters** | ×3 | ×4 | ×2.5 |
| **15+ monsters** | ×4 | ×5 | ×3 |

> [!warning] Multipliers Apply to Difficulty Only!
> Use the adjusted XP value **only to determine difficulty**. When awarding XP to characters after the encounter, award only the **raw, unmultiplied base XP** divided evenly among the party members.

---

## 🎯 Challenge Rating (CR) to XP Conversion

| CR | XP Value | CR | XP Value | CR | XP Value |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **0** | 10 (or 0) | **7** | 2,900 | **19** | 22,000 |
| **1/8** | 25 | **8** | 3,900 | **20** | 25,000 |
| **1/4** | 50 | **9** | 5,000 | **21** | 33,000 |
| **1/2** | 100 | **10** | 5,900 | **22** | 41,000 |
| **1** | 200 | **11** | 7,200 | **23** | 50,000 |
| **2** | 450 | **12** | 8,400 | **24** | 62,000 |
| **3** | 700 | **13** | 10,000 | **25** | 75,000 |
| **4** | 1,100 | **14** | 11,500 | **26** | 90,000 |
| **5** | 1,800 | **15** | 13,000 | **27** | 105,000 |
| **6** | 2,300 | **16** | 15,000 | **28** | 120,000 |
| **—** | — | **17** | 18,000 | **29** | 135,000 |
| **—** | — | **18** | 20,000 | **30** | 155,000 |

---

## 🛡️ Quick Encounter Examples for a 4-Player Party

### 4th-Level Party (4 PCs)
- **Thresholds**: Easy 500 XP • Medium 1,000 XP • Hard 1,500 XP • Deadly 2,000 XP.
- **Example 1 (Solo Boss)**: 1x Ogre (CR 2, 450 XP) + 2x Goblins (CR 1/4, 50 XP each) = 550 base XP × 2 (3 monsters) = **1,100 Adjusted XP** (Medium).
- **Example 2 (Ambush)**: 4x Bugbears (CR 1, 200 XP each) = 800 base XP × 2 (4 monsters) = **1,600 Adjusted XP** (Hard).

### 8th-Level Party (4 PCs)
- **Thresholds**: Easy 1,800 XP • Medium 3,600 XP • Hard 5,600 XP • Deadly 8,400 XP.
- **Example (Dragon Lair)**: 1x Young Red Dragon (CR 10, 5,900 XP) × 1 (solo) = **5,900 Adjusted XP** (Hard).

---

## ⚡ DM Tips for Combat Flow & Reinforcements

1. **Waves of Enemies**: To challenge a party without overwhelming them in round 1, stagger enemies into waves. Do not apply the 10-monster multiplier if half the monsters arrive on round 3.
2. **Terrain Modifiers**: Granting high ground, natural choke points, or cover effectively increases an encounter's difficulty by one full step (Medium feels Hard).
3. **Legendary Actions**: A solo monster without Legendary Actions will be quickly neutralized by player crowd-control spells (*Hold Person*, *Banishment*). Always pair solo bosses with minions or legendary saves.
`
  }
];
