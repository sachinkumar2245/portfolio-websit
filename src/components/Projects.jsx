const Projects = () => {
  const projects = [
    {
      title: "QnA System (Stack Overflow Clone)",
      description: "Built a fully functional Q&A platform enabling seamless community interaction. Implemented JWT authentication, user profiles, real-time updates (WebSockets), and advanced search with markdown support for enhanced usability.",
      image: "💡",
      techStack: ["NextJS","TypeScript", "React", "Node.js", "Express", "MongoDB", "Appwrite"],
      github: "https://github.com/sachinkumar2245/stackoverflow-clone",
      liveDemo: "https://ecommerce-demo.com",
      category: "Full-Stack"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "📋",
      techStack: ["React", "Firebase", "TailwindCSS", "Framer Motion"],
      github: "https://github.com/johndoe/taskmanager",
      liveDemo: "https://todoappforus.netlify.app/",
      category: "Frontend"
    },
    {
      title: "Prescripto",
      description: "Prescripto is an online doctor consultation app that connects patients with certified doctors for virtual appointments.",
      image: "👨‍⚕️",
      techStack: ["React", "Redux", "Tailwind CSS", "Axios", "WebSocket"],
      github: "https://github.com/sachinkumar2245/prescripto-frontend",
      liveDemo: "",
      category: "Frontend Development"
    },
    {
      title: "Weather Dashboard",
      description: "A simple Weather App built using Vanilla JavaScript and CSS, with no frameworks. This app allows you to check the current weather of any city in a clean and minimal interface.",
      image: "🌤️",
      techStack: ["JavaScript", "OpenWeather API", "Tailwind CSS"],
      github: "https://github.com/sachinkumar2245/Weather-App",
      liveDemo: "https://weatherappvanil.netlify.app/",
      category: "Frontend"
    },
    {
      title: "Video Tube",
      description: "This repository contains the backend architecture for Video Tube, a YouTube-inspired video streaming platform. It is designed with Node.js, Express, and MongoDB, following clean, scalable, and modular coding practices.",
      image: "🎬",
      techStack: ["Node.JS", "ExpressJS", "JWT", "MnogoDB ORM", "Cloudinary", "Custom API"],
      github: "https://github.com/sachinkumar2245/video-tube",
      liveDemo: "#", 
      category: "Backend"
    },
    {
      title: "Food Delivery App",
      description: "This is a simple food delivery app built with Vanillas JavaScript, HTML, and CSS. The app allows users to browse a menu, add items to their cart, and place an order.",
      image: "🍔",
      techStack: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/sachinkumar2245/food-delivery",
      liveDemo: "#",
      category: "Full Stack"
    }
  ]

  const getCategoryColor = (category) => {
    const colors = {
      'Full-Stack': 'bg-blue-100 text-blue-800',
      'Frontend': 'bg-green-100 text-green-800',
      'Backend': 'bg-purple-100 text-purple-800',
      'AI/ML': 'bg-orange-100 text-orange-800',
      'Data Science': 'bg-red-100 text-red-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've built that showcase my skills and passion for creating 
            innovative solutions to real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="card p-6 group hover:scale-105 transition-all duration-300"
            >
              {/* Project Image and Category */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                  {project.category}
                </span>
              </div>
              
              {/* Project Title and Description */}
                             <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Project Links */}
              <div className="flex gap-3">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-900 text-white text-center py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
                >
                  <svg className="w-4 h-4 mr-2 inline" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a 
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                >
                  <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            More <span className="gradient-text">Projects</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Portfolio Website", tech: "React + TailwindCSS", icon: "🌐" },
              { title: "Calculator App", tech: "JavaScript + CSS", icon: "🧮" },
              { title: "Todo List", tech: "React + LocalStorage", icon: "✅" },
              { title: "Quiz App", tech: "HTML + CSS + JS", icon: "❓" }
            ].map((project, index) => (
              <div key={index} className="card p-4 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl mb-3">{project.icon}</div>
                <h4 className="font-semibold text-gray-800 mb-2">{project.title}</h4>
                <p className="text-gray-600 text-sm">{project.tech}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with others. 
              Let's discuss how we can bring your ideas to life!
            </p>
            <button className="btn-primary">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
