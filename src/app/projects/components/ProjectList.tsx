import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: Array<{
    title: string;
    description: string;
    img_path: string;
    url: string;
    type: string;
    category: string;
  }>;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="project-container mt-4 flex min-h-screen flex-wrap content-start justify-start gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
