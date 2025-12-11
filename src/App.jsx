import Header from "./components/Header";
import CustomCursor from "./components/CustomeMouse";
import AboutMe from "./components/AboutMe";
import PersonalInfo from "./components/PersonalInfo";
import MyWork from "./components/MyWork"
import MyJourney from "./components/MyJourney";
import ExtraInfo from "./components/ExtraInfo"
import Footer from "./components/Footer"
function App() {


  return (
    <div className="primeBg">
      <CustomCursor />
      <Header />
      <AboutMe />
      <PersonalInfo />
      <MyWork />
      <MyJourney />
      <ExtraInfo />
      <Footer />
    </div>
  )
}

export default App
