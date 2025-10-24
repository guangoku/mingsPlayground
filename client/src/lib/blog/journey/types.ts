/**
 * Journey Map Types
 * Type definitions for the journey map system
 */

import { BilingualText } from '../shared/types';

export interface JourneyMap {
  id: string;
  title: BilingualText;
  description: BilingualText;
  nodes: JourneyNode[];
  edges: JourneyEdge[];
  layout: JourneyLayout;
}

export interface JourneyNode {
  id: string;
  type: JourneyNodeType;
  title: BilingualText;
  description: BilingualText;
  position: { x: number; y: number };
  connections: string[];
  metadata?: JourneyNodeMetadata;
}

export interface JourneyEdge {
  id: string;
  source: string;
  target: string;
  type: JourneyEdgeType;
}

export interface JourneyLayout {
  type: 'vertical' | 'horizontal' | 'grid';
  spacing: { x: number; y: number };
}

export interface JourneyNodeMetadata {
  blogPostId?: string;
  projectId?: string;
  externalUrl?: string;
  status?: 'completed' | 'in-progress' | 'planned';
  priority?: 'high' | 'medium' | 'low';
}

export type JourneyNodeType = 'foundation' | 'project' | 'branch' | 'reference';
export type JourneyEdgeType = 'connection' | 'prerequisite' | 'followup';

// React Flow specific types
export interface ReactFlowNode {
  id: string;
  type: JourneyNodeType;
  position: { x: number; y: number };
  data: {
    title: BilingualText;
    description: BilingualText;
    metadata?: JourneyNodeMetadata;
  };
}

export interface ReactFlowEdge {
  id: string;
  source: string;
  target: string;
  type: string; // Allow any string for React Flow edge types
  animated?: boolean;
  style?: React.CSSProperties;
}
