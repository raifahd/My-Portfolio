import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Code,
  Palette,
  Camera,
  PenTool,
  Globe,
  Database,
  Smartphone,
  Video,
  Music,
  FileText,
  ExternalLink,
  Github,
  Linkedin,
  Instagram,
  Mail,
  ArrowUp,
  ChevronDown,
  User,
  BookOpen,
  Gamepad2,
  Coffee,
  Sparkles,
  Zap,
  Rocket,
} from "lucide-react";

const skills = [
  {
    category: "Development",
    icon: Code,
    gradient: "from-violet-500 to-purple-600",
    items: [
      { name: "Model Training & ML", level: 70, icon: Code },
      { name: "HTML, CSS, JavaScript", level: 85, icon: Globe },
      { name: "Python", level: 50, icon: Database },
      { name: "React Basics", level: 45, icon: Smartphone },
    ],
  },
  {
    category: "Design",
    icon: Palette,
    gradient: "from-pink-500 to-rose-600",
    items: [
      { name: "Figma", level: 60, icon: Palette },
      { name: "Photoshop", level: 55, icon: Camera },
      { name: "Illustrator", level: 45, icon: PenTool },
    ],
  },
  {
    category: "Other",
    icon: Sparkles,
    gradient: "from-cyan-500 to-blue-600",
    items: [
      { name: "Video Editing", level: 50, icon: Video },
      { name: "Photo Editing", level: 55, icon: Camera },
      // { name: "Music Production", level: 40, icon: Music },
      { name: "Technical Writing", level: 60, icon: FileText },
    ],
  },
];

const projects = [
  {
    id: "blog",
    title: "Personal Blog",
    description: "A clean, minimalist blog built to share thoughts on technology and design.",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: true,
    gradient: "from-violet-600 to-indigo-600",
  },
  {
    id: "weather",
    title: "Weather App",
    description: "A simple weather application that fetches data from a public API.",
    tags: ["React", "API", "CSS"],
    featured: false,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: "portfolio-design",
    title: "Portfolio Design",
    description: "UI/UX design project showcasing brand identity concepts.",
    tags: ["Figma", "UI Design"],
    featured: true,
    gradient: "from-pink-500 to-rose-500",
  },
  // {
  //   id: "task-manager",
  //   title: "Task Manager",
  //   description: "A basic todo application with local storage persistence.",
  //   tags: ["JavaScript", "HTML", "CSS"],
  //   featured: false,
  //   gradient: "from-orange-500 to-amber-500",
  // },
  // {
  //   id: "gallery",
  //   title: "Photo Gallery",
  //   description: "Responsive image gallery with lightbox functionality.",
  //   tags: ["CSS Grid", "JavaScript"],
  //   featured: false,
  //   gradient: "from-emerald-500 to-teal-500",
  // },
  // {
  //   id: "landing",
  //   title: "Landing Page",
  //   description: "Modern landing page design for a fictional startup.",
  //   tags: ["HTML", "CSS", "Figma"],
  //   featured: true,
  //   gradient: "from-purple-600 to-pink-600",
  // },
];

const interests = [
  { name: "Reading", icon: BookOpen, color: "text-violet-500" },
  { name: "Gaming", icon: Gamepad2, color: "text-pink-500" },
  // { name: "Photography", icon: Camera, color: "text-cyan-500" },
  // { name: "Music", icon: Music, color: "text-orange-500" },
  // { name: "Coffee", icon: Coffee, color: "text-amber-500" },
  { name: "Learning", icon: Code, color: "text-emerald-500" },
];

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function FloatingOrbs() {
  return (
    <>
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/30 rounded-full blur-3xl animate-float" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/25 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float" />
    </>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <Button
            variant="ghost"
            onClick={() => scrollToTop()}
            className="font-serif text-xl font-bold tracking-tight px-0 gradient-text"
            data-testid="button-logo"
          >
            Portfolio
          </Button>
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("about")}
              data-testid="button-nav-about"
            >
              About
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("skills")}
              data-testid="button-nav-skills"
            >
              Skills
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("projects")}
              data-testid="button-nav-projects"
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("contact")}
              data-testid="button-nav-contact"
            >
              Contact
            </Button>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      <main>
        <section className="min-h-screen flex items-center pt-20 relative overflow-hidden" id="hero">
          <FloatingOrbs />
          <div className="max-w-7xl mx-auto px-6 py-20 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-gradient-to-r from-violet-600 to-cyan-500 text-white border-0 px-4 py-1.5">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Available for hire
                    </Badge>
                  </div>
                  <h1 
                    className="font-serif text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight"
                    data-testid="text-name"
                  >
                    <span className="gradient-text">Rai Fahd</span>
                  </h1>
                  <p 
                    className="text-2xl md:text-4xl font-light text-foreground/80"
                    data-testid="text-title"
                  >
                    Creative <span className="text-violet-500 font-medium">Developer</span> & <span className="text-cyan-500 font-medium">Designer</span>
                  </p>
                </div>
                <div className="flex flex-wrap gap-3" data-testid="badges-roles">
                  <Badge variant="outline" className="px-4 py-2 text-sm border-violet-500/50 bg-violet-500/10">
                    <Zap className="w-3 h-3 mr-1 text-violet-500" />
                    Developer
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2 text-sm border-pink-500/50 bg-pink-500/10">
                    <Palette className="w-3 h-3 mr-1 text-pink-500" />
                    Designer
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2 text-sm border-cyan-500/50 bg-cyan-500/10">
                    <Rocket className="w-3 h-3 mr-1 text-cyan-500" />
                    Creator
                  </Badge>
                </div>
                <p 
                  className="text-muted-foreground leading-relaxed max-w-xl text-lg"
                  data-testid="text-hero-description"
                >
                  A curious student exploring the intersection of technology and creativity. 
                  I enjoy learning new skills and building things that solve real problems.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => scrollToSection("projects")}
                    className="bg-gradient-to-r from-violet-600 to-cyan-500 text-white border-0 shadow-lg glow-purple px-8"
                    data-testid="button-view-projects"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    View Projects
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection("contact")}
                    className="border-2"
                    data-testid="button-get-in-touch"
                  >
                    Get in Touch
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("about")}
                  className="flex items-center gap-2 text-muted-foreground animate-bounce mt-8"
                  data-testid="button-scroll-down"
                >
                  <ChevronDown className="w-5 h-5" />
                  <span className="text-sm">Scroll to explore</span>
                </Button>
              </div>
              <div className="lg:col-span-2 flex justify-center lg:justify-end">
                <div className="relative" data-testid="hero-portrait">
                  <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl bg-gradient-to-br from-violet-600 via-cyan-500 to-pink-500 p-1 animate-gradient glow-purple">
                    <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center">
                      <User className="w-32 h-32 text-muted-foreground/30" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 glow-cyan animate-float-delayed -z-10" />
                  <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 glow-pink animate-float -z-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden" id="about">
          <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-cyan-500/5" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-violet-600 to-pink-500 text-white border-0 mb-4">
                About Me
              </Badge>
              <h2 
                className="font-serif text-4xl md:text-6xl font-bold mb-4"
                data-testid="text-section-about"
              >
                <span className="gradient-text">Who I Am</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A glimpse into who I am and what drives me
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <Card className="p-8 glass border-white/10 dark:border-white/5">
                  <p className="text-lg leading-relaxed text-foreground/90" data-testid="text-about-bio-1">
                    I'm a second-year university student pursuing a degree in Data Science. 
                    My journey into technology started with curiosity about how websites work, 
                    and it has since grown into a passion for creating digital experiences and also making real-life models.
                  </p>
                </Card>
                <Card className="p-8 glass border-white/10 dark:border-white/5">
                  <p className="text-lg leading-relaxed text-foreground/90" data-testid="text-about-bio-2">
                    While I'm still learning and growing, I believe that having basic knowledge 
                    across various disciplines helps me approach problems from different angles. 
                    I'm particularly interested in the space where design meets development.
                  </p>
                </Card>
                <div className="pt-4">
                  <h3 className="font-serif text-xl font-semibold mb-6 flex items-center gap-2" data-testid="text-education-title">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-white" />
                    </div>
                    Education
                  </h3>
                  <div className="space-y-4" data-testid="list-education">
                    <Card className="p-4 glass border-white/10 dark:border-white/5 border-l-4 border-l-violet-500">
                      <p className="font-medium" data-testid="text-education-degree">B.S. Data Science</p>
                      <p className="text-muted-foreground text-sm">Fast NU Lahore - 2024 - Present</p>
                    </Card>
                    <Card className="p-4 glass border-white/10 dark:border-white/5 border-l-4 border-l-cyan-500">
                      <p className="font-medium" data-testid="text-education-highschool">A-Levels</p>
                      <p className="text-muted-foreground text-sm">The City School - 2022 - 2024</p>
                    </Card>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="font-serif text-xl font-semibold flex items-center gap-2" data-testid="text-interests-title">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  Interests & Hobbies
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4" data-testid="grid-interests">
                  {interests.map((interest) => (
                    <Card
                      key={interest.name}
                      className="p-6 flex flex-col items-center gap-3 hover-elevate overflow-visible glass border-white/10 dark:border-white/5 group transition-all duration-300"
                      data-testid={`card-interest-${interest.name.toLowerCase()}`}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <interest.icon className={`w-6 h-6 ${interest.color}`} />
                      </div>
                      <span className="text-sm font-medium">{interest.name}</span>
                    </Card>
                  ))}
                </div>
                <Card className="p-6 mt-6 bg-gradient-to-r from-violet-600/10 via-cyan-500/10 to-pink-500/10 border-white/10 dark:border-white/5" data-testid="card-currently-learning">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-violet-500" />
                    Currently Learning
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-violet-500/20 text-violet-600 dark:text-violet-400 border-violet-500/30">TypeScript</Badge>
                    <Badge className="bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border-cyan-500/30">React Native</Badge>
                    <Badge className="bg-pink-500/20 text-pink-600 dark:text-pink-400 border-pink-500/30">Node.js</Badge>
                    <Badge className="bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30">UI/UX Design</Badge>
                    <Badge className="bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30">Machine Learning</Badge>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden" id="skills">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0 mb-4">
                Skills
              </Badge>
              <h2 
                className="font-serif text-4xl md:text-6xl font-bold mb-4"
                data-testid="text-section-skills"
              >
                <span className="gradient-text">What I Do</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A diverse set of skills I'm developing across different domains
              </p>
            </div>
            <div className="space-y-16">
              {skills.map((category) => (
                <div key={category.category} data-testid={`skills-category-${category.category.toLowerCase()}`}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center shadow-lg`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold" data-testid={`text-category-${category.category.toLowerCase()}`}>
                      {category.category}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.items.map((skill) => (
                      <Card
                        key={skill.name}
                        className="p-6 hover-elevate transition-all duration-300 overflow-visible glass border-white/10 dark:border-white/5 group"
                        data-testid={`card-skill-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                            <skill.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-sm font-bold text-muted-foreground" data-testid={`text-skill-level-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <h4 className="font-semibold mb-3" data-testid={`text-skill-name-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}>
                          {skill.name}
                        </h4>
                        <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                          <div
                            className={`bg-gradient-to-r ${category.gradient} h-2.5 rounded-full transition-all duration-700`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden" id="projects">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-pink-500 to-orange-500 text-white border-0 mb-4">
                Projects
              </Badge>
              <h2 
                className="font-serif text-4xl md:text-6xl font-bold mb-4"
                data-testid="text-section-projects"
              >
                <span className="gradient-text">My Work</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A collection of projects I've worked on while learning
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="grid-projects">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-visible hover-elevate transition-all duration-300 glass border-white/10 dark:border-white/5 group"
                  data-testid={`card-project-${project.id}`}
                >
                  <div className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center rounded-t-lg relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <FileText className="w-16 h-16 text-white/50 group-hover:scale-110 transition-transform" />
                    {project.featured && (
                      <Badge className="absolute top-3 right-3 bg-white/20 backdrop-blur-md text-white border-0">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 
                      className="font-serif text-xl font-semibold mb-2"
                      data-testid={`text-project-title-${project.id}`}
                    >
                      {project.title}
                    </h3>
                    <p 
                      className="text-muted-foreground text-sm mb-4 leading-relaxed"
                      data-testid={`text-project-description-${project.id}`}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4" data-testid={`tags-project-${project.id}`}>
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs border-primary/30 bg-primary/5">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="gap-2 group/btn"
                      data-testid={`button-view-project-${project.id}`}
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                      View Project
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden" id="contact">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-violet-500/5" />
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-float" />
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <Badge className="bg-gradient-to-r from-violet-600 to-cyan-500 text-white border-0 mb-6">
              Get in Touch
            </Badge>
            <h2 
              className="font-serif text-4xl md:text-6xl font-bold mb-4"
              data-testid="text-section-contact"
            >
              <span className="gradient-text">Let's Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              I'm always open to new opportunities, collaborations, or just a friendly chat
            </p>
            <a
              href="mailto:fahd.w871@gmail.com"
              className="inline-block font-serif text-3xl md:text-4xl font-bold gradient-text hover:opacity-80 transition-opacity mb-12"
              data-testid="link-email"
            >
              fahd.w871@gmail.com
            </a>
            <div className="flex items-center justify-center gap-4 mb-8" data-testid="social-links">
              <Button
                size="icon"
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600 to-violet-800 text-white border-0 glow-purple"
                asChild
                data-testid="button-github"
              >
                <a
                  href="https://github.com/raifahd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
              </Button>
              <Button
                size="icon"
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white border-0 glow-cyan"
                asChild
                data-testid="button-linkedin"
              >
                <a
                  href="https://www.linkedin.com/in/rai-fahd-sultan-23074936b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </Button>
              <Button
                size="icon"
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 text-white border-0 glow-pink"
                asChild
                data-testid="button-instagram"
              >
                <a
                  href="https://www.instagram.com/raifahd._/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </Button>
              <Button
                size="icon"
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-700 text-white border-0"
                asChild
                data-testid="button-mail"
              >
                <a
                  href="mailto:fahd.w871@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </Button>
            </div>
            <Badge className="px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30" data-testid="badge-availability">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse inline-block" />
              Open to opportunities
            </Badge>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 py-12 relative" data-testid="footer">
        <div className="absolute inset-0 bg-gradient-to-t from-violet-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © {new Date().getFullYear()} <span className="gradient-text font-semibold">Rai Fahd</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection("about")}
                data-testid="button-footer-about"
              >
                About
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection("projects")}
                data-testid="button-footer-projects"
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection("skills")}
                data-testid="button-footer-skills"
              >
                Skills
              </Button>
            </div>
            <Button
              onClick={() => scrollToTop()}
              className="gap-2 bg-gradient-to-r from-violet-600 to-cyan-500 text-white border-0"
              data-testid="button-back-to-top"
            >
              <ArrowUp className="w-4 h-4" />
              Back to top
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
