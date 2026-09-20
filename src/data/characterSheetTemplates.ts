import {
  StandardCharacterSheet,
  KidCharacterSheet,
  AnyCharacterSheet
} from '../types/characterSheet';

export interface CharacterTemplateItem {
  id: string;
  name: string;
  category: 'Blank' | 'Martial' | 'Spellcaster' | 'Expert' | 'Modern' | 'Kids' | 'Companion';
  system: 'standard' | 'kids';
  subtitle: string;
  description: string;
  icon: string;
  badge: string;
  keyStats: string;
  signatureFeature: string;
  weaponsOrSpells: string;
  sheet: StandardCharacterSheet | KidCharacterSheet;
}

export const CHARACTER_SHEET_TEMPLATES: CharacterTemplateItem[] = [
  // ==========================================
  // BLANK CHARACTER SHEET TEMPLATES
  // ==========================================
  {
    id: 'template-blank-5e-standard',
    name: 'Blank 5e Character Sheet',
    category: 'Blank',
    system: 'standard',
    subtitle: 'Clean Slate • Level 1 5e Starter',
    description: 'A completely unassigned, clean 5e character sheet with baseline 10s (+0), unassigned race & class, empty attack matrix, and blank inventory. Perfect for building any custom hero from scratch.',
    icon: '📝',
    badge: 'Blank 5e Sheet',
    keyStats: 'STR 10 • DEX 10 • CON 10 • INT 10 • WIS 10 • CHA 10 • AC 10 • HP 10',
    signatureFeature: 'Empty — Ready to customize with your Class, Race & Background traits',
    weaponsOrSpells: 'Empty attack slots & equipment inventory',
    sheet: {
      id: 'blank-5e-standard-sheet',
      type: 'standard',
      name: 'New Adventurer',
      classAndLevel: 'Class 1',
      race: 'Choose Race',
      background: 'Choose Background',
      alignment: 'True Neutral',
      xp: 0,
      inspiration: false,
      proficiencyBonus: 2,
      armorClass: 10,
      initiative: 0,
      speed: '30 ft.',
      hpCurrent: 10,
      hpMax: 10,
      hpTemp: 0,
      hitDice: '1d8',
      deathSaves: { successes: 0, failures: 0 },
      abilities: {
        str: { score: 10, modifier: 0, saveProficient: false },
        dex: { score: 10, modifier: 0, saveProficient: false },
        con: { score: 10, modifier: 0, saveProficient: false },
        int: { score: 10, modifier: 0, saveProficient: false },
        wis: { score: 10, modifier: 0, saveProficient: false },
        cha: { score: 10, modifier: 0, saveProficient: false }
      },
      skills: {
        acrobatics: { proficient: false },
        animalHandling: { proficient: false },
        arcana: { proficient: false },
        athletics: { proficient: false },
        deception: { proficient: false },
        history: { proficient: false },
        insight: { proficient: false },
        intimidation: { proficient: false },
        investigation: { proficient: false },
        medicine: { proficient: false },
        nature: { proficient: false },
        perception: { proficient: false },
        performance: { proficient: false },
        persuasion: { proficient: false },
        religion: { proficient: false },
        sleightOfHand: { proficient: false },
        stealth: { proficient: false },
        survival: { proficient: false }
      },
      passivePerception: 10,
      proficienciesAndLanguages: [
        'Common',
        'Armor: Choose Proficiencies',
        'Weapons: Choose Proficiencies',
        'Tools: Choose Proficiencies',
        'Languages: Choose 1-2'
      ],
      attacks: [],
      equipment: [
        'Clothes, Common Traveler',
        'Backpack & Bedroll',
        'Rations (5 days)',
        'Waterskin',
        'Tinderbox & Torch (2)'
      ],
      currency: { cp: 0, sp: 0, ep: 0, gp: 15, pp: 0 },
      featuresAndTraits: [
        'Racial Trait: (Enter racial trait or feat here)',
        'Class Feature: (Enter level 1 class feature here)',
        'Background Feature: (Enter background feature here)'
      ],
      personality: {
        traits: '',
        ideals: '',
        bonds: '',
        flaws: ''
      }
    }
  },
  {
    id: 'template-blank-spellcaster',
    name: 'Blank Spellcaster Sheet',
    category: 'Blank',
    system: 'standard',
    subtitle: 'Spell Tracker, DC & Slot Matrix',
    description: 'Blank template engineered for Wizards, Sorcerers, Clerics, Druids, Warlocks, and Bards. Includes full 1st to 9th level spell slot matrix, spell DC formulas, and prepared spell list.',
    icon: '✨',
    badge: 'Blank Caster',
    keyStats: 'Spell Save DC 13 • Spell Atk +5 • Level 1-9 Spell Matrix',
    signatureFeature: 'Arcane/Divine Focus, Ritual Casting note, Spell Slot Checkboxes',
    weaponsOrSpells: 'Cantrips & Prepared Spells Ready to Fill',
    sheet: {
      id: 'blank-spellcaster-sheet',
      type: 'standard',
      name: 'New Spellcaster',
      classAndLevel: 'Spellcaster 1',
      race: 'Choose Race',
      background: 'Sage / Acolyte',
      alignment: 'Neutral Good',
      xp: 0,
      inspiration: false,
      proficiencyBonus: 2,
      armorClass: 12,
      initiative: 1,
      speed: '30 ft.',
      hpCurrent: 8,
      hpMax: 8,
      hpTemp: 0,
      hitDice: '1d6',
      deathSaves: { successes: 0, failures: 0 },
      abilities: {
        str: { score: 8, modifier: -1, saveProficient: false },
        dex: { score: 12, modifier: 1, saveProficient: false },
        con: { score: 13, modifier: 1, saveProficient: false },
        int: { score: 16, modifier: 3, saveProficient: true },
        wis: { score: 14, modifier: 2, saveProficient: true },
        cha: { score: 10, modifier: 0, saveProficient: false }
      },
      skills: {
        arcana: { proficient: true },
        history: { proficient: true },
        insight: { proficient: false },
        perception: { proficient: false }
      },
      passivePerception: 12,
      proficienciesAndLanguages: [
        'Daggers, Darts, Slings, Quarterstaffs, Light Crossbows',
        'Common, Elvish, Draconic'
      ],
      attacks: [
        {
          id: 'atk-quarterstaff-blank',
          name: 'Quarterstaff',
          atkBonus: 1,
          damage: '1d6 - 1',
          damageType: 'bludgeoning',
          range: 'Melee'
        }
      ],
      spellcasting: {
        spellcastingClass: 'Spellcaster',
        spellAbility: 'INT',
        spellSaveDC: 13,
        spellAttackBonus: 5,
        slots: [
          { level: 1, total: 2, expended: 0 },
          { level: 2, total: 0, expended: 0 },
          { level: 3, total: 0, expended: 0 },
          { level: 4, total: 0, expended: 0 },
          { level: 5, total: 0, expended: 0 },
          { level: 6, total: 0, expended: 0 },
          { level: 7, total: 0, expended: 0 },
          { level: 8, total: 0, expended: 0 },
          { level: 9, total: 0, expended: 0 }
        ],
        spellsKnown: [
          'Cantrip: (Enter Cantrip 1)',
          'Cantrip: (Enter Cantrip 2)',
          'Cantrip: (Enter Cantrip 3)',
          '1st Level: (Enter Spell 1)',
          '1st Level: (Enter Spell 2)'
        ]
      },
      equipment: [
        'Spellbook / Holy Symbol / Arcane Focus',
        'Component Pouch',
        'Scholar\'s Pack (Book of lore, Ink, Quill, 10 sheets parchment)',
        'Common Clothes & Robes',
        'Belt pouch'
      ],
      currency: { cp: 0, sp: 0, ep: 0, gp: 10, pp: 0 },
      featuresAndTraits: [
        'Spellcasting: Cast spells using chosen spell ability (INT/WIS/CHA)',
        'Ritual Casting: Can cast certain spells as 10-minute rituals',
        'Arcane/Divine Recovery: Regain spell slots during a short rest once per day'
      ],
      personality: {
        traits: '',
        ideals: '',
        bonds: '',
        flaws: ''
      }
    }
  },
  {
    id: 'template-blank-martial',
    name: 'Blank Martial Warrior Sheet',
    category: 'Blank',
    system: 'standard',
    subtitle: 'Melee & Ranged Combatant Canvas',
    description: 'Built for Fighters, Barbarians, Paladins, Rangers, and Monks. Features physical combat attribute baselines, melee and ranged attack slots, armor class calculator, and action economy reminders.',
    icon: '🛡️',
    badge: 'Blank Martial',
    keyStats: 'STR 16 (+3) • CON 14 (+2) • AC 16 • HP 12 (1d10 HD)',
    signatureFeature: 'Fighting Style slot, Second Wind / Rage tracker, Extra Attack space',
    weaponsOrSpells: 'Primary Melee, Secondary Weapon, Ranged Attack slots',
    sheet: {
      id: 'blank-martial-sheet',
      type: 'standard',
      name: 'New Martial Warrior',
      classAndLevel: 'Fighter / Barbarian / Paladin 1',
      race: 'Choose Race',
      background: 'Soldier / Folk Hero',
      alignment: 'Neutral Good',
      xp: 0,
      inspiration: false,
      proficiencyBonus: 2,
      armorClass: 16,
      initiative: 1,
      speed: '30 ft.',
      hpCurrent: 12,
      hpMax: 12,
      hpTemp: 0,
      hitDice: '1d10',
      deathSaves: { successes: 0, failures: 0 },
      abilities: {
        str: { score: 16, modifier: 3, saveProficient: true },
        dex: { score: 12, modifier: 1, saveProficient: false },
        con: { score: 14, modifier: 2, saveProficient: true },
        int: { score: 10, modifier: 0, saveProficient: false },
        wis: { score: 12, modifier: 1, saveProficient: false },
        cha: { score: 10, modifier: 0, saveProficient: false }
      },
      skills: {
        athletics: { proficient: true },
        intimidation: { proficient: true },
        perception: { proficient: false },
        survival: { proficient: false }
      },
      passivePerception: 11,
      proficienciesAndLanguages: [
        'All Armor, Shields',
        'Simple Weapons, Martial Weapons',
        'Common, Dwarvish or Orc'
      ],
      attacks: [
        {
          id: 'atk-martial-primary',
          name: 'Primary Weapon (e.g. Longsword)',
          atkBonus: 5,
          damage: '1d8 + 3',
          damageType: 'slashing',
          range: 'Melee (5 ft.)'
        },
        {
          id: 'atk-martial-ranged',
          name: 'Ranged Weapon (e.g. Heavy Crossbow)',
          atkBonus: 3,
          damage: '1d10 + 1',
          damageType: 'piercing',
          range: 'Range 100/400 ft.'
        }
      ],
      equipment: [
        'Chain Mail (AC 16) or Scale Mail',
        'Primary Weapon & Shield (+2 AC)',
        'Heavy Crossbow & 20 bolts',
        'Explorer\'s Pack',
        'Belt pouch'
      ],
      currency: { cp: 0, sp: 0, ep: 0, gp: 10, pp: 0 },
      featuresAndTraits: [
        'Fighting Style: (Choose Archery, Defense, Dueling, Great Weapon, Two-Weapon, or Protection)',
        'Martial Recovery: (Second Wind: 1d10 + Level HP once per rest / Rage)',
        'Action Surge / Smite / Ki Tracker: (Ready to fill)'
      ],
      personality: {
        traits: '',
        ideals: '',
        bonds: '',
        flaws: ''
      }
    }
  },
  {
    id: 'template-blank-expert',
    name: 'Blank Rogue & Expert Sheet',
    category: 'Blank',
    system: 'standard',
    subtitle: 'Stealth, Skills & Infiltration Canvas',
    description: 'Specialized for Rogues, Bards, and skill specialists with expertise indicators, Sneak Attack damage dice tracker, thieves\' tools proficiency, and stealth gear slots.',
    icon: '🗡️',
    badge: 'Blank Expert',
    keyStats: 'DEX 16 (+3) • INT 14 (+2) • Expertise Tracker • Sneak Attack',
    signatureFeature: 'Expertise (Double Proficiency), Cunning Action, Thieves\' Tools',
    weaponsOrSpells: 'Finesse weapons, hidden daggers, hand crossbow',
    sheet: {
      id: 'blank-expert-sheet',
      type: 'standard',
      name: 'New Skill Expert',
      classAndLevel: 'Rogue / Bard 1',
      race: 'Choose Race',
      background: 'Criminal / Charlatan / Urchin',
      alignment: 'Chaotic Good',
      xp: 0,
      inspiration: false,
      proficiencyBonus: 2,
      armorClass: 14,
      initiative: 3,
      speed: '30 ft.',
      hpCurrent: 9,
      hpMax: 9,
      hpTemp: 0,
      hitDice: '1d8',
      deathSaves: { successes: 0, failures: 0 },
      abilities: {
        str: { score: 10, modifier: 0, saveProficient: false },
        dex: { score: 16, modifier: 3, saveProficient: true },
        con: { score: 12, modifier: 1, saveProficient: false },
        int: { score: 14, modifier: 2, saveProficient: true },
        wis: { score: 12, modifier: 1, saveProficient: false },
        cha: { score: 12, modifier: 1, saveProficient: false }
      },
      skills: {
        acrobatics: { proficient: true },
        deception: { proficient: true },
        investigation: { proficient: false },
        perception: { proficient: false },
        sleightOfHand: { proficient: true, expertise: true },
        stealth: { proficient: true, expertise: true }
      },
      passivePerception: 11,
      proficienciesAndLanguages: [
        'Light Armor',
        'Simple Weapons, Hand Crossbows, Longswords, Rapiers, Shortswords',
        'Thieves\' Tools (Proficient + Expertise)',
        'Thieves\' Cant, Common, Undercommon'
      ],
      attacks: [
        {
          id: 'atk-expert-rapier',
          name: 'Rapier (Finesse)',
          atkBonus: 5,
          damage: '1d8 + 3',
          damageType: 'piercing',
          range: 'Melee'
        },
        {
          id: 'atk-expert-dagger',
          name: 'Dagger (Finesse/Thrown)',
          atkBonus: 5,
          damage: '1d4 + 3',
          damageType: 'piercing',
          range: 'Thrown 20/60 ft.'
        }
      ],
      equipment: [
        'Leather Armor (AC 11 + DEX)',
        'Rapier & 2 Daggers',
        'Thieves\' Tools (Lockpicks, fine files, wire cutters)',
        'Burglar\'s Pack (50 ft. silk rope, ball bearings, crowbar, hooded lantern)',
        'Dark hooded cloak'
      ],
      currency: { cp: 0, sp: 0, ep: 0, gp: 15, pp: 0 },
      featuresAndTraits: [
        'Expertise: Double proficiency bonus applied to Stealth & Sleight of Hand',
        'Sneak Attack: +1d6 extra damage when you have advantage or adjacent ally',
        'Thieves\' Cant: Secret dialect of symbols, signs, and coded slang'
      ],
      personality: {
        traits: '',
        ideals: '',
        bonds: '',
        flaws: ''
      }
    }
  },
  {
    id: 'template-blank-modern',
    name: 'Blank Modern 5e Sheet',
    category: 'Blank',
    system: 'standard',
    subtitle: 'Firearms, Ballistics & Tactical Gear',
    description: 'Clean modern/sci-fi 5e sheet equipped with ballistic armor class ratings, firearm mechanics (caliber, reload, burst), modern tech proficiencies, and ammunition counters.',
    icon: '🎯',
    badge: 'Blank Modern',
    keyStats: 'Ballistic AC 13 • Firearms Proficiencies • Tactical Gear',
    signatureFeature: 'Firearm handling, Burst fire / Reload notes, Tech Toolkit',
    weaponsOrSpells: 'Sidearm, Tactical rifle, Stun baton, Tactical vest',
    sheet: {
      id: 'blank-modern-sheet',
      type: 'standard',
      name: 'New Modern Operative',
      classAndLevel: 'Tactical Operative 1',
      race: 'Human',
      background: 'Special Agent / Cyber Tech',
      alignment: 'Lawful Neutral',
      xp: 0,
      inspiration: false,
      proficiencyBonus: 2,
      armorClass: 13,
      initiative: 2,
      speed: '30 ft.',
      hpCurrent: 11,
      hpMax: 11,
      hpTemp: 0,
      hitDice: '1d10',
      deathSaves: { successes: 0, failures: 0 },
      abilities: {
        str: { score: 12, modifier: 1, saveProficient: false },
        dex: { score: 15, modifier: 2, saveProficient: true },
        con: { score: 13, modifier: 1, saveProficient: true },
        int: { score: 14, modifier: 2, saveProficient: false },
        wis: { score: 12, modifier: 1, saveProficient: false },
        cha: { score: 10, modifier: 0, saveProficient: false }
      },
      skills: {
        athletics: { proficient: true },
        investigation: { proficient: true },
        perception: { proficient: true },
        stealth: { proficient: true }
      },
      passivePerception: 13,
      proficienciesAndLanguages: [
        'Light & Medium Tactical Armor',
        'Sidearms, Longarms, Tactical Knives, Stun Batons',
        'Hacking Tools, Electronics, Vehicles (Land/Air)',
        'English, Spanish, Coded Signals'
      ],
      attacks: [
        {
          id: 'atk-modern-pistol',
          name: '9mm Service Pistol',
          atkBonus: 4,
          damage: '2d6',
          damageType: 'piercing (ballistic)',
          range: 'Range 50/150 ft. (Mag: 15)'
        },
        {
          id: 'atk-modern-knife',
          name: 'Tactical Combat Knife',
          atkBonus: 4,
          damage: '1d4 + 2',
          damageType: 'piercing',
          range: 'Melee'
        }
      ],
      equipment: [
        'Kevlar Tactical Vest (AC 12 + DEX, max 2)',
        '9mm Pistol with 3 Spare Magazines (45 rounds total)',
        'Encrypted Smartphone & Hacking Rig',
        'First Aid Trauma Kit (3 uses)',
        'Tactical Flashlight & Multi-tool'
      ],
      currency: { cp: 0, sp: 0, ep: 0, gp: 50, pp: 0 },
      featuresAndTraits: [
        'Tactical Cover: Crouching behind ballistic cover gives +2 or +5 AC',
        'Reload & Firearm Mechanics: Bonus action reload or action burst fire',
        'Digital Reconnaissance: Proficiency with electronic intelligence tools'
      ],
      personality: {
        traits: '',
        ideals: '',
        bonds: '',
        flaws: ''
      }
    }
  },
  {
    id: 'template-blank-kids',
    name: 'Blank Young Adventurer Sheet',
    category: 'Blank',
    system: 'kids',
    subtitle: 'Blank Hero Sheet (Ages 5 and Up)',
    description: 'A 100% clean, fillable Young Adventurer sheet with 8 blank hearts, 3 hero stars, blank Super-Stats ready to assign (+0 to +3), customizable hero moves, pet companion, and snack backpack.',
    icon: '🌟',
    badge: 'Blank Kids (5+)',
    keyStats: '8 Hearts ❤️ • 3 Hero Stars ⭐ • 10 Gold Coins 🪙',
    signatureFeature: 'Customizable Hero Moves, Pet Companion & Favorite Snack',
    weaponsOrSpells: 'Blank backpack inventory & hero motto',
    sheet: {
      id: 'blank-kids-hero-sheet',
      type: 'kids',
      name: 'New Young Hero',
      heroTitle: 'The Brave Adventurer',
      heroClass: 'Knight / Mage / Scout / Hero',
      ageGroup: 'Ages 5+',
      avatarEmoji: '🌟',
      themeColor: 'amber',
      heartsCurrent: 8,
      heartsMax: 8,
      heroStars: 3,
      heroStarsMax: 5,
      stats: {
        brawn: { name: 'Brawn', icon: '🦾', bonus: 1, hint: 'Smashing, jumping, climbing!' },
        agility: { name: 'Agility', icon: '⚡', bonus: 1, hint: 'Dodging, running fast, sneaking!' },
        heart: { name: 'Heart', icon: '❤️', bonus: 1, hint: 'Bravery, shaking off frights!' },
        smarts: { name: 'Smarts', icon: '🧠', bonus: 1, hint: 'Riddles, fairy magic, clues!' },
        senses: { name: 'Senses', icon: '👁️', bonus: 1, hint: 'Spotting treasure, hearing whispers!' },
        smile: { name: 'Smile', icon: '✨', bonus: 1, hint: 'Making friends, singing, cheering up!' }
      },
      heroMoves: [
        {
          id: 'move-hero-strike-blank',
          name: 'Hero Strike',
          icon: '⚔️',
          actionType: 'Action',
          ruleTip: 'Roll d20 + Brawn or Agility (10+ hits!)',
          description: 'Attack a monster or knock down a barricade with a loud shout!'
        },
        {
          id: 'move-guardian-shield-blank',
          name: 'Guardian Help',
          icon: '🛡️',
          actionType: 'Reaction',
          ruleTip: 'Roll d20 + Heart (10+ protects friend!)',
          description: 'Jump in front to protect a teammate or pet from taking damage!'
        },
        {
          id: 'move-magic-spark-blank',
          name: 'Magic Spark / Friendship Touch',
          icon: '✨',
          actionType: 'Special Power',
          ruleTip: 'Spend 1 Star ⭐ or roll Smile/Smarts',
          description: 'Cast a colorful sparkle spell or heal 2 Hearts for a friend!'
        }
      ],
      petCompanion: {
        name: 'My Pet Friend',
        species: 'Puppy / Dragon / Owl / Fox',
        icon: '🐾',
        ability: 'Sniffs out treats, barks warnings, or fetches small keys!'
      },
      backpack: [
        { name: 'Warm Apple Pie', icon: '🥧', description: 'Restores 1 Heart when eaten or shared.' },
        { name: 'Friendly Sunshine Torch', icon: '🔦', description: 'Chases away spooky shadows.' },
        { name: 'Rainbow Climbing Rope', icon: '🪢', description: 'Soft 50-foot rope for climbing trees.' },
        { name: 'Hero Whistle', icon: '🔔', description: 'Calls companions or alarms guards.' }
      ],
      goldCoins: 10,
      motto: 'Never give up, and always help a friend!',
      favoriteTreat: 'Hot cocoa with marshmallows and cinnamon cookies'
    }
  },
  {
    id: 'template-blank-companion',
    name: 'Blank Sidekick & Retainer Sheet',
    category: 'Blank',
    system: 'standard',
    subtitle: 'Companion, Squire & Retainer NPC Sheet',
    description: 'Streamlined 5e statblock for an animal companion, faithful hireling, familiar, squire, or retainer. Features simple actions, loyalty tracking, and master bond notes.',
    icon: '🐾',
    badge: 'Blank Sidekick',
    keyStats: 'Level 1 Companion • AC 13 • HP 13 • Loyalty 10',
    signatureFeature: 'Coordinated Attack, Faithful Defender reaction, Master Bond',
    weaponsOrSpells: 'Bite / Claws or Simple Melee attack',
    sheet: {
      id: 'blank-sidekick-sheet',
      type: 'standard',
      name: 'New Companion / Retainer',
      classAndLevel: 'Sidekick (Warrior / Expert) 1',
      race: 'Beast / Humanoid',
      background: 'Loyal Companion',
      alignment: 'Lawful Neutral',
      xp: 0,
      inspiration: false,
      proficiencyBonus: 2,
      armorClass: 13,
      initiative: 2,
      speed: '40 ft.',
      hpCurrent: 13,
      hpMax: 13,
      hpTemp: 0,
      hitDice: '2d8',
      deathSaves: { successes: 0, failures: 0 },
      abilities: {
        str: { score: 14, modifier: 2, saveProficient: true },
        dex: { score: 14, modifier: 2, saveProficient: false },
        con: { score: 12, modifier: 1, saveProficient: true },
        int: { score: 6, modifier: -2, saveProficient: false },
        wis: { score: 12, modifier: 1, saveProficient: false },
        cha: { score: 8, modifier: -1, saveProficient: false }
      },
      skills: {
        athletics: { proficient: true },
        perception: { proficient: true },
        stealth: { proficient: true },
        survival: { proficient: true }
      },
      passivePerception: 13,
      proficienciesAndLanguages: [
        'Natural Armor or Padded Armor',
        'Natural Weapons (Bite/Claw) or Simple Weapons',
        'Understands Master\'s Languages (Cannot speak)'
      ],
      attacks: [
        {
          id: 'atk-sidekick-bite',
          name: 'Bite / Attack',
          atkBonus: 4,
          damage: '1d6 + 2',
          damageType: 'piercing',
          range: 'Melee (5 ft.)'
        }
      ],
      equipment: [
        'Leather collar with master\'s crest',
        'Small saddle pack (capacity 30 lbs)',
        'Favorite chew toy / token'
      ],
      currency: { cp: 0, sp: 0, ep: 0, gp: 0, pp: 0 },
      featuresAndTraits: [
        'Keen Senses: Advantage on Wisdom (Perception) checks that rely on hearing or smell',
        'Pack Tactics / Coordinated Strike: Advantage on attack rolls when master is adjacent',
        'Faithful Defender: Can use reaction to impose disadvantage on attack against master'
      ],
      personality: {
        traits: 'Eager to please, fearless in defense of companions.',
        ideals: 'Loyalty. I will protect my master with my life.',
        bonds: 'Bound by honor and love to my adventuring party.',
        flaws: 'Easily distracted by delicious roasted sausages.'
      }
    }
  },
  // ==========================================
  // STANDARD 5E TEMPLATES
  // ==========================================
  {
    id: 'template-fighter-champion',
    name: 'Fighter (Champion)',
    category: 'Martial',
    system: 'standard',
    subtitle: 'Frontline Combatant & Weapon Master',
    description: 'A heavily armored martial powerhouse built for durable frontline combat, high sustained weapon damage, and second-chance recoveries.',
    icon: '⚔️',
    badge: 'Level 5 Martial',
    keyStats: 'STR 18 (+4) • CON 16 (+3) • AC 18 • HP 44',
    signatureFeature: 'Action Surge, Second Wind, Improved Critical (19-20), Defense Style',
    weaponsOrSpells: 'Greatsword (2d6+4), Heavy Crossbow (1d10+1), Daggers',
    sheet: {
      id: 'template-fighter-champion-sheet',
      type: 'standard',
      name: 'Valeros the Champion',
      classAndLevel: 'Fighter (Champion) 5',
      race: 'Human (Variant)',
      background: 'Soldier',
      alignment: 'Neutral Good',
      xp: 6500,
      inspiration: true,
      proficiencyBonus: 3,
      armorClass: 18,
      initiative: 1,
      speed: '30 ft.',
      hpCurrent: 44,
      hpMax: 44,
      hpTemp: 0,
      hitDice: '5d10',
      deathSaves: { successes: 0, failures: 0 },
      abilities: {
        str: { score: 18, modifier: 4, saveProficient: true },
        dex: { score: 12, modifier: 1, saveProficient: false },
        con: { score: 16, modifier: 3, saveProficient: true },
        int: { score: 10, modifier: 0, saveProficient: false },
        wis: { score: 12, modifier: 1, saveProficient: false },
        cha: { score: 10, modifier: 0, saveProficient: false }
      },
      skills: {
        athletics: { proficient: true },
        intimidation: { proficient: true },
        perception: { proficient: true },
        survival: { proficient: true }
      },
      passivePerception: 14,
      proficienciesAndLanguages: [
        'All Armor, Shields',
        'Simple Weapons, Martial Weapons',
        'Vehicles (Land), Dice set',
        'Common, Dwarvish'
      ],
      attacks: [
        { id: 'atk-gs', name: 'Greatsword', atkBonus: 7, damage: '2d6 + 4', damageType: 'slashing', range: 'Melee (5 ft.)' },
        { id: 'atk-cb', name: 'Heavy Crossbow', atkBonus: 4, damage: '1d10 + 1', damageType: 'piercing', range: '100/400 ft.' },
        { id: 'atk-dag', name: 'Dagger', atkBonus: 7, damage: '1d4 + 4', damageType: 'piercing', range: '20/60 ft.' }
      ],
      equipment: [
        'Splint Armor (AC 17) + Defense Style (+1 AC)',
        'Greatsword (2d6)',
        'Heavy Crossbow & 20 Bolts',
        'Daggers (x2)',
        "Explorer's Pack (Bedroll, Mess kit, 10 Torches, 10 Rations, Rope)",
        'Sergeant Insignia & Dice set'
      ],
      currency: { cp: 30, sp: 50, ep: 0, gp: 120, pp: 2 },
      featuresAndTraits: [
        'Fighting Style: Defense (+1 AC while armored)',
        'Second Wind: Bonus action to regain 1d10 + 5 HP (1/short rest)',
        'Action Surge: Take 1 extra action on your turn (1/short rest)',
        'Improved Critical: Weapon attacks crit on 19 or 20',
        'Extra Attack: Attack twice per Attack action'
      ],
      personality: {
        traits: 'I face problems head-on; a simple, direct solution is always best.',
        ideals: 'Responsibility. I protect those who cannot protect themselves.',
        bonds: 'Those who fight beside me are worthy of my life.',
        flaws: 'My temper flares quickly when innocent bystanders are threatened.'
      }
    }
  },

  {
    id: 'template-wizard-evocation',
    name: 'Wizard (Evocation)',
    category: 'Spellcaster',
    system: 'standard',
    subtitle: 'Arcane Blaster, Ritualist & Scholar',
    description: 'A master of destructive elemental fury and tactical arcane manipulation who shields allies while dropping devastating Fireballs.',
    icon: '🔮',
    badge: 'Level 5 Caster',
    keyStats: 'INT 18 (+4) • DEX 14 (+2) • AC 12 (15) • HP 32',
    signatureFeature: 'Sculpt Spells, Arcane Recovery, Fireball (8d6), Counterspell',
    weaponsOrSpells: 'Fire Bolt (2d10), Fireball, Counterspell, Mage Armor, Shield',
    sheet: {
      id: 'template-wizard-evocation-sheet',
      type: 'standard',
      name: 'Ellywick Timbers',
      classAndLevel: 'Wizard (Evocation) 5',
      race: 'Rock Gnome',
      background: 'Sage',
      alignment: 'Chaotic Good',
      xp: 6500,
      inspiration: false,
      proficiencyBonus: 3,
      armorClass: 12,
      initiative: 2,
      speed: '25 ft.',
      hpCurrent: 32,
      hpMax: 32,
      hpTemp: 0,
      hitDice: '5d6',
      deathSaves: { successes: 0, failures: 0 },
      abilities: {
        str: { score: 8, modifier: -1, saveProficient: false },
        dex: { score: 14, modifier: 2, saveProficient: false },
        con: { score: 14, modifier: 2, saveProficient: false },
        int: { score: 18, modifier: 4, saveProficient: true },
        wis: { score: 13, modifier: 1, saveProficient: true },
        cha: { score: 10, modifier: 0, saveProficient: false }
      },
      skills: {
        arcana: { proficient: true },
        history: { proficient: true },
        investigation: { proficient: true },
        insight: { proficient: true }
      },
      passivePerception: 11,
      proficienciesAndLanguages: [
        'Daggers, Darts, Slings, Quarterstaffs, Light Crossbows',
        "Tinker's Tools",
        'Common, Gnomish, Elvish, Draconic'
      ],
      attacks: [
        { id: 'atk-fb', name: 'Fire Bolt (Cantrip)', atkBonus: 7, damage: '2d10', damageType: 'fire', range: '120 ft.' },
        { id: 'atk-qs', name: 'Quarterstaff', atkBonus: 2, damage: '1d6 - 1', damageType: 'bludgeoning', range: 'Melee (5 ft.)' }
      ],
      spellcasting: {
        spellcastingClass: 'Wizard',
        spellAbility: 'INT',
        spellSaveDC: 15,
        spellAttackBonus: 7,
        slots: [
          { level: 1, total: 4, expended: 0 },
          { level: 2, total: 3, expended: 0 },
          { level: 3, total: 2, expended: 0 }
        ],
        spellsKnown: [
          'Cantrips: Fire Bolt, Ray of Frost, Mage Hand, Prestidigitation',
          '1st: Mage Armor, Shield, Magic Missile, Detect Magic, Thunderwave',
          '2nd: Misty Step, Scorching Ray, Mirror Image',
          '3rd: Fireball, Counterspell, Haste'
        ]
      },
      equipment: [
        'Spellbook with brass clasps',
        'Arcane Crystal Focus',
        'Quarterstaff carved with celestial runes',
        "Scholar's Pack (Ink, Quill, Parchment, lore manuals)",
        'Potion of Healing (x2)'
      ],
      currency: { cp: 15, sp: 40, ep: 0, gp: 135, pp: 2 },
      featuresAndTraits: [
        'Sculpt Spells: Protect up to 4 allies from evocation area spells (take 0 damage)',
        'Arcane Recovery: Regain up to 3 levels of spell slots on short rest',
        'Gnome Cunning: Advantage on INT, WIS, CHA saves against magic',
        'Evocation Savant: Halve gold and time to copy evocation spells'
      ],
      personality: {
        traits: 'I love decoding ancient mysteries and speak rapidly when enthusiastic.',
        ideals: 'Knowledge. Truth and understanding are the highest virtues.',
        bonds: 'I seek to unravel a lost arcane constellation formula.',
        flaws: 'I get distracted by ancient artifacts even in danger.'
      }
    }
  },

  {
    id: 'template-rogue-thief',
    name: 'Rogue (Thief)',
    category: 'Expert',
    system: 'standard',
    subtitle: 'Stealth Infiltrator & Skill Expert',
    description: 'A nimble shadow operative with double-proficiency expertise, devastating sneak attack precision, and hyper-agile bonus actions.',
    icon: '🗡️',
    badge: 'Level 5 Expert',
    keyStats: 'DEX 18 (+4) • AC 16 • Passive Perc 18 • Sneak 3d6',
    signatureFeature: 'Sneak Attack (3d6), Cunning Action, Expertise (Stealth & Thieves Tools), Uncanny Dodge',
    weaponsOrSpells: 'Rapier (1d8+4), Shortbow (1d6+4), Daggers (1d4+4)',
    sheet: {
      id: 'template-rogue-thief-sheet',
      type: 'standard',
      name: 'Kaelen Shadowstep',
      classAndLevel: 'Rogue (Thief) 5',
      race: 'Wood Elf',
      background: 'Criminal',
      alignment: 'Chaotic Neutral',
      xp: 6500,
      inspiration: true,
      proficiencyBonus: 3,
      armorClass: 16,
      initiative: 4,
      speed: '35 ft.',
      hpCurrent: 38,
      hpMax: 38,
      hpTemp: 0,
      hitDice: '5d8',
      deathSaves: { successes: 0, failures: 0 },
      abilities: {
        str: { score: 10, modifier: 0, saveProficient: false },
        dex: { score: 18, modifier: 4, saveProficient: true },
        con: { score: 14, modifier: 2, saveProficient: false },
        int: { score: 12, modifier: 1, saveProficient: true },
        wis: { score: 14, modifier: 2, saveProficient: false },
        cha: { score: 10, modifier: 0, saveProficient: false }
      },
      skills: {
        acrobatics: { proficient: true },
        deception: { proficient: true },
        perception: { proficient: true, expertise: true },
        sleightOfHand: { proficient: true },
        stealth: { proficient: true, expertise: true }
      },
      passivePerception: 18,
      proficienciesAndLanguages: [
        'Light Armor',
        'Simple Weapons, Hand Crossbows, Longswords, Rapiers, Shortswords, Shortbows',
        "Thieves' Tools (Expertise)",
        'Common, Elvish, Thieves’ Cant'
      ],
      attacks: [
        { id: 'atk-rap', name: 'Rapier (Finesse)', atkBonus: 7, damage: '1d8 + 4', damageType: 'piercing', range: 'Melee (5 ft.)' },
        { id: 'atk-sb', name: 'Shortbow', atkBonus: 7, damage: '1d6 + 4', damageType: 'piercing', range: '80/320 ft.' },
        { id: 'atk-dg', name: 'Dagger (Thrown)', atkBonus: 7, damage: '1d4 + 4', damageType: 'piercing', range: '20/60 ft.' }
      ],
      equipment: [
        'Studded Leather Armor (AC 12 + DEX 4 = 16)',
        'Rapier with engraved silver pommel',
        'Shortbow & 20 Arrows',
        'Daggers (x3)',
        "Thieves' Tools (Fine picks, tension wrenches, small mirror)",
        "Burglar's Pack (Crowbar, 50 ft. Silk Rope, Grappling hook, Lantern)"
      ],
      currency: { cp: 40, sp: 80, ep: 0, gp: 195, pp: 5 },
      featuresAndTraits: [
        'Expertise: Double proficiency bonus for Stealth, Perception, Thieves’ Tools',
        'Sneak Attack (3d6): Extra damage once per turn with advantage or adjacent ally',
        'Cunning Action: Bonus action to Dash, Disengage, or Hide',
        'Fast Hands: Bonus action for Sleight of Hand, thieves’ tools, or Use Object',
        'Second-Story Work: Climbing costs no extra movement; jumping distance +4 ft.',
        'Uncanny Dodge: Use reaction to halve damage from an attack you can see'
      ],
      personality: {
        traits: 'I keep my back to the wall and observe exits wherever I go.',
        ideals: 'Freedom. Nobody tells me what I can or cannot do.',
        bonds: 'I stole an heirloom from a tyrant to protect my impoverished hometown.',
        flaws: 'I cannot resist examining a locked chest or shiny bauble.'
      }
    }
  },

  {
    id: 'template-cleric-life',
    name: 'Cleric (Life Domain)',
    category: 'Spellcaster',
    system: 'standard',
    subtitle: 'Armored Divine Healer & Undead Bane',
    description: 'An unstoppable holy warden clad in plate mail who channels divine power to restore broken allies, turn fiends, and smite with radiant authority.',
    icon: '✨',
    badge: 'Level 5 Divine',
    keyStats: 'WIS 18 (+4) • STR 14 (+2) • AC 18 • Spell DC 15',
    signatureFeature: 'Disciple of Life (+healing), Channel Divinity: Preserve Life, Spirit Guardians, Spiritual Weapon',
    weaponsOrSpells: 'Warhammer (1d8+2), Sacred Flame (2d8), Cure Wounds, Spirit Guardians',
    sheet: {
      id: 'template-cleric-life-sheet',
      type: 'standard',
      name: 'Brother Thaddeus',
      classAndLevel: 'Cleric (Life Domain) 5',
      race: 'Hill Dwarf',
      background: 'Acolyte',
      alignment: 'Lawful Good',
      xp: 6500,
      inspiration: true,
      proficiencyBonus: 3,
      armorClass: 18,
      initiative: 0,
      speed: '25 ft.',
      hpCurrent: 43,
      hpMax: 43,
      hpTemp: 0,
      hitDice: '5d8',
      deathSaves: { successes: 0, failures: 0 },
      abilities: {
        str: { score: 14, modifier: 2, saveProficient: false },
        dex: { score: 10, modifier: 0, saveProficient: false },
        con: { score: 16, modifier: 3, saveProficient: false },
        int: { score: 10, modifier: 0, saveProficient: false },
        wis: { score: 18, modifier: 4, saveProficient: true },
        cha: { score: 12, modifier: 1, saveProficient: true }
      },
      skills: {
        history: { proficient: true },
        insight: { proficient: true },
        medicine: { proficient: true },
        religion: { proficient: true }
      },
      passivePerception: 14,
      proficienciesAndLanguages: [
        'All Armor, Heavy Armor, Shields',
        'Simple Weapons, Warhammer',
        'Common, Dwarvish, Celestial'
      ],
      attacks: [
        { id: 'atk-wh', name: 'Warhammer (Versatile)', atkBonus: 5, damage: '1d8 + 2', damageType: 'bludgeoning', range: 'Melee (5 ft.)' },
        { id: 'atk-sf', name: 'Sacred Flame (Cantrip)', atkBonus: 7, damage: '2d8', damageType: 'radiant', range: '60 ft. (DEX DC 15)' }
      ],
      spellcasting: {
        spellcastingClass: 'Cleric',
        spellAbility: 'WIS',
        spellSaveDC: 15,
        spellAttackBonus: 7,
        slots: [
          { level: 1, total: 4, expended: 0 },
          { level: 2, total: 3, expended: 0 },
          { level: 3, total: 2, expended: 0 }
        ],
        spellsKnown: [
          'Cantrips: Sacred Flame, Guidance, Thaumaturgy, Toll the Dead',
          'Domain (Life): Bless, Cure Wounds, Lesser Restoration, Spiritual Weapon, Beacon of Hope, Revivify',
          'Prepared: Healing Word, Guiding Bolt, Detect Magic, Prayer of Healing, Spirit Guardians, Dispel Magic'
        ]
      },
      equipment: [
        'Chain Mail (AC 16) + Shield (+2 AC = 18)',
        'Warhammer with holy sun engraving',
        'Holy Symbol (Golden Amulet of Lathander)',
        "Priest's Pack (Blanket, candles, censer, vestments, rations)",
        'Vial of Holy Water (x2)'
      ],
      currency: { cp: 10, sp: 25, ep: 0, gp: 115, pp: 0 },
      featuresAndTraits: [
        'Disciple of Life: Healing spells restore additional HP equal to 2 + spell level',
        'Channel Divinity (1/rest): Turn Undead or Preserve Life (heal up to 25 HP split among allies)',
        'Dwarven Toughness: HP max increases by 1 each level',
        'Dwarven Resilience: Advantage on saves against poison, resistance to poison damage'
      ],
      personality: {
        traits: 'I see that every soul has the potential for redemption and light.',
        ideals: 'Compassion. We must heal the sick, shelter the weak, and banish darkness.',
        bonds: 'I pledged to rebuild the ancient chapel at Mount Dawn.',
        flaws: 'I am too trusting of those who profess remorse.'
      }
    }
  },

  {
    id: 'template-paladin-devotion',
    name: 'Paladin (Oath of Devotion)',
    category: 'Martial',
    system: 'standard',
    subtitle: 'Holy Smiter & Aura Defender',
    description: 'An oath-bound warrior delivering radiant smites with every strike while bathing party members in protective defensive auras.',
    icon: '🛡️',
    badge: 'Level 5 Half-Caster',
    keyStats: 'STR 16 (+3) • CHA 16 (+3) • AC 18 • Lay on Hands 25 HP',
    signatureFeature: 'Divine Smite, Extra Attack, Lay on Hands, Aura of Protection, Sacred Weapon',
    weaponsOrSpells: 'Longsword (1d8+3), Divine Smite (+2d8 to 4d8 radiant), Bless',
    sheet: {
      id: 'template-paladin-devotion-sheet',
      type: 'standard',
      name: 'Lady Aurelia Sunsworn',
      classAndLevel: 'Paladin (Devotion) 5',
      race: 'Human',
      background: 'Noble',
      alignment: 'Lawful Good',
      xp: 6500,
      inspiration: true,
      proficiencyBonus: 3,
      armorClass: 18,
      initiative: 0,
      speed: '30 ft.',
      hpCurrent: 44,
      hpMax: 44,
      hpTemp: 0,
      hitDice: '5d10',
      deathSaves: { successes: 0, failures: 0 },
      abilities: {
        str: { score: 16, modifier: 3, saveProficient: false },
        dex: { score: 10, modifier: 0, saveProficient: false },
        con: { score: 14, modifier: 2, saveProficient: false },
        int: { score: 10, modifier: 0, saveProficient: false },
        wis: { score: 12, modifier: 1, saveProficient: true },
        cha: { score: 16, modifier: 3, saveProficient: true }
      },
      skills: {
        athletics: { proficient: true },
        insight: { proficient: true },
        persuasion: { proficient: true },
        religion: { proficient: true }
      },
      passivePerception: 11,
      proficienciesAndLanguages: [
        'All Armor, Shields',
        'Simple Weapons, Martial Weapons',
        'Common, Celestial, Draconic'
      ],
      attacks: [
        { id: 'atk-ls', name: 'Longsword (Versatile)', atkBonus: 6, damage: '1d8 + 3', damageType: 'slashing', range: 'Melee (5 ft.)' },
        { id: 'atk-jav', name: 'Javelin', atkBonus: 6, damage: '1d6 + 3', damageType: 'piercing', range: '30/120 ft.' }
      ],
      spellcasting: {
        spellcastingClass: 'Paladin',
        spellAbility: 'CHA',
        spellSaveDC: 14,
        spellAttackBonus: 6,
        slots: [
          { level: 1, total: 4, expended: 0 },
          { level: 2, total: 2, expended: 0 }
        ],
        spellsKnown: [
          'Oath Spells: Protection from Evil and Good, Sanctuary, Lesser Restoration, Zone of Truth',
          'Prepared: Bless, Cure Wounds, Thunderous Smite, Wrathful Smite, Aid, Find Steed'
        ]
      },
      equipment: [
        'Chain Mail (AC 16) + Shield (+2 AC = 18)',
        'Longsword with gold inlay',
        'Javelins (x5)',
        'Holy Symbol emblazoned on steel shield',
        "Explorer's Pack & Signet Ring"
      ],
      currency: { cp: 0, sp: 20, ep: 0, gp: 160, pp: 3 },
      featuresAndTraits: [
        'Divine Sense: Detect celestials, fiends, and undead within 60 ft.',
        'Lay on Hands: Healing pool of 25 HP per long rest',
        'Divine Smite: Expend spell slot on hit to deal +2d8 radiant damage (+1d8 per slot level > 1)',
        'Channel Divinity: Sacred Weapon (+CHA to attack rolls, weapon emits sunlight)',
        'Divine Health: Immune to disease',
        'Extra Attack: Attack twice per Attack action'
      ],
      personality: {
        traits: 'I hold myself and my companions to the highest standard of honor.',
        ideals: 'Justice. The law and righteousness must shield the innocent.',
        bonds: 'My sacred oath to defend the kingdom from abyssal incursions.',
        flaws: 'I struggle to believe someone is lying when they look me in the eye.'
      }
    }
  },

  {
    id: 'template-barbarian-berserker',
    name: 'Barbarian (Berserker)',
    category: 'Martial',
    system: 'standard',
    subtitle: 'Primal Rager & Physical Juggernaut',
    description: 'An unstoppable engine of feral fury with the highest HP pool in the game, physical damage resistances, and reckless relentless strikes.',
    icon: '🪓',
    badge: 'Level 5 Martial',
    keyStats: 'STR 18 (+4) • CON 16 (+3) • HP 55 • Rage (+2 dmg)',
    signatureFeature: 'Rage (Resistance to B/P/S damage), Reckless Attack, Frenzy, Danger Sense, Extra Attack',
    weaponsOrSpells: 'Greataxe (1d12+4), Handaxes (1d6+4), Javelins (1d6+4)',
    sheet: {
      id: 'template-barbarian-berserker-sheet',
      type: 'standard',
      name: 'Thorgar Ironhide',
      classAndLevel: 'Barbarian (Berserker) 5',
      race: 'Half-Orc',
      background: 'Outlander',
      alignment: 'Chaotic Good',
      xp: 6500,
      inspiration: false,
      proficiencyBonus: 3,
      armorClass: 15,
      initiative: 2,
      speed: '40 ft.',
      hpCurrent: 55,
      hpMax: 55,
      hpTemp: 0,
      hitDice: '5d12',
      deathSaves: { successes: 0, failures: 0 },
      abilities: {
        str: { score: 18, modifier: 4, saveProficient: true },
        dex: { score: 14, modifier: 2, saveProficient: false },
        con: { score: 16, modifier: 3, saveProficient: true },
        int: { score: 8, modifier: -1, saveProficient: false },
        wis: { score: 12, modifier: 1, saveProficient: false },
        cha: { score: 9, modifier: -1, saveProficient: false }
      },
      skills: {
        athletics: { proficient: true },
        intimidation: { proficient: true },
        perception: { proficient: true },
        survival: { proficient: true }
      },
      passivePerception: 14,
      proficienciesAndLanguages: [
        'Light Armor, Medium Armor, Shields',
        'Simple Weapons, Martial Weapons',
        'Common, Orcish'
      ],
      attacks: [
        { id: 'atk-ga', name: 'Greataxe (Heavy/Two-Handed)', atkBonus: 7, damage: '1d12 + 4', damageType: 'slashing', range: 'Melee (5 ft.)' },
        { id: 'atk-ha', name: 'Handaxe (Thrown)', atkBonus: 7, damage: '1d6 + 4', damageType: 'slashing', range: '20/60 ft.' },
        { id: 'atk-jav', name: 'Javelin', atkBonus: 7, damage: '1d6 + 4', damageType: 'piercing', range: '30/120 ft.' }
      ],
      equipment: [
        'Greataxe with serrated obsidian edge',
        'Handaxes (x2)',
        'Javelins (x4)',
        "Explorer's Pack, Animal furs, Hunting trap, Bear claw necklace"
      ],
      currency: { cp: 15, sp: 30, ep: 0, gp: 85, pp: 0 },
      featuresAndTraits: [
        'Rage (3/day): Advantage on STR checks/saves; +2 melee damage; resistance to bludgeoning, piercing, and slashing damage',
        'Unarmored Defense: AC = 10 + DEX mod (+2) + CON mod (+3) = 15',
        'Reckless Attack: Gain advantage on melee attack rolls; attacks against you have advantage until next turn',
        'Danger Sense: Advantage on DEX saving throws against traps and spells you can see',
        'Frenzy: While raging, make an additional melee attack as a bonus action each turn',
        'Relentless Endurance: When dropped to 0 HP, drop to 1 HP instead (1/long rest)',
        'Savage Attacks: Roll 1 additional weapon damage die when scoring a critical hit',
        'Fast Movement: Speed increases by +10 ft. while unarmored (40 ft.)'
      ],
      personality: {
        traits: 'I express my feelings openly and roar with laughter around a campfire.',
        ideals: 'Strength. The strongest survive to protect the tribe and the herd.',
        bonds: 'I wear the broken tooth of the frost wolf that challenged my elders.',
        flaws: 'I become restless and irritable during diplomatic conferences.'
      }
    }
  },

  {
    id: 'template-ranger-hunter',
    name: 'Ranger (Hunter)',
    category: 'Expert',
    system: 'standard',
    subtitle: 'Wilderness Marksman & Beast Tracker',
    description: 'A sharp-eyed scout lethal from 600 paces away who tracks quarry through any terrain and rains devastating arrows on monstrosities.',
    icon: '🏹',
    badge: 'Level 5 Half-Caster',
    keyStats: 'DEX 18 (+4) • WIS 14 (+2) • AC 16 • Range 150/600 ft.',
    signatureFeature: 'Colossus Slayer (+1d8 dmg), Hunter\'s Mark, Archery Style (+2 atk), Primeval Awareness',
    weaponsOrSpells: 'Longbow (+9 atk, 1d8+4), Dual Shortswords (1d6+4), Hunter\'s Mark',
    sheet: {
      id: 'template-ranger-hunter-sheet',
      type: 'standard',
      name: 'Robin Windstrider',
      classAndLevel: 'Ranger (Hunter) 5',
      race: 'Wood Elf',
      background: 'Outlander',
      alignment: 'Neutral Good',
      xp: 6500,
      inspiration: false,
      proficiencyBonus: 3,
      armorClass: 16,
      initiative: 4,
      speed: '35 ft.',
      hpCurrent: 40,
      hpMax: 40,
      hpTemp: 0,
      hitDice: '5d10',
      deathSaves: { successes: 0, failures: 0 },
      abilities: {
        str: { score: 12, modifier: 1, saveProficient: true },
        dex: { score: 18, modifier: 4, saveProficient: true },
        con: { score: 14, modifier: 2, saveProficient: false },
        int: { score: 10, modifier: 0, saveProficient: false },
        wis: { score: 14, modifier: 2, saveProficient: false },
        cha: { score: 10, modifier: 0, saveProficient: false }
      },
      skills: {
        athletics: { proficient: true },
        nature: { proficient: true },
        perception: { proficient: true },
        stealth: { proficient: true },
        survival: { proficient: true }
      },
      passivePerception: 15,
      proficienciesAndLanguages: [
        'Light Armor, Medium Armor, Shields',
        'Simple Weapons, Martial Weapons',
        'Common, Elvish, Sylvan'
      ],
      attacks: [
        { id: 'atk-lb', name: 'Longbow (Archery)', atkBonus: 9, damage: '1d8 + 4', damageType: 'piercing', range: '150/600 ft.' },
        { id: 'atk-ss1', name: 'Shortsword (Primary)', atkBonus: 7, damage: '1d6 + 4', damageType: 'piercing', range: 'Melee (5 ft.)' },
        { id: 'atk-ss2', name: 'Shortsword (Off-hand)', atkBonus: 7, damage: '1d6', damageType: 'piercing', range: 'Melee (5 ft.)' }
      ],
      spellcasting: {
        spellcastingClass: 'Ranger',
        spellAbility: 'WIS',
        spellSaveDC: 13,
        spellAttackBonus: 5,
        slots: [
          { level: 1, total: 4, expended: 0 },
          { level: 2, total: 2, expended: 0 }
        ],
        spellsKnown: [
          "1st: Hunter's Mark, Cure Wounds, Absorb Elements",
          '2nd: Pass Without Trace, Spike Growth'
        ]
      },
      equipment: [
        'Studded Leather Armor (AC 12 + DEX 4 = 16)',
        'Yew Longbow & Quiver with 40 Arrows',
        'Shortswords (x2)',
        "Explorer's Pack (Camouflage bedroll, waterskin, tinderbox)",
        'Herbalism Kit & Hunting whistle'
      ],
      currency: { cp: 20, sp: 50, ep: 0, gp: 105, pp: 0 },
      featuresAndTraits: [
        'Fighting Style: Archery (+2 bonus to ranged weapon attack rolls)',
        'Colossus Slayer: Deal extra 1d8 damage once per turn to a creature below max HP',
        'Favored Enemy (Monstrosities & Undead): Advantage on Survival checks and Intelligence checks to recall info',
        'Natural Explorer (Forest & Mountain): Difficult terrain doesn’t slow your group; cannot get lost by non-magical means',
        'Primeval Awareness: Sense aberrations, celestials, dragons, elementals, fey, fiends, undead within 1 mile',
        'Extra Attack: Attack twice per Attack action'
      ],
      personality: {
        traits: 'I am calmest when perched thirty feet up a pine canopy listening to the wind.',
        ideals: 'Balance. Nature must be guarded against those who despoil without reverence.',
        bonds: 'An ancient owlbear spared my life as a child; I protect its grove.',
        flaws: 'I feel uncomfortable in large crowded city taverns.'
      }
    }
  },

  {
    id: 'template-bard-lore',
    name: 'Bard (College of Lore)',
    category: 'Expert',
    system: 'standard',
    subtitle: 'Jack of All Trades & Cutting Words Buffer',
    description: 'A silver-tongued virtuoso who boosts companions with Inspiration dice, debilitates enemy rolls with Cutting Words, and casts spells from any discipline.',
    icon: '🎭',
    badge: 'Level 5 Support',
    keyStats: 'CHA 18 (+4) • DEX 14 (+2) • Jack of All Trades (+1) • Spell DC 15',
    signatureFeature: 'Bardic Inspiration (d8), Cutting Words, Jack of All Trades, Song of Rest',
    weaponsOrSpells: 'Rapier (1d8+2), Vicious Mockery (2d4 psychic), Healing Word, Hypnotic Pattern',
    sheet: {
      id: 'template-bard-lore-sheet',
      type: 'standard',
      name: 'Lyra Meadowlark',
      classAndLevel: 'Bard (College of Lore) 5',
      race: 'Half-Elf',
      background: 'Entertainer',
      alignment: 'Chaotic Good',
      xp: 6500,
      inspiration: true,
      proficiencyBonus: 3,
      armorClass: 14,
      initiative: 2,
      speed: '30 ft.',
      hpCurrent: 33,
      hpMax: 33,
      hpTemp: 0,
      hitDice: '5d8',
      deathSaves: { successes: 0, failures: 0 },
      abilities: {
        str: { score: 8, modifier: -1, saveProficient: false },
        dex: { score: 14, modifier: 2, saveProficient: true },
        con: { score: 12, modifier: 1, saveProficient: false },
        int: { score: 14, modifier: 2, saveProficient: false },
        wis: { score: 12, modifier: 1, saveProficient: false },
        cha: { score: 18, modifier: 4, saveProficient: true }
      },
      skills: {
        acrobatics: { proficient: true },
        arcana: { proficient: true },
        deception: { proficient: true },
        insight: { proficient: true },
        performance: { proficient: true, expertise: true },
        persuasion: { proficient: true, expertise: true },
        sleightOfHand: { proficient: true }
      },
      passivePerception: 12,
      proficienciesAndLanguages: [
        'Light Armor',
        'Simple Weapons, Hand Crossbows, Longswords, Rapiers, Shortswords',
        'Lute, Flute, Viol, Disguise Kit',
        'Common, Elvish, Sylvan'
      ],
      attacks: [
        { id: 'atk-rap', name: 'Rapier (Finesse)', atkBonus: 5, damage: '1d8 + 2', damageType: 'piercing', range: 'Melee (5 ft.)' },
        { id: 'atk-vm', name: 'Vicious Mockery (Cantrip)', atkBonus: 7, damage: '2d4', damageType: 'psychic', range: '60 ft. (WIS DC 15)' }
      ],
      spellcasting: {
        spellcastingClass: 'Bard',
        spellAbility: 'CHA',
        spellSaveDC: 15,
        spellAttackBonus: 7,
        slots: [
          { level: 1, total: 4, expended: 0 },
          { level: 2, total: 3, expended: 0 },
          { level: 3, total: 2, expended: 0 }
        ],
        spellsKnown: [
          'Cantrips: Vicious Mockery, Prestidigitation, Minor Illusion',
          '1st: Healing Word, Faerie Fire, Dissonant Whispers, Thunderwave',
          '2nd: Heat Metal, Invisibility, Suggestion',
          '3rd: Hypnotic Pattern, Dispel Magic'
        ]
      },
      equipment: [
        'Studded Leather Armor (AC 12 + DEX 2 = 14)',
        'Rapier with silver filigree',
        'Finely polished Masterwork Lute',
        "Entertainer's Pack (Costumes, candles, bell, makeup)",
        'Potion of Healing'
      ],
      currency: { cp: 30, sp: 60, ep: 0, gp: 175, pp: 4 },
      featuresAndTraits: [
        'Bardic Inspiration (d8, 4/short rest): Bonus action to grant ally 1d8 to add to roll',
        'Cutting Words: Use reaction and 1 inspiration die to subtract from enemy attack roll, check, or damage roll',
        'Jack of All Trades: Add +1 to any ability check that doesn’t already include proficiency bonus',
        'Song of Rest: Allies regain an extra 1d6 HP during short rests',
        'Font of Inspiration: Regain all Bardic Inspiration dice on a short or long rest'
      ],
      personality: {
        traits: 'I always have a witty retort or an obscure ballad for every predicament.',
        ideals: 'Beauty. When the world is bleak, music and poetry remind us of tomorrow.',
        bonds: 'I carry the songbook of my late mentor and vow to complete its final verse.',
        flaws: 'I cannot resist poking fun at self-important pompous aristocrats.'
      }
    }
  },

  {
    id: 'template-modern-operative',
    name: 'Modern Infiltrator (5e Modern)',
    category: 'Modern',
    system: 'standard',
    subtitle: 'Tactical Firearms, Surveillance & Cyber Tech',
    description: 'An elite tactical operative from the Modern Handbook skilled in semi-automatic firearms, computer hacking, urban driving, and tactical covert ops.',
    icon: '🔫',
    badge: 'Modern 5e',
    keyStats: 'DEX 18 (+4) • INT 14 (+2) • AC 16 (Kevlar) • Range 80/240',
    signatureFeature: 'Tactical Firearms Mastery, Computer Hacking Kit, Tactical Aid, Bulletproof Armor',
    weaponsOrSpells: '9mm Service Pistol (2d6 piercing), Combat Knife (1d4+4), Flashbang',
    sheet: {
      id: 'template-modern-operative-sheet',
      type: 'standard',
      name: 'Agent Marcus Vance',
      classAndLevel: 'Fighter (Commando) 5',
      race: 'Human (Modern)',
      background: 'Tactical Operative',
      alignment: 'Lawful Neutral',
      xp: 6500,
      inspiration: true,
      proficiencyBonus: 3,
      armorClass: 16,
      initiative: 4,
      speed: '30 ft.',
      hpCurrent: 44,
      hpMax: 44,
      hpTemp: 0,
      hitDice: '5d10',
      deathSaves: { successes: 0, failures: 0 },
      abilities: {
        str: { score: 12, modifier: 1, saveProficient: true },
        dex: { score: 18, modifier: 4, saveProficient: false },
        con: { score: 14, modifier: 2, saveProficient: true },
        int: { score: 14, modifier: 2, saveProficient: false },
        wis: { score: 12, modifier: 1, saveProficient: false },
        cha: { score: 10, modifier: 0, saveProficient: false }
      },
      skills: {
        athletics: { proficient: true },
        investigation: { proficient: true },
        perception: { proficient: true },
        sleightOfHand: { proficient: true },
        stealth: { proficient: true }
      },
      passivePerception: 14,
      proficienciesAndLanguages: [
        'Light Armor, Medium Armor (Kevlar)',
        'Simple Weapons, Modern Firearms (Pistols, Rifles, Shotguns)',
        'Vehicles (Automobiles, Helicopters), Hacker Tools',
        'English, Spanish, Mandarin'
      ],
      attacks: [
        { id: 'atk-9mm', name: '9mm Semi-Auto Pistol', atkBonus: 9, damage: '2d6 + 4', damageType: 'piercing', range: '50/150 ft. (Mag 15)' },
        { id: 'atk-shotgun', name: '12-Gauge Tactical Shotgun', atkBonus: 7, damage: '2d8', damageType: 'piercing', range: '30/90 ft.' },
        { id: 'atk-knife', name: 'Tactical Combat Knife', atkBonus: 7, damage: '1d4 + 4', damageType: 'piercing', range: 'Melee (20/60 ft.)' }
      ],
      equipment: [
        'Tactical Kevlar Vest (AC 12 + DEX 4 = 16)',
        '9mm Pistol with laser sight & 45 spare rounds',
        'Combat Knife & Suppressor attachment',
        'Ruggedized Toughbook with decryption suite & lockpicks',
        'Night-vision goggles & encrypted comms headset',
        'Military Medkit (x3)'
      ],
      currency: { cp: 0, sp: 0, ep: 0, gp: 350, pp: 0 },
      featuresAndTraits: [
        'Fighting Style: Gunslinger (+2 bonus to attack rolls made with firearms)',
        'Tactical Aid: Grant an ally within 30 ft. advantage on their attack roll as a bonus action',
        'Action Surge: Take 1 additional action on your turn (1/short rest)',
        'Second Wind: Regain 1d10 + 5 HP as a bonus action (1/short rest)',
        'Extra Attack: Attack twice per Attack action',
        'Modern Expertise: Double proficiency for Hacker tools and Vehicle operation'
      ],
      personality: {
        traits: 'I maintain situational awareness and verify radio check-ins on schedule.',
        ideals: 'Professionalism. Emotions complicate tactical execution; stick to protocol.',
        bonds: 'My squad will always receive extracted evac, no matter the cost.',
        flaws: 'I suspect everyone is running an undercover surveillance op.'
      }
    }
  },

  {
    id: 'template-companion-warrior',
    name: 'Sidekick Warrior / Retainer',
    category: 'Companion',
    system: 'standard',
    subtitle: 'Loyal Companion, Hireling & Guardian',
    description: 'A streamlined martial companion sheet based on Tasha’s Cauldron rules, perfect for solo play companions, hirelings, or player guard dogs/allies.',
    icon: '🛡️',
    badge: 'Sidekick Level 5',
    keyStats: 'STR 16 (+3) • CON 14 (+2) • AC 17 • HP 38',
    signatureFeature: 'Defender Aura, Second Wind, Improved Critical, Coordinated Strike',
    weaponsOrSpells: 'Longsword (1d8+3), Light Crossbow (1d8+1)',
    sheet: {
      id: 'template-companion-warrior-sheet',
      type: 'standard',
      name: 'Grom the Loyal Retainer',
      classAndLevel: 'Sidekick (Warrior) 5',
      race: 'Human',
      background: 'Squire',
      alignment: 'Lawful Good',
      xp: 6500,
      inspiration: false,
      proficiencyBonus: 3,
      armorClass: 17,
      initiative: 1,
      speed: '30 ft.',
      hpCurrent: 38,
      hpMax: 38,
      hpTemp: 0,
      hitDice: '5d8',
      deathSaves: { successes: 0, failures: 0 },
      abilities: {
        str: { score: 16, modifier: 3, saveProficient: true },
        dex: { score: 12, modifier: 1, saveProficient: false },
        con: { score: 14, modifier: 2, saveProficient: true },
        int: { score: 10, modifier: 0, saveProficient: false },
        wis: { score: 12, modifier: 1, saveProficient: false },
        cha: { score: 10, modifier: 0, saveProficient: false }
      },
      skills: {
        athletics: { proficient: true },
        perception: { proficient: true },
        survival: { proficient: true }
      },
      passivePerception: 14,
      proficienciesAndLanguages: [
        'All Armor, Shields',
        'Simple Weapons, Martial Weapons',
        'Common'
      ],
      attacks: [
        { id: 'atk-ls', name: 'Longsword', atkBonus: 6, damage: '1d8 + 3', damageType: 'slashing', range: 'Melee (5 ft.)' },
        { id: 'atk-lc', name: 'Light Crossbow', atkBonus: 4, damage: '1d8 + 1', damageType: 'piercing', range: '80/320 ft.' }
      ],
      equipment: [
        'Chain Shirt (AC 13 + DEX 1 = 14) + Shield (+2 AC) + Defender (+1) = 17 AC',
        'Longsword & Scabbard',
        'Light Crossbow & 20 Bolts',
        "Pack with torch, bedroll, cooking pot, waterskin"
      ],
      currency: { cp: 10, sp: 20, ep: 0, gp: 35, pp: 0 },
      featuresAndTraits: [
        'Warrior Role (Defender): Imposes disadvantage on an attack against an ally within 5 ft. as a reaction',
        'Second Wind: Regain 1d8 + 5 HP as a bonus action once per short rest',
        'Extra Attack: Attacks twice per Attack action',
        'Improved Critical: Scores critical hits on a roll of 19 or 20'
      ],
      personality: {
        traits: 'Unflinchingly loyal to the leader of the adventuring company.',
        ideals: 'Duty. Doing an honest day’s guarding earns honest rations.',
        bonds: 'I have sworn my blade to keep the party’s spellcasters safe.',
        flaws: 'I follow orders perhaps too literally sometimes.'
      }
    }
  },

  // ==========================================
  // KID ADVENTURER TEMPLATES (AGES 5+)
  // ==========================================
  {
    id: 'template-kid-knight',
    name: 'Sir Knight (The Brave Defender)',
    category: 'Kids',
    system: 'kids',
    subtitle: 'Golden Shield, Big Roars & Heroic Leaps',
    description: 'A valiant armor-wearing champion with a heart of gold who leaps in front of friends to block scary monster attacks.',
    icon: '🦁',
    badge: 'Kids 5+ • Knight',
    keyStats: 'Brawn +3 • Heart +2 • 8 Hearts • 3 Stars',
    signatureFeature: 'Golden Lion Strike, Lionheart Shield Wall, Roar of Courage',
    weaponsOrSpells: 'Lion Blade (2 Hearts), Golden Shield (Blocks attacks), Pet Barnaby Pup',
    sheet: {
      id: 'template-kid-knight-sheet',
      type: 'kids',
      name: 'Sir Leo the Brave',
      heroTitle: 'The Golden Lion Knight',
      heroClass: 'Knight of Valor',
      ageGroup: 'Ages 5 and Up',
      avatarEmoji: '🦁',
      themeColor: 'amber',
      heartsCurrent: 8,
      heartsMax: 8,
      heroStars: 3,
      heroStarsMax: 5,
      stats: {
        brawn: { name: 'Brawn', icon: '🦾', bonus: 3, hint: 'Smashing doors, heavy lifting, big jumps!' },
        agility: { name: 'Agility', icon: '⚡', bonus: 1, hint: 'Dodging traps, walking on logs!' },
        heart: { name: 'Heart', icon: '❤️', bonus: 2, hint: 'Being brave, standing tall, eating spicy stew!' },
        smarts: { name: 'Smarts', icon: '🧠', bonus: 0, hint: 'Remembering maps, solving riddles!' },
        senses: { name: 'Senses', icon: '👁️', bonus: 1, hint: 'Hearing sneaky monsters, spotting loot!' },
        smile: { name: 'Smile', icon: '✨', bonus: 2, hint: 'Cheering up friends, making loyal allies!' }
      },
      heroMoves: [
        {
          id: 'move-lion-strike',
          name: 'Golden Lion Strike',
          icon: '⚔️',
          actionType: 'Action',
          ruleTip: 'Roll d20 + Brawn (+3)! If 10+, deal 2 Hearts of damage!',
          description: 'Swings the gleaming lion-crested blade in a bright arc to protect teammates.'
        },
        {
          id: 'move-shield-wall',
          name: 'Lionheart Shield Wall',
          icon: '🛡️',
          actionType: 'Reaction',
          ruleTip: 'When a friend gets attacked, jump in front! Take 0 damage if you roll 10+!',
          description: 'Plants the golden shield into the stone, blocking monster claws and fireballs.'
        },
        {
          id: 'move-brave-roar',
          name: 'Roar of Courage',
          icon: '🦁',
          actionType: 'Special Power',
          ruleTip: 'Spend 1 Star ⭐ to give EVERY friend +2 on their next roll!',
          description: 'Lets out an inspiring golden lion roar that chases away darkness and fright.'
        }
      ],
      petCompanion: {
        name: 'Barnaby',
        species: 'Golden Retriever Pup with a little wooden cape',
        icon: '🐶',
        ability: 'Can sniff out hidden food and barks happily whenever a trap or secret door is nearby!'
      },
      backpack: [
        { name: 'Warm Apple Turnover', icon: '🥧', description: 'Eat to heal 1 Heart immediately!' },
        { name: 'Magic Nightlight Torch', icon: '🔦', description: 'Glows like warm sunshine even underwater!' },
        { name: 'Bouncy Climbing Rope', icon: '🪢', description: '50 feet of bright blue rope that is super soft on paws.' },
        { name: 'Golden Whistle', icon: '🎵', description: 'Calls Barnaby the pup from anywhere in the dungeon.' }
      ],
      goldCoins: 15,
      motto: 'Stand tall, protect the small, and never give up!',
      favoriteTreat: 'Warm buttered rolls and fresh apple cider'
    }
  },

  {
    id: 'template-kid-mage',
    name: 'Starlight Mage (Sparkles & Fairies)',
    category: 'Kids',
    system: 'kids',
    subtitle: 'Rainbow Spells, Healing Kisses & Flight',
    description: 'A magical sparkle caster with iridescent fairy wings who uses rainbow dust to dazzle monsters and mend bumped elbows.',
    icon: '🧚',
    badge: 'Kids 5+ • Mage',
    keyStats: 'Smarts +3 • Smile +3 • 6 Hearts • 4 Stars',
    signatureFeature: 'Rainbow Sparkle Burst, Starlight Healing Kiss, Gilded Flutter Flight',
    weaponsOrSpells: 'Rainbow Dust, Healing Kiss (Heals 2 Hearts), Pet Firefly Twinkle',
    sheet: {
      id: 'template-kid-mage-sheet',
      type: 'kids',
      name: 'Luna Starwhisper',
      heroTitle: 'The Pixie Starlight Mage',
      heroClass: 'Sparkle Wizard',
      ageGroup: 'Ages 5 and Up',
      avatarEmoji: '🧚',
      themeColor: 'purple',
      heartsCurrent: 6,
      heartsMax: 6,
      heroStars: 4,
      heroStarsMax: 5,
      stats: {
        brawn: { name: 'Brawn', icon: '🦾', bonus: 0, hint: 'Pushing boulders (fairies use magic instead!)' },
        agility: { name: 'Agility', icon: '⚡', bonus: 2, hint: 'Fluttering through keyholes, dodging nets!' },
        heart: { name: 'Heart', icon: '❤️', bonus: 1, hint: 'Staying cheerful in spooky haunted cellars!' },
        smarts: { name: 'Smarts', icon: '🧠', bonus: 3, hint: 'Reading secret spell scrolls, fairy runes!' },
        senses: { name: 'Senses', icon: '👁️', bonus: 2, hint: 'Finding sparkly gems, listening to wind!' },
        smile: { name: 'Smile', icon: '✨', bonus: 3, hint: 'Tickling grumpy goblins, making animals dance!' }
      },
      heroMoves: [
        {
          id: 'move-sparkle-burst',
          name: 'Rainbow Sparkle Burst',
          icon: '✨',
          actionType: 'Action',
          ruleTip: 'Roll d20 + Smarts (+3)! If 10+, distracts or zaps a monster for 2 Hearts!',
          description: 'Sends a whirling spiral of shimmering star-dust that dazzles bad guys.'
        },
        {
          id: 'move-healing-kiss',
          name: 'Starlight Healing Kiss',
          icon: '💖',
          actionType: 'Special Power',
          ruleTip: 'Touch a friend and roll d20 + Smile (+3)! On a 10+, restore 2 Hearts to them!',
          description: 'Breathes gentle shimmering pink stardust on a friend to mend bruises instantly.'
        },
        {
          id: 'move-butterfly-wings',
          name: 'Gilded Flutter Flight',
          icon: '🦋',
          actionType: 'Action',
          ruleTip: 'Fly over pits, rivers, or castle walls for 1 minute!',
          description: 'Iridescent fairy wings flutter at high speed, carrying Luna above any obstacle.'
        }
      ],
      petCompanion: {
        name: 'Twinkle',
        species: 'Gigantic Glowing Firefly',
        icon: '✨',
        ability: 'Lights up pitch black caves with gentle rainbow illumination and loves gentle head pats!'
      },
      backpack: [
        { name: 'Pouch of Rainbow Dust', icon: '✨', description: 'Throw in the air to reveal invisible footprints!' },
        { name: 'Sweetberry Nectar Flask', icon: '🍯', description: 'Gives someone an extra burst of energy!' },
        { name: 'Tiny Silver Bell', icon: '🔔', description: 'Rings with a cheerful sound that soothes angry beasts.' }
      ],
      goldCoins: 22,
      motto: 'A little kindness and a lot of sparkle can fix anything!',
      favoriteTreat: 'Strawberries dipped in wild blossom honey'
    }
  },

  {
    id: 'template-kid-ranger',
    name: 'Critter Scout (Forest & Sling)',
    category: 'Kids',
    system: 'kids',
    subtitle: 'Acorn Slingshot, Critter Talk & Tiptoeing',
    description: 'A nimble woodland scout who talks to squirrels, tiptoes past sleeping dragons, and always knows the secret path through the forest.',
    icon: '🐿️',
    badge: 'Kids 5+ • Scout',
    keyStats: 'Agility +3 • Senses +3 • 7 Hearts • 3 Stars',
    signatureFeature: 'Sure-Shot Sling, Shadowleaf Tiptoe, Critter Whisperer',
    weaponsOrSpells: 'River Stone Sling (2 Hearts), Acorn Camo, Pet Nutmeg Squirrel',
    sheet: {
      id: 'template-kid-ranger-sheet',
      type: 'kids',
      name: 'Finn Swiftwood',
      heroTitle: 'The Whispering Forest Scout',
      heroClass: 'Forest Ranger',
      ageGroup: 'Ages 5 and Up',
      avatarEmoji: '🏹',
      themeColor: 'emerald',
      heartsCurrent: 7,
      heartsMax: 7,
      heroStars: 3,
      heroStarsMax: 5,
      stats: {
        brawn: { name: 'Brawn', icon: '🦾', bonus: 1, hint: 'Climbing tall oak trees, swimming rapids!' },
        agility: { name: 'Agility', icon: '⚡', bonus: 3, hint: 'Shooting acorns with a sling, silent tiptoe!' },
        heart: { name: 'Heart', icon: '❤️', bonus: 2, hint: 'Camping in the snow, enduring big hikes!' },
        smarts: { name: 'Smarts', icon: '🧠', bonus: 1, hint: 'Knowing yummy vs toxic mushrooms!' },
        senses: { name: 'Senses', icon: '👁️', bonus: 3, hint: 'Tracking wolf prints, spotting owls!' },
        smile: { name: 'Smile', icon: '✨', bonus: 1, hint: 'Singing campfire tunes, whistling to birds!' }
      },
      heroMoves: [
        {
          id: 'move-acorn-shot',
          name: 'Sure-Shot Sling',
          icon: '🎯',
          actionType: 'Action',
          ruleTip: 'Roll d20 + Agility (+3)! On a 10+, hits target from far away for 2 Hearts!',
          description: 'Fires smooth river stones or acorns with pinpoint accuracy.'
        },
        {
          id: 'move-tiptoe-sneak',
          name: 'Shadowleaf Tiptoe',
          icon: '🍃',
          actionType: 'Action',
          ruleTip: 'Roll d20 + Agility (+3)! On 8+, nobody can see or hear you sneak by!',
          description: 'Blends into moss, bushes, and shadows like a gentle forest whisper.'
        },
        {
          id: 'move-animal-chatter',
          name: 'Critter Whisperer',
          icon: '🐿️',
          actionType: 'Special Power',
          ruleTip: 'Ask any woodland animal a question—they will gladly tell you the truth!',
          description: 'Chirps and chatters in squirrel, bird, and badger dialect to learn secrets.'
        }
      ],
      petCompanion: {
        name: 'Nutmeg',
        species: 'Cheeky Red Tree Squirrel',
        icon: '🐿️',
        ability: 'Can scurry up sheer dungeon walls to fetch dropped keys, levers, or shiny coins!'
      },
      backpack: [
        { name: 'Pocket of Acorns', icon: '🌰', description: 'Ammo for sling or snack for woodland friends.' },
        { name: 'Herbal Bandage Poultice', icon: '🌿', description: 'Heals 1 Heart when wrapped on a scrape.' },
        { name: 'Spyglass of the Falcon', icon: '🔭', description: 'See things three miles away as if right in front!' }
      ],
      goldCoins: 18,
      motto: 'Listen to the forest, leave only footprints, take only memories!',
      favoriteTreat: 'Roasted hazelnuts and dried wild cherries'
    }
  },

  {
    id: 'template-kid-dragon',
    name: 'Dragon Guardian (Fire & Hugs)',
    category: 'Kids',
    system: 'kids',
    subtitle: 'Fire Sneezes, Marshmallow Roasting & Tail Sweeps',
    description: 'A cozy young dragon-kin with shiny scales who toasts snacks, knocks over pesky goblins with a tail sweep, and gives warm protective wing hugs.',
    icon: '🐉',
    badge: 'Kids 5+ • Dragon',
    keyStats: 'Brawn +3 • Heart +3 • 9 Hearts • 2 Stars',
    signatureFeature: 'Warm Fire Sneeze, Playful Tail Sweep, Scaly Shield-Hug',
    weaponsOrSpells: 'Golden Fire Breath, Tail Sweep (Trips foes), Pet Cinder Salamander',
    sheet: {
      id: 'template-kid-dragon-sheet',
      type: 'kids',
      name: 'Drake Cinderheart',
      heroTitle: 'The Friendly Dragon Guardian',
      heroClass: 'Dragon Guardian',
      ageGroup: 'Ages 5 and Up',
      avatarEmoji: '🐉',
      themeColor: 'rose',
      heartsCurrent: 9,
      heartsMax: 9,
      heroStars: 2,
      heroStarsMax: 5,
      stats: {
        brawn: { name: 'Brawn', icon: '🦾', bonus: 3, hint: 'Big dragon hugs, smashing icy walls!' },
        agility: { name: 'Agility', icon: '⚡', bonus: 1, hint: 'Dragon tail flips, leaping over lava!' },
        heart: { name: 'Heart', icon: '❤️', bonus: 3, hint: 'Immune to cold breezes, tough scales!' },
        smarts: { name: 'Smarts', icon: '🧠', bonus: 0, hint: 'Figuring out clockwork puzzles!' },
        senses: { name: 'Senses', icon: '👁️', bonus: 1, hint: 'Smelling roasting marshmallows miles away!' },
        smile: { name: 'Smile', icon: '✨', bonus: 2, hint: 'Warm friendly smile that melts hearts!' }
      },
      heroMoves: [
        {
          id: 'move-warm-flame',
          name: 'Warm Fire Sneeze',
          icon: '🔥',
          actionType: 'Action',
          ruleTip: 'Roll d20 + Heart (+3)! On a 10+, melts ice or deals 2 Hearts to ice monsters!',
          description: 'Puffs a cozy golden flame that roasts snacks or wards off spooky beasts.'
        },
        {
          id: 'move-tail-sweep',
          name: 'Playful Tail Sweep',
          icon: '🦎',
          actionType: 'Action',
          ruleTip: 'Roll d20 + Brawn (+3)! On a 10+, knocks two bad guys flat on their backs!',
          description: 'Swings strong emerald scales in a gentle sweep, tripping mischievous goblins.'
        },
        {
          id: 'move-dragon-hug',
          name: 'Warm Scaly Shield-Hug',
          icon: '🤗',
          actionType: 'Reaction',
          ruleTip: 'Wrap wings around a scared friend so they take 0 damage this round!',
          description: 'Protects companions with tough ruby scales and cozy dragon warmth.'
        }
      ],
      petCompanion: {
        name: 'Cinder',
        species: 'Little Fire Salamander',
        icon: '🦎',
        ability: 'Warms cold hands in snowy blizzards and eats pesky spiderwebs!'
      },
      backpack: [
        { name: 'Bag of Giant Marshmallows', icon: '🍡', description: 'Toast with dragon breath to share with the whole party!' },
        { name: 'Polished Brass Mirror', icon: '🪞', description: 'Used to practice scary roaring faces and look around corners.' },
        { name: 'Soft Woolen Blanket', icon: '🧣', description: 'Cozy red blanket big enough for three friends.' }
      ],
      goldCoins: 12,
      motto: 'True strength is keeping your friends safe and warm!',
      favoriteTreat: 'Roasted marshmallows and cinnamon sticks'
    }
  },

  {
    id: 'template-kid-inventor',
    name: 'Clockwork Inventor (Gadgets & Springs)',
    category: 'Kids',
    system: 'kids',
    subtitle: 'Spring Boots, Net Launchers & Fix-It Wrench',
    description: 'A cheerful kid tinkerer equipped with bouncy spring-heels, a ticklish net launcher, and a pocketful of gears that can fix broken doors.',
    icon: '⚙️',
    badge: 'Kids 5+ • Inventor',
    keyStats: 'Smarts +3 • Agility +2 • 7 Hearts • 3 Stars',
    signatureFeature: 'Clockwork Spring Jump, Gizmo Net Launcher, Fix-It Wrench',
    weaponsOrSpells: 'Tickle Net Launcher, Spring Boots (Jump over walls), Pet Clockwork Mouse',
    sheet: {
      id: 'template-kid-inventor-sheet',
      type: 'kids',
      name: 'Pip Sparkplug',
      heroTitle: 'The Clockwork Wonder Kid',
      heroClass: 'Gadget Inventor',
      ageGroup: 'Ages 5 and Up',
      avatarEmoji: '⚙️',
      themeColor: 'sky',
      heartsCurrent: 7,
      heartsMax: 7,
      heroStars: 3,
      heroStarsMax: 5,
      stats: {
        brawn: { name: 'Brawn', icon: '🦾', bonus: 1, hint: 'Cranking heavy gears and levers!' },
        agility: { name: 'Agility', icon: '⚡', bonus: 2, hint: 'Dodging clockwork steam, fast running!' },
        heart: { name: 'Heart', icon: '❤️', bonus: 2, hint: 'Standing tall when gizmos go POP!' },
        smarts: { name: 'Smarts', icon: '🧠', bonus: 3, hint: 'Fixing broken wagons, inventing gadgets!' },
        senses: { name: 'Senses', icon: '👁️', bonus: 2, hint: 'Spotting loose bolts and secret buttons!' },
        smile: { name: 'Smile', icon: '✨', bonus: 2, hint: 'Showing off cool inventions to the crowd!' }
      },
      heroMoves: [
        {
          id: 'move-spring-jump',
          name: 'Clockwork Spring Jump',
          icon: '🦘',
          actionType: 'Action',
          ruleTip: 'Roll d20 + Agility (+2)! On 10+, leap 30 feet over any wall, pit, or monster!',
          description: 'Boots click together with a loud BOING, catapulting Pip high into the air!'
        },
        {
          id: 'move-net-launcher',
          name: 'Ticklish Net Launcher',
          icon: '🕸️',
          actionType: 'Action',
          ruleTip: 'Roll d20 + Smarts (+3)! On 10+, traps a monster in a soft net so it can’t move!',
          description: 'Fires a bright yellow rope net made of soft yarn that tangles mischievous villains.'
        },
        {
          id: 'move-fixit-wrench',
          name: 'Super Fix-It Whack',
          icon: '🔧',
          actionType: 'Special Power',
          ruleTip: 'Spend 1 Star ⭐ to instantly repair any broken cart, door, or clockwork friend!',
          description: 'With three musical taps of the silver wrench, gears whirl and things work again!'
        }
      ],
      petCompanion: {
        name: 'Cogsworth',
        species: 'Clockwork Wind-Up Mouse',
        icon: '🐁',
        ability: 'Can squeeze through keyholes to unlock doors from the other side!'
      },
      backpack: [
        { name: 'Pocket of Shiny Brass Gears', icon: '⚙️', description: 'Used to fix things or distract hungry gremlins.' },
        { name: 'Sticky Bubblegum Putty', icon: '🍬', description: 'Can plug leaky pipes or stick things to ceilings.' },
        { name: 'Brass Magnifying Glass', icon: '🔍', description: 'Makes tiny clues look ten times bigger!' }
      ],
      goldCoins: 16,
      motto: 'If it’s broken, we can fix it together!',
      favoriteTreat: 'Crunchy caramel popcorn and fizzy ginger soda'
    }
  }
];
