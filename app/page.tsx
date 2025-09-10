"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { DecorWaveAlt } from "@/components/decor-wave-alt"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiPhp,
  SiCplusplus,
  SiC,
  SiDjango,
  SiVuedotjs,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiBootstrap,
  SiWordpress,
  SiAmazon,
  SiGit,
  SiGithub,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
  SiSketch,
  SiAdobeindesign,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiCanva,
} from "react-icons/si"

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-white/40 border-b border-[#0861A0]/10 shadow-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-[#0861A0]" style={{fontFamily: 'iBrand, sans-serif', fontWeight: '800'}}>marymharperez.</h1>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-muted-foreground hover:text-[#0861A0] transition-colors">Services</a>
              <a href="#about" className="text-muted-foreground hover:text-[#0861A0] transition-colors">About</a>
              <a href="#projects" className="text-muted-foreground hover:text-[#0861A0] transition-colors">Portfolio</a>
              <a href="#blog" className="text-muted-foreground hover:text-[#0861A0] transition-colors">Blog</a>
              <a href="#login" className="text-[#0861A0] hover:underline">Log In</a>
              <a href="#contact" className="px-4 py-2 rounded-xl bg-[#0861A0] text-white hover:bg-[#064b7f] transition-colors">Book a Call</a>
            </div>
          </div>
        </div>
      </nav>
      {/* spacer to offset fixed nav height */}
      <div className="h-16"></div>

      {/* Hero Section - Grafik style */}
      <section className="relative py-10 md:py-16 px-4 overflow-hidden bg-white">
        <DecorWaveAlt className="pointer-events-none absolute right-0 top-0 w-56 md:w-96 h-20 md:h-28 z-0 rotate-180" color="#84D3EB" opacity={0.35} />
        
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-1 md:gap-0 items-center">
          <div className="relative z-10 md:order-2 w-full md:w-[68vw] lg:w-[62vw] xl:w-[60vw] max-w-none mx-auto ml-0 md:-ml-28 lg:-ml-40 xl:-ml-[10rem] md:-translate-x-8 lg:-translate-x-12 xl:-translate-x-16 mt-0 md:-mt-2 justify-self-start md:justify-self-start md:scale-105 lg:scale-115 xl:scale-115 origin-left overflow-hidden group animate-slide-in-right animate-hero-in"> 

<Image
  src="/heropic.png"
  alt="Mary Mhar Perez"
  width={2000}
  height={2000}
  quality={100}
  sizes="(min-width:1280px) 60vw, (min-width:1024px) 66vw, (min-width:768px) 72vw, 92vw"
  className="w-full h-auto md:h-full object-cover transition-transform duration-500 ease-out will-change-transform cursor-zoom-in group-hover:scale-110 active:scale-110 animate-float-slow"
  priority
/>
</div>
            <div className="relative z-30 md:order-1 max-w-3xl md:max-w-4xl md:self-center md:-translate-y-4 lg:-translate-y-8 xl:-translate-y-10">
              
              <span className="text-sm font-semibold text-[#0861A0] uppercase tracking-wider">Hello</span>
              <h1 className="mt-3 text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-[#0861A0]">I'm Mary Mhar Perez</h1>
              <p className="mt-3 text-xl md:text-2xl font-semibold text-[#eac92d]">Full-Stack Developer | WordPress Developer | Graphic Designer</p>
              <p className="mt-5 text-muted-foreground max-w-3xl leading-relaxed" style={{ textAlign: 'justify' }}>
                Fresh graduate and aspiring Full-Stack Developer with internship experience as a WordPress Developer. Skilled in building responsive web applications using Laravel, Django, and React, with a foundation in SQL and JavaScript. Strong background in UI/UX and graphic design, enabling me to create user-friendly and visually engaging solutions. Eager to contribute to a dynamic team where I can grow as a developer and apply both technical and creative skills.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="px-6 py-3 rounded-xl bg-[#0861A0] text-white hover:bg-[#064b7f] transition-colors inline-flex items-center gap-2">
                  Let’s Talk <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#about" className="px-6 py-3 rounded-xl border border-[#0861A0] text-[#0861A0] hover:bg-[#0861A0] hover:text-white transition-colors">
                  Learn More
                </a>
              </div>
            
            </div>
           
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-b from-transparent to-[#0b62a1]/100 z-20"></div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="hidden py-20 px-4 bg-white relative overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#0861A0] mb-12">What Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Nikkea Jones", quote: "Responsive, aligned, and proactive. A real partner in our work." },
              { name: "Veronica Canton", quote: "Great work, asks the right questions, and communicates clearly." },
              { name: "Renata Fulawka", quote: "Continuously improving and expanding impact on our visibility." },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl border border-[#84D3EB]/50 p-6 bg-white">
                <p className="text-muted-foreground">“{t.quote}”</p>
                <div className="mt-4 font-semibold text-[#0861A0]">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog */}
      <section id="blog" className="hidden py-20 px-4 bg-[#F8FCFE] relative overflow-hidden">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0861A0]">Featured Articles</h2>
            <a href="#" className="text-[#0861A0] hover:underline">More Blogs and Resources</a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-[#84D3EB]/50 bg-white">
                <div className="h-40 bg-[#BEE6F2]"></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#0861A0]">Article title {i}</h3>
                  <p className="mt-2 text-muted-foreground">Short description about the article topic and value.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="hidden py-20 px-4 bg-white relative overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#0861A0] mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: "Is a portfolio site right for me?", a: "If you need a credible hub for your work and services, yes." },
              { q: "Do you handle deployment and hosting?", a: "Yes—Vercel/Netlify preferred, or your provider of choice." },
              { q: "What stacks do you use?", a: "Next.js, TypeScript, Tailwind, and modern headless tooling." },
              { q: "How soon can we start?", a: "Discovery call within days; project kickoff right after alignment." },
            ].map((f) => (
              <div key={f.q} className="rounded-2xl border border-[#84D3EB]/50 p-6 bg-white">
                <h3 className="font-semibold text-[#0861A0]">{f.q}</h3>
                <p className="mt-2 text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Services */}
      <section id="services" className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0861A0]">Services I Offer</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Full‑stack delivery—from brand identity and interfaces to production‑ready code and launch.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Branding & Design", desc: "Logo systems, design language, social graphics, presentation decks that look premium and consistent." },
              { title: "Web Development", desc: "Next.js + TypeScript. Accessible, fast, SEO‑ready sites with CMS and clean codebases you can scale." },
              { title: "Marketing & Content", desc: "Landing pages, campaign visuals, and copy that converts—aligned to your brand." },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#84D3EB]/50 p-6 bg-white">
                <h3 className="text-xl font-semibold text-[#0861A0]">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-20 px-4 bg-[#F8FCFE] relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl bg-white border border-[#84D3EB]/50 p-8">
              <h3 className="text-2xl font-bold text-[#0861A0]">My Mission</h3>
              <p className="mt-3 text-muted-foreground">
                Empower founders and teams with design-first web experiences that are fast, accessible, and easy to manage.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-[#84D3EB]/50 p-8">
              <h3 className="text-2xl font-bold text-[#0861A0]">My Vision</h3>
              <p className="mt-3 text-muted-foreground">
                Be a trusted partner who delivers clarity and momentum through thoughtful craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Am */}
      <section id="about" className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0861A0] mb-4">Who I Am</h2>
              <p className="text-muted-foreground leading-relaxed">
                Web developer and designer focused on clean interfaces, performance, and reliable delivery. I help founders turn ideas into elegant, usable products.
              </p>
            </div>
            <div className="rounded-2xl bg-[#BEE6F2] p-8 border border-[#84D3EB]/50">
              <ul className="grid grid-cols-2 gap-4 text-[#0861A0]">
                <li className="rounded-xl bg-white p-4 border border-[#84D3EB]/50"><span className="font-semibold">UX‑First</span><div className="text-sm opacity-80">Clear flows, readable design</div></li>
                <li className="rounded-xl bg-white p-4 border border-[#84D3EB]/50"><span className="font-semibold">Performant</span><div className="text-sm opacity-80">Passes Core Web Vitals</div></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 px-4 bg-[#F8FCFE] relative overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#0861A0] mb-12">How We’ll Work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Discovery", desc: "Goals, constraints, scope, and success metrics." },
              { step: "2", title: "Design & Build", desc: "Iterative UI, content, and production-ready code." },
              { step: "3", title: "Launch & Support", desc: "Deploy, measure, optimize, and maintain." },
            ].map((p) => (
              <div key={p.step} className="rounded-2xl bg-white border border-[#84D3EB]/50 p-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#EAC928] text-[#0861A0] font-bold">{p.step}</div>
                <h3 className="mt-4 text-xl font-semibold text-[#0861A0]">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about-me" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block">
              <span className="text-sm font-semibold text-[#0861A0] uppercase tracking-wider mb-4 block">
                — ABOUT ME
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-[#0861A0]">Why You Hire Me</h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="relative w-full max-w-md mx-auto">
                <Image
                  src="/aboutme.png"
                  alt="Mary Mhar Perez"
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover object-center"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-muted-foreground mb-8 text-pretty leading-relaxed text-lg">
                Full‑Stack Developer with hands‑on experience building internal tools, dashboards, and automations.
                Strong background in frontend (UI/UX) and backend development, comfortable working across SQL, Python,
                JavaScript and modern frameworks.
              </p>
              <p className="text-muted-foreground mb-12 text-pretty leading-relaxed text-lg">
                Demonstrated ability to integrate APIs, automate workflows, and manage dynamic content on platforms like
                WordPress. Certified in Laravel, Smart Contracts, and Microsoft Azure. I’m focused on translating
                business needs into scalable, maintainable technical solutions. I also support my school with logo design
                and pubmats (publication materials) for campus communications.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card rounded-2xl p-6 transition-all duration-300 hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#37B4DB] rounded-lg flex items-center justify-center transform rotate-45">
                      <div className="w-6 h-6 bg-white rounded-sm transform -rotate-45"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Smart Work</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Efficient, focused execution with a bias for outcomes and clarity.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-6 transition-all duration-300 hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#EAC928] rounded-lg flex items-center justify-center transform rotate-45">
                      <div className="w-6 h-6 bg-white rounded-sm transform -rotate-45"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Modern Work</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Use of modern, accessible patterns, maintainable code, and clean UI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#0861A0] mb-12">Experience</h2>
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="rounded-2xl border border-[#84D3EB]/50 p-6 bg-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-[#0861A0]">Junior Developer (Intern) — Odysse.IO</h3>
                  <div className="text-muted-foreground">WordPress, PHP, MySQL • 2024</div>
                </div>
                <div className="text-sm text-muted-foreground">Internship</div>
              </div>
              <ul className="mt-4 list-disc pl-5 text-muted-foreground space-y-2">
                <li>Developed and maintained client websites using WordPress and PHP.</li>
                <li>Collaborated with designers to implement responsive UI/UX layouts.</li>
                <li>Improved site performance and optimized front-end components.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#84D3EB]/50 p-6 bg-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-[#0861A0]">Freelance Graphic Designer</h3>
                  <div className="text-muted-foreground">Photoshop, Illustrator, Canva • Ongoing</div>
                </div>
                <div className="text-sm text-muted-foreground">Freelance</div>
              </div>
              <ul className="mt-4 list-disc pl-5 text-muted-foreground space-y-2">
                <li>Designed logos, posters, and marketing materials aligned with client branding.</li>
                <li>Delivered creative solutions tailored to client goals and timelines.</li>
                <li>Edited photos using Adobe Lightroom and produced videos using CapCut.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-[#F8FCFE]">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-[#0861A0]">Web Development Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "CoLink Connect",
                description:
                  "Laravel + MySQL platform that improved community communication and collaboration across services.",
                tech: ["Laravel", "MySQL", "Blade", "Auth"],
                image: "/placeholder.jpg",
              },
              {
                title: "Argao Tourism Website",
                description:
                  "Designed and built with WordPress, PHP, and Figma—helped increase engagement by providing tourism information online.",
                tech: ["WordPress", "PHP", "Figma"],
                image: "/web-banner-design.png",
              },
              {
                title: "RedBit",
                description:
                  "Next.js + React + MongoDB + Solidity platform enabling secure, seamless blockchain‑based blood donations.",
                tech: ["Next.js", "React", "MongoDB", "Solidity"],
                image: "/placeholder.jpg",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group glass-card hover:glow transition-all duration-500 rounded-3xl overflow-hidden hover:scale-105 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[#0861A0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-xl">
                    {project.title}
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-[#0861A0] transition-all duration-300 group-hover:scale-110" />
                  </CardTitle>
                  <CardDescription className="text-pretty leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-gradient-to-r from-[oklch(0.72_0.08_190)] to-[oklch(0.65_0.15_200)] text-[oklch(0.45_0.18_220)] rounded-full hover:scale-105 transition-transform"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="designs" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-[#0861A0]">Graphic Design Showcase</h2>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {[
              { src: "/modern-brand-logo-design.jpg", height: "h-64" },
              { src: "/creative-poster-design.jpg", height: "h-80" },
              { src: "/modern-business-card.png", height: "h-48" },
              { src: "/web-banner-design.png", height: "h-56" },
              { src: "/social-media-graphics.png", height: "h-72" },
              { src: "/brochure-design-layout.jpg", height: "h-64" },
              { src: "/packaging-design-concept.jpg", height: "h-80" },
              { src: "/infographic-design.jpg", height: "h-96" },
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 break-inside-avoid mb-4 ${item.height} hover:scale-105 hover:-translate-y-2`}
              >
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={`Design work ${index + 1}`}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                />
                <div className="absolute inset-0 bg-[#0861A0]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 glow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4 bg-[#F8FCFE]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-semibold text-[#0861A0] tracking-wider">— SKILLS</div>
              <h2 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight text-[#0861A0]"><span className="text-[#EAC928]">I Develop Skills Regularly</span><br/>To Keep Me Update</h2>
              <p className="mt-6 text-muted-foreground max-w-xl">I take my time, I don’t force things, I just feel & absorb emotions that are floating around. I capture moments as they come. If my photos reflect the real atmosphere.</p>
              <ul className="mt-6 grid gap-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0861A0] mt-1" />
                  <span className="text-foreground"><strong className="text-[#0861A0]">Programming:</strong> Java, PHP, Python, C#, C++, C, JavaScript</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0861A0] mt-1" />
                  <span className="text-foreground"><strong className="text-[#0861A0]">Frameworks:</strong> Laravel, Django, React, Xamarin.Forms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0861A0] mt-1" />
                  <span className="text-foreground"><strong className="text-[#0861A0]">Databases:</strong> MySQL, PostgreSQL, SQLite</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0861A0] mt-1" />
                  <span className="text-foreground"><strong className="text-[#0861A0]">Web Tech:</strong> HTML5, CSS3, Bootstrap, WordPress</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0861A0] mt-1" />
                  <span className="text-foreground"><strong className="text-[#0861A0]">Blockchain:</strong> Smart Contracts, Solidity</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0861A0] mt-1" />
                  <span className="text-foreground"><strong className="text-[#0861A0]">Cloud:</strong> AWS (basic), Azure (basic)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0861A0] mt-1" />
                  <span className="text-foreground"><strong className="text-[#0861A0]">Version Control:</strong> Git, GitHub</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0861A0] mt-1" />
                  <span className="text-foreground"><strong className="text-[#0861A0]">Design Tools:</strong> Photoshop, Illustrator, Canva, Lightroom, CapCut</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0861A0] mt-1" />
                  <span className="text-foreground"><strong className="text-[#0861A0]">Tool Management:</strong> Google Calendar, Notion</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0861A0] mt-1" />
                  <span className="text-foreground"><strong className="text-[#0861A0]">Soft Skills:</strong> Problem Solving • Collaboration • Agile Methodologies • Leadership • Adaptability • Creativity</span>
                </li>
              </ul>
              <a href="/resume.pdf" className="inline-flex items-center gap-2 mt-8 px-5 py-3 rounded-xl bg-[#0861A0] text-white hover:bg-[#064b7f] transition-colors">Download CV</a>
            </div>
            <div className="relative space-y-8">
              <div className="flex justify-center gap-8">
                {['Ai','Ps','Dw','TS'].map((label) => (
                  <div key={label} className="relative w-24 h-24 md:w-28 md:h-28 [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)] bg-[#0861A0] ring-1 ring-[#064b7f]/40 shadow-[0_6px_18px_rgba(8,102,160,0.18)] grid place-items-center">
                    <div className="px-3 py-1 rounded-md bg-white/10 ring-1 ring-white/30 text-white text-sm md:text-base font-semibold">{label}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-8 translate-x-10 md:translate-x-12">
                {['Ae','Pr','En'].map((label) => (
                  <div key={label} className="relative w-24 h-24 md:w-28 md:h-28 [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)] bg-[#0861A0] ring-1 ring-[#064b7f]/40 shadow-[0_6px_18px_rgba(8,102,160,0.18)] grid place-items-center">
                    <div className="px-3 py-1 rounded-md bg-white/10 ring-1 ring-white/30 text-white text-sm md:text-base font-semibold">{label}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-8">
                {['Id','HTML','CSS','JS'].map((label) => (
                  <div key={label} className="relative w-24 h-24 md:w-28 md:h-28 [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)] bg-[#0861A0] ring-1 ring-[#064b7f]/40 shadow-[0_6px_18px_rgba(8,102,160,0.18)] grid place-items-center">
                    <div className="px-3 py-1 rounded-md bg-white/10 ring-1 ring-white/30 text-white text-sm md:text-base font-semibold">{label}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-8 -translate-x-10 md:-translate-x-12">
                {['TS','React','Next'].map((label) => (
                  <div key={label} className="relative w-24 h-24 md:w-28 md:h-28 [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)] bg-[#0861A0] ring-1 ring-[#064b7f]/40 shadow-[0_6px_18px_rgba(8,102,160,0.18)] grid place-items-center">
                    <div className="px-3 py-1 rounded-md bg-white/10 ring-1 ring-white/30 text-white text-sm md:text-base font-semibold">{label}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-8">
                {['Laravel','Django','Vue','WP'].map((label) => (
                  <div key={label} className="relative w-24 h-24 md:w-28 md:h-28 [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)] bg-[#0861A0] ring-1 ring-[#064b7f]/40 shadow-[0_6px_18px_rgba(8,102,160,0.18)] grid place-items-center">
                    <div className="px-3 py-1 rounded-md bg-white/10 ring-1 ring-white/30 text-white text-sm md:text-base font-semibold">{label}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-8 translate-x-10 md:translate-x-12">
                {['BS','Git'].map((label) => (
                  <div key={label} className="relative w-24 h-24 md:w-28 md:h-28 [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)] bg-[#0861A0] ring-1 ring-[#064b7f]/40 shadow-[0_6px_18px_rgba(8,102,160,0.18)] grid place-items-center">
                    <div className="px-3 py-1 rounded-md bg-white/10 ring-1 ring-white/30 text-white text-sm md:text-base font-semibold">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-[#0861A0]">Certifications & Awards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Creative Web Design (TESDA)",
                issuer: "TESDA",
                date: "2023",
                description: "National certification covering modern web design practices and standards.",
                type: "Certificate",
              },
              {
                title: "Computer Systems Servicing",
                issuer: "TESDA",
                date: "2024",
                description: "Competency in servicing, troubleshooting, and maintaining computer systems.",
                type: "Certificate",
              },
              {
                title: "Smart Contracts: Coding for the Blockchain",
                issuer: "Xaltius",
                date: "2024",
                description: "Foundational Solidity and smart contract development concepts.",
                type: "Certificate",
              },
              {
                title: "Azure Fundamentals",
                issuer: "Microsoft",
                date: "2024",
                description: "Core Azure services, security, pricing, and cloud concepts.",
                type: "Certificate",
              },
              {
                title: "Junior Developer (Intern)",
                issuer: "Odysse.IO",
                date: "2024",
                description: "Backend (WordPress, PHP, MySQL) and frontend (HTML/CSS/JS, Bootstrap) experience.",
                type: "Internship",
              },
            ].map((cert, index) => (
              <Card
                key={index}
                className="group glass-card hover:glow transition-all duration-500 rounded-3xl overflow-hidden hover:scale-105 hover:-translate-y-2"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <span
                      className="rounded-full text-xs font-medium px-3 py-1 text-white"
                      style={{
                        background:
                          cert.type === "Award"
                            ? "linear-gradient(to right, #EAC928, #0861A0)"
                            : cert.type === "Design Certification"
                              ? "linear-gradient(to right, #37B4DB, #0861A0)"
                              : "linear-gradient(to right, #84D3EB, #37B4DB)",
                        color: "white",
                      }}
                    >
                      {cert.type}
                    </span>
                    <span className="text-sm text-muted-foreground font-medium">{cert.date}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-[#0861A0] transition-colors duration-300">
                    {cert.title}
                  </CardTitle>
                  <div className="text-[#EAC928] font-semibold text-sm">{cert.issuer}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-pretty leading-relaxed">{cert.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-[#F8FCFE] relative overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-[#0861A0]">Let's Work Together</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="glass-card rounded-3xl p-8 hover:glow transition-all duration-300">
              <h3 className="text-3xl font-semibold mb-6 text-[#0861A0]">
                Tell Me About Your Project
              </h3>
              <p className="text-muted-foreground mb-8 text-pretty leading-relaxed text-lg">
                Need a polished brand and a fast website? I combine UI/UX, front‑end engineering, and strong visuals to ship work that feels premium and performs.
              </p>
              <div className="space-y-6">
                <a
                  href="mailto:marymhar04@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl glass transition-all duration-300 hover:scale-105 group"
                >
                  <div className="p-3 rounded-xl bg-[#0861A0] group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-foreground font-medium">marymhar04@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mary-mhar-perez/"
                  className="flex items-center gap-4 p-4 rounded-2xl glass transition-all duration-300 hover:scale-105 group"
                >
                  <div className="p-3 rounded-xl bg-[#0861A0] group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-foreground font-medium">LinkedIn Profile</span>
                </a>
                <a
                  href="https://github.com/marymharperez"
                  className="flex items-center gap-4 p-4 rounded-2xl glass transition-all duration-300 hover:scale-105 group"
                >
                  <div className="p-3 rounded-xl bg-[#0861A0] group-hover:scale-110 transition-transform">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-foreground font-medium">GitHub Profile</span>
                </a>
              </div>
            </div>
            <Card className="glass-card rounded-3xl shadow-2xl hover:glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-[#0861A0]">Start Your Project</CardTitle>
                <CardDescription className="text-lg">Share a few details—I'll reply with next steps.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    className="rounded-2xl glass-card border-0 focus:glow transition-all duration-300"
                  />
                  <Input
                    placeholder="Last Name"
                    className="rounded-2xl glass-card border-0 focus:glow transition-all duration-300"
                  />
                </div>
                <Input
                  placeholder="Email Address"
                  type="email"
                  className="rounded-2xl glass-card border-0 focus:glow transition-all duration-300"
                />
                <Input
                  placeholder="Subject"
                  className="rounded-2xl glass-card border-0 focus:glow transition-all duration-300"
                />
                <Textarea
                  placeholder="Your message..."
                  className="rounded-2xl glass-card border-0 min-h-32 focus:glow transition-all duration-300"
                />
                <Button className="w-full rounded-2xl gradient-primary text-white glow-hover transition-all duration-300 hover:scale-105 group text-lg py-6">
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA (moved near footer) */}
      <section className="py-20 px-4 bg-[#BEE6F2] relative overflow-hidden">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#eac92d]">Design it. Build it. Ship it.</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">One partner for brand, UI/UX, and code—delivered with quality and speed.</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="#contact" className="px-6 py-3 rounded-xl bg-[#0861A0] text-white hover:bg-[#064b7f] transition-colors">Book a Discovery Call</a>
            <a href="#portfolio" className="px-6 py-3 rounded-xl border border-[#0861A0] text-[#0861A0] hover:bg-[#0861A0] hover:text-white transition-colors">See Case Studies</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 glass border-t border-border/20">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Mary Mhar Perez. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

