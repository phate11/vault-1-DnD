export type SheetType = 'standard' | 'kids';

export interface StandardAbility {
  score: number;
  modifier: number;
  saveProficient: boolean;
}

export interface WeaponAttack {
  id: string;
  name: string;
  atkBonus: number;
  damage: string; // e.g. "2d6 + 4"
  damageType: string; // e.g. "slashing"
  range?: string;
}

export interface SpellSlotInfo {
  level: number;
  total: number;
  expended: number;
}

export interface StandardCharacterSheet {
  id: string;
  type: 'standard';
  name: string;
  classAndLevel: string;
  race: string;
  background: string;
  alignment: string;
  xp: number;
  inspiration: boolean;
  proficiencyBonus: number;
  armorClass: number;
  initiative: number;
  speed: string;
  hpCurrent: number;
  hpMax: number;
  hpTemp: number;
  hitDice: string;
  deathSaves: {
    successes: number; // 0-3
    failures: number; // 0-3
  };
  abilities: {
    str: StandardAbility;
    dex: StandardAbility;
    con: StandardAbility;
    int: StandardAbility;
    wis: StandardAbility;
    cha: StandardAbility;
  };
  skills: Record<string, { proficient: boolean; expertise?: boolean }>;
  passivePerception: number;
  proficienciesAndLanguages: string[];
  attacks: WeaponAttack[];
  spellcasting?: {
    spellcastingClass: string;
    spellAbility: 'INT' | 'WIS' | 'CHA';
    spellSaveDC: number;
    spellAttackBonus: number;
    slots: SpellSlotInfo[];
    spellsKnown: string[];
  };
  equipment: string[];
  currency: {
    cp: number;
    sp: number;
    ep: number;
    gp: number;
    pp: number;
  };
  featuresAndTraits: string[];
  personality: {
    traits: string;
    ideals: string;
    bonds: string;
    flaws: string;
  };
}

export interface KidHeroMove {
  id: string;
  name: string;
  icon: string;
  actionType: 'Action' | 'Special Power' | 'Reaction';
  ruleTip: string;
  description: string;
}

export interface KidCharacterSheet {
  id: string;
  type: 'kids';
  name: string;
  heroTitle: string; // e.g. "The Brave Lion Knight"
  heroClass: string; // e.g. "Knight", "Mage", "Scout", "Dragon Hero"
  ageGroup: string; // "Ages 5+"
  avatarEmoji: string;
  themeColor: 'amber' | 'emerald' | 'sky' | 'rose' | 'purple' | 'indigo';
  
  // Health & Inspiration
  heartsCurrent: number;
  heartsMax: number; // 6 to 10
  heroStars: number; // 0 to 5
  heroStarsMax: number;

  // 6 Super-Stats
  stats: {
    brawn: { name: string; icon: string; bonus: number; hint: string };
    agility: { name: string; icon: string; bonus: number; hint: string };
    heart: { name: string; icon: string; bonus: number; hint: string };
    smarts: { name: string; icon: string; bonus: number; hint: string };
    senses: { name: string; icon: string; bonus: number; hint: string };
    smile: { name: string; icon: string; bonus: number; hint: string };
  };

  heroMoves: KidHeroMove[];

  petCompanion?: {
    name: string;
    species: string;
    icon: string;
    ability: string;
  };

  backpack: Array<{
    name: string;
    icon: string;
    description: string;
  }>;

  goldCoins: number;
  motto: string;
  favoriteTreat: string;
}

export type AnyCharacterSheet = StandardCharacterSheet | KidCharacterSheet;

export const SKILL_DEFINITIONS: Record<string, { label: string; ability: 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha' }> = {
  acrobatics: { label: 'Acrobatics', ability: 'dex' },
  animalHandling: { label: 'Animal Handling', ability: 'wis' },
  arcana: { label: 'Arcana', ability: 'int' },
  athletics: { label: 'Athletics', ability: 'str' },
  deception: { label: 'Deception', ability: 'cha' },
  history: { label: 'History', ability: 'int' },
  insight: { label: 'Insight', ability: 'wis' },
  intimidation: { label: 'Intimidation', ability: 'cha' },
  investigation: { label: 'Investigation', ability: 'int' },
  medicine: { label: 'Medicine', ability: 'wis' },
  nature: { label: 'Nature', ability: 'int' },
  perception: { label: 'Perception', ability: 'wis' },
  performance: { label: 'Performance', ability: 'cha' },
  persuasion: { label: 'Persuasion', ability: 'cha' },
  religion: { label: 'Religion', ability: 'int' },
  sleightOfHand: { label: 'Sleight of Hand', ability: 'dex' },
  stealth: { label: 'Stealth', ability: 'dex' },
  survival: { label: 'Survival', ability: 'wis' }
};

export function calcModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}

export function formatModifier(mod: number): string {
  return mod >= 0 ? `+${mod}` : `${mod}`;
}
