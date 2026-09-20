import { VaultNote } from '../types';

export const xgteDmToolsAndTrapsNotes: VaultNote[] = [
  {
    id: "xgte-dm-tools-mechanics",
    title: "XGtE - Dungeon Master's Tools - Mechanics & Environment",
    folder: "Xanathar's Guide (XGtE)",
    category: "Tool",
    tags: ["xgte", "dm-tools", "rules", "environment", "spellcasting", "dnd5e"],
    aliases: [
      "Rate of Falling",
      "Sleeping in Armor",
      "Adamantine Weapons",
      "Tying Knots",
      "Grid Spellcasting Areas"
    ],
    content: `---
title: XGtE - Dungeon Master's Tools - Mechanics & Environment
category: Tool
folder: Xanathar's Guide (XGtE)
tags: [xgte, dm-tools, rules, environment, spellcasting, dnd5e]
---

# Dungeon Master's Tools - Mechanics & Environment

XGtE Chapter 2 equips Dungeon Masters with modular adjudication rules for tactical situations, environmental perils, and spellcasting precision.

---

## 1. Simultaneous Effects
Most effects happen in succession. When two or more game effects occur at the exact same time (such as at the start or end of a turn), **the player or DM who controls the creature whose turn it is decides the order in which those effects resolve**.

---

## 2. Falling & Flying Hazards

### Rate of Falling (High Altitude)
- When a creature falls from a great height, it instantly descends up to **500 feet**.
- If still falling on subsequent turns, it descends up to **500 feet at the end of each turn** until it lands or the fall is halted.

### Flying Creatures and Falling
- A flying creature falls if knocked prone, reduced to 0 speed, or incapacitated, unless it can hover or is held aloft by magic (like the *Fly* spell).
- **Rule Option**: Subtract the creature's current flying speed from the distance fallen before calculating falling damage (\`1d6\` per 10 feet).
- **Halting Midair Fall**: A prone flying creature that starts its turn falling can halt the descent by spending **half its flying speed to counter the prone condition** (as if standing up in midair).

---

## 3. Sleep & Exhaustion

### Waking Someone
- Naturally sleeping creatures wake up upon taking any damage, or if an ally uses an action to shake or slap them awake.
- Loud noises (yelling, thunder, alarms) awaken natural sleepers immediately.
- Normal speech awakens a sleeper if the room is quiet and the sleeper's passive Perception is **15 or higher**.
- Whispers disturb sleep only if within 10 feet and passive Perception is **20 or higher**.

### Sleeping in Armor
- Sleeping in light armor carries no penalty.
- When finishing a long rest in **medium or heavy armor**, you regain only **one-quarter of your spent Hit Dice** (minimum 1 die), and the rest **does not reduce exhaustion levels**.

### Going Without a Long Rest
- Ending a 24-hour period without a long rest requires a **DC 10 Constitution saving throw** or you suffer 1 level of exhaustion.
- For each consecutive 24-hour period awake, the DC increases by **+5** (DC 15, DC 20, DC 25...).
- The DC resets to 10 once you finish a long rest.

---

## 4. Adamantine Weapons
- Adamantine weapons and ammunition are devastating against physical obstacles.
- **Auto-Critical**: Whenever an adamantine weapon or piece of ammunition hits an object, the hit is an **automatic critical hit**.
- Cost: An adamantine version of a melee weapon or 10 pieces of ammunition costs **500 gp more** than normal.

---

## 5. Tying Knots
- The creature tying a knot makes an **Intelligence (Sleight of Hand)** check.
- The total becomes the DC for anyone attempting to untie it with an Intelligence (Sleight of Hand) check or slip free with a **Dexterity (Acrobatics)** check.

---

## 6. Tool Proficiencies & Skill Synergies

| Tool | Relevant Skills for Advantage | Special Use |
|---|---|---|
| **Alchemist's Supplies** | Arcana, Investigation | Create alchemical fire, acid, or smoke; neutralize poisons. |
| **Brewer's Supplies** | History, Medicine, Persuasion | Purify water; detect poison in drink; gain drinking favors. |
| **Calligrapher's Supplies** | Arcana, History | Identify genuine historical documents, maps, and forged signatures. |
| **Carpenter's Tools** | History, Investigation, Stealth | Spot weak spots in wooden structures; reinforce barricades; silence creaking floorboards. |
| **Cartographer's Tools** | History, Nature, Survival | Accurately chart dungeons and overland travel; calculate travel times and distances. |
| **Cobbler's Tools** | Arcana, Investigation | Craft secret boot compartments; maintain boots to boost forced-march overland speed. |
| **Cook's Utensils** | History, Medicine, Survival | Boost short rest healing by +1 HP per Hit Die spent for up to 6 companions. |
| **Disguise Kit** | Deception, Intimidation, Performance | Copy another person's appearance and voice mannerisms flawlessly. |
| **Forgery Kit** | Arcana, Deception, History | Forge legal decrees, passes, wills, and letters of credit. |
| **Herbalism Kit** | Arcana, Medicine, Nature | Identify plants; brew antitoxin and *potions of healing*. |
| **Mason's Tools** | History, Investigation, Perception | Demolish stone barriers with double weapon damage; spot secret doors in masonry. |
| **Poisoner's Kit** | History, Investigation, Medicine, Nature | Safely extract venom from beasts; brew contact, ingested, or injury toxins. |
| **Thieves' Tools** | History, Investigation, Perception | Pick locks, disarm mechanical traps, and decipher clockwork mechanisms. |

---

## 7. Spellcasting on a Grid & Perception

### Perceiving a Caster at Work
- Casting a spell is perceptible if it uses **Verbal (V)**, **Somatic (S)**, or **Material (M)** components.
- If components are removed (via Sorcerer's *Subtle Spell* or innate monster traits), the casting is **completely imperceptible**.

### Invalid Spell Targets
- If a spell targets an invalid subject (such as casting *Charm Person* on an disguised vampire), the spell slot is **still expended**.
- The invalid target appears to succeed on its saving throw without rolling, giving no hint of why the spell failed.

### Areas of Effect on Grids
- **Template Method**: Cut 2D shape templates where 1 inch = 5 feet. Any square touched or overlapped by the template is inside the area of effect.
- **Token Method**:
  - **Circles/Spheres**: Expressed as square blocks of tokens (a 20-ft. radius = a 40×40 ft. square of dice/tokens).
  - **Cones**: Row-by-row expansion extending outward. Divide length by 5 to find number of rows. Each row adds 1 additional token.
  - **Lines**: Orthogonal or diagonal paths of tokens extending from the caster.
`
  },
  {
    id: "xgte-encounter-building",
    title: "XGtE - Encounter Building & Quick Matchups",
    folder: "Xanathar's Guide (XGtE)",
    category: "Tool",
    tags: ["xgte", "dm-tools", "encounters", "combat", "balance", "dnd5e"],
    aliases: [
      "Encounter Building System",
      "Solo Monster Challenge Rating",
      "Quick Matchups Table",
      "Multiple Monsters Table"
    ],
    content: `---
title: XGtE - Encounter Building & Quick Matchups
category: Tool
folder: Xanathar's Guide (XGtE)
tags: [xgte, dm-tools, encounters, combat, balance, dnd5e]
---

# Xanathar's Encounter Building & Quick Matchups

XGtE introduces an intuitive challenge-rating ratio system for designing balanced combat encounters without complex XP budget calculations.

---

## Step-by-Step Encounter Design
1. **Assess the Party**: Note character levels, hit point maximums, high-damage attacks, and saving throw weaknesses.
2. **Choose Encounter Size**: Decide whether the fight is against a single legendary monster or a group.
3. **Determine Challenge Ratings**: Use the Solo Monster or Multiple Monsters tables below.
4. **Select Specific Monsters**: Compare monster damage output against PC hit point maximums. Avoid single-attack lethal strikes unless designing a deadly boss fight.
5. **Add Flavor**: Use the Monster Personality and Relationship tables to bring dynamic roleplay into combat.

---

## Solo Legendary Monster Challenge Rating

Use this table to find the ideal Challenge Rating (CR) for a **single legendary creature** facing a party of 4, 5, or 6 characters:

| Character Level | Party of 4 | Party of 5 | Party of 6 |
|:---:|:---:|:---:|:---:|
| 1st | CR 1 | CR 2 | CR 2 |
| 2nd | CR 2 | CR 3 | CR 4 |
| 3rd | CR 3 | CR 4 | CR 5 |
| 4th | CR 4 | CR 5 | CR 6 |
| 5th | CR 7 | CR 8 | CR 9 |
| 6th | CR 8 | CR 9 | CR 10 |
| 7th | CR 9 | CR 10 | CR 11 |
| 8th | CR 10 | CR 11 | CR 12 |
| 9th | CR 11 | CR 12 | CR 13 |
| 10th | CR 12 | CR 13 | CR 14 |
| 11th | CR 13 | CR 14 | CR 15 |
| 12th | CR 15 | CR 16 | CR 17 |
| 13th | CR 16 | CR 17 | CR 18 |
| 14th | CR 17 | CR 18 | CR 19 |
| 15th | CR 18 | CR 19 | CR 20 |
| 16th | CR 19 | CR 20 | CR 21 |
| 17th | CR 20 | CR 21 | CR 22 |
| 18th | CR 20 | CR 21 | CR 22 |
| 19th | CR 21 | CR 22 | CR 23 |
| 20th | CR 22 | CR 23 | CR 24 |

*Note: For a deadly encounter, choose a monster with a CR 1 or 2 higher. For an easy encounter, choose a CR 3 or more lower.*

---

## Quick Matchups Table

Need an encounter on the fly? This table shows the CR equivalent to **one character** of a given level when using 1, 2, or 4 monsters:

| Character Level | 1 Monster per PC | 2 Monsters per PC | 4 Monsters per PC |
|:---:|:---:|:---:|:---:|
| 1st | CR 1/4 | CR 1/8 | — |
| 2nd | CR 1/2 | CR 1/4 | — |
| 3rd | CR 1/2 | CR 1/4 | CR 1/8 |
| 4th | CR 1 | CR 1/2 | CR 1/4 |
| 5th | CR 2 | CR 1 | CR 1/2 |
| 6th | CR 2 | CR 1 | CR 1/2 |
| 7th | CR 3 | CR 1 | CR 1/2 |
| 8th | CR 3 | CR 2 | CR 1 |
| 9th | CR 4 | CR 2 | CR 1 |
| 10th | CR 4 | CR 2 | CR 1 |
| 11th | CR 4 | CR 3 | CR 2 |
| 12th | CR 5 | CR 3 | CR 2 |
| 13th | CR 6 | CR 4 | CR 2 |
| 14th | CR 6 | CR 4 | CR 2 |
| 15th | CR 7 | CR 4 | CR 3 |
| 16th | CR 7 | CR 4 | CR 3 |
| 17th | CR 8 | CR 5 | CR 3 |
| 18th | CR 8 | CR 5 | CR 3 |
| 19th | CR 9 | CR 6 | CR 4 |
| 20th | CR 10 | CR 6 | CR 4 |

---

## Multiple Monsters Ratio (Sample: Levels 1–5)

Ratios express **Characters : Monsters** (e.g. 2/1 means 2 characters of that level equal 1 monster of that CR; 1/2 means 1 character equals 2 monsters).

| Level | CR 1/8 | CR 1/4 | CR 1/2 | CR 1 | CR 2 | CR 3 | CR 4 | CR 5 | CR 6 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 1st | 1/2 | 1/1 | 3/1 | 5/1 | — | — | — | — | — |
| 2nd | 1/3 | 1/2 | 1/1 | 3/1 | 6/1 | — | — | — | — |
| 3rd | 1/5 | 1/2 | 1/1 | 2/1 | 4/1 | 6/1 | — | — | — |
| 4th | 1/8 | 1/4 | 1/2 | 1/1 | 2/1 | 4/1 | 6/1 | — | — |
| 5th | 1/12 | 1/8 | 1/4 | 1/2 | 1/1 | 2/1 | 3/1 | 5/1 | 6/1 |

---

## Combat Flavor Tables

### Monster Personality (d8)
1. **Cowardly**: Looking to surrender at the first sign of real danger.
2. **Greedy**: Focused on looting and grabbing dropped items.
3. **Braggart**: Makes loud shows of bravery, but flees when cornered.
4. **Fanatic**: Ready to fight to the death for their cause.
5. **Rabble**: Poorly trained and easily rattled by magic or casualties.
6. **Brave**: Disciplined, stands its ground and covers allies.
7. **Joker**: Taunts and mocks its enemies during attacks.
8. **Bully**: Refuses to believe it can lose until its leader drops.

### Monster Relationships (d6)
1. **Has a rival**: Wants one random ally in the group to suffer or fail.
2. **Is abused**: Hangs back and betrays its master at the first opportunity.
3. **Is worshiped**: Allies will sacrifice their reactions and turns to protect it.
4. **Is an outcast**: Its allies ignore its cries for help.
5. **Outcast by choice**: Cares only for self-preservation.
6. **Seen as a tyrant**: Its allies secretly cheer its defeat.
`
  },
  {
    id: "xgte-traps-simple",
    title: "XGtE - Traps Revisited - Simple Traps & Hazards",
    folder: "Xanathar's Guide (XGtE)",
    category: "Trap",
    tags: ["xgte", "traps", "dm-tools", "simple-traps", "dnd5e"],
    aliases: [
      "Simple Traps",
      "Bear Trap",
      "Pit Trap",
      "Poison Needle Trap",
      "Falling Portcullis"
    ],
    content: `---
title: XGtE - Traps Revisited - Simple Traps & Hazards
category: Trap
folder: Xanathar's Guide (XGtE)
tags: [xgte, traps, dm-tools, simple-traps, dnd5e]
---

# Traps Revisited - Simple Traps & Hazards

A simple trap activates once and is thereafter harmless or easily avoided.

---

## Designing Simple Traps

### Threat Benchmarks by Level
| Danger | Save / Check DC | Attack Bonus |
|:---:|:---:|:---:|
| **Moderate** | DC 10 | +5 |
| **Dangerous** | DC 15 | +8 |
| **Deadly** | DC 20 | +12 |

### Damage Severity by Tier
| Tier (Levels) | Moderate Damage | Dangerous Damage | Deadly Damage |
|:---:|:---:|:---:|:---:|
| **1–4** | 5 (1d10) | 11 (2d10) | 22 (4d10) |
| **5–10** | 11 (2d10) | 22 (4d10) | 55 (10d10) |
| **11–16** | 22 (4d10) | 55 (10d10) | 99 (18d10) |
| **17–20** | 55 (10d10) | 99 (18d10) | 132 (24d10) |

---

## Catalog of Example Simple Traps

### 1. Bear Trap
*Simple trap (level 1–4, moderate threat)*
- **Trigger**: A mechanical steel jaw hidden under foliage or dirt. Stepping on the pressure plate springs the jaws shut.
- **Effect**: +5 attack roll against the triggering creature. *Hit*: **5 (1d10)** piercing damage and the creature is **restrained** (speed 0).
- **Countermeasures**: DC 10 Wisdom (Perception) spots the trap. A DC 10 Dexterity check using thieves' tools or a DC 10 Strength check opens and jams the jaws.

### 2. Crossbow Trap
*Simple trap (level 1–4, dangerous threat)*
- **Trigger**: A trip wire strung across a hallway 3 inches above the floor.
- **Effect**: +8 attack roll against the triggering creature. *Hit*: **11 (2d10)** piercing damage from a heavy bolt.
- **Countermeasures**: DC 15 Wisdom (Perception) spots the trip wire. A DC 15 Dexterity check with thieves' tools cuts or disables the wire without triggering it.

### 3. Falling Portcullis
*Simple trap (level 1–4, moderate threat)*
- **Trigger**: A trip wire or pressure plate triggers iron gears that release an iron gate from the ceiling.
- **Effect**: The portcullis drops. Any creature in its space must make a **DC 10 Dexterity saving throw**, taking **11 (2d10)** bludgeoning damage and being pinned and knocked prone on a failure, or leaping 5 feet away on a success.
- **Countermeasures**: DC 10 Perception check spots the ceiling slot. A DC 10 Dexterity (thieves' tools) or DC 15 Strength (Athletics) check wedges or lifts the gate.

### 4. Fiery Blast Trap
*Simple trap (level 5–10, dangerous threat)*
- **Trigger**: Opening an unwarded chest or turning a locked brass door handle.
- **Effect**: A magical explosion of fire fills a 20-foot-radius sphere. Each creature in the area must make a **DC 15 Dexterity saving throw**, taking **28 (8d6)** fire damage on a failed save, or half on a success.
- **Countermeasures**: DC 15 Intelligence (Investigation) reveals faint scorched runes. DC 15 Intelligence (Arcana) or *Dispel Magic* (3rd level) neutralizes the rune.

### 5. Net Trap
*Simple trap (level 1–4, moderate threat)*
- **Trigger**: A trip wire releases a heavy weighted net suspended in the rafters.
- **Effect**: The net covers a 10-foot-square area. Creatures in the area must make a **DC 10 Dexterity saving throw** or become **restrained** and knocked prone.
- **Countermeasures**: DC 10 Perception spots the trip wire. Slashing damage (AC 10, 20 HP) cuts through the net.

### 6. Pit Trap (Concealed Pit)
*Simple trap (level 1–4, moderate threat)*
- **Trigger**: Weight of 50 lbs. or more breaks through false canvas or wooden slats covering a 10-foot-deep pit.
- **Effect**: The creature falls 10 feet, taking **3 (1d6)** bludgeoning damage and landing prone. If iron spikes line the floor, it takes an extra **11 (2d10)** piercing damage.
- **Countermeasures**: DC 15 Perception spots the false covering. A 10-foot pole safely triggers the collapse ahead of time.

### 7. Poison Needle Trap
*Simple trap (level 1–4, deadly threat)*
- **Trigger**: Tampering with a lock without the proper key or failing a thieves' tools check by 5 or more.
- **Effect**: A spring-loaded needle injects venom into the finger: **1** piercing damage plus **11 (2d10)** poison damage, and the creature must succeed on a **DC 15 Constitution saving throw** or be **poisoned** for 1 hour.
- **Countermeasures**: DC 20 Investigation check reveals the microscopic needle aperture. DC 15 Dexterity (thieves' tools) check disables the spring mechanism.

### 8. Scything Blade Trap
*Simple trap (level 5–10, dangerous threat)*
- **Trigger**: Pressure plate across a 10-foot corridor releases a curved crescent steel blade swinging from a wall slot.
- **Effect**: +8 attack roll against all creatures in the 10-foot line. *Hit*: **22 (4d10)** slashing damage.
- **Countermeasures**: DC 15 Perception spots the narrow slot in the masonry. DC 15 Dexterity (thieves' tools) wedges the swinging pivot arm.

### 9. Sleep of Ages Trap
*Simple trap (level 11–16, dangerous threat)*
- **Trigger**: Breaking an obsidian seal on a sarcophagus releases ancient enchanted gas.
- **Effect**: The gas floods a 30-foot-radius chamber. Each creature must make a **DC 15 Constitution saving throw** or fall **unconscious for 1d4 days**. Damage awakens a creature early.
- **Countermeasures**: DC 15 Arcana detects sleep enchantments. A *Gust of Wind* spell or DC 15 thieves' tools check plugs the vent holes.
`
  },
  {
    id: "xgte-traps-complex",
    title: "XGtE - Traps Revisited - Complex Traps",
    folder: "Xanathar's Guide (XGtE)",
    category: "Trap",
    tags: ["xgte", "traps", "complex-traps", "dm-tools", "dnd5e"],
    aliases: [
      "Complex Traps",
      "Path of Blades",
      "Poisoned Tempest",
      "Sphere of Crushing Doom"
    ],
    content: `---
title: XGtE - Traps Revisited - Complex Traps
category: Trap
folder: Xanathar's Guide (XGtE)
tags: [xgte, traps, complex-traps, dm-tools, dnd5e]
---

# Traps Revisited - Complex Traps

Unlike simple traps, a complex trap acts on initiative round after round like a legendary encounter, presenting dynamic perils that evolve and demand multiple coordinated countermeasures.

---

## Anatomy of a Complex Trap
- **Initiative**: Acts on initiative count **20**, **10**, or **both 20 and 10**.
- **Active Elements**: Attacks or hazards that occur on the trap's turn.
- **Dynamic Elements**: Escalations (rising water, speeding blades, thickening poison) that increase danger as rounds pass.
- **Constant Elements**: Ongoing hazards that trigger whenever a creature ends its turn in a specific zone.
- **Countermeasures**: Typically requires **3 successful checks** across its different elements to disable or dismantle.

### Complex Trap Experience Awards
| Trap Level Tier | XP Award |
|:---:|:---:|
| **1–4** | 650 XP |
| **5–10** | 3,850 XP |
| **11–16** | 11,100 XP |
| **17–20** | 21,500 XP |

---

## Example Complex Traps

### 1. Path of Blades
*Complex trap (level 1–4, dangerous threat)*
- **Description**: A 60-foot corridor lined with whirling spinning blades, crushing pillars, and rune-carved floor glyphs.
- **Trigger**: Stepping more than 10 feet into the hall activates iron grates that seal both ends.
- **Initiative**: Acts on count **20** and count **10**.
- **Active Elements**:
  - *Count 20 (Whirling Blades)*: Whirling blades sweep down the hall. +8 attack roll against each creature in the hall; *Hit*: **11 (2d10)** slashing damage.
  - *Count 10 (Crushing Pillars)*: Heavy stone blocks slam from the ceiling. DC 15 Dexterity save; *Fail*: **11 (2d10)** bludgeoning damage and knocked prone.
- **Dynamic Element**: The blades accelerate each round, adding **+2 to the attack bonus** and **+3 (1d6) slashing damage** per round (up to a max of +14 to hit).
- **Constant Element**: Any creature ending its turn in the corridor takes **5 (1d10)** slashing damage from exposed spinning gears.
- **Countermeasures**:
  - *Rune Disarm (Arcana DC 15)*: 3 successes shuts down the blade motors.
  - *Gears Jam (Thieves' Tools or Athletics DC 15)*: Wedges a blade rail, lowering its attack roll by 2.
  - *Exit Grate (Athletics DC 20)*: Forces open the iron grate at the far end to escape.

---

### 2. Poisoned Tempest
*Complex trap (level 5–10, deadly threat)*
- **Description**: A grand vault chamber with ceiling vents that flood the room with toxic green gas while vents in the floor generate a hurricane-force vortex.
- **Trigger**: Removing the golden chalice from the central altar without speaking the prayer of warding.
- **Initiative**: Acts on count **20**.
- **Active Element (Count 20)**: The room fills with billowing poison mist. Each creature in the room must make a **DC 15 Constitution saving throw**, taking **22 (4d10)** poison damage on a failed save, or half on a success.
- **Dynamic Element**: Each round, the poison density increases: DC increases by **+1** each round, and damage increases by **+5 (1d10)**.
- **Constant Element**: The tempest winds blow outward; any creature entering or ending its turn within 15 feet of the altar must succeed on a **DC 15 Strength saving throw** or be pushed 15 feet toward the wall spikes (taking **11 (2d10)** piercing damage).
- **Countermeasures**:
  - *Pillar Reliefs (Intelligence Religion DC 15)*: Identifies the safe kneeling posture, granting advantage on all saves.
  - *Vent Covers (Dexterity Sleight of Hand DC 15)*: 3 successes shuts off the ceiling vents, stopping poison escalation.
  - *Chalice Return (Athletics DC 15)*: Replacing the chalice with an object of equal weight stops the vortex.

---

### 3. Sphere of Crushing Doom
*Complex trap (level 5–10, deadly threat)*
- **Description**: A 10-foot-diameter solid iron sphere rolls down a steep spiral tunnel, smashing everything in its wake while fiery vents ignite the walls.
- **Trigger**: Stepping on a disguised pressure plate at the top of the ramp.
- **Initiative**: Acts on count **20** and count **10**.
- **Active Elements**:
  - *Count 20 (The Rolling Sphere)*: The sphere rolls 60 feet down the ramp. Any creature in its path must make a **DC 15 Dexterity saving throw**, taking **55 (10d10)** bludgeoning damage and being knocked prone on a failed save.
  - *Count 10 (Wall Flame Jets)*: Flaming jets scorch the lower ramp. DC 15 Dexterity save; *Fail*: **14 (4d6)** fire damage.
- **Dynamic Element**: The sphere gathers velocity as it descends: it moves **80 feet** on its second turn, and **100 feet** on subsequent turns!
- **Countermeasures**:
  - *Side Niches (Investigation DC 15)*: Spots concealed shallow alcoves large enough to squeeze into to avoid the rolling sphere.
  - *Wedge the Track (Athletics DC 20 with iron spikes)*: Halves the sphere's speed.
  - *Release Lever (Thieves' Tools DC 15)*: Pulls the emergency braking bar at the landing.
`
  }
];
