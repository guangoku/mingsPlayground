import { type Language } from "@/lib/types";
import { type Project } from "@/lib/projects";
import OctopusGirlDetail from "./details/OctopusGirlDetail";
import FlashMindDetail from "./details/FlashMindDetail";
import CharityBoxDetail from "./details/CharityBoxDetail";
import NepalTravelDetail from "./details/NepalTravelDetail";

interface ProjectDetailComposerProps {
    project: Project;
    language: Language;
    showHeader?: boolean;
    onBack?: () => void;
}

export default function ProjectDetailComposer({
    project,
    language,
    showHeader = false,
    onBack
}: ProjectDetailComposerProps) {
    // Route to specific project detail components based on project ID
    switch (project.id) {
        case '1':
            return <OctopusGirlDetail project={project} language={language} />;
        case '2':
            return <NepalTravelDetail project={project} language={language} />;
        case '3':
            return <FlashMindDetail project={project} language={language} />;
        case '4':
            return <CharityBoxDetail project={project} language={language} />;
        default:
            return (
                <div className="text-center py-12">
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                        {project.id === 'unknown' ? 'Project not found' : `Project detail not available for ID: ${project.id}`}
                    </p>
                </div>
            );
    }
}
