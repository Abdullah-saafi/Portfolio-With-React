import ScrollingTxtEff from "./ScrollingTxtEff"
import { TbApiApp } from "react-icons/tb";



const ExtraInfo = () => {
  return (
    <div className="MainContent h-screen primeBg overflow-hidden flex  flex-col justify-center ">
      <div className="">
      </div>
      <div className="w-screen">
        <div className="scondBg primeTxt text-1xl md:text-3xl py-3 -rotate-20 md:-rotate-10 scale-110  ">
          <ScrollingTxtEff
            text="Innovative Self-Made Creations   --  Tailored Web Development for You   ---  Custom Web Experince   ---- Driven by Passion Build with Code"
            icon={<TbApiApp />}
            duration={35} // Faster
          />


        </div>
        <div className="scondBg primeTxt text-1xl md:text-3xl py-3 rotate-20 md:rotate-10 scale-110  ">
          <ScrollingTxtEff
            text="Innovative Self-Made Creations   --  Tailored Web Development for You   ---  Custom Web Experince   ---- Driven by Passion Build with Code"
            icon={<TbApiApp className="left-[2rem]" />}
            duration={35} // Faster
          />


        </div>
      </div>
    </div>
  )
}



export default ExtraInfo;