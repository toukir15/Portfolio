import { FaReact, FaNode, FaBootstrap } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";

const Skills = () => (
  <div id="skills" className="md:h-[calc(100vh_-_4rem)]">
    <div className="container mx-auto flex items-center h-full">
      <div className="md:flex items-center ">
        <div className="flex md:flex-row flex-col mt-14 md:mt-0 px-3 md:px-0">
          {/* skills icons  */}
          <div
            data-aos="fade-right"
            className="grid gap-10 grid-cols-2 justify-evenly md:grid-cols-3 md:w-1/2 md:mr-10 pr-3 order-2 md:order-1 mt-10 md:mt-0"
          >
            {/* html  */}
            <div className="w-full">
              <div className="w-32 md:w-44 h-32 md:h-44 mx-auto border rounded-md overflow-hidden flex justify-center items-center">
                <div>
                  <AiFillHtml5 className="text-7xl text-[#DD4B24]" />
                  <p className="text-primary-white mt-1 font-medium text-center">
                    HTML
                  </p>
                </div>
              </div>
            </div>

            {/* css  */}
            <div className="w-full">
              <div className="w-32 md:w-44 h-32 md:h-44 mx-auto border rounded-md overflow-hidden flex justify-center items-center">
                <div>
                  <BiLogoCss3 className="text-7xl text-[#2194F0]" />
                  <p className="text-primary-white mt-1 font-medium text-center">
                    CSS3
                  </p>
                </div>
              </div>
            </div>

            {/* tailwind  */}
            <div className="w-full">
              <div className="w-32 md:w-44 h-32 md:h-44 mx-auto border rounded-md overflow-hidden flex justify-center items-center">
                <div>
                  <BiLogoTailwindCss className="text-7xl text-highlight" />
                  <p className="text-primary-white mt-1 font-medium text-center">
                    Tailwind
                  </p>
                </div>
              </div>
            </div>

            {/* react js  */}
            <div className="w-full">
              <div className="w-32 md:w-44 h-32 md:h-44 mx-auto border rounded-md overflow-hidden flex justify-center items-center">
                <div>
                  <FaReact className="text-7xl text-highlight" />
                  <p className="text-primary-white mt-1 font-medium text-center">
                    React JS
                  </p>
                </div>
              </div>
            </div>

            {/* bootstrap  */}
            <div className="w-full">
              <div className="w-32 md:w-44 h-32 md:h-44 mx-auto border rounded-md overflow-hidden flex justify-center items-center">
                <div>
                  <FaBootstrap className="text-7xl text-[#9364de]" />
                  <p className="text-primary-white mt-1 font-medium text-center">
                    Bootstrap
                  </p>
                </div>
              </div>
            </div>

            {/* node js  */}
            <div className="w-full">
              <div className="w-32 md:w-44 h-32 md:h-44 mx-auto border rounded-md overflow-hidden flex justify-center items-center">
                <div>
                  <FaNode className="text-7xl text-[#49a146]" />
                  <p className="text-primary-white mt-1 font-medium text-center">
                    Node JS
                  </p>
                </div>
              </div>
            </div>

            {/* express js  */}
            <div className="w-full">
              <div className="w-32 md:w-44 h-32 md:h-44 mx-auto border rounded-md overflow-hidden flex justify-center items-center">
                <div>
                  <SiExpress className="text-7xl text-primary-white" />
                  <p className="text-primary-white mt-1 font-medium text-center">
                    Express JS
                  </p>
                </div>
              </div>
            </div>

            {/* mongodb  */}
            <div className="w-full">
              <div className="w-32 md:w-44 h-32 md:h-44 mx-auto border rounded-md overflow-hidden flex justify-center items-center">
                <div>
                  <SiMongodb className="text-7xl text-[#00e660c2]" />
                  <p className="text-primary-white mt-1 font-medium text-center">
                    Mongodb
                  </p>
                </div>
              </div>
            </div>

            {/* javaScript  */}
            <div className="w-full">
              <div className="w-32 md:w-44 h-32 md:h-44 mx-auto border rounded-md overflow-hidden flex justify-center items-center">
                <div>
                  <BiLogoJavascript className="text-7xl text-[#f0db4f]" />
                  <p className="text-primary-white mt-1 font-medium text-center">
                    Javascript
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* skills info  */}
          <div
            data-aos="fade-left"
            className="md:w-1/2 text-primary-white order-1 md:order-2"
          >
            <h3 className="font-semibold">MY SKILLS</h3>
            <h1 className="text-3xl md:text-5xl font-semibold mt-3">
              What <span className="text-highlight">I can do</span>
            </h1>
            <div className="max-h-[32rem] overflow-y-scroll mt-4 md:mt-8">
              <p className=" text-lg leading-7 text-justify pr-2">
                With my extensive expertise in React.js, Redux, Node.js,
                Express.js, MongoDB, JavaScript, HTML5, and CSS3, I possess a
                comprehensive skill set in full-stack web development. React.js
                serves as a powerful tool for creating dynamic and interactive
                user interfaces, enabling the development of highly engaging web
                applications. Redux complements React.js by facilitating
                efficient state management, ensuring smooth data flow and
                synchronization within the application. <br />
                <br />
                When it comes to server-side development, I am well-versed in
                Node.js and Express.js. These technologies allow me to build
                scalable and high-performance server applications that can
                handle heavy loads and ensure seamless user experiences.
                Additionally, I have experience with MongoDB, a flexible and
                efficient database management system that excels at handling
                large volumes of dat
                <br />
                <br />
                JavaScript is the backbone of modern web development, and I
                possess a strong command of its core concepts and libraries. It
                enables me to implement robust client-side logic and facilitate
                seamless API interactions, resulting in responsive and
                interactive web applications.
                <br />
                <br />
                To provide structure and style to web pages, I am proficient in
                HTML5 and CSS3. These markup and styling languages allow me to
                create visually appealing and user-friendly interfaces, ensuring
                a delightful user experience across various devices and screen
                sizes.
                <br />
                <br />
                By leveraging these skills, I am capable of developing
                feature-rich and responsive web applications that deliver
                seamless user experiences and efficient data management. I am
                constantly staying updated with the latest advancements in these
                technologies, ensuring that my development practices align with
                industry best practices and emerging trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
