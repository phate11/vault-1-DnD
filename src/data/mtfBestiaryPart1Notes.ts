import { VaultNote } from '../types';

export const mtfBestiaryPart1Notes: VaultNote[] = [
  {
    id: "mtf-demon-lords",
    title: "Demon Lords of the Abyss - Stat Blocks & Lairs",
    folder: "Tome of Foes/Bestiary/Demon Lords",
    category: "Creature",
    tags: ["mordenkainen", "demon-lord", "abyss", "baphomet", "demogorgon", "fraz-urb-luu", "graz-zt", "juiblex", "orcus", "yeenoghu", "zuggtmoy"],
    aliases: ["Demon Lords", "Baphomet", "Demogorgon", "Orcus", "Graz'zt", "Juiblex", "Yeenoghu", "Zuggtmoy", "Fraz-Urb'luu"],
    content: `---
title: Demon Lords of the Abyss - Stat Blocks & Lairs
category: Bestiary
folder: Tome of Foes/Bestiary/Demon Lords
tags: [mordenkainen, demon-lord, abyss, baphomet, demogorgon, fraz-urb-luu, graz-zt, juiblex, orcus, yeenoghu, zuggtmoy]
---

# Demon Lords of the Abyss - Stat Blocks & Lairs

---

## 🐂 Baphomet (The Horned King)
*Huge fiend (demon), chaotic evil* | **CR 23** (50,000 XP)

- **Armor Class**: 22 (natural armor)
- **Hit Points**: 275 (19d12 + 152) | **Speed**: 40 ft.
- **STR**: 30 (+10) | **DEX**: 14 (+2) | **CON**: 26 (+8) | **INT**: 18 (+4) | **WIS**: 24 (+7) | **CHA**: 16 (+3)
- **Saving Throws**: Dex +9, Con +15, Wis +14 | **Skills**: Intimidation +17, Perception +14
- **Damage Resistances**: cold, fire, lightning
- **Damage Immunities**: poison; bludgeoning, piercing, and slashing from nonmagical attacks
- **Condition Immunities**: charmed, exhaustion, frightened, poisoned
- **Senses**: truesight 120 ft., passive Perception 24 | **Languages**: all, telepathy 120 ft.
- **Charge**: Extra 16 (3d10) piercing damage on gore if moved 10+ ft straight; DC 25 Str save or pushed 10 ft and knocked prone.
- **Labyrinthine Recall**: Perfectly recalls any path traveled; immune to *maze*.
- **Legendary Resistance (3/Day)** | **Magic Resistance** | **Magic Weapons**
- **Reckless**: Advantage on melee attack rolls; attacks against him have advantage.
- **Innate Spellcasting** (Charisma, DC 18): At will: *detect magic*; 3/day each: *dispel magic*, *dominate beast*, *hunter's mark*, *maze*, *wall of stone*; 1/day: *teleport*.

### Actions & Legendary Actions
- **Multiattack**: Makes three attacks: one with Heartcleaver, one with bite, and one with gore.
- **Heartcleaver**: *+17 to hit*, reach 15 ft. *Hit*: 21 (2d10 + 10) slashing damage.
- **Bite**: *+17 to hit*, reach 10 ft. *Hit*: 19 (2d8 + 10) piercing damage.
- **Gore**: *+17 to hit*, reach 10 ft. *Hit*: 17 (2d6 + 10) piercing damage.
- **Frightful Presence**: DC 18 Wis save or frightened for 1 minute (120 ft radius).
- **Legendary Actions (3/round)**: Heartcleaver Attack (1 act); Charge (2 acts: move up to speed, then gore attack).

---

## 🐙 Demogorgon (Prince of Demons)
*Huge fiend (demon), chaotic evil* | **CR 26** (90,000 XP)

- **Armor Class**: 22 (natural armor)
- **Hit Points**: 406 (28d12 + 224) | **Speed**: 50 ft., swim 50 ft.
- **STR**: 29 (+9) | **DEX**: 14 (+2) | **CON**: 26 (+8) | **INT**: 20 (+5) | **WIS**: 17 (+3) | **CHA**: 25 (+7)
- **Saving Throws**: Dex +10, Con +16, Wis +11, Cha +15 | **Skills**: Insight +11, Perception +19
- **Damage Resistances**: cold, fire, lightning
- **Damage Immunities**: poison; nonmagical bludgeoning, piercing, slashing
- **Condition Immunities**: charmed, exhaustion, frightened, poisoned
- **Senses**: truesight 120 ft., passive Perception 29 | **Languages**: all, telepathy 120 ft.
- **Two Heads**: Advantage on saves vs. blinded, deafened, stunned, knocked unconscious.
- **Innate Spellcasting** (Charisma, DC 23): At will: *detect magic*, *major image*; 3/day: *dispel magic*, *fear*, *telekinesis*; 1/day: *feeblemind*, *project image*.

### Actions & Legendary Actions
- **Multiattack**: Makes two tentacle attacks.
- **Tentacle**: *+17 to hit*, reach 10 ft. *Hit*: 28 (3d12 + 9) bludgeoning. DC 23 Con save or max HP reduced by damage taken until long rest; dies if max HP reaches 0.
- **Gaze**: DC 23 Wis save within 120 ft:
  1. *Beguiling Gaze*: Stunned until start of next turn.
  2. *Hypnotic Gaze*: Charmed; Demogorgon controls target's actions, reactions, and movement.
  3. *Insanity Gaze*: Subjected to *confusion* spell.
- **Legendary Actions (2/round)**: Tail (+17 to hit, 20 bludgeoning + 11 necrotic); Maddening Gaze (uses Beguiling or Insanity gaze).

---

## 💀 Orcus (Demon Prince of Undeath)
*Huge fiend (demon), chaotic evil* | **CR 26** (90,000 XP)

- **Armor Class**: 17 (20 with *Wand of Orcus*)
- **Hit Points**: 405 (30d12 + 210) | **Speed**: 40 ft., fly 40 ft.
- **STR**: 27 (+8) | **DEX**: 14 (+2) | **CON**: 25 (+7) | **INT**: 20 (+5) | **WIS**: 20 (+5) | **CHA**: 25 (+7)
- **Saving Throws**: Dex +10, Con +15, Wis +13 | **Skills**: Arcana +12, Perception +12
- **Master of Undeath**: Undead created by Orcus remain under his control indefinitely.
- **Wand of Orcus**: 7 charges (*animate dead*, *blight*, *speak with dead*; 1 charge *circle of death*, *finger of death*; 2 charges *power word kill*). Conjure up to 500 HP of undead once per dawn.
- **Innate Spellcasting** (DC 23, +15 to hit): At will: *chill touch* (17th level), *detect magic*; 3/day: *create undead*, *dispel magic*; 1/day: *time stop*.

### Actions & Legendary Actions
- **Multiattack**: Two *Wand of Orcus* attacks (+19 to hit, reach 10 ft, 21 bludgeoning + 13 necrotic).
- **Tail**: *+16 to hit*, reach 10 ft. *Hit*: 21 piercing + 9 poison.
- **Legendary Actions (3/round)**: Tail (1 act); A Taste of Undeath (*chill touch*); Creeping Death (2 acts: 60-ft tall cylinder inflicting vulnerability to necrotic damage).

---

## 🖤 Graz'zt (The Dark Prince)
*Large fiend (demon, shapechanger), chaotic evil* | **CR 24** (62,000 XP)

- **Armor Class**: 20 (natural armor) | **Hit Points**: 346 (33d10 + 165) | **Speed**: 40 ft.
- **STR**: 22 (+6) | **DEX**: 15 (+2) | **CON**: 21 (+5) | **INT**: 23 (+6) | **WIS**: 21 (+5) | **CHA**: 26 (+8)
- **Skills**: Deception +15, Insight +12, Perception +12, Persuasion +15
- **Wave of Sorrow (Greatsword)**: *+13 to hit*, reach 10 ft. *Hit*: 20 (4d6 + 6) slashing + 10 (3d6) acid.
- **Legendary Actions**: Attack (1 act); Dance, My Puppet! (charmed creature moves up to speed); Sow Discord (*crown of madness* or *dissonant whispers*); Teleport (120 ft).

---

## 🦠 Juiblex (The Faceless Lord)
*Huge fiend (demon), chaotic evil* | **CR 23** (50,000 XP)

- **Armor Class**: 18 | **Hit Points**: 350 (28d12 + 168) | **Speed**: 30 ft.
- **Regeneration**: Regains 20 HP at start of turn unless taking fire or radiant damage.
- **Foul**: Creatures within 10 ft must succeed on DC 21 Con save or be poisoned.
- **Acid Lash**: *+14 to hit*, reach 10 ft. *Hit*: 21 (4d6 + 7) acid damage; killed creatures are drawn into Juiblex and obliterated.
- **Eject Slime (Recharge 5–6)**: 60 ft range, DC 21 Dex save or take 55 (10d10) acid damage, and metal armor/weapons take permanent -1 penalties until destroyed.

---

## 🪓 Yeenoghu (Beast of Butchery)
*Huge fiend (demon), chaotic evil* | **CR 24** (62,000 XP)

- **Armor Class**: 20 | **Hit Points**: 333 (23d12 + 184) | **Speed**: 50 ft.
- **Flail (The Butcher)**: *+16 to hit*, reach 15 ft. Extra effects: +13 (2d12) bludgeoning, or DC 17 Con save vs paralysis, or DC 17 Wis save vs *confusion*.
- **Rampage**: When dropping a creature to 0 HP, bonus action to move half speed and bite.

---

## 🍄 Zuggtmoy (Demon Queen of Fungi)
*Large fiend (demon), chaotic evil* | **CR 23** (50,000 XP)

- **Armor Class**: 18 | **Hit Points**: 304 (32d10 + 128) | **Speed**: 30 ft.
- **Infestation Spores (3/Day)**: 20-ft radius cloud, DC 19 Con save or infected with Zuggtmoy spores and random madness, transforming into a spore servant upon death.
- **Mind Control Spores (Recharge 5–6)**: 20-ft radius cloud, DC 19 Wis save or charmed for 24 hours.

---

## 🎭 Fraz-Urb'luu (Prince of Deception)
*Large fiend (demon), chaotic evil* | **CR 23** (50,000 XP)

- **Armor Class**: 18 | **Hit Points**: 337 (27d10 + 189) | **Speed**: 40 ft., fly 40 ft.
- **Undetectable**: Immune to divination, magical scrying, and fiend-sensing abilities.
- **Phantasmal Killer (Legendary Action, 2 costs)**: Casts *phantasmal killer* without concentration.
`
  },
  {
    id: "mtf-archdevils-bestiary",
    title: "Archdevils of the Nine Hells - Stat Blocks & Lairs",
    folder: "Tome of Foes/Bestiary/Archdevils",
    category: "Creature",
    tags: ["mordenkainen", "archdevil", "nine-hells", "zariel", "bael", "geryon", "hutijin", "moloch", "titivilus"],
    aliases: ["Archdevils", "Zariel Stat Block", "Bael Stat Block", "Geryon Stat Block", "Hutijin", "Moloch", "Titivilus"],
    content: `---
title: Archdevils of the Nine Hells - Stat Blocks & Lairs
category: Creature
folder: Tome of Foes/Bestiary/Archdevils
tags: [mordenkainen, archdevil, nine-hells, zariel, bael, geryon, hutijin, moloch, titivilus]
---

# Archdevils of the Nine Hells - Stat Blocks & Lairs

---

## 🗡️ Zariel (Archduchess of Avernus)
*Large fiend (devil), lawful evil* | **CR 26** (90,000 XP)

- **Armor Class**: 21 (natural armor)
- **Hit Points**: 580 (40d10 + 360) | **Speed**: 50 ft., fly 150 ft.
- **STR**: 27 (+8) | **DEX**: 24 (+7) | **CON**: 28 (+9) | **INT**: 26 (+8) | **WIS**: 27 (+8) | **CHA**: 30 (+10)
- **Saving Throws**: Int +16, Wis +16, Cha +18 | **Skills**: Intimidation +18, Perception +16
- **Damage Resistances**: cold, fire, radiant; nonmagical bludgeoning, piercing, slashing (not silvered)
- **Damage Immunities**: necrotic, poison
- **Condition Immunities**: charmed, exhaustion, frightened, poisoned
- **Senses**: darkvision 120 ft., passive Perception 26 | **Languages**: all, telepathy 120 ft.
- **Fiery Weapons**: Weapon attacks deal an extra 36 (8d8) fire damage.
- **Regeneration**: Regains 20 HP at start of turn (halted by radiant damage).
- **Innate Spellcasting** (DC 26): At will: *alter self*, *detect evil and good*, *fireball*, *invisibility* (self), *wall of fire*; 3/day: *blade barrier*, *dispel evil and good*, *finger of death*.

### Actions & Legendary Actions
- **Multiattack**: Two attacks with longsword or javelins (can substitute Horrid Touch for one).
- **Longsword**: *+16 to hit*, reach 10 ft. *Hit*: 17 (2d8 + 8) slashing + 36 (8d8) fire damage.
- **Horrid Touch (Recharge 5–6)**: *+16 to hit*, reach 10 ft. *Hit*: 44 (8d10) necrotic, target poisoned for 1 min (also blinded and deafened while poisoned).
- **Immolating Gaze (Legendary Action, 2 costs)**: Creature within 120 ft must succeed on DC 26 Wis save or take 22 (4d10) fire damage.

---

## 🛡️ Bael (Bronze General)
*Large fiend (devil), lawful evil* | **CR 19** (22,000 XP)

- **Armor Class**: 18 (plate) | **Hit Points**: 189 (18d10 + 90) | **Speed**: 30 ft.
- **STR**: 24 (+7) | **DEX**: 17 (+3) | **CON**: 20 (+5) | **INT**: 21 (+5) | **WIS**: 24 (+7) | **CHA**: 24 (+7)
- **Dreadful**: Bonus action aura (10 ft); non-devils must succeed on DC 22 Wis save or be frightened.
- **Hellish Morningstar**: *+13 to hit*, reach 20 ft. *Hit*: 16 (2d8 + 7) piercing + 13 (3d8) necrotic.
- **Awaken Greed (Legendary Action)**: Casts *charm person* or *major image*.

---

## ❄️ Geryon (The Frozen Hunter)
*Huge fiend (devil), lawful evil* | **CR 22** (41,000 XP)

- **Armor Class**: 19 | **Hit Points**: 300 (24d12 + 144) | **Speed**: 30 ft., fly 50 ft.
- **STR**: 29 (+9) | **DEX**: 17 (+3) | **CON**: 22 (+6) | **INT**: 19 (+4) | **WIS**: 16 (+3) | **CHA**: 23 (+6)
- **Claws**: *+16 to hit*, reach 15 ft. *Hit*: 23 (4d6 + 9) slashing, grapples and restrains target. If already grappled, deals extra 27 (6d8) slashing damage.
- **Stinger**: *+16 to hit*, reach 20 ft. *Hit*: 14 piercing + DC 21 Con save or take 13 (2d12) poison, poisoned, and max HP reduced by half poison damage taken.

---

## 🦇 Hutijin (Duke of Cania)
*Large fiend (devil), lawful evil* | **CR 21** (33,000 XP)

- **Armor Class**: 19 | **Hit Points**: 200 (16d10 + 112) | **Speed**: 30 ft., fly 60 ft.
- **Infernal Despair**: Non-devils within 15 ft make saving throws with disadvantage.
- **Multiattack**: Four attacks: bite (+15 to hit, DC 22 Con save or poisoned taking 3d6 poison each turn and cannot heal), claw, mace, tail.

---

## ⛓️ Moloch (The Exiled Lord)
*Large fiend (devil), lawful evil* | **CR 21** (33,000 XP)

- **Armor Class**: 19 | **Hit Points**: 253 (22d10 + 132) | **Speed**: 30 ft.
- **Many-Tailed Whip**: *+15 to hit*, reach 30 ft. *Hit*: 13 slashing + 11 lightning, DC 24 Str save or pulled 30 ft toward Moloch.
- **Breath of Despair (Recharge 5–6)**: 30-ft cube, DC 21 Wis save or 27 (5d10) psychic, drops items, and must Dash away frightened.

---

## 📜 Titivilus (Voice of Dispater)
*Medium fiend (devil), lawful evil* | **CR 16** (15,000 XP)

- **Armor Class**: 20 | **Hit Points**: 127 (17d8 + 51) | **Speed**: 40 ft., fly 60 ft.
- **Twisting Words**: DC 21 Cha save or charmed for 1 minute.
- **Corrupting Guidance (Legendary Action)**: DC 21 Cha save against charmed creature to dictate its next turn.
`
  },
  {
    id: "mtf-elder-elementals",
    title: "Elder Elementals - Apocalypse Beasts of the Inner Planes",
    folder: "Tome of Foes/Bestiary/Elementals",
    category: "Creature",
    tags: ["mordenkainen", "elder-elementals", "leviathan", "phoenix", "elder-tempest", "zaratan"],
    aliases: ["Elder Elementals", "Leviathan", "Phoenix", "Elder Tempest", "Zaratan"],
    content: `---
title: Elder Elementals - Apocalypse Beasts of the Inner Planes
category: Creature
folder: Tome of Foes/Bestiary/Elementals
tags: [mordenkainen, elder-elementals, leviathan, phoenix, elder-tempest, zaratan]
---

# Elder Elementals - Apocalypse Beasts of the Inner Planes

Summoned only by the most unhinged cultists of the **Elder Elemental Eye**, these gargantuan entities embody the raw apocalyptic fury of the elemental planes.

---

## 🌊 Leviathan (Elder Water Elemental)
*Gargantuan elemental, neutral* | **CR 20** (25,000 XP)

- **Armor Class**: 17 | **Hit Points**: 328 (16d20 + 160) | **Speed**: 40 ft., swim 120 ft.
- **STR**: 30 (+10) | **DEX**: 24 (+7) | **CON**: 30 (+10) | **INT**: 2 (-4) | **WIS**: 18 (+4) | **CHA**: 17 (+3)
- **Partial Freeze**: Taking 50+ cold damage slows speed to 20 ft and gives disadvantage on attacks.
- **Tidal Wave (Recharge 6)**: Wall of water up to 250 ft long, 250 ft high, 50 ft thick. DC 24 Str save or 33 (6d10) bludgeoning. Moves 50 ft per round crushing creatures.

---

## 🔥 Phoenix (Elder Fire Elemental)
*Gargantuan elemental, neutral* | **CR 16** (15,000 XP)

- **Armor Class**: 18 | **Hit Points**: 175 (10d20 + 70) | **Speed**: 20 ft., fly 120 ft.
- **STR**: 19 (+4) | **DEX**: 26 (+8) | **CON**: 25 (+7) | **INT**: 2 (-4) | **WIS**: 21 (+5) | **CHA**: 18 (+4)
- **Fiery Death and Rebirth**: Explodes on death (60 ft, DC 20 Dex save for 4d10 fire damage). Leaves a 5 lb indestructible cinder that deals 6d6 fire and hatches a new phoenix in 1d6 days.
- **Fire Form**: Squeezes through 1-inch openings; entering a creature's space deals 5 (1d10) fire damage.
- **Flyby**: Provokes no opportunity attacks.

---

## ⚡ Elder Tempest (Elder Air Elemental)
*Gargantuan elemental, neutral* | **CR 23** (50,000 XP)

- **Armor Class**: 19 | **Hit Points**: 264 (16d20 + 96) | **Speed**: 0 ft., fly 120 ft. (hover)
- **Living Storm**: Centered in a storm 1d6 + 4 miles in diameter with howling winds and heavy precipitation.
- **Thunderous Slam**: *+16 to hit*, reach 20 ft. *Hit*: 23 (4d6 + 9) thunder damage.
- **Lightning Storm (Recharge 6)**: 120 ft radius; DC 20 Dex save or 27 (6d8) lightning and stunned if failed by 5+.
- **Screaming Gale (Legendary Action, 3 costs)**: 1-mile line, 20 ft wide; 22 thunder damage and flung up to 60 feet.

---

## ⛰️ Zaratan (Elder Earth Elemental)
*Gargantuan elemental, neutral* | **CR 22** (41,000 XP)

- **Armor Class**: 21 (natural armor) | **Hit Points**: 307 (15d20 + 150) | **Speed**: 40 ft., swim 40 ft.
- **Damage Vulnerability**: Thunder.
- **Earth-Shaking Movement**: Bonus action after moving 10 ft; 120-ft radius difficult terrain, DC 25 Con save to maintain concentration, deals 100 thunder damage to structures.
- **Retract & Revitalize**: Retracts into shell (resistance to all damage, regains 52 [5d20] hit points).
`
  },
  {
    id: "mtf-marut-and-clockworks",
    title: "Marut & Modron/Gnomish Clockworks",
    folder: "Tome of Foes/Bestiary/Constructs",
    category: "Creature",
    tags: ["mordenkainen", "marut", "construct", "inevitable", "clockworks", "steel-predator"],
    aliases: ["Marut", "Steel Predator", "Clockworks", "Bronze Scout", "Iron Cobra", "Oaken Bolter", "Stone Defender"],
    content: `---
title: Marut & Modron/Gnomish Clockworks
category: Creature
folder: Tome of Foes/Bestiary/Constructs
tags: [mordenkainen, marut, construct, inevitable, clockworks, steel-predator]
---

# Marut & Modron/Gnomish Clockworks

---

## ⚖️ Marut (The Cosmic Inevitable)
*Large construct (inevitable), lawful neutral* | **CR 25** (75,000 XP)

- **Armor Class**: 22 (natural armor) | **Hit Points**: 432 (32d10 + 256) | **Speed**: 40 ft., fly 30 ft. (hover)
- **STR**: 28 (+9) | **DEX**: 12 (+1) | **CON**: 26 (+8) | **INT**: 19 (+4) | **WIS**: 15 (+2) | **CHA**: 18 (+4)
- **Immutable Form** | **Magic Resistance** | **Legendary Resistance (3/Day)**
- **Unerring Slam**: Melee weapon attack: **automatic hit**, reach 5 ft. *Hit*: **60 force damage**, and target pushed 5 ft if Huge or smaller.
- **Blazing Edict (Recharge 5–6)**: 60-foot cube. Each creature takes **45 radiant damage** and DC 20 Wis save or stunned until end of next turn.
- **Justify**: Up to two targets within 60 ft must make DC 20 Charisma saving throw or be **teleported directly to the Hall of Concordance in Sigil** along with the Marut.

---

## ⚙️ Steel Predator
*Large construct, lawful evil* | **CR 16** (15,000 XP)

- **Armor Class**: 20 | **Hit Points**: 207 (18d10 + 108) | **Speed**: 40 ft.
- **Modron Engineering**: Built by a rogue hexton modron in Sigil to track down specific quarry across planar boundaries.
- **Stunning Roar (Recharge 5–6)**: 60-ft cone; DC 19 Con save or 27 (5d10) thunder damage, drops held items, and stunned for 1 minute.

---

## 🛠️ Gnomish Clockworks

Gnomes craft specialized clockwork constructs with unique customizable enhancements (e.g., *Camouflaged*, *Sensors*, *Reinforced Construction*, *Self-Repairing*) and malfunctions (e.g., *Faulty Sensors*, *Imprinting Loop*, *Overheats*):

1. **Bronze Scout (CR 1)**: Subterranean burrowing scout with telescoping eyestalks and *Lightning Flare* (4d6 lightning).
2. **Iron Cobra (CR 4)**: Poison-injecting metal serpent delivering random alchemical toxins (3d8 poison, confusion, or paralysis).
3. **Oaken Bolter (CR 5)**: Mobile siege ballista launching *Lancing Bolts*, *Harpoons* (grappling and reeling foes), and *Explosive Bolts* (5d6 fire).
4. **Stone Defender (CR 4)**: Heavy stone-armored bodyguard with *Intercept Attack* (+5 AC reaction to adjacent allies).
`
  }
];
