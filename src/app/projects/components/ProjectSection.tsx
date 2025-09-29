"use client";

import { useEffect, useState } from "react";
import FilterTabs from "./FilterTabs";
import ProjectList from "./ProjectList";

import projects from "@/json/projects";

interface Project {
  title: string;
  description: string;
  img_path: string;
  url: string;
  type: string;
  category: string;
}

const categories = [
  { key: "all", name: "All" },
  { key: "web", name: "Web Developer" },
  { key: "ui/ux", name: "UI/UX Design" },
];

const ProjectSection = () => {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setAllProjects(projects);
  }, []);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(allProjects);
    } else {
      const filtered = allProjects.filter(
        (project: { category: string }) => project.category === activeCategory,
      );
      setFilteredProjects(filtered);
    }
  }, [activeCategory, allProjects]);

  return (
    <section id="project" className="pb-16">
      <div className="container mx-auto mt-9 px-4 md:px-8 xl:px-16">
        <FilterTabs
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    </section>
  );
};

export default ProjectSection;
