import { useState, useEffect } from "react";

function HeroSec() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 830);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full top-0 left-0 -z-10 object-cover"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>

      <aside className=" text-white  fixed top-70 md:top-[50%]  flex items-center px-8 z-[100]">
        <div className="social-links">
          <ol className="space-y-2">
            <li className="text-red-600 hover:text-white transition-colors duration-900">
              <a href="https://web.facebook.com/profile.php?id=100006634815438">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li className="text-red-600 hover:text-white transition-colors duration-900">
              <a href="https://wa.me/923132388723">
                <i className="bi bi-whatsapp"></i>
              </a>
            </li>
            <li className="text-red-600 hover:text-white transition-colors duration-900">
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <a href="https://www.linkedin.com/in/abdullah-saafi-641a5a305/">
              <p className="text-[var(--half-white)] [writing-mode:vertical-lr] [transform:rotate(178deg)] text-[0.9rem] hover:text-red-600 transition-colors duration-900">
                Follow me
              </p>
            </a>
          </ol>
        </div>
      </aside>

      <nav className="fixed flex top-0 left-0 bg-black justify-between items-center text-white md:px-5 md:px-15 py-8 w-full z-[100]">
        <div className="logo">
          <img
            src="img/my-logo.png"
            className="w-30 sm:w-40"
            alt="Saafi Logo"
          />
        </div>

        {!isMobile && (
          <div className="nav-bar lg:block">
            <ol className="flex font-semibold text-[0.9rem] font-title space-x-6">
              <li className="hover:text-red-500 transition-colors duration-500">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-red-500 transition-colors duration-500">
                <a href="#about-me">About me</a>
              </li>
              <li className="hover:text-red-500 transition-colors duration-500">
                <a href="#i-do">What I Do</a>
              </li>
              <li className="hover:text-red-500 transition-colors duration-500">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="hover:text-red-500 transition-colors duration-500">
                <a href="#resume">My Resume</a>
              </li>
              <li className="hover:text-red-500 transition-colors duration-500">
                <a href="#blogs">Blog</a>
              </li>
              <li className="hover:text-red-500 transition-colors duration-500">
                <a href="#contact">Contact Me</a>
              </li>
            </ol>
          </div>
        )}

        {isMobile && !isSidebarOpen && (
          <div
            className="font-semibold cursor-pointer z-[1000] mr-10"
            onClick={() => setIsSidebarOpen(true)}
          >
            Menu <i className="bi bi-list"></i>
          </div>
        )}
      </nav>

      <div className="hero-text absolute pt-[15rem]  left-[5rem] md:pt-[20rem] md:left-[10rem] text-white z-[0]">
        <div className="name text-[var(--p-color)] font-[var(--title-font)] font-extrabold text-[1rem] md:text-[2rem]">
          <h6>I am Abdullah Saafi</h6>
        </div>
        <div className="expertise text-[2rem] md:text-[4rem] font-extrabold font-[var(--body-font)]">
          <h1>PROGRAMMER</h1>
        </div>
        <div className="languages">
          <ol className="grid grid-rows-2 grid-cols-3 auto-cols-auto font-[var(--title-font)]">
            <li className="country font-semibold text-base border-l border-[var(--half-white)] pb-2 pl-2">
              USA
            </li>
            <li className="country font-semibold text-base border-l border-[var(--half-white)] pb-2 pl-2">
              Germany
            </li>
            <li className="country font-semibold text-base border-l border-[var(--half-white)] pb-2 pl-2">
              Pakistan
            </li>
            <li className="language text-[0.7rem] text-[var(--half-white)] border-l border-[var(--half-white)] pb-2 pl-2">
              English
            </li>
            <li className="language text-[0.7rem] text-[var(--half-white)] border-l border-[var(--half-white)] pb-2 pl-2">
              Deutsch
            </li>
            <li className="language text-[0.7rem] text-[var(--half-white)] border-l border-[var(--half-white)] pb-2 pl-2">
              Urdu, Pashto
            </li>
          </ol>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0  w-64 bg-black bg-opacity-90 z-[105] p-6 flex flex-col space-y-4 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="self-end text-white text-2xl cursor-pointer"
          onClick={() => setIsSidebarOpen(false)}
        >
          <i className="bi bi-x-lg"></i>
        </div>

        <ol className="flex flex-col font-semibold text-[0.9rem] font-title space-y-3 text-white mt-4 z-[2000]">
          <li className="hover:text-red-500 transition-colors duration-500">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-red-500 transition-colors duration-500">
            <a href="#about-me">About me</a>
          </li>
          <li className="hover:text-red-500 transition-colors duration-500">
            <a href="#i-do">What I Do</a>
          </li>
          <li className="hover:text-red-500 transition-colors duration-500">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="hover:text-red-500 transition-colors duration-500">
            <a href="#resume">My Resume</a>
          </li>
          <li className="hover:text-red-500 transition-colors duration-500">
            <a href="#blogs">Blog</a>
          </li>
          <li className="hover:text-red-500 transition-colors duration-500">
            <a href="#contact">Contact Me</a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default HeroSec;
