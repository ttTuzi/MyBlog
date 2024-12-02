import { Link } from "react-router-dom";
import SketchButton from "./SketchButton";
import project1Img from "../assets/project1.png";
import jsLogo from "../assets/jsLogo.svg";
import javaLogo from "../assets/javaLogo.svg";
import springbootLogo from "../assets/springbootLogo.svg";
import reactLogo from "../assets/reactLogo.svg";
import Mirage from "../assets/Mirage.png";
import mySQLLogo from "../assets/mySQLLogo.svg";
import Hmall from "../assets/Hmall.png";

const projectList = [
  {
    title: "Movie Rating System",
    description:
      "This project is a movie management web application built using React. It allows users to search for movies, view detailed information, and manage a watch list. ",
    img: project1Img,
    targetLink: "projects/project1",
    icons: [
      { src: jsLogo, name: "JavaScript" },
      { src: reactLogo, name: "React" },
    ],
  },
  {
    title: "Mirage",
    description:
      "A comprehensive online cinema platform, replicating the experience of a real movie ticketing website. Customers can browse movies, choose their seats, book tickets, and complete secure checkouts with ease. Managers have full control to manage movies, permissions, and customer promotions, ensuring a seamless and efficient operation for both users and administrators. ",
    img: Mirage,
    targetLink: "",
    icons: [
      { src: jsLogo, name: "JavaScript" },
      { src: javaLogo, name: "Java" },
      { src: reactLogo, name: "React" },
      { src: springbootLogo, name: "Spring Boot" },
      { src: mySQLLogo, name: "MySql" },
    ],
  },
  {
    title: "Microservices Migration ",
    description:
      "I spearheaded the successful transformation of a monolithic Spring Boot application into a scalable microservices architecture using Spring Cloud (Eureka, Gateway) and OpenFeign, significantly enhancing service efficiency and fault tolerance. By leveraging OpenFeign for declarative REST communication, I streamlined microservice interactions, while integrating Resilience4j's circuit breakers, rate limiters, and retry mechanisms to bolster system resilience and minimize downtime. Additionally, I orchestrated a database migration tailored to a microservices architecture, optimizing data handling and improving query performance for a robust and reliable system.",
    img: Hmall,
    targetLink: "",
    icons: [
      { src: javaLogo, name: "Java" },
      { src: springbootLogo, name: "Spring Boot" },
      { src: mySQLLogo, name: "MySql" },
    ],
  },
];

function ProjectCard({ title, description, img, targetLink, icons = [] }) {
  return (
    <div className="flex flex-col md:flex-row mb-12">
      {targetLink ? (
        <Link
          to={targetLink}
          target="_blank"
          className="w-full md:w-1/2 max-w-md md:mr-32 shadow-lg border border-gray-300 hover:scale-105 transition-transform"
        >
          <img src={img} alt={title} className="h-full w-full object-cover" />
        </Link>
      ) : (
        <div className="w-full md:w-1/2 max-w-md md:mr-32 shadow-lg border border-gray-300 hover:scale-105 transition-transform">
          <img src={img} alt={title} className="h-full w-full object-cover" />
        </div>
      )}

      <div className="max-w-md">
        <h2 className="text-2xl font-semibold  mb-2">{title}</h2>
        <p className=" mb-4">{description}</p>
        <SketchButton>Case Study</SketchButton>
        {icons.map((icon, idx) => (
          <img
            key={idx}
            src={icon.src}
            alt={icon.name}
            title={icon.name}
            className="inline-block ml-6 size-10"
          />
        ))}
      </div>
    </div>
  );
}

const RecentProjectComponents = () => {
  return (
    <div className="w-full pt-16" id="Projects">
      <div className="gap-4 max-w-7xl mx-auto md:auto-rows-auto">
        <h1 className="font-bold text-5xl">Project</h1>
      </div>
      <div className="pt-8 gap-4 max-w-7xl mx-auto md:auto-rows-auto">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            img={project.img}
            targetLink={project.targetLink}
            icons={project.icons}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentProjectComponents;
