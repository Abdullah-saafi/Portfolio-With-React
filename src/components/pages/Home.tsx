import HeroSec from "../HeroSec";
import AboutSec from "../AboutSec";
import Myquote from "../quote";
import MyJob from "../myJob";
import MyProjects from "../myProjects";
import MyResume from "../myResume";
import InvestedHours from "../InvestedHours";
import MyBlogs from "../MyBlogs";
import ContactForm from "../ContactForm";
import Footer from "../footer";
function Home() {
  return (
    <>
      <HeroSec />
      <AboutSec />
      <Myquote />
      <MyJob />
      <MyProjects />
      <MyResume />
      <InvestedHours />
      <MyBlogs />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;
