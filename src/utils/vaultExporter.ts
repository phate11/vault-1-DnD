import JSZip from 'jszip';
import { VaultNote } from '../types';

export interface BacklinkMap {
  [noteTitle: string]: {
    sourceTitle: string;
    sourceId: string;
    sourceCategory: string;
    sourceSnippet: string;
  }[];
}

export interface ForwardLinkMap {
  [noteTitle: string]: string[];
}

export function extractForwardLinks(content: string): string[] {
  const linkRegex = /\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g;
  const links: string[] = [];
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    const rawTarget = match[1].trim();
    if (rawTarget && !links.includes(rawTarget)) {
      links.push(rawTarget);
    }
  }
  return links;
}

export function computeVaultConnections(notes: VaultNote[]): {
  backlinks: BacklinkMap;
  forwardLinks: ForwardLinkMap;
  titleToNoteMap: Map<string, VaultNote>;
} {
  const backlinks: BacklinkMap = {};
  const forwardLinks: ForwardLinkMap = {};
  const titleToNoteMap = new Map<string, VaultNote>();

  for (const note of notes) {
    titleToNoteMap.set(note.title.toLowerCase(), note);
    if (note.aliases) {
      for (const alias of note.aliases) {
        titleToNoteMap.set(alias.toLowerCase(), note);
      }
    }
    backlinks[note.title] = [];
    forwardLinks[note.title] = [];
  }

  for (const sourceNote of notes) {
    const fwd = extractForwardLinks(sourceNote.content);
    forwardLinks[sourceNote.title] = fwd;

    for (const targetTitle of fwd) {
      const targetLower = targetTitle.toLowerCase();
      const resolvedNote = titleToNoteMap.get(targetLower);
      const key = resolvedNote ? resolvedNote.title : targetTitle;

      if (!backlinks[key]) {
        backlinks[key] = [];
      }

      // Find small context snippet
      const regex = new RegExp(`\\[\\[${targetTitle.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}[^\\]]*\\]\\]`, 'i');
      const matchIndex = sourceNote.content.search(regex);
      let snippet = "";
      if (matchIndex !== -1) {
        const start = Math.max(0, matchIndex - 40);
        const end = Math.min(sourceNote.content.length, matchIndex + 70);
        snippet = "..." + sourceNote.content.slice(start, end).replace(/\n/g, ' ') + "...";
      }

      backlinks[key].push({
        sourceTitle: sourceNote.title,
        sourceId: sourceNote.id,
        sourceCategory: sourceNote.category,
        sourceSnippet: snippet
      });
    }
  }

  return { backlinks, forwardLinks, titleToNoteMap };
}

export async function generateVaultZip(notes: VaultNote[]): Promise<Blob> {
  const zip = new JSZip();

  // 1. Add Obsidian configuration folder
  const obsidianFolder = zip.folder('.obsidian');
  if (obsidianFolder) {
    obsidianFolder.file(
      'app.json',
      JSON.stringify(
        {
          showLineNumber: true,
          livePreview: true,
          foldHeading: true,
          foldIndent: true,
          showUnsupportedFiles: false,
          promptDelete: false,
          spellcheck: false,
          attachmentFolderPath: "Attachments",
          useMarkdownLinks: false,
          enabledCssSnippets: ["dnd-obsidian-theme"]
        },
        null,
        2
      )
    );

    obsidianFolder.file(
      'community-plugins.json',
      JSON.stringify(
        [
          "dataview",
          "obsidian-5e-statblocks",
          "obsidian-leaflet"
        ],
        null,
        2
      )
    );

    obsidianFolder.file(
      'core-plugins.json',
      JSON.stringify(
        [
          "file-explorer",
          "global-search",
          "switcher",
          "graph",
          "backlink",
          "outgoing-link",
          "tag-pane",
          "page-preview",
          "command-palette",
          "markdown-importer",
          "outline",
          "word-count"
        ],
        null,
        2
      )
    );

    // CSS Snippet for D&D 5e Callouts
    const snippetsFolder = obsidianFolder.folder('snippets');
    if (snippetsFolder) {
      snippetsFolder.file(
        'dnd-obsidian-theme.css',
        `/* D&D 5e Custom Obsidian Callouts & Parchment Styling */
.callout[data-callout="tarokka"] {
  --callout-color: 168, 85, 247;
  --callout-icon: lucide-sparkles;
}
.callout[data-callout="statblock"] {
  --callout-color: 220, 38, 38;
  --callout-icon: lucide-shield;
}
.callout[data-callout="spell"] {
  --callout-color: 99, 102, 241;
  --callout-icon: lucide-flame;
}
.callout[data-callout="lore"] {
  --callout-color: 245, 158, 11;
  --callout-icon: lucide-scroll;
}
.callout[data-callout="loot"] {
  --callout-color: 234, 179, 8;
  --callout-icon: lucide-coins;
}
.callout[data-callout="dm"] {
  --callout-color: 244, 63, 94;
  --callout-icon: lucide-shield-alert;
}
`
      );
    }

    // Pre-configured Dataview Plugin
    const dataviewFolder = obsidianFolder.folder('plugins/dataview');
    if (dataviewFolder) {
      dataviewFolder.file(
        'manifest.json',
        JSON.stringify(
          {
            id: "dataview",
            name: "Dataview",
            version: "0.5.67",
            minAppVersion: "0.13.11",
            description: "Complex data querying and views for Obsidian.",
            author: "Michael Brenan",
            authorUrl: "https://github.com/blacksmithgu",
            isDesktopOnly: false
          },
          null,
          2
        )
      );
      dataviewFolder.file(
        'data.json',
        JSON.stringify(
          {
            enableDataviewJs: true,
            enableInlineDataview: true,
            enableInlineDataviewJs: true,
            renderNullAs: "—",
            maxRecursiveRenderDepth: 4
          },
          null,
          2
        )
      );
    }

    // Pre-configured 5e Statblocks Plugin
    const statblockFolder = obsidianFolder.folder('plugins/obsidian-5e-statblocks');
    if (statblockFolder) {
      statblockFolder.file(
        'manifest.json',
        JSON.stringify(
          {
            id: "obsidian-5e-statblocks",
            name: "TTRPG Statblocks",
            version: "4.1.0",
            minAppVersion: "0.15.0",
            description: "Create 5e-styled creature statblocks in Obsidian.",
            author: "Jeremy Valentine",
            authorUrl: "https://github.com/javalent",
            isDesktopOnly: false
          },
          null,
          2
        )
      );
      statblockFolder.file(
        'data.json',
        JSON.stringify(
          {
            layout: "5e-OGL",
            renderDice: true,
            useDiceOverlay: true,
            defaultLayouts: true,
            customBlocks: ["statblock", "ttrpg-statblock", "dnd-statblock"]
          },
          null,
          2
        )
      );
    }

    // Pre-configured Obsidian Leaflet Plugin
    const leafletFolder = obsidianFolder.folder('plugins/obsidian-leaflet');
    if (leafletFolder) {
      leafletFolder.file(
        'manifest.json',
        JSON.stringify(
          {
            id: "obsidian-leaflet",
            name: "Obsidian Leaflet",
            version: "6.0.0",
            minAppVersion: "0.15.0",
            description: "Interactive maps with markers, geojson and image overlays in Obsidian.",
            author: "Jeremy Valentine",
            authorUrl: "https://github.com/javalent",
            isDesktopOnly: false
          },
          null,
          2
        )
      );
      leafletFolder.file(
        'data.json',
        JSON.stringify(
          {
            defaultZoom: 3,
            maxZoom: 6,
            minZoom: 1,
            enableDraw: true,
            defaultMarkerColor: "#10b981"
          },
          null,
          2
        )
      );
    }

    obsidianFolder.file(
      'appearance.json',
      JSON.stringify(
        {
          accentColor: "#d97706",
          theme: "obsidian",
          interfaceFontFamily: "Inter, system-ui, sans-serif"
        },
        null,
        2
      )
    );

    obsidianFolder.file(
      'graph.json',
      JSON.stringify(
        {
          "collapse-filter": false,
          search: "",
          showTags: true,
          showAttachments: false,
          hideUnresolved: false,
          showOrphans: true,
          colorGroups: [
            { query: "path:Classes", color: { a: 1, rgb: 15414841 } },
            { query: "path:Rules", color: { a: 1, rgb: 3912662 } },
            { query: "path:Spells", color: { a: 1, rgb: 11158525 } },
            { query: "path:Equipment", color: { a: 1, rgb: 16753920 } },
            { query: "path:\"Creatures & NPCs\"", color: { a: 1, rgb: 15086888 } },
            { query: "path:\"Modern Subclasses\"", color: { a: 1, rgb: 2470554 } },
            { query: "path:\"Curse of Strahd\"", color: { a: 1, rgb: 14753096 } },
            { query: "path:\"Sword Coast (SCAG)\"", color: { a: 1, rgb: 2276538 } },
            { query: "path:\"Mordenkainen (MTF)\"", color: { a: 1, rgb: 9643440 } },
            { query: "path:Templates", color: { a: 1, rgb: 16753920 } },
            { query: "path:Homebrew", color: { a: 1, rgb: 4057800 } },
            { query: "path:Characters", color: { a: 1, rgb: 16738920 } }
          ]
        },
        null,
        2
      )
    );
  }

  // 2. Add README for opening the vault
  zip.file(
    'README.md',
    `# D&D 5e, Modern, Strahd, SCAG & MTF - Obsidian Master Vault

This vault contains the complete D&D 5th Edition rules, races, classes, backgrounds, feats, equipment, spells, conditions, creature stat blocks, the complete Modern Handbook (modern classes, firearms, armor, explosives, hacking, vehicle mechanics, technomagic spells, and modern NPCs), the Curse of Strahd campaign adventure catalog (Death House, Barovia, Castle Ravenloft, Tarokka deck, bestiary & treasures), the Sword Coast Adventurer's Guide (realms, factions, races, and subclasses), and Mordenkainen's Tome of Foes (Blood War, Archdevils, Demon Lords, Gith, Elves, and high-CR monsters).

## How to Open in Obsidian:
1. Extract this entire ZIP archive into a folder on your computer (e.g. \`Documents/DnD-5e-Modern-Vault\`).
2. Open **Obsidian** (https://obsidian.md).
3. Click **"Open folder as vault"** in the Obsidian startup vault picker.
4. Select the extracted folder.
5. In Obsidian, open \`Index/D&D 5e & Modern Handbook - Master Vault Index.md\` or press **Ctrl+G / Cmd+G** to view the interactive link graph!

## ⚡ Activating Community Plugins (Pre-Bundled):
This vault comes pre-configured with support for **Dataview**, **TTRPG Statblocks (5e style)**, and **Obsidian Leaflet**:
1. Open **Settings** (gear icon bottom left) > **Community plugins**.
2. Turn off **Restricted mode** ("Turn on community plugins").
3. Under **Installed plugins**, toggle on:
   - **Dataview** (dynamic table queries)
   - **TTRPG Statblocks** (authentic 5e monster stat blocks)
   - **Obsidian Leaflet** (interactive regional maps and tactical pins)
4. Open the note \`Index/Obsidian Community Plugins & Power-Ups Guide.md\` for complete copy-paste queries and examples!

Every note is fully formatted with YAML frontmatter, markdown tables, headings, and bidirectional \`[[wikilinks]]\`.
`
  );

  // 3. Add each note into its appropriate directory
  for (const note of notes) {
    const sanitizedTitle = note.title.replace(/[\\/:*?"<>|]/g, '-');
    const filename = `${sanitizedTitle}.md`;
    const folderPath = note.folder.trim();

    if (folderPath && folderPath !== ".") {
      const subFolder = zip.folder(folderPath);
      if (subFolder) {
        subFolder.file(filename, note.content);
      } else {
        zip.file(`${folderPath}/${filename}`, note.content);
      }
    } else {
      zip.file(filename, note.content);
    }
  }

  return await zip.generateAsync({
    type: 'blob',
    compression: 'DEFLATE',
    compressionOptions: { level: 9 }
  });
}

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
