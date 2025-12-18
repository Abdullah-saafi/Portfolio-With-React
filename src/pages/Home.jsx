import AboutMe from "../components/AboutMe";
import ExtraInfo from "../components/ExtraInfo";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MyJourney from "../components/MyJourney";
import MyWork from "../components/MyWork";
import Navbar from "../components/Navbar";
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
  )
}


export default Home;