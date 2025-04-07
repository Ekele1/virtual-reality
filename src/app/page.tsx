import Coins from "./components/coins";
import Discover from "./components/discover";
import Experience from "./components/experience";
import Explore from "./components/explore";
import HeroPage from "./components/heroPage";
import Holo from "./components/holo";
import NewFeature from "./components/newfeature";
import StepInto from "./components/stepInto";

export default function Home() {
  return (
    <div className="">
      <HeroPage />
      <NewFeature />
      <Discover />
      <Coins />
      <Explore />
      <Experience />
      <StepInto />
      <Holo />
    </div>
  );
}
