
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "C", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "SQL", level: 82 },
        { name: "HTML/CSS", level: 85 }
      ]
    },
    {
      title: "AI & Data Science",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "NLP", level: 80 },
        { name: "Data Science", level: 82 },
        { name: "BERT/Transformers", level: 75 },
        { name: "Generative AI", level: 78 }
      ]
    },
    {
      title: "Web & Database",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "MongoDB", level: 78 },
        { name: "Express.js", level: 82 },
        { name: "MySQL", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white to-slate-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 border border-navy-900 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 border border-navy-900 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Technical <span className="text-[]">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-navy-900 mx-auto mb-8"></div>
          <p className="text-xl text-navy-800 max-w-3xl mx-auto font-medium">
            Like CSK's diverse team of specialists, I've mastered a comprehensive 
            set of technologies to tackle any challenge.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-[#0065b3] backdrop-blur-sm rounded-2xl p-8 border border-navy-100 hover:border-navy-900/50 transition-all duration-300 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-white font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-navy-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-csk-yellow to-yellow-500 rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:scale-x-105"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-navy-900 mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "BERT", "TextBlob", "spaCy", "TailwindCSS", "JWT Auth", "SHA-256", 
              "SQLite3", "Spring Boot", "IPFS", "Web3Auth", "Drizzle ORM", "NeonDB"
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-navy-900 text-csk-yellow px-4 py-2 rounded-full font-semibold hover:bg-navy-800 hover:scale-105 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;