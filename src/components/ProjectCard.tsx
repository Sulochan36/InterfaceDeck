import type { Project } from "../projects";

interface Props {
    project: Project;
}

const ProjectCard = ({ project }: Props) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-sm">
            {/* Image */}
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>

                <p className="text-sm text-gray-600 line-clamp-3">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs bg-gray-200 px-2 py-1 rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-4">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        className="text-sm px-3 py-1 bg-black text-white rounded"
                    >
                        Live
                    </a>

                    <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-sm px-3 py-1 border rounded"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;