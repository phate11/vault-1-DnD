import { VaultNote } from '../types';

export const astralMenagerieEncountersNotes: VaultNote[] = [
  {
    id: "astral-encounters-and-variants",
    title: "Boo's Astral Encounters & Spacefarer Rules",
    folder: "Spelljammer - Boo's Astral Menagerie/Rules & Encounters",
    category: "Rule",
    tags: ["spelljammer", "astral-menagerie", "wildspace", "astral-sea", "ship-encounters", "boo"],
    aliases: [
      "Astral Encounters", "Wildspace Encounters", "Astral Sea Encounters",
      "Ship Encounters", "Astral Variants"
    ],
    content: `---
title: Boo's Astral Encounters & Spacefarer Rules
category: Rule
folder: Spelljammer - Boo's Astral Menagerie/Rules & Encounters
tags: [spelljammer, astral-menagerie, wildspace, astral-sea, ship-encounters, boo]
---

# Boo's Astral Menagerie: Encounters & Astral Variants

> *"Take heart, fellow adventurers, for you have curried the favor of Boo! ... \*Squeak\*"*
> — **Minsc & Boo**

---

## Astral Variants
Practically any terrestrial creature can be turned into an astral-dwelling creature. Whether it requires air or not, you can turn any creature into a Wildspace-dwelling variant by giving it the following trait:
- **Unusual Nature**: The creature doesn't require air.

### Initial Attitude Check
To determine initial attitudes of encountered creatures, roll the dice indicated in the encounter table:
| Attitude Roll Total | Initial Attitude |
|:---:|---|
| **4 or lower** | Hostile |
| **5–8** | Indifferent |
| **9 or higher** | Friendly |

---

## 🌌 Wildspace Encounters (d100)
| d100 | Encounter | Attitude Roll |
|:---:|---|:---:|
| **01–03** | 1d4 **chwinga astronauts**, each mounted on 1 **space guppy** | 1d6 + 4 |
| **04** | 1 **cosmic horror** (30% chance asleep) | 1d6 |
| **05** | 1 **esthetic** piloted by 1 **reigar** | 1d12 |
| **06–07** | 1 **eye monger** | 1d6 |
| **08–11** | 1 **feyr** | 1d6 |
| **12–13** | 1 giant octopus (fly 60 ft, doesn't need to breathe air) | 1d10 |
| **14–17** | 1d6 **jammer leeches** | 1d8 |
| **18–23** | 1d4 **kindori** | 1d6 + 3 |
| **24–25** | 1 **kindori** with 1 druid living in a hut on its back | 2d6 + 3 |
| **26** | 1 kraken (fly 60 ft, doesn't need to breathe air) | 1d6 |
| **27** | 1 **lunar dragon** (young, adult, or ancient) | 1d10 |
| **28–35** | A tavern or inn built on an asteroid with docks | — |
| **36–39** | 1d6 **murder comets** | 1d6 |
| **40–44** | 1d4 **brown scavvers** | 1d8 |
| **45–48** | 1 **night scavver** and 2d6 **gray scavvers** | 1d8 |
| **49–50** | 1 **void scavver** | 1d6 |
| **51–52** | A shipwreck that might still have treasure or creatures | — |
| **53–54** | 1 **solar dragon** (young, adult, or ancient) | 2d6 |
| **55–59** | 1d6 **space eels** | 1d10 |
| **60** | 1 **starlight apparition** | 2d6 + 2 |
| **61–64** | 3d6 stirges that don't need to breathe air | 1d6 |
| **65–70** | 1d6 will-o'-wisps | 1d10 |
| **71–00** | 1 spelljamming ship (roll on Ship Encounters table) | — |

---

## ⚓ Spelljamming Ship Encounters (d100)
| d100 | Ship Encounter | Attitude Roll |
|:---:|---|:---:|
| **01–07** | **Bombard *Leviathan***: Captain Myrtle Hunt (**giff warlord**), 8 **giff shipmates**, 3 mages | 1d10 + 2 |
| **08–16** | **Damselfly ship *Voidwinder***: Captain Krig Kalu (**hadozee explorer**), 1 drow, 7 **hadozee shipmates** | 2d6 + 3 |
| **17–23** | **Flying fish ship *Horizon***: Captain Thaal Vod (renegade mind flayer arcanist), 9 **plasmoid warriors** | 1d12 |
| **24–31** | **Hammerhead ship *Jander Sunstar***: Captain Veluna Valderak (**vampirate captain**), 13 **vampirates**, 1 priest | 1d12 |
| **32–36** | **Lamprey ship *Astral Prize***: Captain Uscath and 15 **psurlon ringers** | 1d12 |
| **37–39** | **Living ship *Eldervine***: Captain Queth (**aartuk elder**), 2 **aartuk priests**, 8 **aartuk warriors**, Eldervine (treant) | 1d10 |
| **40–45** | **Nautiloid *Neurophage***: 4 mind flayers, 16 kuo-toa, 1d6 grells, 1d6 intellect devourers | 1d6 |
| **46–50** | **Nightspider *Malevolence***: Captain Yeshk (**neogi void hunter**), 24 **neogi pirates**, 5 umber hulks | 1d6 |
| **51–55** | **Scorpion ship *Claws of Huraj***: Captain Huraj (hobgoblin captain), 1 bugbear, 8 hobgoblins, 2 hobgoblin priests | 1d12 |
| **56–61** | **Shrike ship *Fedifensor***: Captain Yaj (**githyanki xenomancer**), 10 **githyanki buccaneers** | 1d12 |
| **62–66** | **Space galleon *Eleventh***: Captain Xorpha Eleven-Eyes (beholder), 1 spectator, 3 cult fanatics, 16 cultists | 1d12 |
| **67–72** | **Space galleon *Great Kindori***: Captain Mystan the Mighty (djinni), 1 invisible stalker, 1 couatl, 17 aarakocra, 1 rug of smothering | 2d6 + 2 |
| **73–78** | **Squid ship *Syken's Reach***: Captain Arviglas Syken (human bandit captain), 1 cambion (daughter Tenebra), 11 thugs | 1d12 |
| **79–84** | **Star moth *Apex***: Captain Xaleen (**astral elf commander**), 11 **astral elf warriors**, 1 **astral elf aristocrat** | 1d12 |
| **85–90** | **Turtle ship *Snorkel***: Captain Shelby Norkel (gnome mage), 15 **autognomes** | 1d10 + 3 |
| **91–94** | **Tyrant ship *Doomdreamer***: 2d4 + 2 beholders | 1d8 |
| **95–00** | **Wasp ship *Adventure***: Abandoned and adrift (25% chance spelljamming helm is aboard) | — |

---

## 🔮 Astral Sea Encounters (d100)
| d100 | Astral Sea Encounter | Attitude Roll |
|:---:|---|:---:|
| **01–02** | 1 **aartuk priest** and 2d4 **aartuk warriors** | 1d12 |
| **03–09** | 1 archmage using *astral projection* | 1d10 + 3 |
| **10–11** | 1 **braxat** | 1d8 |
| **12** | 1 **cosmic horror** (70% chance asleep) | 1d6 |
| **13–15** | 1d4 devas on a divine errand | 1d12 + 3 |
| **16–28** | 1 githyanki knight and 1d6 githyanki warriors | 1d10 |
| **29–31** | 1 githyanki knight mounted on a young red dragon | 1d8 |
| **32** | 1 githzerai zerth being hunted by githyanki | 1d6 + 6 |
| **33–38** | 1d4 **kindori** | 1d6 + 3 |
| **39** | 1 **mercane** and 1 beholder bodyguard | 1d8 + 4 |
| **40** | 1 **neh-thalggu** looking for a portal to the Far Realm | 1d10 |
| **41–42** | 1 pentadrone | 1d6 + 3 |
| **43–44** | 1 planetar from a nearby astral dominion | 1d12 + 3 |
| **45–47** | 2d4 **psurlons** | 1d8 |
| **48–50** | Gargantuan floating crystal obelisk of mysterious origin | — |
| **51–52** | 4d4 quadrones | 1d6 + 3 |
| **53** | 1 monodrone gone rogue | 2d6 + 3 |
| **54–56** | 1d4 gray slaadi in Humanoid form | 1d10 |
| **57–58** | 1 green slaad | 1d12 |
| **59–63** | 3d6 **gray scavvers** | 1d8 |
| **64** | 1 solar watching over a dead god drifting nearby | 1d12 + 3 |
| **65–66** | 1 **solar dragon** (young, adult, or ancient) | 2d6 |
| **67** | 1 **starlight apparition** | 2d6 + 2 |
| **68–70** | 1d8 unicorns galloping merrily across the Astral Sea | 1d6 + 6 |
| **71–00** | 1 spelljamming ship (roll on Ship Encounters table) | — |

---

*Explore [[Boo's Astral Menagerie - Bestiary Part 1 (A to G)]] for full creature statblocks.*
`
  }
];
