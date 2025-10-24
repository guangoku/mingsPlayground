/**
 * Journey Map Legend Component
 * Displays the legend for different node types
 */

import React from 'react';
import { JOURNEY_LEGEND_ITEMS } from '../../../lib/blog/journey/constants';
import { getBilingualText } from '../../../lib/blog/journey/utils';

interface JourneyMapLegendProps {
    language: 'en' | 'zh';
}

const JourneyMapLegend: React.FC<JourneyMapLegendProps> = ({ language }) => {
    return (
        <div className="flex flex-wrap gap-4">
            {JOURNEY_LEGEND_ITEMS.map((item) => (
                <div key={item.type} className="flex items-center space-x-2">
                    <div
                        className={`w-3 h-3 rounded-full ${item.color}`}
                        style={{ backgroundColor: item.color }}
                    ></div>
                    <div className="text-sm">
                        <span className="font-medium text-gray-900">
                            {getBilingualText(item.label, language)}
                        </span>
                        <span className="text-gray-600 ml-1">
                            ({getBilingualText(item.description, language)})
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default JourneyMapLegend;
