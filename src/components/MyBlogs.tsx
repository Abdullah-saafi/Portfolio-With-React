const MyBlogs = function () {
  return (
    <>
      <section id="blogs" className="py-20 px-5 md:px-40 text-center">
        <h1
          className="text-center font-bold font-black text-3xl border-b-2 border-dashed border-[var(--half-white)] inline-block pb-4 my-24 mb-8"
          style={{
            borderImage:
              "repeating-linear-gradient(to left, rgba(255, 255, 255, 0.659) 0%, rgba(255, 255, 255, 0.533) 20%, transparent 34%, transparent 25%) 1",
          }}
        >
          Recent Blogs
        </h1>
        <div className="blogs md:flex md:overflow-y-auto gap-8 items-center">
          <div className="blog min-w-100 text-left filter grayscale transition ease-in-out duration-1000 hover:filter-none hover:scale-101 my-4">
            <a href="#">
              <div className="blog-img">
                <img src="img/better-interface.jpg" alt="" />
              </div>
              <div className="blog-head">
                <h2 className="text-xl font-bold py-6 px-2">
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
                <h2 className="text-xl font-bold py-6 px-2">
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
                <h2 className="text-xl font-bold py-6 px-2">
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
                <h2 className="text-xl font-bold py-6 px-2">
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
                <h2 className="text-xl font-bold py-6 px-2">
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
                <h2 className="text-xl font-bold py-6 px-2">
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
    </>
  );
};

export default MyBlogs;
