import { VaultNote } from '../types';

export const vecnaDossierNotes: VaultNote[] = [
  {
    id: "vecna-the-archlich-statblock",
    title: "Vecna the Archlich - The Whispered One Dossier & Stat Block",
    folder: "Campaign Bosses/Vecna",
    category: "Creature",
    tags: ["vecna", "archlich", "greyhawk", "undead", "wizard", "godhood", "cr26", "boss", "multiverse"],
    aliases: [
      "Vecna the Archlich", "Vecna Stat Block", "The Whispered One",
      "Master of the Spider Throne", "Undying King", "Lord of the Rotted Tower"
    ],
    content: `---
title: Vecna the Archlich - The Whispered One Dossier & Stat Block
category: Creature
folder: Campaign Bosses/Vecna
tags: [vecna, archlich, greyhawk, undead, wizard, godhood, cr26, boss, multiverse]
source: D&D Dossier: Vecna (pg. 1–4)
---

# Vecna the Archlich

> *"On countless worlds, his name evokes tales of terror and cruelty. Vecna the Undying King. Vecna the Whispered One. Vecna the Lord of the Rotted Tower. Over more than a hundred thousand years, incandescent hatred carried him from the humblest of origins to a conqueror's throne, then to the realms that lie beyond life and death, and finally to godhood."*

---

## 📜 Origin & Mythos

- **Humble Beginnings**: Born into a lowly caste on the world of Oerth (Greyhawk), son of a hedge witch executed for necromancy. Exiled into servitude to an order of wizards as a bootblack and scribe.
- **The Whisper & The Book**: Secretly studied forbidden treatises after midnight. A voice from another realm promised revenge, guiding his hand to author the infamous **[[Book of Vile Darkness]]**. He massacred his former masters.
- **The Obsidian Empire**: Forged a sprawling kingdom on Oerth from an obsidian tower rising from the depths of the Nyr Dyv. As mortality approached, Orcus taught him the dark ritual of lichdom.
- **The Spider Throne & Cavitius**: Ruled for centuries as master of the Spider Throne, eventually building the palace citadel of Cavitius in the ash wastes between Earth and Fire.
- **The Betrayal of Kas**: Vecna appointed the ruthless warlord Kas the Bloody-Handed as his bodyguard and forged the sentient **[[Sword of Kas]]** for him. Urged by the sword's whispering ambition, Kas rebelled. In the cataclysmic duel, Vecna's tower was reduced to ash, and Kas severed Vecna's left hand and eye before meeting his own doom.
- **Godhood**: Across centuries of planar wanderings and questing for his lost artifacts, Vecna ascended to true godhood, challenging the cosmic boundaries of Sigil and the entire multiverse.

---

## 💀 Vecna the Archlich Stat Block
*Medium Undead (Wizard), Lawful Evil*

- **Armor Class**: 18 (natural armor)
- **Hit Points**: 272 (32d8 + 128)
- **Speed**: 30 ft.
- **STR**: 14 (+2) | **DEX**: 16 (+3) | **CON**: 18 (+4) | **INT**: 22 (+6) | **WIS**: 24 (+7) | **CHA**: 16 (+3)
- **Saving Throws**: Con +12, Int +14, Wis +15
- **Skills**: Arcana +22, History +14, Insight +15, Perception +15
- **Damage Resistances**: cold, lightning, necrotic
- **Damage Immunities**: poison; bludgeoning, piercing, and slashing from nonmagical attacks
- **Condition Immunities**: charmed, exhaustion, frightened, paralyzed, poisoned, stunned
- **Senses**: truesight 120 ft., passive Perception 25
- **Languages**: Common, Draconic, Elvish, Infernal
- **Challenge**: 26 (90,000 XP) | **Proficiency Bonus**: +8

### Traits
- **Legendary Resistance (5/Day)**: If Vecna fails a saving throw, he can choose to succeed instead.
- **Special Equipment**: Vecna carries a magic dagger named *Afterthought*. In the hands of anyone else, it is a *+2 dagger*.
- **Undying**: If Vecna is slain, his soul refuses to accept its fate and lives on as a disembodied spirit that fashions a new body for itself after **1d100 years**. Vecna's soul can fashion a new body even if his old body was burned to ash or obliterated. When complete, Vecna regains all hit points and becomes active again, appearing anywhere within 100 miles of where he was slain.
- **Unusual Nature**: Vecna doesn't require air, food, drink, or sleep.

### Actions
- **Multiattack**: Vecna uses *Flight of the Damned* (if available), *Rotten Fate*, or *Spellcasting*. He then makes two attacks with *Afterthought*.
- **Afterthought**: Melee Weapon Attack: **+13 to hit**, reach 5 ft., one target. Hit: 7 (1d4 + 5) piercing damage plus **9 (2d8) necrotic damage**. If target is a creature, it takes 9 (2d8) necrotic damage at the start of each of its turns until it succeeds on a **DC 20 Constitution saving throw**. Until it succeeds, it cannot regain hit points!
- **Flight of the Damned (Recharge 5–6)**: Vecna conjures a torrent of flying, spectral entities in a 120-foot cone. Each creature in that area must make a **DC 22 Constitution saving throw**, taking **36 (8d8) necrotic damage** and becoming **frightened** for 1 minute (half damage and not frightened on success; save ends at end of turn).
- **Rotten Fate**: Vecna causes necrotic magic to engulf one creature he can see within 120 feet. Target must make a **DC 22 Constitution saving throw**, taking **96 (8d8 + 60) necrotic damage** (half on success). A Humanoid killed by this magic **rises as a zombie** at the start of Vecna's next turn and acts immediately under Vecna's control!
- **Spellcasting**: Int-based (spell save **DC 22**), requiring no material components:
  - *At will*: *animate dead* (as an action), *detect magic*, *dispel magic*, *fly*, *lightning bolt*, *mage hand*, *prestidigitation*
  - *2/day each*: *dimension door*, *invisibility*, *scrying* (as an action)
  - *1/day each*: *dominate monster*, *globe of invulnerability*, *plane shift* (self only)

### Bonus Actions
- **Vile Teleport**: Vecna teleports up to 30 feet to an unoccupied space he can see. He can cause each creature of his choice within 15 feet of his destination to take **10 (3d6) psychic damage**. If at least one creature takes this damage, **Vecna regains 80 hit points**!

### Reactions (Up to 3 per round, 1 per turn)
- **Dread Counterspell**: Vecna utters a dread word to interrupt a creature he can see casting a spell. If the spell is 4th level or lower, it fails and has no effect. If 5th level or higher, Vecna makes an Intelligence check (DC 10 + spell level). On a success, the spell fails and the caster takes **10 (3d6) psychic damage**!
- **Fell Rebuke**: In response to being hit by an attack, Vecna utters a fell word, dealing **10 (3d6) necrotic damage** to the attacker, and teleports up to 30 feet to an unoccupied space he can see.
`
  },
  {
    id: "vecna-artifacts",
    title: "Artifacts of Vecna: Book of Vile Darkness, Sword of Kas, Eye & Hand of Vecna",
    folder: "Campaign Bosses/Vecna",
    category: "Equipment",
    tags: ["vecna", "artifacts", "magic-items", "sword-of-kas", "eye-of-vecna", "hand-of-vecna", "book-of-vile-darkness"],
    aliases: [
      "Book of Vile Darkness", "Sword of Kas", "Eye of Vecna",
      "Hand of Vecna", "Artifacts of Vecna"
    ],
    content: `---
title: Artifacts of Vecna: Book of Vile Darkness, Sword of Kas, Eye & Hand of Vecna
category: Equipment
folder: Campaign Bosses/Vecna
tags: [vecna, artifacts, magic-items, sword-of-kas, eye-of-vecna, hand-of-vecna, book-of-vile-darkness]
source: D&D Dossier: Vecna (pg. 5–17), Dungeon Master's Guide (pg. 222–226)
---

# The Four Artifacts of Vecna

---

## 📖 Book of Vile Darkness
*Wondrous Item, Artifact (Requires Attunement)*

- **Attunement**: Must spend 80 hours reading and studying it. Non-evil creatures must make a **DC 17 Charisma saving throw** or their alignment changes to **Neutral Evil**. Must perform an evil act at least once every 10 days or it vanishes. Upon death while attuned, soul is claimed by great evil.
- **Random Properties**: 3 minor beneficial, 1 major beneficial, 3 minor detrimental, 2 major detrimental.
- **Adjusted Ability Scores**: One ability score of your choice increases by +2 (max 24); another decreases by −2 (min 3).
- **Mark of Darkness**: Hideous physical disfigurement (evil rune, glossy black eyes, horns, wizened face). Grants advantage on Charisma (Persuasion) vs evil creatures, and Charisma (Intimidation) vs non-evil.
- **Command Evil**: Cast *dominate monster* on an evil target (save DC 18) 1/dawn.
- **Dark Lore**: Double proficiency bonus on Intelligence checks to recall information about evil (demons, fiends, undead).
- **Dark Speech**: Action to recite words of darkness: wielder takes 1d12 psychic damage, and each non-evil creature within 15 ft takes **3d6 psychic damage**.
- **Destroying the Book**: A *solar* tearing it destroys it for 1d100 years. If an attuned creature after 100 years speaks a Celestial secret phrase, both speaker and book are destroyed in a flash of radiance (reforms in 1d10 × 100 years). Can be destroyed forever only if all evil in the multiverse is extinguished!

---

## 🗡️ Sword of Kas
*Weapon (Longsword), Artifact (Requires Attunement)*

- **Sentience**: Chaotic Evil intelligent longsword (INT 15, WIS 13, CHA 16). Darkvision and hearing 120 ft. Communicates telepathically and speaks Common. Obsessed with bringing ruin to Vecna and destroying anyone corrupted by the Eye and Hand of Vecna.
- **Combat Mastery**: **+3 bonus** to attack and damage rolls. Scores a **critical hit on 19 or 20**, and deals an extra **2d10 slashing damage to undead**.
- **Blood Demand**: If not bathed in blood within 1 minute of being drawn, wielder must make a **DC 15 Charisma saving throw** or take 3d6 psychic damage and become dominated by the sword until it tastes blood.
- **Spirit of Kas**: Adds **+1d10 to initiative** at start of combat. Wielder can transfer some or all of the sword's +3 attack bonus to Armor Class instead!
- **Spells (DC 18, 1/dawn each)**: *call lightning*, *divine word*, *finger of death*.
- **Destroying the Sword**: A creature attuned to both the Eye of Vecna and Hand of Vecna casts *wish* and wins a contested Charisma check against the sword within 30 ft.

---

## 👁️ Eye of Vecna
*Wondrous Item, Artifact (Requires Attunement)*

- **Attunement**: Must gouge out your own eye and press the artifact into the empty socket. Transforms into a golden eye with a cat slit pupil. If ever removed, you die! Alignment shifts to neutral evil.
- **Vision**: Grants **truesight** and action-activated **X-ray vision**.
- **Spell Charges (8 charges, regains 1d4+4 at dawn, DC 18)**:
  - *clairvoyance* (2 charges)
  - *crown of madness* (1 charge)
  - *disintegrate* (4 charges)
  - *dominate monster* (5 charges)
  - *eyebite* (4 charges)
- **Soul Puppet Curse**: Each time a spell is cast from the eye, there is a **5% chance** that Vecna tears your soul from your body, devours it, and permanently takes control of the body as an NPC puppet!

---

## 🖐️ Hand of Vecna
*Wondrous Item, Artifact (Requires Attunement)*

- **Attunement**: Must sever your left hand and press the mummified hand to the stump. It grafts instantly.
- **Might of the Archlich**: Strength score becomes **20**. All melee attacks made with the hand or weapons held by it deal an extra **2d8 cold damage**.
- **Spell Charges (8 charges, regains 1d4+4 at dawn, DC 18)**:
  - *sleep* (1 charge)
  - *slow* (2 charges)
  - *teleport* (3 charges)
  - *finger of death* (5 charges)
- **Curse of Evil**: Each time a spell is cast, it casts *suggestion* on the wielder (save DC 18) demanding that they commit a wicked act.

---

## 💥 Combined Destruction of the Eye and Hand
If both the **Eye of Vecna** and the **Hand of Vecna** are attached to the same creature, and that creature is slain by the **Sword of Kas**, both artifacts burst into holy flame, turn to ash, and are permanently destroyed forever across the entire multiverse.
`
  }
];
