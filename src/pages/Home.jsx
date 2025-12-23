import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import ExtraInfo from "../components/ExtraInfo";
import MyJourney from "../components/MyJourney";
import MyWork from "../components/MyWork";
import PersonalInfo from "../components/PersonalInfo";

const Home = () => {
  return (
    <div className="Main">
      <Header />
      <AboutMe />
      <PersonalInfo />
      <MyWork />
      <MyJourney />
      <ExtraInfo />
    </div>
  );
};

export default Home;
