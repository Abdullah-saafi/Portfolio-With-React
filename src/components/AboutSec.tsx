const AboutSec = function () {
  return (
    <>
      <section id="about-me" className="py-20 md:px-40 px-10 text-center">
        <h1
          className="text-center font-title font-black text-3xl border-b-2 border-dashed border-half-white inline-block pb-4 my-24 mb-8"
          style={{
            borderImage:
              "repeating-linear-gradient(to left, rgba(255, 255, 255, 0.659) 0%, rgba(255, 255, 255, 0.533) 20%, transparent 34%, transparent 25%) 1",
          }}
        >
          About me{" "}
        </h1>

        <div className="about-me">
          <p className="font-body leading-7 text-[var(--half-white)]">
            I am a website designer from Pakistan, with a strong focus in UI/UX
            design. I love to get new experiences and <br />
            always learn from my surroundings. I've done many projects. You can
            check it through portfolio section <br />
            on this website. I looking forward to any opportunities and
            challenges.
          </p>
          <div className="circle-cards grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2   py-16">
            <div className="linux flex flex-col items-center">
              <div className="circle w-48 h-48 border-4 border-opacity-75 border-white rounded-full flex items-center justify-center text-4xl font-body">
                <h6>72.0%</h6>
              </div>
              <h6 className="font-body text-xl my-4 font-black">LINUX</h6>
            </div>
            <div className="html flex flex-col items-center">
              <div className="circle w-48 h-48 border-4 border-opacity-75 border-white rounded-full flex items-center justify-center text-4xl font-body">
                <h6>90.0%</h6>
              </div>
              <h6 className="font-body text-xl my-4 font-black">HTML</h6>
            </div>
            <div className="css flex flex-col items-center">
              <div className="circle w-48 h-48 border-4 border-opacity-75 border-white rounded-full flex items-center justify-center text-4xl font-body">
                <h6>84.0%</h6>
              </div>
              <h6 className="font-body text-xl my-4 font-black">CSS</h6>
            </div>
            <div className="javascript flex flex-col items-center">
              <div className="circle w-48 h-48 border-4 border-opacity-75 border-white rounded-full flex items-center justify-center text-4xl font-body">
                <h6 className="text-center">70%</h6>
              </div>
              <h6 className="font-body text-xl my-4 font-black">Javascript</h6>
            </div>
            <div className="TypeScript flex flex-col items-center">
              <div className="circle w-48 h-48 border-4 border-opacity-75 border-white rounded-full flex items-center justify-center text-4xl font-body">
                <h6 className="text-center">80%</h6>
              </div>
              <h6 className="font-body text-xl my-4 font-black">TypeScript</h6>
            </div>
            <div className="Node.JS flex flex-col items-center">
              <div className="circle w-48 h-48 border-4 border-opacity-75 border-white rounded-full flex items-center justify-center text-4xl font-body">
                <h6 className="text-center">73%</h6>
              </div>
              <h6 className="font-body text-xl my-4 font-black">Node.JS</h6>
            </div>
            <div className="React flex flex-col items-center">
              <div className="circle w-48 h-48 border-4 border-opacity-75 border-white rounded-full flex items-center justify-center text-4xl font-body">
                <h6 className="text-center">70%</h6>
              </div>
              <h6 className="font-body text-xl my-4 font-black">React</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSec;
