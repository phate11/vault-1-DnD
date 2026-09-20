import { VaultNote } from '../types';

export const classesNotes: VaultNote[] = [
  {
    id: "class-barbarian",
    title: "Barbarian",
    folder: "Classes",
    category: "Class",
    tags: ["class", "barbarian", "rage", "berserker", "totem-warrior"],
    aliases: ["Barbarians"],
    content: `---
title: Barbarian
category: Class
folder: Classes
tags: [class, barbarian, rage, berserker, totem-warrior]
---

# Barbarian

A tall human tribesman strides through a blizzard, draped in fur and hefting his axe. He laughs as he charges toward the frost giant who dared poach his people's elk herd.

## Class Features
- **Hit Dice**: 1d12 per barbarian level
- **Hit Points at 1st Level**: 12 + your Constitution modifier
- **Hit Points at Higher Levels**: 1d12 (or 7) + your Constitution modifier per barbarian level after 1st
- **Proficiencies**:
  - *Armor*: Light armor, medium armor, shields
  - *Weapons*: Simple weapons, martial weapons
  - *Tools*: None
  - *Saving Throws*: Strength, Constitution
  - *Skills*: Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival
- **Equipment**: (a) a greataxe or (b) any martial melee weapon; (a) two handaxes or (b) any simple weapon; An explorer's pack and four javelins.

### The Barbarian Table
| Level | Proficiency Bonus | Features | Rages | Rage Damage |
| :---: | :---: | :--- | :---: | :---: |
| 1st | +2 | Rage, Unarmored Defense | 2 | +2 |
| 2nd | +2 | Reckless Attack, Danger Sense | 2 | +2 |
| 3rd | +2 | Primal Path | 3 | +2 |
| 4th | +2 | Ability Score Improvement | 3 | +2 |
| 5th | +3 | Extra Attack, Fast Movement | 3 | +2 |
| 6th | +3 | Path feature | 4 | +2 |
| 7th | +3 | Feral Instinct | 4 | +2 |
| 8th | +3 | Ability Score Improvement | 4 | +2 |
| 9th | +4 | Brutal Critical (1 die) | 4 | +3 |
| 10th | +4 | Path feature | 4 | +3 |
| 11th | +4 | Relentless Rage | 4 | +3 |
| 12th | +4 | Ability Score Improvement | 5 | +3 |
| 13th | +5 | Brutal Critical (2 dice) | 5 | +3 |
| 14th | +5 | Path feature | 5 | +3 |
| 15th | +5 | Persistent Rage | 5 | +3 |
| 16th | +5 | Ability Score Improvement | 5 | +4 |
| 17th | +6 | Brutal Critical (3 dice) | 6 | +4 |
| 18th | +6 | Indomitable Might | 6 | +4 |
| 19th | +6 | Ability Score Improvement | 6 | +4 |
| 20th | +6 | Primal Champion | Unlimited | +4 |

---

### Core Class Features
- **Rage**: On your turn, enter a rage as a bonus action. Gain advantage on Strength checks and Strength saving throws; bonus to melee weapon damage using Strength; resistance to bludgeoning, piercing, and slashing damage. Cannot cast spells or concentrate. Lasts 1 minute (ends early if knocked unconscious or if your turn ends and you haven't attacked a hostile creature or taken damage).
- **Unarmored Defense**: While not wearing armor, your AC equals \`10 + Dexterity modifier + Constitution modifier\`. Can use a shield and still gain this benefit.
- **Reckless Attack (2nd level)**: On your first attack on your turn, gain advantage on melee weapon attack rolls using Strength, but attacks against you have advantage until your next turn.
- **Danger Sense (2nd level)**: Advantage on Dexterity saving throws against effects you can see (traps, spells) while not blinded, deafened, or incapacitated.
- **Primal Path (3rd level)**: Choose Path of the Berserker or Path of the Totem Warrior (or modern [[Path of the Dreadnought]]).
- **Extra Attack (5th level)**: Attack twice whenever you take the Attack action on your turn.
- **Fast Movement (5th level)**: Speed increases by 10 feet while not wearing heavy armor.
- **Feral Instinct (7th level)**: Advantage on initiative rolls; act normally if surprised by raging first.
- **Brutal Critical (9th level)**: Roll one additional weapon damage die on a critical hit (2 extra at 13th, 3 at 17th).
- **Relentless Rage (11th level)**: If dropping to 0 HP while raging, make DC 10 Con save to drop to 1 HP instead (DC increases by 5 each time until rest).
- **Persistent Rage (15th level)**: Rage ends early only if you fall unconscious or choose to end it.
- **Indomitable Might (18th level)**: If your Strength check total is less than your Strength score, you can use your score instead.
- **Primal Champion (20th level)**: Strength and Constitution scores increase by 4 (maximums become 24).

---

## Primal Paths

### Path of the Berserker
- **Frenzy (3rd level)**: Make a single melee weapon attack as a bonus action on each turn while raging. Suffer one level of [[Conditions#Exhaustion|Exhaustion]] when rage ends.
- **Mindless Rage (6th level)**: Cannot be charmed or frightened while raging (existing effects suspended).
- **Intimidating Presence (10th level)**: Action to frighten a creature within 30 ft (Wis save vs DC \`8 + Prof + Cha mod\`).
- **Retaliation (14th level)**: When taking damage from a creature within 5 ft, use reaction to make a melee weapon attack against it.

### Path of the Totem Warrior
- **Spirit Seeker (3rd level)**: Cast [[Spells - Cantrips & 1st Level#Beast Sense|Beast Sense]] and [[Spells - Cantrips & 1st Level#Speak with Animals|Speak with Animals]] as rituals.
- **Totem Spirit (3rd level)**:
  - *Bear*: Resistance to all damage except psychic while raging.
  - *Eagle*: Disadvantage on opportunity attacks against you while raging; Dash as a bonus action.
  - *Wolf*: Friends have advantage on melee attack rolls against enemies within 5 ft of you while raging.
- **Aspect of the Beast (6th level)**:
  - *Bear*: Carrying capacity doubled, advantage on Strength checks to push, pull, lift, or break.
  - *Eagle*: See up to 1 mile, no disadvantage from dim light on Perception checks.
  - *Wolf*: Track creatures at fast pace, move stealthily at normal pace.
- **Spirit Walker (10th level)**: Cast [[Spells - 5th Level & Higher#Commune with Nature|Commune with Nature]] as a ritual.
- **Totemic Attunement (14th level)**:
  - *Bear*: Hostile creatures within 5 ft have disadvantage on attacks against targets other than you.
  - *Eagle*: Flying speed equal to walking speed in short bursts.
  - *Wolf*: Knock Large or smaller creatures prone as a bonus action on a melee hit.
`
  },
  {
    id: "class-bard",
    title: "Bard",
    folder: "Classes",
    category: "Class",
    tags: ["class", "bard", "bardic-inspiration", "college-of-lore", "college-of-valor"],
    aliases: ["Bards"],
    content: `---
title: Bard
category: Class
folder: Classes
tags: [class, bard, bardic-inspiration, college-of-lore, college-of-valor]
---

# Bard

Humming as she traces her fingers over an ancient monument in a long-forgotten ruin, a half-elf in rugged leathers finds knowledge springing into her mind, conjured forth by the magic of her song.

## Class Features
- **Hit Dice**: 1d8 per bard level
- **Hit Points at 1st Level**: 8 + your Constitution modifier
- **Hit Points at Higher Levels**: 1d8 (or 5) + your Constitution modifier per bard level after 1st
- **Proficiencies**:
  - *Armor*: Light armor
  - *Weapons*: Simple weapons, hand crossbows, longswords, rapiers, shortswords
  - *Tools*: Three musical instruments of your choice
  - *Saving Throws*: Dexterity, Charisma
  - *Skills*: Choose any three
- **Spellcasting**: Charisma is your spellcasting ability. Focus: musical instrument.
  - \`Spell Save DC = 8 + Proficiency Bonus + Cha mod\`
  - \`Spell Attack Modifier = Proficiency Bonus + Cha mod\`

### Core Features
- **Bardic Inspiration**: Bonus action within 60 ft gives an ally an inspiration die (**d6** at 1st, **d8** at 5th, **d10** at 10th, **d12** at 15th) to add to one ability check, attack roll, or saving throw within 10 minutes. Uses = Charisma modifier per long rest (short rest at 5th level via **Font of Inspiration**).
- **Jack of All Trades (2nd level)**: Add half proficiency bonus (rounded down) to any ability check that doesn't already include it.
- **Song of Rest (2nd level)**: Revitalize wounded allies during a short rest: +1d6 HP (increases to 1d8 at 9th, 1d10 at 13th, 1d12 at 17th).
- **Expertise (3rd & 10th level)**: Double proficiency bonus on two chosen skills.
- **Countercharm (6th level)**: Action to start a performance giving allies within 30 ft advantage on saves vs frightened and charmed.
- **Magical Secrets (10th, 14th, 18th level)**: Learn two spells from any class spell list.
- **Superior Inspiration (20th level)**: Regain 1 use of Bardic Inspiration if you have none when rolling initiative.

---

## Bard Colleges

### College of Lore
- **Bonus Proficiencies (3rd level)**: Proficiency with three skills of your choice.
- **Cutting Words (3rd level)**: Reaction to subtract a Bardic Inspiration roll from an enemy's attack roll, ability check, or damage roll within 60 ft.
- **Additional Magical Secrets (6th level)**: Learn two spells of your choice from any class (cantrips up to 3rd-level).
- **Peerless Skill (14th level)**: Add your own Bardic Inspiration die to your ability checks.

### College of Valor
- **Bonus Proficiencies (3rd level)**: Medium armor, shields, and martial weapons.
- **Combat Inspiration (3rd level)**: Allies can add inspiration die to damage rolls or to AC as a reaction.
- **Extra Attack (6th level)**: Attack twice on your turn.
- **Battle Magic (14th level)**: Cast a bard spell and make one weapon attack as a bonus action.
`
  },
  {
    id: "class-cleric",
    title: "Cleric",
    folder: "Classes",
    category: "Class",
    tags: ["class", "cleric", "channel-divinity", "divine-domains"],
    aliases: ["Clerics"],
    content: `---
title: Cleric
category: Class
folder: Classes
tags: [class, cleric, channel-divinity, divine-domains]
---

# Cleric

Arms and eyes upraised toward the sun and a prayer on his lips, an elf begins to glow with an inner light that spills out to heal his battle-worn companions.

## Class Features
- **Hit Dice**: 1d8 per cleric level
- **Hit Points at 1st Level**: 8 + Constitution modifier
- **Proficiencies**: Light armor, medium armor, shields, simple weapons
- **Saving Throws**: Wisdom, Charisma
- **Skills**: Choose two from History, Insight, Medicine, Persuasion, and Religion
- **Spellcasting**: Prepare spells equal to \`Wisdom modifier + Cleric level\`. Focus: Holy Symbol.
- **Channel Divinity (2nd level)**: 1/rest (2 at 6th, 3 at 18th). Base option: **Turn Undead** (Wis save or turned for 1 minute).
- **Destroy Undead (5th level)**: Instantly destroy turned undead of CR 1/2 or lower (CR 1 at 8th, CR 2 at 11th, CR 3 at 14th, CR 4 at 17th).
- **Divine Intervention (10th level)**: Roll d100; if ≤ cleric level, deity intervenes (guaranteed at 20th level).

---

## Divine Domains

### Knowledge Domain
- *Domain Spells*: 1st: command, identify; 3rd: augury, suggestion; 5th: nondetection, speak with dead; 7th: arcane eye, confusion; 9th: legend lore, scrying.
- *Blessings of Knowledge (1st)*: Two languages, proficiency and double bonus in two of: Arcana, History, Nature, or Religion.
- *Channel Divinity: Knowledge of the Ages (2nd)*: Proficiency in any skill or tool for 10 minutes.
- *Channel Divinity: Read Thoughts (6th)*: Read surface thoughts and cast suggestion without spell slot.
- *Potent Spellcasting (8th)*: Add Wisdom mod to cleric cantrip damage.
- *Visions of the Past (17th)*: Meditate to read object history or area history.

### Life Domain
- *Domain Spells*: 1st: bless, cure wounds; 3rd: lesser restoration, spiritual weapon; 5th: beacon of hope, revivify; 7th: death ward, guardian of faith; 9th: mass cure wounds, raise dead.
- *Bonus Proficiency (1st)*: Heavy armor.
- *Disciple of Life (1st)*: Healing spells restore extra HP equal to \`2 + spell's level\`.
- *Channel Divinity: Preserve Life (2nd)*: Heal 5 × cleric level divided among creatures within 30 ft (up to half max HP).
- *Blessed Healer (6th)*: Healing others heals you for \`2 + spell level\`.
- *Divine Strike (8th)*: +1d8 radiant damage on weapon hit (+2d8 at 14th).
- *Supreme Healing (17th)*: Maximize all dice on healing spells.

### Light Domain
- *Domain Spells*: 1st: burning hands, faerie fire; 3rd: flaming sphere, scorching ray; 5th: daylight, fireball; 7th: guardian of faith, wall of fire; 9th: flame strike, scrying.
- *Bonus Cantrip (1st)*: Light cantrip.
- *Warding Flare (1st)*: Reaction imposes disadvantage on attack roll against you (Wis mod uses/long rest; 6th level: protect allies).
- *Channel Divinity: Radiance of the Dawn (2nd)*: Dispel magical darkness, 2d10 + cleric level radiant damage (Con save).
- *Potent Spellcasting (8th)*: Add Wisdom mod to cleric cantrip damage.
- *Corona of Light (17th)*: 60-foot sunlight aura; enemies have disadvantage on saves vs fire and radiant damage.

### Nature Domain
- *Domain Spells*: 1st: animal friendship, speak with animals; 3rd: barkskin, spike growth; 5th: plant growth, wind wall; 7th: dominate beast, grasping vine; 9th: insect plague, tree stride.
- *Acolyte of Nature (1st)*: One druid cantrip; proficiency in Animal Handling, Nature, or Survival; Heavy armor proficiency.
- *Channel Divinity: Charm Animals and Plants (2nd)*: Charm beasts and plants within 30 ft.
- *Dampen Elements (6th)*: Reaction grants resistance to acid, cold, fire, lightning, or thunder damage to an ally within 30 ft.
- *Divine Strike (8th)*: +1d8 cold, fire, or lightning damage (+2d8 at 14th).
- *Master of Nature (17th)*: Command charmed beasts/plants as a bonus action.

### Tempest Domain
- *Domain Spells*: 1st: fog cloud, thunderwave; 3rd: gust of wind, shatter; 5th: call lightning, sleet storm; 7th: control water, ice storm; 9th: destructive wave, insect plague.
- *Bonus Proficiencies (1st)*: Martial weapons and heavy armor.
- *Wrath of the Storm (1st)*: Reaction deals 2d8 lightning/thunder damage to attacker within 5 ft (Dex save half; Wis mod uses).
- *Channel Divinity: Destructive Wrath (2nd)*: Maximize lightning or thunder damage.
- *Thunderbolt Strike (6th)*: Push Large or smaller creature 10 ft away when dealing lightning damage.
- *Divine Strike (8th)*: +1d8 thunder damage (+2d8 at 14th).
- *Stormborn (17th)*: Flying speed equal to walking speed outdoors.

### Trickery Domain
- *Domain Spells*: 1st: charm person, disguise self; 3rd: mirror image, pass without trace; 5th: blink, dispel magic; 7th: dimension door, polymorph; 9th: dominate person, modify memory.
- *Blessing of the Trickster (1st)*: Action grants advantage on Stealth checks to another creature.
- *Channel Divinity: Invoke Duplicity (2nd)*: Create illusory duplicate to cast spells through and gain advantage.
- *Channel Divinity: Cloak of Shadows (6th)*: Turn invisible until end of next turn.
- *Divine Strike (8th)*: +1d8 poison damage (+2d8 at 14th).
- *Improved Duplicity (17th)*: Create up to four illusory duplicates.

### War Domain
- *Domain Spells*: 1st: divine favor, shield of faith; 3rd: magic weapon, spiritual weapon; 5th: crusader's mantle, spirit guardians; 7th: freedom of movement, stoneskin; 9th: flame strike, hold monster.
- *Bonus Proficiencies (1st)*: Martial weapons and heavy armor.
- *War Priest (1st)*: Bonus action weapon attack when taking Attack action (Wis mod uses/long rest).
- *Channel Divinity: Guided Strike (2nd)*: +10 bonus to an attack roll.
- *Channel Divinity: War God's Blessing (6th)*: Grant +10 bonus to an ally's attack roll within 30 ft.
- *Divine Strike (8th)*: +1d8 weapon damage (+2d8 at 14th).
- *Avatar of Battle (17th)*: Resistance to nonmagical bludgeoning, piercing, and slashing damage.
`
  },
  {
    id: "class-druid",
    title: "Druid",
    folder: "Classes",
    category: "Class",
    tags: ["class", "druid", "wild-shape", "circle-of-the-land", "circle-of-the-moon"],
    aliases: ["Druids"],
    content: `---
title: Druid
category: Class
folder: Classes
tags: [class, druid, wild-shape, circle-of-the-land, circle-of-the-moon]
---

# Druid

Holding high a gnarled staff wreathed with holly, an elf summons the fury of the storm and calls down explosive bolts of lightning to smite the torch-carrying orcs who threaten her forest.

## Class Features
- **Hit Dice**: 1d8 per druid level
- **Proficiencies**: Light armor, medium armor, shields (no metal); clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears; Herbalism kit.
- **Saving Throws**: Intelligence, Wisdom
- **Druidic**: Secret druid language and script.
- **Spellcasting**: Wisdom modifier + druid level prepared spells. Focus: Druidic Focus.
- **Wild Shape (2nd level)**: Transform into a beast you have seen before (2 uses/short or long rest).
  - *Duration*: \`hours = druid level / 2\`.
  - *Beast Shapes Table*:
    - 2nd level: Max CR 1/4 (no flying or swimming speed, e.g. [[Appendix D - Creature Statistics#Wolf|Wolf]])
    - 4th level: Max CR 1/2 (no flying speed, e.g. [[Appendix D - Creature Statistics#Crocodile|Crocodile]])
    - 8th level: Max CR 1 (e.g. [[Appendix D - Creature Statistics#Giant Eagle|Giant Eagle]])
  - Assume beast's HP, retain mental stats and personality. Excess damage carries over to normal form.
- **Timeless Body (18th level)**: Age 1 year for every 10 that pass.
- **Beast Spells (18th level)**: Cast spells with verbal and somatic components while in Wild Shape.
- **Archdruid (20th level)**: Unlimited uses of Wild Shape; ignore verbal, somatic, and non-costly material components.

---

## Druid Circles

### Circle of the Land
- **Bonus Cantrip (2nd level)**: One additional druid cantrip.
- **Natural Recovery (2nd level)**: Regain spell slots equal to half druid level during a short rest (up to 5th-level).
- **Circle Spells (3rd, 5th, 7th, 9th level)**:
  - *Arctic*: hold person, spike growth / sleet storm, slow / freedom of movement, ice storm / commune with nature, cone of cold.
  - *Coast*: mirror image, misty step / water breathing, water walk / control water, freedom of movement / conjure elemental, scrying.
  - *Desert*: blur, silence / create food and water, protection from energy / blight, hallucinatory terrain / insect plague, wall of stone.
  - *Forest*: barkskin, spider climb / call lightning, plant growth / divination, freedom of movement / commune with nature, tree stride.
  - *Grassland*: invisibility, pass without trace / daylight, haste / divination, freedom of movement / dream, insect plague.
  - *Mountain*: spider climb, spike growth / lightning bolt, meld into stone / stone shape, stoneskin / passwall, wall of stone.
  - *Swamp*: darkness, Melf's acid arrow / water walk, stinking cloud / freedom of movement, locate creature / insect plague, scrying.
  - *Underdark*: spider climb, web / gaseous form, stinking cloud / greater invisibility, stone shape / cloudkill, insect plague.
- **Land's Stride (6th level)**: Move through nonmagical difficult terrain and thorny plants without extra movement or damage.
- **Nature's Ward (10th level)**: Immune to poison and disease; cannot be charmed/frightened by elementals or fey.
- **Nature's Sanctuary (14th level)**: Beasts and plant creatures must make Wisdom save to attack you.

### Circle of the Moon
- **Combat Wild Shape (2nd level)**: Wild Shape as a bonus action. Spend a spell slot to heal 1d8 HP per spell level while transformed.
- **Circle Forms (2nd level)**: Transform into beasts of CR 1 at 2nd level (ignoring normal max CR). At 6th level, max CR = \`druid level / 3\`.
- **Primal Strike (6th level)**: Beast attacks count as magical.
- **Elemental Wild Shape (10th level)**: Expend 2 uses of Wild Shape to transform into an air, earth, fire, or water elemental.
- **Thousand Forms (14th level)**: Cast [[Spells - Cantrips & 1st Level#Alter Self|Alter Self]] at will.
`
  },
  {
    id: "class-fighter",
    title: "Fighter",
    folder: "Classes",
    category: "Class",
    tags: ["class", "fighter", "action-surge", "champion", "battle-master", "eldritch-knight"],
    aliases: ["Fighters"],
    content: `---
title: Fighter
category: Class
folder: Classes
tags: [class, fighter, action-surge, champion, battle-master, eldritch-knight]
---

# Fighter

A human in clanging plate armor holds her shield before her as she runs toward the massed goblins. An elf behind her, clad in studded leather armor, peppers the goblins with arrows.

## Class Features
- **Hit Dice**: 1d10 per fighter level
- **Proficiencies**: All armor, shields, simple and martial weapons
- **Saving Throws**: Strength, Constitution
- **Fighting Style (1st level)**: Archery (+2 ranged attacks), Defense (+1 AC), Dueling (+2 melee damage with 1-handed weapon), Great Weapon Fighting (reroll 1 and 2 damage dice on 2-handed weapons), Protection (reaction imposes disadvantage on attack vs ally within 5 ft using shield), Two-Weapon Fighting (add ability mod to off-hand damage).
- **Second Wind (1st level)**: Bonus action to regain \`1d10 + fighter level\` hit points (1/short or long rest).
- **Action Surge (2nd level)**: Take one additional action on your turn (1/rest; 2/rest at 17th level).
- **Extra Attack (5th level)**: Attack twice on your turn (3 times at 11th, 4 times at 20th).
- **Indomitable (9th level)**: Reroll a failed saving throw (1/long rest; 2 at 13th, 3 at 17th).

---

## Martial Archetypes

### Champion
- **Improved Critical (3rd level)**: Weapon attacks score a critical hit on a roll of 19 or 20.
- **Remarkable Athlete (7th level)**: Add half proficiency bonus to non-proficient Str/Dex/Con checks; running long jump distance + Str mod.
- **Additional Fighting Style (10th level)**: Choose a second Fighting Style.
- **Superior Critical (15th level)**: Critical hit on 18–20.
- **Survivor (18th level)**: Regain \`5 + Constitution modifier\` hit points at start of each turn if below half HP.

### Battle Master
- **Combat Superiority (3rd level)**: Four superiority dice (d8s). Recharge on short or long rest. (d10 at 10th level, d12 at 18th level; 5 dice at 7th, 6 at 15th).
- **Maneuver Save DC**: \`8 + Proficiency Bonus + Str or Dex modifier\`.
- **Maneuvers List**:
  - *Commander's Strike*: Forgo an attack and bonus action to let an ally use reaction to attack (+ superiority die to damage).
  - *Disarming Attack*: +die to damage; target makes Strength save or drops held item.
  - *Distracting Strike*: +die to damage; next attack by an ally against target before your next turn has advantage.
  - *Evasive Footwork*: Add die to AC while moving.
  - *Feinting Attack*: Bonus action gives advantage on next attack roll vs target within 5 ft (+die to damage).
  - *Goading Attack*: +die to damage; Wis save or disadvantage on attacks vs targets other than you.
  - *Lunging Attack*: +5 ft reach on melee attack (+die to damage).
  - *Maneuvering Attack*: +die to damage; ally can use reaction to move up to half speed without opportunity attacks from target.
  - *Menacing Attack*: +die to damage; Wis save or frightened until end of next turn.
  - *Parry*: Reaction reduces melee damage by \`die + Dex modifier\`.
  - *Precision Attack*: Add die to weapon attack roll.
  - *Pushing Attack*: +die to damage; Str save or pushed 15 ft (Large or smaller).
  - *Rally*: Bonus action gives ally temporary HP equal to \`die + Cha modifier\`.
  - *Riposte*: Reaction on enemy miss to make melee attack (+die to damage).
  - *Sweeping Attack*: On hit, original attack roll also hits second creature within 5 ft for damage equal to die.
  - *Trip Attack*: +die to damage; Str save or knocked prone (Large or smaller).
- **Student of War (3rd level)**: Proficiency with one type of artisan's tools.
- **Know Your Enemy (7th level)**: Observe creature for 1 minute to learn 2 stats compared to your own (Str, Dex, Con, AC, HP, class levels).
- **Relentless (15th level)**: Regain 1 superiority die if you roll initiative with 0 remaining.

### Eldritch Knight
- **Spellcasting (3rd level)**: Wizard spells (predominantly Abjuration and Evocation). Intelligence spellcasting.
- **Weapon Bond (3rd level)**: Bond with up to 2 weapons. Cannot be disarmed; summon bonded weapon as bonus action.
- **War Magic (7th level)**: Cast a cantrip and make one weapon attack as a bonus action.
- **Eldritch Strike (10th level)**: Weapon hit imposes disadvantage on creature's next save against your spells.
- **Arcane Charge (15th level)**: Teleport up to 30 ft when using Action Surge.
- **Improved War Magic (18th level)**: Cast any spell and make one weapon attack as a bonus action.
`
  },
  {
    id: "class-monk",
    title: "Monk",
    folder: "Classes",
    category: "Class",
    tags: ["class", "monk", "ki", "martial-arts", "open-hand", "shadow", "four-elements"],
    aliases: ["Monks"],
    content: `---
title: Monk
category: Class
folder: Classes
tags: [class, monk, ki, martial-arts, open-hand, shadow, four-elements]
---

# Monk

Her fists a blur as they deflect an incoming hail of arrows, a half-elf springs over a barricade and throws herself into the massed ranks of hobgoblins on the other side.

## Class Features
- **Hit Dice**: 1d8 per monk level
- **Proficiencies**: Simple weapons, shortswords; One artisan tool or musical instrument. No armor or shields.
- **Saving Throws**: Strength, Dexterity
- **Unarmored Defense**: AC = \`10 + Dex modifier + Wis modifier\`.
- **Martial Arts (1st level)**: Use Dex instead of Str for unarmed strikes and monk weapons. Unarmed strike damage die: **1d4** (1st), **1d6** (5th), **1d8** (11th), **1d10** (17th). Make one unarmed strike as a bonus action after Attack action.
- **Ki (2nd level)**: Pool of Ki points equal to monk level (recharge on short/long rest).
  - *Flurry of Blows*: 1 ki point for 2 unarmed strikes as bonus action.
  - *Patient Defense*: 1 ki point to Dodge as bonus action.
  - *Step of the Wind*: 1 ki point to Disengage or Dash as bonus action (doubles jump distance).
  - *Ki Save DC*: \`8 + Proficiency Bonus + Wis modifier\`.
- **Unarmored Movement (2nd level)**: +10 ft speed (+15 at 6th, +20 at 10th, +25 at 14th, +30 at 18th). At 9th level, run up vertical surfaces and across liquids.
- **Deflect Missiles (3rd level)**: Reaction reduces ranged weapon damage by \`1d10 + Dex mod + monk level\`. If reduced to 0, catch and spend 1 ki to throw back.
- **Slow Fall (4th level)**: Reaction reduces falling damage by 5 × monk level.
- **Extra Attack & Stunning Strike (5th level)**: Attack twice. Spend 1 ki point on melee weapon hit to force Con save or target is [[Conditions#Stunned|stunned]] until end of your next turn.
- **Ki-Empowered Strikes (6th level)**: Unarmed strikes count as magical.
- **Evasion & Stillness of Mind (7th level)**: Take no damage on successful Dex save against area effects (half on failure). Action to end charmed or frightened.
- **Purity of Body (10th level)**: Immune to disease and poison.
- **Tongue of the Sun and Moon (13th level)**: Understand and speak all spoken languages.
- **Diamond Soul (14th level)**: Proficiency in all saving throws. Spend 1 ki point to reroll a failed save.
- **Timeless Body (15th level)**: Suffer none of the frailty of old age; no longer need food or water.
- **Empty Body (18th level)**: 4 ki points to become invisible for 1 minute (resistance to all damage except force). 8 ki points to cast [[Spells - 5th Level & Higher#Astral Projection|Astral Projection]].
- **Perfect Self (20th level)**: Regain 4 ki points if you have 0 when rolling initiative.

---

## Monastic Traditions

### Way of the Open Hand
- **Open Hand Technique (3rd level)**: Impose on Flurry of Blows hit: Dex save or knocked prone; Str save or pushed 15 ft; or cannot take reactions.
- **Wholeness of Body (6th level)**: Action heals HP equal to 3 × monk level (1/long rest).
- **Tranquility (11th level)**: Gain sanctuary effect after a long rest.
- **Quivering Palm (17th level)**: Hit with unarmed strike and spend 3 ki points to impart vibrations. Action on subsequent day forces Con save: drop to 0 HP on failure, or 10d10 necrotic damage on success.

### Way of Shadow
- **Shadow Arts (3rd level)**: Spend 2 ki points to cast darkness, darkvision, pass without trace, or silence. Gain minor illusion cantrip.
- **Shadow Step (6th level)**: Bonus action teleports 60 ft between dim light/darkness (advantage on next melee attack).
- **Cloak of Shadows (11th level)**: Action to become invisible in dim light or darkness.
- **Opportunist (17th level)**: Reaction to make melee attack against creature hit by an ally within 5 ft.

### Way of the Four Elements
- **Disciple of the Elements (3rd level)**: Spend ki to cast elemental spells:
  - *Elemental Attunement* (3rd): Minor sensory and elemental manipulation.
  - *Fangs of the Fire Snake* (3rd): 1 ki for +10 ft reach, fire damage (+1d10 fire per extra ki).
  - *Fist of Four Thunders* (3rd): 2 ki to cast thunderwave.
  - *Fist of Unbroken Air* (3rd): 2 ki: 3d10 bludgeoning + push 20 ft and knock prone (Str save).
  - *Water Whip* (3rd): 2 ki: 3d10 bludgeoning, pull 25 ft or knock prone (Dex save).
  - *Clench of the North Wind* (6th): 3 ki to cast hold person.
  - *Gong of the Summit* (6th): 3 ki to cast shatter.
  - *Flames of the Phoenix* (11th): 4 ki to cast fireball.
  - *Mist Stance* (11th): 4 ki to cast gaseous form.
  - *Ride the Wind* (11th): 4 ki to cast fly.
  - *Breath of Winter* (17th): 6 ki to cast cone of cold.
  - *River of Hungry Flame* (17th): 5 ki to cast wall of fire.
  - *Wave of Rolling Earth* (17th): 6 ki to cast wall of stone.
`
  },
  {
    id: "class-paladin",
    title: "Paladin",
    folder: "Classes",
    category: "Class",
    tags: ["class", "paladin", "divine-smite", "sacred-oaths", "lay-on-hands"],
    aliases: ["Paladins"],
    content: `---
title: Paladin
category: Class
folder: Classes
tags: [class, paladin, divine-smite, sacred-oaths, lay-on-hands]
---

# Paladin

Clad in plate armor that gleams in the sunlight despite the dust and grime of long travel, a human lays down her sword and shield and places her hands on a mortally wounded man. Divine radiance shines from her hands.

## Class Features
- **Hit Dice**: 1d10 per paladin level
- **Proficiencies**: All armor, shields, simple and martial weapons
- **Saving Throws**: Wisdom, Charisma
- **Divine Sense (1st level)**: Action detects celestials, fiends, and undead within 60 ft, and consecrated/desecrated places (\`1 + Cha mod\` uses/long rest).
- **Lay on Hands (1st level)**: Healing pool of \`5 × paladin level\` HP per long rest. 5 HP cures one disease or poison.
- **Fighting Style (2nd level)**: Defense, Dueling, Great Weapon Fighting, Protection.
- **Spellcasting (2nd level)**: Charisma spellcasting. Prepare spells equal to \`Cha mod + half paladin level\`. Focus: Holy Symbol.
- **Divine Smite (2nd level)**: Expend a spell slot on a melee weapon hit to deal +2d8 radiant damage (+1d8 per slot level above 1st, max 5d8; +1d8 extra against fiends and undead).
- **Divine Health (3rd level)**: Immune to disease.
- **Extra Attack (5th level)**: Attack twice on your turn.
- **Aura of Protection (6th level)**: You and allies within 10 ft gain bonus to all saving throws equal to your Charisma modifier (+1 minimum). (30 ft at 18th level).
- **Aura of Courage (10th level)**: You and allies within 10 ft cannot be frightened. (30 ft at 18th level).
- **Improved Divine Smite (11th level)**: All melee weapon attacks deal an extra 1d8 radiant damage automatically.
- **Cleansing Touch (14th level)**: Action ends one spell on yourself or willing creature (Cha mod uses/long rest).

---

## Sacred Oaths

### Oath of Devotion
- *Tenets*: Honesty, Courage, Compassion, Honor, Duty.
- *Oath Spells*: 3rd: protection from evil and good, sanctuary / 5th: lesser restoration, zone of truth / 9th: beacon of hope, dispel magic / 13th: freedom of movement, guardian of faith / 17th: commune, flame strike.
- *Channel Divinity: Sacred Weapon (3rd)*: Add Cha mod to attack rolls with a weapon for 1 minute; emits bright light 20 ft.
- *Channel Divinity: Turn the Unholy (3rd)*: Turn fiends and undead within 30 ft.
- *Aura of Devotion (7th)*: You and allies within 10 ft cannot be charmed.
- *Purity of Spirit (15th)*: Permanently under the effects of protection from evil and good.
- *Holy Nimbus (20th)*: 30-foot sunlight aura for 1 minute; deals 10 radiant damage to enemies starting turn inside; advantage on saves vs spells from fiends/undead.

### Oath of the Ancients
- *Tenets*: Kindle the Light, Shelter the Light, Preserve Your Own Light, Be the Light.
- *Oath Spells*: 3rd: ensnaring strike, speak with animals / 5th: moonbeam, misty step / 9th: plant growth, protection from energy / 13th: ice storm, stoneskin / 17th: commune with nature, tree stride.
- *Channel Divinity: Nature's Wrath (3rd)*: Spectral vines ensnare a foe within 10 ft (Str or Dex save).
- *Channel Divinity: Turn the Faithless (3rd)*: Turn fey and fiends within 30 ft.
- *Aura of Warding (7th)*: Resistance to damage from spells for you and allies within 10 ft.
- *Undying Sentinel (15th)*: Drop to 1 HP instead of 0 (1/long rest); suffer no drawbacks of old age.
- *Elder Champion (20th)*: Form of nature for 1 minute: regain 10 HP/turn; cast paladin spells as bonus action; enemies have disadvantage on saves vs paladin spells/Channel Divinity.

### Oath of Vengeance
- *Tenets*: Fight the Greater Evil, No Mercy for the Wicked, By Any Means Necessary, Restitution.
- *Oath Spells*: 3rd: bane, hunter's mark / 5th: hold person, misty step / 9th: haste, protection from energy / 13th: banishment, dimension door / 17th: hold monster, scrying.
- *Channel Divinity: Abjure Enemy (3rd)*: Frighten one enemy within 60 ft (speed becomes 0).
- *Channel Divinity: Vow of Enmity (3rd)*: Bonus action gives advantage on attack rolls vs one creature within 10 ft for 1 minute.
- *Relentless Avenger (7th)*: Move up to half speed after hitting with opportunity attack without provoking.
- *Soul of Vengeance (15th)*: Reaction melee attack when Vow of Enmity target attacks.
- *Avenging Angel (20th)*: Wings sprout (flying speed 60 ft); 30-foot aura of menace frightens enemies on failed Wis save.
`
  },
  {
    id: "class-ranger",
    title: "Ranger",
    folder: "Classes",
    category: "Class",
    tags: ["class", "ranger", "favored-enemy", "natural-explorer", "hunter", "beast-master"],
    aliases: ["Rangers"],
    content: `---
title: Ranger
category: Class
folder: Classes
tags: [class, ranger, favored-enemy, natural-explorer, hunter, beast-master]
---

# Ranger

Rough and wild looking, a human stalks alone through the shadows of trees, hunting the orcs he knows are planning a raid on a nearby farm.

## Class Features
- **Hit Dice**: 1d10 per ranger level
- **Proficiencies**: Light armor, medium armor, shields, simple and martial weapons
- **Saving Throws**: Strength, Dexterity
- **Skills**: Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival
- **Favored Enemy (1st level)**: Advantage on Survival checks to track and Intelligence checks to recall info about chosen enemy type (Aberrations, Beasts, Celestials, Constructs, Dragons, Elementals, Fey, Fiends, Giants, Monstrosities, Oozes, Plants, Undead, or two humanoid races). Learn associated language. (Additional choices at 6th and 14th).
- **Natural Explorer (1st level)**: Double proficiency bonus on Int/Wis checks related to favored terrain (Arctic, Coast, Desert, Forest, Grassland, Mountain, Swamp, Underdark). Group ignored difficult terrain, can't get lost, forage twice as much, learn exact tracking numbers/sizes. (Additional choices at 6th and 10th).
- **Fighting Style (2nd level)**: Archery, Defense, Dueling, Two-Weapon Fighting.
- **Spellcasting (2nd level)**: Wisdom spellcasting. Spells known.
- **Primeval Awareness (3rd level)**: Spend spell slot to sense whether aberrations, celestials, dragons, elementals, fey, fiends, or undead are within 1 mile (6 miles in favored terrain).
- **Extra Attack (5th level)**: Attack twice on your turn.
- **Land's Stride (8th level)**: Move through nonmagical difficult terrain without penalty; advantage on saves vs plant magic.
- **Hide in Plain Sight (10th level)**: Spend 1 minute camouflaging yourself against natural surfaces for +10 to Stealth checks.
- **Vanish (14th level)**: Hide as a bonus action; cannot be tracked by nonmagical means.
- **Feral Senses (18th level)**: Attacking unseen enemies has no disadvantage; know location of invisible creatures within 30 ft.
- **Foe Slayer (20th level)**: Add Wisdom modifier to attack or damage roll against a favored enemy once per turn.

---

## Ranger Archetypes

### Hunter
- **Hunter's Prey (3rd level)**:
  - *Colossus Slayer*: +1d8 weapon damage once per turn if target is below max HP.
  - *Giant Killer*: Reaction attack when Large or larger creature within 5 ft attacks you.
  - *Horde Breaker*: Make another attack against a different creature within 5 ft of original target once per turn.
- **Defensive Tactics (7th level)**:
  - *Escape the Horde*: Disadvantage on opportunity attacks against you.
  - *Multiattack Defense*: +4 AC against subsequent attacks by a creature that hits you.
  - *Steel Will*: Advantage on saves vs frightened.
- **Multiattack (11th level)**:
  - *Volley*: Action makes ranged attack against any number of creatures within 10 ft of a point within range.
  - *Whirlwind Attack*: Action makes melee attack against any number of creatures within 5 ft.
- **Superior Hunter's Defense (15th level)**:
  - *Evasion*: Take no damage on successful Dex save against area effects.
  - *Stand Against the Tide*: Force missing enemy to repeat melee attack against another creature.
  - *Uncanny Dodge*: Halve damage from an attack you can see as a reaction.

### Beast Master
- **Ranger's Companion (3rd level)**: Medium or smaller beast of CR 1/4 or lower (e.g., [[Appendix D - Creature Statistics#Hawk (Falcon)|Hawk]], [[Appendix D - Creature Statistics#Mastiff|Mastiff]], [[Appendix D - Creature Statistics#Panther|Panther]]). Add proficiency bonus to AC, attacks, damage, saving throws, and skills. Max HP = 4 × ranger level or normal max. Command to attack as action (or bonus action at 7th via **Exceptional Training**).
- **Bestial Fury (11th level)**: Beast makes two attacks when commanded to Attack.
- **Share Spells (15th level)**: Spells targeting yourself also affect beast companion within 30 ft.
`
  },
  {
    id: "class-rogue",
    title: "Rogue",
    folder: "Classes",
    category: "Class",
    tags: ["class", "rogue", "sneak-attack", "cunning-action", "thief", "assassin", "arcane-trickster"],
    aliases: ["Rogues"],
    content: `---
title: Rogue
category: Class
folder: Classes
tags: [class, rogue, sneak-attack, cunning-action, thief, assassin, arcane-trickster]
---

# Rogue

Signaling for her companions to wait, a halfling creeps forward through the dungeon hall. She presses an ear to the door, then pulls out a set of tools and picks the lock in the blink of an eye.

## Class Features
- **Hit Dice**: 1d8 per rogue level
- **Proficiencies**: Light armor; simple weapons, hand crossbows, longswords, rapiers, shortswords; Thieves' tools.
- **Saving Throws**: Dexterity, Intelligence
- **Skills**: Choose four from Acrobatics, Athletics, Deception, Insight, Intimidate, Investigation, Perception, Performance, Persuasion, Sleight of Hand, Stealth.
- **Expertise (1st & 6th level)**: Double proficiency bonus on two chosen skill proficiencies or thieves' tools.
- **Sneak Attack (1st level)**: Deal extra damage to one creature hit with finesse/ranged weapon if you have advantage, or if an ally is within 5 ft of target and you don't have disadvantage (1d6 at 1st, scales up to 10d6 at 19th).
- **Thieves' Cant (1st level)**: Secret dialect, jargon, and symbols used by thieves.
- **Cunning Action (2nd level)**: Take a bonus action on each of your turns in combat to **Dash**, **Disengage**, or **Hide**.
- **Uncanny Dodge (5th level)**: Reaction to halve damage from an attack you can see.
- **Evasion (7th level)**: Take no damage on successful Dex save against area effects (half on failure).
- **Reliable Talent (11th level)**: Treat any d20 roll of 9 or lower as a 10 for proficient ability checks.
- **Blindsense (14th level)**: Aware of the location of hidden/invisible creatures within 10 ft if able to hear.
- **Slippery Mind (15th level)**: Proficiency in Wisdom saving throws.
- **Elusive (18th level)**: No attack roll has advantage against you while you aren't incapacitated.
- **Stroke of Luck (20th level)**: Turn a miss into a hit, or treat a failed ability check as a 20 (1/short or long rest).

---

## Roguish Archetypes

### Thief
- **Fast Hands (3rd level)**: Use Cunning Action bonus action to make Dexterity (Sleight of Hand) check, use thieves' tools to disarm trap/pick lock, or Use an Object.
- **Second-Story Work (3rd level)**: Climbing costs no extra movement; running jump distance + Dex modifier.
- **Supreme Sneak (9th level)**: Advantage on Stealth check if moving no more than half speed.
- **Use Magic Device (13th level)**: Ignore all class, race, and level requirements on magic items.
- **Thief's Reflexes (17th level)**: Take two turns during the first round of any combat (initiative and initiative - 10).

### Assassin
- **Bonus Proficiencies (3rd level)**: Disguise kit and poisoner's kit.
- **Assassinate (3rd level)**: Advantage on attack rolls against creatures that haven't taken a turn in combat yet. Any hit against a surprised creature is an automatic critical hit.
- **Infiltration Expertise (9th level)**: Spend 7 days and 25 gp to establish an unfailing false identity with documentation and history.
- **Impostor (13th level)**: Unerringly mimic another person's speech, writing, and behavior after 3 hours of observation (advantage on Deception).
- **Death Strike (17th level)**: Hit against surprised creature forces Con save (\`DC 8 + Dex mod + Prof\`) or double attack damage.

### Arcane Trickster
- **Spellcasting (3rd level)**: Wizard spells (Enchantment and Illusion). Intelligence spellcasting.
- **Mage Hand Legerdemain (3rd level)**: Mage hand is invisible and can stow/retrieve objects on others, or use thieves' tools at range (controlled via Cunning Action bonus action).
- **Magical Ambush (9th level)**: Casting a spell while hidden imposes disadvantage on the target's saving throw.
- **Versatile Trickster (13th level)**: Bonus action designates creature within 5 ft of mage hand to gain advantage on attack rolls against it.
- **Spell Thief (17th level)**: Reaction forces caster targeting you to make save vs spell save DC; on failure, negate spell, steal knowledge to cast it for 8 hours.
`
  },
  {
    id: "class-sorcerer",
    title: "Sorcerer",
    folder: "Classes",
    category: "Class",
    tags: ["class", "sorcerer", "metamagic", "draconic-bloodline", "wild-magic"],
    aliases: ["Sorcerers"],
    content: `---
title: Sorcerer
category: Class
folder: Classes
tags: [class, sorcerer, metamagic, draconic-bloodline, wild-magic]
---

# Sorcerer

Golden eyes flashing, a human stretches out her hand and unleashes the dragonfire that burns in her veins. As an inferno rages around her foes, leathery wings spread from her back and she takes to the air.

## Class Features
- **Hit Dice**: 1d6 per sorcerer level
- **Proficiencies**: Daggers, darts, slings, quarterstaffs, light crossbows. No armor.
- **Saving Throws**: Constitution, Charisma
- **Spellcasting**: Charisma spellcasting. Focus: Arcane focus.
- **Font of Magic (2nd level)**: Sorcery points equal to sorcerer level.
  - *Convert Spell Slot to Points*: Bonus action grants points equal to slot level.
  - *Creating Spell Slots*: 1st (2 pts), 2nd (3 pts), 3rd (5 pts), 4th (6 pts), 5th (7 pts).
- **Metamagic (3rd level)**: Choose two options (gain more at 10th & 17th):
  - *Careful Spell (1 pt)*: Protect up to Cha mod creatures from spell's full force (automatic save).
  - *Distant Spell (1 pt)*: Double spell range or make touch spell 30 ft.
  - *Empowered Spell (1 pt)*: Reroll up to Cha mod damage dice.
  - *Extended Spell (1 pt)*: Double duration (up to 24 hours).
  - *Heightened Spell (3 pts)*: Disadvantage on target's first saving throw.
  - *Quickened Spell (2 pts)*: Change casting time from 1 action to 1 bonus action.
  - *Subtle Spell (1 pt)*: Cast without verbal or somatic components.
  - *Twinned Spell (pts = spell level, 1 for cantrip)*: Target a second creature with single-target spell.
- **Sorcerous Restoration (20th level)**: Regain 4 sorcery points on a short rest.

---

## Sorcerous Origins

### Draconic Bloodline
- **Dragon Ancestor (1st level)**: Choose dragon type (Black/Copper: Acid, Blue/Bronze: Lightning, Brass/Gold/Red: Fire, Green: Poison, Silver/White: Cold). Speak Draconic; double proficiency on Charisma checks with dragons.
- **Draconic Resilience (1st level)**: Max HP increases by +1 per level. Unarmored AC = \`13 + Dex modifier\`.
- **Elemental Affinity (6th level)**: Add Cha mod to damage of your draconic element. Spend 1 sorcery point for resistance for 1 hour.
- **Dragon Wings (14th level)**: Sprout wings as bonus action for flying speed equal to current speed.
- **Draconic Presence (18th level)**: Spend 5 sorcery points for 60-ft aura of awe or fear (Wis save) for 1 minute.

### Wild Magic
- **Wild Magic Surge (1st level)**: When casting a 1st-level or higher spell, DM can have you roll a d20. On a 1, roll on the **Wild Magic Surge Table**!
- **Tides of Chaos (1st level)**: Gain advantage on one attack roll, ability check, or save (1/long rest). DM can trigger Wild Magic Surge to recharge it.
- **Bend Luck (6th level)**: Reaction and 2 sorcery points rolls 1d4 to add or subtract from a creature's attack, check, or save.
- **Controlled Chaos (14th level)**: Roll twice on the Wild Magic Surge table and choose either result.
- **Spell Bombardment (18th level)**: When rolling maximum on a spell damage die, roll it again and add to damage (1/turn).

---

## Wild Magic Surge Table (d100)
| d100 | Effect |
| :---: | :--- |
| **01–02** | Roll on this table at the start of each of your turns for the next minute, ignoring this result on subsequent rolls. |
| **03–04** | For the next minute, you can see any invisible creature if you have line of sight to it. |
| **05–06** | A modron chosen and controlled by the DM appears in an unoccupied space within 5 feet of you, then disappears 1 minute later. |
| **07–08** | You cast [[Spells - 3rd Level#Fireball|fireball]] as a 3rd-level spell centered on yourself. |
| **09–10** | You cast [[Spells - Cantrips & 1st Level#Magic Missile|magic missile]] as a 5th-level spell. |
| **11–12** | Roll a d10. Your height changes by a number of inches equal to the roll. If odd, shrink; if even, grow. |
| **13–14** | You cast [[Spells - 4th Level#Confusion|confusion]] centered on yourself. |
| **15–16** | For the next minute, you regain 5 hit points at the start of each of your turns. |
| **17–18** | You grow a long beard made of feathers that remains until you sneeze, at which point the feathers explode out from your face. |
| **19–20** | You cast [[Spells - Cantrips & 1st Level#Grease|grease]] centered on yourself. |
| **21–22** | Creatures have disadvantage on saving throws against the next spell you cast in the next minute that involves a saving throw. |
| **23–24** | Your skin turns a vibrant shade of blue. A [[Spells - 3rd Level#Remove Curse|remove curse]] spell can end this effect. |
| **25–26** | An eye appears on your forehead for the next minute. During that time, you have advantage on Wisdom (Perception) checks that rely on sight. |
| **27–28** | For the next minute, all your spells with a casting time of 1 action have a casting time of 1 bonus action. |
| **29–30** | You teleport up to 60 feet to an unoccupied space of your choice that you can see. |
| **31–32** | You are transported to the Astral Plane until the end of your next turn, after which time you return to the space you previously occupied or nearest unoccupied space. |
| **33–34** | Maximize the damage of the next damaging spell you cast within the next minute. |
| **35–36** | Roll a d10. Your age changes by a number of years equal to the roll. If odd, younger (min 1 yr); if even, older. |
| **37–38** | 1d6 flumphs controlled by the DM appear in unoccupied spaces within 60 feet of you and are frightened of you. They vanish after 1 minute. |
| **39–40** | You regain 2d10 hit points. |
| **41–42** | You turn into a potted plant until the start of your next turn. While a plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit points, your pot breaks, and your form reverts. |
| **43–44** | For the next minute, you can teleport up to 20 feet as a bonus action on each of your turns. |
| **45–46** | You cast [[Spells - 2nd Level#Levitate|levitate]] on yourself. |
| **47–48** | A unicorn controlled by the DM appears in a space within 5 feet of you, then disappears 1 minute later. |
| **49–50** | You can't speak for the next minute. Whenever you try, pink bubbles float out of your mouth. |
| **51–52** | A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to magic missile. |
| **53–54** | You are immune to being intoxicated by alcohol for the next 5d6 days. |
| **55–56** | Your hair falls out but grows back within 24 hours. |
| **57–58** | For the next minute, any flammable object you touch that isn't being worn or carried by another creature bursts into flame. |
| **59–60** | You regain your lowest-level expended spell slot. |
| **61–62** | For the next minute, you must shout when you speak. |
| **63–64** | You cast [[Spells - Cantrips & 1st Level#Fog Cloud|fog cloud]] centered on yourself. |
| **65–66** | Up to three creatures you choose within 30 feet of you take 4d10 lightning damage. |
| **67–68** | You are frightened by the nearest creature until the end of your next turn. |
| **69–70** | Each creature within 30 feet of you becomes invisible for the next minute. The invisibility ends on a creature when it attacks or casts a spell. |
| **71–72** | You gain resistance to all damage for the next minute. |
| **73–74** | A random creature within 60 feet of you becomes poisoned for 1d4 hours. |
| **75–76** | You glow with bright light in a 30-foot radius for the next minute. Any creature that ends its turn within 5 feet of you is blinded until the end of its next turn. |
| **77–78** | You cast [[Spells - 4th Level#Polymorph|polymorph]] on yourself. If you fail the saving throw, you turn into a sheep for the spell's duration. |
| **79–80** | Illusory butterflies and flower petals flutter in the air within 10 feet of you for the next minute. |
| **81–82** | You can take one additional action immediately. |
| **83–84** | Each creature within 30 feet of you takes 1d10 necrotic damage. You regain hit points equal to the sum of the necrotic damage dealt. |
| **85–86** | You cast [[Spells - 2nd Level#Mirror Image|mirror image]]. |
| **87–88** | You cast [[Spells - 3rd Level#Fly|fly]] on a random creature within 60 feet of you. |
| **89–90** | You become invisible for the next minute. During that time, other creatures can't hear you. The invisibility ends if you attack or cast a spell. |
| **91–92** | If you die within the next minute, you immediately come back to life as if by the reincarnate spell. |
| **93–94** | Your size increases by one size category for the next minute. |
| **95–96** | You and all creatures within 30 feet of you gain vulnerability to piercing damage for the next minute. |
| **97–98** | You are surrounded by faint, ethereal music for the next minute. |
| **99–00** | You regain all expended sorcery points. |
`
  },
  {
    id: "class-warlock",
    title: "Warlock",
    folder: "Classes",
    category: "Class",
    tags: ["class", "warlock", "pact-magic", "invocations", "archfey", "fiend", "great-old-one"],
    aliases: ["Warlocks"],
    content: `---
title: Warlock
category: Class
folder: Classes
tags: [class, warlock, pact-magic, invocations, archfey, fiend, great-old-one]
---

# Warlock

With a pseudodragon curled on his shoulder, a young elf in golden robes smiles warmly, weaving a magical charm into his honeyed words and bending the palace sentinel to his will.

## Class Features
- **Hit Dice**: 1d8 per warlock level
- **Proficiencies**: Light armor, simple weapons.
- **Saving Throws**: Wisdom, Charisma
- **Skills**: Choose two from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion.
- **Pact Magic**: Short-rest recharging spell slots. All slots are of the same highest level (up to 5th-level).
  - 1st level: 1 slot (1st)
  - 2nd–10th: 2 slots (up to 5th)
  - 11th–16th: 3 slots (5th)
  - 17th–20th: 4 slots (5th)
- **Pact Boon (3rd level)**:
  - *Pact of the Chain*: Learn [[Spells - Cantrips & 1st Level#Find Familiar|Find Familiar]] as a ritual; special forms: [[Appendix D - Creature Statistics#Imp|Imp]], [[Appendix D - Creature Statistics#Pseudodragon|Pseudodragon]], [[Appendix D - Creature Statistics#Quasit|Quasit]], or [[Appendix D - Creature Statistics#Sprite|Sprite]]. Familiar can attack.
  - *Pact of the Blade*: Create magical pact weapon in empty hand; proficient while wielding it; bond with magic weapons.
  - *Pact of the Tome*: Book of Shadows gives three cantrips from any class list.
- **Mystic Arcanum (11th, 13th, 15th, 17th level)**: Cast one 6th, 7th, 8th, and 9th level spell once per long rest without expending a spell slot.
- **Eldritch Master (20th level)**: Spend 1 minute entreating patron to regain all expended Pact Magic spell slots (1/long rest).

---

## Otherworldly Patrons

### The Archfey
- *Expanded Spells*: 1st: faerie fire, sleep / 2nd: calm emotions, phantasmal force / 3rd: blink, plant growth / 4th: dominate beast, greater invisibility / 5th: dominate person, seeming.
- *Fey Presence (1st)*: 10-ft cube causes Wis save or charmed/frightened until end of next turn (1/short or long rest).
- *Misty Escape (6th)*: Reaction on taking damage turns invisible and teleports up to 60 ft (1/short or long rest).
- *Beguiling Defenses (10th)*: Immune to charmed; turn charm back on attacker.
- *Dark Delirium (14th)*: Plunge creature into illusory realm (charmed/frightened) for 1 minute (1/short or long rest).

### The Fiend
- *Expanded Spells*: 1st: burning hands, command / 2nd: blindness/deafness, scorching ray / 3rd: fireball, stinking cloud / 4th: fire shield, wall of fire / 5th: flame strike, hallow.
- *Dark One's Blessing (1st)*: Reduce enemy to 0 HP gives temporary HP equal to \`Cha mod + warlock level\`.
- *Dark One's Own Luck (6th)*: Add 1d10 to an ability check or saving throw (1/short or long rest).
- *Fiendish Resilience (10th)*: Choose resistance to one damage type after rest (magical/silver bypasses).
- *Hurl Through Hell (14th)*: On weapon hit, fling target through lower planes; takes 10d10 psychic damage upon return (1/long rest).

### The Great Old One
- *Expanded Spells*: 1st: dissonant whispers, Tasha's hideous laughter / 2nd: detect thoughts, phantasmal force / 3rd: clairvoyance, sending / 4th: dominate beast, Evard's black tentacles / 5th: dominate person, telekinesis.
- *Awakened Mind (1st)*: Telepathically speak to any creature within 30 ft that knows a language.
- *Entropic Ward (6th)*: Reaction imposes disadvantage on incoming attack; advantage on your next attack against target if it misses.
- *Thought Shield (10th)*: Thoughts cannot be read; resistance to psychic damage; attackers taking psychic damage take equal damage back.
- *Create Thrall (14th)*: Touch incapacitated humanoid to permanently charm it until curse is removed.

---

## Eldritch Invocations
- **Agonizing Blast**: Add Charisma modifier to [[Spells - Cantrips & 1st Level#Eldritch Blast|Eldritch Blast]] damage on hit.
- **Armor of Shadows**: Cast [[Spells - Cantrips & 1st Level#Mage Armor|Mage Armor]] on yourself at will.
- **Ascendant Step (9th level)**: Cast [[Spells - 2nd Level#Levitate|Levitate]] on yourself at will.
- **Beast Speech**: Cast [[Spells - Cantrips & 1st Level#Speak with Animals|Speak with Animals]] at will.
- **Beguiling Influence**: Proficiency in Deception and Persuasion.
- **Bewitching Whispers (7th level)**: Cast compulsion once using a warlock slot per long rest.
- **Book of Ancient Secrets (Pact of the Tome)**: Inscribe rituals in Book of Shadows. Start with two 1st-level ritual spells; copy more for 50 gp & 2 hours/level.
- **Chains of Carceri (15th level, Pact of the Chain)**: Cast hold monster at will on celestial, fiend, or elemental.
- **Devil's Sight**: See normally in darkness (magical and nonmagical) up to 120 ft.
- **Dreadful Word (7th level)**: Cast confusion once using a warlock slot per long rest.
- **Eldritch Sight**: Cast [[Spells - Cantrips & 1st Level#Detect Magic|Detect Magic]] at will.
- **Eldritch Spear**: Eldritch Blast range becomes 300 feet.
- **Eyes of the Rune Keeper**: Read all writing.
- **Fiendish Vigor**: Cast [[Spells - Cantrips & 1st Level#False Life|False Life]] on yourself at will as 1st-level spell.
- **Gaze of Two Minds**: Action to perceive through a willing humanoid's senses.
- **Lifedrinker (12th level, Pact of the Blade)**: Hit with pact weapon deals extra necrotic damage equal to Charisma modifier.
- **Mask of Many Faces**: Cast [[Spells - Cantrips & 1st Level#Disguise Self|Disguise Self]] at will.
- **Master of Myriad Forms (15th level)**: Cast [[Spells - Cantrips & 1st Level#Alter Self|Alter Self]] at will.
- **Minions of Chaos (9th level)**: Cast conjure elemental once using a warlock slot per long rest.
- **Mire the Mind (5th level)**: Cast slow once using a warlock slot per long rest.
- **Misty Visions**: Cast [[Spells - Cantrips & 1st Level#Silent Image|Silent Image]] at will.
- **One with Shadows (5th level)**: Action to become invisible in dim light or darkness until you move or take action.
- **Otherworldly Leap (9th level)**: Cast [[Spells - Cantrips & 1st Level#Jump|Jump]] on yourself at will.
- **Repelling Blast**: Eldritch Blast pushes target up to 10 feet away in straight line on hit.
- **Sculptor of Flesh (7th level)**: Cast polymorph once using a warlock slot per long rest.
- **Sign of Ill Omen (5th level)**: Cast bestow curse once using a warlock slot per long rest.
- **Thief of Five Fates**: Cast bane once using a warlock slot per long rest.
- **Thirsting Blade (5th level, Pact of the Blade)**: Attack twice with pact weapon when taking Attack action.
- **Visions of Distant Realms (15th level)**: Cast arcane eye at will.
- **Voice of the Chain Master (Pact of the Chain)**: Communicate telepathically and speak through familiar across plane.
- **Whispers of the Grave (9th level)**: Cast [[Spells - 3rd Level#Speak with Dead|Speak with Dead]] at will.
- **Witch Sight (15th level)**: See true form of shapechangers/illusions within 30 ft.
`
  },
  {
    id: "class-wizard",
    title: "Wizard",
    folder: "Classes",
    category: "Class",
    tags: ["class", "wizard", "spellbook", "arcane-traditions"],
    aliases: ["Wizards"],
    content: `---
title: Wizard
category: Class
folder: Classes
tags: [class, wizard, spellbook, arcane-traditions]
---

# Wizard

Clad in the silver robes that denote her station, an elf closes her eyes to shut out the distractions of the battlefield and begins her quiet chant. Fingers weaving in front of her, she completes her spell and launches a tiny bead of fire toward the enemy ranks.

## Class Features
- **Hit Dice**: 1d6 per wizard level
- **Proficiencies**: Daggers, darts, slings, quarterstaffs, light crossbows. No armor.
- **Saving Throws**: Intelligence, Wisdom
- **Skills**: Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion.
- **Spellbook**: Starts with six 1st-level spells. Add 2 spells every wizard level for free. Copying spells takes 2 hours and 50 gp per spell level.
- **Spellcasting**: Prepare spells equal to \`Intelligence modifier + wizard level\`. Cast ritual spells directly from spellbook without preparing!
- **Arcane Recovery (1st level)**: Once per day after a short rest, regain expended spell slots with combined level ≤ half wizard level (up to 5th level).
- **Spell Mastery (18th level)**: Cast one chosen 1st-level and one 2nd-level wizard spell at will.
- **Signature Spells (20th level)**: Cast two chosen 3rd-level spells once each per short/long rest without expending a slot.

---

## Arcane Traditions (Schools of Magic)

### School of Abjuration
- *Abjuration Savant (2nd)*: Copy abjuration spells for half gold and time.
- *Arcane Ward (2nd)*: Casting 1st+ abjuration spell creates ward with HP = \`2 × wizard level + Int mod\`. Absorbs damage taken. Regains HP = 2 × spell level when casting abjuration spells.
- *Projected Ward (6th)*: Reaction uses Arcane Ward to absorb damage taken by ally within 30 ft.
- *Improved Abjuration (10th)*: Add proficiency bonus to ability checks made as part of casting spells like [[Spells - 3rd Level#Counterspell|Counterspell]] and [[Spells - 3rd Level#Dispel Magic|Dispel Magic]].
- *Spell Resistance (14th)*: Advantage on saving throws against spells; resistance to damage of spells.

### School of Conjuration
- *Conjuration Savant (2nd)*: Half gold and time for conjuration spells.
- *Minor Conjuration (2nd)*: Action conjures inanimate nonmagical object up to 3 ft on a side, 10 lbs (lasts 1 hour or until taking damage).
- *Benign Transposition (6th)*: Action teleports 30 ft to unoccupied space or swaps places with willing Small/Medium creature (recharges on long rest or casting 1st+ conjuration spell).
- *Focused Conjuration (10th)*: Concentration on conjuration spells cannot be broken by taking damage.
- *Durable Summons (14th)*: Any creature summoned/created with conjuration spell gains 30 temporary HP.

### School of Divination
- *Divination Savant (2nd)*: Half gold and time for divination spells.
- *Portent (2nd)*: Roll two d20s after long rest. Replace any attack roll, saving throw, or ability check made by you or a creature you can see with one of these rolls. (Three d20s at 14th via **Greater Portent**).
- *Expert Divination (6th)*: Casting divination spell of 2nd level+ regains an expended spell slot of lower level (up to 5th).
- *The Third Eye (10th)*: Action grants darkvision 60 ft, ethereal sight 60 ft, read any language, or see invisibility 10 ft until rest.

### School of Enchantment
- *Enchantment Savant (2nd)*: Half gold and time for enchantment spells.
- *Hypnotic Gaze (2nd)*: Action charms creature within 5 ft (Wis save); creature is incapacitated and speed becomes 0 while maintained.
- *Instinctive Charm (6th)*: Reaction diverts incoming attack to closest creature within range (Wis save).
- *Split Enchantment (10th)*: Single-target enchantment spell can target two creatures.
- *Alter Memories (14th)*: Target unaware of being charmed; action erases up to \`1 + Cha mod\` hours of memory.

### School of Evocation
- *Evocation Savant (2nd)*: Half gold and time for evocation spells.
- *Sculpt Spells (2nd)*: Create pockets of safety: \`1 + spell level\` creatures automatically succeed on saving throw and take 0 damage on evocation spells.
- *Potent Cantrip (6th)*: Damaging cantrips deal half damage on successful saving throws.
- *Empowered Evocation (10th)*: Add Intelligence modifier to damage roll of wizard evocation spells.
- *Overchannel (14th)*: Maximize damage of 1st–5th level wizard spell (takes 2d12 necrotic damage per spell level on subsequent uses before long rest).

### School of Illusion
- *Illusion Savant (2nd)*: Half gold and time for illusion spells.
- *Improved Minor Illusion (2nd)*: Learn minor illusion (or another cantrip); create both sound and image simultaneously.
- *Malleable Illusions (6th)*: Action changes the nature of an ongoing illusion.
- *Illusory Self (10th)*: Reaction creates illusory duplicate that automatically makes an incoming attack miss (1/short or long rest).
- *Illusory Reality (14th)*: Bonus action makes one nonmagical inanimate object in an illusion real for 1 minute (cannot deal damage).

### School of Necromancy
- *Necromancy Savant (2nd)*: Half gold and time for necromancy spells.
- *Grim Harvest (2nd)*: Killing creature with 1st+ spell regains HP = 2 × spell level (3 × for necromancy spells).
- *Undead Thralls (6th)*: Learn [[Spells - 3rd Level#Animate Dead|Animate Dead]]; create one additional skeleton/zombie; undead gain +wizard level HP and add your proficiency bonus to weapon damage.
- *Inured to Undeath (10th)*: Resistance to necrotic damage; max HP cannot be reduced.
- *Command Undead (14th)*: Action controls an undead creature (Charisma save; Int 8+ has advantage, Int 12+ repeats save every hour).

### School of Transmutation
- *Transmutation Savant (2nd)*: Half gold and time for transmutation spells.
- *Minor Alchemy (2nd)*: Temporarily alter wood, stone, iron, copper, or silver into another of those materials for 1 hour.
- *Transmuter's Stone (6th)*: Craft stone giving possessor choice of: Darkvision 60 ft, +10 ft speed, Con save proficiency, or Acid/Cold/Fire/Lightning/Thunder resistance.
- *Shapechanger (10th)*: Cast [[Spells - 4th Level#Polymorph|Polymorph]] on yourself without expending a spell slot (CR 1 or lower beast, 1/short or long rest).
- *Master Transmuter (14th)*: Action consumes stone for: Major Transformation (transmute 5-ft cube object), Panacea (cure all curses/diseases/poisons and full heal), Restore Life (cast raise dead without slot/components), or Restore Youth (reduce apparent age by 3d10 years).
`
  }
];
