import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: "project1",
      title: "Project 1",
      description: "Description of your first project",
      image: "/path-to-project1-image.jpg",
      link: "/MyBlog/projects/project1",
    },
    // Add more projects here as you complete them
    // {
    //   id: 'project2',
    //   title: 'Project 2',
    //   description: 'Description of your second project',
    //   image: '/path-to-project2-image.jpg',
    //   link: '/MyBlog/projects/project2'
    // },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.02 }}
            className="bg-card rounded-lg overflow-hidden shadow-lg"
          >
            <Link to={project.link} className="block">
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-foreground/70">{project.description}</p>
                <div className="mt-4">
                  <span className="text-primary hover:text-primary/80 transition-colors">
                    View Project →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
