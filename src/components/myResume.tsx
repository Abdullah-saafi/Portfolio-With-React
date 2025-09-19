const MyResume = function () {
  return (
    <>
      <section
        id="resume"
        className="resume py-20 px-10 md:px-20 lg:px-40 text-center"
      >
        <h1
          className="text-center font-title font-black text-3xl border-b-2 border-dashed border-[var(--half-white)] inline-block pb-4 my-24 mb-8"
          style={{
            borderImage:
              "repeating-linear-gradient(to left, rgba(255, 255, 255, 0.659) 0%, rgba(255, 255, 255, 0.533) 20%, transparent 34%, transparent 25%) 1",
          }}
        >
          My Resume
        </h1>
        <div className="resume-detail grid md:grid-cols-2 gap-8 text-left">
          <div className="experiences">
            <h2 className="font-title text-3xl font-bold my-8">Experiences</h2>
            <div className="experiences-detail mb-8">
              <div className="count bg-gradient-to-r from-[#2d2f32] via-[#26282b] to-[#1d20236c] flex items-center font-body rounded-xl">
                <div className="numb border border-red-500 w-10 h-10 flex items-center justify-center bg-red-600 rounded-full">
                  <p>1</p>
                </div>
                <div className="duration ml-8">
                  <p>2022-2024</p>
                </div>
              </div>
              <div className="about-expe border-l border-[var(--half-white)] ml-5 pl-8 py-8">
                <div className="position font-title text-xl font-semibold">
                  Stitching Production Incharge
                </div>
                <div className="company font-title text-red-600 text-base py-4">
                  Meko Textile Mills Pvt.
                </div>
                <div className="responsibi text-[var(--half-white)] leading-7 font-body">
                  Worked as a Stitching Floor Incharge in a garments company,
                  overseeing production processes, ensuring quality control, and
                  managing team operations. Successfully coordinated workflows
                  to meet deadlines and maintained high standards of efficiency
                  and product quality.
                </div>
              </div>
            </div>
            <div className="experiences-detail mb-8">
              <div className="count bg-gradient-to-r from-[#2d2f32] via-[#26282b] to-[#1d20236c] flex items-center font-body rounded-xl">
                <div className="numb border border-red-500 w-10 h-10 flex items-center justify-center bg-red-600 rounded-full">
                  <p>2</p>
                </div>
                <div className="duration ml-8">
                  <p>2019-2022</p>
                </div>
              </div>
              <div className="about-expe border-l border-[var(--half-white)] ml-5 pl-8 py-8">
                <div className="position font-title text-xl font-semibold">
                  Anchor Development & Construction Company.
                </div>
                <div className="company font-title text-red-600 text-base py-4">
                  Assistance Enginer
                </div>
                <div className="responsibi text-[var(--half-white)] leading-7 font-body">
                  Managing and overseeing the construction of 160 x 350 sq.yds
                  bungalows. Providing technical advice and engineering
                  solutions to any emerging problems and deciencies at site.
                  Preparing & reviewing the work schedule of dierent activities
                  to ensure progress on work.
                </div>
              </div>
            </div>
            <div className="experiences-detail mb-8">
              <div className="count bg-gradient-to-r from-[#2d2f32] via-[#26282b] to-[#1d20236c] flex items-center font-body rounded-xl">
                <div className="numb border border-red-500 w-10 h-10 flex items-center justify-center bg-red-600 rounded-full">
                  <p>3</p>
                </div>
                <div className="duration ml-8">
                  <p>2017-2019</p>
                </div>
              </div>
              <div className="about-expe border-l border-[var(--half-white)] ml-5 pl-8 py-8">
                <div className="position font-title text-xl font-semibold">
                  Iftikhar Ahmed Construction Company.
                </div>
                <div className="company font-title text-red-600 text-base py-4">
                  Sub-Engineer.
                </div>
                <div className="responsibi text-[var(--half-white)] leading-7 font-body">
                  Checking and ensuring that technical designs and drawings are
                  followed and client requirements are met. Conducting an
                  on-site investigation and analysing data such as soil
                  investigation, FDT test, and other lab reports. Timely
                  arrangement of construction material and machinery to ensure
                  smooth execution of work.
                </div>
              </div>
            </div>
          </div>
          <div className="education experiences">
            <h2 className="font-title text-3xl font-bold my-8">Education</h2>
            <div className="experiences-detail mb-8">
              <div className="count bg-gradient-to-r from-[#2d2f32] via-[#26282b] to-[#1d20236c] flex items-center font-body rounded-xl">
                <div className="numb border border-red-500 w-10 h-10 flex items-center justify-center bg-red-600 rounded-full">
                  <p>1</p>
                </div>
                <div className="duration ml-8">
                  <p>2024-now</p>
                </div>
              </div>
              <div className="about-expe border-l border-[var(--half-white)] ml-5 pl-8 py-8">
                <div className="position font-title text-xl font-semibold">
                  Professional Software Development Course (PSDC)
                </div>
                <div className="company font-title text-red-600 text-base py-4">
                  Baitussalam Tech Park
                </div>
                <div className="responsibi text-[var(--half-white)] leading-7 font-body">
                  Currently learning web development with HTML, CSS, and
                  JavaScript. Gaining prociency in Python programming and
                  problem-solving. Exploring front-end frameworks like React.
                  Developing skills in software design and debugging.
                </div>
              </div>
            </div>
            <div className="experiences-detail mb-8">
              <div className="count bg-gradient-to-r from-[#2d2f32] via-[#26282b] to-[#1d20236c] flex items-center font-body rounded-xl">
                <div className="numb border border-red-500 w-10 h-10 flex items-center justify-center bg-red-600 rounded-full">
                  <p>2</p>
                </div>
                <div className="duration ml-8">
                  <p>2014-2017</p>
                </div>
              </div>
              <div className="about-expe border-l border-[var(--half-white)] ml-5 pl-8 py-8">
                <div className="position font-title text-xl font-semibold">
                  Diploma Of Associate Engineer (DAE)
                </div>
                <div className="company font-title text-red-600 text-base py-4">
                  Al-Jadoon Institute of Technology
                </div>
                <div className="responsibi text-[var(--half-white)] leading-7 font-body">
                  Detailed study of analysis and design of Reinforced concrete
                  components of a structure. Study of geology and soil mechanics
                  Basic mathematical techniques (Algebra and dierential
                  equations, Numerical Analysis, Probability and Statistics)
                </div>
              </div>
            </div>
            <div className="experiences-detail mb-8">
              <div className="count bg-gradient-to-r from-[#2d2f32] via-[#26282b] to-[#1d20236c] flex items-center font-body rounded-xl">
                <div className="numb  border border-red-500 w-10 h-10 flex items-center justify-center bg-red-600 rounded-full">
                  <p>3</p>
                </div>
                <div className="duration ml-8">
                  <p>2012-2014</p>
                </div>
              </div>
              <div className="about-expe border-l border-[var(--half-white)] ml-5 pl-8 py-8">
                <div className="position font-title text-xl font-semibold">
                  Secondary School Certificate (Science)
                </div>
                <div className="company font-title text-red-600 text-base py-4">
                  Mengal Islamia Secondary School
                </div>
                <div className="responsibi text-[var(--[var(--half-white)])] leading-7 font-body">
                  Completed secondary education with a focus on science,
                  building a strong foundation in physics, chemistry, and
                  biology. Gained analytical and problem-solving skills through
                  practical and theoretical learning. Passionate about applying
                  scientific knowledge to real-world challenges.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyResume;
