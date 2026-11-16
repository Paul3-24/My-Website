import { BookOpen, Target, Zap } from "lucide-react";

/**
 * About Section Component
 * Design Philosophy: Glassmorphic Elegance
 * - Glass cards with icon highlights
 * - Three key areas: Education, Current Focus, Goal
 * - Smooth animations on scroll
 */

export default function About() {
  const aboutItems = [
    {
      icon: BookOpen,
      title: "Education",
      description:
        "Bachelor of Science in Computer Science from Bohol Island State University (BISU)",
    },

    {
      icon: Zap,
      title: "Current Focus",
      description:
        "Web Development, System Design, and Problem-Solving with a passion for creating scalable solutions",
    },

    {
      icon: Target,
      title: "Goal",
      description:
        "To become a skilled full-stack developer and build solutions that empower communities",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        
        {/* Section Title */}
        <div className="mb-16 text-center">
          
          <h2 className="section-title">
            About Me
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm a Computer Science student and aspiring
            system developer who loves turning ideas into
            real-world applications.
          </p>
        </div>

        {/* Main About Content */}
        <div className="glass-card mb-12 max-w-3xl mx-auto">
          
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I'm a Computer Science student and aspiring
            system developer who loves turning ideas into
            real-world applications. I enjoy solving
            problems, learning new technologies, and
            collaborating with others to build systems
            that make a difference.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            My goal is to become a full-stack developer
            and contribute to meaningful projects that
            create value. I'm passionate about web
            development, system design, and building
            solutions that empower communities.
          </p>
        </div>

        {/* About Items Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {aboutItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="glass-card-hover"
                style={{
                  animation: `slideInUp 0.6s ease-out ${
                    index * 0.1
                  }s both`,
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                  
                  <Icon
                    size={24}
                    className="text-white"
                  />

                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}