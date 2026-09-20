import { VaultNote } from '../types';
import {
  DEFAULT_STANDARD_CHARACTERS,
  DEFAULT_KID_CHARACTERS,
  convertCharacterToMarkdown
} from './defaultCharacterSheets';

export const standardSheetTemplateNote: VaultNote = {
  id: 'template-character-sheet-5e-standard',
  title: 'Template - 5e Standard Character Sheet',
  folder: 'Templates/Character Sheets',
  category: 'Template',
  tags: ['template', 'character-sheet', 'dnd-5e', 'player-character'],
  aliases: ['Standard Character Sheet Template', '5e Player Character Template'],
  content: `---
title: "<% tp.file.title %>"
type: character-sheet
sheet-system: dnd-5e-standard
name: "Character Name"
class: "Fighter 1"
race: "Human"
background: "Folk Hero"
alignment: "Neutral Good"
level: 1
ac: 16
hp: "12/12"
speed: "30 ft."
initiative: "+1"
proficiency-bonus: 2
tags:
  - character
  - 5e-standard
  - player-character
folder: "Characters"
---

# 🛡️ <% tp.file.title %>
> **Race:** [[Human]] • **Class & Level:** [[Fighter]] 1 • **Background:** [[Folk Hero]] • **Alignment:** Neutral Good

---

## 📊 Core Combat Vitals

| Armor Class | Initiative | Speed | Proficiency | Passive Perception | Hit Dice |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **16** | **+1** | **30 ft.** | **+2** | **13** | **1d10** |

- **Hit Points:** **12 / 12** (Temp HP: 0)
- **Inspiration:** [ ] Inspired
- **Death Saves:** Successes: [ ] [ ] [ ] | Failures: [ ] [ ] [ ]

---

## 🎲 Ability Scores & Saving Throws

| Ability | Score | Modifier | Saving Throw |
|---|:---:|:---:|:---:|
| **Strength (STR)** | 16 | **+3** | ✅ **+5** (Proficient) |
| **Dexterity (DEX)** | 12 | **+1** | **+1** |
| **Constitution (CON)** | 14 | **+2** | ✅ **+4** (Proficient) |
| **Intelligence (INT)** | 10 | **+0** | **+0** |
| **Wisdom (WIS)** | 12 | **+1** | **+1** |
| **Charisma (CHA)** | 8 | **-1** | **-1** |

---

## 🎯 Skill Proficiencies

| Skill | Ability | Proficient | Bonus |
|---|:---:|:---:|:---:|
| **Acrobatics** | DEX | [ ] | +1 |
| **Animal Handling** | WIS | ✅ | **+3** |
| **Arcana** | INT | [ ] | +0 |
| **Athletics** | STR | ✅ | **+5** |
| **Deception** | CHA | [ ] | -1 |
| **History** | INT | [ ] | +0 |
| **Insight** | WIS | [ ] | +1 |
| **Intimidation** | CHA | [ ] | -1 |
| **Investigation** | INT | [ ] | +0 |
| **Medicine** | WIS | [ ] | +1 |
| **Nature** | INT | [ ] | +0 |
| **Perception** | WIS | ✅ | **+3** |
| **Performance** | CHA | [ ] | -1 |
| **Persuasion** | CHA | [ ] | -1 |
| **Religion** | INT | [ ] | +0 |
| **Sleight of Hand** | DEX | [ ] | +1 |
| **Stealth** | DEX | [ ] | +1 |
| **Survival** | WIS | ✅ | **+3** |

---

## ⚔️ Attacks & Spellcasting

| Weapon / Attack | Atk Bonus | Damage & Type | Range / Properties |
|---|:---:|:---:|---|
| **Longsword** | **+5** | \`1d8 + 3\` slashing | Versatile (\`1d10 + 3\`), Melee |
| **Heavy Crossbow** | **+3** | \`1d10 + 1\` piercing | Ammunition, range 100/400, heavy, two-handed |
| **Dagger** | **+5** | \`1d4 + 3\` piercing | Finesse, light, thrown (range 20/60) |

---

## 🔮 Spellcasting (If Applicable)
- **Spellcasting Class:** None (or Wizard / Cleric / Sorcerer)
- **Spell Ability:** INT / WIS / CHA
- **Spell Save DC:** 8 + Prof + Mod
- **Spell Attack Bonus:** Prof + Mod
- **Spell Slots:**
  - 1st Level: [ ] [ ]
  - 2nd Level: [ ] [ ]

---

## 🎒 Equipment & Currency

- **Currency:** 🪙 **15 GP** • **20 SP** • **10 CP** • **0 PP**
- **Equipped Gear:**
  - Chain Mail (AC 16)
  - Longsword & Shield (+2 AC when equipped)
  - Heavy Crossbow & 20 bolts
- **Backpack Inventory:**
  - Explorer's Pack (Bedroll, Mess kit, Tinderbox, 10 Torches, 10 Days Rations, Waterskin, 50 ft. Hempen rope)
  - Potion of Healing (\`2d4 + 2\` HP)

---

## 📜 Features & Traits

- **Fighting Style: Defense:** While you are wearing armor, you gain a +1 bonus to AC.
- **Second Wind:** On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level (once per short rest).

---

## 🎭 Backstory & Roleplay Pillars

- **Personality Traits:** I judge people by their actions, not their words. I face problems head-on.
- **Ideals:** Respect. People deserve to be treated with dignity and fairness.
- **Bonds:** I protect those who cannot protect themselves.
- **Flaws:** I have a hard time resisting a challenge to my honor.
`
};

export const kidSheetTemplateNote: VaultNote = {
  id: 'template-character-sheet-kids',
  title: 'Template - Kid Adventurer Character Sheet (Ages 5+)',
  folder: 'Templates/Character Sheets',
  category: 'Template',
  tags: ['template', 'kids-dnd', 'character-sheet', 'young-adventurers', 'simplified'],
  aliases: ['Kids Character Sheet Template', 'Young Adventurer Sheet'],
  content: `---
title: "<% tp.file.title %>"
type: character-sheet
sheet-system: kids-dnd-5e
age-group: "Ages 5 and Up"
hero-class: "Knight / Mage / Scout / Healer"
avatar: "🦁"
hearts: "8/8"
stars: "3/5"
gold: 10
tags:
  - character
  - kids-dnd
  - young-hero
folder: "Characters/Kids"
---

# 🌟 <% tp.file.title %>
> *The Young Adventurer* • **Hero Role:** Champion of the Realm • **Audience:** Ages 5 and Up

---

## ❤️ Hero Vitals & Tokens

| Stat | Tracker | How to Play |
|---|---|---|
| **Health Hearts** | ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ (8/8) | When a monster scratches you, cross off 1 or 2 hearts. Drink potion to get them back! |
| **Hero Stars** | ⭐ ⭐ ⭐ ☆ ☆ (3/5) | Awarded when you share, solve a puzzle, or do something brave! Spend 1 star to reroll! |
| **Shiny Gold Coins** | 🪙 **10 Gold Coins** | Buy yummy pastries, magic rope, or treats for your pet companion! |

---

## 🦾 The 6 Super-Stats (Roll d20 + Your Bonus!)

| Super-Stat | Bonus | What It Does (Kid Friendly!) |
|---|:---:|---|
| **🦾 Brawn** (Strength) | **+3** | Smashing locked doors, pushing boulders, huge hero jumps! |
| **⚡ Agility** (Speed & Sneak) | **+2** | Dodging monster traps, quiet tiptoeing, archery! |
| **❤️ Heart** (Toughness) | **+2** | Staying brave, shaking off spooky frights, eating spicy soup! |
| **🧠 Smarts** (Brains & Magic) | **+1** | Solving riddles, reading ancient fairy maps, knowing monster secrets! |
| **👁️ Senses** (Eyes & Ears) | **+1** | Spotting hidden treasure chests, hearing whispers in the bushes! |
| **✨ Smile** (Charm & Friendship) | **+2** | Cheering up sad friends, tickling grumpy goblins, singing songs! |

---

## ⚡ Super Hero Moves (Pick 2 or 3!)

### ⚔️ Hero Strike (Action)
- **How to Roll:** Roll a 20-sided die (d20) and add your **Brawn** or **Agility**!
- **On a 10 or higher:** You hit the monster! It loses 2 Hearts or runs away laughing!

### 🛡️ Guardian Shield (Reaction)
- **How to Roll:** When a friend is in trouble, jump in front!
- **On a 10 or higher:** You block the attack completely with your shield!

### 💖 Friendship Healing Touch (Special Power)
- **How to Roll:** Spend 1 Hero Star ⭐ or roll **Smile (+2)**!
- **Effect:** Restore 2 Hearts to your friend or pet immediately!

---

## 🐾 Pet Companion
- **Pet Name:** [Barnaby / Twinkle / Nutmeg / Pip]
- **Pet Kind:** [Puppy / Firefly / Baby Dragon / Owl / Squirrel]
- **Special Companion Trick:** Can sniff out hidden cookies or fly through tiny windows to fetch keys!

---

## 🎒 Magic Backpack (Draw or Write Your Items!)
- [ ] 🥧 **Yummy Apple Tart:** Eat to restore 1 Heart.
- [ ] 🔦 **Sunshine Torch:** Shines bright friendly light that chases away shadows.
- [ ] 🪢 **Soft Rainbow Rope:** 50 feet of lightweight rope.
- [ ] 🔔 **Golden Whistle:** Rings loud enough for guards or companions to hear.

---

## 📜 Hero Roleplay
- **Hero Motto:** *"Never give up, and always help a friend!"*
- **Favorite Snack:** Warm honey cookies and cold berry milk.
`
};

export const runningDndForKidsGuideNote: VaultNote = {
  id: 'guide-running-dnd-for-kids',
  title: 'DM Guide - Running D&D for Kids (Ages 5 and Up)',
  folder: 'Rules & Reference',
  category: 'Rulebook',
  tags: ['dm-guide', 'kids-dnd', 'parenting', 'young-adventurers', 'game-master'],
  aliases: ['Running D&D for Kids', 'Kids TTRPG Guide', 'Young Players Guide'],
  content: `---
title: "DM Guide - Running D&D for Kids (Ages 5 and Up)"
category: "Rulebook"
tags:
  - dm-guide
  - kids-dnd
  - young-adventurers
  - pedagogy
folder: "Rules & Reference"
---

# 🎲 DM Guide: Running D&D for Kids (Ages 5 and Up)

Running Tabletop Roleplaying Games for young adventurers (ages 5 to 10) is one of the most rewarding experiences in gaming. At this age, children possess limitless imagination, pure empathy, and an instinct for cooperative play—but standard 5e rules with 300-page manuals and multi-variable arithmetic can quickly stall the magic.

This guide provides an authentic, classroom-tested framework to run fast, funny, heroic games using our **Simplified Kid Adventurer Sheet**.

---

## 🌟 The Core Philosophy: "Yes, And!" & The Rule of Cool

1. **Say "Yes" to Wild Ideas:** If the 6-year-old says, *"Can I tickle the sleeping troll with a feather so he rolls over off the treasure chest?"*, the answer is **"YES! Roll your d20 and add your Agility!"**
2. **Failure Should Be Funny, Never Fatal:** If they roll a 3, the troll doesn't bite them in half—instead, the troll sneezes a giant cloud of purple dust, wakes up grumpily, and demands to know who stole his favorite bedtime pillow.
3. **Praise Teamwork Over Solo Glory:** Award **Hero Stars ⭐** whenever players help each other, share items, or come up with clever non-violent solutions.

---

## 💖 The Simplified Mechanics Framework

### 1. The 6 Super-Stats
Children understand concrete traits much better than abstract ability scores like "Wisdom 14":
- 🦾 **Brawn** (+1 to +3): Anything physical, climbing, smashing, lifting.
- ⚡ **Agility** (+1 to +3): Dodging, running fast, shooting bows, balancing.
- ❤️ **Heart** (+1 to +3): Bravery, enduring cold, standing strong.
- 🧠 **Smarts** (+1 to +3): Riddles, remembering clues, casting spells.
- 👁️ **Senses** (+1 to +3): Looking closely, listening to footsteps, tracking.
- ✨ **Smile** (+1 to +3): Making friends, talking to kings, performing tricks.

### 2. The Universal Roll Rule: 10 is the Magic Number
Throw out complex target DCs. Keep it simple:
- **Roll a d20 + Stat Bonus**:
  - **1 to 9 ("Uh-oh! But..."):** Almost! You slip or make a loud noise, but you spot a secret door!
  - **10 to 14 ("Hooray!"):** Clean success! You do exactly what you set out to do.
  - **15 to 19 ("Super Move!"):** Great success! You succeed and get an extra bonus.
  - **Natural 20 ("LEGENDARY!"):** Everyone at the table cheers! Hand the child a golden **Hero Star ⭐**!

### 3. Visual Health: The Hearts System (Like Zelda!)
Instead of calculating \`44 - 7 - 12 + 5 HP\`, give young heroes **6 to 9 red hearts**:
- Light hit (bee sting, thrown tomato, small scrape): **Lose 1 Heart**.
- Heavy hit (dragon breath, falling into a mud pit): **Lose 2 Hearts**.
- Drinking a potion or eating mom's honey cake: **Regain 2 Hearts**.
- Reaching 0 Hearts: **They are NEVER killed.** They get "Knocked Out", get the giggles, or are tangled in spiderwebs until their companion rescues them!

---

## ⏱️ Session Length & Physical Props

- **Keep It Short:** A session for ages 5–7 should run **30 to 45 minutes max**. Stop while they are still begging for more!
- **Use Real Physical Dice:** Kids love rolling the big sparkly d20!
- **Tokens & Miniatures:** Use LEGO figures, plastic toy animals, or colorful glass beads for Hero Stars.
- **Draw the Map Together:** Give them crayons and let them draw what the goblin's cave looks like!

---

## 🎒 5 Ready-to-Play Instant Quests for Kids

### 1. The Case of the Missing Birthday Cake
- **Hook:** The village baker's magical rainbow birthday cake for the Princess was stolen from the bakery windowsill!
- **Clues:** Blue frosting paw prints leading into the Whispering Woods.
- **Encounter:** A family of mischievous raccoon bandits wearing tiny bandit masks who just wanted to celebrate their baby brother's birthday.
- **Resolution:** Can the heroes bake mini-muffins with the raccoons so everyone gets a party?

### 2. The Dragon with the Terrible Toothache
- **Hook:** A young emerald dragon named Barnaby is roaring and accidentally melting snowmen outside the village.
- **Twist:** He isn't evil—a giant jawbreaker candy is stuck between his back fangs!
- **Challenge:** Climb up Barnaby's scaly back (Agility roll) and gently pull the candy loose (Brawn or Smarts roll).

### 3. The Runaway Cloud Sheep
- **Hook:** The Sky Giant fell asleep, and his herd of fluffy cloud-sheep drifted down into the farm!
- **Challenge:** The sheep float when they sneeze! Heroes must herd them using musical flutes, tasty clover, or gentle guidance.

### 4. The Goblin Treehouse Obstacle Course
- **Hook:** The friendly Moss-Goblin clan challenges the heroes to win the "Golden Acorn Trophy" in their treetop playground.
- **Challenges:** Rope swings over pudding pools, trampoline mushroom jumps, and riddle-telling owls!

### 5. Rescue the Royal Kitty from the Haunted Attic
- **Hook:** The castle kitten chased a spectral butterfly into the spooky old clock tower.
- **Atmosphere:** Floating feather dusters, animated suits of armor that want high-fives, and ticklish cobwebs.

---

## 🛡️ Safety & Emotional Comfort

- Always check in: *"Are we having fun, or is this monster too spooky?"*
- If a child seems uneasy about a monster, immediately add a silly twist: *"The shadow beast trips over its own tail and makes a squeaky rubber duck noise!"*
- Ensure every player gets their moment to shine. If one child is shy, have an animal companion run up to them and ask for their advice!
`
};

export const spellcasterSheetTemplateNote: VaultNote = {
  id: 'template-character-sheet-5e-spellcaster',
  title: 'Template - 5e Spellcaster Character Sheet',
  folder: 'Templates/Character Sheets',
  category: 'Template',
  tags: ['template', 'character-sheet', 'dnd-5e', 'spellcaster', 'magic'],
  aliases: ['Spellcaster Sheet Template', '5e Mage Sheet Template', 'Arcane Divine Sheet Template'],
  content: `---
title: "<% tp.file.title %>"
type: character-sheet
sheet-system: dnd-5e-spellcaster
name: "Caster Name"
class: "Wizard / Cleric / Sorcerer / Druid / Warlock 5"
race: "High Elf"
background: "Sage"
alignment: "Neutral Good"
level: 5
ac: 12
hp: "32/32"
speed: "30 ft."
initiative: "+2"
proficiency-bonus: 3
spellcasting-class: "Wizard"
spell-ability: "INT"
spell-save-dc: 15
spell-attack-bonus: "+7"
tags:
  - character
  - 5e-spellcaster
  - magic-user
folder: "Characters/Spellcasters"
---

# 🔮 <% tp.file.title %>
> **Race:** [[Elf|High Elf]] • **Class:** [[Wizard]] 5 • **Tradition:** [[Wizard#School of Evocation|Evocation]] • **Alignment:** Neutral Good

---

## 📊 Core Vitals & Spellcasting DC

| Armor Class | Initiative | Speed | Proficiency | Passive Perception | Hit Dice |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **12** (15 with *Mage Armor*) | **+2** | **30 ft.** | **+3** | **13** | **5d6** |

- **Hit Points:** **32 / 32** (Temp HP: 0)
- **Concentration:** [ ] Active Spell: \`None\`
- **Inspiration:** [ ] Inspired • **Death Saves:** [ ] [ ] [ ] / [ ] [ ] [ ]

### ⚡ Spellcasting Matrix
- **Spellcasting Ability:** **Intelligence (INT)**
- **Spell Save DC:** \`8 + 3 (Prof) + 4 (INT)\` = **15**
- **Spell Attack Bonus:** \`3 (Prof) + 4 (INT)\` = **+7**
- **Ritual Casting:** Yes (Can cast prepared spells with [R] tag as rituals adding 10 mins)

---

## 🔮 Spell Slots Tracker

| Level | Max Slots | Available | Expended Slots Tracker |
|:---:|:---:|:---:|---|
| **1st Level** | 4 | 4 | [ ] [ ] [ ] [ ] |
| **2nd Level** | 3 | 3 | [ ] [ ] [ ] |
| **3rd Level** | 2 | 2 | [ ] [ ] |
| **4th Level** | — | — | — |
| **5th Level** | — | — | — |

---

## 📖 Known & Prepared Spells

### Cantrips (At-Will, No Spell Slots Required)
- [[Fire Bolt]]: \`1d20 + 7\` to hit, range 120 ft., damage: \`2d10\` fire.
- [[Ray of Frost]]: \`1d20 + 7\` to hit, range 60 ft., damage: \`2d8\` cold + speed reduced by 10 ft.
- [[Mage Hand]]: Range 30 ft., spectral hand lifts up to 10 lbs.
- [[Prestidigitation]]: Minor sensory effects, cleans or soils items, lights candles.

### 1st-Level Spells
- [x] [[Mage Armor]]: Target base AC becomes 13 + DEX (AC 15) for 8 hours.
- [x] [[Shield]]: Reaction when hit, +5 AC and immunity to *Magic Missile* until next turn.
- [x] [[Magic Missile]]: 3 darts auto-hit, \`3 * (1d4 + 1)\` force damage.
- [x] [[Detect Magic]] [R]: Detect presence of magic within 30 ft. for 10 minutes (conc).

### 2nd-Level Spells
- [x] [[Misty Step]]: Bonus action, teleport up to 30 ft. to an unoccupied space you can see.
- [x] [[Scorching Ray]]: 3 rays, each \`1d20 + 7\` to hit, \`2d6\` fire damage each.
- [x] [[Mirror Image]]: Creates 3 illusory duplicates to absorb incoming hits.

### 3rd-Level Spells
- [x] [[Fireball]]: DEX save DC 15, 20-ft radius sphere, \`8d6\` fire damage (half on save).
- [x] [[Counterspell]]: Reaction to interrupt a creature within 60 ft. casting a spell.
- [x] [[Haste]]: Action, conc. +2 AC, double speed, advantage on DEX saves, extra action.

---

## 🎲 Ability Scores & Saving Throws

| Ability | Score | Mod | Save |
|---|:---:|:---:|:---:|
| **Strength (STR)** | 8 | **-1** | -1 |
| **Dexterity (DEX)** | 14 | **+2** | +2 |
| **Constitution (CON)** | 14 | **+2** | +2 *(Conc Check: DC 10 or half damage)* |
| **Intelligence (INT)** | 18 | **+4** | ✅ **+7** (Proficient) |
| **Wisdom (WIS)** | 13 | **+1** | ✅ **+4** (Proficient) |
| **Charisma (CHA)** | 10 | **+0** | +0 |

---

## 🎒 Arcane Gear, Components & Focus

- **Arcane Focus:** Crystal orb mounted on polished ironwood wand.
- **Component Pouch:** Bat guano, sulfur, copper wire, fleece, feather, tiny mirror.
- **Spellbook:** Leather-bound tome containing all transcribed spells and formulas.
- **Currency:** 🪙 **145 GP** • **25 SP** • **10 CP**
`
};

export const martialSheetTemplateNote: VaultNote = {
  id: 'template-character-sheet-5e-martial',
  title: 'Template - 5e Martial Combatant Character Sheet',
  folder: 'Templates/Character Sheets',
  category: 'Template',
  tags: ['template', 'character-sheet', 'dnd-5e', 'fighter', 'barbarian', 'martial'],
  aliases: ['Martial Combatant Template', '5e Warrior Sheet Template'],
  content: `---
title: "<% tp.file.title %>"
type: character-sheet
sheet-system: dnd-5e-martial
name: "Warrior Name"
class: "Fighter / Barbarian / Paladin 5"
race: "Mountain Dwarf"
background: "Soldier"
alignment: "Lawful Neutral"
level: 5
ac: 18
hp: "49/49"
speed: "30 ft."
initiative: "+1"
proficiency-bonus: 3
extra-attack: 2
fighting-style: "Great Weapon Fighting"
tags:
  - character
  - 5e-martial
  - warrior
folder: "Characters/Martial"
---

# ⚔️ <% tp.file.title %>
> **Race:** [[Dwarf|Mountain Dwarf]] • **Class:** [[Fighter]] 5 (Battle Master) • **Background:** [[Soldier]]

---

## 📊 Core Combat Vitals

| Armor Class | Initiative | Speed | Proficiency | Passive Perception | Hit Dice |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **18** (Plate) | **+1** | **30 ft.** | **+3** | **13** | **5d10** |

- **Hit Points:** **49 / 49** (Temp HP: 0)
- **Extra Attack:** Attack **2 times** per Attack action.
- **Action Surge:** [ ] [x] (1/short rest - Take 1 extra action on your turn)
- **Second Wind:** [ ] [x] (1/short rest - Bonus action to heal \`1d10 + 5\` HP)

---

## 🛡️ Superiority Dice / Combat Maneuvers (If Battle Master)

- **Superiority Dice:** **4 x d8** per short or long rest: [ ] [ ] [ ] [ ]
- **Maneuver Save DC:** \`8 + 3 (Prof) + 4 (STR)\` = **15**

| Maneuver | Action Cost | Effect |
|---|---|---|
| **Trip Attack** | On Weapon Hit | Add \`1d8\` damage; target must make STR save DC 15 or be knocked **Prone**. |
| **Riposte** | Reaction on Enemy Miss | Spend 1 die; make melee weapon attack against attacker and add \`1d8\` to damage. |
| **Menacing Attack** | On Weapon Hit | Add \`1d8\` damage; target must make WIS save DC 15 or be **Frightened** until end of your next turn. |
| **Pushing Attack** | On Weapon Hit | Add \`1d8\` damage; push Large or smaller target up to 15 ft. on failed STR save DC 15. |

---

## ⚔️ Weapon Arsenal

| Weapon | Attack Bonus | Damage & Type | Properties / Mastery |
|---|:---:|:---:|---|
| **Greatsword** | **+7** | \`2d6 + 4\` slashing | Heavy, two-handed, reroll 1s and 2s on damage dice |
| **Javelin** | **+7** | \`1d6 + 4\` piercing | Thrown (range 30/120 ft.) |
| **Warhammer** | **+7** | \`1d8 + 4\` bludgeoning | Versatile (\`1d10 + 4\`) |

---

## 🎲 Ability Scores & Saves

| Ability | Score | Mod | Save |
|---|:---:|:---:|:---:|
| **Strength (STR)** | 18 | **+4** | ✅ **+7** (Proficient) |
| **Dexterity (DEX)** | 12 | **+1** | +1 |
| **Constitution (CON)** | 16 | **+3** | ✅ **+6** (Proficient) |
| **Intelligence (INT)** | 10 | **+0** | +0 |
| **Wisdom (WIS)** | 12 | **+1** | +1 |
| **Charisma (CHA)** | 8 | **-1** | -1 |
`
};

export const expertStealthSheetTemplateNote: VaultNote = {
  id: 'template-character-sheet-5e-expert-stealth',
  title: 'Template - 5e Stealth & Skill Expert Character Sheet',
  folder: 'Templates/Character Sheets',
  category: 'Template',
  tags: ['template', 'character-sheet', 'dnd-5e', 'rogue', 'bard', 'expert', 'stealth'],
  aliases: ['Stealth Expert Sheet Template', '5e Rogue Sheet Template'],
  content: `---
title: "<% tp.file.title %>"
type: character-sheet
sheet-system: dnd-5e-expert
name: "Operative Name"
class: "Rogue (Thief or Assassin) 5"
race: "Lightfoot Halfling"
background: "Criminal / Spy"
alignment: "Chaotic Good"
level: 5
ac: 16
hp: "38/38"
speed: "25 ft."
initiative: "+4"
proficiency-bonus: 3
sneak-attack: "3d6"
passive-perception: 18
passive-investigation: 16
tags:
  - character
  - 5e-expert
  - rogue
  - stealth
folder: "Characters/Experts"
---

# 🗡️ <% tp.file.title %>
> **Race:** [[Halfling|Lightfoot Halfling]] • **Class:** [[Rogue]] 5 • **Expertise:** Stealth, Thieves' Tools

---

## 📊 Core Infiltrator Vitals

| Armor Class | Initiative | Speed | Proficiency | Passive Perception | Passive Investigation |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **16** (Studded Leather) | **+4** | **25 ft.** | **+3** | **18** (Expertise) | **16** |

- **Hit Points:** **38 / 38** (Hit Dice: 5d8)
- **Sneak Attack (3d6):** Deal extra \`3d6\` damage once per turn to a target hit with advantage or within 5 ft. of an ally.
- **Cunning Action:** Bonus action each turn to **Dash**, **Disengage**, or **Hide**.
- **Uncanny Dodge:** Reaction when hit by an attacker you see to **halve the damage**.

---

## 🎯 Skill Proficiencies & Expertise Matrix

| Skill | Ability | Status | Total Modifier |
|---|:---:|:---:|:---:|
| **Stealth** | DEX | ⭐ **Expertise** | **+10** (\`4 DEX + 6 Double Prof\`) |
| **Perception** | WIS | ⭐ **Expertise** | **+8** (\`2 WIS + 6 Double Prof\`) |
| **Thieves' Tools** | DEX | ⭐ **Expertise** | **+10** (\`4 DEX + 6 Double Prof\`) |
| **Acrobatics** | DEX | ✅ Proficient | **+7** (\`4 DEX + 3 Prof\`) |
| **Deception** | CHA | ✅ Proficient | **+4** (\`1 CHA + 3 Prof\`) |
| **Sleight of Hand** | DEX | ✅ Proficient | **+7** (\`4 DEX + 3 Prof\`) |
| **Investigation** | INT | ✅ Proficient | **+5** (\`2 INT + 3 Prof\`) |

---

## ⚔️ Finesse & Ranged Attacks

| Weapon | Atk Bonus | Damage | Notes |
|---|:---:|:---:|---|
| **Rapier** | **+7** | \`1d8 + 4\` piercing + \`3d6\` Sneak Attack | Finesse, Melee (5 ft.) |
| **Shortbow** | **+7** | \`1d6 + 4\` piercing + \`3d6\` Sneak Attack | Range 80/320 ft., Ammunition |
| **Daggers (x4)** | **+7** | \`1d4 + 4\` piercing + \`3d6\` Sneak Attack | Finesse, light, thrown (range 20/60 ft.) |
`
};

export const modernSheetTemplateNote: VaultNote = {
  id: 'template-character-sheet-5e-modern',
  title: 'Template - 5e Modern / Urban Operative Character Sheet',
  folder: 'Templates/Character Sheets',
  category: 'Template',
  tags: ['template', 'character-sheet', 'modern-handbook', 'gunslinger', 'cyber', 'urban'],
  aliases: ['Modern Character Sheet Template', '5e Modern Handbook Template'],
  content: `---
title: "<% tp.file.title %>"
type: character-sheet
sheet-system: dnd-5e-modern
name: "Operative Name"
class: "Fighter (Commando) / Rogue 5"
race: "Human (Modern)"
background: "Tactical Operative"
alignment: "Lawful Neutral"
level: 5
ac: 16
hp: "44/44"
speed: "30 ft."
initiative: "+4"
proficiency-bonus: 3
tags:
  - character
  - modern-5e
  - operative
  - firearms
folder: "Characters/Modern"
---

# 🔫 <% tp.file.title %>
> **Setting:** [[Modern Equipment & Vehicles|Modern 5e]] • **Role:** Tactical Special Agent • **Armor:** Kevlar Tactical Vest

---

## 📊 Core Tactical Vitals

| Armor Class | Initiative | Speed | Proficiency | Passive Perception | Hit Dice |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **16** (Kevlar Vest) | **+4** | **30 ft.** | **+3** | **14** | **5d10** |

- **Hit Points:** **44 / 44**
- **Action Surge:** [ ] (1/short rest - Extra action on your turn)
- **Gunslinger Style:** +2 bonus to attack rolls made with modern firearms.

---

## 🎯 Modern Ballistic Arsenal

| Firearm / Weapon | Atk Bonus | Damage | Range & Magazine | Properties |
|---|:---:|:---:|:---:|---|
| **9mm Semi-Automatic Pistol** | **+9** | \`2d6 + 4\` piercing | 50/150 ft. (15 rds) | Reload, light, sidearm |
| **12-Gauge Tactical Shotgun** | **+7** | \`2d8\` piercing | 30/90 ft. (6 rds) | Spread, heavy, two-handed |
| **Tactical Combat Knife** | **+7** | \`1d4 + 4\` piercing | Melee (20/60 ft.) | Finesse, light, thrown |
| **Flashbang Grenade (x2)** | Save DC 15 | Blinded & Deafened | 60 ft. throw | 15-ft cone, 1 round duration |

---

## 💻 Tech & Cyber Tools
- **Ruggedized Laptop:** Hacker decryption software, encrypted comms suite.
- **Vehicle Proficiencies:** Automobiles, Motorcycles, Armored APCs.
- **Tactical Medkit:** Stabilizes wounded allies and restores \`2d8 + 4\` HP (3 uses).
`
};

export const multiclassSheetTemplateNote: VaultNote = {
  id: 'template-character-sheet-multiclass',
  title: 'Template - 5e Multiclass Character Sheet',
  folder: 'Templates/Character Sheets',
  category: 'Template',
  tags: ['template', 'character-sheet', 'dnd-5e', 'multiclass', 'advanced'],
  aliases: ['Multiclass Character Sheet Template', '5e Dual Class Template'],
  content: `---
title: "<% tp.file.title %>"
type: character-sheet
sheet-system: dnd-5e-multiclass
name: "Hero Name"
class: "Paladin 2 / Sorcerer 4"
race: "Half-Elf"
background: "Noble"
alignment: "Lawful Good"
total-level: 6
ac: 18
hp: "46/46"
speed: "30 ft."
initiative: "+1"
proficiency-bonus: 3
tags:
  - character
  - multiclass
  - 5e-standard
folder: "Characters/Multiclass"
---

# ⚔️✨ <% tp.file.title %> (Multiclass)
> **Combined Progression:** [[Paladin]] 2 / [[Sorcerer]] 4 (Divine Smite + Quickened Spellcaster)

---

## 📊 Multiclass Levels & Hit Dice Pool

| Primary Class | Level | Hit Die | Subclass / Archetype |
|---|:---:|:---:|---|
| **Paladin** | 2 | **2d10** | Divine Smite, Lay on Hands, Fighting Style |
| **Sorcerer** | 4 | **4d6** | Divine Soul / Draconic Bloodline, Metamagic |

- **Total Level:** **6** • **Proficiency Bonus:** **+3**
- **Combined Hit Points:** **46 / 46**
- **Armor Class:** **18** (Plate Armor or Chain Mail + Shield)

---

## 🔮 Multiclass Spell Slot Matrix (PHB Table)
*Spellcasting Level = Paladin 2 (Level/2 = 1) + Sorcerer 4 = Level 5 Caster Slots!*

| Spell Level | Total Slots | Slots Remaining |
|:---:|:---:|---|
| **1st Level** | 4 | [ ] [ ] [ ] [ ] |
| **2nd Level** | 3 | [ ] [ ] [ ] |
| **3rd Level** | 2 | [ ] [ ] *(Can be used for 4d8 Divine Smite or Fireball!)* |

- **Sorcery Points:** **4 / 4** (Quickened Spell, Twinned Spell)
- **Divine Smite:** Expend any spell slot on melee hit to deal \`2d8\` radiant + \`1d8\` per slot level above 1st (+1d8 vs fiends/undead).
`
};

export const sidekickRetainerSheetTemplateNote: VaultNote = {
  id: 'template-character-sheet-sidekick',
  title: 'Template - 5e Sidekick & NPC Retainer Sheet',
  folder: 'Templates/Character Sheets',
  category: 'Template',
  tags: ['template', 'character-sheet', 'dnd-5e', 'sidekick', 'retainer', 'npc'],
  aliases: ['Sidekick Character Sheet Template', 'NPC Companion Template'],
  content: `---
title: "<% tp.file.title %>"
type: character-sheet
sheet-system: dnd-5e-sidekick
name: "Sidekick Name"
sidekick-type: "Warrior / Expert / Spellcaster"
level: 5
ac: 16
hp: "38/38"
speed: "30 ft."
proficiency-bonus: 3
loyalty-score: 15
tags:
  - character
  - sidekick
  - companion
  - npc
folder: "Characters/Sidekicks"
---

# 🛡️ <% tp.file.title %> (Tasha's Sidekick)
> **Role:** Warrior (Defender) • **Level:** 5 • **Loyalty:** Steadfast Companion

---

## 📊 Sidekick Vitals

| Armor Class | Initiative | Speed | Hit Points | Hit Dice |
|:---:|:---:|:---:|:---:|:---:|
| **16** (Chain Shirt + Shield) | **+1** | **30 ft.** | **38 / 38** | **5d8** |

### 🌟 Sidekick Features (Warrior)
- **Defender:** Can use reaction to impose disadvantage on the attack roll of a creature within 5 ft. targeting someone other than the sidekick.
- **Second Wind:** Regain \`1d8 + 5\` HP as a bonus action once per short rest.
- **Extra Attack:** Can attack twice when taking the Attack action on their turn.
- **Improved Critical:** Weapon attacks score critical hits on roll of 19 or 20.

---

## ⚔️ Attacks & Equipment
- **Longsword:** \`1d20 + 6\` to hit, damage: \`1d8 + 3\` slashing.
- **Light Crossbow:** \`1d20 + 4\` to hit, range 80/320 ft., damage: \`1d8 + 1\` piercing.
`
};

// Generate sample character notes
const valerosNote: VaultNote = {
  id: 'char-valeros-ironheart',
  title: 'Valeros Ironheart (Level 5 Fighter)',
  folder: 'Characters/Standard',
  category: 'Character',
  tags: ['character', '5e-standard', 'fighter', 'champion'],
  aliases: ['Valeros', 'Valeros Ironheart'],
  content: convertCharacterToMarkdown(DEFAULT_STANDARD_CHARACTERS[0])
};

const ellywickNote: VaultNote = {
  id: 'char-ellywick-timbers',
  title: 'Ellywick Timbers (Level 5 Wizard)',
  folder: 'Characters/Standard',
  category: 'Character',
  tags: ['character', '5e-standard', 'wizard', 'evocation'],
  aliases: ['Ellywick', 'Ellywick Timbers'],
  content: convertCharacterToMarkdown(DEFAULT_STANDARD_CHARACTERS[1])
};

const kaelenNote: VaultNote = {
  id: 'char-kaelen-shadowstep',
  title: 'Kaelen Shadowstep (Level 5 Rogue)',
  folder: 'Characters/Standard',
  category: 'Character',
  tags: ['character', '5e-standard', 'rogue', 'thief'],
  aliases: ['Kaelen', 'Kaelen Shadowstep'],
  content: convertCharacterToMarkdown(DEFAULT_STANDARD_CHARACTERS[2])
};

const leoKidNote: VaultNote = {
  id: 'char-kid-sir-leo',
  title: 'Sir Leo the Brave (Kid Adventurer - Ages 5+)',
  folder: 'Characters/Kids',
  category: 'Character',
  tags: ['character', 'kids-dnd', 'young-hero', 'knight'],
  aliases: ['Sir Leo', 'Leo the Brave'],
  content: convertCharacterToMarkdown(DEFAULT_KID_CHARACTERS[0])
};

const lunaKidNote: VaultNote = {
  id: 'char-kid-luna-starwhisper',
  title: 'Luna Starwhisper (Kid Adventurer - Ages 5+)',
  folder: 'Characters/Kids',
  category: 'Character',
  tags: ['character', 'kids-dnd', 'young-hero', 'mage'],
  aliases: ['Luna', 'Luna Starwhisper'],
  content: convertCharacterToMarkdown(DEFAULT_KID_CHARACTERS[1])
};

export const blankStandardSheetTemplateNote: VaultNote = {
  id: 'template-blank-5e-character-sheet',
  title: 'Template - Blank 5e Character Sheet',
  folder: 'Templates/Character Sheets',
  category: 'Template',
  tags: ['template', 'character-sheet', 'dnd-5e', 'player-character', 'blank-sheet'],
  aliases: ['Blank Character Sheet Template', 'Blank 5e Sheet', 'Empty 5e Character Sheet'],
  content: `---
title: "<% tp.file.title %>"
type: character-sheet
sheet-system: dnd-5e-standard
name: "{{Character Name}}"
class: "{{Class}} 1"
race: "{{Race}}"
background: "{{Background}}"
alignment: "True Neutral"
level: 1
ac: 10
hp: "10/10"
speed: "30 ft."
initiative: "+0"
proficiency-bonus: 2
tags:
  - character
  - 5e-standard
  - player-character
  - blank-sheet
folder: "Characters"
---

# 🛡️ {{Character Name}}
> **Race:** [[{{Race}}]] • **Class & Level:** [[{{Class}}]] 1 • **Background:** [[{{Background}}]] • **Alignment:** {{Alignment}}

---

## 📊 Core Combat Vitals

| Armor Class | Initiative | Speed | Proficiency | Passive Perception | Hit Dice |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **10** | **+0** | **30 ft.** | **+2** | **10** | **1d__** |

- **Hit Points:** **__ / __** (Temp HP: 0)
- **Inspiration:** [ ] Inspired
- **Death Saves:** Successes: [ ] [ ] [ ] | Failures: [ ] [ ] [ ]

---

## 🎲 Ability Scores & Saving Throws

| Ability | Score | Modifier | Saving Throw Proficient | Total Save Mod |
|---|:---:|:---:|:---:|:---:|
| **Strength (STR)** | 10 | **+0** | [ ] | **+0** |
| **Dexterity (DEX)** | 10 | **+0** | [ ] | **+0** |
| **Constitution (CON)** | 10 | **+0** | [ ] | **+0** |
| **Intelligence (INT)** | 10 | **+0** | [ ] | **+0** |
| **Wisdom (WIS)** | 10 | **+0** | [ ] | **+0** |
| **Charisma (CHA)** | 10 | **+0** | [ ] | **+0** |

---

## 🎯 Skill Proficiencies

| Skill | Ability | Proficient | Expertise | Total Modifier |
|---|:---:|:---:|:---:|:---:|
| **Acrobatics** | DEX | [ ] | [ ] | +0 |
| **Animal Handling** | WIS | [ ] | [ ] | +0 |
| **Arcana** | INT | [ ] | [ ] | +0 |
| **Athletics** | STR | [ ] | [ ] | +0 |
| **Deception** | CHA | [ ] | [ ] | +0 |
| **History** | INT | [ ] | [ ] | +0 |
| **Insight** | WIS | [ ] | [ ] | +0 |
| **Intimidation** | CHA | [ ] | [ ] | +0 |
| **Investigation** | INT | [ ] | [ ] | +0 |
| **Medicine** | WIS | [ ] | [ ] | +0 |
| **Nature** | INT | [ ] | [ ] | +0 |
| **Perception** | WIS | [ ] | [ ] | +0 |
| **Performance** | CHA | [ ] | [ ] | +0 |
| **Persuasion** | CHA | [ ] | [ ] | +0 |
| **Religion** | INT | [ ] | [ ] | +0 |
| **Sleight of Hand** | DEX | [ ] | [ ] | +0 |
| **Stealth** | DEX | [ ] | [ ] | +0 |
| **Survival** | WIS | [ ] | [ ] | +0 |

---

## ⚔️ Attacks & Weapons

| Weapon / Attack | Atk Bonus | Damage & Type | Range & Properties |
|---|:---:|:---:|---|
| **Primary Weapon** | **+__** | \`1d__ + __\` [type] | Melee / Range __ ft. |
| **Secondary Weapon** | **+__** | \`1d__ + __\` [type] | Light, finesse |
| **Ranged Weapon** | **+__** | \`1d__ + __\` [type] | Ammunition, range __/__ |

---

## 🎒 Equipment & Currency

- **Currency:** 🪙 **__ GP** • **__ SP** • **__ CP** • **__ PP**
- **Equipped Gear:**
  - Armor: [[Armor Name]] (AC __)
  - Shield: (+2 AC when held)
  - Weapon(s):
- **Backpack & Inventory:**
  - Explorer's / Dungeoneer's Pack
  - Rations (5 days)
  - Bedroll & Waterskin
  - 50 ft. Hempen rope

---

## 📜 Features & Traits

### Racial Traits
- **Trait 1:** Description of racial feature.
- **Trait 2:** Description of racial feature.

### Class Features
- **Class Feature 1:** Description of level 1 feature.
- **Class Feature 2:** Description of level 1 feature.

### Background Feature
- **Background Feature:** Trait or privilege granted by background.

---

## 🎭 Backstory & Personality
- **Personality Traits:** 
- **Ideals:** 
- **Bonds:** 
- **Flaws:** 
`
};

export const blankSpellcasterSheetTemplateNote: VaultNote = {
  id: 'template-blank-spellcaster-sheet',
  title: 'Template - Blank Spellcaster Sheet',
  folder: 'Templates/Character Sheets',
  category: 'Template',
  tags: ['template', 'character-sheet', 'dnd-5e', 'spellcaster', 'magic', 'blank-sheet'],
  aliases: ['Blank Spellcaster Template', 'Blank Caster Sheet', 'Spellbook Template'],
  content: `---
title: "<% tp.file.title %>"
type: character-sheet
sheet-system: dnd-5e-spellcaster
name: "{{Caster Name}}"
class: "{{Spellcasting Class}} 1"
race: "{{Race}}"
background: "{{Background}}"
alignment: "Neutral Good"
level: 1
ac: 10
hp: "8/8"
speed: "30 ft."
initiative: "+0"
proficiency-bonus: 2
spellcasting-class: "{{Spellcasting Class}}"
spell-ability: "INT / WIS / CHA"
spell-save-dc: 12
spell-attack-bonus: "+4"
tags:
  - character
  - 5e-spellcaster
  - magic-user
  - blank-sheet
folder: "Characters"
---

# 🔮 {{Caster Name}}
> **Race:** [[{{Race}}]] • **Class:** [[{{Spellcasting Class}}]] 1 • **Spell Ability:** {{Spell Ability}}

---

## 📊 Core Vitals & Spellcasting DC

| Armor Class | Initiative | Speed | Proficiency | Passive Perception | Hit Dice |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **10** | **+0** | **30 ft.** | **+2** | **10** | **1d6** (or 1d8) |

- **Hit Points:** **__ / __** (Temp HP: 0)
- **Concentration:** [ ] Active Spell: \`None\`
- **Inspiration:** [ ] Inspired • **Death Saves:** [ ] [ ] [ ] / [ ] [ ] [ ]

### ⚡ Spellcasting Matrix
- **Spellcasting Class:** [[Wizard]] / [[Cleric]] / [[Sorcerer]] / [[Druid]] / [[Warlock]] / [[Bard]]
- **Spellcasting Ability:** **Intelligence / Wisdom / Charisma**
- **Spell Save DC:** \`8 + Proficiency + Ability Mod\` = **__**
- **Spell Attack Bonus:** \`Proficiency + Ability Mod\` = **+__**
- **Ritual Casting:** [ ] Yes (Adds 10 mins to casting time without expending slot)

---

## 🔮 Spell Slots Tracker (1st to 9th Level)

| Level | Max Slots | Available | Expended Slots Tracker |
|:---:|:---:|:---:|---|
| **1st Level** | __ | __ | [ ] [ ] [ ] [ ] |
| **2nd Level** | __ | __ | [ ] [ ] [ ] |
| **3rd Level** | __ | __ | [ ] [ ] [ ] |
| **4th Level** | __ | __ | [ ] [ ] [ ] |
| **5th Level** | __ | __ | [ ] [ ] [ ] |
| **6th Level** | __ | __ | [ ] [ ] |
| **7th Level** | __ | __ | [ ] [ ] |
| **8th Level** | __ | __ | [ ] |
| **9th Level** | __ | __ | [ ] |

---

## 📖 Known & Prepared Spells

### Cantrips (At-Will, No Spell Slots Required)
- [[Cantrip 1]]: Range __ ft., Effect: 
- [[Cantrip 2]]: Range __ ft., Effect: 
- [[Cantrip 3]]: Range __ ft., Effect: 
- [[Cantrip 4]]: Range __ ft., Effect: 

### 1st-Level Spells
- [ ] [[Spell Name 1]]: Action, range __ ft., conc? [ ], Description: 
- [ ] [[Spell Name 2]]: Action, range __ ft., conc? [ ], Description: 
- [ ] [[Spell Name 3]]: Action, range __ ft., conc? [ ], Description: 

### 2nd-Level Spells
- [ ] [[Spell Name]]: Action, range __ ft., conc? [ ], Description: 

### 3rd-Level Spells
- [ ] [[Spell Name]]: Action, range __ ft., conc? [ ], Description: 

---

## 🎒 Arcane Gear, Components & Focus
- **Spellcasting Focus:** Wand / Staff / Crystal / Holy Symbol / Instrument
- **Component Pouch:** [ ] Equipped
- **Spellbook / Prayer Scroll:** Transcribed spells catalog
- **Currency:** 🪙 **__ GP** • **__ SP** • **__ CP**
`
};

export const blankModernSheetTemplateNote: VaultNote = {
  id: 'template-blank-modern-5e-sheet',
  title: 'Template - Blank Modern 5e Sheet',
  folder: 'Templates/Character Sheets',
  category: 'Template',
  tags: ['template', 'character-sheet', 'dnd-5e', 'modern-5e', 'tactical', 'blank-sheet'],
  aliases: ['Blank Modern Sheet Template', 'Modern 5e Blank Template', 'Tactical Sheet'],
  content: `---
title: "<% tp.file.title %>"
type: character-sheet
sheet-system: modern-5e-tactical
name: "{{Operative Name}}"
class: "{{Modern Class}} 1"
race: "Human"
background: "{{Background}}"
alignment: "Lawful Neutral"
level: 1
ac: 12
hp: "11/11"
speed: "30 ft."
initiative: "+2"
proficiency-bonus: 2
ballistic-armor: "Kevlar Vest"
tags:
  - character
  - modern-5e
  - tactical
  - blank-sheet
folder: "Characters/Modern"
---

# 🎯 {{Operative Name}}
> **Codename / Background:** [[{{Background}}]] • **Specialty:** [[{{Modern Class}}]] 1

---

## 📊 Tactical Vitals & Armor Class

| Armor Class | Initiative | Tactical Speed | Proficiency | Passive Perception | Hit Dice |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **12** (Kevlar) | **+2** | **30 ft.** | **+2** | **12** | **1d10** |

- **Hit Points:** **__ / __** (Trauma Temp HP: 0)
- **Cover Value:** Half Cover (+2 AC) • Three-Quarters Cover (+5 AC)
- **Death Saves:** Stabilized: [ ] [ ] [ ] | Flatlined: [ ] [ ] [ ]

---

## 🔫 Firearms & Weapons Matrix

| Firearm / Weapon | Atk Bonus | Damage | Caliber / Ammo | Mag Capacity | Properties |
|---|:---:|:---:|:---:|:---:|---|
| **Primary Firearm** | **+__** | \`2d__\` ballistic | 9mm / 5.56mm | [ ] [ ] [ ] [ ] | Burst, Range __/__ |
| **Sidearm Pistol** | **+__** | \`2d6\` ballistic | 9mm Parabellum | 15 rounds | Range 50/150 ft. |
| **Tactical Knife** | **+__** | \`1d4 + __\` piercing | Melee | — | Finesse, light |

---

## 🧰 Modern Proficiencies & Gear
- **Tactical Gear:** Ballistic tactical vest, tactical goggles, zip-cuffs (4), tactical flashlight
- **Comms & Electronics:** Encrypted smartphone, radio ear-piece, lockpick / electronic bypass kit
- **Ammunition Tracking:** 
  - 9mm Magazines: [x] [x] [x] [ ] [ ] (15 rounds each)
  - Rifle Magazines: [x] [x] [ ] [ ] (30 rounds each)
- **Vehicle Proficiencies:** Land vehicles (Cars/Trucks), Watercraft, Aircraft
`
};

export const blankKidSheetTemplateNote: VaultNote = {
  id: 'template-blank-kids-character-sheet',
  title: 'Template - Blank Young Adventurer Sheet (Kids 5+)',
  folder: 'Templates/Character Sheets',
  category: 'Template',
  tags: ['template', 'character-sheet', 'kids-dnd', 'young-adventurers', 'blank-sheet'],
  aliases: ['Blank Kids Sheet Template', 'Blank Young Hero Sheet'],
  content: `---
title: "<% tp.file.title %>"
type: character-sheet
sheet-system: kids-dnd-5e
age-group: "Ages 5 and Up"
hero-class: "{{Hero Class}}"
avatar: "🌟"
hearts: "8/8"
stars: "3/5"
gold: 10
tags:
  - character
  - kids-dnd
  - young-hero
  - blank-sheet
folder: "Characters/Kids"
---

# 🌟 {{Hero Name}}
> *The Young Hero* • **Class / Role:** {{Hero Class}} • **Audience:** Ages 5 and Up

---

## ❤️ Hero Vitals & Tokens

| Stat | Tracker | How to Play |
|---|---|---|
| **Health Hearts** | ❤️ [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] (8 Hearts) | Cross off a heart when bumped or scratched! Drink a potion to get them back! |
| **Hero Stars** | ⭐ [ ] [ ] [ ] ☆ ☆ (3 of 5 Stars) | Spend 1 star to reroll any die or do something super brave! |
| **Shiny Gold Coins** | 🪙 **10 Gold Coins** | Spend to buy snacks, magic treats, or toys for your pet! |

---

## 🦾 The 6 Super-Stats (Assign +1, +2, or +3!)

| Super-Stat | Bonus | What It Does (Roll d20 + Bonus! 10+ Succeeds!) |
|---|:---:|---|
| **🦾 Brawn** | **+__** | Smashing locked doors, jumping over rivers, lifting boulders! |
| **⚡ Agility** | **+__** | Dodging monster traps, quiet tiptoeing, shooting arrows! |
| **❤️ Heart** | **+__** | Staying brave against spooky monsters, shaking off cold! |
| **🧠 Smarts** | **+__** | Solving riddles, reading ancient fairy maps, spell tricks! |
| **👁️ Senses** | **+__** | Spotting hidden treasure, hearing whispers in the bushes! |
| **✨ Smile** | **+__** | Making new friends, cheering up grumpy dragons, singing songs! |

---

## ⚡ Super Hero Moves (Pick or Write 2 or 3!)

### ⚔️ Move 1: Hero Strike (Action)
- **How to Roll:** Roll d20 + Brawn or Agility (10 or higher succeeds!)
- **Effect:** You strike the monster for 2 Hearts of damage or knock down an obstacle!

### 🛡️ Move 2: Guardian Help (Reaction)
- **How to Roll:** Roll d20 + Heart (10 or higher succeeds!)
- **Effect:** Jump in front of a friend or pet to protect them!

### ✨ Move 3: (Write Your Super Power)
- **How to Roll:** Spend 1 Hero Star ⭐ or roll Smarts / Smile!
- **Effect:** 

---

## 🐾 Pet Companion
- **Pet Name:** [Enter Pet Name]
- **Pet Kind:** [Puppy / Kitten / Dragon Hatchling / Owl / Bunny]
- **Companion Trick:** 

---

## 🎒 Magic Backpack & Treats
- [ ] 🥧 **Favorite Snack:** Restores 1 Heart when eaten.
- [ ] 🔦 **Friendly Flashlight:** Chases away scary dark shadows.
- [ ] 🪢 **Rainbow Rope:** 50 feet of soft climbing rope.
- [ ] 🔔 **Hero Whistle:** Calls for help or signals companions.

---

## 📖 Hero Motto
- **Hero Motto:** *"Never give up, and always help a friend!"*
`
};

export const blankSidekickSheetTemplateNote: VaultNote = {
  id: 'template-blank-sidekick-sheet',
  title: 'Template - Blank Sidekick & Retainer Sheet',
  folder: 'Templates/Character Sheets',
  category: 'Template',
  tags: ['template', 'character-sheet', 'dnd-5e', 'sidekick', 'retainer', 'blank-sheet'],
  aliases: ['Blank Sidekick Template', 'Blank Retainer Sheet', 'Companion Template'],
  content: `---
title: "<% tp.file.title %>"
type: character-sheet
sheet-system: dnd-5e-sidekick
name: "{{Companion Name}}"
sidekick-type: "Warrior / Expert / Spellcaster"
level: 1
master: "{{Master Name}}"
ac: 13
hp: "13/13"
speed: "30 ft."
tags:
  - character
  - sidekick
  - companion
  - retainer
  - blank-sheet
folder: "Characters"
---

# 🐾 {{Companion Name}} (Sidekick / Retainer)
> **Role:** Warrior / Expert / Spellcaster • **Master:** [[{{Master Name}}]] • **Level:** 1

---

## 📊 Combat Vitals
- **Armor Class:** **13** • **Initiative:** **+2** • **Speed:** **30 ft.** (or 40 ft.)
- **Hit Points:** **13 / 13** (Hit Dice: 2d8)
- **Loyalty Score:** **10 / 20** (Increases when treated kindly, praised, or fed treats)

---

## 🎲 Core Attributes
- **STR:** 14 (+2) • **DEX:** 14 (+2) • **CON:** 12 (+1)
- **INT:** 8 (-1) • **WIS:** 12 (+1) • **CHA:** 8 (-1)

---

## ⚔️ Actions & Reactions
- **Primary Attack:** +4 to hit, reach 5 ft., \`1d6 + 2\` damage.
- **Coordinated Strike:** Advantage on attack rolls against a creature if master is within 5 feet.
- **Defender Reaction:** When a creature attacks master, sidekick uses reaction to impose disadvantage.
`
};

export const characterSheetVaultNotes: VaultNote[] = [
  blankStandardSheetTemplateNote,
  blankSpellcasterSheetTemplateNote,
  blankModernSheetTemplateNote,
  blankKidSheetTemplateNote,
  blankSidekickSheetTemplateNote,
  standardSheetTemplateNote,
  spellcasterSheetTemplateNote,
  martialSheetTemplateNote,
  expertStealthSheetTemplateNote,
  modernSheetTemplateNote,
  multiclassSheetTemplateNote,
  sidekickRetainerSheetTemplateNote,
  kidSheetTemplateNote,
  runningDndForKidsGuideNote,
  valerosNote,
  ellywickNote,
  kaelenNote,
  leoKidNote,
  lunaKidNote
];

