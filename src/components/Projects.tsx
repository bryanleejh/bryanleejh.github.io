interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Weather App",
    description: "Built using react, tailwind, vite and openweathermap api",
    imageUrl: "./public/weather-app.png",
  },
  {
    id: 2,
    title: "Project 2",
    description: "A brief description of project 2",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A brief description of project 3",
    imageUrl: "https://via.placeholder.com/300x200",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
