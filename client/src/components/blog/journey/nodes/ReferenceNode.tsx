/**
 * Reference Node Component
 * Custom node for reference/resource nodes in the journey map
 */

import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { JOURNEY_NODE_COLORS } from '../../../../lib/blog/journey/constants';
import { getBilingualText } from '../../../../lib/blog/journey/utils';

interface ReferenceNodeProps {
    data: {
        title: { en: string; zh: string };
        description: { en: string; zh: string };
        metadata?: {
            blogPostId?: string;
            externalUrl?: string;
            status?: 'completed' | 'in-progress' | 'planned';
            priority?: 'high' | 'medium' | 'low';
        };
    };
    selected: boolean;
}

const ReferenceNode: React.FC<ReferenceNodeProps> = ({ data, selected }) => {
    const colors = JOURNEY_NODE_COLORS.reference;
    const language = 'en';

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

    return (
        <div className={`
      ${colors.bg} border-2 ${colors.border} rounded-lg p-4 min-w-[200px] max-w-[260px]
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
                <div className={`text-xs text-gray-600`}>
                    {getStatusIcon()}
                </div>
            </div>

            {/* Description */}
            <p className={`text-xs ${colors.text} opacity-80 leading-relaxed mb-2`}>
                {getBilingualText(data.description, language)}
            </p>

            {/* Type indicator */}
            <div className="mt-1 flex items-center space-x-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <span className={`text-xs ${colors.text} opacity-60`}>
                    Reference
                </span>
            </div>
        </div>
    );
};

export default ReferenceNode;


