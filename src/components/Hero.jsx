import { Download, Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Hero() {
  const profileImage =
    '/my-profile.jpg';

  const heroBackground =
    '/my-hero-background.jpg';

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center gap-8 py-20">
        
        {/* Profile Image */}
        <div className="slide-in-down">
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-50"></div>

            <img
              src={profileImage}
              alt="John Paul Gamo"
              className="relative w-full h-full object-cover rounded-2xl border-2 border-white/30 shadow-2xl"
            />
          </div>
        </div>

        {/* Introduction */}
        <div className="slide-in-up text-center max-w-2xl">
          
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full">
            <span className="text-blue-300 text-sm font-medium">
              COMPUTER SCIENCE STUDENT
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">John Paul</span>
            <br />
            <span className="gradient-text">Gamo</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
            Computer Science student passionate about building innovative
            solutions and creating impactful digital experiences. Specialized
            in web development, system design, and problem-solving.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            
            <button className="gradient-button flex items-center justify-center gap-2">
              <Download size={20} />
              Download Resume
            </button>

            <button className="px-6 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
              View My Work
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
            >
              <Github size={20} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
            >
              <Twitter size={20} />
            </a>

            <a
              href="mailto:contact@example.com"
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}