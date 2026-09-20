import { VaultNote } from '../types';

export const strahdBestiaryNotes: VaultNote[] = [
  {
    id: "strahd-von-zarovich",
    title: "Strahd von Zarovich (Stat Block & Lair Actions)",
    folder: "Curse of Strahd/Monsters & NPCs",
    category: "NPC",
    tags: ["curse-of-strahd", "strahd", "vampire", "stat-block", "darklord", "boss"],
    aliases: ["Count Strahd von Zarovich", "Strahd", "Strahd Stat Block", "The Darklord"],
    content: `---
title: Strahd von Zarovich (Stat Block & Lair Actions)
category: NPC
folder: Curse of Strahd/Monsters & NPCs
tags: [curse-of-strahd, strahd, vampire, stat-block, darklord, boss]
---

# Strahd von Zarovich (Stat Block & Lair Actions)

Count **Strahd von Zarovich** is the master of [[Castle Ravenloft - Complete Master Guide|Castle Ravenloft]] and the darklord of [[The Lands of Barovia - Rules & Alterations to Magic|Barovia]]. In life, he was a ruthless general and prince. In death, he is an ancient vampire, accomplished wizard, and apex predator.

---

## 🧛 Strahd von Zarovich
*Medium undead (shapechanger), lawful evil*

- **Armor Class**: 16 (natural armor)
- **Hit Points**: 144 (17d8 + 68)
- **Speed**: 30 ft.

| STR | DEX | CON | INT | WIS | CHA |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 18 (+4) | 18 (+4) | 18 (+4) | 20 (+5) | 15 (+2) | 18 (+4) |

- **Saving Throws**: Dex +9, Wis +7, Cha +9
- **Skills**: Arcana +15, Perception +12, Religion +10, Stealth +14
- **Damage Resistances**: Necrotic; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks
- **Senses**: Darkvision 120 ft., Passive Perception 22
- **Languages**: Abyssal, Common, Draconic, Elvish, Giant, Infernal
- **Challenge**: 15 (13,000 XP)

---

### Special Traits

- **Shapechanger**: If Strahd isn't in running water or sunlight, he can use his action to polymorph into a tiny bat, a Medium wolf, or a Medium cloud of mist, or back into his true form.
- **Legendary Resistance (3/Day)**: If Strahd fails a saving throw, he can choose to succeed instead.
- **Misty Escape**: When Strahd drops to 0 hit points outside his resting place, he transforms into a cloud of mist instead of falling unconscious. If he can't transform, he is destroyed. He must reach his coffin in Castle Ravenloft within 2 hours or be destroyed.
- **Regeneration**: Strahd regains **20 hit points** at the start of his turn if he has at least 1 hit point and isn't in running water or sunlight.
- **Spellcasting**: Strahd is a 9th-level spellcaster (spell save DC 18, +10 to hit with spell attacks):
  - *Cantrips (at will)*: *mage hand*, *prestidigitation*, *ray of frost*
  - *1st level (4 slots)*: *comprehend languages*, *fog cloud*, *sleep*
  - *2nd level (3 slots)*: *detect thoughts*, *gust of wind*, *mirror image*
  - *3rd level (3 slots)*: *animate dead*, *fireball*, *nondetection*
  - *4th level (3 slots)*: *blight*, *greater invisibility*, *polymorph*
  - *5th level (1 slot)*: *animate objects*, *scrying*
- **Spider Climb**: Can climb difficult surfaces and ceilings without making an ability check.
- **Heart of Sorrow Link**: Up to 50 points of damage dealt to Strahd is absorbed by the [[Castle Ravenloft - Complete Master Guide|Heart of Sorrow]] in the castle tower instead.

### Vampire Weaknesses
- **Forbiddance**: Cannot enter a residence without an invitation.
- **Harmed by Running Water**: Takes 20 acid damage if he ends his turn in running water.
- **Stake to the Heart**: If a piercing weapon made of wood is driven into his heart while he is incapacitated in his resting place, he is paralyzed until the stake is removed.
- **Sunlight Hypersensitivity**: Takes 20 radiant damage at the start of his turn in sunlight and has disadvantage on attack rolls and ability checks.

---

### Actions

- **Multiattack (Vampire Form Only)**: Strahd makes two attacks, only one of which can be a bite attack.
- **Unarmed Strike**: *Melee Weapon Attack*: +9 to hit, reach 5 ft., one target. *Hit*: 8 (1d8 + 4) bludgeoning damage plus 14 (4d6) necrotic damage. Can grapple the target (escape DC 18).
- **Bite**: *Melee Weapon Attack*: +9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by Strahd, incapacitated, or restrained. *Hit*: 7 (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and Strahd regains hit points equal to that amount.
- **Charm**: One humanoid within 30 feet must succeed on a **DC 17 Wisdom saving throw** or be charmed for 24 hours. The target regards Strahd as a trusted friend and mentor.
- **Children of the Night (1/Day)**: Strahd magically calls 2d4 swarms of bats or swarms of rats. While outdoors, he can call 3d6 wolves instead. They arrive in 1d4 rounds and serve for 1 hour.

---

### Legendary Actions (3/Round)
- **Move**: Strahd moves up to his speed without provoking opportunity attacks.
- **Unarmed Strike**: Strahd makes one unarmed strike.
- **Bite (Costs 2 Actions)**: Strahd makes one bite attack.

---

### 🏰 Lair Actions in Castle Ravenloft
On initiative count 20 (losing ties), Strahd can take one of the following lair actions:
1. **Pass Through Walls**: Until initiative count 20 of the next round, Strahd can pass through solid walls, doors, ceilings, and floors as if they were difficult terrain.
2. **Door & Window Control**: Lock or open any number of doors or windows in the castle within his line of sight.
3. **Summon Apparition**: Summons the angry specter of one who died in the castle.
4. **Animate Shadow**: Targets one Medium or smaller creature within 30 feet that casts a shadow. Target makes a **DC 17 Charisma saving throw** or their shadow detaches and becomes an allied **shadow** under Strahd's control.
`
  },
  {
    id: "cos-major-npcs",
    title: "Curse of Strahd - Major NPCs & Allies",
    folder: "Curse of Strahd/Monsters & NPCs",
    category: "NPC",
    tags: ["curse-of-strahd", "npcs", "van-richten", "ezmerelda", "madam-eva", "rahadin"],
    aliases: ["Ravenloft NPCs", "Rudolph van Richten", "Madam Eva", "Ezmerelda", "Rahadin", "The Abbot"],
    content: `---
title: Curse of Strahd - Major NPCs & Allies
category: NPC
folder: Curse of Strahd/Monsters & NPCs
tags: [curse-of-strahd, npcs, van-richten, ezmerelda, madam-eva, rahadin]
---

# Curse of Strahd - Major NPCs & Allies

Detailed stat blocks and roleplaying notes for key companions and adversaries across Barovia:

---

## 🔮 Madam Eva
*Medium humanoid (human), chaotic neutral*
- **CR 10** (5,900 XP) | **AC 10** | **HP 88** (16d8 + 16) | Speed 20 ft.
- **Secret**: Strahd's half-sister Katarina, daughter of King Barov and a Vistani woman.
- **Spellcasting**: 16th-level cleric (spell save DC 17, +9 to hit):
  - *Spells*: *guidance*, *sacred flame*, *thaumaturgy*, *command*, *detect evil and good*, *spiritual weapon*, *spirit guardians*, *divination*, *freedom of movement*, *greater restoration*, *raise dead*, *find the path*, *harm*, *fire storm*, *earthquake*.
- **Curse (Recharges after Long Rest)**: Target within 30 ft must succeed on a DC 17 Wisdom save or be cursed with blindness/deafness. Madam Eva takes 5d6 psychic damage when the curse ends.
- **Evil Eye**: Cast *animal friendship*, *charm person*, or *hold person* (save DC 17).

---

## 🗡️ Rudolph van Richten (alias Rictavio)
*Medium humanoid (human), lawful good*
- **CR 5** (1,800 XP) | **AC 12** (leather armor) | **HP 77** (14d8 + 14) | Speed 30 ft.
- **Equipment**: Sword cane (+4 to hit, 1d6+1 bludgeoning or piercing), *hat of disguise*, *ring of mind shielding*, spell scroll of *raise dead*.
- **Undead Slayer**: Weapon attacks deal an extra **3d6 damage** against undead.
- **Spellcasting**: 9th-level cleric (spell save DC 15, +7 to hit):
  - *Spells*: *cure wounds*, *detect evil and good*, *augury*, *lesser restoration*, *magic circle*, *remove curse*, *speak with dead*, *death ward*, *dispel evil and good*.
- **Tragic Backstory**: Erasmus, Van Richten's only son, was stolen by Vistani and sold to vampire Baron Metus. Van Richten was forced to slay his own turned son, dedicating his life to hunting monsters.

---

## 🪓 Ezmerelda d'Avenir
*Medium humanoid (human), chaotic good*
- **CR 8** (3,900 XP) | **AC 17** (+1 studded leather) | **HP 82** (11d8 + 33) | Speed 30 ft.
- **Weapons**: Multiattack (3 attacks): +1 Rapier (+8 to hit, 1d8+5 piercing), Handaxe (+6 to hit, 1d6+3 slashing), Silvered Shortsword (+7 to hit, 1d6+4 piercing).
- **Prosthetic Leg**: Lost right leg below the knee to a werewolf bite; crafted a sturdy wooden prosthetic.
- **Spellcasting**: 7th-level wizard (spell save DC 14, +6 to hit):
  - *Spells*: *fire bolt*, *light*, *mage hand*, *magic missile*, *shield*, *darkvision*, *knock*, *mirror image*, *clairvoyance*, *lightning bolt*, *greater invisibility*.
- **Curse & Evil Eye**: Recharges after rest; DC 14 saves.

---

## 🧝‍♂️ Rahadin
*Medium humanoid (elf), lawful evil*
- **CR 10** (5,900 XP) | **AC 18** (studded leather) | **HP 135** (18d8 + 54) | Speed 35 ft.
- **Chamberlain of Castle Ravenloft**: Exiled dusk elf who betrayed his people to serve Strahd's family.
- **Deathly Choir**: Any creature within 10 feet hears the agonized screams of thousands slaughtered by Rahadin. As a bonus action, Rahadin forces creatures hearing the screams to make a **DC 16 Wisdom saving throw**, taking **16 (3d10) psychic damage** on a failure.
- **Multiattack**: Three attacks with scimitar (+10 to hit, 1d6+6 slashing) or two with poisoned darts (+10 to hit, 1d4+6 piercing plus 2d4 poison).

---

## 👼 The Abbot
*Medium celestial, lawful evil*
- **CR 10** (5,900 XP) | **AC 17** (natural armor) | **HP 136** (16d8 + 64) | Speed 30 ft., fly 90 ft.
- **A Corrupted Deva**: Angel sent from the Upper Planes to restore the Abbey of Saint Markovia, corrupted by pride and dark influences.
- **Angelic Weapons**: Weapon attacks deal an extra 4d8 radiant damage.
- **Healing Touch (3/Day)**: Restores 20 hit points and cures all diseases and conditions.
- **Obsession**: Perfecting **Vasilka**, a flesh golem bride assembled from corpses, believing she will redeem Strahd.

---

## ⚔️ Vladimir Horngaard
*Medium undead, lawful evil*
- **CR 7** (2,900 XP) | **AC 17** (half plate) | **HP 192** (rejuvenation) | Speed 30 ft.
- **Commander of the Order of the Silver Dragon**: Sworn revenant.
- **+2 Greatsword**: Multiattack (2 attacks): +9 to hit, reach 5 ft. *Hit*: 20 (4d6 + 6) slashing damage. Against Strahd, deals an extra 14 (4d6) slashing damage!

---

## 👹 Izek Strazni
*Medium humanoid (human), neutral evil*
- **CR 5** (1,800 XP) | **AC 14** (studded leather) | **HP 112** (15d8 + 45) | Speed 30 ft.
- **Fiendish Gift**: Monstrous barbed arm capable of casting **Hurl Flame** (ranged attack +5 to hit, range 60 ft., 3d6 fire damage).
- **Battleaxe**: +7 to hit, 13 (2d8 + 4) slashing damage.
- **Obsession**: The Baron's enforcer has dreams of [[Ireena Kolyana]] and hoards dolls of her in his bedroom.

---

## 🧙‍♂️ Kasimir Velikov
*Medium humanoid (dusk elf), neutral*
- **CR 6** (2,300 XP) | **AC 12** | **HP 40** | Speed 30 ft.
- **Tragic Goal**: A dusk elf elder whose ears were severed by Rahadin. Guided by dreams of his dead sister Patrina, he seeks the dark gift of Zhudun in the Amber Temple to resurrect her.
- **Spells**: *cone of cold*, *wall of stone*, *ice storm*, *fireball*, *fly*. Wears a *ring of warmth*.
`
  },
  {
    id: "cos-monsters-barovia",
    title: "Curse of Strahd - Monsters & Creatures of Barovia",
    folder: "Curse of Strahd/Monsters & NPCs",
    category: "Creature",
    tags: ["curse-of-strahd", "monsters", "creatures", "baba-lysaga", "wereraven", "stat-blocks"],
    aliases: ["Monsters of Barovia", "Baba Lysaga", "Creeping Hut", "Wereraven", "Mongrelfolk"],
    content: `---
title: Curse of Strahd - Monsters & Creatures of Barovia
category: Creature
folder: Curse of Strahd/Monsters & NPCs
tags: [curse-of-strahd, monsters, creatures, baba-lysaga, wereraven, stat-blocks]
---

# Curse of Strahd - Monsters & Creatures of Barovia

Complete stat blocks and mechanics for the unique horrors roaming the mist-choked valley of Barovia:

---

## 🧙‍♀️ Baba Lysaga
*Medium humanoid (human, shapechanger), chaotic evil*
- **CR 11** (7,200 XP) | **AC 15** (natural armor) | **HP 120** (16d8 + 48) | Speed 30 ft.
- **Spellcasting**: 16th-level wizard (spell save DC 17, +9 to hit):
  - *Spells*: *acid splash*, *fire bolt*, *magic missile*, *sleep*, *witch bolt*, *crown of madness*, *misty step*, *dispel magic*, *fireball*, *lightning bolt*, *blight*, *Evard's black tentacles*, *polymorph*, *cloudkill*, *geas*, *scrying*, *programmed illusion*, *true seeing*, *finger of death*, *mirage arcane*, *power word stun*.
- **Flying Skull**: Commands a hollowed-out giant skull with flying speed 40 ft., AC 15, 50 HP.
- **Summon Swarms of Insects (Recharge Short/Long Rest)**: Summons 1d4 swarms of biting insects.

---

## 🏚️ Baba Lysaga's Creeping Hut
*Gargantuan construct, unaligned*
- **CR 11** (7,200 XP) | **AC 16** (natural armor) | **HP 263** (17d20 + 85) | Speed 30 ft.
- **Damage Immunities**: Poison, Psychic; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks.
- **Condition Immunities**: Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Prone.
- **Heart of the Hut**: Animated by the green gemstone from [[The Wizard of Wines]] under the floorboards (AC 10, 10 damage to destroy, DC 14 Athletics to pry loose). Removing the gem incapacitates the hut.
- **Multiattack**: Three attacks with roots or rocks.
  - *Root*: +12 to hit, reach 60 ft., 30 (4d10 + 8) bludgeoning damage.
  - *Rock*: +12 to hit, range 120 ft., 21 (3d8 + 8) bludgeoning damage.

---

## 🦅 Wereraven
*Medium humanoid (human, shapechanger), lawful good*
- **CR 2** (450 XP) | **AC 12** | **HP 31** (7d8) | Speed 30 ft. (fly 50 ft. in raven form).
- **Damage Immunities**: Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't silvered.
- **Shapechanger**: Polymorph into raven-humanoid hybrid or raven.
- **Mimicry**: Can mimic simple sounds, voices, and whispers (DC 10 Insight).
- **Attacks**: Multiattack (hybrid/human form, 2 attacks): Shortsword (+4 to hit, 1d6+2 piercing) or Hand Crossbow (+4 to hit, 1d6+2 piercing). Beak (raven form, DC 10 Con save against wereraven lycanthropy).

---

## 🐾 Mongrelfolk
*Medium humanoid (mongrelfolk), any alignment*
- **CR 1/4** (50 XP) | **AC 11** (natural armor) | **HP 26** (4d8 + 8) | Speed 20 ft.
- **Random Extraordinary Feature (d20)**:
  - *1–3*: Amphibious (breathe air and water)
  - *4–9*: Darkvision 60 ft.
  - *10*: Flight (leathery wings, fly 40 ft.)
  - *11–15*: Keen Hearing and Smell (Advantage on Perception)
  - *16–17*: Spider Climb (climb walls/ceilings)
  - *18–19*: Standing Leap (long jump 20 ft., high jump 10 ft.)
  - *20*: Two-Headed (Advantage on Perception and saving throws against blinded, charmed, deafened, frightened, stunned, unconscious)

---

## 🧟 Strahd Zombie
*Medium undead, unaligned*
- **CR 1** (200 XP) | **AC 8** | **HP 30** (4d8 + 12) | Speed 20 ft.
- **Loathsome Limbs**: Whenever the zombie takes 5 or more bludgeoning or slashing damage from a single hit, roll **d20**:
  - *1–8*: One leg severed (falls prone; speed halved).
  - *9–16*: One arm severed (arm continues attacking independently, AC 8, speed 5 ft.).
  - *17–20*: Decapitated (head blind outside its space, bites nearby targets).
- **Multiattack**: Makes three attacks: one bite (+3 to hit, 1d4+1 piercing) and two claws (+3 to hit, 1d6+1 slashing).

---

## 🌳 Tree Blight
*Huge plant, neutral evil*
- **CR 7** (2,900 XP) | **AC 15** (natural armor) | **HP 149** (13d12 + 65) | Speed 30 ft.
- **Actions**: Multiattack (4 attacks: 2 branches, 2 roots).
  - *Branch*: +9 to hit, reach 15 ft., 16 (3d6 + 6) bludgeoning damage.
  - *Grasping Root*: +9 to hit, reach 15 ft. Target is grappled (escape DC 15) and takes 9 bludgeoning damage per turn.
  - *Bite*: +9 to hit, reach 5 ft., 19 (3d8 + 6) piercing damage against a grappled creature.

---

## 🛡️ Strahd's Animated Armor
*Medium construct, lawful evil*
- **CR 6** (2,300 XP) | **AC 21** (natural armor) | **HP 112** (15d8 + 45) | Speed 30 ft.
- **Damage Resistances**: Cold, Fire.
- **Damage Immunities**: Lightning, Poison.
- **Shocking Bolt**: Ranged Spell Attack: +4 to hit (+advantage vs targets wearing metal armor), range 60 ft., 10 (3d6) lightning damage.
- **Greatsword**: +6 to hit, reach 5 ft., 10 (2d6 + 3) slashing damage plus 3 (1d6) lightning damage.
`
  }
];
