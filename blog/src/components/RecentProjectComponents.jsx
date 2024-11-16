import { Link } from "react-router-dom";
import project1Img from "../assets/project1.png";
const projectList = [
  {
    title: " Movie rating System",
    description:
      "sadsad asd as  213 2 312 2 13 3231dasd asd asd asad sa dsa ad sd asd ad sdsa sad sad adsdahkjdjjsakjdhksajhdsakjdhsakjdhksajdhaskjdha  jhsdajh",
    img: project1Img,
    targetLink: "projects/project1",
  },
  {
    title: " Movie rating System",
    description: "sadsad asd as  213 2 312 2 13 3231dasd asd asd a",
    img: project1Img,
  },
  {
    title: " Movie rating System",
    description: "sadsad asd as  213 2 312 2 13 3231dasd asd asd a",
    img: project1Img,
  },
];

function ProjectCard({ title, description, img, targetLink }) {
  return (
    <div className="flex flex-col md:flex-row items-center mb-12">
      <Link
        to={targetLink}
        target="_blank"
        className="w-full md:w-1/2 max-w-md md:mr-32 shadow-lg border border-gray-300"
      >
        <img src={img} alt={title} />
      </Link>

      <div className="max-w-md">
        <h2 className="text-2xl font-semibold text-[#414d3f] mb-2">{title}</h2>
        <p className="text-[#414d3f] mb-4">{description}</p>
        <button className="bg-[#d4a571] hover:bg-[#b9894b] text-white py-2 px-6 rounded mb-4">
          case study
        </button>
      </div>
    </div>
  );
}

const RecentProjectComponents = () => {
  return (
    <div className="w-full pt-16" id="projects">
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
          />
        ))}
      </div>
    </div>
  );
};

export default RecentProjectComponents;
