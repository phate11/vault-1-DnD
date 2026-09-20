import React, { useEffect, useRef, useState } from 'react';
import { VaultNote } from '../types';
import { ForwardLinkMap } from '../utils/vaultExporter';
import { ZoomIn, ZoomOut, RotateCcw, Maximize2 } from 'lucide-react';

interface VaultGraphProps {
  notes: VaultNote[];
  selectedNote: VaultNote;
  forwardLinks: ForwardLinkMap;
  onSelectNote: (note: VaultNote) => void;
}

interface Node {
  id: string;
  title: string;
  category: string;
  folder: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  note: VaultNote;
}

interface Edge {
  source: string;
  target: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  Class: '#ef4444',
  Rule: '#3b82f6',
  Spell: '#a855f7',
  Equipment: '#f59e0b',
  Creature: '#10b981',
  Race: '#06b6d4',
  Subrace: '#0891b2',
  Background: '#ec4899',
  Lore: '#8b5cf6',
  Index: '#eab308',
  Adventure: '#e11d48',
  NPC: '#f43f5e',
  Tarokka: '#c084fc',
  Handout: '#fbbf24',
  'Magic Item': '#38bdf8',
  Feat: '#14b8a6',
  Customization: '#f97316',
  Appendix: '#64748b',
  Faction: '#6366f1'
};

export const VaultGraph: React.FC<VaultGraphProps> = ({
  notes,
  selectedNote,
  forwardLinks,
  onSelectNote
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);

  const simulationRef = useRef<{
    nodes: Node[];
    edges: Edge[];
    animId: number;
  }>({
    nodes: [],
    edges: [],
    animId: 0
  });

  // Initialize graph nodes and edges
  useEffect(() => {
    const titleToId = new Map<string, string>();
    notes.forEach((n) => {
      titleToId.set(n.title.toLowerCase(), n.id);
      if (n.aliases) {
        n.aliases.forEach((a) => titleToId.set(a.toLowerCase(), n.id));
      }
    });

    const width = 800;
    const height = 600;

    // Create initial positions
    const nodes: Node[] = notes.map((note, index) => {
      const angle = (index / notes.length) * 2 * Math.PI;
      const radius = 180 + (index % 4) * 50;
      return {
        id: note.id,
        title: note.title,
        category: note.category,
        folder: note.folder,
        x: width / 2 + Math.cos(angle) * radius + (Math.random() - 0.5) * 40,
        y: height / 2 + Math.sin(angle) * radius + (Math.random() - 0.5) * 40,
        vx: 0,
        vy: 0,
        radius: note.id === selectedNote.id ? 10 : 6,
        note
      };
    });

    const edges: Edge[] = [];
    notes.forEach((note) => {
      const fwd = forwardLinks[note.title] || [];
      fwd.forEach((targetTitle) => {
        const targetId = titleToId.get(targetTitle.toLowerCase());
        if (targetId && targetId !== note.id) {
          edges.push({
            source: note.id,
            target: targetId
          });
        }
      });
    });

    simulationRef.current.nodes = nodes;
    simulationRef.current.edges = edges;

    let iterations = 0;
    const maxIterations = 300;

    const simulate = () => {
      const currentNodes = simulationRef.current.nodes;
      const currentEdges = simulationRef.current.edges;
      const nodeMap = new Map(currentNodes.map((n) => [n.id, n]));

      if (iterations < maxIterations) {
        // Repulsion between all nodes
        for (let i = 0; i < currentNodes.length; i++) {
          for (let j = i + 1; j < currentNodes.length; j++) {
            const n1 = currentNodes[i];
            const n2 = currentNodes[j];
            const dx = n2.x - n1.x;
            const dy = n2.y - n1.y;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            if (dist < 260) {
              const force = (260 - dist) / (dist * 18);
              n1.vx -= dx * force;
              n1.vy -= dy * force;
              n2.vx += dx * force;
              n2.vy += dy * force;
            }
          }
        }

        // Attraction along edges
        for (const edge of currentEdges) {
          const source = nodeMap.get(edge.source);
          const target = nodeMap.get(edge.target);
          if (source && target) {
            const dx = target.x - source.x;
            const dy = target.y - source.y;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            const force = (dist - 110) * 0.005;
            source.vx += dx * force;
            source.vy += dy * force;
            target.vx -= dx * force;
            target.vy -= dy * force;
          }
        }

        // Center gravity
        const cx = width / 2;
        const cy = height / 2;
        for (const n of currentNodes) {
          n.vx += (cx - n.x) * 0.002;
          n.vy += (cy - n.y) * 0.002;

          n.vx *= 0.85;
          n.vy *= 0.85;
          n.x += n.vx;
          n.y += n.vy;
        }

        iterations++;
      }

      draw();
      simulationRef.current.animId = requestAnimationFrame(simulate);
    };

    simulate();

    return () => {
      cancelAnimationFrame(simulationRef.current.animId);
    };
  }, [notes]);

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.translate(pan.x, pan.y);
    ctx.scale(zoom, zoom);

    const { nodes, edges } = simulationRef.current;
    const nodeMap = new Map(nodes.map((n) => [n.id, n]));

    // Draw links
    ctx.lineWidth = 1;
    for (const edge of edges) {
      const source = nodeMap.get(edge.source);
      const target = nodeMap.get(edge.target);
      if (!source || !target) continue;

      const isConnectedToSelected =
        source.id === selectedNote.id || target.id === selectedNote.id;

      ctx.beginPath();
      ctx.moveTo(source.x, source.y);
      ctx.lineTo(target.x, target.y);

      if (isConnectedToSelected) {
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 1.8;
      } else {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 0.8;
      }
      ctx.stroke();
    }

    // Draw nodes
    for (const node of nodes) {
      const isSelected = node.id === selectedNote.id;
      const isHovered = hoveredNode?.id === node.id;
      const color = CATEGORY_COLORS[node.category] || '#94a3b8';

      ctx.beginPath();
      const radius = isSelected ? 9 : isHovered ? 8 : 5;
      ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();

      if (isSelected || isHovered) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();

        // Label
        ctx.font = '11px sans-serif';
        ctx.fillStyle = '#f8fafc';
        ctx.fillText(node.title, node.x + 12, node.y + 4);
      } else if (zoom > 1.2) {
        ctx.font = '9px sans-serif';
        ctx.fillStyle = 'rgba(248, 250, 252, 0.7)';
        ctx.fillText(node.title, node.x + 8, node.y + 3);
      }
    }

    ctx.restore();
  };

  useEffect(() => {
    draw();
  }, [zoom, pan, hoveredNode, selectedNote]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
      return;
    }

    const rect = canvas.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left - pan.x) / zoom;
    const mouseY = (e.clientY - rect.top - pan.y) / zoom;

    const hit = simulationRef.current.nodes.find((node) => {
      const dx = node.x - mouseX;
      const dy = node.y - mouseY;
      return Math.sqrt(dx * dx + dy * dy) < node.radius + 6;
    });

    setHoveredNode(hit || null);
    canvas.style.cursor = hit ? 'pointer' : 'grab';
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDragging && Math.abs(e.clientX - (dragStart.x + pan.x)) < 5 && Math.abs(e.clientY - (dragStart.y + pan.y)) < 5) {
      if (hoveredNode) {
        onSelectNote(hoveredNode.note);
      }
    }
    setIsDragging(false);
  };

  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-slate-950 flex flex-col overflow-hidden select-none border border-slate-800 rounded-lg"
    >
      <div className="absolute top-3 left-3 z-10 bg-slate-900/90 backdrop-blur border border-slate-700/60 rounded-md p-2 flex items-center gap-3 text-xs text-slate-300 shadow-md">
        <span className="font-semibold text-slate-100 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          Obsidian Graph View
        </span>
        <span className="text-slate-400">|</span>
        <span>{notes.length} Notes</span>
        <span>•</span>
        <span>{simulationRef.current.edges.length} Links</span>
      </div>

      <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-slate-900/90 backdrop-blur border border-slate-700/60 rounded-md p-1 shadow-md">
        <button
          onClick={() => setZoom((z) => Math.min(z * 1.25, 3))}
          className="p-1.5 hover:bg-slate-800 rounded text-slate-300 hover:text-white"
          title="Zoom In"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => setZoom((z) => Math.max(z / 1.25, 0.4))}
          className="p-1.5 hover:bg-slate-800 rounded text-slate-300 hover:text-white"
          title="Zoom Out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={handleReset}
          className="p-1.5 hover:bg-slate-800 rounded text-slate-300 hover:text-white"
          title="Reset View"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      <div className="absolute bottom-3 left-3 z-10 flex flex-wrap gap-2 text-[10px] bg-slate-900/90 backdrop-blur border border-slate-800 rounded-md p-2 max-w-lg">
        {Object.entries(CATEGORY_COLORS).map(([cat, col]) => (
          <div key={cat} className="flex items-center gap-1">
            <span
              className="w-2.5 h-2.5 rounded-full inline-block"
              style={{ backgroundColor: col }}
            />
            <span className="text-slate-300">{cat}</span>
          </div>
        ))}
      </div>

      <canvas
        ref={canvasRef}
        width={900}
        height={650}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="w-full h-full block bg-slate-950"
      />
    </div>
  );
};
