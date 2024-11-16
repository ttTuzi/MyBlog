import OrbitingCircles from "./ui/orbiting-circles";
import githubIcon from "../assets/github.png";
import logo2 from "../assets/myLogo2.png";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import TypingAnimation from "./ui/typing-animation";

const NameCard = () => {
  const intro =
    "Welcome to my corner of the web! I'm Wei, a CS major at UGA and a full stack engineer.";

  return (
    <div className="relative flex h-[120vh] flex-col justify-center gap-18 -mt-20 overflow-hidden">
      {/* Inner Circles */}
      <OrbitingCircles
        className=" border-none bg-transparent "
        duration={10}
        delay={20}
        radius={280}
      >
        <img src={githubIcon} className="h-10 w-10" />
      </OrbitingCircles>

      {/* Outer circle */}
      <OrbitingCircles
        className=" border-none bg-transparent"
        duration={20}
        delay={20}
        radius={320}
      >
        <img src={logo2} className="h-48 w-48" />
      </OrbitingCircles>

      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[27rem] h-[30rem] rounded-xl p-8 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            My name is:
          </CardItem>

          <CardItem
            translateZ="60"
            className="text-neutral-500 max-w-sm mt-2 dark:text-neutral-300 ml-auto text-right"
          >
            <TextGenerateEffect words="Wei Liang" />
          </CardItem>

          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            <TypingAnimation
              className="font-display text-lg font-bold leading-[2rem] tracking-[-0.02em] drop-shadow-sm"
              text={intro}
              duration={20}
            />
          </CardItem>
          <CardItem className="mt-5">
            <ul className="space-y-2 text-neutral-500 dark:text-neutral-300 text-lg">
              <li className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                <a href="#Skills">Skill Sets</a>
              </li>
              <li className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Chromium Developer
              </li>
              <li className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Web Developer
              </li>
              <li className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Game Developer
              </li>
              <li className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Game Critic
              </li>
            </ul>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default NameCard;
