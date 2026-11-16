import React, { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, ExternalLink, Code2,
  Database, Globe, Server, Cpu, Layers, Terminal, Menu, X,
  ChevronDown, MapPin, Phone, Calendar, Award, Download
} from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────
const skills = [
  { name: 'React & Next.js', icon: <Code2 size={28} />, level: 'Advanced', desc: 'Modern frontend development with hooks, context, and SSR' },
  { name: 'Node.js & Express', icon: <Server size={28} />, level: 'Advanced', desc: 'RESTful APIs, middleware, and server architecture' },
  { name: 'PHP & Laravel', icon: <Globe size={28} />, level: 'Advanced', desc: 'Full-stack web applications and CMS development' },
  { name: 'MySQL & PostgreSQL', icon: <Database size={28} />, level: 'Intermediate', desc: 'Database design, optimization, and complex queries' },
  { name: 'Python & Django', icon: <Terminal size={28} />, level: 'Intermediate', desc: 'Backend automation, data processing, and ML integration' },
  { name: 'Tailwind & SCSS', icon: <Layers size={28} />, level: 'Advanced', desc: 'Responsive design systems and component libraries' },
  { name: 'Docker & DevOps', icon: <Cpu size={28} />, level: 'Intermediate', desc: 'Containerization, CI/CD pipelines, and cloud deployment' },
  { name: 'JavaScript', icon: <Code2 size={28} />, level: 'Advanced', desc: 'Dynamic, scalable applications and clean code architecture' },
];

const projects = [
  {
    id: 1,
    title: 'Rural Care Connect',
    category: 'Healthcare Web Platform',
    description: 'A comprehensive healthcare management platform designed to bridge the gap between rural communities and medical services. Features include patient registration, appointment scheduling, telemedicine integration, electronic health records, and real-time health monitoring dashboards for rural health workers.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS', 'Express'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'BISU Intramurals System',
    category: 'Event Management System',
    description: 'A full-featured event registration and leaderboard management system for Bohol Island State University intramurals. Includes team registration with requirements tracking, real-time scoreboard updates, automated certificate generation for winners, role-based access control, and comprehensive reporting dashboards.',
    image: '/bisu_intramurals_2025.jpg',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'HTML5', 'CSS3'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Inventory Management System',
    category: 'Enterprise Application',
    description: 'A robust inventory tracking solution with barcode scanning, automated reorder alerts, supplier management, and detailed analytics reporting for small to medium enterprises.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop',
    tech: ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'Chart.js'],
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Student Portal API',
    category: 'Backend Service',
    description: 'RESTful API powering a university student portal with authentication, grade management, enrollment processing, and notification systems serving 5,000+ active users.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Swagger'],
    github: '#',
    demo: '#',
    featured: false,
  },
];

const socialLinks = [
  { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/jpgamo' },
  { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/jpgamo' },
  { name: 'Email', icon: <Mail size={20} />, url: 'mailto:jpgamo@example.com' },
];

const FULL_TEXT = 'Computer Science Student';

// ─── Components ───────────────────────────────────────────────────

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollTo = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
           className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-purple-400 transition-all">
          JP.Gamo
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className={`relative text-sm font-medium transition-colors duration-300 ${
                activeSection === link.href.replace('#', '')
                  ? 'text-cyan-400'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.name}
              {activeSection === link.href.replace('#', '') && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-slate-900/95 backdrop-blur-xl border-t border-white/10 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className={`block text-lg font-medium ${
                activeSection === link.href.replace('#', '') ? 'text-cyan-400' : 'text-slate-300'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= FULL_TEXT.length) {
        setTypedText(FULL_TEXT.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-slate-300">Available for opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              John Paul
            </span>
            <br />
            <span className="text-white">Gamo</span>
          </h1>

          <div className="h-8">
            <p className="text-xl md:text-2xl text-slate-400 font-light">
              <span className="text-cyan-400">{typedText}</span>
              <span className="animate-pulse text-cyan-400">|</span>
            </p>
          </div>

          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Computer Science student passionate about building innovative
            solutions and creating impactful digital experiences. Specialized
            in web development, system design, and problem-solving.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); }}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              View My Work
              <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:border-cyan-400/50 hover:bg-white/5 backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="flex gap-4 justify-center lg:justify-start pt-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400 text-slate-400 transition-all duration-300 hover:scale-110"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Glow Ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse scale-110" />

            {/* Profile Image Container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-purple-500/20">
              <img
                src="/IA_GRADUATE.jpg"
                alt="John Paul Gamo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-slate-800/90 backdrop-blur-md border border-white/10 shadow-lg animate-bounce delay-700">
              <span className="text-sm font-semibold text-cyan-400">CS Student</span>
            </div>
            <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full bg-slate-800/90 backdrop-blur-md border border-white/10 shadow-lg animate-bounce delay-1000">
              <span className="text-sm font-semibold text-purple-400">System Developer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-slate-500" />
      </div>
    </section>
  );
};

const About = () => {
  const stats = [
    { value: '3', label: 'Years Coding', icon: <Calendar size={20} /> },
    { value: '6', label: 'Projects Built', icon: <Code2 size={20} /> },
    { value: '8', label: 'Technologies', icon: <Cpu size={20} /> },
    { value: '5', label: 'Certifications', icon: <Award size={20} /> },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Get To Know Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                I'm <span className="text-cyan-400 font-semibold">John Paul Gamo</span>, a Computer Science student based in the Philippines with a passion for system development.
                I'm working toward becoming a system developer, specializing in building robust, scalable web applications and management systems that solve real-world problems.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                My journey in tech started with a curiosity about how things work behind the screen, which evolved into
                a deep passion for software engineering. I enjoy the challenge of transforming complex requirements into
                elegant, user-friendly solutions.
              </p>
              <p className="text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                or mentoring fellow students in programming. I believe in continuous learning and the power of technology
                to create positive impact.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                <MapPin size={20} className="text-cyan-400" />
                <span className="text-slate-300 text-sm">Bohol, Philippines</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                <Mail size={20} className="text-purple-400" />
                <span className="text-slate-300 text-sm">johnpaul.g.gamo@email.com</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105"
              >
                <div className="mb-4 p-3 rounded-xl bg-cyan-400/10 w-fit group-hover:bg-cyan-400/20 transition-colors">
                  <span className="text-cyan-400">{stat.icon}</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-600/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-cyan-600/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">My Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 w-fit group-hover:from-cyan-400/30 group-hover:to-purple-500/30 transition-all">
                  <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">{skill.icon}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{skill.name}</h3>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-cyan-400/10 text-cyan-400 mb-3">
                  {skill.level}
                </span>
                <p className="text-slate-400 text-sm leading-relaxed">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`grid ${project.featured ? 'lg:grid-cols-2' : ''} gap-0`}>
                {/* Image */}
                <div className="relative overflow-hidden h-64 lg:h-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent lg:bg-gradient-to-r" />

                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cyan-500/90 backdrop-blur-sm text-white text-xs font-bold">
                      Featured Project
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-purple-400 text-sm font-semibold mb-2">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300 hover:border-cyan-400/30 hover:text-cyan-400 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 text-slate-300 hover:text-cyan-400 transition-all duration-300 text-sm font-medium"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white transition-all duration-300 text-sm font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to your email service / API
    alert('Message sent! (demo only — connect to a real endpoint)');
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">Let's Work Together</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-6 rounded-full" />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I'm always open to discussing new opportunities
            and interesting ideas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: <Mail size={24} />, label: 'Email', value: 'johnpaul.g.gamo@email.com', href: 'mailto:johnpaul.g.gamo@email.com' },
            { icon: <Phone size={24} />, label: 'Phone', value: '+63 995 104 5470', href: 'tel:+639951045470' },
            { icon: <MapPin size={24} />, label: 'Location', value: 'Bohol, Philippines', href: '#' },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 text-center"
            >
              <div className="inline-flex p-3 rounded-xl bg-cyan-400/10 text-cyan-400 mb-4 group-hover:bg-cyan-400/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-white font-semibold mb-1">{item.label}</h3>
              <p className="text-slate-400 text-sm">{item.value}</p>
            </a>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-slate-300 text-sm font-medium mb-2">Subject</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all"
              placeholder="Project inquiry"
            />
          </div>
          <div className="mb-6">
            <label className="block text-slate-300 text-sm font-medium mb-2">Message</label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="absolute inset-0 bg-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              JP.Gamo
            </a>
            <p className="text-slate-500 text-sm mt-2">Building the future, one line of code at a time.</p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} John Paul Gamo. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

// ─── Main App ─────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-400/30 selection:text-cyan-200">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}