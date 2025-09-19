const InvestedHours = function () {
  return (
    <>
      <section
        className="invested-hours bg-cover bg-center w-full px-20 py-20 flex justify-between flex-wrap"
        style={{
          backgroundImage: "url('/img/milstone-background.jpg')",
        }}
      >
        <div className="px-16 py-8 text-center">
          <h6 className="text-4xl font-bolder font-black">760</h6>
          <p className="text-[10px] font-bold uppercase">Hours of Works</p>
        </div>
        <div className="mx-16 my-8 text-center">
          <h6 className="text-4xl font-bolder font-black">03</h6>
          <p className="text-[10px] font-bold uppercase">Projects done</p>
        </div>
        <div className="mx-16 my-8 text-center">
          <h6 className="text-4xl font-bolder font-black">soon</h6>
          <p className="text-[10px] font-bold uppercase">satisfied customers</p>
        </div>
        <div className="mx-16 my-8 text-center">
          <h6 className="text-4xl font-bolder font-black">soon</h6>
          <p className="text-[10px] font-bold uppercase">award wining</p>
        </div>
      </section>
    </>
  );
};

export default InvestedHours;
