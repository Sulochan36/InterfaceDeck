import type { Project } from "../projects";

interface Props {
    project: Project;
}

const ProjectCard = ({ project }: Props) => {
    return (
        <div className="border border-neutral-200 bg-white/80 backdrop-blur shadow-sm hover:shadow-xl transition-all duration-200 overflow-hidden ">
            {/* Image */}
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
            />

            {/* Content */}
            <div className="p-4 flex flex-col gap-2">
                <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>

                <p className="text-sm leading-relaxed text-neutral-500 line-clamp-3">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs bg-gray-200 px-2 py-1 rounded border border-neutral-200"
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
                        className="text-sm px-3 py-1 bg-black text-white rounded hover:bg-neutral-700 transition duration-200"
                    >
                        Live
                    </a>

                    <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-sm px-3 py-1 border rounded hover:bg-neutral-200 transition duration-200"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;