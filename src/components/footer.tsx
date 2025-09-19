const Footer = function () {
  return (
    <>
      <footer className="flex flex-col md:flex-row justify-around items-center py-6 border-t border-half-white bg-black">
        <div className="coyright">
          <a href="#">
            <p>
              © Copyright 2025 - Design By <span> </span>
              <span className="text-red-600 font-bold text-1xl">
                Abdullah Saafi
              </span>
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
    </>
  );
};

export default Footer;
