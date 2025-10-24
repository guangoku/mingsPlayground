/**
 * Project Node Component
 * Custom node for project nodes in the journey map
 */

import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { JOURNEY_NODE_COLORS } from '../../../../lib/blog/journey/constants';
import { getBilingualText } from '../../../../lib/blog/journey/utils';

interface ProjectNodeProps {
    data: {
        title: { en: string; zh: string };
        description: { en: string; zh: string };
        metadata?: {
            projectId?: string;
            status?: 'completed' | 'in-progress' | 'planned';
            priority?: 'high' | 'medium' | 'low';
        };
    };
    selected: boolean;
}

const ProjectNode: React.FC<ProjectNodeProps> = ({ data, selected }) => {
    const colors = JOURNEY_NODE_COLORS.project;
    const language = 'en'; // TODO: Get from context

    const getStatusIcon = () => {
        switch (data.metadata?.status) {
            case 'completed':
                return '✓';
            case 'in-progress':
                return '⟳';
            case 'planned':
                return '○';
            default:
                return '●';
        }
    };

    const getPriorityColor = () => {
        switch (data.metadata?.priority) {
            case 'high':
                return 'text-red-600';
            case 'medium':
                return 'text-yellow-600';
            case 'low':
                return 'text-gray-600';
            default:
                return 'text-gray-600';
        }
    };

    const handleProjectClick = () => {
        if (data.metadata?.projectId) {
            // TODO: Navigate to project page
            console.log('Navigate to project:', data.metadata.projectId);
        }
    };

    return (
        <div className={`
      ${colors.bg} border-2 ${colors.border} rounded-lg p-4 min-w-[200px] max-w-[250px]
      ${selected ? `ring-2 ${colors.ring}` : ''}
      shadow-lg hover:shadow-xl transition-all duration-200
    `}>
            {/* Connection handles (left = target, right = source) */}
            <Handle type="target" position={Position.Left} className="w-3 h-3" />
            <Handle type="source" position={Position.Right} className="w-3 h-3" />

            {/* Header */}
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 ${colors.icon} rounded-full`}></div>
                    <h3 className={`font-semibold ${colors.text} text-sm`}>
                        {getBilingualText(data.title, language)}
                    </h3>
                </div>
                <div className={`text-xs ${getPriorityColor()}`}>
                    {getStatusIcon()}
                </div>
            </div>

            {/* Description */}
            <p className={`text-xs ${colors.text} opacity-80 leading-relaxed mb-3`}>
                {getBilingualText(data.description, language)}
            </p>

            {/* Project link */}
            {data.metadata?.projectId && (
                <button
                    onClick={handleProjectClick}
                    className={`
            w-full text-xs ${colors.text} hover:${colors.text.replace('text-', 'bg-').replace('-800', '-200')}
            border border-current rounded px-2 py-1 transition-colors duration-200
            hover:bg-opacity-20
          `}
                >
                    View Project →
                </button>
            )}

            {/* Status indicator */}
            {data.metadata?.status && (
                <div className="mt-2 flex items-center space-x-1">
                    <div className={`w-2 h-2 rounded-full ${data.metadata.status === 'completed' ? 'bg-green-500' :
                        data.metadata.status === 'in-progress' ? 'bg-blue-500' :
                            'bg-gray-400'
                        }`}></div>
                    <span className={`text-xs ${colors.text} opacity-60`}>
                        {data.metadata.status === 'completed' ? 'Completed' :
                            data.metadata.status === 'in-progress' ? 'In Progress' :
                                'Planned'}
                    </span>
                </div>
            )}
        </div>
    );
};

export default ProjectNode;
