/**
 * Journey Map Utilities
 * Utility functions for the journey map system
 */

import { JourneyMap, JourneyNode, JourneyEdge, ReactFlowNode, ReactFlowEdge } from './types';
import { BilingualText } from '../shared/types';

/**
 * Convert journey map data to React Flow format
 */
export const convertToReactFlow = (
  journeyMap: JourneyMap,
  language: 'en' | 'zh'
): { nodes: ReactFlowNode[]; edges: ReactFlowEdge[] } => {
  // Layout: place main nodes vertically, sub-nodes to the right
  const mainNodeOrder = ['foundations', 'nepal-project', 'bubble-lodge', 'daily-sketchbook'];
  const subNodesByParent: Record<string, string[]> = {
    foundations: ['drawing', 'storytelling', 'picture-book', 'manga'],
    manga: ['chroniques-birmanes']
  };

  const spacingY = journeyMap.layout?.spacing?.y ?? 180;
  const mainX = 0;
  const subXOffset = 280;
  const subXOffsetLevel2 = 560;
  const subYSpacing = 110;

  const nodeIdToPosition: Record<string, { x: number; y: number }> = {};

  // Main nodes vertically
  mainNodeOrder.forEach((id, index) => {
    nodeIdToPosition[id] = { x: mainX, y: index * spacingY };
  });

  // First-level subnodes to the right of their parent
  Object.entries(subNodesByParent).forEach(([parentId, children]) => {
    const parentPos = nodeIdToPosition[parentId] ?? { x: mainX, y: 0 };
    children.forEach((childId, idx) => {
      const x = parentId === 'manga' ? subXOffsetLevel2 : parentPos.x + subXOffset;
      const y = parentPos.y + idx * subYSpacing;
      nodeIdToPosition[childId] = { x, y };
    });
  });

  const nodes: ReactFlowNode[] = journeyMap.nodes.map(node => ({
    id: node.id,
    type: node.type,
    position: nodeIdToPosition[node.id] ?? node.position ?? { x: 0, y: 0 },
    data: {
      title: node.title,
      description: node.description,
      metadata: node.metadata
    }
  }));

  const edges: ReactFlowEdge[] = journeyMap.edges.map(edge => {
    // Normalize legacy edge types to a simpler model: dependency vs link
    const visualType = edge.type === 'prerequisite' ? 'dependency' : 'link';
    const isMainRoad = isBothIn(edge.source, edge.target, mainNodeOrder);
    return {
      id: edge.id,
      source: edge.source,
      target: edge.target,
      type: 'default',
      animated: false,
      style: {
        stroke: isMainRoad ? '#1f2937' : getEdgeColor(visualType),
        strokeWidth: isMainRoad ? 6 : 2
      }
    };
  });

  return { nodes, edges };
};

/**
 * Get edge color based on type
 */
export const getEdgeColor = (edgeType: string): string => {
  switch (edgeType) {
    case 'dependency':
      return '#EF4444'; // red-500
    case 'link':
      return '#6B7280'; // gray-500
    default:
      return '#6B7280';
  }
};

/**
 * Helper to check if both ids are in a list
 */
const isBothIn = (a: string, b: string, list: string[]): boolean => {
  return list.includes(a) && list.includes(b);
};

/**
 * Get bilingual text based on language
 */
export const getBilingualText = (text: BilingualText, language: 'en' | 'zh'): string => {
  return text[language] || text.en || '';
};

/**
 * Calculate node positions for automatic layout
 */
export const calculateNodePositions = (
  nodes: JourneyNode[],
  layout: JourneyMap['layout']
): JourneyNode[] => {
  const { type, spacing } = layout;
  
  return nodes.map((node, index) => {
    let x = 0;
    let y = 0;
    
    switch (type) {
      case 'vertical':
        x = (index % 3) * spacing.x - spacing.x;
        y = Math.floor(index / 3) * spacing.y;
        break;
      case 'horizontal':
        x = index * spacing.x;
        y = (index % 2) * spacing.y;
        break;
      case 'grid':
        x = (index % 4) * spacing.x;
        y = Math.floor(index / 4) * spacing.y;
        break;
    }
    
    return {
      ...node,
      position: { x, y }
    };
  });
};

/**
 * Validate journey map data
 */
export const validateJourneyMap = (journeyMap: JourneyMap): string[] => {
  const errors: string[] = [];
  
  // Check required fields
  if (!journeyMap.id) errors.push('Journey map ID is required');
  if (!journeyMap.title?.en) errors.push('English title is required');
  if (!journeyMap.title?.zh) errors.push('Chinese title is required');
  
  // Check nodes
  if (!journeyMap.nodes || journeyMap.nodes.length === 0) {
    errors.push('At least one node is required');
  }
  
  journeyMap.nodes.forEach((node, index) => {
    if (!node.id) errors.push(`Node ${index}: ID is required`);
    if (!node.type) errors.push(`Node ${index}: Type is required`);
    if (!node.title?.en) errors.push(`Node ${index}: English title is required`);
    if (!node.title?.zh) errors.push(`Node ${index}: Chinese title is required`);
  });
  
  // Check edges
  journeyMap.edges.forEach((edge, index) => {
    if (!edge.id) errors.push(`Edge ${index}: ID is required`);
    if (!edge.source) errors.push(`Edge ${index}: Source is required`);
    if (!edge.target) errors.push(`Edge ${index}: Target is required`);
    if (!edge.type) errors.push(`Edge ${index}: Type is required`);
    
    // Check if source and target nodes exist
    const sourceExists = journeyMap.nodes.some(node => node.id === edge.source);
    const targetExists = journeyMap.nodes.some(node => node.id === edge.target);
    
    if (!sourceExists) errors.push(`Edge ${index}: Source node "${edge.source}" not found`);
    if (!targetExists) errors.push(`Edge ${index}: Target node "${edge.target}" not found`);
  });
  
  return errors;
};

/**
 * Get node by ID
 */
export const getNodeById = (journeyMap: JourneyMap, nodeId: string): JourneyNode | undefined => {
  return journeyMap.nodes.find(node => node.id === nodeId);
};

/**
 * Get connected nodes
 */
export const getConnectedNodes = (journeyMap: JourneyMap, nodeId: string): JourneyNode[] => {
  const connectedNodeIds = new Set<string>();
  
  journeyMap.edges.forEach(edge => {
    if (edge.source === nodeId) {
      connectedNodeIds.add(edge.target);
    }
    if (edge.target === nodeId) {
      connectedNodeIds.add(edge.source);
    }
  });
  
  return journeyMap.nodes.filter(node => connectedNodeIds.has(node.id));
};
