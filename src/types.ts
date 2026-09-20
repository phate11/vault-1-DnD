export interface VaultNote {
  id: string; // e.g. "barbarian"
  title: string; // e.g. "Barbarian"
  folder: string; // e.g. "Classes"
  category: 'Rule' | 'Race' | 'Class' | 'Subclass' | 'Modern Subclass' | 'Background' | 'Feat' | 'Equipment' | 'Modern Equipment' | 'Spell' | 'Modern Spell' | 'Creature' | 'NPC' | 'Appendix' | 'Tool' | 'Index' | 'Lore' | 'Adventure' | 'Campaign' | 'Adventure Chapter' | 'Location' | 'Dungeon' | 'Tarokka' | 'Handout' | 'Magic Item' | 'Trap' | 'Rulebook' | 'Template' | 'Homebrew' | 'Character';
  tags: string[];
  aliases?: string[];
  content: string; // Full markdown content with [[wikilinks]], YAML frontmatter, tables, stat blocks
  source?: string;
  metadata?: Record<string, string | number | boolean>;
}

export interface LinkReference {
  targetId: string;
  targetTitle: string;
  context?: string;
}

export interface GraphNode {
  id: string;
  title: string;
  folder: string;
  category: VaultNote['category'];
  val: number; // importance / link count
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
}

export interface GraphEdge {
  source: string;
  target: string;
}

export type ViewMode = 'reading' | 'source';
export type ActiveTab = 'notes' | 'graph' | 'export';
