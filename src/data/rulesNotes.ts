import { VaultNote } from '../types';

export const rulesNotes: VaultNote[] = [
  {
    id: "how-to-play",
    title: "How to Play & Core Rules",
    folder: "Rules & Mechanics",
    category: "Rule",
    tags: ["rules", "basics", "d20", "core"],
    aliases: ["Core Rules", "Basic Rules"],
    content: `---
title: How to Play & Core Rules
category: Rule
folder: Rules & Mechanics
tags: [rules, basics, d20, core]
---

# How to Play & Core Rules

The play of the **DUNGEONS & DRAGONS** game unfolds according to this basic pattern:

1. **The DM describes the environment.** The DM tells the players where their adventurers are and what's around them, presenting the basic scope of options that present themselves (how many doors lead out of a room, what's on a table, who's in the tavern, and so on).
2. **The players describe what they want to do.** Sometimes one player speaks for the whole party, saying, "We'll take the east door," for example. Other times, different adventurers do different things. The players don't need to take turns, but the DM listens to every player and decides how to resolve those actions.
3. **The DM narrates the results of the adventurers' actions.** Describing the results often leads to another decision point, which brings the flow of the game right back to step 1.

> [!info] The Three Pillars of Adventure
> Adventurers can try to do anything their players can imagine, but their activities fall into three broad categories:
> - **Exploration**: Moving through the world and interacting with objects and environments ([[Adventuring]]).
> - **Social Interaction**: Conversing with NPCs, negotiating, interrogating, or deceiving ([[Social Interaction]]).
> - **Combat**: Structured round-by-round battle swinging weapons and casting [[Spellcasting|spells]] ([[Combat]]).

---

## Game Dice
The game uses polyhedral dice: **d4, d6, d8, d10, d12, and d20**.
- **Percentile Dice (d100)**: Roll two different ten-sided dice numbered 0 to 9 (one for tens, one for ones). A roll of 70 and 1 is 71; 00 and 0 is 100.
- **d3 and d2d**: To simulate 1d3, roll 1d6 and divide by 2 (round up). For 1d2, roll any die: odd = 1, even = 2.

---

## The Core Mechanic: The D20
When the outcome of an action is uncertain, the game relies on rolls of a 20-sided die (**d20**):

1. **Roll the die and add a modifier:** Typically an [[Ability Scores|ability modifier]], plus [[Proficiency Bonus]] if applicable.
2. **Apply circumstantial bonuses and penalties:** From class features, spells, or circumstances.
3. **Compare the total to a target number:**
   - For an **Ability Check** or **Saving Throw**, the target is a **Difficulty Class (DC)**.
   - For an **Attack Roll**, the target is an **Armor Class (AC)**.

If the total equals or exceeds the target number, the roll is a **success**. Otherwise, it's a **failure**.

---

## Advantage and Disadvantage
Sometimes a special ability, spell, or circumstance modifies a d20 roll:
- **Advantage**: Roll a second d20 and use the **higher** roll.
- **Disadvantage**: Roll a second d20 and use the **lower** roll.
- If multiple situations grant advantage or disadvantage, you still roll only one additional d20.
- If circumstances impose both advantage and disadvantage, they **cancel out completely** (you roll a single d20).

---

## Specific Beats General
This book contains general rules. Many racial traits, class features, spells, magic items, and monster abilities break these rules.
> **Rule**: *If a specific rule contradicts a general rule, the specific rule wins.*

---

## Round Down
Whenever you divide a number in the game, round down if you end up with a fraction, even if the fraction is one-half or greater (unless a rule explicitly states otherwise).
`
  },
  {
    id: "step-by-step-characters",
    title: "Step-by-Step Character Creation",
    folder: "Rules & Mechanics",
    category: "Rule",
    tags: ["rules", "character-creation", "bruenor"],
    aliases: ["Character Creation", "Building a Character"],
    content: `---
title: Step-by-Step Character Creation
category: Rule
folder: Rules & Mechanics
tags: [rules, character-creation, bruenor]
---

# Step-by-Step Character Creation

Your character is a combination of game statistics, roleplaying hooks, and your imagination.

### Step 1: Choose a Race
Every character belongs to a [[Races|Race]] (e.g., [[Dwarf]], [[Elf]], [[Halfling]], [[Human]], [[Dragonborn]], [[Gnome]], [[Half-Elf]], [[Half-Orc]], [[Tiefling]]).
- Grants **racial traits**, such as special senses ([[Darkvision]]), weapon/tool proficiencies, base speed, languages, and **Ability Score Increases**.
- *Example (Building Bruenor)*: Bob chooses a Mountain [[Dwarf]]. Speed 25 ft, knows Common and Dwarvish, gains +2 Constitution and +2 Strength.

### Step 2: Choose a Class
Class broadly describes vocation, tactics, and special features ([[Classes]]):
- [[Barbarian]], [[Bard]], [[Cleric]], [[Druid]], [[Fighter]], [[Monk]], [[Paladin]], [[Ranger]], [[Rogue]], [[Sorcerer]], [[Warlock]], [[Wizard]].
- Grants **Hit Die**, saving throw proficiencies, armor/weapon proficiencies, skill choices, and 1st-level features.
- At 1st level, your Hit Points = maximum value of your Hit Die + Constitution modifier.
- *Example (Building Bruenor)*: Bob chooses [[Fighter]]. Hit Die is 1d10, HP = 10 + Con modifier. 1st-level features: Fighting Style, Second Wind. Proficiency bonus = +2.

### Step 3: Determine Ability Scores
Assign scores (3 to 18) to: **Strength**, **Dexterity**, **Constitution**, **Intelligence**, **Wisdom**, and **Charisma**.
- **Standard Array**: 15, 14, 13, 12, 10, 8.
- **Random Generation**: Roll 4d6, drop the lowest die, 6 times.
- **Variant Point Buy (27 points)**:
| Score | Cost | Score | Cost |
| :---: | :---: | :---: | :---: |
| 8 | 0 | 12 | 4 |
| 9 | 1 | 13 | 5 |
| 10 | 2 | 14 | 7 |
| 11 | 3 | 15 | 9 |

- *Example (Building Bruenor)*: Standard set (15, 14, 13, 12, 10, 8). STR 15 (+2 race = 17, +3 mod), CON 14 (+2 race = 16, +3 mod), DEX 10 (+0), INT 8 (-1), WIS 13 (+1), CHA 12 (+1). Total HP = 10 + 3 = 13.

### Step 4: Describe Your Character
Choose name, gender, height/weight, alignment, physical appearance, and background ([[Backgrounds]]):
- Background gives 2 skill proficiencies, tool proficiencies/languages, equipment, and a special background feature.
- Detail **Personality Traits**, **Ideals**, **Bonds**, and **Flaws**.
- *Example (Building Bruenor)*: Bob chooses [[Folk Hero]] background. Bond: Reclaim Mithral Hall. Flaw: Soft spot for orphans and wayward souls.

### Step 5: Choose Equipment
Starting gear determined by class and background or bought with starting gold:
- Calculate **Armor Class (AC)**: Without armor/shield = 10 + Dex modifier.
- Calculate weapon attack bonus: Ability modifier (+ Str for melee, + Dex for ranged/finesse) + [[Proficiency Bonus]].
- *Example (Building Bruenor)*: Chain mail (AC 16) + Shield (+2) = AC 18. Battleaxe (+5 to hit, 1d8+3 slashing). Handaxes (+5 to hit, 1d6+3 slashing, range 20/60).

### Step 6: Come Together
Establish party connections, shared history, and mutual goals.

---

## Character Advancement & Tiers of Play
| Level | Proficiency Bonus | Experience Points (XP) |
| :---: | :---: | :---: |
| 1 | +2 | 0 |
| 2 | +2 | 300 |
| 3 | +2 | 900 |
| 4 | +2 | 2,700 |
| 5 | +3 | 6,500 |
| 6 | +3 | 14,000 |
| 7 | +3 | 23,000 |
| 8 | +3 | 34,000 |
| 9 | +4 | 48,000 |
| 10 | +4 | 64,000 |
| 11 | +4 | 85,000 |
| 12 | +4 | 100,000 |
| 13 | +5 | 120,000 |
| 14 | +5 | 140,000 |
| 15 | +5 | 165,000 |
| 16 | +5 | 195,000 |
| 17 | +6 | 225,000 |
| 18 | +6 | 265,000 |
| 19 | +6 | 305,000 |
| 20 | +6 | 355,000 |

### Tiers of Play
- **Tier 1 (Levels 1–4)**: Apprentice adventurers facing local threats (farmsteads, villages).
- **Tier 2 (Levels 5–10)**: Heroes facing dangers threatening cities and kingdoms (spells like [[Fireball]], Extra Attack).
- **Tier 3 (Levels 11–16)**: Elite champions confronting threats to entire continents and realms (6th-level spells).
- **Tier 4 (Levels 17–20)**: Legendary archetypes whose adventures decide the fate of worlds or the multiverse.
`
  },
  {
    id: "ability-scores-and-skills",
    title: "Using Ability Scores & Skills",
    folder: "Rules & Mechanics",
    category: "Rule",
    tags: ["rules", "abilities", "skills", "checks"],
    aliases: ["Ability Scores", "Skills", "Ability Checks"],
    content: `---
title: Using Ability Scores & Skills
category: Rule
folder: Rules & Mechanics
tags: [rules, abilities, skills, checks]
---

# Using Ability Scores & Skills

Six abilities provide a quick description of every creature's physical and mental characteristics:
- **Strength (STR)**: Natural athleticism, bodily power.
- **Dexterity (DEX)**: Physical agility, reflexes, balance, poise.
- **Constitution (CON)**: Health, stamina, vital force.
- **Intelligence (INT)**: Mental acuity, information recall, analytical skill.
- **Wisdom (WIS)**: Awareness, intuition, insight, perception.
- **Charisma (CHA)**: Confidence, eloquence, leadership, force of personality.

### Ability Scores and Modifiers Table
| Score | Modifier | Score | Modifier |
| :---: | :---: | :---: | :---: |
| 1 | -5 | 16–17 | +3 |
| 2–3 | -4 | 18–19 | +4 |
| 4–5 | -3 | 20–21 | +5 |
| 6–7 | -2 | 22–23 | +6 |
| 8–9 | -1 | 24–25 | +7 |
| 10–11 | +0 | 26–27 | +8 |
| 12–13 | +1 | 28–29 | +9 |
| 14–15 | +2 | 30 | +10 |

**Formula**: \`Modifier = floor((Score - 10) / 2)\`.

---

## Ability Checks
An ability check tests a creature's talent and training to overcome a challenge:
\`Total = d20 + Ability Modifier + (Proficiency Bonus if proficient)\`

### Typical Difficulty Classes (DC)
- **Very Easy**: 5
- **Easy**: 10
- **Medium**: 15
- **Hard**: 20
- **Very Hard**: 25
- **Nearly Impossible**: 30

### Contests
When two creatures' efforts are directly opposed (e.g. grappling, arm wrestling, snatching an object):
- Both make an ability check.
- The higher check total wins. If tied, the situation remains unchanged.

### Passive Checks
A passive check represents the average result of a task done repeatedly, or used secretly by the DM:
\`Passive Score = 10 + all normal modifiers\` (+5 if advantage, -5 if disadvantage).

### Working Together & Group Checks
- **Working Together**: One character leads, gaining **advantage** if the assisting character is capable of performing the task alone.
- **Group Checks**: Everyone rolls. If at least half succeed, the whole group succeeds.

---

## Skills by Ability

### Strength
- **Athletics**: Climbing sheer cliffs, swimming against rapids, jumping long distances.
- **Lifting & Carrying**:
  - *Carrying Capacity*: Strength score × 15 lbs.
  - *Push, Drag, Lift*: Strength score × 30 lbs (speed drops to 5 ft if exceeding carrying capacity).
  - *Size multiplier*: Double for each size above Medium; halved for Tiny.
- *Variant Encumbrance*: Carrying > 5×STR = encumbered (-10 ft speed). Carrying > 10×STR = heavily encumbered (-20 ft speed, disadvantage on Str/Dex/Con checks, attacks, and saves).

### Dexterity
- **Acrobatics**: Balancing on tightropes, ice, acrobatic stunts, flips.
- **Sleight of Hand**: Pocket-picking, concealing objects, legerdemain.
- **Stealth**: Concealing oneself, sneaking quietly.
- **Hiding**: Total contested by active Wisdom (Perception) or Passive Perception. You cannot hide from a creature that can clearly see you.

### Constitution
No associated skills. Measures endurance: holding breath, forced march, surviving without food/water, quaffing ale.

### Intelligence
- **Arcana**: Lore on spells, magic items, planar travel, eldritch symbols.
- **History**: Historical events, legends, past disputes, lost realms.
- **Investigation**: Deducing clues, hidden compartment locations, structural weak points.
- **Nature**: Terrain, plants, animals, weather, natural cycles.
- **Religion**: Deities, rites, holy symbols, secret cults.

### Wisdom
- **Animal Handling**: Calming domesticated animals, controlling mounts.
- **Insight**: Discerning true intentions, detecting lies, reading body language.
- **Medicine**: Stabilizing dying companions (DC 10), diagnosing disease.
- **Perception**: Spotting, hearing, or smelling hidden creatures and clues.
- **Survival**: Tracking quarry, foraging food/water, navigating wilderness, predicting weather.

### Charisma
- **Deception**: Lying, misleading, fast-talking, maintaining disguises.
- **Intimidation**: Coercion through threats or physical menace.
- **Performance**: Delighting audiences with music, acting, dance, or storytelling.
- **Persuasion**: Fostering friendships, making cordial requests, diplomatic negotiation.

---

## Saving Throws
A saving throw represents an attempt to resist a spell, trap, poison, or sudden hazard.
\`Save Total = d20 + Ability Modifier + Proficiency Bonus (if proficient)\`
`
  },
  {
    id: "adventuring-rules",
    title: "Adventuring Rules (Exploration, Resting & Downtime)",
    folder: "Rules & Mechanics",
    category: "Rule",
    tags: ["rules", "adventuring", "travel", "resting", "downtime"],
    aliases: ["Travel Pace", "Resting", "Downtime"],
    content: `---
title: Adventuring Rules
category: Rule
folder: Rules & Mechanics
tags: [rules, adventuring, travel, resting, downtime]
---

# Adventuring Rules

## Time & Travel Pace
| Pace | Minute | Hour | Day | Effect |
| :--- | :---: | :---: | :---: | :--- |
| **Fast** | 400 ft | 4 miles | 30 miles | -5 penalty to passive Wisdom (Perception) |
| **Normal** | 300 ft | 3 miles | 24 miles | Normal capabilities |
| **Slow** | 200 ft | 2 miles | 18 miles | Able to use stealth |

- **Forced March**: Traveling beyond 8 hours a day requires a Constitution saving throw at the end of each extra hour (DC = 10 + 1 per hour past 8). Failure confers 1 level of [[Conditions#Exhaustion|Exhaustion]].
- **Difficult Terrain**: Movement costs 2 feet of speed per 1 foot traveled.
- **Mounts and Vehicles**: Gallop doubles speed for 1 hour. Fresh mounts every 8–10 miles allow sustained travel.

---

## Special Movement
- **Climbing, Swimming, Crawling**: Each foot costs 1 extra foot (2 extra feet in difficult terrain).
- **Long Jump**: With a 10-foot running start, clear distance equal to Strength score in feet. Standing long jump clears half that distance.
- **High Jump**: With a 10-foot running start, leap into the air 3 + Strength modifier feet. Standing high jump leaps half that. Reach extends 1.5× your height.

---

## Environmental Hazards
- **Falling**: 1d6 bludgeoning damage per 10 feet fallen (maximum 20d6). Lands prone unless damage avoided.
- **Suffocating**: Can hold breath for \`1 + Con modifier\` minutes (minimum 30 seconds). When out of breath, survives \`Con modifier\` rounds (minimum 1 round), then drops to 0 hit points and is dying.
- **Vision and Light**:
  - *Lightly Obscured*: Disadvantage on Wisdom (Perception) checks relying on sight.
  - *Heavily Obscured*: Completely blocks vision; creatures suffer [[Conditions#Blinded|Blinded]].
  - *Bright Light / Dim Light (Shadows) / Darkness*.
  - *Blindsight*: Perceive surroundings without sight within specified radius.
  - *Darkvision*: See in dim light as bright light, darkness as dim light (monochrome gray).
  - *Truesight*: See through normal and magical darkness, perceive invisible creatures/objects, detect visual illusions automatically, see into Ethereal Plane.
- **Food & Water**:
  - *Food*: 1 lb. per day. Can go \`3 + Con modifier\` days without food before gaining 1 level of exhaustion per day.
  - *Water*: 1 gallon/day (2 in heat). Half water requires DC 15 Con save or 1 level of exhaustion. Less water automatically inflicts exhaustion.

---

## Resting
- **Short Rest**: Downtime of at least 1 hour (eating, drinking, tending wounds).
  - Can spend **Hit Dice**: Roll Hit Die + Con modifier, regain that many HP.
- **Long Rest**: Downtime of at least 8 hours (at least 6 hours sleep, max 2 hours light activity).
  - Regain all lost HP.
  - Regain up to half of your total Hit Dice (minimum of 1).
  - Cannot benefit from more than one long rest per 24 hours. Must have at least 1 HP to begin.

---

## Downtime Activities (Between Adventures)
- **Crafting**: Can craft nonmagical items with tool proficiency. Progresses in 5 gp market value increments per day, costing half value in raw materials.
- **Practicing a Profession**: Maintain a modest lifestyle without paying 1 gp/day. With organization (temple/guild) = comfortable. Performance proficiency = wealthy.
- **Recuperating**: After 3 days, DC 15 Con save to end an effect preventing HP recovery, or gain advantage on saves against 1 disease/poison for 24 hours.
- **Researching**: Spend 1 gp/day + lifestyle to uncover lore, library secrets, and clues.
- **Training**: 250 days and 1 gp/day with an instructor to learn a new language or tool proficiency.
`
  },
  {
    id: "combat-rules",
    title: "Combat Rules",
    folder: "Rules & Mechanics",
    category: "Rule",
    tags: ["rules", "combat", "actions", "damage"],
    aliases: ["Combat", "Order of Combat", "Combat Actions"],
    content: `---
title: Combat Rules
category: Rule
folder: Rules & Mechanics
tags: [rules, combat, actions, damage]
---

# Combat Rules

Combat is organized into **rounds** (each representing 6 seconds) and **turns**.

### Combat Step by Step
1. **Determine Surprise**: DM determines if any combatant is surprised (via Dexterity [Stealth] vs. Passive Perception). Surprised creatures cannot move or take actions on turn 1, and no reactions until turn 1 ends.
2. **Establish Positions**: Determine locations and distances.
3. **Roll Initiative**: Everyone makes a Dexterity check to determine turn order.
4. **Take Turns**: Each participant takes a turn in initiative order.
5. **Begin Next Round**: Repeat until fighting stops.

---

## Your Turn
On your turn, you can **move** a distance up to your speed and **take one action**. You can also take one **bonus action** (if a feature allows) and interact with one object for free.

### Actions in Combat
- **Attack**: Make one melee or ranged attack (or multiple with Extra Attack).
- **Cast a Spell**: Cast a spell with a casting time of 1 action ([[Spellcasting]]).
- **Dash**: Gain extra movement equal to your speed for the current turn.
- **Disengage**: Your movement doesn't provoke opportunity attacks for the rest of the turn.
- **Dodge**: Attacks against you have disadvantage if you can see the attacker; advantage on Dex saves.
- **Help**: Grant advantage to an ally's next ability check or first attack against a target within 5 feet.
- **Hide**: Make a Dexterity (Stealth) check to become unseen/unheard.
- **Ready**: Prepare an action triggered by a specific perceivable circumstance using your reaction. (Readying a spell requires concentration).
- **Search**: Devote attention to finding something (Perception or Investigation).
- **Use an Object**: Interact with a second object or an object requiring an action.

---

## Making an Attack
1. **Choose a Target**: Creature, object, or location within range.
2. **Determine Modifiers**: Cover, advantage/disadvantage, spell/feature bonuses.
3. **Resolve Attack**: Roll d20 + ability modifier + proficiency bonus. If total ≥ AC, attack hits!
   - **Natural 20**: Always hits and is a **Critical Hit** (roll all weapon/spell damage dice twice!).
   - **Natural 1**: Always misses regardless of modifiers.

### Melee & Ranged Attacks
- **Melee Reach**: Standard 5 feet.
- **Ranged in Melee**: Disadvantage on ranged attack rolls if an enemy is within 5 feet.
- **Opportunity Attacks**: Triggered when a hostile creature moves out of your reach without Disengaging. Use reaction to make 1 melee weapon attack.
- **Two-Weapon Fighting**: When attacking with a light melee weapon, use bonus action to attack with another light melee weapon in other hand (no ability mod to damage unless negative).
- **Grappling**: Replaces an attack. Strength (Athletics) contested by target's Strength (Athletics) or Dexterity (Acrobatics). Target cannot be more than one size larger. On success, target gains [[Conditions#Grappled|Grappled]].
- **Shoving**: Replaces an attack. Contested Athletics vs Athletics/Acrobatics. Knock target prone or push 5 feet away.

---

## Cover
- **Half Cover (+2 AC and Dex saves)**: At least half body blocked (low wall, furniture, other creature).
- **Three-Quarters Cover (+5 AC and Dex saves)**: ~75% covered (portcullis, arrow slit, thick trunk).
- **Total Cover**: Concealed completely; cannot be targeted directly by attacks or spells.

---

## Damage, Healing & Death
- **Damage Types**: Acid, Bludgeoning, Cold, Fire, Force, Lightning, Necrotic, Piercing, Poison, Psychic, Radiant, Slashing, Thunder.
- **Resistance**: Halves damage of that type.
- **Vulnerability**: Doubles damage of that type.
- **Dropping to 0 Hit Points**:
  - *Instant Death*: Remaining damage ≥ hit point maximum = instant death.
  - *Unconscious*: Otherwise drop to 0 HP and fall [[Conditions#Unconscious|Unconscious]].
- **Death Saving Throws**:
  - Roll d20: 10+ = Success; 1–9 = Failure.
  - 3 Successes = **Stable** (regains 1 HP after 1d4 hours).
  - 3 Failures = **Death**.
  - Natural 1 = 2 failures. Natural 20 = immediately regain 1 hit point!
  - Taking damage at 0 HP = 1 failure (critical hit = 2 failures).
- **Stabilizing**: DC 10 Wisdom (Medicine) check or Healer's Kit.
- **Knocking a Creature Out**: When reducing a creature to 0 HP with a melee attack, attacker can choose to render it unconscious and stable rather than killing it.
- **Temporary Hit Points**: Act as a buffer, do not stack, cannot be healed.
`
  },
  {
    id: "spellcasting-rules",
    title: "Spellcasting Rules & The Weave",
    folder: "Rules & Mechanics",
    category: "Rule",
    tags: ["rules", "magic", "spells", "weave"],
    aliases: ["Spellcasting", "Magic Rules", "The Weave"],
    content: `---
title: Spellcasting Rules & The Weave
category: Rule
folder: Rules & Mechanics
tags: [rules, magic, spells, weave]
---

# Spellcasting Rules & The Weave

A spell is a discrete magical effect—a single shaping of the magical energies that suffuse the multiverse into a specific expression.

> [!quote] The Weave of Magic
> All existence is suffused with raw magic. Mortals access it through the **Weave** (recognized in the Forgotten Realms as the goddess Mystra).
> - **Arcane Magic**: Plucks directly at the strands of the Weave through study, talent, or bargains ([[Wizard]], [[Sorcerer]], [[Warlock]], [[Bard]]).
> - **Divine Magic**: Mediated by gods, nature forces, or sacred oaths ([[Cleric]], [[Druid]], [[Paladin]], [[Ranger]]).

---

## Spell Level & Spell Slots
- **Cantrips (Level 0)**: Cast at will without expending slots.
- **Spell Slots**: Finite magical reserves. Expending a slot of the spell's level or higher casts the spell.
- **Casting at Higher Level**: Enhances certain spells as detailed in their descriptions.
- **Rituals**: Spells with the [ritual] tag can be cast without a slot by adding 10 minutes to the casting time (if caster has ritual feature).

---

## Casting Components
- **Verbal (V)**: Chanting mystical words with specific resonance. Blocked by silence or gagging.
- **Somatic (S)**: Forceful gesticulation or precise hand movements. Requires at least one free hand.
- **Material (M)**: Physical objects required. A **Component Pouch** or **Spellcasting Focus** can replace non-costly, non-consumed materials. Costly materials must be provided.
- **Armor Restriction**: You must be proficient with the armor you wear to cast spells.

---

## Duration & Concentration
- **Instantaneous**: Magic exists only for an instant and cannot be dispelled.
- **Concentration**: Maintaining focus on a spell (up to stated duration).
  - *Break conditions*:
    1. Casting another concentration spell.
    2. Taking damage: Constitution saving throw (DC 10 or half damage taken, whichever is higher).
    3. Being incapacitated or killed.

---

## Areas of Effect
| Shape | Characteristics |
| :--- | :--- |
| **Cone** | Extends from origin; width equals distance from origin. Origin not included unless chosen. |
| **Cube** | Origin on any face. Cube size is length of side. Origin not included unless chosen. |
| **Cylinder** | Circular base with height. Origin is center of circle. Origin is included. |
| **Line** | Straight path extending from origin. Origin not included unless chosen. |
| **Sphere** | Extends outward from origin point by radius. Origin is included. |

---

## Spell Attack & Save DC Formulas
- \`Spell Save DC = 8 + Proficiency Bonus + Spellcasting Ability Modifier\`
- \`Spell Attack Modifier = Proficiency Bonus + Spellcasting Ability Modifier\`
`
  }
];
