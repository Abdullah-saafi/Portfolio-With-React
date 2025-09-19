const MyJob = function () {
  return (
    <>
      <section id="i-do" className="py-20 lg:px-40 text-center">
        <h1
          className="text-center font-title font-black text-3xl border-b-2 border-dashed border-half-white inline-block pb-4  mb-8"
          style={{
            borderImage:
              "repeating-linear-gradient(to left, rgba(255, 255, 255, 0.659) 0%, rgba(255, 255, 255, 0.533) 20%, transparent 34%, transparent 25%) 1",
          }}
        >
          What I Do
        </h1>
        <div className="abilities grid sm:grid-cols-3 px-4 sm:px-2 lg:gap-4 font-body">
          <div className="offer border-l border-[var(--half-white)] px-4 mt-8">
            <div className="brand-logo flex items-center text-4xl">
              <span className="text-red-600 text-5xl mr-4">
                <i className="bi bi-slack"></i>
              </span>
              <h6 className="text-3xl font-black">Branding</h6>
            </div>
            <div className="offer-details text-left leading-6 text-[var(--half-white)] mt-4">
              Focused on transforming your vision into reality with modern,
              responsive, and highly functional web solutions.
            </div>
          </div>
          <div className="offer border-l border-[var(--half-white)] px-4 mt-8">
            <div className="brand-logo flex items-center text-4xl">
              <span className="text-red-600 text-5xl mr-4">
                <i className="bi bi-browser-edge"></i>
              </span>
              <h6 className="text-3xl font-black">Front-End</h6>
            </div>
            <div className="offer-details text-left leading-6 text-[var(--half-white)] mt-4">
              Proficient in HTML, CSS, JavaScript, and React. Committed to
              delivering seamless and engaging user experiences.
            </div>
          </div>
          <div className="offer border-l border-[var(--half-white)] px-4 mt-8">
            <div className="brand-logo flex items-center text-4xl">
              <span className="text-red-600 text-5xl mr-4">
                <i className="bi bi-tools"></i>
              </span>
              <h6 className="text-3xl font-black">Back-End</h6>
            </div>
            <div className="offer-details text-left leading-6 text-[var(--half-white)] mt-4">
              Currently expanding my skills in back-end development to build
              robust and scalable server-side solutions.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyJob;
