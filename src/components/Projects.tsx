import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Web3 Deployer",
      description: "Decentralized hosting platform for deploying websites and dApps using blockchain technology. Features IPFS storage, smart contracts, and Web3Auth for secure authentication.",
      image: "https://freeimage.host/i/Ko1uxrQ",
      technologies: ["React.js", "TailwindCSS", "Drizzle ORM", "IPFS", "Web3Auth"],
      github: "https://github.com/Shyam-Prasath/web-3-deployer",
      live: "https://web-3-deployer.vercel.app/",
      featured: true
    },
    {
      title: "Sentiment Analysis Using AI",
      description: "Advanced NLP project using machine learning models like BERT for text classification. Implements sentiment analysis with high accuracy using modern AI techniques.",
      image: "https://freeimage.host/i/Ko1VUhv",
      technologies: ["Python", "BERT", "TextBlob", "spaCy", "NLP"],
      github: "https://github.com/REVANTH20052005/Sentiment-Analysis-Using-AI",
      live: "https://github.com/REVANTH20052005/Sentiment-Analysis-Using-AI",
      featured: true
    },
    {
      title: "Pharmacy Management System",
      description: "Comprehensive pharmacy management solution with inventory tracking, prescription management, and secure user authentication using SHA-256 encryption.",
      image: "https://freeimage.host/i/Ko1GOMB",
      technologies: ["Python GUI", "Java Spring Boot", "SQLite3", "SHA-256"],
      github: "https://github.com/Shyam-Prasath/Pharma-System-Using-Python",
      live: "https://github.com/Shyam-Prasath/Pharma-System-Using-Python",
      featured: false
    },
    {
      title: "Book Authentication System Backend",
      description: "Secure library management system with JWT authentication, password hashing, and comprehensive book and user management functionality.",
      image: "https://freeimage.host/i/Ko1XBHX",
      technologies: ["Node.js", "Express.js", "React.js", "MongoDB", "JWT"],
      github: "https://github.com/Shyam-Prasath/Book-Details-Backend",
      live: "https://github.com/Shyam-Prasath/Book-Details-Backend",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white to-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Championship <span className="" style={{ color: "#0065b3" }}>Projects</span>
          </h2>
          <div className="w-24 h-1 bg-navy-900 mx-auto mb-8"></div>
          <p className="text-xl text-navy-800 max-w-3xl mx-auto font-medium">
            Like CSK's winning streak, here are my standout projects that showcase 
            technical excellence and innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_#0065b3] transition-all duration-500 transform hover:-translate-y-3 ${
                project.featured ? 'ring-2 ring-navy-900 ring-opacity-50' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-navy-900 text-[#FFD700] px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star size={14} fill="currentColor" style={{ color: "#FFD700" }} />
                    Featured
                  </div>
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0065b3]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Actions */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <a
                    href={project.github}
                    className="bg-navy-900/90 text-[#0065b3] p-2 rounded-full hover:bg-navy-800 transition-colors duration-300"
                  >
                    <Github size={20} style={{ color: "#FFD700" }} />
                  </a>
                  <a
                    href={project.live}
                    className="bg-navy-900/90 text-[#0065b3] p-2 rounded-full hover:bg-navy-800 transition-colors duration-300"
                  >
                    <ExternalLink size={20} style={{ color: "#FFD700" }}/>
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-[#0065b3] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-navy-700 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-navy-900 text-[#FFD700] px-3 py-1 rounded-full text-sm font-medium hover:bg-navy-800 hover:text-[white] hover:cursor-pointer transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
