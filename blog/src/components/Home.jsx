import Grid from "./Grid";
import NameCard from "./NameCard";
import { SkillComponent } from "./SkillComponment";

const Home = () => {
  return (
    <div>
      <NameCard />
      <Grid />
      <SkillComponent />
    </div>
  );
};

export default Home;
