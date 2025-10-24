/**
 * Journey Map Wrapper Component
 * Wrapper that handles journey map data fetching and integration
 */

import React from 'react';
import JourneyMapComponent from './JourneyMap';
import { getJourneyMap } from '../../../lib/blog/posts';
import { JourneyMap } from '../../../lib/blog/journey/types';

interface JourneyMapWrapperProps {
    journeyMapId: string;
    language: 'en' | 'zh';
}

const JourneyMapWrapper: React.FC<JourneyMapWrapperProps> = ({ journeyMapId, language }) => {
    const journeyMap = getJourneyMap(journeyMapId);

    if (!journeyMap) {
        return (
            <div className="w-full h-[600px] border border-gray-200 rounded-lg flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="text-gray-500 text-lg mb-2">Journey Map Not Found</div>
                    <div className="text-gray-400 text-sm">
                        The journey map "{journeyMapId}" could not be loaded.
                    </div>
                </div>
            </div>
        );
    }

    return <JourneyMapComponent journeyMap={journeyMap} language={language} />;
};

export default JourneyMapWrapper;
