const ContactForm = function () {
  return (
    <>
      <section
        id="contact"
        className=" contact-me bg-cover bg-center text-center py-8 px-8"
        style={{
          backgroundImage: "url('/img/contactimg.jpg')",
        }}
      >
        <h1
          className="text-center font-bold font-black text-3xl border-b-2 border-dashed border-[var(--half-white)] inline-block pb-4 my-24 mb-8"
          style={{
            borderImage:
              "repeating-linear-gradient(to left, rgba(255, 255, 255, 0.659) 0%, rgba(255, 255, 255, 0.533) 20%, transparent 34%, transparent 25%) 1",
          }}
        >
          Contact Me
        </h1>
        <form action="">
          <div className="contact-form">
            <div className="form-row1 flex justify-center flex-col md:flex-row gap-4">
              <label htmlFor="name">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className="w-52 h-10 bg-transparent border border-[var(--half-white)] mt-4 pl-4 text-left text-base font-body text-white"
                />
              </label>
              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-52 h-10 bg-transparent border border-[var(--half-white)] mt-4 pl-4 text-left text-base font-body text-white"
                />
              </label>
              <label htmlFor="number">
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Your Phone"
                  className="w-52 h-10 bg-transparent border border-[var(--half-white)] mt-4 pl-4 text-left text-base font-body text-white"
                />
              </label>
            </div>
            <div className="form-row2">
              <textarea
                name="your-msg"
                id="your-msg"
                placeholder="Your Message"
                className="w-[200px] md:w-[600px] h-[150px] mt-8 p-8 bg-transparent border border-[var(--half-white)] mt-4 pl-4 text-left text-base font-body text-white"
              ></textarea>
            </div>
          </div>
          <div className="form-row3">
            <label htmlFor="submit">
              <input
                type="submit"
                value="Send Message"
                className="bg-[var(--p-color)] text-white py-3 px-10 rounded font-body text-base mt-8 cursor-pointer"
              />
            </label>
          </div>
        </form>
        <div className="conatct-me flex flex-col md:flex-row justify-evenly mt-20">
          <div className="my-email">
            <h6 className="text-xl font-title font-extrabold mt-6">Email Me</h6>
            <p className="text-sm text-half-white font-title leading-6">
              Abdullahsaafipro@gmail.com
            </p>
          </div>
          <div className="my-number">
            <h6 className="text-xl font-title font-extrabold mt-6">Call Me</h6>
            <p className="text-sm text-half-white font-title leading-6">
              0923132388723
            </p>
          </div>
          <div className="my-address">
            <h6 className="text-xl font-title font-extrabold mt-6">Address</h6>
            <p className="text-sm text-half-white font-title leading-6">
              Gul Ahmed ,Quaidabad,Malir <br />
              Karachi,Pakistan
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
