import { VaultNote } from '../types';

export const spellsOverviewNote: VaultNote = {
  id: "spellcasting-rules-and-lists",
  title: "Spellcasting Rules & Class Spell Lists",
  folder: "Spells",
  category: "Spell",
  tags: ["spells", "rules", "spellcasting", "lists", "components", "concentration"],
  aliases: ["Spellcasting Rules", "Spell Lists"],
  content: `---
title: Spellcasting Rules & Class Spell Lists
category: Spell
folder: Spells
tags: [spells, rules, spellcasting, lists, components, concentration]
---

# Spellcasting Rules & Class Spell Lists

Magic permeates fantasy gaming worlds and often appears in the form of a spell.

## What Is a Spell?
A spell is a discrete magical effect, a single shaping of magical energies that suffuses the multiverse into a specific, limited expression.

### Spell Level
Every spell has a level from 0 to 9. A spell's level is a general indicator of how powerful it is:
- **Cantrips (Level 0)**: Simple spells cast at will without expending spell slots.
- **1st through 9th Level**: Require expending a spell slot of that level or higher.

### Known vs. Prepared Spells
- **Prepared (Clerics, Druids, Paladins, Wizards)**: Choose a list of spells each day from their available spell repertoire.
- **Known (Bards, Rangers, Sorcerers, Warlocks)**: Have a fixed list of spells known, expanding as they level up.

### Spell Slots
Spell slots are the fuel for spells. When you cast a spell, you expend a slot of that spell's level or higher. Finishing a long rest restores all expended spell slots.
- **Casting a Spell at a Higher Level**: Many spells have enhanced effects when cast with higher-level slots.

### Casting in Armor
To cast a spell, you must be proficient with the armor you are wearing. Otherwise, you are too hampered for spellcasting.

---

## Casting Mechanics & Components
- **Casting Time**:
  - *Action*: Most common casting time.
  - *Bonus Action*: Especially swift. You can't cast another spell during the same turn, except for a cantrip with a casting time of 1 action.
  - *Reaction*: Cast in response to a trigger (e.g. [[Spells - Cantrips & 1st Level#Shield|shield]], [[Spells - 2nd & 3rd Level#Counterspell|counterspell]]).
  - *Longer Times*: 1 minute, 10 minutes, or 1 hour; requires concentration throughout.
  - *Rituals*: Add 10 minutes to casting time; doesn't expend a spell slot.

- **Range**:
  - *Touch*, *Self*, or specific distance in feet/miles.
  - *Sight*: Target within line of sight.

- **Components**:
  - **Verbal (V)**: Chanted words of mystical power.
  - **Somatic (S)**: Precise hand gestures (must have at least one hand free).
  - **Material (M)**: Specific objects. A spellcaster can use a **component pouch** or **spellcasting focus** in place of non-costly materials. If a component specifies a gold cost (e.g. 100 gp pearl for *Identify*), it must be provided and is consumed only if specified.

- **Duration**:
  - *Instantaneous*: Energy flares and dissipates instantly.
  - *Concentration*: You must maintain focus:
    - Normal activity (moving, attacking) does not break concentration.
    - Casting another concentration spell ends the first.
    - Taking damage requires a Constitution saving throw (DC 10 or half damage, whichever is higher).
    - Being incapacitated or killed ends concentration immediately.

- **Areas of Effect**:
  - *Cone*: Expands from caster point of origin.
  - *Cube*: Point of origin anywhere on face of cube.
  - *Cylinder*: Circular base and height.
  - *Line*: Extends straight from point of origin.
  - *Sphere*: Radiates from central point.

---

## Class Spell Lists

### Bard Spells
- **Cantrips**: Blade Ward, Dancing Lights, Friends, Light, Mage Hand, Mending, Message, Minor Illusion, Prestidigitation, True Strike, Vicious Mockery.
- **1st Level**: Animal Friendship, Bane, Charm Person, Comprehend Languages, Cure Wounds, Detect Magic, Dissonant Whispers, Disguise Self, Faerie Fire, Feather Fall, Healing Word, Heroism, Identify, Illusory Script, Longstrider, Silent Image, Sleep, Tasha's Hideous Laughter, Thunderwave, Unseen Servant.
- **2nd Level**: Animal Messenger, Blindness/Deafness, Calm Emotions, Cloud of Daggers, Crown of Madness, Detect Thoughts, Enhance Ability, Enthrall, Heat Metal, Hold Person, Invisibility, Knock, Lesser Restoration, Locate Animals or Plants, Locate Object, Magic Mouth, Phantasmal Force, See Invisibility, Shatter, Silence, Suggestion, Zone of Truth.
- **3rd Level**: Bestow Curse, Clairvoyance, Dispel Magic, Fear, Feign Death, Glyph of Warding, Hypnotic Pattern, Leomund's Tiny Hut, Major Image, Nondetection, Plant Growth, Sending, Speak with Dead, Speak with Plants, Stinking Cloud, Tongues.
- **4th Level**: Compulsion, Confusion, Dimension Door, Freedom of Movement, Greater Invisibility, Hallucinatory Terrain, Locate Creature, Polymorph.
- **5th Level**: Animate Objects, Awaken, Dominate Person, Dream, Geas, Greater Restoration, Hold Monster, Legend Lore, Mass Cure Wounds, Mislead, Modify Memory, Planar Binding, Raise Dead, Scrying, Seeming, Teleportation Circle.
- **6th–9th Level**: Eyebite, Find the Path, Guards and Wards, Mass Suggestion, Otto's Irresistible Dance, True Seeing; Etherealness, Forcecage, Mirage Cane, Project Image, Regenerate, Resurrection, Symbol, Teleport; Dominate Monster, Feeblemind, Glibness, Mind Blank, Power Word Stun; Foresight, Power Word Kill, True Polymorph.

### Cleric Spells
- **Cantrips**: Guidance, Light, Mending, Resistance, Sacred Flame, Spare the Dying, Thaumaturgy.
- **1st Level**: Bane, Bless, Command, Create or Destroy Water, Cure Wounds, Detect Evil and Good, Detect Magic, Detect Poison and Disease, Guiding Bolt, Healing Word, Inflict Wounds, Protection from Evil and Good, Purify Food and Drink, Sanctuary, Shield of Faith.
- **2nd Level**: Aid, Augury, Blindness/Deafness, Calm Emotions, Continual Flame, Enhance Ability, Find Traps, Gentle Repose, Hold Person, Lesser Restoration, Locate Object, Prayer of Healing, Protection from Poison, Silence, Spiritual Weapon, Warding Bond, Zone of Truth.
- **3rd Level**: Animate Dead, Beacon of Hope, Bestow Curse, Clairvoyance, Create Food and Water, Daylight, Dispel Magic, Feign Death, Glyph of Warding, Magic Circle, Mass Healing Word, Meld into Stone, Protection from Energy, Remove Curse, Revivify, Sending, Speak with Dead, Spirit Guardians, Tongues, Water Walk.
- **4th Level**: Banishment, Control Water, Death Ward, Divination, Freedom of Movement, Guardian of Faith, Locate Creature, Stone Shape.
- **5th Level**: Commune, Contagion, Dispel Evil and Good, Flame Strike, Geas, Greater Restoration, Hallow, Insect Plague, Legend Lore, Mass Cure Wounds, Planar Binding, Raise Dead, Scrying.
- **6th–9th Level**: Blade Barrier, Create Undead, Find the Path, Forbiddance, Harm, Heal, Heroes' Feast, Planar Ally, True Seeing, Word of Recall; Conjure Celestial, Divine Word, Etherealness, Fire Storm, Plane Shift, Regenerate, Resurrection, Symbol; Antimagic Field, Control Weather, Earthquake, Holy Aura; Astral Projection, Gate, Mass Heal, True Resurrection.

### Druid Spells
- **Cantrips**: Druidcraft, Guidance, Mending, Poison Spray, Produce Flame, Resistance, Shillelagh, Thorn Whip.
- **1st Level**: Animal Friendship, Charm Person, Create or Destroy Water, Cure Wounds, Detect Magic, Detect Poison and Disease, Entangle, Faerie Fire, Fog Cloud, Goodberry, Healing Word, Jump, Longstrider, Purify Food and Drink, Speak with Animals, Thunderwave.
- **2nd Level**: Animal Messenger, Barkskin, Beast Sense, Darkvision, Enhance Ability, Find Traps, Flame Blade, Flaming Sphere, Gust of Wind, Heat Metal, Hold Person, Lesser Restoration, Locate Animals or Plants, Locate Object, Moonbeam, Pass without Trace, Protection from Poison, Spike Growth.
- **3rd Level**: Call Lightning, Daylight, Dispel Magic, Feign Death, Meld into Stone, Plant Growth, Protection from Energy, Sleet Storm, Speak with Plants, Water Breathing, Water Walk, Wind Wall.
- **4th Level**: Blight, Confusion, Conjure Minor Elementals, Conjure Woodland Beings, Control Water, Dominate Beast, Freedom of Movement, Giant Insect, Grasping Vine, Hallucinatory Terrain, Ice Storm, Locate Creature, Polymorph, Stone Shape, Stoneskin, Wall of Fire.
- **5th Level**: Antilife Shell, Awaken, Commune with Nature, Conjure Elemental, Contagion, Geas, Greater Restoration, Insect Plague, Mass Cure Wounds, Planar Binding, Reincarnate, Scrying, Tree Stride, Wall of Stone.
- **6th–9th Level**: Conjure Fey, Find the Path, Heal, Heroes' Feast, Move Earth, Sunbeam, Transport via Plants, Wall of Thorns, Wind Walk; Fire Storm, Mirage Cane, Plane Shift, Regenerate, Reverse Gravity; Animal Shapes, Antipathy/Sympathy, Control Weather, Earthquake, Sunburst; Foresight, Shapechange, Storm of Vengeance, True Resurrection.

### Paladin Spells
- **1st Level**: Bless, Command, Compelled Duel, Cure Wounds, Detect Evil and Good, Detect Magic, Detect Poison and Disease, Divine Favor, Heroism, Protection from Evil and Good, Purify Food and Drink, Searing Smite, Shield of Faith, Thunderous Smite, Wrathful Smite.
- **2nd Level**: Aid, Branding Smite, Find Steed, Lesser Restoration, Locate Object, Magic Weapon, Protection from Poison, Zone of Truth.
- **3rd Level**: Aura of Vitality, Blinding Smite, Create Food and Water, Crusader's Mantle, Daylight, Dispel Magic, Elemental Weapon, Magic Circle, Remove Curse, Revivify.
- **4th Level**: Aura of Life, Aura of Purity, Banishment, Death Ward, Locate Creature, Staggering Smite.
- **5th Level**: Banishing Smite, Circle of Power, Destructive Smite, Dispel Evil and Good, Geas, Raise Dead.

### Ranger Spells
- **1st Level**: Alarm, Animal Friendship, Cure Wounds, Detect Magic, Detect Poison and Disease, Ensnaring Strike, Fog Cloud, Goodberry, Hail of Thorns, Hunter's Mark, Jump, Longstrider, Speak with Animals.
- **2nd Level**: Animal Messenger, Barkskin, Beast Sense, Cordon of Arrows, Darkvision, Find Traps, Lesser Restoration, Locate Animals or Plants, Locate Object, Pass without Trace, Protection from Poison, Silence, Spike Growth.
- **3rd Level**: Conjure Animals, Conjure Barrage, Daylight, Lightning Arrow, Nondetection, Plant Growth, Protection from Energy, Speak with Plants, Water Breathing, Water Walk, Wind Wall.
- **4th Level**: Conjure Woodland Beings, Freedom of Movement, Grasping Vine, Locate Creature, Stoneskin.
- **5th Level**: Commune with Nature, Conjure Volley, Swift Quiver, Tree Stride.

### Sorcerer Spells
- **Cantrips**: Acid Splash, Blade Ward, Chill Touch, Dancing Lights, Fire Bolt, Friends, Light, Mage Hand, Mending, Message, Minor Illusion, Poison Spray, Prestidigitation, Ray of Frost, Shocking Grasp, True Strike.
- **1st Level**: Burning Hands, Charm Person, Chromatic Orb, Color Spray, Comprehend Languages, Detect Magic, Disguise Self, Expeditious Retreat, False Life, Feather Fall, Fog Cloud, Jump, Mage Armor, Magic Missile, Ray of Sickness, Shield, Silent Image, Sleep, Thunderwave, Witch Bolt.
- **2nd Level**: Alter Self, Blindness/Deafness, Blur, Darkness, Darkvision, Detect Thoughts, Enhance Ability, Enlarge/Reduce, Gust of Wind, Hold Person, Invisibility, Knock, Levitate, Mirror Image, Misty Step, Phantasmal Force, Scorching Ray, See Invisibility, Shatter, Spider Climb, Suggestion, Web.
- **3rd Level**: Blink, Clairvoyance, Counterspell, Daylight, Dispel Magic, Fear, Fireball, Fly, Gaseous Form, Haste, Hypnotic Pattern, Lightning Bolt, Major Image, Protection from Energy, Sleet Storm, Slow, Stinking Cloud, Tongues, Water Breathing, Water Walk.
- **4th Level**: Banishment, Blight, Confusion, Dimension Door, Dominate Beast, Greater Invisibility, Ice Storm, Polymorph, Stoneskin, Wall of Fire.
- **5th Level**: Animate Objects, Cloudkill, Cone of Cold, Creation, Dominate Person, Hold Monster, Insect Plague, Seeming, Telekinesis, Teleportation Circle, Wall of Stone.
- **6th–9th Level**: Chain Lightning, Circle of Death, Disintegrate, Eyebite, Globe of Invulnerability, Mass Suggestion, Move Earth, Sunbeam, True Seeing; Delayed Blast Fireball, Etherealness, Finger of Death, Fire Storm, Plane Shift, Prismatic Spray, Reverse Gravity, Teleport; Dominate Monster, Earthquake, Incendiary Cloud, Power Word Stun, Sunburst; Gate, Meteor Swarm, Power Word Kill, Time Stop, Wish.

### Warlock Spells
- **Cantrips**: Blade Ward, Chill Touch, Eldritch Blast, Friends, Mage Hand, Minor Illusion, Poison Spray, Prestidigitation, True Strike.
- **1st Level**: Armor of Agathys, Arms of Hadar, Charm Person, Comprehend Languages, Expeditious Retreat, Hellish Rebuke, Hex, Illusory Script, Protection from Evil and Good, Unseen Servant, Witch Bolt.
- **2nd Level**: Darkness, Enthrall, Hold Person, Invisibility, Mirror Image, Misty Step, Ray of Enfeeblement, Shatter, Spider Climb, Suggestion.
- **3rd Level**: Counterspell, Dispel Magic, Fear, Fly, Gaseous Form, Hunger of Hadar, Hypnotic Pattern, Magic Circle, Major Image, Remove Curse, Tongues, Vampiric Touch.
- **4th Level**: Banishment, Blight, Dimension Door, Hallucinatory Terrain.
- **5th Level**: Contact Other Plane, Dream, Hold Monster, Scrying.
- **6th–9th Level (Mystic Arcanum)**: Circle of Death, Conjure Fey, Create Undead, Eyebite, Flesh to Stone, Mass Suggestion, True Seeing; Etherealness, Finger of Death, Forcecage, Plane Shift; Demiplane, Dominate Monster, Feeblemind, Power Word Stun; Astral Projection, Foresight, Imprisonment, Power Word Kill, True Polymorph.

### Wizard Spells
- **Cantrips**: Acid Splash, Blade Ward, Chill Touch, Dancing Lights, Fire Bolt, Friends, Light, Mage Hand, Mending, Message, Minor Illusion, Poison Spray, Prestidigitation, Ray of Frost, Shocking Grasp, True Strike.
- **1st Level**: Alarm, Burning Hands, Charm Person, Chromatic Orb, Color Spray, Comprehend Languages, Detect Magic, Disguise Self, Expeditious Retreat, False Life, Feather Fall, Find Familiar, Fog Cloud, Grease, Identify, Illusory Script, Jump, Longstrider, Mage Armor, Magic Missile, Protection from Evil and Good, Ray of Sickness, Shield, Silent Image, Sleep, Tasha's Hideous Laughter, Thunderwave, Unseen Servant, Witch Bolt.
- **2nd Level**: Alter Self, Arcane Lock, Blindness/Deafness, Blur, Continual Flame, Darkness, Darkvision, Detect Thoughts, Enhance Ability, Enlarge/Reduce, Flaming Sphere, Gentle Repose, Gust of Wind, Hold Person, Invisibility, Knock, Levitate, Locate Object, Magic Mouth, Magic Weapon, Melf's Acid Arrow, Mirror Image, Misty Step, Nystul's Magic Aura, Phantasmal Force, Ray of Enfeeblement, Rope Trick, Scorching Ray, See Invisibility, Shatter, Spider Climb, Suggestion, Web.
- **3rd Level**: Animate Dead, Bestow Curse, Blink, Clairvoyance, Counterspell, Dispel Magic, Fear, Feign Death, Fireball, Fly, Gaseous Form, Glyph of Warding, Haste, Hypnotic Pattern, Leomund's Tiny Hut, Lightning Bolt, Magic Circle, Major Image, Nondetection, Phantom Steed, Protection from Energy, Remove Curse, Sending, Sleet Storm, Slow, Stinking Cloud, Tiny Servant, Tongues, Vampiric Touch, Water Breathing.
- **4th Level**: Arcane Eye, Banishment, Blight, Confusion, Conjure Minor Elementals, Control Water, Dimension Door, Evard's Black Tentacles, Fabricate, Fire Shield, Greater Invisibility, Hallucinatory Terrain, Ice Storm, Leomund's Secret Chest, Locate Creature, Mordenkainen's Faithful Hound, Mordenkainen's Private Sanctum, Otiluke's Resilient Sphere, Phantasmal Killer, Polymorph, Stone Shape, Stoneskin, Wall of Fire.
- **5th Level**: Animate Objects, Bigby's Hand, Cloudkill, Cone of Cold, Conjure Elemental, Contact Other Plane, Creation, Dominate Person, Dream, Geas, Hold Monster, Legend Lore, Mislead, Modify Memory, Passwall, Planar Binding, Rary's Telepathic Bond, Scrying, Seeming, Telekinesis, Telepathic Bond, Teleportation Circle, Transmute Rock, Wall of Force, Wall of Stone.
- **6th–9th Level**: Chain Lightning, Circle of Death, Contingency, Create Undead, Disintegrate, Drawmij's Instant Summons, Eyebite, Flesh to Stone, Globe of Invulnerability, Guards and Wards, Magic Jar, Mass Suggestion, Move Earth, Otiluke's Freezing Sphere, Otto's Irresistible Dance, Programmed Illusion, Sunbeam, True Seeing, Wall of Ice; Delayed Blast Fireball, Etherealness, Finger of Death, Forcecage, Mirage Cane, Mordenkainen's Magnificent Mansion, Mordenkainen's Sword, Plane Shift, Prismatic Spray, Project Image, Reverse Gravity, Sequester, Simulacrum, Symbol, Teleport; Antimagic Field, Antipathy/Sympathy, Clone, Control Weather, Demiplane, Dominate Monster, Feeblemind, Incendiary Cloud, Maze, Mind Blank, Power Word Stun, Sunburst, Telepathy; Astral Projection, Foresight, Gate, Imprisonment, Meteor Swarm, Power Word Kill, Prismatic Wall, Shapechange, Time Stop, True Polymorph, Weird, Wish.
`
};
