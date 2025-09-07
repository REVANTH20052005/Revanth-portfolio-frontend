import { Award, BookOpen, Code, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "5+ Years Experience",
      description: "Building scalable web applications"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "50+ Projects",
      description: "Successfully delivered to clients"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "100% Success Rate",
      description: "On-time project delivery"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "Always exploring new technologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-slate-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-navy-900 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            About <span style={{ color: "#0065b3" }}>Me</span>
          </h2>
          <div className="w-24 h-1 bg-navy-900 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-navy-900 mb-6">
              Computer Science Student with a{' '}
              <span style={{ color: "#0065b3" }}>Champion's Mindset</span>
            </h3>

            <p className="text-lg text-navy-800 leading-relaxed font-medium text-justify">
              Just like CSK's unwavering spirit on the cricket field, I bring dedication, 
              strategy, and excellence to every project. Currently pursuing B.Tech in Computer Science 
              and Engineering at SRM IST-Ramapuram with a CGPA of 9.54/10.
            </p>

            <p className="text-lg text-navy-800 leading-relaxed font-medium text-justify">
              My expertise spans across embedded systems, machine learning, data science, and generative AI. 
              I'm passionate about applying technology to solve real-world challenges through automation and AI-driven applications.
            </p>

            {/* Education Card */}
            <div className="bg-csk-yellow backdrop-blur-sm p-6 rounded-lg border-l-4 border-navy-900 shadow-lg">
              <h4 className="text-xl font-extrabold" style={{ color: "#0065b3" }}>Education</h4>

              <p style={{ color: 'white'}} className="mb-2 font-medium">
                <strong style={{ color: "#0065b3" }}>B.Tech in Computer Science and Engineering</strong><br />
                SRM IST-Ramapuram • 2022-2026<br />
                <em>CGPA: 9.54/10</em>
              </p>

              <p style={{ color: "white" }} className="mt-4 font-medium">
                <strong style={{ color: "#0065b3" }}>Class XII - CBSE</strong><br />
                Thamarai International School, Thanjavur • 2022<br />
                <em>Percentage: 77.6%</em>
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-csk-yellow backdrop-blur-sm p-6 rounded-xl shadow-lg border border-navy-900 transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div
                  className="mb-4 transition-all duration-300 group-hover:scale-110 font-extrabold"
                  style={{ color: "#0065b3" }}
                >
                  {item.icon}
                </div>
                <h4
                  className="text-lg font-bold mb-2 transition-colors duration-300"
                  style={{ color: "#0065b3" }}
                >
                  {item.title}
                </h4>
                <p className="text-sm font-medium" style={{ color: "white" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
