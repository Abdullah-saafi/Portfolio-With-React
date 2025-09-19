import { useState } from "react";

const SaafiPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white">
      {/* Header Section */}
      <header className="h-screen relative">
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full top-0 left-0 z-[-1] object-cover"
        >
          <source src="hero-background.mp4" type="video/mp4" />
        </video>

        <aside className="text-white h-full absolute flex items-center px-8 fixed top-16 z-100">
          <div className="social-links">
            <ol>
              <li>
                <a href="https://web.facebook.com/profile.php?id=100006634815438">
                  <i className="bi bi-facebook flex mb-4 text-p-color text-base hover:text-half-white transition ease-in-out duration-500"></i>
                </a>
              </li>
              <li>
                <a href="https://wa.me/923132388723">
                  <i className="bi bi-whatsapp flex mb-4 text-p-color text-base hover:text-half-white transition ease-in-out duration-500"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-instagram flex mb-4 text-p-color text-base hover:text-half-white transition ease-in-out duration-500"></i>
                </a>
              </li>
              <a href="https://www.linkedin.com/in/abdullah-saafi-641a5a305/">
                <p className="writing-mode-vertical rotate-180 text-half-white font-body text-base hover:text-p-color transition ease-in-out duration-1000">
                  Follow me
                </p>
              </a>
            </ol>
          </div>
        </aside>

        <nav className="fixed flex justify-between items-center text-white py-8 px-24 bg-black bg-opacity-85 w-full z-100">
          <div className="logo">
            <img src="img/my-logo.png" alt="Saafi Logo" className="w-40" />
          </div>

          <div className="menu md:hidden">
            <a href="#" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <i className="bi bi-list text-2xl"></i>
            </a>
          </div>

          <div
            className={`nav-bar ${isMenuOpen ? "block" : "hidden"} md:block`}
          >
            <ol className="font-title flex text-base font-semibold md:flex">
              <li className="hover:text-p-color transition ease-in-out duration-1000 ml-4">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-p-color transition ease-in-out duration-1000 ml-4">
                <a href="#about-me">About me</a>
              </li>
              <li className="hover:text-p-color transition ease-in-out duration-1000 ml-4">
                <a href="#i-do">What I Do</a>
              </li>
              <li className="hover:text-p-color transition ease-in-out duration-1000 ml-4">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="hover:text-p-color transition ease-in-out duration-1000 ml-4">
                <a href="#resume">My Resume</a>
              </li>
              <li className="hover:text-p-color transition ease-in-out duration-1000 ml-4">
                <a href="#blogs">Blog</a>
              </li>
              <li className="hover:text-p-color transition ease-in-out duration-1000 ml-4">
                <a href="#contact">Contact Me</a>
              </li>
            </ol>
          </div>
        </nav>

        <div className="hero-section absolute top-60 left-40 text-white">
          <div className="name">
            <h6 className="text-p-color font-title font-extrabold text-xl">
              I Am Abdullah Saafi
            </h6>
          </div>
          <div className="expertise">
            <h1 className="text-3xl font-extrabold font-body tracking-tighter">
              PROGRAMMER
            </h1>
          </div>
          <div className="languages">
            <ol className="grid grid-rows-2 grid-cols-3 font-title">
              <li className="country border-l border-half-white pl-2 pb-2 font-semibold">
                USA
              </li>
              <li className="country border-l border-half-white pl-2 pb-2 font-semibold">
                Germany
              </li>
              <li className="country border-l border-half-white pl-2 pb-2 font-semibold">
                Pakistan
              </li>
              <li className="language border-l border-half-white pl-2 pb-2 text-half-white text-xs">
                English
              </li>
              <li className="language border-l border-half-white pl-2 pb-2 text-half-white text-xs">
                Deutsch
              </li>
              <li className="language border-l border-half-white pl-2 pb-2 text-half-white text-xs">
                Urdu, Pashto
              </li>
            </ol>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="text-white bg-black">
        {/* About Me Section */}
        <section id="about-me" className="py-20 px-40 text-center">
          <h1 className="section-title">About Me</h1>
          <div className="about-me">
            <p className="font-body leading-7 text-half-white">
              I am a website designer from Pakistan, with a strong focus in
              UI/UX design. I love to get new experiences and <br />
              always learn from my surroundings. I've done many projects. You
              can check it through portfolio section <br />
              on this website. I looking forward to any opportunities and
              challenges.
            </p>
            <div className="circle-cards flex justify-around items-center flex-wrap py-16">
              <div className="linux">
                <div className="circle-card">
                  <h6>72.0%</h6>
                </div>
                <h6 className="font-body text-xl my-4 font-black">LINUX</h6>
              </div>
              <div className="html">
                <div className="circle-card">
                  <h6>90.0%</h6>
                </div>
                <h6 className="font-body text-xl my-4 font-black">HTML</h6>
              </div>
              <div className="css">
                <div className="circle-card">
                  <h6>84.0%</h6>
                </div>
                <h6 className="font-body text-xl my-4 font-black">CSS</h6>
              </div>
              <div className="javascript">
                <div className="circle-card">
                  <h6 className="text-center">
                    Soon <br />
                    In Shaa Allah
                  </h6>
                </div>
                <h6 className="font-body text-xl my-4 font-black">
                  Javascript
                </h6>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="qoute-section bg-cover bg-center brightness-90 py-20 px-40">
          <div className="my-qoute text-left">
            <span className="text-5xl text-p-color">
              <i className="bi bi-text-paragraph"></i>
            </span>
            <blockquote className="text-3xl font-body leading-10 mt-4">
              Do more than its required. What is the distance between someone
              who
              <br />
              achieves their goals consistently and those who spend their lives
              and
              <br />
              careers merely following? The extra mile.
            </blockquote>
            <h2 className="font-title font-light text-base border-l border-half-white text-half-white my-8 pl-4">
              Abdullah Saafi
            </h2>
          </div>
        </section>

        {/* What I Do Section */}
        <section id="i-do" className="py-20 px-40 text-center">
          <h1 className="section-title">What I Do</h1>
          <div className="abilities grid grid-cols-3 gap-4 font-body">
            <div className="offer border-l border-half-white px-4 mt-8">
              <div className="brand-logo flex items-center text-4xl">
                <span className="text-p-color text-5xl mr-4">
                  <i className="bi bi-slack"></i>
                </span>
                <h6 className="text-xl font-black">Branding</h6>
              </div>
              <div className="offer-details text-left leading-6 text-half-white mt-4">
                Focused on transforming your vision into reality with modern,
                responsive, and highly functional web solutions.
              </div>
            </div>
            <div className="offer border-l border-half-white px-4 mt-8">
              <div className="brand-logo flex items-center text-4xl">
                <span className="text-p-color text-5xl mr-4">
                  <i className="bi bi-browser-edge"></i>
                </span>
                <h6 className="text-xl font-black">Front-End</h6>
              </div>
              <div className="offer-details text-left leading-6 text-half-white mt-4">
                Proficient in HTML, CSS, JavaScript, and React. Committed to
                delivering seamless and engaging user experiences.
              </div>
            </div>
            <div className="offer border-l border-half-white px-4 mt-8">
              <div className="brand-logo flex items-center text-4xl">
                <span className="text-p-color text-5xl mr-4">
                  <i className="bi bi-tools"></i>
                </span>
                <h6 className="text-xl font-black">Back-End</h6>
              </div>
              <div className="offer-details text-left leading-6 text-half-white mt-4">
                Currently expanding my skills in back-end development to build
                robust and scalable server-side solutions.
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 px-40 text-center">
          <h1 className="section-title">Portfolio</h1>
          <div className="portfolio-cards grid grid-cols-3 gap-20">
            <div className="square-card">
              <div className="card-img">
                <img src="img/single-page-website.jpg" alt="website img" />
              </div>
              <div className="card-text">
                <h6 className="text-2xl font-body">Single Page Website</h6>
              </div>
            </div>
            <div className="square-card">
              <div className="card-img">
                <img src="img/multi-img-website.jpg" alt="website img" />
              </div>
              <div className="card-text">
                <h6 className="text-2xl font-body">Multi Pages Website</h6>
              </div>
            </div>
            <div className="square-card">
              <div className="card-img">
                <img src="img/reposive-img.png" alt="website img" />
              </div>
              <div className="card-text">
                <h6 className="text-2xl font-body">Responsive Website</h6>
              </div>
            </div>
            <div className="square-card">
              <div className="card-img">
                <img src="img/soon.png" alt="#" />
              </div>
              <div className="card-text">
                <h6 className="text-2xl font-body">Apps Building</h6>
              </div>
            </div>
            <div className="square-card">
              <div className="card-img">
                <img src="img/my-img.png" alt="self img" />
              </div>
              <div className="card-text">
                <h6 className="text-2xl font-body">About Me</h6>
              </div>
            </div>
            <div className="square-card">
              <div className="card-img">
                <img src="img/fun.jpg" alt="friends img" />
              </div>
              <div className="card-text">
                <h6 className="text-2xl font-body">Life Beyond Work</h6>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="resume py-20 px-40">
          <h1 className="section-title">My Resume</h1>
          <div className="resume-detail grid grid-cols-2 gap-8">
            <div className="experiences">
              <h2 className="font-title text-2xl my-8">Experiences</h2>
              <div className="experiences-detail mb-8">
                <div className="count bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 flex items-center rounded-xl p-4">
                  <div className="numb w-10 h-10 flex items-center justify-center bg-p-color rounded-full border border-red-500">
                    <p>1</p>
                  </div>
                  <div className="duration ml-8">
                    <p>2022-2024</p>
                  </div>
                </div>
                <div className="about-expe border-l border-half-white ml-5 pl-8 py-8">
                  <div className="position font-title text-xl font-semibold">
                    Stitching Production Incharge
                  </div>
                  <div className="company font-title text-p-color text-base py-4">
                    Meko Textile Mills Pvt.
                  </div>
                  <div className="responsibi text-half-white leading-7 font-body">
                    Worked as a Stitching Floor Incharge in a garments company,
                    overseeing production processes, ensuring quality control,
                    and managing team operations. Successfully coordinated
                    workflows to meet deadlines and maintained high standards of
                    efficiency and product quality.
                  </div>
                </div>
              </div>
              <div className="experiences-detail mb-8">
                <div className="count bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 flex items-center rounded-xl p-4">
                  <div className="numb w-10 h-10 flex items-center justify-center bg-p-color rounded-full border border-red-500">
                    <p>2</p>
                  </div>
                  <div className="duration ml-8">
                    <p>2019-2022</p>
                  </div>
                </div>
                <div className="about-expe border-l border-half-white ml-5 pl-8 py-8">
                  <div className="position font-title text-xl font-semibold">
                    Anchor Development & Construction Company.
                  </div>
                  <div className="company font-title text-p-color text-base py-4">
                    Assistance Enginer
                  </div>
                  <div className="responsibi text-half-white leading-7 font-body">
                    Managing and overseeing the construction of 160 x 350 sq.yds
                    bungalows. Providing technical advice and engineering
                    solutions to any emerging problems and deciencies at site.
                    Preparing & reviewing the work schedule of dierent
                    activities to ensure progress on work.
                  </div>
                </div>
              </div>
              <div className="experiences-detail mb-8">
                <div className="count bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 flex items-center rounded-xl p-4">
                  <div className="numb w-10 h-10 flex items-center justify-center bg-p-color rounded-full border border-red-500">
                    <p>3</p>
                  </div>
                  <div className="duration ml-8">
                    <p>2017-2019</p>
                  </div>
                </div>
                <div className="about-expe border-l border-half-white ml-5 pl-8 py-8">
                  <div className="position font-title text-xl font-semibold">
                    Iftikhar Ahmed Construction Company.
                  </div>
                  <div className="company font-title text-p-color text-base py-4">
                    Sub-Engineer.
                  </div>
                  <div className="responsibi text-half-white leading-7 font-body">
                    Checking and ensuring that technical designs and drawings
                    are followed and client requirements are met. Conducting an
                    on-site investigation and analysing data such as soil
                    investigation, FDT test, and other lab reports. Timely
                    arrangement of construction material and machinery to ensure
                    smooth execution of work.
                  </div>
                </div>
              </div>
            </div>
            <div className="education experiences">
              <h2 className="font-title text-2xl my-8">Education</h2>
              <div className="experiences-detail mb-8">
                <div className="count bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 flex items-center rounded-xl p-4">
                  <div className="numb w-10 h-10 flex items-center justify-center bg-p-color rounded-full border border-red-500">
                    <p>1</p>
                  </div>
                  <div className="duration ml-8">
                    <p>2024-now</p>
                  </div>
                </div>
                <div className="about-expe border-l border-half-white ml-5 pl-8 py-8">
                  <div className="position font-title text-xl font-semibold">
                    Professional Software Development Course (PSDC)
                  </div>
                  <div className="company font-title text-p-color text-base py-4">
                    Baitussalam Tech Park
                  </div>
                  <div className="responsibi text-half-white leading-7 font-body">
                    Currently learning web development with HTML, CSS, and
                    JavaScript. Gaining prociency in Python programming and
                    problem-solving. Exploring front-end frameworks like React.
                    Developing skills in software design and debugging.
                  </div>
                </div>
              </div>
              <div className="experiences-detail mb-8">
                <div className="count bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 flex items-center rounded-xl p-4">
                  <div className="numb w-10 h-10 flex items-center justify-center bg-p-color rounded-full border border-red-500">
                    <p>2</p>
                  </div>
                  <div className="duration ml-8">
                    <p>2014-2017</p>
                  </div>
                </div>
                <div className="about-expe border-l border-half-white ml-5 pl-8 py-8">
                  <div className="position font-title text-xl font-semibold">
                    Diploma Of Associate Engineer (DAE)
                  </div>
                  <div className="company font-title text-p-color text-base py-4">
                    Al-Jadoon Institute of Technology
                  </div>
                  <div className="responsibi text-half-white leading-7 font-body">
                    Detailed study of analysis and design of Reinforced concrete
                    components of a structure. Study of geology and soil
                    mechanics Basic mathematical techniques (Algebra and
                    dierential equations, Numerical Analysis, Probability and
                    Statistics)
                  </div>
                </div>
              </div>
              <div className="experiences-detail mb-8">
                <div className="count bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 flex items-center rounded-xl p-4">
                  <div className="numb w-10 h-10 flex items-center justify-center bg-p-color rounded-full border border-red-500">
                    <p>3</p>
                  </div>
                  <div className="duration ml-8">
                    <p>2014-2017</p>
                  </div>
                </div>
                <div className="about-expe border-l border-half-white ml-5 pl-8 py-8">
                  <div className="position font-title text-xl font-semibold">
                    Secondary School Certificate (Science)
                  </div>
                  <div className="company font-title text-p-color text-base py-4">
                    Mengal Islamia Secondary School
                  </div>
                  <div className="responsibi text-half-white leading-7 font-body">
                    Completed secondary education with a focus on science,
                    building a strong foundation in physics, chemistry, and
                    biology. Gained analytical and problem-solving skills
                    through practical and theoretical learning. Passionate about
                    applying scientific knowledge to real-world challenges.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Invested Hours Section */}
        <section className="invested-hours bg-cover bg-center w-full py-20 flex justify-between flex-wrap">
          <div className="mx-16 my-8">
            <h6 className="text-2xl font-body font-black">760</h6>
            <p className="text-xs font-title uppercase">Hours of Works</p>
          </div>
          <div className="mx-16 my-8">
            <h6 className="text-2xl font-body font-black">03</h6>
            <p className="text-xs font-title uppercase">Projects done</p>
          </div>
          <div className="mx-16 my-8">
            <h6 className="text-2xl font-body font-black">soon</h6>
            <p className="text-xs font-title uppercase">satisfied customers</p>
          </div>
          <div className="mx-16 my-8">
            <h6 className="text-2xl font-body font-black">soon</h6>
            <p className="text-xs font-title uppercase">award wining</p>
          </div>
        </section>

        {/* Blogs Section */}
        <section id="blogs" className="py-20 px-40">
          <h1 className="section-title">Recent Blogs</h1>
          <div className="blogs flex overflow-y-auto gap-8 items-center">
            <div className="blog min-w-100 text-left filter grayscale transition ease-in-out duration-1000 hover:filter-none hover:scale-101 my-4">
              <a href="#">
                <div className="blog-img">
                  <img src="img/better-interface.jpg" alt="" />
                </div>
                <div className="blog-head">
                  <h2 className="text-xl font-title py-6 px-2">
                    How to Make Better User Interface
                  </h2>
                </div>
                <div className="blog-details">
                  <p className="px-2 leading-6 font-body text-sm text-half-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Harum, exercitationem dolore? Veniam nihil est consectetur,
                    iusto tenetur distinctio inventore tempora dignissimos velit
                    aperiam, reiciendis quae facere, aut maxime doloribus! Quam.
                  </p>
                </div>
              </a>
            </div>
            <div className="blog min-w-100 text-left filter grayscale transition ease-in-out duration-1000 hover:filter-none hover:scale-101 my-4">
              <a href="#">
                <div className="blog-img">
                  <img src="img/2.jpg" alt="" />
                </div>
                <div className="blog-head">
                  <h2 className="text-xl font-title py-6 px-2">
                    10 Web Design Tips From Experts
                  </h2>
                </div>
                <div className="blog-details">
                  <p className="px-2 leading-6 font-body text-sm text-half-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Harum, exercitationem dolore? Veniam nihil est consectetur,
                    iusto tenetur distinctio inventore tempora dignissimos velit
                    aperiam, reiciendis quae facere, aut maxime doloribus! Quam.
                  </p>
                </div>
              </a>
            </div>
            <div className="blog min-w-100 text-left filter grayscale transition ease-in-out duration-1000 hover:filter-none hover:scale-101 my-4">
              <a href="#">
                <div className="blog-img">
                  <img src="img/3.jpg" alt="" />
                </div>
                <div className="blog-head">
                  <h2 className="text-xl font-title py-6 px-2">
                    The Impotance of Web Design
                  </h2>
                </div>
                <div className="blog-details">
                  <p className="px-2 leading-6 font-body text-sm text-half-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Harum, exercitationem dolore? Veniam nihil est consectetur,
                    iusto tenetur distinctio inventore tempora dignissimos velit
                    aperiam, reiciendis quae facere, aut maxime doloribus! Quam.
                  </p>
                </div>
              </a>
            </div>
            <div className="blog min-w-100 text-left filter grayscale transition ease-in-out duration-1000 hover:filter-none hover:scale-101 my-4">
              <a href="#">
                <div className="blog-img">
                  <img src="img/6.jpg" alt="" />
                </div>
                <div className="blog-head">
                  <h2 className="text-xl font-title py-6 px-2">
                    Tips For Healty Coding Mthod
                  </h2>
                </div>
                <div className="blog-details">
                  <p className="px-2 leading-6 font-body text-sm text-half-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Harum, exercitationem dolore? Veniam nihil est consectetur,
                    iusto tenetur distinctio inventore tempora dignissimos velit
                    aperiam, reiciendis quae facere, aut maxime doloribus! Quam.
                  </p>
                </div>
              </a>
            </div>
            <div className="blog min-w-100 text-left filter grayscale transition ease-in-out duration-1000 hover:filter-none hover:scale-101 my-4">
              <a href="#">
                <div className="blog-img">
                  <img src="img/5.jpg" alt="" />
                </div>
                <div className="blog-head">
                  <h2 className="text-xl font-title py-6 px-2">
                    Importance of Team Work
                  </h2>
                </div>
                <div className="blog-details">
                  <p className="px-2 leading-6 font-body text-sm text-half-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Harum, exercitationem dolore? Veniam nihil est consectetur,
                    iusto tenetur distinctio inventore tempora dignissimos velit
                    aperiam, reiciendis quae facere, aut maxime doloribus! Quam.
                  </p>
                </div>
              </a>
            </div>
            <div className="blog min-w-100 text-left filter grayscale transition ease-in-out duration-1000 hover:filter-none hover:scale-101 my-4">
              <a href="#">
                <div className="blog-img">
                  <img src="img/4.jpg" alt="" />
                </div>
                <div className="blog-head">
                  <h2 className="text-xl font-title py-6 px-2">
                    The Importance of Self Study
                  </h2>
                </div>
                <div className="blog-details">
                  <p className="px-2 leading-6 font-body text-sm text-half-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Harum, exercitationem dolore? Veniam nihil est consectetur,
                    iusto tenetur distinctio inventore tempora dignissimos velit
                    aperiam, reiciendis quae facere, aut maxime doloribus! Quam.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="contact-me bg-cover bg-center py-8 px-8"
        >
          <h1 className="section-title">Contact Me</h1>
          <form action="">
            <div className="contact-form">
              <div className="form-row1 flex flex-col md:flex-row gap-4">
                <label htmlFor="name">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    className="w-52 h-10 bg-transparent border border-half-white mt-4 pl-4 text-left text-base font-body text-white"
                  />
                </label>
                <label htmlFor="email">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-52 h-10 bg-transparent border border-half-white mt-4 pl-4 text-left text-base font-body text-white"
                  />
                </label>
                <label htmlFor="number">
                  <input
                    type="number"
                    name="number"
                    id="number"
                    placeholder="Your Phone"
                    className="w-52 h-10 bg-transparent border border-half-white mt-4 pl-4 text-left text-base font-body text-white"
                  />
                </label>
              </div>
              <div className="form-row2">
                <textarea
                  name="your-msg"
                  id="your-msg"
                  placeholder="Your Message"
                  className="w-full md:w-630px h-150px mt-8 p-8 font-body text-xl bg-transparent text-white border border-half-white"
                ></textarea>
              </div>
            </div>
            <div className="form-row3">
              <label htmlFor="submit">
                <input
                  type="submit"
                  value="Send Message"
                  className="bg-p-color text-white py-3 px-10 rounded font-body text-base mt-8 cursor-pointer"
                />
              </label>
            </div>
          </form>
          <div className="conatct-me flex flex-col md:flex-row justify-evenly mt-20">
            <div className="my-email">
              <h6 className="text-xl font-title font-extrabold mt-6">
                Email Me
              </h6>
              <p className="text-sm text-half-white font-title leading-6">
                Abdullahsaafipro@gmail.com
              </p>
            </div>
            <div className="my-number">
              <h6 className="text-xl font-title font-extrabold mt-6">
                Call Me
              </h6>
              <p className="text-sm text-half-white font-title leading-6">
                0923132388723
              </p>
            </div>
            <div className="my-address">
              <h6 className="text-xl font-title font-extrabold mt-6">
                Address
              </h6>
              <p className="text-sm text-half-white font-title leading-6">
                Gul Ahmed ,Quaidabad,Malir <br />
                Karachi,Pakistan
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row justify-around items-center py-6 border-t border-half-white bg-black">
        <div className="coyright">
          <a href="#">
            <p className="text-half-white font-body">
              © Copyright 2025 - Design By Saafi
            </p>
          </a>
        </div>
        <div className="footer-links">
          <ol className="flex mt-8 md:mt-0">
            <li>
              <a
                href=""
                className="transition ease-in-out duration-1000 hover:bg-white hover:p-2 hover:rounded-full hover:text-black ml-8"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href=""
                className="transition ease-in-out duration-1000 hover:bg-white hover:p-2 hover:rounded-full hover:text-black ml-8"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </li>
            <li>
              <a
                href=""
                className="transition ease-in-out duration-1000 hover:bg-white hover:p-2 hover:rounded-full hover:text-black ml-8"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
            </li>
            <li>
              <a
                href=""
                className="transition ease-in-out duration-1000 hover:bg-white hover:p-2 hover:rounded-full hover:text-black ml-8"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href=""
                className="transition ease-in-out duration-1000 hover:bg-white hover:p-2 hover:rounded-full hover:text-black ml-8"
              >
                <i className="bi bi-pinterest"></i>
              </a>
            </li>
          </ol>
        </div>
      </footer>
    </div>
  );
};

export default SaafiPortfolio;
