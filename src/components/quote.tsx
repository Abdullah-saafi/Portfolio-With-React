const Myquote = function () {
  return (
    <section
      className="qoute-section bg-center bg-no-repeat bg-contain brightness-100 py-20 px-10 sm:px-40"
      style={{
        backgroundImage:
          "url('/img/dark-theme-background-dutvk1qfunkczobq.jpg')",
      }}
    >
      <div className="my-qoute text-left">
        <span className="text-5xl sm:text-5xl text-red-600">
          <i className="bi bi-text-paragraph"></i>
        </span>
        <blockquote className="text-1xl sm:text-3xl font-bold sm:leading-10 mt-4">
          Do more than its required. What is the distance between someone who
          <br />
          achieves their goals consistently and those who spend their lives and
          <br />
          careers merely following? The extra mile.
        </blockquote>
        <h2 className="font-title font-light text-base border-l border-half-white text-opacity-50 my-8 pl-4">
          Abdullah Saafi
        </h2>
      </div>
    </section>
  );
};

export default Myquote;
