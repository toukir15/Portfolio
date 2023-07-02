import SocialButtons from "../../shearComponent/SocialButtons/SocialButtons";
import resumePdf from "../../../public/resume.pdf";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";
import { FaBrain } from "react-icons/fa";
import { useState } from "react";
// console.log(resumePdf);
const HeroSection = () => {
  const man = "https://i.ibb.co/NZ0NLYL/out.jpg";
  const [active, setActive] = useState("home");

  return (
    <div id="home" className="md:h-[100vh] text-primary-white relative">
      <div className="container mx-auto h-full flex items-center">
        <div className="md:flex items-center px-3 md:px-16 md:pt-[8%]">
          {/* my info  */}
          <div data-aos="fade-right" className="md:w-1/2 pt-[5.2rem] md:pt-0">
            <p>Hello!</p>
            <h1 className="text-3xl md:text-5xl font-semibold mt-2">
              I'm <samp className="text-highlight">Toukir Ahmed</samp>
            </h1>
            <h3 className="text-xl md:text-3xl font-semibold mt-3">
              I'm a <span className="text-highlight">Frontend Developer</span>
            </h3>

            <p className="text-base font-normal mt-4 text-justify md:text-start md:mt-9">
              As an experienced Frontend Developer with over 1 years of hands-on
              experience in website creation, I have honed my skills to deliver
              high-quality designs. I take great pride in my ability to create
              visually appealing and intuitive websites that leave a lasting
              impression on users. With a keen eye for design aesthetics, I
              strive to craft engaging interfaces that enhance the user
              experience.
            </p>
            <div className="mt-6 flex md:flex-row flex-col items-center">
              <div className="order-2">
                <SocialButtons />
              </div>
              <div className="order-1">
                <a
                  // onClick={handleDownloadClick}
                  href={resumePdf}
                  download="Toukir-Ahmed-Resume"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3  bg-[#6366F1] rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>

                  <span className="ml-2 md:font-medium">Resume</span>
                </a>
              </div>
            </div>
          </div>
          {/* my photo  */}
          <div data-aos="fade-left" className="md:w-1/2 mt-4 md:mt-0">
            <div className="flex justify-center items-center">
              <img
                className="border rounded-xl overflow-hidden max-h-[25rem]"
                src={man}
                alt="Tanvir Ahmed"
              />
            </div>
          </div>

          {/* nav button  */}
          <div className="fixed right-8 hidden md:block">
            <ul className="flex flex-col gap-8 text-2xl ">
              <li>
                <a href="#home">
                  <button
                    onClick={() => setActive("home")}
                    className={`${
                      active === "home" ? "bg-[#6366F1]" : "bg-gray-800"
                    }  h-12 w-12 rounded-full  cursor-pointer flex justify-center items-center hover:bg-[#6366F1] transition  before-style`}
                  >
                    <AiFillHome />
                  </button>
                </a>
              </li>
              <li>
                <a href="#skills">
                  <button
                    onClick={() => setActive("skills")}
                    className={`${
                      active === "skills" ? "bg-[#6366F1]" : "bg-gray-800"
                    }  h-12 w-12 rounded-full cursor-pointer flex justify-center items-center hover:bg-[#6366F1] transition`}
                  >
                    <FaBrain />
                  </button>
                </a>
              </li>

              <li>
                <a href="#projects">
                  <button
                    onClick={() => setActive("projects")}
                    className={`${
                      active === "projects" ? "bg-[#6366F1]" : "bg-gray-800"
                    }  h-12 w-12 rounded-full cursor-pointer flex justify-center items-center hover:bg-[#6366F1] transition`}
                  >
                    <AiFillProject />
                  </button>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <button
                    onClick={() => setActive("contact")}
                    className={`${
                      active === "contact" ? "bg-[#6366F1]" : "bg-gray-800"
                    }  h-12 w-12 rounded-full cursor-pointer flex justify-center items-center hover:bg-[#6366F1] transition `}
                  >
                    <RiContactsFill />
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
