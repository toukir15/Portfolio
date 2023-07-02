import SingleProject from "./SingleProject";

const Projects = () => {
  const project = [
    {
      name: "CampSportz",
      technology: [
        "HTML",
        "CSS3",
        "Tailwind",
        "Bootstrap",
        "javaScript",
        "React",
        "Express.js",
        "Node.js",
        "MongoDB",
      ],
      desiccation:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis perferendis accusamus, inventore repellat officiis pariatur vel cupiditate odio minus possimus sapiente, nesciunt illo quam numquam voluptate eveniet alias exercitationem nemo deleniti unde quis ex culpa. Est fugit perferendis praesentium minima ducimus exercitationem consectetur. Soluta, sequi. Velit labore aut vitae ipsam?",
      clint_site_link: "dskljfkldsjfjdsk",
      live_site_link: "sjdfkjlkds",
      server_site_link: "jdskljfkl",
      image_link: "https://i.ibb.co/rsg3T30/Screenshot-2023-06-27-233043.jpg",
    },
    {
      name: "ToyCarWorld",
      technology: [
        "HTML",
        "CSS3",
        "Tailwind",
        "Bootstrap",
        "javaScript",
        "React",
        "Express.js",
        "Node.js",
        "MongoDB",
      ],
      desiccation:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis perferendis accusamus, inventore repellat officiis pariatur vel cupiditate odio minus possimus sapiente, nesciunt illo quam numquam voluptate eveniet alias exercitationem nemo deleniti unde quis ex culpa. Est fugit perferendis praesentium minima ducimus exercitationem consectetur. Soluta, sequi. Velit labore aut vitae ipsam?",
      live_site_link: "https://toukir215.web.app/",
      clint_site_link: "https://github.com/toukir15/toy-car-client",
      server_site_link: "https://github.com/toukir15/toy-car-server",
      image_link: "https://i.ibb.co/d5ZSjtf/Screenshot-2023-06-27-232420.jpg",
    },
    {
      name: "Recipe Avenue",
      technology: [
        "HTML",
        "CSS3",
        "Tailwind",
        "Bootstrap",
        "javaScript",
        "React",
        "Express.js",
        "Node.js",
        "MongoDB",
      ],
      desiccation:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis perferendis accusamus, inventore repellat officiis pariatur vel cupiditate odio minus possimus sapiente, nesciunt illo quam numquam voluptate eveniet alias exercitationem nemo deleniti unde quis ex culpa. Est fugit perferendis praesentium minima ducimus exercitationem consectetur. Soluta, sequi. Velit labore aut vitae ipsam?",
      live_site_link: " https://chef-project-251.web.app/",
      clint_site_link: "https://github.com/toukir15/cher-recipe-client",
      server_site_link: "https://github.com/toukir15/chef-recipe-server",
      image_link: "https://i.ibb.co/p2mfHf5/Screenshot-2023-06-27-232532.jpg",
    },
  ];

  return (
    <div
      id="projects"
      className="text-primary-white md:min-h-[calc(100vh_-_4rem)] h-auto pb-6 mt-14 md:mt-0"
    >
      <div className="container mx-auto px-3 md:px-0">
        <div data-aos="fade-down">
          <h3 className="font-semibold">MY PROJECTS</h3>
          <h1 className="text-3xl md:text-5xl font-semibold mt-3">
            What <span className="text-highlight">I have built</span>
          </h1>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-y-20 md:gap-y-40">
          {project.map((sData, key) => (
            <SingleProject key={key} side={key} info={sData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
