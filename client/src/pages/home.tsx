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
  Twitter,
  Mail,
  ArrowUp,
  ChevronDown,
  User,
  BookOpen,
  Gamepad2,
  Coffee,
} from "lucide-react";

const skills = [
  {
    category: "Development",
    items: [
      { name: "HTML & CSS", level: 70, icon: Code },
      { name: "JavaScript", level: 55, icon: Globe },
      { name: "Python", level: 50, icon: Database },
      { name: "React Basics", level: 45, icon: Smartphone },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "Figma", level: 60, icon: Palette },
      { name: "Photoshop", level: 55, icon: Camera },
      { name: "Illustrator", level: 45, icon: PenTool },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "Video Editing", level: 50, icon: Video },
      { name: "Photography", level: 55, icon: Camera },
      { name: "Music Production", level: 40, icon: Music },
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
  },
  {
    id: "weather",
    title: "Weather App",
    description: "A simple weather application that fetches data from a public API.",
    tags: ["React", "API", "CSS"],
    featured: false,
  },
  {
    id: "portfolio-design",
    title: "Portfolio Design",
    description: "UI/UX design project showcasing brand identity concepts.",
    tags: ["Figma", "UI Design"],
    featured: true,
  },
  {
    id: "task-manager",
    title: "Task Manager",
    description: "A basic todo application with local storage persistence.",
    tags: ["JavaScript", "HTML", "CSS"],
    featured: false,
  },
  {
    id: "gallery",
    title: "Photo Gallery",
    description: "Responsive image gallery with lightbox functionality.",
    tags: ["CSS Grid", "JavaScript"],
    featured: false,
  },
  {
    id: "landing",
    title: "Landing Page",
    description: "Modern landing page design for a fictional startup.",
    tags: ["HTML", "CSS", "Figma"],
    featured: true,
  },
];

const interests = [
  { name: "Reading", icon: BookOpen },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Photography", icon: Camera },
  { name: "Music", icon: Music },
  { name: "Coffee", icon: Coffee },
  { name: "Learning", icon: Code },
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

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <Button
            variant="ghost"
            onClick={() => scrollToTop()}
            className="font-serif text-xl font-semibold tracking-tight px-0"
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
        <section className="min-h-screen flex items-center pt-20" id="hero">
          <div className="max-w-7xl mx-auto px-6 py-20 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-2 space-y-8">
                <div className="space-y-4">
                  <p 
                    className="text-muted-foreground font-medium tracking-wide uppercase text-sm"
                    data-testid="text-greeting"
                  >
                    Hello, I'm
                  </p>
                  <h1 
                    className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                    data-testid="text-name"
                  >
                    Alex Chen
                  </h1>
                  <p 
                    className="text-2xl md:text-3xl text-muted-foreground font-light"
                    data-testid="text-title"
                  >
                    Creative Student
                  </p>
                </div>
                <div className="flex flex-wrap gap-3" data-testid="badges-roles">
                  <Badge variant="secondary" className="px-3 py-1.5 text-sm">
                    Developer
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1.5 text-sm">
                    Designer
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1.5 text-sm">
                    Creator
                  </Badge>
                </div>
                <p 
                  className="text-muted-foreground leading-relaxed max-w-md text-lg"
                  data-testid="text-hero-description"
                >
                  A curious student exploring the intersection of technology and creativity. 
                  I enjoy learning new skills and building things that solve real problems.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => scrollToSection("projects")}
                    data-testid="button-view-projects"
                  >
                    View Projects
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection("contact")}
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
              <div className="lg:col-span-3 flex justify-center lg:justify-end">
                <div className="relative" data-testid="hero-portrait">
                  <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/30 to-secondary/20 flex items-center justify-center overflow-hidden">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-card border border-card-border flex items-center justify-center">
                      <User className="w-32 h-32 text-muted-foreground/30" />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-primary/10 -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-accent/30 -z-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/50" id="about">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 
                className="font-serif text-4xl md:text-5xl font-bold mb-4"
                data-testid="text-section-about"
              >
                About Me
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A glimpse into who I am and what drives me
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-foreground/90" data-testid="text-about-bio-1">
                  I'm a second-year university student pursuing a degree in Computer Science. 
                  My journey into technology started with curiosity about how websites work, 
                  and it has since grown into a passion for creating digital experiences.
                </p>
                <p className="text-lg leading-relaxed text-foreground/90" data-testid="text-about-bio-2">
                  While I'm still learning and growing, I believe that having basic knowledge 
                  across various disciplines helps me approach problems from different angles. 
                  I'm particularly interested in the space where design meets development.
                </p>
                <p className="text-lg leading-relaxed text-foreground/90" data-testid="text-about-bio-3">
                  When I'm not coding or designing, you can find me experimenting with 
                  photography, learning a new song on guitar, or diving into a good book 
                  about technology and innovation.
                </p>
                <div className="pt-4">
                  <h3 className="font-serif text-xl font-semibold mb-4" data-testid="text-education-title">
                    Education
                  </h3>
                  <div className="space-y-3" data-testid="list-education">
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium" data-testid="text-education-degree">B.Sc. Computer Science</p>
                        <p className="text-muted-foreground text-sm">State University - 2023 - Present</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium" data-testid="text-education-highschool">High School Diploma</p>
                        <p className="text-muted-foreground text-sm">Central High School - 2019 - 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="font-serif text-xl font-semibold" data-testid="text-interests-title">
                  Interests & Hobbies
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4" data-testid="grid-interests">
                  {interests.map((interest) => (
                    <Card
                      key={interest.name}
                      className="p-4 flex flex-col items-center gap-3 hover-elevate overflow-visible"
                      data-testid={`card-interest-${interest.name.toLowerCase()}`}
                    >
                      <interest.icon className="w-8 h-8 text-primary" />
                      <span className="text-sm font-medium">{interest.name}</span>
                    </Card>
                  ))}
                </div>
                <Card className="p-6 mt-6" data-testid="card-currently-learning">
                  <h4 className="font-semibold mb-3">Currently Learning</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">React Native</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">UI/UX Design</Badge>
                    <Badge variant="outline">Data Structures</Badge>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" id="skills">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 
                className="font-serif text-4xl md:text-5xl font-bold mb-4"
                data-testid="text-section-skills"
              >
                Skills & Abilities
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A diverse set of skills I'm developing across different domains
              </p>
            </div>
            <div className="space-y-12">
              {skills.map((category) => (
                <div key={category.category} data-testid={`skills-category-${category.category.toLowerCase()}`}>
                  <h3 className="font-serif text-2xl font-semibold mb-6" data-testid={`text-category-${category.category.toLowerCase()}`}>
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.items.map((skill) => (
                      <Card
                        key={skill.name}
                        className="p-6 hover-elevate transition-transform overflow-visible"
                        data-testid={`card-skill-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-4">
                          <skill.icon className="w-8 h-8 text-primary" />
                          <span className="text-sm text-muted-foreground font-medium" data-testid={`text-skill-level-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <h4 className="font-semibold mb-3" data-testid={`text-skill-name-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}>
                          {skill.name}
                        </h4>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-700"
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

        <section className="py-20 bg-card/50" id="projects">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 
                className="font-serif text-4xl md:text-5xl font-bold mb-4"
                data-testid="text-section-projects"
              >
                Projects
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A collection of projects I've worked on while learning
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="grid-projects">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-visible hover-elevate transition-transform"
                  data-testid={`card-project-${project.id}`}
                >
                  <div className="aspect-video bg-muted flex items-center justify-center rounded-t-md">
                    <FileText className="w-12 h-12 text-muted-foreground/30" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 
                        className="font-serif text-xl font-semibold"
                        data-testid={`text-project-title-${project.id}`}
                      >
                        {project.title}
                      </h3>
                      {project.featured && (
                        <Badge variant="secondary" className="flex-shrink-0">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <p 
                      className="text-muted-foreground text-sm mb-4 leading-relaxed"
                      data-testid={`text-project-description-${project.id}`}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4" data-testid={`tags-project-${project.id}`}>
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="gap-2"
                      data-testid={`button-view-project-${project.id}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" id="contact">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 
              className="font-serif text-4xl md:text-5xl font-bold mb-4"
              data-testid="text-section-contact"
            >
              Let's Connect
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              I'm always open to new opportunities, collaborations, or just a friendly chat
            </p>
            <a
              href="mailto:hello@alexchen.dev"
              className="inline-block font-serif text-2xl md:text-3xl font-medium text-primary hover:underline underline-offset-8 decoration-2 mb-12"
              data-testid="link-email"
            >
              hello@alexchen.dev
            </a>
            <div className="flex items-center justify-center gap-4 mb-8" data-testid="social-links">
              <Button
                variant="outline"
                size="icon"
                asChild
                data-testid="button-github"
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                data-testid="button-linkedin"
              >
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                data-testid="button-twitter"
              >
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                data-testid="button-mail"
              >
                <a
                  href="mailto:hello@alexchen.dev"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
            <Badge variant="outline" className="px-4 py-2" data-testid="badge-availability">
              Open to opportunities
            </Badge>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8" data-testid="footer">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © {new Date().getFullYear()} Alex Chen. All rights reserved.
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
              variant="ghost"
              size="sm"
              onClick={() => scrollToTop()}
              className="gap-2"
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
