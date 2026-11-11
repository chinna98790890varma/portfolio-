'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'AfterSchool Booking',
    description: 'Full-stack booking platform with Vue.js, Express.js, and MongoDB.',
    image: '/what.jpeg',
    live: 'https://chinna98790890varma.github.io/CST3144-afterschool-frontend',
    repo: 'https://github.com/chinna98790890varma/CST3144-afterschool-frontend'
  },
  {
    title: 'Farmer2Home Connect',
    description: 'MERN marketplace with OTP/JWT auth, real-time updates and responsive UI.',
    image: '/what.jpeg',
    live: '#',
    repo: '#'
  },
  {
    title: 'Project 3',
    description: 'University assignment with polished UI and UX interactions.',
    image: '/what.jpeg',
    live: '#',
    repo: '#'
  },
  {
    title: 'Project 4',
    description: 'Interactive web interface built for a university coursework project.',
    image: '/what.jpeg',
    live: '#',
    repo: '#'
  },
  {
    title: 'Project 5',
    description: 'Capstone-style app combining backend and frontend technologies.',
    image: '/what.jpeg',
    live: '#',
    repo: '#'
  }
];

const testimonials = [
  {
    name: 'University Mentor',
    role: 'Professor',
    quote: 'Delivered thoughtful web experiences with strong UI and backend logic.',
  },
  {
    name: 'Course Project Lead',
    role: 'Team Lead',
    quote: 'Consistently shipped polished features and collaborated well with the team.',
  },
  {
    name: 'Peer Reviewer',
    role: 'Classmate',
    quote: 'The interface felt modern and easy to use, great work on the animations.',
  }
];

const skills = [
  { label: 'HTML & CSS', percent: 90 },
  { label: 'JavaScript', percent: 85 },
  { label: 'React', percent: 75 },
  { label: 'Node.js', percent: 70 }
];

export default function Home() {
  const timelineRef = useRef(null);
  const skillRef = useRef(null);
  const carouselRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const sections = timelineRef.current?.querySelectorAll('.timeline-item');
    if (sections?.length) {
      sections.forEach((item, index) => {
        gsap.from(item, {
          y: 80,
          opacity: 0,
          duration: 0.9,
          delay: index * 0.18,
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
          }
        });
      });
    }

    const skills = skillRef.current?.querySelectorAll('.progress-fill');
    if (skills?.length) {
      gsap.fromTo(skills, { width: '0%' }, {
        width: function() { return this.dataset.percent + '%'; },
        duration: 1.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: skillRef.current,
          start: 'top 80%'
        }
      });
    }

    const handleMouse = (event) => {
      const { clientX, clientY } = event;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
    };
    window.addEventListener('mousemove', handleMouse);

    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <main className="relative overflow-hidden bg-[#05050b] text-white">
      <div ref={cursorRef} className="pointer-events-none fixed left-0 top-0 z-50 h-6 w-6 rounded-full border border-pink-300 bg-pink-400/20 shadow-glow opacity-90 mix-blend-screen transition-transform duration-150" />
      <section className="relative min-h-screen bg-hero-radial px-6 pb-24 pt-16 sm:px-10 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,121,198,0.14),_transparent_20%),radial-gradient(circle_at_80%_15%,_rgba(138,43,226,0.12),_transparent_18%)]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full bg-pink-500/10 px-4 py-2 text-sm text-pink-200 ring-1 ring-pink-500/20">Creative Full Stack Portfolio</span>
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl">I build premium web experiences with motion, polish, and speed.</h1>
              <p className="max-w-2xl text-lg text-slate-300">Award-inspired portfolio built with Next.js, Tailwind CSS, Framer Motion, and GSAP-like scroll interactions for a premium presentation.</p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-black shadow-glow transition hover:-translate-y-1 hover:bg-pink-400">View Projects</a>
                <a href="#contact" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-pink-300">Contact Me</a>
              </div>
            </div>
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="relative mx-auto w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 p-1 shadow-[0_40px_120px_rgba(0,0,0,0.3)] backdrop-blur-xl">
              <div className="overflow-hidden rounded-[30px] bg-[#11101a] p-6">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-pink-400 via-violet-500 to-cyan-400" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-pink-300">Featured Work</p>
                    <h2 className="text-2xl font-semibold">Motion-led experience</h2>
                  </div>
                </div>
                <p className="text-sm leading-7 text-slate-300">A premium landing hero with animated section reveal, cursor follower, and layered background shapes powered by modern UI tools.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-20">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(255,121,198,0.15),_transparent_18%)]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full bg-slate-800/80 px-4 py-2 text-sm text-slate-200">About Me</span>
              <h2 className="text-4xl font-semibold text-white">Crafting smart, polished interfaces with robust backend logic.</h2>
              <p className="max-w-3xl leading-relaxed text-slate-300">I create modern applications with attention to interaction, performance, and visual storytelling, using React and backend architecture to deliver high-quality student projects.</p>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl">
                  <p className="text-3xl font-semibold text-white">5</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-400">Projects</p>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl">
                  <p className="text-3xl font-semibold text-white">0</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-400">Clients</p>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl">
                  <p className="text-3xl font-semibold text-white">2026</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-400">Year</p>
                </div>
              </div>
            </div>
            <motion.div initial={{ scale: 0.96, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.22)] backdrop-blur-xl">
              <div className="overflow-hidden rounded-[28px] bg-[#0c0b15] p-4">
                <div className="relative h-[320px] rounded-[24px] bg-slate-950/90">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,121,198,0.16),_transparent_18%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(102,102,255,0.16),_transparent_12%)]" />
                  <div className="absolute left-6 top-6 w-24 rounded-3xl bg-pink-500/20 p-4 text-sm text-white shadow-glow">Featured Video</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="timeline" className="relative px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-4xl font-semibold">Experience Timeline</h2>
          <div ref={timelineRef} className="relative border-l border-white/10 pl-8">
            {['Started university coursework', 'Built first full-stack project', 'Delivered group project with live demo', 'Completed capstone assignment', 'Preparing portfolio and real-world skills'].map((item, idx) => (
              <div key={idx} className="timeline-item relative mb-12 pl-8 text-slate-200 before:absolute before:left-[-18px] before:top-2 before:h-4 before:w-4 before:rounded-full before:border before:border-pink-400 before:bg-slate-950">
                <p className="mb-2 text-sm uppercase tracking-[0.24em] text-pink-300">Phase {idx + 1}</p>
                <h3 className="text-2xl font-semibold text-white">{item}</h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-slate-300">A smooth timeline section with scrolling reveal animation and elegant transitions between each timeline entry.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-4xl font-semibold">Projects</h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article key={index} whileHover={{ y: -8 }} transition={{ duration: 0.4 }} className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.15)] backdrop-blur-xl">
                <div className="relative overflow-hidden">
                  <Image src={project.image} alt={project.title} width={1200} height={800} className="h-56 w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-6">
                    <p className="text-sm uppercase tracking-[0.24em] text-pink-300">Live Project</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="leading-relaxed text-slate-300">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={project.live} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-pink-300" target="_blank" rel="noreferrer">Live Preview</a>
                    <a href={project.repo} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-cyan-300" target="_blank" rel="noreferrer">Repo</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="relative px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-4xl font-semibold">Testimonials</h2>
          <div ref={carouselRef} className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.1 }} className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.2)] backdrop-blur-xl">
                <p className="leading-relaxed text-slate-300">“{item.quote}”</p>
                <div className="mt-6">
                  <p className="text-lg font-semibold text-white">{item.name}</p>
                  <p className="text-sm uppercase tracking-[0.24em] text-pink-300">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="relative px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center" ref={skillRef}>
            <div>
              <span className="inline-flex rounded-full bg-pink-500/10 px-4 py-2 text-sm text-pink-200 ring-1 ring-pink-500/20">Skills</span>
              <h2 className="mt-4 text-4xl font-semibold text-white">Interactive skill visualization</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">Animated skill bars and floating icons highlight your core tech strengths in a polished layout.</p>
              <div className="mt-10 space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between text-sm font-semibold text-white">
                      <span>{skill.label}</span>
                      <span>{skill.percent}%</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-white/10">
                      <div className="progress-fill h-full rounded-full bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400" data-percent={skill.percent} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="absolute -left-10 top-20 flex h-24 w-24 items-center justify-center rounded-3xl bg-pink-500/15 text-2xl shadow-glow">⚛️</div>
              <div className="absolute right-0 top-10 flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-400/10 text-2xl shadow-glow">🟦</div>
              <div className="absolute -bottom-10 left-10 flex h-16 w-16 items-center justify-center rounded-3xl bg-violet-500/15 text-2xl shadow-glow">🌐</div>
              <div className="relative flex h-[320px] w-[320px] items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_0_80px_rgba(255,121,198,0.12)] backdrop-blur-xl">
                <div className="flex h-48 w-48 items-center justify-center rounded-full bg-slate-950/80 text-xl font-semibold text-white ring-1 ring-white/10">Skills</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_0.9fr] lg:items-start">
            <div>
              <span className="inline-flex rounded-full bg-pink-500/10 px-4 py-2 text-sm text-pink-200">Contact</span>
              <h2 className="mt-4 text-4xl font-semibold text-white">Let’s build your next project together.</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">Reach out for collaborations, portfolio reviews, or freelance work. I’m available for web development and creative web experiences.</p>
              <div className="mt-8 space-y-4 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.22)] backdrop-blur-xl">
                <div className="flex items-center gap-4 text-slate-200">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p>vishnuvishnu70298@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-200">
                  <span className="text-2xl">🔗</span>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://github.com/chinna98790890varma" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-pink-300 hover:text-pink-300">GitHub</a>
                    <a href="https://www.linkedin.com/in/vishnuvardhan-potharaju-9b8a1b1b3/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-cyan-300 hover:text-cyan-300">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.22)] backdrop-blur-xl">
              <form className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-white">Your Name</label>
                  <input type="text" className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-pink-300" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-white">Email</label>
                  <input type="email" className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-cyan-300" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-white">Message</label>
                  <textarea className="h-36 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-violet-300" />
                </div>
                <button type="submit" className="w-full rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-1 hover:bg-pink-400">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
