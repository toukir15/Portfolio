import SingleProject from "./SingleProject";

const Projects = () => {
  const project = [
    {
      name: "Tarulota website",
      technology: ["React", "Tailwind"],
      desiccation:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis perferendis accusamus, inventore repellat officiis pariatur vel cupiditate odio minus possimus sapiente, nesciunt illo quam numquam voluptate eveniet alias exercitationem nemo deleniti unde quis ex culpa. Est fugit perferendis praesentium minima ducimus exercitationem consectetur. Soluta, sequi. Velit labore aut vitae ipsam?",
      clint_site_link: "dskljfkldsjfjdsk",
      live_site_link: "sjdfkjlkds",
      server_site_link: "jdskljfkl",
      image_link: "https://i.ibb.co/ZJ2z0t0/Screenshot-2023-06-23-030018.jpg",
    },
    {
      name: "Tarulota website",
      technology: ["React", "Tailwind", "Tailwind", "Tailwind"],
      desiccation:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis perferendis accusamus, inventore repellat officiis pariatur vel cupiditate odio minus possimus sapiente, nesciunt illo quam numquam voluptate eveniet alias exercitationem nemo deleniti unde quis ex culpa. Est fugit perferendis praesentium minima ducimus exercitationem consectetur. Soluta, sequi. Velit labore aut vitae ipsam?",
      clint_site_link: "dskljfkldsjfjdsk",
      live_site_link: "sjdfkjlkds",
      server_site_link: "jdskljfkl",
      image_link: "https://i.ibb.co/wsPptxw/Screenshot-2023-06-23-032428.jpg",
    },
    {
      name: "Tarulota website",
      technology: ["React", "Tailwind", "Tailwind", "Tailwind"],
      desiccation:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis perferendis accusamus, inventore repellat officiis pariatur vel cupiditate odio minus possimus sapiente, nesciunt illo quam numquam voluptate eveniet alias exercitationem nemo deleniti unde quis ex culpa. Est fugit perferendis praesentium minima ducimus exercitationem consectetur. Soluta, sequi. Velit labore aut vitae ipsam?",
      clint_site_link: "dskljfkldsjfjdsk",
      live_site_link: "sjdfkjlkds",
      server_site_link: "jdskljfkl",
      image_link: "https://i.ibb.co/wsPptxw/Screenshot-2023-06-23-032428.jpg",
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
