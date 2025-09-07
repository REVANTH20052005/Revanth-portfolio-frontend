import { Award, Lightbulb, Star, Target, Trophy, Zap } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "Founder Forum Winner",
      description: "Won startup pitching competition with IoT-Based Food Spoilage Detection System",
      year: "2024",
      type: "award"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Academic Excellence",
      description: "Maintaining CGPA of 9.54/10 in Computer Science Engineering",
      year: "2024",
      type: "academic"
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "NPTEL Certification",
      description: "Completed Python for Data Science certification with excellence",
      year: "2024",
      type: "certification"
    },
    {
      icon:<Lightbulb className="w-12 h-12" />,
      title: "Seminar & Shark Tank",
      description: "Presented innovative decentralized social media platform idea",
      year: "2023",
      type: "competition"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Community Service",
      description: "Organized online scam awareness programs in rural areas",
      year: "2024",
      type: "volunteer"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Frontend Development",
      description: "Certified in modern frontend development technologies",
      year: "2024",
      type: "certification"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'award': return 'from-navy-900 to-navy-700';
      case 'academic': return 'from-navy-900 to-navy-700';
      case 'certification': return 'from-navy-900 to-navy-700';
      case 'competition': return 'from-navy-900 to-navy-700';
      case 'volunteer': return 'from-navy-900 to-navy-700';
      default: return 'from-navy-900 to-navy-700';
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border-2 border-navy-900 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border-2 border-navy-900 rounded-full animate-spin-slow-reverse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Trophy <span className="text-[#0065b3]">Cabinet</span>
          </h2>
          <div className="w-24 h-1 bg-navy-900 mx-auto mb-8"></div>
          <p className="text-xl text-navy-800 max-w-3xl mx-auto font-medium">
            Just like CSK's impressive trophy collection, here are my professional 
            achievements and recognitions that define my journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {achievements.map((achievement, index) => (
    <div
      key={index}
      className="group relative bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_#FFD700] transition-all duration-500 transform hover:-translate-y-3 p-6"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-csk-yellow/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      <div className="relative z-10">
        {/* Icon with Gradient Background */}
        <div
                className={`w-20 h-20 rounded-full bg-gradient-to-br ${getTypeColor(
                  achievement.type
                )} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
        >
          <div className="text-[#FFD700]">{achievement.icon}</div>
        </div>

        {/* Year Badge */}
        <div className="absolute top-4 right-4 bg-navy-900 text-[#FFD700] px-3 py-1 rounded-full text-sm font-bold">
          {achievement.year}
        </div>

        <h3 className="text-xl font-bold text-navy-900 mb-4 text-center group-hover:text-[#0065b3] transition-colors duration-300">
          {achievement.title}
        </h3>
        
        <p className="text-navy-700 text-center leading-relaxed">
          {achievement.description}
        </p>
      </div>
    </div>
  ))}
</div>



        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "4+", label: "Projects Completed" },
            { number: "9.54", label: "CGPA" },
            { number: "3+", label: "Certifications" },
            { number: "24/7", label: "Learning" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-navy-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-navy-800 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;