import React, { useState } from 'react';
import {
  Compass,
  MapPin,
  Sparkles,
  Swords,
  Scroll,
  Dices,
  Eye,
  EyeOff,
  ChevronRight,
  ChevronDown,
  Shield,
  Skull,
  User,
  ExternalLink,
  BookOpen,
  Dice5,
  RefreshCw,
  PlusCircle,
  FileText,
  Check,
  Flame,
  Moon,
  Sun,
  Crown
} from 'lucide-react';
import { VaultNote } from '../types';
import { parseAndRoll, DiceRollResult } from './QuickDiceTray';

export interface AdventurePreset {
  id: string;
  name: string;
  subtitle: string;
  levelRange: string;
  folderKeyword: string; // Used to filter notes in focus mode
  iconName: string;
  themeColor: string;
  overview: string;
  chapters: {
    id: string;
    title: string;
    noteTitle: string;
    level: string;
    summary: string;
    keyThreats: string[];
  }[];
  keyNpcs: {
    name: string;
    role: string;
    noteTitle: string;
    description: string;
  }[];
  signatureBoss: {
    name: string;
    cr: string;
    hp: number;
    ac: number;
    speed: string;
    noteTitle: string;
    attacks: { name: string; bonus: string; damage: string; type: string; dice: string }[];
    traits: string[];
  };
  randomTables: {
    scenes: string[];
    encounters: { name: string; cr: string; count: string; roll: string }[];
    weather: string[];
    rumors: string[];
    specialTitle: string;
    specialOptions: { title: string; result: string; details: string }[];
  };
}

export const ADVENTURE_PRESETS: AdventurePreset[] = [
  {
    id: 'curse-of-strahd',
    name: 'Curse of Strahd',
    subtitle: 'Gothic Horror in the Mists of Barovia',
    levelRange: 'Levels 1–10',
    folderKeyword: 'Curse of Strahd',
    iconName: 'Moon',
    themeColor: 'red',
    overview: 'Under raging storm clouds, the vampire Count Strahd von Zarovich stands silhouetted against the ancient walls of Castle Ravenloft. Trapped within the Demiplane of Dread, heroes must uncover sacred artifacts, read the Tarokka fortunes, and face the master of the castle.',
    chapters: [
      {
        id: 'cos-death-house',
        title: 'Prologue: Death House',
        noteTitle: 'Appendix B - Death House (Introductory Adventure)',
        level: 'Levels 1–3',
        summary: 'A decrepit, haunted townhouse concealing an ancient cannibalistic cult and a shambling mound in the wet basement catacombs.',
        keyThreats: ['Rose & Thorn Ghosts', 'Specter of the Nursemaid', 'Lorgoth the Decayer (Shambling Mound)']
      },
      {
        id: 'cos-village-barovia',
        title: 'Chapter 3: Village of Barovia',
        noteTitle: 'Chapter 3 - The Village of Barovia',
        level: 'Level 3',
        summary: 'Desolate village under the shadow of the Castle. Ireena Kolyana mourns her father while Strahd’s vampire spawn Doru screams beneath the church.',
        keyThreats: ['Doru the Vampire Spawn', 'Strahd Zombies', 'Mad Mary’s Grief']
      },
      {
        id: 'cos-vallaki',
        title: 'Chapter 5: The Town of Vallaki',
        noteTitle: 'Chapter 5 - The Town of Vallaki',
        level: 'Levels 4–5',
        summary: 'Policed by the ruthless Baron Vallakovich and his brutal festivals ("All Will Be Well!"), with Lady Wachter’s cult plotting in the shadows.',
        keyThreats: ['Izek Strazni & Demonic Arm', '6 Vampire Spawn in Coffin Shop', 'Fiona Wachter Cultists']
      },
      {
        id: 'cos-bonegrinder',
        title: 'Chapter 6: Old Bonegrinder',
        noteTitle: 'Chapter 6 - Old Bonegrinder',
        level: 'Level 4',
        summary: 'A decrepit windmill where Morgantha and her night hag coven bake children into addictive Dream Pastries.',
        keyThreats: ['Morgantha', 'Bella Sunbane', 'Offalia Wormwiggle (Night Hag Coven)']
      },
      {
        id: 'cos-argynvostholt',
        title: 'Chapter 7: Argynvostholt',
        noteTitle: 'Chapter 7 - Argynvostholt',
        level: 'Level 5',
        summary: 'Fortress of the fallen Order of the Silver Dragon, haunted by undead revenants fueled by relentless hatred for Strahd.',
        keyThreats: ['Vladimir Horngaard (Revenant)', 'Order of the Silver Dragon Revenants']
      },
      {
        id: 'cos-krezk',
        title: 'Chapter 8: Village of Krezk & Abbey',
        noteTitle: 'Chapter 8 - The Village of Krezk & Abbey of Saint Markovia',
        level: 'Level 5',
        summary: 'Walled commune beneath the Abbey of Saint Markovia, where an insane celestial Abbot grafts mongrelfolk to craft a flesh-golem bride.',
        keyThreats: ['The Abbot (Deva)', 'Vasilka (Flesh Golem)', 'Mongrelfolk Lunatics']
      },
      {
        id: 'cos-amber-temple',
        title: 'Chapter 13: The Amber Temple',
        noteTitle: 'Chapter 13 - The Amber Temple',
        level: 'Levels 8–9',
        summary: 'Subterranean vault of primordial evil frozen in sub-zero glaciers, guarded by Arcanaloth Neferon and 20 slumbering Dark Vestiges.',
        keyThreats: ['Arcanaloth Neferon', 'Exethanter the Senile Lich', 'Dark Vestige Corruptions']
      },
      {
        id: 'cos-castle-ravenloft',
        title: 'Chapter 4: Castle Ravenloft (Grand Finale)',
        noteTitle: 'Chapter 4 - Castle Ravenloft - Complete Master Guide',
        level: 'Levels 9–10',
        summary: 'The master fortress spanning 7 vertical wings and 88 numbered chambers from high spires to catacombs.',
        keyThreats: ['Count Strahd von Zarovich', 'Rahadin', 'Heart of Sorrow (50 HP)']
      }
    ],
    keyNpcs: [
      {
        name: 'Count Strahd von Zarovich',
        role: 'Darklord of Barovia',
        noteTitle: 'Strahd von Zarovich (Stat Block & Lair Actions)',
        description: 'First vampire of the realm, ancient ruler of Castle Ravenloft seeking Ireena Kolyana.'
      },
      {
        name: 'Rudolph van Richten',
        role: 'Legendary Monster Hunter',
        noteTitle: 'Curse of Strahd - Major NPCs & Allies',
        description: 'Disguised as Rictavio the carnival master in Vallaki, waiting for the opportune moment to strike.'
      },
      {
        name: 'Ezmerelda d’Avenir',
        role: 'Vistani Vampire Hunter',
        noteTitle: 'Curse of Strahd - Major NPCs & Allies',
        description: 'Van Richten’s brilliant protegée armed with silvered weapons and explosive wagon.'
      },
      {
        name: 'Madam Eva',
        role: 'Vistani Seer of Tser Pool',
        noteTitle: 'The Tarokka Deck - System & Reading Guide',
        description: 'Mysterious matriarch who reads the Tarokka deck to reveal the sacred artifacts and allies.'
      }
    ],
    signatureBoss: {
      name: 'Strahd von Zarovich',
      cr: 'CR 15 (13,000 XP)',
      hp: 144,
      ac: 16,
      speed: '30 ft., fly 60 ft. (hover)',
      noteTitle: 'Strahd von Zarovich (Stat Block & Lair Actions)',
      attacks: [
        { name: 'Unarmed Strike', bonus: '+9', damage: '2d8 + 4 bludgeoning', type: 'Bludgeoning + Grapple', dice: '2d8+4' },
        { name: 'Bite (Grappled/Incapacitated)', bonus: '+9', damage: '1d6 + 4 piercing + 3d6 necrotic', type: 'Piercing/Necrotic (Reduces Max HP)', dice: '1d6+4+3d6' },
        { name: 'Fireball (Spell)', bonus: 'DC 18 Dex', damage: '8d6 fire damage', type: 'Fire (20-ft radius)', dice: '8d6' }
      ],
      traits: [
        'Heart of Sorrow: First 50 damage taken transfers to Castle Ravenloft crystal.',
        'Regeneration: Regains 20 HP at start of turn unless in sunlight or running water.',
        'Misty Escape: When reduced to 0 HP outside coffin, transforms into mist.',
        'Lair Action: Phasing through walls/floors of Castle Ravenloft.'
      ]
    },
    randomTables: {
      scenes: [
        'A sudden freezing mist rolls in off Lake Zarovich, dimming torches to sickly orange embers.',
        'The sound of a galloping black carriage echo across the Svalich Woods; its interior is completely empty.',
        'A raven with blood-tipped feathers perches on an iron road sign, squawking urgently toward an overgrown side path.',
        'A derelict roadside shrine dedicated to the Morninglord defaced with dried blood and wolf pelts.'
      ],
      encounters: [
        { name: 'Dire Wolf Pack', cr: 'CR 1–3', count: '1 Dire Wolf + 2d4 Wolves', roll: '2d4' },
        { name: 'Strahd Zombies', cr: 'CR 1/4', count: '2d4 Strahd Zombies (Detachable limbs!)', roll: '2d4' },
        { name: 'Needle & Twig Blights', cr: 'CR 1/8', count: '1d6 Needle Blights + 2d6 Twig Blights', roll: '2d6' },
        { name: 'Skeletal Horseman', cr: 'CR 2', count: '1 Skeletal Knight on Warhorse Skeleton', roll: '1d1' },
        { name: 'Vampire Spawn Patrol', cr: 'CR 5', count: '1d2 Vampire Spawn hunting prey', roll: '1d2' }
      ],
      weather: [
        'Heavy Freezing Drizzle: Disadvantage on Perception checks reliant on sight beyond 60 ft.',
        'Svalich Choking Fog: Heavily obscured beyond 20 ft; extinguishing normal torchlight in 1d4 hours.',
        'Howling Mountain Gale: Flying creatures must land; ranged weapon attacks have disadvantage.',
        'Eerie Blood Moon: Dim crimson light; undead have advantage on initiative checks.'
      ],
      rumors: [
        'The Martikovs at the Blue Water Inn know secrets about the wereravens and the stolen winery gems.',
        'The Abbot in Krezk can bring the dead back to life, but his price is a piece of human flesh.',
        'Strahd cannot enter private residences without an invitation—unless the owner has perished.',
        'A sun-blade of pure platinum was hidden inside the catacombs of Castle Ravenloft before the fall.'
      ],
      specialTitle: '🎴 Live 5-Card Tarokka Fortune',
      specialOptions: [
        {
          title: 'Tome of Strahd',
          result: 'The Diviner (Suit of Stars)',
          details: 'Hidden in Castle Ravenloft within the secret library behind the study (Area K37).'
        },
        {
          title: 'Holy Symbol of Ravenkind',
          result: 'The Priest (Suit of Glyphs)',
          details: 'Resting within the chapel of Saint Markovia in the village of Krezk (Area S13).'
        },
        {
          title: 'The Sunsword',
          result: 'The Avenger (Suit of Swords)',
          details: 'Buried in the hollow trunk of the ancient Gulthias Tree atop Yester Hill (Area Y4).'
        },
        {
          title: 'Strahd’s Enemy (Allied Hero)',
          result: 'The Artifact (High Deck)',
          details: 'Rudolph van Richten, currently disguised as the bard Rictavio in Vallaki.'
        },
        {
          title: 'Strahd’s Location in Ravenloft',
          result: 'The Darklord (High Deck)',
          details: 'Standing in his ancestral tomb in the deepest catacombs beneath Ravenloft (Area K86).'
        }
      ]
    }
  },
  {
    id: 'lost-mine-of-phandelver',
    name: 'Lost Mine of Phandelver',
    subtitle: 'Frontier Adventure & The Wave Echo Cave',
    levelRange: 'Levels 1–5',
    folderKeyword: 'Lost Mine of Phandelver',
    iconName: 'Compass',
    themeColor: 'emerald',
    overview: 'In the frontier town of Phandalin, rough miners and cutthroat bandits vie for control. The Rockseeker dwarf brothers have rediscovered the legendary Wave Echo Cave and the Forge of Spells, but a shadowy drow known as the Black Spider has struck from the shadows.',
    chapters: [
      {
        id: 'lmop-part1',
        title: 'Part 1: Goblin Arrows',
        noteTitle: 'LMoP Part 1 - Goblin Arrows',
        level: 'Level 1',
        summary: 'Ambush on the Triboar Trail followed by a raid on the Cragmaw Hideout cavern to rescue Sildar Hallwinter.',
        keyThreats: ['Goblin Snipers', 'Wolves in the Kennel', 'Klarg the Bugbear Chief']
      },
      {
        id: 'lmop-part2',
        title: 'Part 2: Phandalin & Redbrands',
        noteTitle: 'LMoP Part 2 - Phandalin & Redbrand Hideout',
        level: 'Level 2',
        summary: 'Investigating town rumors, confronting Redbrand ruffians at the Sleeping Giant tap house, and delving into Tresendar Manor.',
        keyThreats: ['Redbrand Ruffians', 'Nothic in the Crevasse', 'Glasstaff (Iarno Albrek)']
      },
      {
        id: 'lmop-part3',
        title: 'Part 3: The Spider’s Web',
        noteTitle: 'LMoP Part 3 - The Spider\'s Web',
        level: 'Levels 3–4',
        summary: 'Exploration of the Sword Mountains: Agatha’s Lair, Old Owl Well (Hamun Kost), Thundertree, Wyvern Tor, and Cragmaw Castle.',
        keyThreats: ['Venomfang (Young Green Dragon)', 'King Grol (Bugbear)', 'Hamun Kost (Necromancer)']
      },
      {
        id: 'lmop-part4',
        title: 'Part 4: Wave Echo Cave',
        noteTitle: 'LMoP Part 4 - Wave Echo Cave',
        level: 'Levels 4–5',
        summary: 'Delving the legendary lost dwarven and gnomish mine, battling undead, finding the Forge of Spells, and confronting Nezznar.',
        keyThreats: ['Nezznar the Black Spider', 'Spectator Guardian', 'Flameskull & Zombies']
      }
    ],
    keyNpcs: [
      {
        name: 'Nezznar the Black Spider',
        role: 'Mastermind & Drow Infiltrator',
        noteTitle: 'LMoP NPCs & Monsters Stat Blocks',
        description: 'Ruthless drow wizard determined to harness the secrets of the Forge of Spells.'
      },
      {
        name: 'Sildar Hallwinter',
        role: 'Lords’ Alliance Agent',
        noteTitle: 'LMoP NPCs & Monsters Stat Blocks',
        description: 'Rescued warrior seeking to restore law and order to the lawless frontier of Phandalin.'
      },
      {
        name: 'Glasstaff (Iarno Albrek)',
        role: 'Corrupt Lords’ Alliance Wizard',
        noteTitle: 'LMoP NPCs & Monsters Stat Blocks',
        description: 'Former agent who turned traitor to found the Redbrand gang, wielding a magical glass staff.'
      },
      {
        name: 'Venomfang',
        role: 'Young Green Dragon',
        noteTitle: 'LMoP NPCs & Monsters Stat Blocks',
        description: 'Cunning dragon nesting in the ruined tower of Thundertree, surrounded by ash zombies.'
      }
    ],
    signatureBoss: {
      name: 'Nezznar the Black Spider',
      cr: 'CR 2 (450 XP)',
      hp: 27,
      ac: 11,
      speed: '30 ft.',
      noteTitle: 'LMoP NPCs & Monsters Stat Blocks',
      attacks: [
        { name: 'Spider Staff', bonus: '+3', damage: '1d6 + 1 bludgeoning + 1d6 poison', type: 'Bludgeoning + Poison', dice: '1d6+1+1d6' },
        { name: 'Ray of Frost (Cantrip)', bonus: '+5', damage: '2d8 cold damage', type: 'Cold (Speed -10 ft)', dice: '2d8' },
        { name: 'Web (2nd Level Spell)', bonus: 'DC 13 Dex', damage: '20-ft cube restrained', type: 'Restrained in Webbing', dice: '1d20' }
      ],
      traits: [
        'Spellcasting (DC 13): Casts darkness, invisibility, suggestion, web, magic missile.',
        'Fey Ancestry: Advantage on saving throws vs charmed; magic cannot put to sleep.',
        'Sunlight Sensitivity: Disadvantage on attack rolls and Perception in direct sunlight.',
        'Giant Spiders: Fights accompanied by 2 Giant Spiders.'
      ]
    },
    randomTables: {
      scenes: [
        'A wagon wheel from a looted merchant cart lies shattered in the ditch of the Triboar Trail.',
        'Smoke curls lazily from a chimney in the ruins of Thundertree, where dragon cultists hold vigil.',
        'Miner rumors fly in the Stonehill Inn regarding strange singing heard from Old Owl Well.',
        'An abandoned red cloak soaked in mud is pinned to a fencepost outside Tresendar Manor.'
      ],
      encounters: [
        { name: 'Cragmaw Goblin Ambush', cr: 'CR 1/4', count: '1d4 + 2 Goblins', roll: '1d4+2' },
        { name: 'Redbrand Ruffians', cr: 'CR 1/2', count: '1d4 Redbrand thugs with multiattack', roll: '1d4' },
        { name: 'Hobgoblin Patrol', cr: 'CR 1/2', count: '3 Hobgoblins with longbows & martial advantage', roll: '1d3' },
        { name: 'Stirges in the Cave', cr: 'CR 1/8', count: '2d4 Stirges clinging to stalactites', roll: '2d4' },
        { name: 'Ogre & Goblins at Wyvern Tor', cr: 'CR 2', count: '1 Ogre + 1d4 Orcs', roll: '1d4' }
      ],
      weather: [
        'Crisp Autumn Sun: Clear sight up to 2 miles across the rolling Sword Mountains.',
        'Driving Rainstorm: Mud turns roads to difficult terrain; torches extinguish in 30 minutes.',
        'Thick Morning Mountain Mist: Limits visibility to 30 ft; stealth checks have advantage.',
        'Thunder and Lightning: Thunder booms mask sound of clanking armor and footsteps.'
      ],
      rumors: [
        'Gundren Rockseeker was dragged off to Cragmaw Castle, but nobody knows its exact coordinates in Neverwinter Wood.',
        'Agatha the banshee knows everything, but she only answers those who bring her a gift of silver.',
        'The Forge of Spells can turn ordinary steel blades into +1 magic weapons for a full day.',
        'Glasstaff wears robes of blue silk and always keeps a pet rat nearby as a spy.'
      ],
      specialTitle: '⛏️ Wave Echo Cave Chamber Generator',
      specialOptions: [
        {
          title: 'Chamber 1: The Flooded Tunnel',
          result: 'Boiling Surf & Steam',
          details: 'Waves crash against the rock every 2 minutes with deafening boom. DC 12 Athletics to traverse slippery ledge.'
        },
        {
          title: 'Chamber 2: Smelter Cavern',
          result: 'Flameskull Vigil',
          details: 'Green flames illuminate 8 dormant skeletons. When entered, the Flameskull shrieks and casts Fireball!'
        },
        {
          title: 'Chamber 3: The Starry Cavern',
          result: 'Mica Ceiling & Spectator',
          details: 'Glistening ceiling looks like night sky. A friendly but delusional Spectator guards the magical brass brazier.'
        },
        {
          title: 'Chamber 4: Temple of Dumathoin',
          result: 'Black Spider Ambush',
          details: 'Nezznar waits in the shadows of the dwarven god’s altar with 2 Giant Spiders perched on pillars.'
        }
      ]
    }
  },
  {
    id: 'glory-of-the-giants',
    name: 'Glory of the Giants',
    subtitle: 'Titans, Elemental Enclaves & Mythic Scions',
    levelRange: 'Levels 1–16+',
    folderKeyword: 'Glory of the Giants',
    iconName: 'Crown',
    themeColor: 'amber',
    overview: 'Delve into the colossal lore of the giant god Annam All-Father, explore 18 fantastical enclaves from the Cloud City of Serenity to the World-Spindle, decipher ancient Rune Magic, and confront the slumbering Scions of the Giant Gods.',
    chapters: [
      {
        id: 'giant-lore-rules',
        title: 'Giant Lore, Ordning & Runes',
        noteTitle: 'Glory of the Giants - Giant Lore, Ordning & Roleplaying Guide',
        level: 'All Levels',
        summary: 'Giant hierarchy, ancient runic power, social etiquette, bag contents, and roleplaying titan characters.',
        keyThreats: ['Shattered Ordning Disputes', 'Rune Magic Traps']
      },
      {
        id: 'giant-enclaves-p1',
        title: 'Enclaves Part 1 (Cloud, Fire, Frost)',
        noteTitle: 'Glory of the Giants - Enclaves & Settlements (Part 1)',
        level: 'Levels 5–11',
        summary: 'Six monumental locations including the Cloud City of Serenity, Endless Spire, Karontor’s Hold, and Rimespire.',
        keyThreats: ['Cloud Giant Gamblers', 'Fire Giant Dreadnoughts', 'Everlasting One Frost Giants']
      },
      {
        id: 'giant-enclaves-p2',
        title: 'Enclaves Part 2 (Sea, Storm, Space, Sun)',
        noteTitle: 'Glory of the Giants - Enclaves & Settlements (Part 2)',
        level: 'Levels 10–16',
        summary: 'Planar titan strongholds including the Star-Grave, World-Spindle, Sunken Cradle, and Tempest Barracks.',
        keyThreats: ['Storm Giant Quintessents', 'Runic Colossus (CR 21)', 'Troll Amalgams (CR 17)']
      },
      {
        id: 'giant-scions-bosses',
        title: 'Scions of Giants’ Gods & Mythic Cradles',
        noteTitle: 'Scions of Giants\' Gods & Cradles - Mythic Boss Encounters',
        level: 'Levels 14–20',
        summary: 'The primordial avatar scions of Stronmaus, Surtr, Thrym, Memnor, Skoraeus, and Grolantor with apocalyptic regional effects.',
        keyThreats: ['Colossal Scion of Stronmaus (CR 27)', 'Scion of Surtr (CR 25)', 'Gargantua (CR 21)']
      }
    ],
    keyNpcs: [
      {
        name: 'Scion of Stronmaus',
        role: 'Primordial Avatar of Storms',
        noteTitle: 'Scions of Giants\' Gods & Cradles - Mythic Boss Encounters',
        description: 'Gargantuan elemental titan of the upper atmosphere wielding lightning bolts that level mountain ranges.'
      },
      {
        name: 'Cloud Giant Destiny Gambler',
        role: 'Fated Seer of Serenity',
        noteTitle: 'Glory of the Giants Bestiary (A to F) - Stat Blocks',
        description: 'Manipulates probability and destiny through runic coin tosses atop floating cloud castles.'
      },
      {
        name: 'Flesh Colossus',
        role: 'Construct of Forgotten Battles',
        noteTitle: 'Glory of the Giants Bestiary (A to F) - Stat Blocks',
        description: 'A CR 20 horror assembled from titan bones and sinew by desperate hill giant necromancers.'
      }
    ],
    signatureBoss: {
      name: 'Scion of Surtr',
      cr: 'CR 25 (75,000 XP)',
      hp: 444,
      ac: 20,
      speed: '40 ft., climb 40 ft.',
      noteTitle: 'Scions of Giants\' Gods & Cradles - Mythic Boss Encounters',
      attacks: [
        { name: 'Colossal Flame Greatsword', bonus: '+17', damage: '4d12 + 9 slashing + 4d8 fire', type: 'Slashing + Fire (15-ft reach)', dice: '4d12+9+4d8' },
        { name: 'Magma Volley', bonus: 'DC 23 Dex', damage: '10d6 fire + 10d6 bludgeoning', type: 'Magma Eruption in 30-ft radius', dice: '10d6+10d6' }
      ],
      traits: [
        'Volcanic Aura: Touching or hitting the Scion within 10 ft deals 15 fire damage.',
        'Legendary Resistance (3/Day): Auto-succeeds on failed saving throw.',
        'Lair Action: Fissures erupt spewing boiling lava (55 fire damage).'
      ]
    },
    randomTables: {
      scenes: [
        'A boulder the size of a tavern sits half-buried in the tundra, carved with the glowing blue Haug (Hill) rune.',
        'A cloud fortress drifts silently overhead, casting a shadow that turns midday into cold twilight.',
        'Massive 20-foot footprints filled with melted snow and sulfur lead into a fissure in the mountainside.',
        'An abandoned giant campsite with a spit roast made from an entire felled redwood tree.'
      ],
      encounters: [
        { name: 'Roaming Frost Giant Hunters', cr: 'CR 8', count: '1d2 Frost Giants with Winter Wolves', roll: '1d2' },
        { name: 'Fire Giant Dreadnought Patrol', cr: 'CR 14', count: '1 Fire Giant Dreadnought + 2 Hell Hounds', roll: '1d1' },
        { name: 'Troll Amalgam Stalker', cr: 'CR 17', count: '1 Troll Amalgam (Regenerates 20 HP/turn)', roll: '1d1' },
        { name: 'Rune Carver Scouts', cr: 'CR 5', count: '2 Stone Giant Artisans carving wards', roll: '1d2' }
      ],
      weather: [
        'Runic Blizzard: Magical cold reduces movement by 10 ft; fire spells deal half damage.',
        'Volcanic Ashfall: Visibility limited to 40 ft; breathing without wet cloth causes coughing.',
        'Stronmaus Lightning Tempest: Random lightning strikes terrain every 10 minutes (8d6 damage).',
        'Calm High Mountain Ether: Unnaturally serene; sound echoes for 5 leagues across the peaks.'
      ],
      rumors: [
        'The giant king has decreed that any small-folk who brings an intact dragon skull will receive runic boons.',
        'In the depths of the World-Spindle, a colossal spindle spins the destinies of planar realms.',
        'A bag stolen from a hill giant contained a live cow, an iron cauldron, and a glowing magical ring.',
        'Striking a giant rune with an adamantine weapon can absorb its elemental charge.'
      ],
      specialTitle: '🎒 1d100 Giant Bag Contents Roll',
      specialOptions: [
        {
          title: 'Roll: 18 (Food & Game)',
          result: 'Whole Salted Elk & Spiced Turnips',
          details: 'Wrapped in canvas burlap; provides 30 days of rations for Medium humanoids.'
        },
        {
          title: 'Roll: 42 (Curiosity)',
          result: 'Humanoid Shield Used as a Brooch',
          details: 'A polished +1 steel kite shield with a silver heraldic crest, bent into a giant cloak pin.'
        },
        {
          title: 'Roll: 77 (Runic Treasure)',
          result: 'Petrified Dragon Egg with Ild (Fire) Rune',
          details: 'Emits gentle warmth; acts as a permanent heat source and spellcasting focus.'
        },
        {
          title: 'Roll: 96 (Living Hazard)',
          result: 'Sleeping Giant Badger in a Sack',
          details: 'Wakes up furious if shaken; immediately attacks the nearest creature.'
        }
      ]
    }
  },
  {
    id: 'spelljammer-astral',
    name: 'Spelljammer: Astral Voyages',
    subtitle: 'Wildspace Galleons, Astral Sea & Cosmic Horrors',
    levelRange: 'Levels 5–15',
    folderKeyword: 'Spelljammer',
    iconName: 'Sparkles',
    themeColor: 'purple',
    overview: 'Sail the ethereal astral winds aboard galleons and nautiloids powered by magical spelljamming helms. Encounter space clowns, lunar dragons, clockwork autognomes, and the dreaded cosmic horrors of the void.',
    chapters: [
      {
        id: 'astral-encounters',
        title: 'Spacefarer Rules & Wildspace',
        noteTitle: 'Boo\'s Astral Encounters & Spacefarer Rules',
        level: 'All Levels',
        summary: 'Air envelope mechanics, gravity planes, ship-to-ship boarding rules, and d100 random encounter tables.',
        keyThreats: ['Air Envelope Depletion', 'Void Scavvers', 'Ship Grappling Gauntlets']
      },
      {
        id: 'astral-bestiary-p1',
        title: 'Astral Menagerie Part 1 (A to G)',
        noteTitle: 'Boo\'s Astral Menagerie - Bestiary Part 1 (A to G)',
        level: 'Levels 1–18',
        summary: 'Aartuks, Astral Elves, Autognomes with malfunction tables, B’rohg, Chwinga astronauts, and Cosmic Horrors.',
        keyThreats: ['Cosmic Horror (CR 18)', 'Astral Elf Star Priests', 'Eye Mongers']
      },
      {
        id: 'astral-bestiary-p2',
        title: 'Astral Menagerie Part 2 (G to P)',
        noteTitle: 'Boo\'s Astral Menagerie - Bestiary Part 2 (G to P)',
        level: 'Levels 3–19',
        summary: 'Githyanki buccaneers, space whale Kindori, Ancient Lunar Dragons, Neh-thalggu brain collectors, and Plasmoids.',
        keyThreats: ['Ancient Lunar Dragon (CR 19)', 'Neh-thalggu (Brain Collector)', 'Jammer Leeches']
      },
      {
        id: 'astral-bestiary-p3',
        title: 'Astral Menagerie Part 3 (P to Z)',
        noteTitle: 'Boo\'s Astral Menagerie - Bestiary Part 3 (P to Z)',
        level: 'Levels 2–21',
        summary: 'Ancient Solar Dragons, Space Clowns, Giant Space Hamsters, Vampirate swashbucklers, and Zodar Wish-casters.',
        keyThreats: ['Ancient Solar Dragon (CR 21)', 'Zodar (CR 16 Wish Caster)', 'Vampirates']
      }
    ],
    keyNpcs: [
      {
        name: 'Cosmic Horror',
        role: 'Titan of the Deep Astral Void',
        noteTitle: 'Boo\'s Astral Menagerie - Bestiary Part 1 (A to G)',
        description: 'Gargantuan eldritch monstrosity with crushing tentacles and psychic whispering madness.'
      },
      {
        name: 'Zodar',
        role: 'Silent Enigma of the Multiverse',
        noteTitle: 'Boo\'s Astral Menagerie - Bestiary Part 3 (P to Z)',
        description: 'Immortal obsidian construct that speaks only three times in its lifespan, each time granting a Wish spell.'
      },
      {
        name: 'Ancient Solar Dragon',
        role: 'Sovereign of Wildspace Stars',
        noteTitle: 'Boo\'s Astral Menagerie - Bestiary Part 3 (P to Z)',
        description: 'Majestic celestial dragon wrapped in thermonuclear radiation, nesting inside solar coronas.'
      }
    ],
    signatureBoss: {
      name: 'Cosmic Horror',
      cr: 'CR 18 (20,000 XP)',
      hp: 280,
      ac: 15,
      speed: 'fly 80 ft. (hover)',
      noteTitle: 'Boo\'s Astral Menagerie - Bestiary Part 1 (A to G)',
      attacks: [
        { name: 'Tentacle Strike', bonus: '+13', damage: '3d10 + 7 force', type: 'Force (Reach 30 ft, Grapples)', dice: '3d10+7' },
        { name: 'Psychic Whispers', bonus: 'DC 19 Wis', damage: '7d8 psychic damage', type: 'Psychic (Target is Incapacitated)', dice: '7d8' }
      ],
      traits: [
        'Legendary Resistance (3/Day): Auto-succeeds on saving throw.',
        'Void Camouflage: Invisible while moving through dark vacuum.',
        'Crushing Gravity: Grappled targets take 22 bludgeoning at start of each turn.'
      ]
    },
    randomTables: {
      scenes: [
        'A derelict Nautiloid ship drifts silently, its air envelope tainted green and foul-smelling.',
        'A pod of gentle Kindori space whales glides past, carrying miniature coral ecosystems on their backs.',
        'A dead god’s petrified visage floating in the silver ether, carved with ancient Githyanki pirate runes.',
        'A Wildspace comet streaks past leaving a wake of shimmering crystal dust worth 500 gp to alchemists.'
      ],
      encounters: [
        { name: 'Vampirate Raiding Sloop', cr: 'CR 4', count: '1 Vampirate Captain + 1d4 Vampirates', roll: '1d4' },
        { name: 'Githyanki Star Seer Boarding Party', cr: 'CR 7', count: '1 Githyanki Star Seer + 3 Buccaneers', roll: '1d1' },
        { name: 'Space Clown Carnival Boat', cr: 'CR 2', count: '1d6 Space Clowns with ray guns', roll: '1d6' },
        { name: 'Star Scavver Pack', cr: 'CR 1', count: '2d4 Gray Scavvers drawn by blood in the air', roll: '2d4' }
      ],
      weather: [
        'Foul Air Envelope: Characters are poisoned and have disadvantage on ability checks.',
        'Solar Flares: Radiant sparks ignite exposed sails; DC 14 Dex save or take 3d6 radiant.',
        'Silver Fog of the Astral Sea: Timeless realm; hunger and thirst cease while in this cloud.',
        'Psychic Wind: DC 15 Int save or spun off course 1d100 leagues with short-term madness.'
      ],
      rumors: [
        'A Zodar was spotted standing motionless on an asteroid near the Bhorian Belt.',
        'The Reigar war-artist is willing to pay 10,000 platinum for a live juvenile lunar dragon.',
        'Spelljamming helms will short out if brought within 100 yards of an antimagic dreadnought.',
        'A giant space hamster can be tamed with fermented honey-cakes and gentle singing.'
      ],
      specialTitle: '🚀 Wildspace Ship Encounter Generator',
      specialOptions: [
        {
          title: 'Ship Type: Hammerhead',
          result: 'Dwarven Mining Consortium',
          details: 'Armored ram bow; trading rough diamonds for fresh water and enchanted ale.'
        },
        {
          title: 'Ship Type: Squid Ship',
          result: 'Mercane Trading Conglomerate',
          details: 'Exotic magic item auction on deck. Crewed by 8 docile autognomes and 2 giant giff guards.'
        },
        {
          title: 'Ship Type: Damselfly',
          result: 'Giff Mercenary Gunboat',
          details: 'Armed with 4 smokepowder cannons. Seeking bounties on astral pirate rogues.'
        },
        {
          title: 'Ship Type: Nightspider',
          result: 'Neogi Slaver Ambush',
          details: 'Stealthing behind an asteroid with grappling ballistas and mind-enslaving masters.'
        }
      ]
    }
  },
  {
    id: 'monsters-multiverse',
    name: 'Monsters of the Multiverse',
    subtitle: 'Planar Bestiary, 33 Races & Archfiends',
    levelRange: 'All Tiers (CR 0–26)',
    folderKeyword: 'Monsters of the Multiverse',
    iconName: 'Flame',
    themeColor: 'orange',
    overview: 'The definitive multiversal collection containing 33 fantastical player races and 250+ updated monster stat blocks. From demon lords and archdevils to the inevitable Marut of Sigil, explore infinite encounters across every plane.',
    chapters: [
      {
        id: 'motm-races',
        title: 'Fantastical Races (Parts 1–3)',
        noteTitle: 'Monsters of the Multiverse - Fantastical Races (Part 1: Aarakocra to Eladrin)',
        level: 'Character Creation',
        summary: '33 playable races including Aarakocra, Eladrin, Genasi, Gith, Harengon, Shadar-kai, and Yuan-ti with modern PB scaling.',
        keyThreats: ['Custom Origins', 'Fey & Monstrous Lineages']
      },
      {
        id: 'motm-bestiary',
        title: 'Unified Bestiary (Parts 1–4)',
        noteTitle: 'Monsters of the Multiverse - Bestiary Part 1 (A to C)',
        level: 'CR 0–26',
        summary: '250+ monsters rebalanced with bonus action economy, action-oriented spellcasting, and force damage.',
        keyThreats: ['Demon Lords (Orcus, Demogorgon)', 'Archdevils (Zariel, Hutijin)', 'Inevitable Marut (CR 25)']
      },
      {
        id: 'motm-appendix',
        title: 'Appendix: Type, CR & Biome Lists',
        noteTitle: 'Monsters of the Multiverse - Appendix: Monster Lists (Type, CR & Environment)',
        level: 'DM Reference',
        summary: 'Master indexing cross-referenced by 14 creature types, CR 0 to 26, and 11 environments.',
        keyThreats: ['Instant Encounter Rosters', 'Biome Classification']
      },
      {
        id: 'motm-dm-screen',
        title: 'DM Screen & Tactical Tables',
        noteTitle: 'Monsters of the Multiverse - DM Encounter Tables & Tactical Guide',
        level: 'Tactical DM Hub',
        summary: 'Combat mechanics guide, 1d8 random tables across the planes, and Archfiend quick reference matrix.',
        keyThreats: ['Planar Rifts', 'Demon Lord Cultists']
      }
    ],
    keyNpcs: [
      {
        name: 'Orcus',
        role: 'Demon Prince of Undeath',
        noteTitle: 'Monsters of the Multiverse - Bestiary Part 3 (H to O)',
        description: 'Lord of Thanatos wielding the Wand of Orcus; conjures 500 HP of undead and casts Power Word Kill.'
      },
      {
        name: 'Zariel',
        role: 'Archduke of Avernus',
        noteTitle: 'Monsters of the Multiverse - Bestiary Part 4 (P to Z)',
        description: 'Fallen solar commanding the infernal armies in the eternal Blood War with flaming flail and longsword.'
      },
      {
        name: 'Marut',
        role: 'The Absolute Inevitable',
        noteTitle: 'Monsters of the Multiverse - Bestiary Part 3 (H to O)',
        description: 'Primus-forged juggernaut that automatically hits for 60 force damage and banishes contract-breakers to Sigil.'
      }
    ],
    signatureBoss: {
      name: 'Marut',
      cr: 'CR 25 (75,000 XP)',
      hp: 432,
      ac: 22,
      speed: '40 ft., fly 30 ft. (hover)',
      noteTitle: 'Monsters of the Multiverse - Bestiary Part 3 (H to O)',
      attacks: [
        { name: 'Unerring Slam (Automatic Hit!)', bonus: 'Auto-Hit', damage: '60 force damage', type: 'Force (Automatic Hit! Pushes 5 ft)', dice: '60' },
        { name: 'Blazing Edict (Recharge 5–6)', bonus: 'DC 20 Wis', damage: '45 radiant + Stunned', type: 'Radiant (60-ft cube)', dice: '45' }
      ],
      traits: [
        'Immutable Form: Immune to any spell or effect that would alter its form.',
        'Plane Shift (3/Day): Banishes unwilling target to the Hall of Concordance in Sigil (DC 20 Cha).',
        'Legendary Resistance (3/Day): Auto-succeeds on saving throw.'
      ]
    },
    randomTables: {
      scenes: [
        'A planar tear in the fabric of reality reveals the smoldering red basalt wastes of Avernus.',
        'A golden mechanical bird crafted in Sigil perches on a signpost, reciting a legal contract in Mechanus binary.',
        'The air grows thick with pungent sulfur and sweet rotten honey as a rift to the Abyss expands.',
        'A traveling Githyanki monk meditates suspended 5 feet above the ground, eyes glowing with psionic flame.'
      ],
      encounters: [
        { name: 'Abyssal Incursion (Rutterkin & Babau)', cr: 'CR 4', count: '1 Babau + 1d4 Rutterkin', roll: '1d4' },
        { name: 'Infernal Bounty (Orthon Hunter)', cr: 'CR 10', count: '1 Orthon with paralysis crossbow', roll: '1d1' },
        { name: 'Shadowfell Sorrowsworn', cr: 'CR 7', count: '1 Lost Sorrowsworn + 2 Wretched', roll: '1d2' },
        { name: 'Underdark Mindwitness', cr: 'CR 5', count: '1 Mindwitness + 1 Swarm of Cranium Rats', roll: '1d1' }
      ],
      weather: [
        'Avernus Ashfall: Flakes of burning brimstone deal 1 fire damage per minute without cover.',
        'Pandemonium Wind: Howling madness forces DC 13 Wis saves or short-term paranoia.',
        'Mechanus Geometric Calm: Reality locks into perfect crystalline symmetry; all rolls of 1–4 count as 5.',
        'Limbo Chaos Flux: Terrain shifts from solid stone to boiling soup on a d6 check every hour.'
      ],
      rumors: [
        'A Marut inevitable was dispatched from Sigil to collect the soul of an immortal archmage.',
        'The demon lord Juiblex has seeped into the city sewers, dissolving iron water pipes into sludge.',
        'A Sibriex floating in an abyssal lake is granting wishes in exchange for horrific physical flesh warps.',
        'Hutijin commands two legions of pit fiends in Cania and despises flattery.'
      ],
      specialTitle: '🧬 Sibriex Flesh Warping Mutation Generator',
      specialOptions: [
        {
          title: 'Mutation Roll: 28 (Wings Sprout)',
          result: 'Bat-like Leathery Wings Sprout',
          details: 'Target gains a flying speed of 30 ft, but clothing and armor must be custom tailored.'
        },
        {
          title: 'Mutation Roll: 42 (Runic Scales)',
          result: 'Bark-like Scales (+1 AC, -2 Cha)',
          details: 'Hardens skin against weapons but makes facial expressions rigid and monstrous.'
        },
        {
          title: 'Mutation Roll: 52 (Tentacle Arms)',
          result: 'Tentacle Fingers (+5 ft Reach)',
          details: 'Arms stretch into boneless muscular tendrils granting +5 ft melee reach.'
        },
        {
          title: 'Mutation Roll: 98 (Dual Mind)',
          result: 'Grows a Second Head',
          details: 'Advantage on saving throws against being charmed, frightened, blinded, or stunned.'
        }
      ]
    }
  },
  {
    id: 'planescape-morte',
    name: "Planescape: Morte's Planar Parade",
    subtitle: 'City of Doors, 16 Planar Influences & Outlands Bestiary',
    levelRange: 'Levels 1–20+ (Planar Tiers)',
    folderKeyword: 'Planescape',
    iconName: 'Compass',
    themeColor: 'amber',
    overview: "Explore Sigil, the City of Doors, and the infinite Great Wheel. From the 12 Ascendant Factions and their planar agents to cosmic horrors, Hierarch Modrons, Time Dragons, and the Queen of the Fortune's Wheel casino, Shemeshka the Arcanaloth.",
    chapters: [
      {
        id: 'morte-planar-rules',
        title: 'Planar Rules & 16 Influences',
        noteTitle: "Morte's Planar Parade - Planar Rules, Influences & Outlands Encounters",
        level: 'All Levels',
        summary: 'Petitioners, planar alignment shifts, 16 plane traits (Abyss to Ysgard), and Outlands 1d4 encounters.',
        keyThreats: ['Planar Corruption', 'Aura of Gloom (Hades)', 'Disrupted Gravity (Limbo)']
      },
      {
        id: 'morte-factions',
        title: "Sigil's 12 Ascendant Factions",
        noteTitle: "Sigil's 12 Ascendant Factions & Faction Agents Stat Blocks",
        level: 'CR 3–12',
        summary: 'Harmonium Hardheads, Doomguard Doom Lords, Mercykillers, and Fraternity Law Benders in Sigil.',
        keyThreats: ['Doomguard Doom Lord (CR 12)', 'Harmonium Captain (CR 8)', 'Mercykiller Bloodhound']
      },
      {
        id: 'morte-bestiary-p1',
        title: 'Planar Bestiary: Archons to Guardinals',
        noteTitle: 'Archons (Hound, Lantern, Warden) - Celestials of Mount Celestia',
        level: 'CR 2–18',
        summary: 'Mount Celestia Archons, Baernaloths of Hades, Carceri Demodands, Dabus, and Elysium Guardinals.',
        keyThreats: ['Baernaloth (CR 17)', 'Shator Demodand (CR 16)', 'Warden Archon (CR 8)']
      },
      {
        id: 'morte-bestiary-p2',
        title: 'Planar Bestiary: Modrons to Time Dragons',
        noteTitle: 'Time Dragons (Wyrmling, Young, Adult, Ancient) - Masters of the Chronostream',
        level: 'CR 5–26',
        summary: 'Hierarch Modrons (Decaton to Hexton), Kolyarut Inevitable, Shemeshka, and Ancient Time Dragons.',
        keyThreats: ['Ancient Time Dragon (CR 26)', 'Planar Incarnate (CR 22)', 'Kolyarut (CR 20)']
      }
    ],
    keyNpcs: [
      {
        name: 'Morte',
        role: 'Famed Planar Explorer & Sarcastic Skull',
        noteTitle: "Morte's Planar Parade - Planar Rules, Influences & Outlands Encounters",
        description: 'Floating skull with caustic wit, cynical multiversal survival tips, and questionable mimir impersonations.'
      },
      {
        name: 'Shemeshka the Arcanaloth',
        role: "Kingpin of Sigil & Mistress of Fortune's Wheel",
        noteTitle: 'Shemeshka the Arcanaloth & Rilmani Protectors of the Spire',
        description: 'Notorious crime boss who manipulates planar politics from her lavish gambling hall using the Razorvine Tiara.'
      },
      {
        name: 'Kolyarut',
        role: 'Inevitable Arbiter of the Hall of Concordance',
        noteTitle: 'Kolyarut - Inevitable Arbiter of the Hall of Concordance',
        description: 'Clockwork justice engine dispatched by Primus to enforce cosmic contracts across realities.'
      },
      {
        name: 'Ancient Time Dragon',
        role: 'Keeper of Multiversal Timelines',
        noteTitle: 'Time Dragons (Wyrmling, Young, Adult, Ancient) - Masters of the Chronostream',
        description: 'Living nexus of the chronostream capable of conjuring temporal gates spanning 8,000 years.'
      }
    ],
    signatureBoss: {
      name: 'Shemeshka the Arcanaloth',
      cr: 'CR 14 (11,500 XP)',
      hp: 162,
      ac: 17,
      speed: '30 ft., fly 30 ft. (hover)',
      noteTitle: 'Shemeshka the Arcanaloth & Rilmani Protectors of the Spire',
      attacks: [
        { name: 'Arcane Flux (Force Burst)', bonus: 'DC 18 Dex', damage: '45 force + Incapacitated', type: 'Force (120 ft range)', dice: '7d12' },
        { name: 'Razorvine Tiara', bonus: '+10 to hit', damage: '10 slashing + 9 necrotic + DC 15 Con', type: 'Slashing & Necrotic (Halves speed)', dice: '3d6+5+2d8' },
        { name: 'Claw Attack', bonus: '+10 to hit', damage: '10 slashing + 14 poison', type: 'Slashing & Poison', dice: '2d4+5+4d6' }
      ],
      traits: [
        'Fell Counterspell (3/Day): Interrupts spells and inflicts the poisoned condition on the caster.',
        'Vile Teleport: Bonus action teleports up to 60 ft to an unoccupied space in sight.',
        'Legendary Resistance (4/Day): Can choose to succeed when failing a saving throw.',
        'Razorvine Tiara: Functions as a deadly tentacle rod dealing slashing and necrotic damage.'
      ]
    },
    randomTables: {
      scenes: [
        'A silent, floating Dabus repairs a cracked stone portal with cobblestone magic, projecting esoteric rebus symbols.',
        "The Great Gymnasium of the Transcendent Order rings with rhythmic martial clashes as monks spar without conscious thought.",
        'A squad of Harmonium peacekeepers with crimson armor and electrified mancatchers marches through the Hive Ward.',
        'A glowing swarm of sunflies flits over a merchant stall selling petrified dragon scales from the Beastlands.'
      ],
      encounters: [
        { name: 'Harmonium Arrest Patrol', cr: 'CR 8', count: '1 Harmonium Captain + 2 Peacekeepers', roll: '1d1' },
        { name: 'Carceri Demodand Jailers', cr: 'CR 13', count: '1 Kelubar + 1d2 Farastu Demodands', roll: '1d2' },
        { name: 'Hierarch Modron Inspection', cr: 'CR 10', count: '1 Nonaton Modron + 1 Decaton Modron', roll: '1d1' },
        { name: 'Undersigil Dark Ambush', cr: 'CR 10', count: '1 Darkweaver + 2 Vargouille Reflections', roll: '1d1' }
      ],
      weather: [
        'Sigil Smog & Razorvine Wind: Visibility limited to 60 feet; barbed razorvine clippings whip through the air.',
        'Mechanus Crystalline Symmetry: Absolute geometric calm settles; all rolls of 1–4 are treated as 5.',
        'Limbo Chaos Flux: Terrain shifts from cobblestones to swirling vapor; spellcasters must pass DC 13 Con checks.',
        'Hades Gray Despair: Colors fade to monochrome; DC 14 Charisma save or experience crushing apathy.'
      ],
      rumors: [
        "Shemeshka is hosting an exclusive high-stakes game at Fortune's Wheel involving a portal key to the Lady's Mazes.",
        'A rogue Hexton modron has broken rank from the Great Modron March and is hiding in the Lower Ward.',
        'The Athar claim to have found a dead god floating in the Astral Sea whose divine spark can still be weaponized.',
        'A four-armed Kolyarut inevitable was seen striding toward the Spire to execute a judgment on a planar noble.'
      ],
      specialTitle: '🌌 16 Planar Influences Customizer',
      specialOptions: [
        {
          title: 'Planar Trait: The Abyss',
          result: 'Entropy of the Abyss & Black Blood',
          details: 'Can change any bludgeoning, piercing, or slashing damage to necrotic; advantage vs poison.'
        },
        {
          title: 'Planar Trait: Mechanus',
          result: 'Lightning Rod & Symmetrical Form',
          details: 'Lightning cannot drop creature below 1 HP; contact with nonmagical objects repairs them like mending.'
        },
        {
          title: 'Planar Trait: Mount Celestia',
          result: 'Healing Orb & Golden Halo',
          details: 'On death, releases a spectral orb that hovers for 1 minute, healing good creatures 1d6 HP each round.'
        },
        {
          title: 'Planar Trait: Limbo',
          result: 'Disrupted Gravity & Churning Chaos',
          details: 'Critical hits trigger levitation, terrain melting into mud, or temporary hit point shields.'
        }
      ]
    }
  },
  {
    id: 'vecna-dossier',
    name: 'Vecna: The Whispered One Dossier',
    subtitle: 'Cosmic Secrets, Artifacts of Power & The Archlich Stat Block',
    levelRange: 'Levels 18–20+ (Epic Tier)',
    folderKeyword: 'Vecna',
    iconName: 'Skull',
    themeColor: 'red',
    overview: 'Unravel the terrifying chronicle of Vecna the Whispered One—from mortal scribe on Oerth to master of the Spider Throne, the brutal betrayal by Kas, and his ascent to godhood. Contains the official CR 26 Archlich stat block and the four legendary artifacts: Book of Vile Darkness, Sword of Kas, and the Eye & Hand of Vecna.',
    chapters: [
      {
        id: 'vecna-statblock-chapter',
        title: 'Vecna the Archlich Dossier & Stat Block',
        noteTitle: 'Vecna the Archlich - The Whispered One Dossier & Stat Block',
        level: 'CR 26 (Epic Boss)',
        summary: 'Full origins, Obsidian Tower on Nyr Dyv, Rotten Fate, Vile Teleport (80 HP heal), and Dread Counterspell.',
        keyThreats: ['Vecna the Archlich (CR 26)', 'Rotten Fate (Zombie Risen)', 'Flight of the Damned']
      },
      {
        id: 'vecna-artifacts-chapter',
        title: 'Artifacts of Vecna & Sword of Kas',
        noteTitle: 'Artifacts of Vecna: Book of Vile Darkness, Sword of Kas, Eye & Hand of Vecna',
        level: 'Artifact Tier',
        summary: 'Book of Vile Darkness, Sword of Kas (+3 sentient), Eye of Vecna (truesight), and Hand of Vecna (Str 20).',
        keyThreats: ['Book of Vile Darkness Soul Steal', 'Kas Bloodlust Domination', 'Vecna Soul Puppet (5%)']
      },
      {
        id: 'fiendish-folio-ygorl-chapter',
        title: 'Ygorl, Lord of Entropy (Fiendish Folio)',
        noteTitle: 'Ygorl, Lord of Entropy - Primordial Slaad Lord of Limbo',
        level: 'CR 23 (Boss)',
        summary: 'Primordial slaad lord of Limbo with Entropic Aura, Scythe of Ash, and Call the Void life drain.',
        keyThreats: ['Ygorl, Lord of Entropy (CR 23)', 'Scythe of Ash Disintegration', 'Call the Void']
      },
      {
        id: 'fiendish-folio-monsters-chapter',
        title: 'Classic Fiend Folio Menagerie',
        noteTitle: 'Mordenkainen\'s Fiendish Folio Vol 1 - Monsters Malevolent & Benign',
        level: 'CR 0–11',
        summary: '17 AD&D classics updated to 5e: Assassin Bug, Eye of Fear and Flame, Fog Giant, and Xill.',
        keyThreats: ['Eye of Fear and Flame (CR 9)', 'Fog Giant (CR 11)', 'Assassin Bug Heart Maggots']
      }
    ],
    keyNpcs: [
      {
        name: 'Vecna the Archlich',
        role: 'The Whispered One & Undying God',
        noteTitle: 'Vecna the Archlich - The Whispered One Dossier & Stat Block',
        description: 'Ancient wizard king from Oerth who conquered death itself, wielding Afterthought and Rotten Fate.'
      },
      {
        name: 'Kas the Bloody-Handed',
        role: 'Former Lieutenant & Nemesis of Vecna',
        noteTitle: 'Artifacts of Vecna: Book of Vile Darkness, Sword of Kas, Eye & Hand of Vecna',
        description: 'Vampiric warlord whose rebellion sheared Vecna’s eye and hand, now trapped in the Shadowfell domain of Tovag.'
      },
      {
        name: 'Ygorl, Lord of Entropy',
        role: 'Primordial Slaad Lord of Chaos',
        noteTitle: 'Ygorl, Lord of Entropy - Primordial Slaad Lord of Limbo',
        description: 'Embodiment of universal decay wielding an adamantine scythe that reduces living matter to ash.'
      },
      {
        name: 'Mordenkainen the Mage',
        role: 'Archmage & Guardian of the Balance',
        noteTitle: 'Mordenkainen\'s Fiendish Folio Vol 1 - Monsters Malevolent & Benign',
        description: 'Leader of the Circle of Eight chronicling planar anomalies and dangerous artifacts to protect the multiverse.'
      }
    ],
    signatureBoss: {
      name: 'Vecna the Archlich',
      cr: 'CR 26 (90,000 XP)',
      hp: 272,
      ac: 18,
      speed: '30 ft.',
      noteTitle: 'Vecna the Archlich - The Whispered One Dossier & Stat Block',
      attacks: [
        { name: 'Rotten Fate (Instant Kill & Rise as Zombie)', bonus: 'DC 22 Con', damage: '96 necrotic + rises as Zombie!', type: 'Necrotic (120 ft range)', dice: '8d8+60' },
        { name: 'Flight of the Damned (Recharge 5–6)', bonus: 'DC 22 Con', damage: '36 necrotic + Frightened', type: 'Necrotic (120-ft cone)', dice: '8d8' },
        { name: 'Afterthought (Magic Dagger)', bonus: '+13 to hit', damage: '7 piercing + 9 necrotic (ongoing)', type: 'Piercing & Necrotic (No healing)', dice: '1d4+5+2d8' }
      ],
      traits: [
        'Vile Teleport: Bonus action teleports 30 ft, deals 10 psychic to enemies, and heals Vecna 80 HP!',
        'Dread Counterspell (3 Reactions/Round): 4th level or lower spells fail automatically; deals 10 psychic to caster.',
        'Fell Rebuke: Reaction when hit deals 10 necrotic to attacker and teleports Vecna 30 ft.',
        'Undying: Soul reforms a new body in 1d100 years anywhere within 100 miles.'
      ]
    },
    randomTables: {
      scenes: [
        'The cold, rasping voice of the Whispered One echoes inside the characters\' minds, naming their darkest secrets.',
        'An obsidian stele hums with violet necromantic power, pulling warmth and light out of the torches.',
        'A severed mummified hand twitches atop a velvet altar, shedding frosty mist that freezes blood on contact.',
        'Spectral visages of tortured scholars swirl in a cyclone of green pyre-flame, chanting rites from the Book of Vile Darkness.'
      ],
      encounters: [
        { name: 'Cult of the Whispered One', cr: 'CR 14', count: '1 Necromancer Archmage + 2 Eye of Fear and Flames', roll: '1d1' },
        { name: 'Slaad Entropic Scourge', cr: 'CR 23', count: 'Ygorl, Lord of Entropy + 1d4 Death Slaadi', roll: '1d1' },
        { name: 'Vampiric Kas Inquisitors', cr: 'CR 12', count: '1 Vampire Warrior + 4 Heralds of Dust Remnants', roll: '1d1' },
        { name: 'Ethereal Soul Harvesters', cr: 'CR 11', count: '1 Fog Giant Bandit King + 3 Xills', roll: '1d1' }
      ],
      weather: [
        'Aura of Necrotic Stasis: Radiant magic is dimmed; all healing spells and abilities restore 50% fewer hit points.',
        'Ash of Cavitius: Fine volcanic dust blankets the ground; footsteps whisper like dying sighs.',
        'Chilling Void Wind: Temperature drops to absolute zero; water instantly freezes into razor-sharp obsidian ice.',
        'Entropic Distortion: Spells of 1st level or higher trigger a DC 15 spellcasting check or misfire into force pulses.'
      ],
      rumors: [
        'Vecna has infiltrated the City of Doors to weave a dimensional ritual that directly bypasses the Lady of Pain.',
        'Kas is gathering an army in the Shadowfell domain of Tovag, preparing to cross planar boundaries.',
        'The Book of Vile Darkness was seen chained inside a secret vault in the Underdark, guarded by an Eye of Fear and Flame.',
        'A mortal wizard who grafted the Hand of Vecna has conquered three baronies before succumbing to the Suggestion curse.'
      ],
      specialTitle: '👁️ Artifact of Vecna Power Generator',
      specialOptions: [
        {
          title: 'Artifact: Eye of Vecna',
          result: 'Truesight, X-Ray Vision & Disintegrate',
          details: 'Grafts into empty socket. Grants truesight 120 ft and 8 spell charges (disintegrate, dominate monster). 5% Vecna puppet risk!'
        },
        {
          title: 'Artifact: Hand of Vecna',
          result: 'Strength 20 & +2d8 Cold Onslaught',
          details: 'Grafts to wrist. Strength becomes 20; all melee attacks deal +2d8 cold damage. 8 charges (finger of death, teleport).'
        },
        {
          title: 'Artifact: Sword of Kas',
          result: '+3 Sentient Blade (+1d10 Initiative)',
          details: 'Sentient CE longsword. Crits on 19–20; +2d10 to undead; transfers attack bonus to AC; casts divine word and finger of death.'
        },
        {
          title: 'Artifact: Book of Vile Darkness',
          result: '+2 Ability Score & Dark Speech',
          details: '80 hrs study. One ability increases by +2 (max 24), one decreases by 2. Recite Dark Speech for 3d6 psychic burst.'
        }
      ]
    }
  },
  {
    id: 'mad-mage-undermountain',
    name: 'Waterdeep: Dungeon of the Mad Mage',
    subtitle: 'The 23 Levels of Undermountain, Skullport & Halaster Blackcloak',
    levelRange: 'Levels 5–20 (Megadungeon)',
    folderKeyword: 'Undermountain',
    iconName: 'Crown',
    themeColor: 'purple',
    overview: 'Delve into the deepest, most dangerous megadungeon in all of Faerûn. Beneath the Yawning Portal in Waterdeep lie 23 perilous levels of ancient dwarven ruins, subterranean ecosystems, rival drow houses, academies of dark magic, floating castles, and alien outposts—all shaped by the whimsical madness of Halaster Blackcloak.',
    chapters: [
      {
        id: 'dotmm-upper-levels',
        title: 'Tier 1: Upper Undermountain (Levels 1–3)',
        noteTitle: 'Undermountain Level 1: Dungeon Level (Level 5)',
        level: 'Levels 5–7',
        summary: 'Descend through the 140-ft Yawning Portal well into the Dungeon Level, brave the Arcane Chambers and Rustbone Goblin Bazaar, and enter the war-torn ruins of Stromkuhldur on the Sargauth Level.',
        keyThreats: ['The Undertakers (Fake Vampires & Flesh Golem)', 'Rustbone Goblins & Yek the Tall', 'House Auvryndar Spider Hatchery (T\'rissa)']
      },
      {
        id: 'dotmm-subterranean-ecosystems',
        title: 'Tier 2: Subterranean Realms (Levels 4–6)',
        noteTitle: 'Undermountain Level 4: Twisted Caverns & Underdark Fungi (Level 8)',
        level: 'Levels 8–9',
        summary: 'Explore the fungal forests of the Twisted Caverns with Illuun the aboleth, the enchanted surface-like woods of Wyllowwood and the green dragon Valdemar, and the Lost Level holding King Melair\'s tomb.',
        keyThreats: ['Illuun the Aboleth (CR 10)', 'Archdruid Wyllow & Valdemar (Tearulai)', 'Clan Ironeye Duergar & Clay Golem']
      },
      {
        id: 'dotmm-magic-strongholds',
        title: 'Tier 3: Strongholds & Dark Academies (Levels 7–10)',
        noteTitle: 'Undermountain Level 7: Maddgoth\'s Castle & Shrinking Magic (Level 9)',
        level: 'Levels 9–11',
        summary: 'Brave the 1/12th scale miniature Maddgoth\'s Castle on an 80-ft spindle, the muck-filled Slitherswamp, the dark wizards\' academy of Dweomercore, and Muiral\'s Gauntlet with Matron Vlonwelv.',
        keyThreats: ['Maddgoth\'s 12-ft Homunculus & Otto', 'Kuketh the Death Slaad (King of Bullywugs)', 'Arcanaloth Headmaster & Muiral the Misshapen (CR 13)']
      },
      {
        id: 'dotmm-deep-frontlines',
        title: 'Tier 4: The Deep Frontlines (Levels 11–14)',
        noteTitle: 'Undermountain Levels 11–14: Warrens, Maze, Graveyard & Arcturiadoom',
        level: 'Levels 11–13',
        summary: 'Fight across the Troglodyte Warrens and rune-scarred Behir, navigate the Maze Level\'s Spiderwatch Keep, scavenge Trobriand\'s Graveyard, and infiltrate Arcturiadoom where Mecha-Halaster is being forged.',
        keyThreats: ['Rune-Scarred Behir (Legendary Actions)', 'Maku\'s Minotaur Bloodlust (Horn of the Endless Maze)', 'Fire Giant Emberosa & 100-ft Mecha-Halaster']
      },
      {
        id: 'dotmm-planar-depths',
        title: 'Tier 5: Planar Incursions (Levels 15–18)',
        noteTitle: 'Undermountain Level 15: Obstacle Course & Netherskull (Level 13)',
        level: 'Levels 13–15',
        summary: 'Survive Halaster\'s sarcastic Play-by-Play in the Obstacle Course, travel via gate to the Stardock asteroid crèche, infiltrate the illithid Alterdeep simulation in Seadeeps, and redeem the shadow dragon Umbraxakar in Vanrakdoom.',
        keyThreats: ['Netherskull the Death Tyrant (CR 15)', 'Adult Red Dragon Ashtyrranthor', 'Extremiton the Ulitharid & 210-ft Neothelid (CR 13)', 'Umbraxakar the Shadow Dragon (CR 16)']
      },
      {
        id: 'dotmm-deepest-depths',
        title: 'Tier 6: The Mad Wizard\'s Lair & Skullport (Levels 19–23)',
        noteTitle: 'Undermountain Levels 20–23 & Skullport: Deepest Levels & The Mad Mage\'s Lair',
        level: 'Levels 15–20',
        summary: 'Bargain with musical genies in the Caverns of Ooze, challenge Ezzat the Lich in the Runestone Caverns, face the corrupted planetar Fazrian in the Terminus Level, purge Far Realm death knights in Shadowdusk Hold, and confront Halaster in his extradimensional tower!',
        keyThreats: ['Ezzat the Lich (CR 21)', 'Fazrian the Corrupted Planetar (CR 16)', 'Dezmyr & Zalthar Shadowdusk (Death Knights)', 'Halaster Blackcloak (CR 23)']
      }
    ],
    keyNpcs: [
      {
        name: 'Halaster Blackcloak',
        role: 'The Mad Mage of Undermountain',
        noteTitle: 'Undermountain Appendix A: Dungeon Denizens & Halaster Blackcloak Stat Block',
        description: 'Deranged archmage creator of Undermountain. Wields the blast scepter, robe of eyes, and horned ring; alters stone and gates at will.'
      },
      {
        name: 'Jhesiyra Kestellharp',
        role: 'The Living Dungeon Consciousness',
        noteTitle: 'Waterdeep: Dungeon of the Mad Mage - Overview, History & Planar Rules',
        description: 'Former apprentice who melded her spirit into the stones of Undermountain; telepathically warns adventurers and gates unsafe portals.'
      },
      {
        name: 'Wyllow & Valdemar',
        role: 'Guardians of Wyllowwood',
        noteTitle: 'Undermountain Level 5: Wyllowwood & The Green Dragon (Level 8)',
        description: 'Moon elf archdruid presiding over the subterranean forest, allied with a young green dragon redeemed by the sentient blade Tearulai.'
      },
      {
        name: 'Extremiton',
        role: 'Ulitharid Mastermind of Alterdeep',
        noteTitle: 'Undermountain Level 17: Seadeeps & Alterdeep Simulation (Level 14)',
        description: 'Alien illithid noble linking captured Waterdavians to an alternate reality simulation powered by the River Sargauth turbine.'
      },
      {
        name: 'Ezzat the Lich',
        role: 'Rival Master of the Runestone Spire',
        noteTitle: 'Undermountain Levels 20–23 & Skullport: Deepest Levels & The Mad Mage\'s Lair',
        description: 'Ancient lich dwelling in a 120-ft hollow stalagmite tower beneath the glowing Runestone, scheming to usurp Halaster\'s throne.'
      }
    ],
    signatureBoss: {
      name: 'Halaster Blackcloak',
      cr: 'CR 23 (50,000 XP)',
      hp: 246,
      ac: 17,
      speed: '30 ft.',
      noteTitle: 'Undermountain Appendix A: Dungeon Denizens & Halaster Blackcloak Stat Block',
      attacks: [
        { name: 'Blast Scepter (Thunderwave 4th-level)', bonus: 'DC 16 Con', damage: '5d8 thunder (push 20 ft)', type: 'Thunder (At-will focus)', dice: '5d8' },
        { name: 'Meteor Swarm (9th-level Spell)', bonus: 'DC 22 Dex', damage: '20d6 fire + 20d6 bludgeoning', type: 'Fire & Bludgeoning (40-ft spheres)', dice: '20d6+20d6' },
        { name: 'Chain Lightning (6th-level Spell)', bonus: 'DC 22 Dex', damage: '10d8 lightning (arcs to 3 targets)', type: 'Lightning', dice: '10d8' },
        { name: 'Finger of Death (7th-level Spell)', bonus: 'DC 22 Con', damage: '7d8 + 30 necrotic (rises as zombie)', type: 'Necrotic (Single target)', dice: '7d8+30' }
      ],
      traits: [
        'Rejuvenation: If slain in Undermountain, Halaster revives after 1d10 days at full HP in a random safe location.',
        'Robe of Eyes: Truesight 120 ft, darkvision 120 ft, advantage on sight-based Perception checks.',
        'Horned Ring: Wields a horned ring that allows him to ignore all Undermountain magical restrictions.',
        'Legendary Actions (3/Round): Cast Spell (1 action, up to 3rd level); Spell Ward (2 actions, gains 5 temp HP per spell slot level).'
      ]
    },
    randomTables: {
      scenes: [
        'A ghostly, 1-foot-diameter humanoid eye surrounded by sparkling motes of light fades into view, observing the party silently before vanishing.',
        'A 9-inch copper canister comes whistling through an overhead pneumatic tube, clanking to a halt in an adjacent dispatch station.',
        'A burst of distant, crazed laughter echoes down the stone corridor, accompanied by the smell of ozone and burnt sulfur.',
        'The faint, translucent silhouette of an ancient adventurer in rusted armor walks through the stone wall, looking desperately for an exit.'
      ],
      encounters: [
        { name: 'Scaladar Patrol', cr: 'CR 8', count: '1 Scaladar + 1d2 Rust Monsters', roll: '1d1' },
        { name: 'Undertakers Extortionists', cr: 'CR 6', count: '1 Bandit Captain + 4 Bandits (in fake vampire fangs) + 1 Flesh Golem', roll: '1d1' },
        { name: 'House Auvryndar Strike Team', cr: 'CR 11', count: '1 Drow Mage + 2 Drow Elite Warriors + 2 Giant Spiders', roll: '1d1' },
        { name: 'Behir of the Warrens', cr: 'CR 11', count: '1 Rune-Scarred Behir (Legendary Actions)', roll: '1d1' }
      ],
      weather: [
        'Knot in the Weave Madness: The magical knot deep underground hums; characters must pass DC 14 Wisdom saves or become obsessed with remaining in Undermountain.',
        'Halaster\'s Play-by-Play: Halaster\'s sarcastic announcer commentary echoes whenever a creature rolls an attack: "Swing and a miss!" or "Ouch, that\'ll leave a mark!"',
        'Shadowfell Despair Seepage: Ambient light dims by one category; colors bleed away into gray; DC 15 Wisdom save vs Shadowfell despair.',
        'Alterdeep Glitch: Small sensory inconsistencies manifest: books have blank pages, drinks taste of brine, and whispers stutter.'
      ],
      rumors: [
        'A 290-foot alien spelljamming ship called the Scavenger sits stranded in a lake of primordial ooze on Level 19.',
        'In Arcturiadoom, fire giants and hobgoblins are assembling a 100-foot-tall Mecha-Halaster to crush the walking statues of Waterdeep.',
        'The ancient Alabaster Throne of the Coronal of Illefarn lies hidden inside a hollow plaster cube on the Sargauth Level.',
        'Maddgoth\'s miniature floating castle shrinks any who approach to one-twelfth their size, but a faerie dragon named Otto has seized the keep!'
      ],
      specialTitle: '🌀 Elder Runes & Secrets Deck Draw',
      specialOptions: [
        {
          title: 'Elder Rune: Halaster (Mad Mage)',
          result: 'Bane: 20d6 Force | Boon: Recover Slots',
          details: 'Odd: DC 22 Con save or take 20d6 force damage. Even: Recover all expended spell slots of 6th level and lower!'
        },
        {
          title: 'Elder Rune: Angras (War)',
          result: 'Bane: Damage Vulnerability | Boon: Auto-Crit',
          details: 'Odd: DC 22 Con save or gain vulnerability to all damage for 24h. Even: Next hit automatically becomes a critical hit!'
        },
        {
          title: 'Elder Rune: Ullathar (Passage)',
          result: 'Bane: Restrained 24h | Boon: Freedom of Movement + Knock',
          details: 'Odd: DC 22 Wis save or restrained 24h. Even: Freedom of movement + at-will knock without components for 24h!'
        },
        {
          title: 'Secret: Immortal Insanity',
          result: 'Dungeon Re-creation Law',
          details: 'Undermountain cannot exist without Halaster. Slain in the dungeon, he revives in 1d10 days, but each resurrection erodes his sanity further.'
        }
      ]
    }
  }
];

interface AdventureConsoleProps {
  allNotes: VaultNote[];
  onNavigateToNote: (noteTitle: string) => void;
  onRollDice?: (notation: string, label?: string) => void;
  onCreateCustomNote?: (newNote: VaultNote) => void;
  hideOtherContent: boolean;
  onToggleHideOtherContent: (hide: boolean) => void;
  activeAdventureId: string;
  onSelectAdventure: (advId: string) => void;
}

export const AdventureConsole: React.FC<AdventureConsoleProps> = ({
  allNotes,
  onNavigateToNote,
  onRollDice,
  onCreateCustomNote,
  hideOtherContent,
  onToggleHideOtherContent,
  activeAdventureId,
  onSelectAdventure
}) => {
  const currentAdventure =
    ADVENTURE_PRESETS.find((a) => a.id === activeAdventureId) || ADVENTURE_PRESETS[0];

  // 2 ultra-compact tabs: 'console' (story + NPCs + bestiary in one) and 'generator' (auto-populate)
  const [activeTab, setActiveTab] = useState<'console' | 'generator'>('console');
  const [expandedChapterId, setExpandedChapterId] = useState<string | null>(
    currentAdventure.chapters[0]?.id || null
  );

  // Auto-populated state
  const [sessionRun, setSessionRun] = useState<{
    scene: string;
    encounter: { name: string; cr: string; count: string; countNumber: number };
    weather: string;
    rumor: string;
    special: { title: string; result: string; details: string };
    timestamp: string;
  } | null>(null);

  const [savedSuccess, setSavedSuccess] = useState(false);

  // Auto-populate random tables for this adventure
  const handleAutoPopulate = () => {
    const tables = currentAdventure.randomTables;
    const randomScene = tables.scenes[Math.floor(Math.random() * tables.scenes.length)];
    const chosenEnc = tables.encounters[Math.floor(Math.random() * tables.encounters.length)];
    const randomWeather = tables.weather[Math.floor(Math.random() * tables.weather.length)];
    const randomRumor = tables.rumors[Math.floor(Math.random() * tables.rumors.length)];
    const randomSpecial =
      tables.specialOptions[Math.floor(Math.random() * tables.specialOptions.length)];

    let rolledCount = 1;
    if (chosenEnc.roll) {
      const rollRes = parseAndRoll(chosenEnc.roll);
      if (rollRes) rolledCount = rollRes.total;
    }

    setSessionRun({
      scene: randomScene,
      encounter: {
        name: chosenEnc.name,
        cr: chosenEnc.cr,
        count: chosenEnc.count,
        countNumber: Math.max(1, rolledCount)
      },
      weather: randomWeather,
      rumor: randomRumor,
      special: randomSpecial,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    // Also trigger dice tray roll notification
    if (onRollDice && chosenEnc.roll) {
      onRollDice(chosenEnc.roll, `Encounter Count (${chosenEnc.name})`);
    }
  };

  // Save session log into Vault as a real markdown note!
  const handleSaveToVault = () => {
    if (!sessionRun || !onCreateCustomNote) return;

    const noteTitle = `Session Prep - ${currentAdventure.name} (${new Date().toISOString().split('T')[0]})`;
    const newNote: VaultNote = {
      id: `session-prep-${currentAdventure.id}-${Date.now()}`,
      title: noteTitle,
      folder: `${currentAdventure.folderKeyword}/Session Notes`,
      category: 'Homebrew',
      tags: ['session-prep', 'encounter', currentAdventure.id, 'auto-generated'],
      content: `---
title: ${noteTitle}
category: Homebrew
folder: ${currentAdventure.folderKeyword}/Session Notes
tags: [session-prep, encounter, ${currentAdventure.id}, auto-generated]
created: ${new Date().toISOString()}
---

# ${noteTitle}

Auto-generated live session prep for **[[${currentAdventure.name}]]** generated at ${sessionRun.timestamp}.

---

## 🎬 Opening Scene & Location
> ${sessionRun.scene}

## ⚔️ Active Random Encounter
- **Threat**: ${sessionRun.encounter.name} (${sessionRun.encounter.cr})
- **Spotted Force**: ${sessionRun.encounter.count} (Rolled **${sessionRun.encounter.countNumber}** active foes)
- **Suggested Action**: Roll initiative or setup surprise check.

## 🌧️ Atmospheric Conditions & Weather
- ${sessionRun.weather}

## 🗣️ Local Rumor / Secret Clue
- "${sessionRun.rumor}"

## ${sessionRun.special.title}
- **Result**: **${sessionRun.special.result}**
- **Details**: ${sessionRun.special.details}

---
*Auto-populated using the Adventure Console generator.*
`
    };

    onCreateCustomNote(newNote);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 4000);
  };

  return (
    <div className="flex flex-col h-full w-full bg-slate-950 text-slate-100 overflow-hidden font-sans">
      {/* Top Banner: Adventure Picker & Focus Mode Switch */}
      <div className="p-3.5 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Adventure Console
              </span>
              <span className="px-1.5 py-0.2 text-[10px] rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                {currentAdventure.levelRange}
              </span>
            </div>
            {/* Adventure Selector Dropdown */}
            <div className="relative mt-0.5">
              <select
                value={currentAdventure.id}
                onChange={(e) => {
                  onSelectAdventure(e.target.value);
                  setSessionRun(null);
                }}
                className="bg-slate-850 hover:bg-slate-800 text-slate-100 font-bold text-sm rounded border border-slate-700 py-1 pl-2.5 pr-8 focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                {ADVENTURE_PRESETS.map((adv) => (
                  <option key={adv.id} value={adv.id} className="bg-slate-900 text-slate-200">
                    {adv.name} — {adv.subtitle}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Minimal Tab Switcher & Focus Mode Toggle */}
        <div className="flex items-center gap-2.5">
          {/* Focus Mode Toggle (Hide everything else) */}
          <button
            onClick={() => onToggleHideOtherContent(!hideOtherContent)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition-all ${
              hideOtherContent
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border-slate-800 hover:bg-slate-850'
            }`}
            title="When active, the sidebar hides all other folders and notes, keeping only this adventure visible."
          >
            {hideOtherContent ? (
              <>
                <Eye className="w-3.5 h-3.5 text-amber-400" />
                <span>Focus: Only This Adventure</span>
              </>
            ) : (
              <>
                <EyeOff className="w-3.5 h-3.5 text-slate-500" />
                <span>Focus Mode: Off (Show All)</span>
              </>
            )}
          </button>

          {/* Tab Navigation: Least amount of tabs (Just 2!) */}
          <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setActiveTab('console')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'console'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Scroll className="w-3.5 h-3.5" />
              <span>1. Adventure Hub</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('generator');
                if (!sessionRun) handleAutoPopulate();
              }}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'generator'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Dices className="w-3.5 h-3.5" />
              <span>2. Auto-Populator</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        {/* ======================================================== */}
        {/* TAB 1: ALL-IN-ONE ADVENTURE CONSOLE                      */}
        {/* ======================================================== */}
        {activeTab === 'console' && (
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Overview Banner */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 shadow-sm relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                    <span>{currentAdventure.name}</span>
                    <span className="text-xs font-normal text-amber-400/90 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                      {currentAdventure.subtitle}
                    </span>
                  </h2>
                  <p className="mt-1.5 text-xs text-slate-300 leading-relaxed max-w-3xl">
                    {currentAdventure.overview}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('generator');
                    handleAutoPopulate();
                  }}
                  className="shrink-0 flex items-center gap-2 px-3.5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs rounded-lg shadow-md transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Auto-Populate Session</span>
                </button>
              </div>
            </div>

            {/* Grid: Left Column = Chapters & Story | Right Column = Signature Boss & Key NPCs */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column (7 cols): Chapters & Locations Stream */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    <span>Story Chapters & Key Locations</span>
                  </h3>
                  <span className="text-[11px] text-slate-400">
                    {currentAdventure.chapters.length} Key Segments
                  </span>
                </div>

                <div className="space-y-2">
                  {currentAdventure.chapters.map((chap) => {
                    const isExpanded = expandedChapterId === chap.id;
                    return (
                      <div
                        key={chap.id}
                        className="rounded-lg bg-slate-900 border border-slate-800/80 overflow-hidden transition-all hover:border-slate-700"
                      >
                        <button
                          onClick={() => setExpandedChapterId(isExpanded ? null : chap.id)}
                          className="w-full p-3 flex items-center justify-between text-left hover:bg-slate-850/60 transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            {isExpanded ? (
                              <ChevronDown className="w-4 h-4 text-amber-400 shrink-0" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                            )}
                            <div>
                              <h4 className="font-semibold text-xs text-slate-100">{chap.title}</h4>
                              <p className="text-[11px] text-slate-400 line-clamp-1">
                                {chap.summary}
                              </p>
                            </div>
                          </div>
                          <span className="text-[10px] text-slate-400 px-2 py-0.5 rounded bg-slate-950 border border-slate-800 shrink-0">
                            {chap.level}
                          </span>
                        </button>

                        {isExpanded && (
                          <div className="px-4 pb-3.5 pt-1 border-t border-slate-800/60 bg-slate-950/40 space-y-3">
                            <p className="text-xs text-slate-300 leading-relaxed">{chap.summary}</p>
                            <div>
                              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                                Key Threats & Encounters:
                              </span>
                              <div className="flex flex-wrap gap-1.5 mt-1">
                                {chap.keyThreats.map((t, idx) => (
                                  <span
                                    key={idx}
                                    className="px-2 py-0.5 rounded bg-slate-900 text-red-300 border border-red-950/60 text-[10px] font-medium"
                                  >
                                    ⚔️ {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="pt-1 flex items-center justify-end">
                              <button
                                onClick={() => onNavigateToNote(chap.noteTitle)}
                                className="flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded text-xs font-semibold transition-colors"
                              >
                                <span>Read Full Chapter in Vault</span>
                                <ExternalLink className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column (5 cols): Boss & Key NPCs */}
              <div className="lg:col-span-5 space-y-5">
                {/* Signature Boss Card with 1-Click Dice Rolls */}
                <div className="p-4 rounded-xl bg-slate-900 border border-red-950/80 shadow-sm space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-red-400">
                        Signature Boss
                      </span>
                      <h4 className="font-bold text-sm text-slate-100 flex items-center gap-1.5">
                        <Skull className="w-4 h-4 text-red-400" />
                        <span>{currentAdventure.signatureBoss.name}</span>
                      </h4>
                    </div>
                    <span className="px-2 py-0.5 text-[11px] font-bold rounded bg-red-950/80 text-red-200 border border-red-800/60 font-mono">
                      {currentAdventure.signatureBoss.cr}
                    </span>
                  </div>

                  {/* Vitals */}
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2 rounded bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Armor Class</span>
                      <span className="font-bold text-slate-100">
                        {currentAdventure.signatureBoss.ac}
                      </span>
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Hit Points</span>
                      <span className="font-bold text-red-400">
                        {currentAdventure.signatureBoss.hp}
                      </span>
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Speed</span>
                      <span className="font-bold text-slate-200 text-[11px]">
                        {currentAdventure.signatureBoss.speed}
                      </span>
                    </div>
                  </div>

                  {/* Actions & 1-Click Roll Buttons */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Attack Actions (Click to Roll):
                    </span>
                    {currentAdventure.signatureBoss.attacks.map((atk, i) => (
                      <div
                        key={i}
                        className="p-2 rounded bg-slate-950/70 border border-slate-800 flex items-center justify-between text-xs hover:border-slate-700 transition-colors"
                      >
                        <div>
                          <span className="font-semibold text-slate-200">{atk.name}</span>
                          <span className="text-[10px] text-slate-400 block">{atk.type}</span>
                        </div>
                        <button
                          onClick={() => {
                            if (onRollDice) {
                              onRollDice(
                                atk.dice,
                                `${currentAdventure.signatureBoss.name} - ${atk.name}`
                              );
                            }
                          }}
                          className="flex items-center gap-1 px-2 py-1 rounded bg-amber-500/10 hover:bg-amber-500/25 text-amber-400 border border-amber-500/30 text-[11px] font-bold font-mono transition-colors"
                          title="Roll damage dice in Quick Dice Tray"
                        >
                          <Dices className="w-3 h-3" />
                          <span>{atk.bonus} ({atk.damage})</span>
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Boss Traits */}
                  <div className="space-y-1 pt-1">
                    {currentAdventure.signatureBoss.traits.map((tr, i) => (
                      <p key={i} className="text-[11px] text-slate-300 pl-2 border-l-2 border-red-500/60">
                        {tr}
                      </p>
                    ))}
                  </div>

                  <button
                    onClick={() => onNavigateToNote(currentAdventure.signatureBoss.noteTitle)}
                    className="w-full mt-2 py-1.5 bg-slate-850 hover:bg-slate-800 text-slate-300 border border-slate-700 rounded text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Open Full Stat Block in Vault</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                {/* Key NPCs Section */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <h4 className="text-xs font-bold text-slate-200 flex items-center gap-1.5 uppercase tracking-wider">
                    <User className="w-3.5 h-3.5 text-amber-400" />
                    <span>Key Allies & Dramatis Personae</span>
                  </h4>

                  <div className="space-y-2">
                    {currentAdventure.keyNpcs.map((npc, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-start justify-between gap-2"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-xs text-slate-100">{npc.name}</span>
                            <span className="text-[10px] text-amber-400/90 font-medium">
                              • {npc.role}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                            {npc.description}
                          </p>
                        </div>
                        <button
                          onClick={() => onNavigateToNote(npc.noteTitle)}
                          className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-amber-400 shrink-0 transition-colors"
                          title="View NPC Note"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: LIVE AUTO-POPULATE ADVENTURE GENERATOR            */}
        {/* ======================================================== */}
        {activeTab === 'generator' && (
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Action Bar */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-base text-slate-100 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Auto-Populate {currentAdventure.name}</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Rolls random encounters, atmospheric conditions, tavern rumors, and adventure-specific secrets.
                </p>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleAutoPopulate}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs rounded-lg shadow-md transition-all"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Re-Roll Adventure Tables</span>
                </button>

                {sessionRun && (
                  <button
                    onClick={handleSaveToVault}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 bg-slate-800 hover:bg-slate-750 text-amber-400 border border-amber-500/30 rounded-lg text-xs font-semibold transition-colors"
                  >
                    {savedSuccess ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Saved to Vault!</span>
                      </>
                    ) : (
                      <>
                        <PlusCircle className="w-3.5 h-3.5" />
                        <span>Save to Vault Note</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Generated Results Cards */}
            {sessionRun && (
              <div className="space-y-4">
                {/* 1. Opening Scene */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Current Scene & Atmosphere</span>
                  </div>
                  <blockquote className="text-sm text-slate-200 italic pl-3 border-l-2 border-amber-500/80 bg-slate-950/40 p-2.5 rounded-r">
                    "{sessionRun.scene}"
                  </blockquote>
                </div>

                {/* 2. Rolled Encounter with Dice Roller */}
                <div className="p-4 rounded-xl bg-slate-900 border border-red-950/70 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider">
                      <Swords className="w-3.5 h-3.5" />
                      <span>Active Encounter Encountered</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-red-950/80 text-red-200 border border-red-800/60 text-xs font-mono font-bold">
                      {sessionRun.encounter.cr}
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <h4 className="font-bold text-sm text-slate-100">
                        {sessionRun.encounter.name}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Group Size: <span className="text-slate-200 font-semibold">{sessionRun.encounter.count}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1 bg-red-950/50 border border-red-800/40 text-red-300 font-mono font-bold text-xs rounded">
                        Active Foes: {sessionRun.encounter.countNumber}
                      </div>
                      {onRollDice && (
                        <button
                          onClick={() => onRollDice('1d20', `Initiative: ${sessionRun.encounter.name}`)}
                          className="px-2.5 py-1 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded text-xs font-semibold flex items-center gap-1 transition-colors"
                        >
                          <Dices className="w-3 h-3" />
                          <span>Roll Initiative</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Grid: 3. Weather & 4. Local Rumor */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
                      <Sun className="w-3.5 h-3.5 text-amber-400" />
                      <span>Environmental Weather Effect</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/50 p-2.5 rounded border border-slate-800/80">
                      {sessionRun.weather}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
                      <Scroll className="w-3.5 h-3.5 text-amber-400" />
                      <span>Tavern Rumor / Secret Clue</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/50 p-2.5 rounded border border-slate-800/80 italic">
                      "{sessionRun.rumor}"
                    </p>
                  </div>
                </div>

                {/* 5. Adventure-Specific Prop / Event (e.g. Tarokka Reading or Giant Bag) */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/20 border border-amber-500/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                      <Crown className="w-3.5 h-3.5 text-amber-400" />
                      <span>{sessionRun.special.title}</span>
                    </div>
                    <span className="px-2 py-0.5 text-[11px] font-bold rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono">
                      {sessionRun.special.result}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                    {sessionRun.special.details}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
