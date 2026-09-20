import { VaultNote } from "../types";

export const rulesDictionaryNotes: VaultNote[] = [
  {
    id: "rules-dictionary-core-mechanics",
    title: "5e Mechanics Dictionary & Rules Glossary (A to Z)",
    folder: "Rules & Mechanics",
    category: "Rulebook",
    tags: ["rules", "dictionary", "glossary", "mechanics", "dm-screen", "combat", "reference"],
    aliases: [
      "5e Rules Dictionary",
      "Rules Dictionary",
      "Mechanics Glossary",
      "Core Mechanics Glossary",
      "A-Z Rules",
      "Rules Index"
    ],
    content: `---
title: 5e Mechanics Dictionary & Rules Glossary (A to Z)
category: Rulebook
folder: Rules & Mechanics
tags: [rules, dictionary, glossary, mechanics, dm-screen, combat, reference]
source: D&D 5e Core Rules (PHB / DMG)
---

# 5e Mechanics Dictionary & Rules Glossary (A to Z)

An exhaustive, alphabetical dictionary of core D&D 5th Edition rules, mechanics, edge cases, and table adjudications for Dungeon Masters and players.

---

## ⚡ Quick Navigation
[A](#a) • [B](#b) • [C](#c) • [D](#d) • [E](#e) • [F](#f) • [G](#g) • [H](#h) • [I](#i) • [J](#j) • [K](#k) • [L](#l) • [M](#m) • [N](#n) • [O](#o) • [P](#p) • [Q](#q) • [R](#r) • [S](#s) • [T](#t) • [U](#u) • [V](#v) • [W](#w) • [X](#x) • [Y](#y) • [Z](#z)

---

## A

### Ability Check
- **Formula**: \`d20 + Ability Modifier + Proficiency Bonus (if proficient)\`.
- **Contest**: When two creatures oppose each other directly (e.g. [[Rules - Ability Checks#Athletics|Athletics]] grapple vs. Athletics/Acrobatics), the higher total wins. On a tie, the situation remains unchanged.
- **Passive Check**: \`10 + all modifiers that normally apply to the check\`. If the character has advantage, add +5. Disadvantage subtracts 5.
- See: [[Rules - Ability Checks]]

### Actions in Combat
On each turn, a creature can move up to its speed and take **one action**:
1. **Attack**: Make one or more melee or ranged weapon attacks (extra attacks determined by class features).
2. **Cast a Spell**: Cast a spell with a casting time of 1 action (see *Bonus Action Spell Rule*).
3. **Dash**: Gain extra movement equal to your speed for the current turn.
4. **Disengage**: Your movement doesn't provoke opportunity attacks for the rest of the turn.
5. **Dodge**: Until the start of your next turn, any attack roll against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage. Lost if incapacitated or speed drops to 0.
6. **Help**: Give advantage to an ally's next ability check, or to an ally's attack roll against a target within 5 feet of you before the start of your next turn.
7. **Hide**: Make a Dexterity (Stealth) check in an attempt to become hidden. Must be heavily obscured or behind full cover.
8. **Ready**: Wait for a specific trigger to take a reaction before the start of your next turn. When readying a spell, you cast it on your turn (expending the slot) and hold the energy using Concentration until triggered.
9. **Search**: Devote attention to finding something with a Wisdom (Perception) or Intelligence (Investigation) check.
10. **Use an Object**: Interact with a second object on your turn, or use a complex mechanical item.
- See: [[Rules - Combat#Actions in Combat|Actions in Combat]]

### Advantage & Disadvantage
- **Advantage**: Roll two d20s and take the higher roll.
- **Disadvantage**: Roll two d20s and take the lower roll.
- **Cancellation Rule**: If circumstances cause a roll to have both advantage and disadvantage, you are considered to have **neither**, rolling only a single d20. No matter how many instances of advantage or disadvantage apply, they never stack; 1 source of disadvantage cancels out 5 sources of advantage.

### Armor Class (AC)
- **Base Calculation**: When unarmored, \`10 + Dexterity modifier\`.
- **Non-Stacking Calculations**: If you have multiple features that give different AC formulas (e.g., Barbarian Unarmored Defense \`10 + Dex + Con\`, Monk Unarmored Defense \`10 + Dex + Wis\`, Mage Armor \`13 + Dex\`), you must **choose one**. Shields (+2 AC) stack with armor unless a feature specifies otherwise.

### Attunement
- A creature can be attuned to no more than **three magic items** simultaneously.
- Attuning requires spending a short rest focused on the item (meditating, handling, practicing).
- Attunement ends if the creature dies, the item moves more than 100 feet away for 24 hours, or another creature attunes to it.

---

## B

### Blindsight
- A creature with blindsight can perceive its surroundings within a specific radius without relying on sight. It can perceive invisible creatures and navigate total darkness or heavy fog.

### Bonus Action
- You can take only **one bonus action** on your turn. You only get a bonus action if a special ability, spell, or feature explicitly grants it.
- **Bonus Action Spellcasting Rule**: If you cast a spell using a bonus action (such as *Misty Step* or *Healing Word*), the only other spell you can cast on that same turn is a **cantrip with a casting time of 1 action**.

---

## C

### Carrying Capacity & Lifting
- **Carrying Capacity**: \`Strength score × 15 pounds\`.
- **Push, Drag, or Lift**: Up to \`Strength score × 30 pounds\`. While pushing or dragging weight exceeding carrying capacity, speed drops to 5 feet.
- **Size Multipliers**: For each size category above Medium, double carrying capacity (Large ×2, Huge ×4, Gargantuan ×8). Tiny creatures halve it (×0.5).

### Concentration
- Certain spells require active concentration to maintain.
- You lose concentration if:
  1. **You cast another spell that requires concentration**.
  2. **You take damage**: You must make a Constitution saving throw to maintain concentration. The DC equals **10 or half the damage taken, whichever number is higher**. If damage comes from multiple sources (e.g., 2 arrow hits), roll a separate save for each hit.
  3. **You are incapacitated or die**.
  4. Environmental phenomena (e.g. wave crashing over you on a storming ship): DC 10 Constitution save.

### Cover
Cover grants bonuses to AC and Dexterity saving throws:
- **Half Cover**: +2 bonus to AC and Dexterity saves (e.g., low wall, large furniture, another creature).
- **Three-Quarters Cover**: +5 bonus to AC and Dexterity saves (e.g., portcullis, arrow slit, thick trunk).
- **Total Cover**: A target with total cover cannot be targeted directly by an attack or a spell, though area-of-effect spells can reach around corners if clear paths exist.

### Critical Hits
- When you score a natural 20 on an attack roll:
  - **Roll all of the attack's damage dice twice and add them together**, then add any relevant modifiers (ability modifier, weapon enchantment bonus).
  - Any extra dice from features (e.g., Rogue Sneak Attack, Paladin Divine Smite) are **also doubled**. Flat numerical bonuses are NOT doubled.

---

## D

### Damage Resistance & Vulnerability
- **Resistance**: You halve incoming damage of that type (round down).
- **Vulnerability**: You double incoming damage of that type.
- **Order of Application**: Modifiers apply in this strict sequence:
  1. Damage immunities.
  2. Additions and subtractions to damage (e.g., Heavy Armor Master -3).
  3. Damage resistance (halve).
  4. Damage vulnerability (double).
- Multiple instances of the same resistance or vulnerability **do not stack**.

### Darkvision
- A creature with darkvision can see in dim light within the radius as if it were bright light, and in darkness as if it were dim light.
- In darkness, a creature with darkvision has **disadvantage on Wisdom (Perception) checks that rely on sight** (-5 to passive Perception), and can discern only shades of gray, not colors.

### Death Saving Throws
- When you start your turn with 0 hit points, make a d20 roll (no modifiers unless a feature specifies):
  - **10 or higher**: 1 Success.
  - **9 or lower**: 1 Failure.
  - **Natural 20**: Regain 1 hit point immediately and become conscious.
  - **Natural 1**: Counts as **2 failures**.
  - **3 Successes**: You become stabilized at 0 HP.
  - **3 Failures**: You die.
- **Damage at 0 HP**: Taking damage at 0 HP counts as 1 death save failure. If the damage is from a **critical hit** (including any melee attack within 5 feet while unconscious), it counts as **2 failures**.
- **Instant Death (Massive Damage)**: When damage reduces you to 0 HP and the remaining damage equals or exceeds your hit point maximum, you die instantly without rolling death saves.

### Difficult Terrain
- Moving through difficult terrain costs **1 additional foot of movement per foot moved** (moving 10 feet costs 20 feet of movement).
- Multiple sources of difficult terrain do not multiply each other.

---

## E

### Exhaustion
Cumulative levels accrued from lack of food/water, forced march, or extreme cold/heat:
- **Level 1**: Disadvantage on ability checks.
- **Level 2**: Speed halved.
- **Level 3**: Disadvantage on attack rolls and saving throws.
- **Level 4**: Hit point maximum halved.
- **Level 5**: Speed reduced to 0.
- **Level 6**: Death.
- Completing a long rest with food and water removes **1 level** of exhaustion.

---

## F

### Falling
- At the end of a fall, a creature takes **1d6 bludgeoning damage for every 10 feet fallen**, up to a maximum of 20d6.
- The creature lands **prone**, unless it avoids taking damage from the fall.

### Flanking (Optional DMG Rule)
- When a creature and at least one ally are within 5 feet of an enemy on directly opposite sides or corners, they gain **advantage on melee attack rolls** against that enemy.

---

## G

### Grappling
- **Action Required**: Attack action (can replace one attack if you have Extra Attack).
- **Target Restriction**: Target must be no more than one size larger than you and within your reach.
- **Contest**: Your Strength (Athletics) check vs. the target's Strength (Athletics) or Dexterity (Acrobatics) check (target's choice).
- **Effect on Success**: Target is subjected to the [[Conditions#Grappled|Grappled condition]] (speed drops to 0).
- **Moving a Grappled Creature**: You can drag or carry the grappled creature with you, but your speed is **halved**, unless the creature is two or more sizes smaller than you.
- **Escaping a Grapple**: The grappled creature uses an action to roll Athletics/Acrobatics vs. your Athletics check.

---

## H

### Hiding & Unseen Attackers
- You cannot hide from a creature that can see you clearly. You must have total cover, be heavily obscured, or be invisible.
- **Stealth Check**: Roll Dexterity (Stealth). The result is the DC for creatures searching with Wisdom (Perception).
- **Attacking while Unseen**: Combatants have **advantage** on attack rolls against targets that cannot see them.
- **Attacking an Unseen Target**: When you attack a target you cannot see, you have **disadvantage** on the attack roll, and you must guess the target's location if it is quiet.
- **Making Noise**: When you make an attack roll, you give away your location whether the attack hits or misses.

---

## I

### Initiative & Surprise
- **Initiative**: Dexterity check made at the start of combat. Determines turn order. Ties resolved by DM (or contested Dex checks between players).
- **Surprise**: If an ambushing side is unnoticed by an enemy (Stealth check beats enemy Passive Perception), that enemy is surprised.
- **A Surprised Creature**: Cannot move or take an action on its first turn of combat, and **cannot take a reaction** until after its first turn ends.

### Invisibility
- An invisible creature is impossible to see without magical senses. For the purpose of hiding, it is heavily obscured.
- Attack rolls against an invisible creature have disadvantage; attack rolls by an invisible creature have advantage.
- The creature's location can still be detected by noises it makes or tracks it leaves unless it takes the Hide action.

---

## K

### Knocking a Creature Out (Nonlethal Damage)
- When an attacker reduces a creature to 0 hit points with a **melee attack**, the attacker can choose to knock the creature out instead of killing it.
- The choice is made at the instant damage is dealt. The creature falls unconscious and is stable at 0 HP.

---

## L

### Light & Vision
- **Bright Light**: Normal vision.
- **Dim Light (Lightly Obscured)**: Shadows, twilight, or radius of a torch. Creatures have **disadvantage on Wisdom (Perception) checks that rely on sight** (-5 to passive Perception).
- **Darkness (Heavily Obscured)**: Blocks vision entirely. A creature in darkness effectively suffers from the [[Conditions#Blinded|Blinded condition]].
- **Sources of Light**:
  - *Torch*: 20 ft. bright light, 20 ft. dim light (burns 1 hour).
  - *Lantern, Hooded*: 30 ft. bright, 30 ft. dim (hood lowers to 5 ft. dim).
  - *Lantern, Bullseye*: 60 ft. cone of bright light, 60 ft. dim.
  - *Light Cantrip*: 20 ft. bright light, 20 ft. dim light.

---

## M

### Mounted Combat
- Mounting or dismounting costs **half your speed**.
- **Controlling a Mount**: You match its initiative to yours. Its action options are restricted to **Dash, Disengage, and Dodge**.
- **Opportunity Attacks**: If the mount provokes an opportunity attack while you are on it, the attacker can target either you or the mount.

---

## O

### Opportunity Attacks
- You can make an opportunity attack when a hostile creature that you can see **moves out of your reach**.
- Uses your **reaction**. Make one melee attack against the provoking creature right before it leaves your reach.
- **Exceptions**: You do NOT provoke opportunity attacks when teleporting, or when someone or something moves you without using your movement, action, or reaction (e.g. knocked back by Thunderwave or pushed by a grapple).

---

## P

### Passive Perception & Passive Scores
- **Calculation**: \`10 + all modifiers that normally apply to the check\`.
- **Advantage on Passive Check**: Add +5 to the score.
- **Disadvantage on Passive Check**: Subtract 5 from the score (e.g. relying on Darkvision in pitch blackness).

### Proficiency Bonus Scaling
| Character Level | Proficiency Bonus |
|:---:|:---:|
| 1st – 4th | +2 |
| 5th – 8th | +3 |
| 9th – 12th | +4 |
| 13th – 16th | +5 |
| 17th – 20th | +6 |

---

## R

### Readying an Action
- Specify a readable trigger ("If the goblin steps through the door...") and the action you will take.
- Takes your **reaction** to trigger.
- **Holding a Spell**: When you ready a spell, you cast it on your turn and hold its energy. It requires **concentration** to hold. If your concentration is broken before the trigger occurs, or if you choose not to unleash it, the spell slot is wasted.

### Resting
- **Short Rest**: At least **1 hour** of downtime (eating, resting, tending wounds).
  - Characters can spend one or more Hit Dice to regain hit points. For each hit die spent: \`Hit Die roll + Constitution modifier\`.
- **Long Rest**: At least **8 hours** of downtime (sleep for at least 6 hours, light reading/standing watch up to 2 hours).
  - Regain **all lost hit points**.
  - Regain spent Hit Dice up to **half the character's total number of Hit Dice** (minimum 1).
  - A character can benefit from **only one long rest in a 24-hour period**. Must have at least 1 hit point to benefit.

### Round Down Rule
- Whenever you divide a number in the game, **always round down** to the nearest whole integer, even if the fraction is one-half or greater, unless a specific rule tells you otherwise.

---

## S

### Saving Throws
- **Formula**: \`d20 + Ability Modifier + Proficiency Bonus (if proficient)\`.
- A saving throw is an involuntary response to resist an effect, spell, poison, or trap.
- Unlike attack rolls, a natural 20 or natural 1 on a saving throw does **not** automatically succeed or fail in standard 5e rules (with the exception of Death Saving Throws).

### Shoving a Creature
- Uses the Attack action (can replace one attack if you have Extra Attack).
- Target must be within reach and no more than one size larger.
- Contest: Strength (Athletics) vs. target's Strength (Athletics) or Dexterity (Acrobatics).
- On success: You either knock the target [[Conditions#Prone|prone]] or push it **5 feet away from you**.

### Specific Beats General
- When a general rule (e.g., standard AC calculation, spell components) is contradicted by a specific rule (e.g., a class feature, magical item, or spell description), the **specific rule takes precedence**.

### Spell Components (V, S, M)
- **Verbal (V)**: Chanted incantations. Cannot cast while silenced or gagged.
- **Somatic (S)**: Forceful, measured gestures. Caster must have at least one free hand.
- **Material (M)**: Physical items. Caster can use a component pouch or spellcasting focus in place of materials that lack a stated gold cost.
- **Free Hand Rule**: The hand used for somatic components can be the same hand holding a material component or focus. If a spell has somatic components but *no* material components, the caster must have a completely free hand (or have the War Caster feat).

### Squeezing Through Small Spaces
- A creature can squeeze through a space large enough for a creature one size category smaller.
- While squeezing: Movement costs **1 extra foot per foot moved**; the creature has **disadvantage on attack rolls and Dexterity saving throws**; attack rolls against the creature have **advantage**.

---

## T

### Two-Weapon Fighting
- When you take the Attack action and attack with a **light melee weapon** that you're holding in one hand, you can use a **bonus action** to attack with a different light melee weapon that you're holding in the other hand.
- You **do not add your ability modifier** to the damage of the bonus attack, unless that modifier is negative (or you possess the Two-Weapon Fighting style).

---

## U

### Underwater Combat
- **Melee Weapons**: Attack rolls have disadvantage unless the weapon is a dagger, javelin, shortsword, spear, or trident (or creature has a swim speed).
- **Ranged Weapons**: Miss automatically beyond normal range. Attack rolls within normal range have disadvantage unless using a crossbow, net, or thrown weapon like a javelin or trident.
- **Fire Resistance**: Fully submerged creatures have resistance to fire damage.

---

## V

### Vision Obscurement
- **Lightly Obscured (Dim light, patchy fog, moderate foliage)**: Disadvantage on Wisdom (Perception) checks that rely on sight.
- **Heavily Obscured (Darkness, dense fog, heavy smoke)**: Vision is blocked completely. Any creature inside is effectively blinded.
`
  }
];
