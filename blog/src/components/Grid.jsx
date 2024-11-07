import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import BlurFade from "./ui/blur-fade";
import javaImg from "../assets/javaImg.png";
import PythonLogo from "../assets/PythonLogo.png";
import javascriptLogo from "../assets/javascriptLogo.png";
import HTMLLogo from "../assets/HTML.png";
import SQLLogo from "../assets/SQLLogo.png";
import reactLogo from "../assets/reactLogo.png";
import springbootLogo from "../assets/springbootLogo.png";
import dataAlgoLogo from "../assets/Data-Structure-Algorithms.png";
import skillsLogo from "../assets/skills.jpg";

const Grid = () => {
  return (
    <div className="w-full">
      <BentoGrid className="md:auto-rows-auto">
        {skills.map((item, i) => (
          <BlurFade key={i} inView>
            <BentoGridItem
              description={item.description}
              className="bg-slate-800 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] border mb-1 flex flex-1 w-full h-full min-h-[12rem] rounded-xl"
              imagePath={item.path}
            />
          </BlurFade>
        ))}
      </BentoGrid>
    </div>
  );
};

const skills = [
  {
    description:
      "Proficient in Java for backend development, including Spring Boot and Spring MVC.",
    path: javaImg,
  },
  {
    description:
      "Experience in transforming monolithic applications to microservices using Spring Cloud.",
    path: PythonLogo,
  },
  {
    description:
      "Skilled in MySQL for data storage, querying, and optimization.",
    path: SQLLogo,
  },
  {
    description:
      "Designed and implemented RESTful APIs, ensuring efficient data handling and security.",
    path: javascriptLogo,
  },
  {
    path: skillsLogo,
  },
  {
    description:
      "Familiar with JavaScript, React, and Redux for creating responsive user interfaces.",
    path: HTMLLogo,
  },
  {
    title: "Version Control",
    description:
      "Experienced with Git and GitHub for collaborative development and code management.",
    path: reactLogo,
  },
  {
    title: "Agile Project Management",
    description:
      "Knowledgeable in Agile methodologies, including Scrum, for organized and efficient project workflows.",
    path: springbootLogo,
  },
  {
    // title: "SQL & Database Querying",
    description:
      "Proficient in writing complex SQL queries for data retrieval, manipulation, and analysis in relational databases.",
    path: dataAlgoLogo,
  },
];

export default Grid;
