import { ChevronDown, Download } from 'lucide-react';
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-white to-slate-100 low-400 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-navy-900 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border-2 border-navy-900 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-navy-900 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-navy-900 mb-6 leading-tight">
                Hello, I'm{' '}
                <span className=" bg-gradient-to-r from-white to-gray-100 bg-clip-text #0065b3 text-transparent" style={{ color: "#0065b3" }}>
                  <ReactTyped
                    strings={["Revanth V", "Developer", "Women Lover", "Student" , "Girls Dream Boy" , "Flirt King" , "Women Lover"]}
                    typeSpeed={100}
                    backSpeed={50}
                    loop
                  />
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-navy-800 mb-8 leading-relaxed font-semibold">
                Computer Science Student & AI Enthusiast
              </p>
              <p className="text-lg text-navy-700 mb-10 max-w-2xl text-justify">
                Passionate about embedded systems, machine learning, data science, and generative AI.
                Building innovative solutions to solve real-world challenges through automation and AI-driven applications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-navy-900 text-csk-yellow px-8 py-4 rounded-lg font-semibold hover:bg-navy-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" onClick={() => window.location.href = 'https://github.com/REVANTH20052005'}>
                  View My Work
                </button>
                <a
                  href="../public/Revanth Resume.pdf"
                  download="Revanth_The_Pussy_Resume.pdf"
                  className="group border-2 border-navy-900 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-navy-900 hover:text-csk-yellow transition-all duration-300 flex items-center gap-2"
                >
                  <Download size={20} className="transition-colors duration-300 group-hover:text-csk-yellow" />
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative animate-fade-in-right">
              <div className="w-80 h-90 lg:w-96 lg:h-98 rounded-full bg-gradient-to-br from-navy-900 to-navy-700 p-2 shadow-2xl">
                <div className="w-full h-full rounded-full bg-csk-yellow flex items-center justify-center overflow-hidden">
                  <img
                    src="../Revanth passport photo[2].jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-navy-900 rounded-full animate-bounce delay-300"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-navy-700 rounded-full animate-bounce delay-700"></div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-navy-900 w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;