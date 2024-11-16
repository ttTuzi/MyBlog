import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import javaImg from "../assets/javaImg.png";
import PythonLogo from "../assets/PythonLogo.png";
import javascriptLogo from "../assets/javascriptLogo.png";
import HTMLLogo from "../assets/HTML.png";
import SQLLogo from "../assets/SQLLogo.png";
import reactLogo from "../assets/reactLogo.png";
import springbootLogo from "../assets/springbootLogo.png";
import dataAlgoLogo from "../assets/Data-Structure-Algorithms.png";
import skillsLogo from "../assets/skills.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Grid = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const items = gridRef.current.querySelectorAll(".bento-grid-item");

    gsap.fromTo(
      items,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="w-full pt-16" id="Skills" ref={gridRef}>
      <BentoGrid className="grid-rows-3">
        {skills.map((item, i) => (
          <BentoGridItem
            key={i}
            description={item.description}
            className="bento-grid-item bg-slate-800 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] border mb-1 flex flex-1 w-full h-full min-h-[12rem] rounded-xl"
            imagePath={item.path}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

const skills = [
  {
    title: "Java",
    description:
      "Proficient in Java for backend development, with hands-on experience in building and managing applications using Spring Boot and Spring MVC.",
    path: javaImg,
  },
  {
    title: "Python",
    description:
      "Skilled in Python for data analysis, scripting, and automation, with a experience of libraries like Pandas and NumPy.",
    path: PythonLogo,
  },
  {
    title: "SQL",
    description:
      "Experienced in MySQL and SQL for database design, querying, and performance optimization, ensuring efficient data handling.",
    path: SQLLogo,
  },
  {
    title: "JavaScript",
    description:
      "Experienced in JavaScript for front-end development, including building interactive features and handling DOM manipulation.",
    path: javascriptLogo,
  },
  {
    path: skillsLogo,
  },
  {
    title: "HTML and CSS",
    description:
      "Proficient in HTML and CSS for creating responsive layouts and styling, with experience in frameworks like Tailwind CSS.",
    path: HTMLLogo,
  },
  {
    title: "React",
    description:
      "Experienced in React for building dynamic and responsive user interfaces, along with state management using React Redux.",
    path: reactLogo,
  },
  {
    title: "Spring Boot",
    description:
      "Skilled in Spring Boot for developing robust and scalable backend applications, leveraging Spring Data JPA and Spring Security.",
    path: springbootLogo,
  },
  {
    title: "Data Structures and Algorithms",
    description:
      "Strong foundation in data structures and algorithms, with experience in optimizing solutions for performance and scalability.",
    path: dataAlgoLogo,
  },
];

export default Grid;
