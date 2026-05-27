import { useState, useEffect, useRef, type FormEvent, type ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code2,
  Database,
  Smartphone,
  Wrench,
  GraduationCap,
  Briefcase,
  ChevronDown,
  Send,
  Globe,
  Star,
  Menu,
  X,
  Download,
  FolderGit2,
  Eye,
} from "lucide-react";

// ── helpers ──────────────────────────────────────────────────────────────────

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// ── links ────────────────────────────────────────────────────────────────────

const GITHUB_URL = "https://github.com/Raymond764";
const LINKEDIN_URL = "https://www.linkedin.com/in/raymond-baraket-354a7939b";
const MAP_URL = "https://www.google.com/maps/search/?api=1&query=Hadchit%20Dekweneh%20Lebanon";
const CV_URL = "/Raymond-Baraket-CV.pdf";

const COFFEE_SHOP_GITHUB = "https://github.com/Raymond764/coffee-store-frontend";
const COFFEE_SHOP_DEMO = "https://coffee-store-frontend-mzdn.vercel.app/";
const EZ_TECH_GITHUB = "https://github.com/Raymond764/eztech-frontend";
const EZ_TECH_DEMO = "https://eztech-frontend-neon.vercel.app";

// ── nav ──────────────────────────────────────────────────────────────────────

const NAV = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMobileOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled || mobileOpen
          ? "bg-[#08080f]/90 backdrop-blur-xl border-b border-[rgba(124,106,247,0.12)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("About")}
          className="font-['Plus_Jakarta_Sans'] font-bold text-lg tracking-tight"
          style={{
            background: "linear-gradient(135deg, #a78bfa, #7c6af7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          RB
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-['Inter']",
                  active === item
                    ? "text-white bg-[rgba(124,106,247,0.15)]"
                    : "text-[#7070a0] hover:text-white hover:bg-[rgba(124,106,247,0.08)]"
                )}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={CV_URL}
            download
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold font-['Inter'] text-[#c8c8e8] border border-[rgba(124,106,247,0.25)] bg-[rgba(18,18,40,0.5)] transition-all duration-200 hover:text-white hover:border-[rgba(124,106,247,0.5)]"
          >
            <Download size={14} />
            CV
          </a>

          <a
            href="mailto:ray.baraket@icloud.com"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold font-['Inter'] text-white transition-all duration-200 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #7c6af7, #5d4ef7)" }}
          >
            <Mail size={14} />
            Hire Me
          </a>
        </div>

        <button
          onClick={() => setMobileOpen((open) => !open)}
          className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center text-[#c8c8e8] border border-[rgba(124,106,247,0.18)] bg-[rgba(18,18,40,0.5)]"
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[rgba(124,106,247,0.12)] bg-[#08080f]/95 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-2">
            {NAV.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-left px-4 py-3 rounded-xl text-sm font-medium font-['Inter'] text-[#c8c8e8] hover:text-white hover:bg-[rgba(124,106,247,0.12)] transition-all"
              >
                {item}
              </button>
            ))}

            <div className="grid grid-cols-2 gap-3 mt-3">
              <a
                href={CV_URL}
                download
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold font-['Inter'] text-[#c8c8e8] border border-[rgba(124,106,247,0.25)] bg-[rgba(18,18,40,0.5)]"
              >
                <Download size={14} />
                CV
              </a>

              <a
                href="mailto:ray.baraket@icloud.com"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold font-['Inter'] text-white"
                style={{ background: "linear-gradient(135deg, #7c6af7, #5d4ef7)" }}
              >
                <Mail size={14} />
                Hire Me
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

// ── hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(circle, #7c6af7, transparent)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,106,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,106,247,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(124,106,247,0.3)] bg-[rgba(124,106,247,0.08)] backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-xs font-medium text-emerald-400 font-['Inter'] tracking-wide uppercase">
            Open to Full-Stack Developer Opportunities
          </span>
        </div>

        <div>
          <h1
            className="font-['Plus_Jakarta_Sans'] font-extrabold leading-[1.05] tracking-tight"
            style={{
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              background: "linear-gradient(135deg, #ffffff 30%, #a78bfa 70%, #7c6af7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Raymond
            <br />
            Baraket
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {["Computer Science Graduate", "Full-Stack Developer", "React · Node.js · Flutter"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full text-sm font-medium font-['Inter'] border border-[rgba(124,106,247,0.25)] text-[#c8c8e8] bg-[rgba(18,18,40,0.6)] backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="max-w-2xl text-[#7070a0] leading-relaxed font-['Inter'] text-base md:text-lg">
          Full-stack developer focused on building clean, responsive web applications and practical
          business systems. I combine computer science fundamentals with real operational experience
          using tools like React, Node.js, MongoDB, SQL, Flutter, and Odoo ERP.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:ray.baraket@icloud.com"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold font-['Inter'] text-white shadow-lg shadow-[rgba(124,106,247,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[rgba(124,106,247,0.5)] hover:shadow-xl"
            style={{ background: "linear-gradient(135deg, #7c6af7, #5d4ef7)" }}
          >
            <Send size={15} />
            Get In Touch
          </a>

          <a
            href={CV_URL}
            download
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold font-['Inter'] text-[#c8c8e8] border border-[rgba(124,106,247,0.25)] bg-[rgba(18,18,40,0.5)] backdrop-blur-sm transition-all duration-300 hover:border-[rgba(124,106,247,0.5)] hover:text-white hover:bg-[rgba(124,106,247,0.1)]"
          >
            <Download size={15} />
            Download CV
          </a>

          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold font-['Inter'] text-[#c8c8e8] border border-[rgba(124,106,247,0.25)] bg-[rgba(18,18,40,0.5)] backdrop-blur-sm transition-all duration-300 hover:border-[rgba(124,106,247,0.5)] hover:text-white hover:bg-[rgba(124,106,247,0.1)]"
          >
            <Star size={15} />
            View Projects
          </button>
        </div>

        <div className="flex items-center gap-3 mt-2">
          {[
            { icon: <Github size={18} />, href: GITHUB_URL, label: "GitHub" },
            { icon: <Linkedin size={18} />, href: LINKEDIN_URL, label: "LinkedIn" },
            { icon: <Mail size={18} />, href: "mailto:ray.baraket@icloud.com", label: "Email" },
            { icon: <Phone size={18} />, href: "tel:+96170378777", label: "Phone" },
            { icon: <MapPin size={18} />, href: MAP_URL, label: "Location" },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="w-11 h-11 rounded-xl flex items-center justify-center text-[#7070a0] border border-[rgba(124,106,247,0.2)] bg-[rgba(18,18,40,0.6)] backdrop-blur-sm transition-all duration-200 hover:text-white hover:border-[rgba(124,106,247,0.5)] hover:bg-[rgba(124,106,247,0.12)] hover:scale-110"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#7070a0] animate-bounce">
        <span className="text-xs font-['Inter'] tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}

// ── about ─────────────────────────────────────────────────────────────────────

function About() {
  const stats = [
    { value: "10+", label: "Technologies" },
    { value: "2+", label: "Projects" },
    { value: "3+", label: "Specializations" },
  ];

  const infoItems = [
    { icon: <MapPin size={14} />, text: "Hadchit & Dekweneh, Lebanon", href: MAP_URL },
    { icon: <Phone size={14} />, text: "+961 70 378 777", href: "tel:+96170378777" },
    { icon: <Mail size={14} />, text: "ray.baraket@icloud.com", href: "mailto:ray.baraket@icloud.com" },
    { icon: <Globe size={14} />, text: "Arabic Native · English Professional", href: undefined },
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>About Me</SectionLabel>

        <div className="mt-14 grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3 space-y-6">
            <h2
              className="font-['Plus_Jakarta_Sans'] font-bold leading-tight"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                background: "linear-gradient(135deg, #ffffff, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              A developer who cares about clean code, useful products, and real business impact.
            </h2>

            <p className="text-[#7070a0] font-['Inter'] leading-relaxed text-base">
              I&apos;m a Computer Science graduate from Lebanese International University with
              practical experience building full-stack web applications and working with real
              business systems. I enjoy turning ideas into clean, responsive, and useful software.
            </p>

            <p className="text-[#7070a0] font-['Inter'] leading-relaxed text-base">
              Since 2022, I&apos;ve also supported operations at a family supermarket, using Odoo ERP
              for product data, inventory tracking, supplier coordination, and sales workflows. This
              helped me understand how software solves real problems beyond the code editor.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {["Lebanon-based", "Open to Freelance & Developer Opportunities", "Full-Stack Developer"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium font-['Inter'] text-[#a78bfa] border border-[rgba(124,106,247,0.25)] bg-[rgba(124,106,247,0.08)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <div className="grid grid-cols-3 gap-3">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center p-4 rounded-xl border border-[rgba(124,106,247,0.15)] bg-[rgba(18,18,40,0.6)] backdrop-blur-sm text-center"
                >
                  <span
                    className="font-['Plus_Jakarta_Sans'] font-bold text-2xl"
                    style={{
                      background: "linear-gradient(135deg, #a78bfa, #7c6af7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {value}
                  </span>
                  <span className="text-[10px] text-[#7070a0] font-['Inter'] mt-1 uppercase tracking-wider">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl border border-[rgba(124,106,247,0.15)] bg-[rgba(18,18,40,0.6)] backdrop-blur-sm space-y-3">
              {infoItems.map(({ icon, text, href }) => {
                const content = (
                  <>
                    <span className="mt-0.5 text-[#7c6af7]">{icon}</span>
                    <span className="text-[#c8c8e8] text-sm font-['Inter']">{text}</span>
                  </>
                );

                return href ? (
                  <a
                    key={text}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-3 transition-all hover:translate-x-1"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={text} className="flex items-start gap-3">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── skills ────────────────────────────────────────────────────────────────────

const SKILL_GROUPS = [
  {
    label: "Frontend",
    icon: <Code2 size={18} />,
    color: "from-violet-500 to-purple-600",
    glow: "rgba(124,106,247,0.3)",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    proof: "Built responsive interfaces, reusable components, and polished portfolio UI.",
  },
  {
    label: "Backend",
    icon: <Wrench size={18} />,
    color: "from-blue-500 to-indigo-600",
    glow: "rgba(99,102,241,0.3)",
    skills: ["Node.js", "PHP", "Java", "C#", "Python"],
    proof: "Built REST API logic and practiced backend fundamentals through academic and personal projects.",
  },
  {
    label: "Mobile",
    icon: <Smartphone size={18} />,
    color: "from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.25)",
    skills: ["Flutter"],
    proof: "Studied mobile development and built mobile-focused academic work.",
  },
  {
    label: "Databases",
    icon: <Database size={18} />,
    color: "from-amber-500 to-orange-600",
    glow: "rgba(245,158,11,0.25)",
    skills: ["MySQL", "SQL Server", "MongoDB"],
    proof: "Worked with structured and document-based data for products, orders, and business records.",
  },
  {
    label: "Tools & Platforms",
    icon: <Wrench size={18} />,
    color: "from-rose-500 to-pink-600",
    glow: "rgba(244,63,94,0.25)",
    skills: ["Git", "REST APIs", "VS Code", "Visual Studio", "Cisco Packet Tracer", "Excel", "Odoo ERP"],
    proof: "Used developer tools and ERP workflows to manage real business operations and software tasks.",
  },
];

function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Technical Skills</SectionLabel>
        <GradientHeading className="mt-4 mb-4">What I build with</GradientHeading>

        <p className="max-w-2xl text-[#7070a0] font-['Inter'] leading-relaxed text-sm mb-14">
          I focus on tools that help me build practical, responsive, and maintainable applications —
          from frontend interfaces to backend logic, databases, and real business platforms.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map(({ label, icon, color, glow, skills, proof }) => (
            <div
              key={label}
              className="group relative p-6 rounded-2xl border border-[rgba(124,106,247,0.12)] bg-[rgba(18,18,40,0.5)] backdrop-blur-sm transition-all duration-300 hover:border-[rgba(124,106,247,0.3)] hover:-translate-y-1"
              style={{
                boxShadow: `0 0 0 0 ${glow}`,
                transition: "box-shadow 0.3s, transform 0.3s, border-color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 8px 40px ${glow}`)}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 0 transparent")}
            >
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br text-white mb-4", color)}>
                {icon}
              </div>

              <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-white mb-3">{label}</h3>
              <p className="text-[#7070a0] text-sm font-['Inter'] leading-relaxed mb-4">{proof}</p>

              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-lg text-xs font-['JetBrains_Mono'] font-medium text-[#c8c8e8] border border-[rgba(124,106,247,0.18)] bg-[rgba(124,106,247,0.07)] transition-all duration-200 hover:border-[rgba(124,106,247,0.4)] hover:text-white"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── projects ──────────────────────────────────────────────────────────────────

const FEATURED_PROJECTS = [
  {
    title: "Coffee Shop Web Application",
    type: "Full-Stack Web App",
    stack: ["React.js", "Node.js", "Tailwind CSS", "REST APIs"],
    desc: "A full-stack coffee shop application with responsive UI, shopping cart, product pages, and modern frontend experience.",
    features: ["Responsive Design", "Shopping Cart", "Product Details", "Modern UI/UX"],
    githubUrl: COFFEE_SHOP_GITHUB,
    liveUrl: COFFEE_SHOP_DEMO,
    imageUrl: "/coffee-shop-preview.png",
  },
  {
    title: "EZ Tech — Senior Project",
    type: "Academic Team Project",
    stack: ["System Analysis", "Design", "Implementation", "Testing"],
    desc: "A senior project focused on analyzing, designing, implementing, and testing a real-world software solution as part of a development team.",
    features: ["Team Collaboration", "System Design", "Testing Process", "Project Documentation"],
    githubUrl: EZ_TECH_GITHUB,
    liveUrl: EZ_TECH_DEMO,
    imageUrl: "/EztechDemo.png",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Featured Projects</SectionLabel>
        <GradientHeading className="mt-4 mb-4">Proof of what I can build</GradientHeading>

        <p className="max-w-2xl text-[#7070a0] font-['Inter'] leading-relaxed text-sm mb-14">
          These projects show my ability to plan, build, and present software using modern web
          technologies, backend logic, database thinking, and real problem-solving.
        </p>

        <div className="grid lg:grid-cols-2 gap-6">
          {FEATURED_PROJECTS.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-[rgba(124,106,247,0.15)] bg-[rgba(18,18,40,0.55)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(124,106,247,0.35)]"
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 12px 45px rgba(124,106,247,0.18)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <div className="relative h-56 border-b border-[rgba(124,106,247,0.12)] bg-[rgba(8,8,15,0.75)] overflow-hidden">
                {project.imageUrl ? (
                  <>
                    <img
                      src={project.imageUrl}
                      alt={`${project.title} screenshot`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08080f]/75 via-[#08080f]/20 to-transparent" />
                    <div className="relative h-full p-6 flex items-start justify-between">
                      <span className="px-3 py-1 rounded-full text-xs font-medium font-['Inter'] text-white border border-[rgba(255,255,255,0.2)] bg-[rgba(8,8,15,0.55)] backdrop-blur-md">
                        {project.type}
                      </span>
                      <FolderGit2 className="text-white drop-shadow" size={22} />
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="absolute inset-0 opacity-40"
                      style={{
                        background:
                          index === 0
                            ? "radial-gradient(circle at 30% 20%, #7c6af7, transparent 35%), radial-gradient(circle at 80% 80%, #10b981, transparent 35%)"
                            : "radial-gradient(circle at 30% 20%, #a78bfa, transparent 35%), radial-gradient(circle at 80% 80%, #f59e0b, transparent 35%)",
                      }}
                    />
                    <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:32px_32px]" />

                    <div className="relative h-full p-6 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full text-xs font-medium font-['Inter'] text-[#c8c8e8] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)]">
                          {project.type}
                        </span>
                        <FolderGit2 className="text-[#a78bfa]" size={22} />
                      </div>

                      <div className="rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[rgba(8,8,15,0.55)] p-5 backdrop-blur-md">
                        <div className="h-3 w-24 rounded-full bg-[rgba(167,139,250,0.35)] mb-3" />
                        <div className="h-3 w-full rounded-full bg-[rgba(255,255,255,0.12)] mb-2" />
                        <div className="h-3 w-2/3 rounded-full bg-[rgba(255,255,255,0.08)]" />
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-white text-xl mb-3">
                  {project.title}
                </h3>

                <p className="text-[#7070a0] text-sm font-['Inter'] leading-relaxed mb-5">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-['JetBrains_Mono'] text-[#a78bfa] border border-[rgba(124,106,247,0.2)] bg-[rgba(124,106,247,0.07)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[#c8c8e8] font-['Inter']">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7c6af7]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold font-['Inter'] text-white transition-all hover:scale-105"
                      style={{ background: "linear-gradient(135deg, #7c6af7, #5d4ef7)" }}
                    >
                      <Eye size={15} />
                      Live Demo
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold font-['Inter'] text-[#7070a0] border border-[rgba(124,106,247,0.15)] bg-[rgba(18,18,40,0.5)]">
                      <Eye size={15} />
                      Demo Soon
                    </span>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold font-['Inter'] text-[#c8c8e8] border border-[rgba(124,106,247,0.25)] bg-[rgba(18,18,40,0.5)] transition-all hover:text-white hover:border-[rgba(124,106,247,0.5)]"
                  >
                    <Github size={15} />
                    GitHub Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── experience ────────────────────────────────────────────────────────────────

function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Experience</SectionLabel>
        <GradientHeading className="mt-4 mb-14">Where I&apos;ve worked</GradientHeading>

        <div className="relative pl-6 border-l border-[rgba(124,106,247,0.2)]">
          <div className="absolute -left-[9px] top-0 w-[18px] h-[18px] rounded-full border-2 border-[#7c6af7] bg-[#08080f]" />

          <div
            className="group ml-6 p-7 rounded-2xl border border-[rgba(124,106,247,0.15)] bg-[rgba(18,18,40,0.5)] backdrop-blur-sm transition-all duration-300 hover:border-[rgba(124,106,247,0.3)] hover:-translate-y-0.5"
            style={{ transition: "box-shadow 0.3s, transform 0.3s, border-color 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 8px 40px rgba(124,106,247,0.15)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-violet-500 to-purple-600">
                  <Briefcase size={20} className="text-white" />
                </div>

                <div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-white text-lg">Operations Assistant</h3>
                  <p className="text-[#a78bfa] font-['Inter'] font-medium text-sm">Family Supermarket · North Lebanon</p>
                </div>
              </div>

              <span className="px-3 py-1 rounded-lg text-xs font-['JetBrains_Mono'] font-medium text-[#7070a0] border border-[rgba(124,106,247,0.15)] bg-[rgba(18,18,40,0.6)]">
                2022 – Present
              </span>
            </div>

            <ul className="space-y-2.5">
              {[
                "Use Odoo ERP to manage product data, sales records, stock levels, and daily operational workflows.",
                "Coordinate inventory tracking and supplier communication to support reliable product availability.",
                "Handle cash management, basic accounting tasks, and customer-facing operations.",
                "Gained practical understanding of how software systems support real business processes.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#7c6af7] flex-shrink-0" />
                  <span className="text-[#7070a0] font-['Inter'] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Odoo ERP", "Inventory Management", "Supplier Relations", "Business Systems", "Cash Management"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-medium font-['Inter'] text-[#a78bfa] border border-[rgba(124,106,247,0.2)] bg-[rgba(124,106,247,0.07)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── education ─────────────────────────────────────────────────────────────────

function Education() {
  return (
    <section id="education" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Education</SectionLabel>
        <GradientHeading className="mt-4 mb-14">Academic background</GradientHeading>

        <div className="grid lg:grid-cols-5 gap-8">
          <div
            className="lg:col-span-2 p-8 rounded-2xl border border-[rgba(124,106,247,0.2)] bg-[rgba(18,18,40,0.6)] backdrop-blur-sm transition-all duration-300 hover:border-[rgba(124,106,247,0.4)] hover:-translate-y-1 flex flex-col gap-6"
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 8px 40px rgba(124,106,247,0.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-[rgba(124,106,247,0.4)]">
              <GraduationCap size={26} className="text-white" />
            </div>

            <div>
              <h3
                className="font-['Plus_Jakarta_Sans'] font-bold text-xl leading-snug"
                style={{
                  background: "linear-gradient(135deg, #ffffff, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Bachelor of Science in Computer Science
              </h3>

              <p className="text-[#a78bfa] font-['Inter'] font-semibold mt-1">Lebanese International University</p>

              <div className="flex items-center gap-2 mt-3 text-[#7070a0] text-sm font-['Inter']">
                <MapPin size={13} />
                Lebanon
              </div>
            </div>

            <p className="text-[#7070a0] text-sm font-['Inter'] leading-relaxed">
              Studied software engineering, data structures, algorithms, databases, networking,
              web development, and mobile development.
            </p>

            <div className="mt-auto">
              <span className="px-3 py-1.5 rounded-lg text-xs font-medium font-['JetBrains_Mono'] text-[#a78bfa] border border-[rgba(124,106,247,0.25)] bg-[rgba(124,106,247,0.07)]">
                Certificate in Mobile Maintenance · CIS
              </span>
            </div>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Core CS Knowledge",
                items: ["Data structures", "Algorithms", "Databases", "Networking"],
              },
              {
                title: "Software Practice",
                items: ["Web applications", "Mobile development", "System design", "Testing"],
              },
            ].map((block) => (
              <div
                key={block.title}
                className="p-6 rounded-2xl border border-[rgba(124,106,247,0.12)] bg-[rgba(18,18,40,0.5)] backdrop-blur-sm"
              >
                <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-white mb-4">{block.title}</h4>
                <ul className="space-y-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[#7070a0] text-sm font-['Inter']">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7c6af7]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <a
              href={CV_URL}
              download
              className="sm:col-span-2 p-6 rounded-2xl border border-[rgba(124,106,247,0.2)] bg-[rgba(124,106,247,0.08)] transition-all hover:border-[rgba(124,106,247,0.45)] hover:-translate-y-0.5 flex items-center justify-between gap-4"
            >
              <div>
                <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-white mb-1">Want the full details?</h4>
                <p className="text-[#7070a0] text-sm font-['Inter']">Download my CV for education, skills, and contact information.</p>
              </div>
              <Download size={22} className="text-[#a78bfa] flex-shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── contact ───────────────────────────────────────────────────────────────────

const EMAILJS_SERVICE_ID = "service_9da4vli";
const EMAILJS_TEMPLATE_ID = "template_vnzvgss";
const EMAILJS_PUBLIC_KEY = "h6YHy2FWw7V5b5iHb";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const contactItems = [
    { icon: <Mail size={18} />, label: "Email", value: "ray.baraket@icloud.com", href: "mailto:ray.baraket@icloud.com" },
    { icon: <Phone size={18} />, label: "Phone", value: "+961 70 378 777", href: "tel:+96170378777" },
    { icon: <MapPin size={18} />, label: "Location", value: "Hadchit & Dekweneh, Lebanon", href: MAP_URL },
    { icon: <Linkedin size={18} />, label: "LinkedIn", value: "www.linkedin.com/in/raymond-baraket-354a7939b", href: LINKEDIN_URL },
    { icon: <Github size={18} />, label: "GitHub", value: "https://github.com/Raymond764", href: GITHUB_URL },
  ];

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Contact</SectionLabel>
        <GradientHeading className="mt-4 mb-14">Let&apos;s work together</GradientHeading>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <p className="text-[#7070a0] font-['Inter'] leading-relaxed text-sm mb-6">
              I&apos;m actively looking for junior developer roles and internships. If you have an
              opportunity, a project idea, or just want to connect — reach out.
            </p>

            {contactItems.map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 rounded-xl border border-[rgba(124,106,247,0.12)] bg-[rgba(18,18,40,0.5)] backdrop-blur-sm transition-all duration-200 hover:border-[rgba(124,106,247,0.3)] hover:bg-[rgba(124,106,247,0.06)] hover:-translate-y-0.5 group"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[rgba(124,106,247,0.12)] text-[#7c6af7] group-hover:bg-[rgba(124,106,247,0.2)] transition-colors">
                  {icon}
                </div>

                <div>
                  <p className="text-[10px] text-[#7070a0] font-['Inter'] uppercase tracking-wider">{label}</p>
                  <p className="text-[#c8c8e8] text-sm font-['Inter'] font-medium break-all">{value}</p>
                </div>
              </a>
            ))}
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="lg:col-span-3 p-8 rounded-2xl border border-[rgba(124,106,247,0.15)] bg-[rgba(18,18,40,0.6)] backdrop-blur-sm space-y-5"
          >
            <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-white text-lg">Send a message</h3>

            {[
              { id: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
              { id: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-xs font-medium font-['Inter'] text-[#7070a0] uppercase tracking-wider mb-2">
                  {label}
                </label>

                <input
                  id={id}
                  name={id}
                  type={type}
                  required
                  value={form[id as keyof typeof form]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(8,8,15,0.8)] border border-[rgba(124,106,247,0.15)] text-white text-sm font-['Inter'] placeholder-[#7070a0] transition-all duration-200 focus:outline-none focus:border-[#7c6af7] focus:ring-2 focus:ring-[rgba(124,106,247,0.2)]"
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-xs font-medium font-['Inter'] text-[#7070a0] uppercase tracking-wider mb-2">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-4 py-3 rounded-xl bg-[rgba(8,8,15,0.8)] border border-[rgba(124,106,247,0.15)] text-white text-sm font-['Inter'] placeholder-[#7070a0] resize-none transition-all duration-200 focus:outline-none focus:border-[#7c6af7] focus:ring-2 focus:ring-[rgba(124,106,247,0.2)]"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold font-['Inter'] text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{
                background:
                  status === "sent"
                    ? "linear-gradient(135deg, #10b981, #059669)"
                    : status === "error"
                    ? "linear-gradient(135deg, #ef4444, #dc2626)"
                    : "linear-gradient(135deg, #7c6af7, #5d4ef7)",
                boxShadow:
                  status === "sent"
                    ? "0 8px 32px rgba(16,185,129,0.3)"
                    : status === "error"
                    ? "0 8px 32px rgba(239,68,68,0.3)"
                    : "0 8px 32px rgba(124,106,247,0.3)",
              }}
            >
              {status === "sending" && <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />}

              {status === "sent" && (
                <>
                  <Star size={15} />
                  Message Sent! Check your inbox.
                </>
              )}

              {status === "error" && (
                <>
                  <Send size={15} />
                  Failed — please try again.
                </>
              )}

              {(status === "idle" || status === "sending") && status !== "sending" && (
                <>
                  <Send size={15} />
                  Send Message
                </>
              )}

              {status === "sending" && <span>Sending…</span>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// ── footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-[rgba(124,106,247,0.1)] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <div
              className="font-['Plus_Jakarta_Sans'] font-bold text-2xl tracking-tight mb-2"
              style={{
                background: "linear-gradient(135deg, #a78bfa, #7c6af7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Raymond Baraket
            </div>

            <p className="text-[#7070a0] text-sm font-['Inter']">Computer Science Graduate · Full-Stack Developer</p>
          </div>

          <div>
            <p className="text-xs text-[#7070a0] uppercase tracking-widest font-['Inter'] mb-3">Navigation</p>

            <ul className="space-y-2">
              {NAV.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                    className="text-sm font-['Inter'] text-[#7070a0] hover:text-[#a78bfa] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs text-[#7070a0] uppercase tracking-widest font-['Inter'] mb-3">Connect</p>

            <div className="flex gap-3">
              {[
                { icon: <Github size={16} />, label: "GitHub", href: GITHUB_URL },
                { icon: <Linkedin size={16} />, label: "LinkedIn", href: LINKEDIN_URL },
                { icon: <Mail size={16} />, label: "Email", href: "mailto:ray.baraket@icloud.com" },
                { icon: <MapPin size={16} />, label: "Location", href: MAP_URL },
              ].map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[#7070a0] border border-[rgba(124,106,247,0.15)] bg-[rgba(18,18,40,0.6)] transition-all duration-200 hover:text-[#a78bfa] hover:border-[rgba(124,106,247,0.4)]"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[rgba(124,106,247,0.08)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#7070a0] text-xs font-['Inter']">
            © {new Date().getFullYear()} Raymond  Baraket. All rights reserved.
          </p>

          <p className="text-[#7070a0] text-xs font-['Inter']">Built with React · TypeScript · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

// ── shared helpers ────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 h-[2px] rounded-full bg-gradient-to-r from-[#7c6af7] to-[#a78bfa]" />
      <span className="text-xs font-['Inter'] font-semibold text-[#7c6af7] uppercase tracking-[0.2em]">
        {children}
      </span>
    </div>
  );
}

function GradientHeading({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={cn("font-['Plus_Jakarta_Sans'] font-bold leading-tight", className)}
      style={{
        fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
        background: "linear-gradient(135deg, #ffffff 40%, #a78bfa 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </h2>
  );
}

// ── app ───────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-['Inter'] overflow-x-hidden">
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #08080f; }
        ::-webkit-scrollbar-thumb { background: rgba(124,106,247,0.3); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(124,106,247,0.6); }
      `}</style>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}