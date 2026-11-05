/**
 * Single source of truth for all of Tejash Saharan's website content.
 * Edit values here to update the whole site.
 */

export const profile = {
  name: "Tejash Saharan",
  shortName: "Tejash",
  age: 14,
  roles: ["Student", "Developer", "Creator", "Dreamer"],
  tagline: "Welcome to my digital world.",
  location: "Sahwa, Churu, Rajasthan",
  country: "India",
  grade: "Class 10",
  school: "Mahatma Gandhi Government School, Sahwa",
  learningWith: "CodeYogi",
  description:
    "This website is a collection of my story, projects, achievements, interests, and ambitions — a living picture of who I am and who I want to become.",
  email: "saharantejash.123@gmail.com",
  socials: {
    github: "https://github.com/saharantejash123-coder",
    linkedin: "https://linkedin.com/in/tejash-saharan",
    email: "mailto:saharantejash.123@gmail.com",
  },
} as const;

export const siteUrl = "https://tejashsaharan.com";

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Story", href: "/story" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Achievements", href: "/achievements" },
  { label: "Interests", href: "/interests" },
  { label: "Goals", href: "/goals" },
  { label: "Contact", href: "/contact" },
] as const;

export const stats = [
  { value: "14", label: "Years young", sub: "and just getting started" },
  { value: "3+", label: "Projects built", sub: "shipped and learning" },
  { value: "4", label: "Core skills", sub: "HTML · CSS · JS · React" },
  { value: "∞", label: "Curiosity", sub: "always learning" },
] as const;

/* ---------------------------------------------------------------- ABOUT */
export const about = {
  intro:
    "I'm Tejash — a 14-year-old student from a small town in Rajasthan with a big love for technology. I taught myself to dream in code, and every day I try to learn one new thing.",
  cards: [
    {
      title: "Who Am I",
      body: "A curious Class 10 student from Sahwa, Churu, who fell in love with building things on a screen and never looked back.",
      tone: "brand",
    },
    {
      title: "My Background",
      body: "I study at Mahatma Gandhi Government School and learn coding through CodeYogi. A laptop from DM Sir & Code Churu opened the door to this world.",
      tone: "accent",
    },
    {
      title: "My Personality",
      body: "Calm, patient, and a planner — the same way I play chess. I think a few moves ahead and enjoy quietly solving hard problems.",
      tone: "leaf",
    },
    {
      title: "My Values",
      body: "Honesty, hard work, and gratitude. I want to give back the same support that was given to me.",
      tone: "brand",
    },
    {
      title: "What I Enjoy",
      body: "Designing clean interfaces, playing chess, learning new tools, and the feeling when code finally runs the way I imagined.",
      tone: "accent",
    },
    {
      title: "Why I Love Technology",
      body: "Because a kid from a small village and a kid from a big city can build the exact same thing. Technology is the great equalizer — and I want to use it well.",
      tone: "leaf",
    },
  ],
  beliefs: [
    "Small consistent steps beat giant rare leaps.",
    "Curiosity is a superpower.",
    "Good design is invisible — it just feels right.",
    "Where you start does not decide where you finish.",
  ],
} as const;

/* ---------------------------------------------------------------- STORY */
export const story = [
  {
    year: "Early Life",
    title: "A small town, a big imagination",
    body: "Growing up in Sahwa, Churu, I was always the kid asking 'how does this work?' — taking ideas apart in my head and rebuilding them.",
  },
  {
    year: "School",
    title: "Mahatma Gandhi Government School",
    body: "My school gave me the foundation — discipline, curiosity, and the encouragement of teachers who believed a small-town student could aim high.",
  },
  {
    year: "Discovery",
    title: "Discovering technology",
    body: "The first time I understood that websites and apps were made by people — not magic — something clicked. I wanted to be one of those people.",
  },
  {
    year: "Learning",
    title: "Learning to code",
    body: "I started with HTML and CSS, then JavaScript. Every bug was frustrating and every fix felt like a tiny victory.",
  },
  {
    year: "CodeYogi",
    title: "Joining CodeYogi",
    body: "CodeYogi structured my learning and gave me a path to follow — from the basics all the way to React and real projects.",
  },
  {
    year: "Support",
    title: "A laptop that changed everything",
    body: "Through DM Sir and Code Churu, I received a laptop to continue learning. That gift turned 'someday' into 'today'.",
  },
  {
    year: "Building",
    title: "Building my first websites",
    body: "Blood Donor, I-Republic, and small experiments — my first real projects, each one teaching me something the last one couldn't.",
  },
  {
    year: "React",
    title: "Learning React",
    body: "Components, state, and reusable UI changed how I think about building. My Notes App was my playground for these ideas.",
  },
  {
    year: "Today",
    title: "Where I am now",
    body: "Still a student, still learning every day — but now I build with intention, and I'm proud of how far this journey has come.",
  },
  {
    year: "Tomorrow",
    title: "Future dreams",
    body: "To keep growing as a developer and creator, and one day build technology that helps people like the people who helped me.",
  },
] as const;

/* ---------------------------------------------------------------- PROJECTS */
export const projects = [
  {
    slug: "blood-donor",
    title: "Blood Donor",
    category: "Web App",
    description:
      "A blood-donor finding platform that connects people in urgent need with nearby willing donors — a project close to my heart.",
    tech: ["HTML", "CSS", "JavaScript"],
    accent: "accent",
    image: "/projects/blood-donor.webp",
    demo: "https://blood-donor-web-by-tejash.netlify.app",
    code: "#",
  },
  {
    slug: "notes-app",
    title: "Notes App",
    category: "React Practice",
    description:
      "A clean notes application built to master React fundamentals — components, state, and a smooth, responsive UI.",
    tech: ["React", "JavaScript", "CSS"],
    accent: "brand",
    image: "/projects/notes-app.webp",
    demo: "https://notes-app-self-delta.vercel.app",
    code: "github.com/saharantejash123-coder/notes-app",
  },
  {
    slug: "i-republic",
    title: "I-Republic",
    category: "Competition",
    description:
      "A Republic Day competition project celebrating India — built to tell a story through the web with patriotism and care.",
    tech: ["HTML", "CSS", "JavaScript"],
    accent: "leaf",
    image: "/projects/i-republic.webp",
    demo: "https://i-republic-77-th.netlify.app",
    code: "#",
  },
] as const;

export const projectFilters = ["All", "Web App", "React Practice", "Competition"] as const;

/* ---------------------------------------------------------------- SKILLS */
export const skillGroups = [
  {
    title: "Frontend",
    tone: "brand",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 65 },
    ],
  },
  {
    title: "AI Tools",
    tone: "accent",
    skills: [
      { name: "OpenAI", level: 80 },
      { name: "Claude", level: 85 },
      { name: "AI Agents", level: 83 },
    ],
  },
  {
    title: "Design",
    tone: "leaf",
    skills: [
      { name: "UI Design", level: 75 },
      { name: "UX Design", level: 75 },
      { name: "Graphic Design", level: 65 },
    ],
  },
  {
    title: "Soft Skills",
    tone: "brand",
    skills: [
      { name: "Leadership", level: 75 },
      { name: "Teamwork", level: 88 },
      { name: "Problem Solving", level: 80 },
      { name: "Communication", level: 62 },
    ],
  },
] as const;

/* ---------------------------------------------------------------- ACHIEVEMENTS
 * Each certificate's `image` points to a generated branded thumbnail in
 * /public/certificates (run `npm run gen:certs`).
 * ➜ To use a real scan: drop it in /public/certificates and update `image`.
 */
export const achievements = [
  {
    slug: "republic-day",
    kind: "Certificate of Excellence",
    title: "Republic Day Competition 2026",
    issuer: "CodeYogi",
    date: "Jan 2026",
    award: "Most Creative Project",
    blurb:
      "Awarded for the Most Creative Project — recognised for innovation, originality and outstanding effort.",
    tone: "accent",
    image: "/certificates/republic-day.webp",
  },
  {
    slug: "web-development",
    kind: "Certificate of Completion",
    title: "Web Development",
    issuer: "CodeYogi",
    date: "Oct 2025",
    award: "Outstanding",
    blurb:
      "Hands-on practical course covering HTML, CSS & JavaScript — actively coded every project. Performance graded Outstanding.",
    tone: "brand",
    image: "/certificates/web-development.webp",
  },
  {
    slug: "mix-move-ai",
    kind: "Hour of AI",
    title: "Mix & Move with AI",
    issuer: "Code.org",
    date: "2026",
    award: "",
    blurb:
      "Completed the Mix & Move with AI activity, demonstrating an understanding of basic Artificial Intelligence concepts.",
    tone: "leaf",
    image: "/certificates/mix-move-ai.webp",
  },
  {
    slug: "ai-basics",
    kind: "Hour of AI",
    title: "AI Basics Activity",
    issuer: "CodeYogi × Code.org",
    date: "2026",
    award: "",
    blurb:
      "Completed the AI Basics activity, demonstrating an understanding of Artificial Intelligence.",
    tone: "brand",
    image: "/certificates/ai-basics.webp",
  },
  {
    slug: "ai-for-oceans",
    kind: "Hour of Code",
    title: "AI for Oceans",
    issuer: "Code.org",
    date: "2026",
    award: "",
    blurb:
      "Completed the AI for Oceans Hour of Code, demonstrating an understanding of basic computer-science concepts.",
    tone: "leaf",
    image: "/certificates/ai-for-oceans.webp",
  },
  {
    slug: "music-lab",
    kind: "Hour of Code",
    title: "Music Lab: Jam Session",
    issuer: "Code.org",
    date: "2026",
    award: "",
    blurb:
      "Completed the Music Lab: Jam Session Hour of Code, exploring computer science through music.",
    tone: "accent",
    image: "/certificates/music-lab.webp",
  },
] as const;

export const milestones = [
  "Received a laptop through DM Sir & Code Churu",
  "Built my first live website",
  "Completed React fundamentals on CodeYogi",
  "Shipped 3 personal projects",
] as const;

/* ---------------------------------------------------------------- INTERESTS */
export const interests = [
  {
    title: "Chess",
    body: "Thinking moves ahead, staying calm under pressure, and learning that patience wins games.",
    tone: "brand",
  },
  {
    title: "Coding",
    body: "Turning ideas into something real on the screen — my favourite kind of problem solving.",
    tone: "accent",
  },
  {
    title: "Technology",
    body: "Following how the world is being rebuilt with software, hardware, and AI.",
    tone: "leaf",
  },
  {
    title: "Design",
    body: "Clean layouts, balance, and interfaces that feel effortless to use.",
    tone: "brand",
  },
  {
    title: "Learning",
    body: "New skills, new tools, new ideas — I'm happiest when I'm learning something.",
    tone: "accent",
  },
  {
    title: "AI",
    body: "Exploring AI tools and agents, and imagining what a kid with these tools can build.",
    tone: "leaf",
  },
] as const;

/* ---------------------------------------------------------------- GOALS */
export const goals = {
  today: "A Class 10 student building real projects with HTML, CSS, JavaScript and React.",
  future: "A skilled developer and successful startup founder who builds meaningful, well-designed problem solving products.",
  toLearn: ["Next.js & TypeScript", "Backend & databases", "Advanced AI tools", "System design basics"],
  ambitions: [
    "Build products that genuinely help people.",
    "Represent small-town India in the world of technology.",
    "Mentor and support the next young learners.",
    "Keep growing — never stop being a student.",
  ],
  vision:
    "I want to continue learning, building, and growing while creating meaningful things through technology which solve problems of many people.",
} as const;
