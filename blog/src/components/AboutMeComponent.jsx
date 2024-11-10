import { TimelineComponent } from "./TimeLineComponent";
import { Highlight } from "./ui/hero-highlight";

const AboutMeComponent = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 md:mt-14 relative flex flex-col space-y-10 md:space-y-0 md:space-x-10 justify-between">
      <div className="flex flex-col">
        <h1 className="text-6xl font-bold text-neutral-600 dark:text-white leading-relaxed">
          Hey! I am{""}
          <Highlight className="ml-1 mr-1">Wei Liang</Highlight>
          and I am a full stack engineer.
        </h1>
        <p className="text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide font-bold text-neutral-700 self-end">
          Hello! I’m Wei, a computer science major at the University of Georgia
          (UGA) with a strong focus on full stack development. My journey in
          technology began early, as I immersed myself in learning and exploring
          the fascinating world of computers. Over the years, Ive developed a
          deep passion for coding, honing my skills in both frontend and backend
          development.
        </p>
        <p className="text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide font-bold text-neutral-700">
          Outside of coding, I’m an advocate for teamwork and enjoy
          collaborating with others to bring ideas to life. Whether it’s
          debugging complex code or brainstorming new features, I’m driven by a
          love for problem-solving and creating impactful applications. In my
          downtime, I love indulging in tech-related hobbies, as well as
          enjoying a good dose of humor and a touch of adventure.
        </p>
      </div>
      <TimelineComponent />
    </div>
  );
};

export default AboutMeComponent;
