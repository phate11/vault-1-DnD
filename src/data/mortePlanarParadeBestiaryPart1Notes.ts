import { VaultNote } from '../types';

export const mortePlanarParadeBestiaryPart1Notes: VaultNote[] = [
  {
    id: "morte-archons",
    title: "Archons (Hound, Lantern, Warden) - Celestials of Mount Celestia",
    folder: "Planescape/Bestiary",
    category: "Creature",
    tags: ["planescape", "morte", "celestial", "archon", "mount-celestia", "cr2", "cr4", "cr8"],
    aliases: ["Hound Archon", "Lantern Archon", "Warden Archon", "Archons 5e"],
    content: `---
title: Archons (Hound, Lantern, Warden) - Celestials of Mount Celestia
category: Creature
folder: Planescape/Bestiary
tags: [planescape, morte, celestial, archon, mount-celestia, cr2, cr4, cr8]
source: Morte's Planar Parade (pg. 16–18)
---

# Archons of Mount Celestia

Archons are denizens of the Seven Heavens of Mount Celestia. Created by powers of order and benevolence, archons defend their home from fiendish incursions and safeguard those threatened by wicked forces. Skilled communicators who speak all languages of the multiverse, archons prefer to subdue foes, but against Fiends they strike with wrathful righteousness.

---

## 🐕 Hound Archon
*Medium Celestial, Typically Lawful Good*

- **Armor Class**: 15 (natural armor)
- **Hit Points**: 65 (10d8 + 20)
- **Speed**: 40 ft.
- **STR**: 18 (+4) | **DEX**: 12 (+1) | **CON**: 15 (+2) | **INT**: 11 (+0) | **WIS**: 14 (+2) | **CHA**: 15 (+2)
- **Saving Throws**: Int +2, Wis +4
- **Skills**: Insight +4, Perception +6, Stealth +3
- **Damage Immunities**: lightning
- **Condition Immunities**: exhaustion, paralyzed
- **Senses**: darkvision 120 ft., passive Perception 16
- **Languages**: all
- **Challenge**: 4 (1,100 XP) | **Proficiency Bonus**: +2

### Traits
- **Aura of Menace**: Each creature of the archon's choice that starts its turn within 20 ft must make a **DC 12 Wisdom saving throw** or be **frightened** until the start of its next turn. On a success, immune for 24 hours.

### Actions
- **Multiattack**: The archon makes two Bite attacks. It can replace one attack with a Shining Blade attack.
- **Bite**: Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) piercing damage. If the target is Large or smaller, it must succeed on a **DC 14 Strength saving throw** or have the prone condition.
- **Shining Blade (True Form Only)**: Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) radiant damage.
- **Spellcasting**: Charisma-based. At will: *detect evil and good*; 1/day each: *aid*, *continual flame*.
- **Teleport**: Teleports up to 120 ft to an unoccupied space it can see.

### Bonus Actions
- **Change Shape**: Magically transforms into any Medium or Large dog or wolf while retaining its statistics (except losing Shining Blade).

---

## 💡 Lantern Archon
*Small Celestial, Typically Lawful Good*

- **Armor Class**: 13
- **Hit Points**: 22 (5d6 + 5)
- **Speed**: 0 ft., fly 60 ft. (hover)
- **STR**: 1 (−5) | **DEX**: 16 (+3) | **CON**: 12 (+1) | **INT**: 6 (−2) | **WIS**: 12 (+1) | **CHA**: 13 (+1)
- **Skills**: Perception +3
- **Damage Resistances**: bludgeoning, piercing, and slashing from nonmagical attacks
- **Damage Immunities**: lightning, radiant
- **Condition Immunities**: exhaustion, grappled, paralyzed, prone, restrained
- **Senses**: darkvision 120 ft., passive Perception 13
- **Languages**: all
- **Challenge**: 2 (450 XP) | **Proficiency Bonus**: +2

### Traits
- **Aura of Menace**: DC 11 Wisdom save within 20 ft or frightened.
- **Illumination**: Sheds bright light in 30 ft and dim light for 30 ft.
- **Incorporeal Movement**: Can move through creatures and objects as difficult terrain (takes 1d10 force if ending turn inside an object).

### Actions
- **Multiattack**: Two Radiant Strikes. Can replace one with Teleport.
- **Radiant Strike**: Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 60 ft., one target. Hit: 6 (1d6 + 3) radiant damage.
- **Spellcasting**: Charisma-based. At will: *detect evil and good*; 1/day: *aid*.
- **Teleport**: Teleports up to 120 ft to an unoccupied space.

### Bonus Actions
- **Shift Radiance**: Reduces light to dim light in 5-ft radius, or returns to full intensity.

---

## 🐻 Warden Archon
*Large Celestial, Typically Lawful Good*

- **Armor Class**: 18 (plate armor)
- **Hit Points**: 136 (16d10 + 48)
- **Speed**: 30 ft., climb 30 ft.
- **STR**: 20 (+5) | **DEX**: 10 (+0) | **CON**: 17 (+3) | **INT**: 15 (+2) | **WIS**: 18 (+4) | **CHA**: 18 (+4)
- **Saving Throws**: Con +6, Wis +7
- **Skills**: Arcana +5, Athletics +8, Perception +10
- **Damage Immunities**: lightning
- **Condition Immunities**: charmed, exhaustion, frightened, paralyzed
- **Senses**: darkvision 120 ft., truesight 30 ft., passive Perception 20
- **Languages**: all
- **Challenge**: 8 (3,900 XP) | **Proficiency Bonus**: +3

### Traits
- **Aura of Menace**: DC 15 Wisdom save within 20 ft or frightened.
- **Eternal Vigil**: Cannot be surprised; knows whenever any creature uses a portal it is assigned to guard.

### Actions
- **Multiattack**: Two Claw attacks and one Tracker's Bite attack.
- **Claw**: Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) slashing damage, and Large or smaller target is **grappled (escape DC 18)**.
- **Tracker's Bite**: Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 15 (3d6 + 5) piercing damage. For the next 24 hours, the archon knows the exact distance and direction to the target on the same plane.
- **Spellcasting**: Charisma-based (DC 15). At will: *detect evil and good*; 1/day each: *aid*, *continual flame*, *protection from evil and good*, *scrying* (as an action).
- **Teleport**: Teleports up to 120 ft.
`
  },
  {
    id: "morte-baernaloth",
    title: "Baernaloth - Primal Yugoloth of the Gray Wastes",
    folder: "Planescape/Bestiary",
    category: "Creature",
    tags: ["planescape", "morte", "fiend", "yugoloth", "hades", "cr17", "lair-actions", "boss"],
    aliases: ["Baernaloth", "Baernaloth Stat Block", "Primal Yugoloth"],
    content: `---
title: Baernaloth - Primal Yugoloth of the Gray Wastes
category: Creature
folder: Planescape/Bestiary
tags: [planescape, morte, fiend, yugoloth, hades, cr17, lair-actions, boss]
source: Morte's Planar Parade (pg. 20–21)
---

# Baernaloth

> *"Like I always say: 'Ignorant and happy beats cosmically knowledgeable and eternally tormented.'"*
> —Morte

Baernaloths are tall, gaunt yugoloths who keep to the Gray Wastes of Hades. Their gray skin stretches over bone, and their heads resemble horned equine skulls with ember-like eyes. Sages debate their nature: they precede even the *Books of Keeping*, representing primal evils that may have crafted the demodands of Carceri.

---

## 💀 Baernaloth Stat Block
*Large Fiend (Yugoloth), Typically Neutral Evil*

- **Armor Class**: 17 (natural armor)
- **Hit Points**: 256 (27d10 + 108)
- **Speed**: 40 ft.
- **STR**: 19 (+4) | **DEX**: 14 (+2) | **CON**: 18 (+4) | **INT**: 22 (+6) | **WIS**: 16 (+3) | **CHA**: 21 (+5)
- **Saving Throws**: Con +10, Wis +9
- **Skills**: Arcana +12, Insight +9, Perception +9
- **Damage Resistances**: cold, fire, lightning, necrotic, psychic; bludgeoning, piercing, and slashing from nonmagical attacks
- **Damage Immunities**: acid, poison
- **Condition Immunities**: charmed, frightened, poisoned
- **Senses**: truesight 120 ft., passive Perception 19
- **Languages**: all, telepathy 120 ft.
- **Challenge**: 17 (18,000 XP) or 18 (20,000 XP) in lair | **Proficiency Bonus**: +6

### Traits
- **Legendary Resistance (4/Day)**: When failing a saving throw, can choose to succeed.
- **Magic Resistance**: Advantage on saves vs spells and magical effects.

### Actions
- **Multiattack**: Makes one Anguishing Bite and one Claw attack. Can also use Teleport.
- **Anguishing Bite**: Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage plus 10 (3d6) psychic damage. Target cannot regain hit points until start of baernaloth's next turn.
- **Claw**: Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) slashing damage plus 17 (5d6) necrotic damage.
- **Miasma of Discord (Recharge 5–6)**: Exhales gray vapors into a 20-ft-radius sphere within 120 ft. Non-yugoloths must make a **DC 19 Wisdom saving throw**, taking **35 (10d6) psychic damage** and becoming **charmed** until the end of its next turn (treats allies as foes; equipment turns gray). Half damage on save.
- **Spellcasting**: Int-based (DC 20). At will: *detect thoughts*, *phantasmal force*, *suggestion*; 1/day each: *cloudkill*, *plane shift* (self only), *scrying* (as an action).
- **Summon Yugoloth (1/Day)**: 50% chance to summon 1d4 mezzoloths, 1 arcanaloth, or 1 baernaloth.
- **Teleport**: Teleports up to 120 ft.

### Reactions (Up to 3 per round, 1 per turn)
- **Afflict Despair**: When a creature within 60 ft hits with an attack or succeeds on a saving throw, forces the creature to reroll the d20 and use the new result.
- **Inescapable Pain**: When damaged by a creature, forces it to make a **DC 19 Constitution save**, taking **14 (4d6) necrotic damage** (half on success).

---

## 🏔️ Lair Actions & Regional Effects (Hades Crags)
On initiative count 20 (losing ties):
- **Consume Suffering**: When any creature other than the baernaloth takes necrotic/psychic damage or drops to 0 HP, the baernaloth regains **10 (3d6) HP**.
- **Discover Secrets**: Casts *detect thoughts*; target takes **13 (3d8) psychic damage**.
- **Recurring Wound**: Creature missing HP must make **DC 19 Con save** or take **22 (4d10) necrotic damage** (half on success).

### Regional Effects (within 10 miles)
- **Persistent Anguish**: Spells that restore HP or remove charmed/frightened fail unless caster makes a **DC 19 spellcasting ability check**.
- **Slow Healing**: Regains only half HP on long rest; Hit Dice heal half on short rest.
`
  },
  {
    id: "morte-demodands",
    title: "Demodands (Farastu, Kelubar, Shator) - Jailers of Carceri",
    folder: "Planescape/Bestiary",
    category: "Creature",
    tags: ["planescape", "morte", "fiend", "demodand", "gehreleth", "carceri", "cr11", "cr13", "cr16"],
    aliases: ["Demodands", "Farastu", "Kelubar", "Shator Demodand", "Gehreleths"],
    content: `---
title: Demodands (Farastu, Kelubar, Shator) - Jailers of Carceri
category: Creature
folder: Planescape/Bestiary
tags: [planescape, morte, fiend, demodand, gehreleth, carceri, cr11, cr13, cr16]
source: Morte's Planar Parade (pg. 26–29)
---

# Demodands (Gehreleths)

Demodands are bitter fiends from the Tarterian Depths of Carceri who appointed themselves the jailers of the prison plane. They viciously guard portals out of Carceri and torment inmates. When killed outside Carceri, they reform on the prison plane in 2d20 days.

---

## 🖤 Farastu Demodand (Tarry Demodand)
*Medium Fiend, Typically Neutral Evil*

- **Armor Class**: 17 (natural armor) | **Hit Points**: 195 (26d8 + 78) | **Speed**: 40 ft., climb 40 ft.
- **STR**: 20 (+5) | **DEX**: 13 (+1) | **CON**: 16 (+3) | **INT**: 8 (−1) | **WIS**: 12 (+1) | **CHA**: 16 (+3)
- **Saving Throws**: Dex +5, Wis +5 | **Skills**: Perception +9, Stealth +5, Survival +5
- **Damage Resistances**: cold, fire | **Damage Immunities**: acid, poison
- **Condition Immunities**: paralyzed, poisoned, restrained
- **Challenge**: 11 (7,200 XP) | **Proficiency Bonus**: +4
- **Traits**: *Boundless Movement* (ignores difficult terrain; spends 5 ft to remove grappled), *Spider Climb*, *Magic Resistance*.
- **Actions**:
  - **Multiattack**: Two Claws and one Bite.
  - **Claw**: +9 to hit, reach 5 ft. Hit: 16 (2d10 + 5) slashing damage, and Large or smaller target is **grappled (escape DC 15 with disadvantage)**. Has two claws.
  - **Bite**: +9 to hit (advantage vs grappled target). Hit: 12 (2d6 + 5) piercing + **24 (7d6) acid damage**.
  - **Spellcasting**: Charisma-based. At will: *invisibility* (self only); 1/day each: *dispel magic*, *fog cloud*.
  - **Summon Demodand (1/Day)**: 40% chance to summon 1 farastu demodand.

---

## 💚 Kelubar Demodand (Slimy Demodand)
*Medium Fiend, Typically Neutral Evil*

- **Armor Class**: 18 (natural armor) | **Hit Points**: 187 (22d8 + 88) | **Speed**: 30 ft., fly 60 ft.
- **STR**: 22 (+6) | **DEX**: 13 (+1) | **CON**: 18 (+4) | **INT**: 14 (+2) | **WIS**: 15 (+2) | **CHA**: 18 (+4)
- **Damage Resistances**: cold, fire | **Damage Immunities**: acid, poison
- **Condition Immunities**: paralyzed, poisoned, restrained
- **Challenge**: 13 (10,000 XP) | **Proficiency Bonus**: +5
- **Traits**: *Acidic Secretions* (touching or hitting within 5 ft deals **2d4 acid**), *Boundless Movement*, *Magic Resistance*.
- **Actions**:
  - **Multiattack**: Two Bites (+11 to hit, 11 piercing + **18 (4d8) acid**).
  - **Spit Acid**: 60 ft long, 5 ft wide line. DC 17 Dex save or **27 (6d8) acid damage** (half on success).
  - **Spellcasting**: Charisma-based (DC 17). At will: *invisibility* (self only); 1/day: *dispel magic*, *scrying*.
  - **Summon Demodand (1/Day)**: 40% chance for 1d2 farastus or 1 kelubar.
- **Bonus Actions**:
  - **Acid Fog (Recharge 6)**: 20-ft-radius cloud within 120 ft for 1 min. Heavily obscured, difficult terrain; DC 17 Con save or **poisoned** until end of next turn.

---

## 🍄 Shator Demodand (Shaggy Demodand)
*Large Fiend, Typically Neutral Evil*

- **Armor Class**: 19 (natural armor) | **Hit Points**: 195 (23d10 + 69) | **Speed**: 30 ft., fly 60 ft.
- **STR**: 24 (+7) | **DEX**: 15 (+2) | **CON**: 17 (+3) | **INT**: 21 (+5) | **WIS**: 16 (+3) | **CHA**: 20 (+5)
- **Damage Resistances**: cold, fire | **Damage Immunities**: acid, poison
- **Condition Immunities**: charmed, frightened, paralyzed, poisoned, restrained
- **Senses**: truesight 120 ft., passive Perception 23
- **Challenge**: 16 (15,000 XP) | **Proficiency Bonus**: +5
- **Traits**:
  - **Jailer (1/Day)**: Can cast *imprisonment* (chaining effect only, DC 18).
  - **Liquefaction Ritual**: 1-minute ritual turns willing farastus and kelubars within 60 ft into liquid inside flasks (immune to all damage until unsealed!).
  - **Numbing Secretions**: Hitting or touching within 5 ft forces **DC 17 Dex save** or disadvantage on attack rolls and speed halved.
- **Actions**:
  - **Multiattack**: One Bite and two Enervating Tridents.
  - **Bite**: +12 to hit, reach 5 ft. Hit: 17 (3d6 + 7) piercing + **26 (4d12) acid**. Target must make **DC 16 Con save or be paralyzed** until start of shator's next turn.
  - **Enervating Trident**: +12 to hit, reach 10 ft. Hit: 18 (2d10 + 7) necrotic damage.
  - **Inhibitory Spray (Recharge 5–6)**: 100-ft line, 5 ft wide. DC 16 Dex save or **40 (9d8) acid damage and paralyzed for 1 minute** (save ends).
  - **Spellcasting**: Int-based (DC 18). At will: *invisibility* (self only), *suggestion*; 1/day each: *dispel magic*, *plane shift* (to Carceri only), *scrying*.
  - **Summon Demodand (1/Day)**: 50% chance for 1d4 farastus, 1d2 kelubars, or 1 shator.
`
  },
  {
    id: "morte-guardinals-bariaur-dabus",
    title: "Planar Denizens: Bariaur, Dabus, Darkweaver, Eater of Knowledge & Guardinals",
    folder: "Planescape/Bestiary",
    category: "Creature",
    tags: ["planescape", "morte", "bariaur", "dabus", "guardinal", "darkweaver", "eater-of-knowledge"],
    aliases: ["Dabus", "Bariaur", "Darkweaver", "Eater of Knowledge", "Guardinals"],
    content: `---
title: Planar Denizens: Bariaur, Dabus, Darkweaver, Eater of Knowledge & Guardinals
category: Creature
folder: Planescape/Bestiary
tags: [planescape, morte, bariaur, dabus, guardinal, darkweaver, eater-of-knowledge]
source: Morte's Planar Parade (pg. 21–34)
---

# Planar Denizens of Sigil & The Outer Planes

---

## 🐐 Bariaur Wanderer
*Medium Celestial, Typically Chaotic Good (CR 3, 700 XP)*
- **AC**: 14 (studded leather) | **HP**: 71 (11d8 + 22) | **Speed**: 40 ft.
- **STR 18 (+4), DEX 14 (+2), CON 15 (+2), INT 11 (+0), WIS 15 (+2), CHA 10 (+0)**
- **Portal Sense**: Senses presence and destination of portals within 30 ft.
- **Actions**: Multiattack (2 Javelin or Shortbow attacks); **Barbed Javelin** (+6 to hit, 1d10+4 piercing, speed reduced by 10 ft); **Ram** (+6 to hit, 1d8+4 + 3d6 bludgeoning on charge + DC 14 Str save or prone); **Mighty Leap** (bonus action jumps up to walking speed).
- **Innate Spells**: *dancing lights*, *druidcraft*, 1/day: *goodberry*, *pass without trace*, *tongues*.

---

## 🧱 Dabus
*Medium Celestial, Typically Lawful Neutral (CR 2, 450 XP)*
- **AC**: 12 | **HP**: 44 (8d8 + 8) | **Speed**: 20 ft., fly 30 ft. (hover)
- **Symbol Speech**: Communicates through illusory rebus symbols that float in the air (DC 10 Investigation check to decipher).
- **Physical Restraint**: Does not make melee attacks or opportunity attacks.
- **Actions**: Multiattack (2 Flying Bricks); **Flying Brick**: Ranged Spell Attack: +5 to hit, range 90 ft. Hit: 7 (1d8 + 3) bludgeoning damage; **Grasping Ground (Recharge 6)**: 20-ft square within 60 ft sprouts cobblestone hands (DC 13 Dex save or 9 (2d8) bludgeoning and restrained/grappled).

---

## 🕷️ Darkweaver
*Medium Aberration, Typically Chaotic Evil (CR 10, 5,900 XP / CR 11 in lair)*
- **AC**: 16 | **HP**: 149 (23d8 + 46) | **Speed**: 50 ft., climb 50 ft.
- **Shadowy Form**: Attacks against it have disadvantage in dim light/darkness.
- **Sunlight Hypersensitivity**: Takes 10 radiant damage at start of turn in sunlight.
- **Actions**: Multiattack (2 Shadow Webs, 1 Bite, then Reel); **Bite**: +7 to hit, 13 piercing + 17 necrotic (reduces max HP permanently until long rest); **Shadow Web**: +7 to hit, range 120 ft. Hit: 16 (3d10) necrotic and grappled (escape DC 15, AC 16 web); **Reel**: Pulls grappled creatures up to 60 ft.
- **Lair Actions**: Extinguish flames in 30 ft; Shadow Fears (DC 15 Wis save or frightened); Shadow Step (teleports 60 ft in shadow).
- **Darkweaver Cocoon Contents (d6)**: 1. Humanoid/flumph bones; 2. Swarm of insects; 3. Corpse with universal solvent; 4. Sigil restaurant menus; 5. 4d12 gp slurry; 6. Forgotten living captive!

---

## 🧠 Eater of Knowledge
*Large Aberration, Typically Neutral Evil (CR 6, 2,300 XP)*
- **AC**: 15 | **HP**: 102 (12d10 + 36) | **Speed**: 40 ft.
- **STR 18, DEX 10, CON 17, INT 18, WIS 16, CHA 15**
- **Brains Devoured**: Starts with 1d10 brains consumed. Gains higher-tier psionics as it eats brains (from *detect magic* up to *mass suggestion* at 10+ brains).
- **Actions**: Slam (+7 to hit, 2d6+4, grapple DC 14 and DC 15 Int save or stunned); **Extract Brain**: +7 to hit vs incapacitated humanoid, deals 45 (10d8) piercing; if reduced to 0 HP, kills and devours brain.

---

## 🕊️ Guardinals of Elysium
- **Musteval (CR 2, 450 XP)**: Mousy scout. AC 13, HP 38. Spells: *disguise self*, *invisibility*. Reaction: *Skirmish Movement* (moves half speed when enemy ends turn within 5 ft).
- **Equinal (CR 6, 2,300 XP)**: Powerful horse warrior. AC 15, HP 93, Speed 50 ft. *Headfirst Charge* (DC 17 Str save or prone + 4d6); Fist (2d6+6 + 1d6 radiant); *Shout (Recharge 6)*: 30-ft cone DC 14 Con save or stunned.
- **Avoral (CR 9, 5,000 XP)**: Eagle skirmisher. AC 16, HP 172, fly 50 ft. *Flyby*, *Dive Attack* (DC 15 Str save or prone + 4d6); Talon (2d6+4 piercing + 2d12 radiant); Spells: *command*, *hold person*.
`
  },
  {
    id: "morte-githzerai",
    title: "Githzerai (Futurist, Traveler, Uniter) - Psionic Masters of Limbo",
    folder: "Planescape/Bestiary",
    category: "Creature",
    tags: ["planescape", "morte", "githzerai", "aberration", "limbo", "psionics", "cr3", "cr7", "cr9"],
    aliases: ["Githzerai Futurist", "Githzerai Traveler", "Githzerai Uniter"],
    content: `---
title: Githzerai (Futurist, Traveler, Uniter) - Psionic Masters of Limbo
category: Creature
folder: Planescape/Bestiary
tags: [planescape, morte, githzerai, aberration, limbo, psionics, cr3, cr7, cr9]
source: Morte's Planar Parade (pg. 30–32)
---

# Githzerai of Limbo

Disciplined monks and psions who master chaos, navigate the Astral plane, and shape the chaotic matter of Limbo with their iron wills.

---

## 🔮 Githzerai Futurist
*Medium Aberration (Gith), Any Alignment (CR 9, 5,000 XP)*
- **AC**: 16 (Psychic Defense, includes Wis) | **HP**: 149 (23d8 + 46) | **Speed**: 40 ft.
- **STR 14 (+2), DEX 17 (+3), CON 15 (+2), INT 17 (+3), WIS 17 (+3), CHA 13 (+1)**
- **Senses**: truesight 30 ft., passive Perception 17
- **Actions**: Multiattack (3 Unarmed Strikes or Psychic Bolts).
  - **Unarmed Strike**: +7 to hit, 12 (2d8 + 3) bludgeoning + 11 (2d10) psychic damage.
  - **Psychic Bolt**: Ranged Spell Attack: +7 to hit, range 60 ft. Hit: 21 (4d8 + 3) psychic damage.
  - **Psionics**: At will: *dispel magic*, *levitate*, *mage hand*, *see invisibility*; 1/day: *plane shift* (self), *scrying*, *slow*, *telekinesis*.
- **Reaction - Future Insight (3/Day)**: When it or a creature it can see rolls an attack, save, or check, causes the roll to be made with **advantage or disadvantage**.

---

## 🧭 Githzerai Traveler
*Medium Aberration (Gith), Any Alignment (CR 3, 700 XP)*
- **AC**: 15 | **HP**: 44 (8d8 + 8) | **Speed**: 30 ft.
- **Actions**: Multiattack (3 Unarmed Strikes: 6 bludgeoning + 4 psychic).
- **Bonus Action - Matter Manipulation (Recharge 4–6)** (d6):
  - *1–2 Astral Step*: Teleports 40 ft; walking speed increases to 40 ft.
  - *3–4 Growth*: Ground within 15 ft becomes difficult terrain vines.
  - *5–6 Retaliating Light*: Melee attacker within 5 ft takes 1d6 force damage.

---

## 🕊️ Githzerai Uniter
*Medium Aberration (Gith), Any Alignment (CR 7, 2,900 XP)*
- **AC**: 16 | **HP**: 123 (19d8 + 38) | **Speed**: 40 ft.
- **Actions**: Multiattack (3 attacks: Unarmed Strike or Psychic Bolt, can replace with Pacifying Touch).
  - **Pacifying Touch**: Touch creature; DC 14 Int save or uniter forbids it from taking an action (Attack, Cast a Spell, or Dash) for 1 minute!
`
  }
];
