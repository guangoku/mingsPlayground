/**
 * Journey Map Component
 * Main component for displaying interactive journey maps using React Flow
 */

import React, { useCallback, useState } from 'react';
import {
    ReactFlow,
    Controls,
    MiniMap,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    Connection,
    Edge,
    Node,
    NodeTypes,
    EdgeTypes,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import FoundationNode from './nodes/FoundationNode';
import ProjectNode from './nodes/ProjectNode';
import BranchNode from './nodes/BranchNode';
import ReferenceNode from './nodes/ReferenceNode';
import JourneyMapLegend from './JourneyMapLegend';

import { JourneyMap } from '../../../lib/blog/journey/types';
import { convertToReactFlow, getBilingualText } from '../../../lib/blog/journey/utils';

// Custom node types
const nodeTypes: NodeTypes = {
    foundation: FoundationNode,
    project: ProjectNode,
    branch: BranchNode,
    reference: ReferenceNode,
};

// Custom edge types - using default for all edges
const edgeTypes: EdgeTypes = {};

interface JourneyMapProps {
    journeyMap: JourneyMap;
    language: 'en' | 'zh';
}

const JourneyMapComponent: React.FC<JourneyMapProps> = ({ journeyMap, language }) => {
    // Convert journey map to React Flow format
    const { nodes: initialNodes, edges: initialEdges } = convertToReactFlow(journeyMap, language);

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params: Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
        console.log('Node clicked:', node);
        // TODO: Handle node clicks (e.g., navigate to blog post or project)
    }, []);

    const onEdgeClick = useCallback((event: React.MouseEvent, edge: Edge) => {
        console.log('Edge clicked:', edge);
        // TODO: Handle edge clicks (e.g., show relationship details)
    }, []);

    return (
        <div className="w-full h-[600px] border border-gray-200 rounded-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                            {getBilingualText(journeyMap.title, language)}
                        </h3>
                        <p className="text-sm text-gray-600">
                            {getBilingualText(journeyMap.description, language)}
                        </p>
                    </div>
                    <JourneyMapLegend language={language} />
                </div>
            </div>

            {/* React Flow */}
            <div className="h-[540px]">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onNodeClick={onNodeClick}
                    onEdgeClick={onEdgeClick}
                    nodeTypes={nodeTypes}
                    edgeTypes={edgeTypes}
                    fitView
                    attributionPosition="bottom-left"
                    className="bg-gray-50"
                    nodesDraggable={false}
                    nodesConnectable={false}
                    elementsSelectable={true}
                    connectOnClick={true}
                    panOnDrag={true}
                    panOnScroll={true}
                    zoomOnScroll={true}
                    zoomOnPinch={true}
                >
                    <Controls />
                    <MiniMap
                        nodeColor={(node) => {
                            switch (node.type) {
                                case 'foundation': return '#10B981'; // green-500
                                case 'project': return '#3B82F6'; // blue-500
                                case 'branch': return '#8B5CF6'; // purple-500
                                case 'reference': return '#6B7280'; // gray-500
                                default: return '#6B7280';
                            }
                        }}
                        nodeStrokeWidth={3}
                        zoomable
                        pannable
                    />
                    <Background color="#aaa" gap={16} />
                </ReactFlow>
            </div>
        </div>
    );
};

export default JourneyMapComponent;
