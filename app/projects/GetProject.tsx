"use client";
import { useState, useEffect } from "react";

interface Project {
  title: string;
}

const GetProject = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const getProjects = async () => {
      const res = await fetch("/api/projects");
      const projects = await res.json();
      setProjects(projects);
    };
    getProjects();
  });
  return (
    <div>
      {projects.map((projects) => (
        <div>
          <h3>{projects.title}</h3>
          <p>Content</p>
        </div>
      ))}
    </div>
  );
};

export default GetProject;
