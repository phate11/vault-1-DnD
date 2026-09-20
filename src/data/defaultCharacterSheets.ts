import { StandardCharacterSheet, KidCharacterSheet, formatModifier, SKILL_DEFINITIONS } from '../types/characterSheet';

export const DEFAULT_STANDARD_CHARACTERS: StandardCharacterSheet[] = [
  {
    id: 'char-valeros-ironheart',
    type: 'standard',
    name: 'Valeros Ironheart',
    classAndLevel: 'Fighter (Champion) 5',
    race: 'Human',
    background: 'Soldier',
    alignment: 'Neutral Good',
    xp: 6500,
    inspiration: true,
    proficiencyBonus: 3,
    armorClass: 18, // Plate armor (no shield with greatsword) or Splint + Shield
    initiative: 1,
    speed: '30 ft.',
    hpCurrent: 44,
    hpMax: 44,
    hpTemp: 0,
    hitDice: '5d10',
    deathSaves: {
      successes: 0,
      failures: 0
    },
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
      'Vehicles (Land)',
      'Dragonchess set',
      'Common, Dwarvish'
    ],
    attacks: [
      {
        id: 'atk-greatsword',
        name: 'Greatsword',
        atkBonus: 7,
        damage: '2d6 + 4',
        damageType: 'slashing',
        range: 'Melee (5 ft.)'
      },
      {
        id: 'atk-heavy-crossbow',
        name: 'Heavy Crossbow',
        atkBonus: 4,
        damage: '1d10 + 1',
        damageType: 'piercing',
        range: '100/400 ft.'
      },
      {
        id: 'atk-dagger',
        name: 'Dagger',
        atkBonus: 7,
        damage: '1d4 + 4',
        damageType: 'piercing',
        range: '20/60 ft.'
      }
    ],
    equipment: [
      'Splint Armor (AC 17)',
      'Greatsword',
      'Heavy Crossbow & 20 Bolts',
      'Dagger (x2)',
      "Explorer's Pack (Bedroll, Mess kit, 10 Torches, 10 Rations, Waterskin, 50 ft. Hempen Rope)",
      'Insignia of Rank (Sergeant)',
      'A trophy taken from a fallen enemy (broken dagger blade)',
      'Set of bone dice'
    ],
    currency: {
      cp: 25,
      sp: 40,
      ep: 0,
      gp: 185,
      pp: 5
    },
    featuresAndTraits: [
      'Fighting Style: Great Weapon Fighting (reroll 1s and 2s on damage dice with two-handed weapons)',
      'Second Wind: Regain 1d10 + 5 HP as a bonus action once per short rest',
      'Action Surge: Take one additional action on your turn once per short rest',
      'Martial Archetype: Champion',
      'Improved Critical: Weapon attacks score a critical hit on a roll of 19 or 20',
      'Extra Attack: Can attack twice whenever taking the Attack action on your turn'
    ],
    personality: {
      traits: 'I can stare down a hellhound without flinching. I face problems head-on; a simple direct solution is the best path.',
      ideals: 'Responsibility. I do what I must and obey just authority to protect those who cannot protect themselves.',
      bonds: 'Those who fight beside me are those worth dying for. I will never leave a comrade behind.',
      flaws: 'I have little patience for courtly etiquette and bureaucratic red tape. My temper runs hot when innocents are threatened.'
    }
  },
  {
    id: 'char-ellywick-timbers',
    type: 'standard',
    name: 'Ellywick Timbers',
    classAndLevel: 'Wizard (Evocation) 5',
    race: 'Rock Gnome',
    background: 'Sage',
    alignment: 'Chaotic Good',
    xp: 6500,
    inspiration: false,
    proficiencyBonus: 3,
    armorClass: 12, // 15 with Mage Armor
    initiative: 2,
    speed: '25 ft.',
    hpCurrent: 32,
    hpMax: 32,
    hpTemp: 0,
    hitDice: '5d6',
    deathSaves: {
      successes: 0,
      failures: 0
    },
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
      {
        id: 'atk-fire-bolt',
        name: 'Fire Bolt (Cantrip)',
        atkBonus: 7,
        damage: '2d10',
        damageType: 'fire',
        range: '120 ft.'
      },
      {
        id: 'atk-quarterstaff',
        name: 'Quarterstaff',
        atkBonus: 2,
        damage: '1d6 - 1',
        damageType: 'bludgeoning',
        range: 'Melee (5 ft.)'
      }
    ],
    spellcasting: {
      spellcastingClass: 'Wizard',
      spellAbility: 'INT',
      spellSaveDC: 15,
      spellAttackBonus: 7,
      slots: [
        { level: 1, total: 4, expended: 1 },
        { level: 2, total: 3, expended: 1 },
        { level: 3, total: 2, expended: 0 }
      ],
      spellsKnown: [
        'Cantrips: Fire Bolt, Prestidigitation, Mage Hand, Ray of Frost',
        '1st Level: Mage Armor, Shield, Magic Missile, Detect Magic, Thunderwave',
        '2nd Level: Misty Step, Scorching Ray, Mirror Image',
        '3rd Level: Fireball, Counterspell, Haste'
      ]
    },
    equipment: [
      'Spellbook bound in brass-reinforced dragonhide',
      'Quarterstaff carved with glowing astrological glyphs',
      'Component Pouch & Arcane Focus (Crystal Orb)',
      "Scholar's Pack (Book of lore, Ink & Quill, 10 Parchment sheets, Small bag of sand)",
      "Tinker's Tools & clockwork gizmos",
      'Potion of Healing (x2)'
    ],
    currency: {
      cp: 10,
      sp: 35,
      ep: 0,
      gp: 142,
      pp: 2
    },
    featuresAndTraits: [
      'Darkvision: 60 ft.',
      'Gnome Cunning: Advantage on all INT, WIS, and CHA saving throws against magic',
      'Artificer’s Lore: Double proficiency bonus to History checks related to magic items or alchemical objects',
      'Tinker: Can craft tiny clockwork clockwork firestarter, music box, or toy',
      'Arcane Recovery: Regain up to 3 spell slots on a short rest once per day',
      'Evocation Savant: Gold and time to copy evocation spells into spellbook is halved',
      'Sculpt Spells: Protect up to 4 allies from area-of-effect evocation spells (auto-succeed saving throws, take 0 damage)'
    ],
    personality: {
      traits: 'There is nothing I like better than a good riddle or ancient ruin waiting to be decoded. I talk very quickly when excited.',
      ideals: 'Knowledge. The path to power and self-improvement is through knowledge and sharing truths.',
      bonds: 'I have an ancient manuscript containing half a forgotten spell formula that I must decipher.',
      flaws: 'I overlook obvious social cues and danger when pursuing a fascinating arcane anomaly.'
    }
  },
  {
    id: 'char-kaelen-shadowstep',
    type: 'standard',
    name: 'Kaelen Shadowstep',
    classAndLevel: 'Rogue (Thief) 5',
    race: 'Wood Elf',
    background: 'Criminal (Burglar)',
    alignment: 'Chaotic Neutral',
    xp: 6500,
    inspiration: true,
    proficiencyBonus: 3,
    armorClass: 16, // Studded Leather + DEX 4
    initiative: 4,
    speed: '35 ft.',
    hpCurrent: 38,
    hpMax: 38,
    hpTemp: 0,
    hitDice: '5d8',
    deathSaves: {
      successes: 0,
      failures: 0
    },
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
      'Simple Weapons, Hand Crossbows, Longswords, Rapiers, Shortswords, Shortbows, Longbows',
      "Thieves' Tools (Expertise)",
      'Common, Elvish, Thieves’ Cant'
    ],
    attacks: [
      {
        id: 'atk-rapier',
        name: 'Rapier (Finesse)',
        atkBonus: 7,
        damage: '1d8 + 4',
        damageType: 'piercing',
        range: 'Melee (5 ft.)'
      },
      {
        id: 'atk-shortbow',
        name: 'Shortbow',
        atkBonus: 7,
        damage: '1d6 + 4',
        damageType: 'piercing',
        range: '80/320 ft.'
      },
      {
        id: 'atk-dagger-rogue',
        name: 'Dagger (Off-hand / Throw)',
        atkBonus: 7,
        damage: '1d4 + 4',
        damageType: 'piercing',
        range: '20/60 ft.'
      }
    ],
    equipment: [
      'Studded Leather Armor',
      'Rapier with silver wolf-pommel',
      'Shortbow & Quiver of 20 Arrows',
      'Daggers (x3)',
      "Thieves' Tools (fine picks, tension wrenches, small mirror, wire)",
      "Burglar's Pack (Crowbar, Hammer, 10 Pitons, Hooded Lantern, 50 ft. Silk Rope, Caltrops)",
      'Dark hooded cloak',
      'Grappling hook'
    ],
    currency: {
      cp: 50,
      sp: 90,
      ep: 0,
      gp: 215,
      pp: 8
    },
    featuresAndTraits: [
      'Expertise: Proficiency bonus doubled for Stealth, Perception, and Thieves’ Tools',
      'Sneak Attack (3d6): Deal extra damage once per turn to one target hit with advantage or adjacent ally',
      'Cunning Action: Bonus action to Dash, Disengage, or Hide on each of your turns',
      'Fast Hands: Use bonus action to make Sleight of Hand check, use thieves’ tools, or take Use an Object action',
      'Second-Story Work: Climbing no longer costs extra movement; running jump distance +4 ft.',
      'Uncanny Dodge: When an attacker you can see hits you with an attack, use reaction to halve the damage taken',
      'Fey Ancestry: Advantage on saving throws against being charmed, and magic cannot put you to sleep',
      'Mask of the Wild: Can attempt to hide even when only lightly obscured by natural phenomena'
    ],
    personality: {
      traits: 'I always keep my back against the wall and my coin pouch tucked close. I judge people by what they do, not what they say.',
      ideals: 'Freedom. Chains are meant to be broken, as are those who would forge them.',
      bonds: 'I stole a rare family heirloom from a corrupt noble and pledged to return it to the rightful clan.',
      flaws: 'If there is something valuable within reach, I can never resist weighing the odds of lifting it.'
    }
  }
];

export const DEFAULT_KID_CHARACTERS: KidCharacterSheet[] = [
  {
    id: 'char-kid-sir-leo',
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
      brawn: { name: 'Brawn', icon: '🦾', bonus: 3, hint: 'Smashing doors, heavy lifting, big heroic jumps!' },
      agility: { name: 'Agility', icon: '⚡', bonus: 1, hint: 'Dodging arrows, walking on slippery logs!' },
      heart: { name: 'Heart', icon: '❤️', bonus: 2, hint: 'Being brave, standing tall, eating spicy stew!' },
      smarts: { name: 'Smarts', icon: '🧠', bonus: 0, hint: 'Remembering castle maps, solving riddles!' },
      senses: { name: 'Senses', icon: '👁️', bonus: 1, hint: 'Hearing sneaky monsters, spotting hidden treasure!' },
      smile: { name: 'Smile', icon: '✨', bonus: 2, hint: 'Cheering up sad villagers, making loyal allies!' }
    },
    heroMoves: [
      {
        id: 'move-lion-strike',
        name: 'Golden Lion Strike',
        icon: '⚔️',
        actionType: 'Action',
        ruleTip: 'Roll d20 + Brawn (+3)! If you get 10 or more, deal 2 Hearts of damage!',
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
  },
  {
    id: 'char-kid-luna-starwhisper',
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
      brawn: { name: 'Brawn', icon: '🦾', bonus: 0, hint: 'Pushing heavy boulders (fairies use magic instead!)' },
      agility: { name: 'Agility', icon: '⚡', bonus: 2, hint: 'Fluttering through narrow keyholes, dodging nets!' },
      heart: { name: 'Heart', icon: '❤️', bonus: 1, hint: 'Staying cheerful in spooky haunted cellars!' },
      smarts: { name: 'Smarts', icon: '🧠', bonus: 3, hint: 'Reading secret spell scrolls, decoding fairy runes!' },
      senses: { name: 'Senses', icon: '👁️', bonus: 2, hint: 'Finding sparkly gemstones, listening to wind spirits!' },
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
      { name: 'Tiny Silver Bell', icon: '🔔', description: 'Rings with a cheerful sound that soothes angry beasts.' },
      { name: 'Pocket Notebook of Doodles', icon: '🎨', description: 'Full of drawings of magical creatures.' }
    ],
    goldCoins: 22,
    motto: 'A little kindness and a lot of sparkle can fix anything!',
    favoriteTreat: 'Strawberries dipped in wild blossom honey'
  },
  {
    id: 'char-kid-finn-swiftwood',
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
      brawn: { name: 'Brawn', icon: '🦾', bonus: 1, hint: 'Climbing tall oak trees, swimming across rapids!' },
      agility: { name: 'Agility', icon: '⚡', bonus: 3, hint: 'Shooting acorns with a sling, silent tiptoeing!' },
      heart: { name: 'Heart', icon: '❤️', bonus: 2, hint: 'Camping in the snow, enduring big hikes!' },
      smarts: { name: 'Smarts', icon: '🧠', bonus: 1, hint: 'Knowing which wild mushrooms are yummy or toxic!' },
      senses: { name: 'Senses', icon: '👁️', bonus: 3, hint: 'Tracking wolf prints, spotting owls in the dark!' },
      smile: { name: 'Smile', icon: '✨', bonus: 1, hint: 'Singing campfire tunes, whistling to songbirds!' }
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
      { name: 'Pocket of Acorns', icon: '🌰', description: 'Ammo for sling or tasty snack for woodland friends.' },
      { name: 'Herbal Bandage Poultice', icon: '🌿', description: 'Heals 1 Heart when wrapped on a scrape.' },
      { name: 'Spyglass of the Falcon', icon: '🔭', description: 'See things three miles away as if right in front!' },
      { name: 'Flint and Steel Kit', icon: '🔥', description: 'Starts cozy campfires in just two clicks.' }
    ],
    goldCoins: 18,
    motto: 'Listen to the forest, leave only footprints, take only memories!',
    favoriteTreat: 'Roasted hazelnuts and dried wild cherries'
  },
  {
    id: 'char-kid-drake-cinderheart',
    type: 'kids',
    name: 'Drake Cinderheart',
    heroTitle: 'The Friendly Dragon-kin Brawler',
    heroClass: 'Dragon Guardian',
    ageGroup: 'Ages 5 and Up',
    avatarEmoji: '🐉',
    themeColor: 'rose',
    heartsCurrent: 9,
    heartsMax: 9,
    heroStars: 2,
    heroStarsMax: 5,
    stats: {
      brawn: { name: 'Brawn', icon: '🦾', bonus: 3, hint: 'Big dragon hugs, smashing through icy walls!' },
      agility: { name: 'Agility', icon: '⚡', bonus: 1, hint: 'Dragon tail flips, leaping over molten lava!' },
      heart: { name: 'Heart', icon: '❤️', bonus: 3, hint: 'Immune to cold breezes, tough scaly skin!' },
      smarts: { name: 'Smarts', icon: '🧠', bonus: 0, hint: 'Figuring out clockwork puzzles with curiosity!' },
      senses: { name: 'Senses', icon: '👁️', bonus: 1, hint: 'Smelling smoke or roasting marshmallows miles away!' },
      smile: { name: 'Smile', icon: '✨', bonus: 2, hint: 'Warm friendly smile that melts the coldest hearts!' }
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
];

export function convertCharacterToMarkdown(sheet: StandardCharacterSheet | KidCharacterSheet): string {
  if (sheet.type === 'kids') {
    return generateKidSheetMarkdown(sheet);
  } else {
    return generateStandardSheetMarkdown(sheet);
  }
}

function generateKidSheetMarkdown(sheet: KidCharacterSheet): string {
  const heartIcons = Array(sheet.heartsMax)
    .fill(0)
    .map((_, i) => (i < sheet.heartsCurrent ? '❤️' : '🖤'))
    .join(' ');

  const starIcons = Array(sheet.heroStarsMax)
    .fill(0)
    .map((_, i) => (i < sheet.heroStars ? '⭐' : '☆'))
    .join(' ');

  return `---
title: "${sheet.name} - Kid Adventurer Sheet"
type: character-sheet
sheet-system: kids-dnd-5e
age-group: "Ages 5 and Up"
hero-class: "${sheet.heroClass}"
avatar: "${sheet.avatarEmoji}"
hearts: "${sheet.heartsCurrent}/${sheet.heartsMax}"
stars: "${sheet.heroStars}/${sheet.heroStarsMax}"
gold: ${sheet.goldCoins}
tags:
  - character
  - kids-dnd
  - adventurer
  - hero
folder: "Characters/Kids"
---

# ${sheet.avatarEmoji} ${sheet.name}
> *${sheet.heroTitle}* • **Role:** ${sheet.heroClass} • **Audience:** Ages 5+

---

## ❤️ Hero Vitals & Tokens

| Stat | Value | Description |
|---|---|---|
| **Health Hearts** | ${heartIcons} (${sheet.heartsCurrent}/${sheet.heartsMax}) | Tap or cross off hearts when taking damage! |
| **Hero Stars** | ${starIcons} (${sheet.heroStars}/${sheet.heroStarsMax}) | Spend 1 star to reroll any die or do something amazing! |
| **Shiny Gold Coins** | 🪙 **${sheet.goldCoins} Gold** | To buy yummy snacks, toys, and pet gear! |

---

## 🌟 The 6 Super-Stats (Roll d20 + Bonus!)

| Super-Stat | Bonus | What It Does |
|---|:---:|---|
| **${sheet.stats.brawn.icon} ${sheet.stats.brawn.name}** | **${formatModifier(sheet.stats.brawn.bonus)}** | ${sheet.stats.brawn.hint} |
| **${sheet.stats.agility.icon} ${sheet.stats.agility.name}** | **${formatModifier(sheet.stats.agility.bonus)}** | ${sheet.stats.agility.hint} |
| **${sheet.stats.heart.icon} ${sheet.stats.heart.name}** | **${formatModifier(sheet.stats.heart.bonus)}** | ${sheet.stats.heart.hint} |
| **${sheet.stats.smarts.icon} ${sheet.stats.smarts.name}** | **${formatModifier(sheet.stats.smarts.bonus)}** | ${sheet.stats.smarts.hint} |
| **${sheet.stats.senses.icon} ${sheet.stats.senses.name}** | **${formatModifier(sheet.stats.senses.bonus)}** | ${sheet.stats.senses.hint} |
| **${sheet.stats.smile.icon} ${sheet.stats.smile.name}** | **${formatModifier(sheet.stats.smile.bonus)}** | ${sheet.stats.smile.hint} |

> [!tip] How to Make a Check (For DMs & Parents)
> When your young adventurer tries something exciting, ask them to roll a **20-sided die (d20)** and add their Super-Stat bonus:
> - **5–9**: *Almost got it!* Something funny or unexpected happens, but they learn a clue.
> - **10–14**: *Success!* You pull off the heroic move cleanly.
> - **15+ / Natural 20**: *Super Awesome Hero Moment!* Award a Hero Star ⭐!

---

## ⚡ Hero Moves & Super Powers

${sheet.heroMoves
  .map(
    (m) => `### ${m.icon} ${m.name} (${m.actionType})
- **How to Roll:** \`${m.ruleTip}\`
- **Effect:** ${m.description}
`
  )
  .join('\n')}

---

${
  sheet.petCompanion
    ? `## 🐾 Pet Companion: ${sheet.petCompanion.icon} ${sheet.petCompanion.name}
- **Species:** ${sheet.petCompanion.species}
- **Special Companion Power:** ${sheet.petCompanion.ability}

---`
    : ''
}

## 🎒 Magic Backpack & Gear

${sheet.backpack.map((b) => `- **${b.icon} ${b.name}:** ${b.description}`).join('\n')}

---

## 📖 Hero Lore & Roleplay
- **Hero Motto:** *"${sheet.motto}"*
- **Favorite Treat / Snack:** ${sheet.favoriteTreat}
`;
}

function generateStandardSheetMarkdown(sheet: StandardCharacterSheet): string {
  const modStr = (score: number) => formatModifier(Math.floor((score - 10) / 2));

  return `---
title: "${sheet.name} - 5e Character Sheet"
type: character-sheet
sheet-system: dnd-5e-standard
name: "${sheet.name}"
class: "${sheet.classAndLevel}"
race: "${sheet.race}"
background: "${sheet.background}"
alignment: "${sheet.alignment}"
level: ${(() => {
  const match = sheet.classAndLevel.match(/\d+/);
  return match ? match[0] : '1';
})()}
ac: ${sheet.armorClass}
hp: "${sheet.hpCurrent}/${sheet.hpMax}"
speed: "${sheet.speed}"
initiative: ${formatModifier(sheet.initiative)}
proficiency-bonus: ${sheet.proficiencyBonus}
tags:
  - character
  - 5e-standard
  - player-character
folder: "Characters/Standard"
---

# 🛡️ ${sheet.name}
> **${sheet.race}** • **${sheet.classAndLevel}** • **${sheet.background}** • **${sheet.alignment}**

---

## 📊 Core Combat Vitals

| Armor Class | Initiative | Speed | Proficiency | Passive Perception | Hit Dice |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **${sheet.armorClass}** | **${formatModifier(sheet.initiative)}** | **${sheet.speed}** | **+${sheet.proficiencyBonus}** | **${sheet.passivePerception}** | **${sheet.hitDice}** |

- **Hit Points:** **${sheet.hpCurrent} / ${sheet.hpMax}** (Temp HP: ${sheet.hpTemp})
- **Inspiration:** ${sheet.inspiration ? '🌟 Inspired' : 'None'}
- **Death Saves:** Successes: [${'●'.repeat(sheet.deathSaves.successes)}${'○'.repeat(3 - sheet.deathSaves.successes)}] | Failures: [${'●'.repeat(sheet.deathSaves.failures)}${'○'.repeat(3 - sheet.deathSaves.failures)}]

---

## 🎲 Ability Scores & Saving Throws

| Ability | Score | Mod | Save |
|---|:---:|:---:|:---:|
| **Strength (STR)** | ${sheet.abilities.str.score} | **${modStr(sheet.abilities.str.score)}** | ${sheet.abilities.str.saveProficient ? `✅ ${formatModifier(sheet.abilities.str.modifier + sheet.proficiencyBonus)}` : formatModifier(sheet.abilities.str.modifier)} |
| **Dexterity (DEX)** | ${sheet.abilities.dex.score} | **${modStr(sheet.abilities.dex.score)}** | ${sheet.abilities.dex.saveProficient ? `✅ ${formatModifier(sheet.abilities.dex.modifier + sheet.proficiencyBonus)}` : formatModifier(sheet.abilities.dex.modifier)} |
| **Constitution (CON)** | ${sheet.abilities.con.score} | **${modStr(sheet.abilities.con.score)}** | ${sheet.abilities.con.saveProficient ? `✅ ${formatModifier(sheet.abilities.con.modifier + sheet.proficiencyBonus)}` : formatModifier(sheet.abilities.con.modifier)} |
| **Intelligence (INT)** | ${sheet.abilities.int.score} | **${modStr(sheet.abilities.int.score)}** | ${sheet.abilities.int.saveProficient ? `✅ ${formatModifier(sheet.abilities.int.modifier + sheet.proficiencyBonus)}` : formatModifier(sheet.abilities.int.modifier)} |
| **Wisdom (WIS)** | ${sheet.abilities.wis.score} | **${modStr(sheet.abilities.wis.score)}** | ${sheet.abilities.wis.saveProficient ? `✅ ${formatModifier(sheet.abilities.wis.modifier + sheet.proficiencyBonus)}` : formatModifier(sheet.abilities.wis.modifier)} |
| **Charisma (CHA)** | ${sheet.abilities.cha.score} | **${modStr(sheet.abilities.cha.score)}** | ${sheet.abilities.cha.saveProficient ? `✅ ${formatModifier(sheet.abilities.cha.modifier + sheet.proficiencyBonus)}` : formatModifier(sheet.abilities.cha.modifier)} |

---

## 🎯 Skill Proficiencies

| Skill | Ability | Prof | Total Mod |
|---|:---:|:---:|:---:|
${Object.entries(SKILL_DEFINITIONS)
  .map(([key, def]) => {
    const prof = sheet.skills[key];
    const isProf = !!prof?.proficient;
    const isExp = !!prof?.expertise;
    const abilityMod = sheet.abilities[def.ability].modifier;
    const total = abilityMod + (isExp ? sheet.proficiencyBonus * 2 : isProf ? sheet.proficiencyBonus : 0);
    const badge = isExp ? '⭐ Expertise' : isProf ? '✅ Prof' : '—';
    return `| **${def.label}** | ${def.ability.toUpperCase()} | ${badge} | **${formatModifier(total)}** |`;
  })
  .join('\n')}

---

## ⚔️ Attacks & Spellcasting

| Weapon / Attack | Atk Bonus | Damage & Type | Range |
|---|:---:|:---:|:---:|
${sheet.attacks.length > 0
  ? sheet.attacks.map((a) => `| **${a.name}** | **+${a.atkBonus}** | \`${a.damage}\` ${a.damageType} | ${a.range || 'Melee'} |`).join('\n')
  : '| *(Unassigned)* | — | — | — |'}

${
  sheet.spellcasting
    ? `### 🔮 Spellcasting (${sheet.spellcasting.spellcastingClass})
- **Spell Ability:** ${sheet.spellcasting.spellAbility} | **Spell Save DC:** **${sheet.spellcasting.spellSaveDC}** | **Spell Attack:** **+${sheet.spellcasting.spellAttackBonus}**
- **Spell Slots:** ${sheet.spellcasting.slots.map((s) => `Level ${s.level}: ${s.total - s.expended}/${s.total}`).join(' • ')}

#### Known & Prepared Spells:
${sheet.spellcasting.spellsKnown.length > 0 ? sheet.spellcasting.spellsKnown.map((sp) => `- ${sp}`).join('\n') : '- *(No spells prepared)*'}
`
    : ''
}

---

## 🎒 Equipment & Currency

- **Currency:** 🪙 **${sheet.currency.gp} GP** • **${sheet.currency.sp} SP** • **${sheet.currency.cp} CP** • **${sheet.currency.pp} PP**
- **Gear & Inventory:**
${sheet.equipment.length > 0 ? sheet.equipment.map((e) => `  - ${e}`).join('\n') : '  - *(No equipment entered)*'}

---

## 📜 Features & Traits

${sheet.featuresAndTraits.length > 0
  ? sheet.featuresAndTraits.map((f) => `- **${f.split(':')[0]}:** ${f.split(':')[1] || ''}`).join('\n')
  : '- *(No features or traits entered)*'}

---

## 🎭 Personality & Roleplay
- **Personality Traits:** ${sheet.personality.traits || '*(None specified)*'}
- **Ideals:** ${sheet.personality.ideals || '*(None specified)*'}
- **Bonds:** ${sheet.personality.bonds || '*(None specified)*'}
- **Flaws:** ${sheet.personality.flaws || '*(None specified)*'}
`;
}
