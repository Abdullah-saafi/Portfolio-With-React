import { Link } from "react-router-dom";

const MyProjects = function () {
  return (
    <>
      <section
        id="portfolio"
        className="py-20 px-10 lg:px-40 md:px-20  text-center"
      >
        <h1
          className="text-center font-title font-black text-3xl border-b-2 border-dashed border-half-white inline-block pb-4 my-24 mb-8"
          style={{
            borderImage:
              "repeating-linear-gradient(to left, rgba(255, 255, 255, 0.659) 0%, rgba(255, 255, 255, 0.533) 20%, transparent 34%, transparent 25%) 1",
          }}
        >
          Projects{" "}
        </h1>
        <div className="portfolio-cards grid lg:grid-cols-3 md:grid-cols-2 gap-20">
          <div className="square-card">
            <Link to="/Todopage" className="square-card block">
              <div className="card-img h-88 rounded-xl blur-[2px] grayscale transition-all duration-1000 ease-in-out scale-110 mb-6 overflow-hidden border border-white hover:blur-[0px] hover:grayscale-0 hover:scale-100">
                <img
                  src="img/single-page-website.jpg"
                  alt="website img"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="card-text">
                <h6 className="text-2xl font-bold">
                  TODO APP <br /> Mini project 01
                </h6>
              </div>
            </Link>
          </div>
          <div className="square-card">
            <Link to="/QuizApp" className="square-card block">
              <div className="card-img card-img h-88 rounded-xl blur-[2px] grayscale transition-all duration-1000 ease-in-out scale-110 mb-6 overflow-hidden border border-white hover:blur-[0px] hover:grayscale-0 hover:scale-100">
                <img
                  src="img/multi-img-website.jpg"
                  alt="website img"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <div className="card-text">
              <h6 className="text-2xl font-bold">
                Quiz App <br /> Mini Project 02
              </h6>
            </div>
          </div>
          <div className="square-card">
            <Link to="/MultiStepForm " className="square-card block">
              <div className="card-img card-img h-88 rounded-xl blur-[2px] grayscale transition-all duration-1000 ease-in-out scale-110 mb-6 overflow-hidden border border-white hover:blur-[0px] hover:grayscale-0 hover:scale-100">
                <img
                  src="img/reposive-img.png"
                  alt="website img"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="card-text">
                <h6 className="text-2xl font-bold">
                  Multi Step Page <br /> Mini Project 03
                </h6>
              </div>
            </Link>
          </div>
          <div className="square-card">
            <div className="card-img card-img h-88 rounded-xl blur-[2px] grayscale transition-all duration-1000 ease-in-out scale-110 mb-6 overflow-hidden border border-white hover:blur-[0px] hover:grayscale-0 hover:scale-100">
              <img
                src="img/soon.png"
                alt="#"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="card-text">
              <h6 className="text-2xl font-bold">Apps Building</h6>
            </div>
          </div>
          <div className="square-card">
            <div className="card-img card-img h-88 rounded-xl blur-[2px] grayscale transition-all duration-1000 ease-in-out scale-110 mb-6 overflow-hidden border border-white hover:blur-[0px] hover:grayscale-0 hover:scale-100">
              <img
                src="img/my-img.png"
                alt="self img "
                className="w-full h-full object-cover"
              />
            </div>
            <div className="card-text">
              <h6 className="text-2xl font-bold">About Me</h6>
            </div>
          </div>
          <div className="square-card">
            <div className="card-img card-img h-88 rounded-xl blur-[2px] grayscale transition-all duration-1000 ease-in-out scale-110 mb-6 overflow-hidden border border-white hover:blur-[0px] hover:grayscale-0 hover:scale-100">
              <img
                src="img/fun.jpg"
                alt="friends img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="card-text">
              <h6 className="text-2xl font-bold">Life Beyond Work</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyProjects;
