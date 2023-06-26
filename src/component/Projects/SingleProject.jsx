const SingleProject = ({ info, side }) => {
  const {
    name,
    technology,
    desiccation,
    clint_site_link,
    live_site_link,
    server_site_link,
    image_link,
  } = info || {};

  // check odd and even number
  function checkOdd(number) {
    if (number % 2 === 0) {
      return false;
    } else {
      return true;
    }
  }

  const sideChecker = checkOdd(side);

  console.log(sideChecker);

  return (
    <div
      className={`flex   px-3 md:px-0  ${
        sideChecker ? "md:flex-row-reverse flex-col" : " md:flex-row flex-col"
      }`}
    >
      <div
        className="md:w-1/2 order-2 md:order-1"
        data-aos={sideChecker ? "fade-right " : "fade-left"}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mt-4 md:mt-0">
          {name}
        </h2>
        {/*Technology used*/}
        <div className="flex gap-3 flex-wrap mt-4 text-sm md:text-base">
          {technology?.map((t, key) => (
            <div
              key={key}
              className="px-3 py-1.5 rounded bg-[#0e85c5] inline font-medium"
            >
              {t}
            </div>
          ))}
        </div>
        <p className="mt-6 text-justify">{desiccation}</p>

        <div className="mt-8 flex gap-x-5 text-sm md:text-base">
          <button className="px-3 py-2 rounded-md border font-medium ease-in-out duration-150 hover:bg-[#5e96ef] hover:border-[#5e96ef]">
            <a href={live_site_link} target="_blank" rel="noopener noreferrer">
              Live Site
            </a>
          </button>
          <button className="px-3 py-2 rounded-md border font-medium ease-in-out duration-150 hover:bg-[#5e96ef] hover:border-[#5e96ef]">
            <a href={clint_site_link} target="_blank" rel="noopener noreferrer">
              Clint Code
            </a>
          </button>{" "}
          <button className="px-3 py-2 rounded-md border font-medium ease-in-out duration-150 hover:bg-[#5e96ef] hover:border-[#5e96ef]">
            <a
              href={server_site_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Server Code
            </a>
          </button>
        </div>
      </div>

      <div
        className="md:w-1/2 flex justify-center items-center"
        data-aos={!sideChecker ? "fade-right" : " fade-left"}
      >
        <div className="max-w-[30rem] rounded-md overflow-hidden border">
          <img src={image_link} alt="project" />
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
