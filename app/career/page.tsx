// app/career/page.tsx
"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  Briefcase,
  MapPin,
  Clock,
  Calendar,
  Search,
  Filter,
  X,
  Mail,
  CheckCircle,
  Rocket,
  Users,
  Globe,
  Heart,
  Award,
  Coffee,
  Camera,
  Trophy,
  GraduationCap,
  DollarSign,
  Home,
  BookOpen,
  Plane,
  Laptop,
  Sun,
  Baby,
  Target,
  Zap,
  Sparkles,
  ArrowRight
} from 'lucide-react'

// ==================== DATA ====================

interface JobPosition {
  id: number
  title: string
  department: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship'
  experience: string
  posted: string
  description: string
  responsibilities: string[]
  requirements: string[]
  benefits: string[]
  skills: string[]
}

const jobPositions: JobPosition[] = [
  {
    id: 1,
    title: "Senior AI/ML Engineer",
    department: "Engineering",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    experience: "5+ years",
    posted: "2 days ago",
    description: "We're looking for a Senior AI/ML Engineer to lead the development of cutting-edge machine learning solutions for our enterprise clients. You'll work on challenging problems in computer vision, NLP, and predictive analytics.",
    responsibilities: [
      "Design and implement machine learning models for production environments",
      "Lead technical architecture decisions for AI projects",
      "Mentor junior engineers and conduct code reviews",
      "Collaborate with product managers to define technical requirements",
      "Stay current with latest AI/ML research and technologies"
    ],
    requirements: [
      "Master's or PhD in Computer Science, AI/ML, or related field",
      "5+ years of experience in machine learning engineering",
      "Strong programming skills in Python and deep learning frameworks (TensorFlow, PyTorch)",
      "Experience with cloud platforms (AWS, GCP, or Azure)",
      "Published research or contributions to open-source ML projects"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "401(k) matching",
      "Remote work flexibility",
      "Professional development budget"
    ],
    skills: ["Python", "TensorFlow", "PyTorch", "AWS", "MLOps", "Computer Vision"]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote (US/Canada)",
    type: "Full-time",
    experience: "3+ years",
    posted: "1 week ago",
    description: "Join our development team to build scalable web applications for our clients. You'll work with modern technologies like React, Next.js, and Node.js to create exceptional user experiences.",
    responsibilities: [
      "Develop responsive web applications using React and Next.js",
      "Build and maintain RESTful APIs",
      "Optimize applications for maximum speed and scalability",
      "Collaborate with designers to implement UI/UX improvements",
      "Write clean, maintainable, and testable code"
    ],
    requirements: [
      "3+ years of experience in full stack development",
      "Strong proficiency in JavaScript/TypeScript, React, and Node.js",
      "Experience with Next.js and modern frontend tools",
      "Knowledge of database systems (PostgreSQL, MongoDB)",
      "Understanding of CI/CD pipelines and version control (Git)"
    ],
    benefits: [
      "Competitive salary",
      "Flexible working hours",
      "Home office stipend",
      "Health insurance",
      "Annual team retreats"
    ],
    skills: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "TailwindCSS"]
  },
  {
    id: 3,
    title: "Product Manager",
    department: "Product",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "4+ years",
    posted: "3 days ago",
    description: "We're seeking a Product Manager to drive the vision and execution of our AI-powered products. You'll work closely with engineering, design, and clients to deliver solutions that solve real business problems.",
    responsibilities: [
      "Define product strategy and roadmap for AI solutions",
      "Gather and prioritize requirements from clients and stakeholders",
      "Work with engineering teams to deliver features on schedule",
      "Conduct market research and competitive analysis",
      "Track and analyze product metrics to inform decisions"
    ],
    requirements: [
      "4+ years of product management experience in tech",
      "Understanding of AI/ML concepts and applications",
      "Excellent communication and stakeholder management skills",
      "Experience with agile development methodologies",
      "Technical background or degree in CS preferred"
    ],
    benefits: [
      "Competitive salary + bonus",
      "Equity options",
      "Comprehensive benefits package",
      "Professional development opportunities",
      "Flexible PTO"
    ],
    skills: ["Product Strategy", "Agile", "AI/ML Knowledge", "Data Analysis", "User Research"]
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
    experience: "3+ years",
    posted: "5 days ago",
    description: "We're looking for a DevOps Engineer to build and maintain our cloud infrastructure. You'll ensure our applications are scalable, secure, and highly available for clients worldwide.",
    responsibilities: [
      "Design and implement CI/CD pipelines",
      "Manage cloud infrastructure on AWS/GCP",
      "Implement monitoring and alerting systems",
      "Optimize system performance and cost",
      "Ensure security best practices are followed"
    ],
    requirements: [
      "3+ years of DevOps or SRE experience",
      "Strong knowledge of AWS services (EC2, ECS, RDS, Lambda)",
      "Experience with infrastructure as code (Terraform, CloudFormation)",
      "Familiarity with containerization (Docker, Kubernetes)",
      "Scripting skills in Python or Bash"
    ],
    benefits: [
      "Competitive salary",
      "Remote-first culture",
      "Home office stipend",
      "Learning budget",
      "Annual team meetups"
    ],
    skills: ["AWS", "Terraform", "Docker", "Kubernetes", "CI/CD", "Python"]
  },
  {
    id: 5,
    title: "UX/UI Designer",
    department: "Design",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    experience: "3+ years",
    posted: "1 week ago",
    description: "Join our design team to create beautiful, intuitive interfaces for AI-powered applications. You'll work on challenging projects that require both creativity and technical understanding.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Collaborate with developers to implement designs",
      "Maintain and evolve our design system",
      "Advocate for user-centered design principles"
    ],
    requirements: [
      "3+ years of UX/UI design experience",
      "Proficiency in Figma, Sketch, or similar tools",
      "Portfolio demonstrating strong visual design skills",
      "Understanding of frontend technologies (HTML/CSS)",
      "Experience designing for web and mobile applications"
    ],
    benefits: [
      "Competitive salary",
      "Creative freedom",
      "Design conference budget",
      "Health benefits",
      "Flexible work arrangements"
    ],
    skills: ["Figma", "UI/UX", "Wireframing", "Prototyping", "User Research", "Design Systems"]
  },
  {
    id: 6,
    title: "Sales Development Representative",
    department: "Sales",
    location: "Remote (US)",
    type: "Full-time",
    experience: "1+ years",
    posted: "2 days ago",
    description: "We're looking for a motivated SDR to join our growing sales team. You'll be the first point of contact for potential clients and help drive our revenue growth.",
    responsibilities: [
      "Identify and research potential clients",
      "Conduct outbound prospecting via email and phone",
      "Qualify leads and schedule meetings for sales team",
      "Maintain accurate records in CRM",
      "Collaborate with marketing on campaign effectiveness"
    ],
    requirements: [
      "1+ years of sales or business development experience",
      "Excellent communication and interpersonal skills",
      "Self-motivated with a results-oriented mindset",
      "Familiarity with CRM tools (Salesforce, HubSpot)",
      "Interest in technology and AI"
    ],
    benefits: [
      "Competitive base + commission",
      "Uncapped earning potential",
      "Sales training and development",
      "Career growth opportunities",
      "Remote work flexibility"
    ],
    skills: ["Sales", "Communication", "CRM", "Prospecting", "Lead Generation"]
  },
  {
    id: 7,
    title: "Technical Writer",
    department: "Marketing",
    location: "Remote (Global)",
    type: "Contract",
    experience: "2+ years",
    posted: "1 week ago",
    description: "We're seeking a Technical Writer to create clear, comprehensive documentation for our AI products and APIs. You'll help developers and clients understand and implement our solutions.",
    responsibilities: [
      "Write and maintain API documentation",
      "Create user guides and tutorials",
      "Collaborate with engineers to understand technical concepts",
      "Ensure documentation is accurate and up-to-date",
      "Contribute to blog posts and technical content"
    ],
    requirements: [
      "2+ years of technical writing experience",
      "Ability to explain complex technical concepts simply",
      "Experience with documentation tools (Markdown, Git)",
      "Basic understanding of APIs and programming concepts",
      "Excellent written English"
    ],
    benefits: [
      "Competitive contract rates",
      "Flexible schedule",
      "Remote work",
      "Opportunity to learn cutting-edge AI technologies"
    ],
    skills: ["Technical Writing", "Documentation", "API Docs", "Markdown", "Git"]
  },
  {
    id: 8,
    title: "AI Research Intern",
    department: "AI/ML",
    location: "San Francisco, CA",
    type: "Internship",
    experience: "0-1 years",
    posted: "3 days ago",
    description: "Join our AI research team for a paid internship where you'll work on real-world machine learning problems alongside experienced researchers and engineers.",
    responsibilities: [
      "Assist in implementing and testing ML models",
      "Conduct literature reviews of recent research",
      "Contribute to research projects and experiments",
      "Prepare data for model training and evaluation",
      "Present findings to the team"
    ],
    requirements: [
      "Currently pursuing MS or PhD in CS, AI/ML, or related field",
      "Strong programming skills in Python",
      "Familiarity with ML frameworks (TensorFlow, PyTorch)",
      "Solid understanding of machine learning fundamentals",
      "Passion for AI and willingness to learn"
    ],
    benefits: [
      "Competitive internship stipend",
      "Mentorship from experienced researchers",
      "Hands-on experience with real projects",
      "Potential for full-time offer",
      "Networking opportunities"
    ],
    skills: ["Python", "Machine Learning", "Research", "TensorFlow", "Data Analysis"]
  }
]

const benefits = [
  { icon: <DollarSign className="w-6 h-6" />, title: "Competitive Compensation", description: "We offer competitive salaries, equity options, and performance bonuses to reward your contributions." },
  { icon: <Heart className="w-6 h-6" />, title: "Comprehensive Health Benefits", description: "Medical, dental, and vision insurance for you and your family, plus wellness programs." },
  { icon: <Home className="w-6 h-6" />, title: "Remote-First Culture", description: "Work from anywhere with flexible hours. We trust you to get the job done." },
  { icon: <BookOpen className="w-6 h-6" />, title: "Learning & Development", description: "$2,000 annual budget for courses, conferences, and books to fuel your growth." },
  { icon: <Plane className="w-6 h-6" />, title: "Annual Team Retreats", description: "Join us for our annual company retreats to connect with teammates in person." },
  { icon: <Laptop className="w-6 h-6" />, title: "Home Office Stipend", description: "$1,000 to set up your home office with the equipment you need." },
  { icon: <Sun className="w-6 h-6" />, title: "Flexible PTO", description: "Take the time you need to recharge. We focus on results, not hours." },
  { icon: <Baby className="w-6 h-6" />, title: "Parental Leave", description: "Generous parental leave policy to support you and your growing family." }
]

const hiringSteps = [
  { step: 1, title: "Application Review", description: "Submit your application and our team will review your resume and portfolio." },
  { step: 2, title: "Initial Interview", description: "A 30-minute chat with our recruiter to learn about your experience and goals." },
  { step: 3, title: "Technical Assessment", description: "A practical exercise or technical interview to showcase your skills." },
  { step: 4, title: "Team Meeting", description: "Meet with potential teammates and cross-functional partners." },
  { step: 5, title: "Offer & Onboarding", description: "If there's a mutual fit, we'll extend an offer and begin the onboarding process." }
]

const cultureImages = [
  { id: 1, color: 'from-amber-500/20 to-purple-500/20', label: 'Team Building', icon: <Users className="w-12 h-12 text-amber-500/50" /> },
  { id: 2, color: 'from-blue-500/20 to-amber-500/20', label: 'Hackathons', icon: <Zap className="w-12 h-12 text-amber-500/50" /> },
  { id: 3, color: 'from-green-500/20 to-amber-500/20', label: 'Remote Work', icon: <Laptop className="w-12 h-12 text-amber-500/50" /> },
  { id: 4, color: 'from-pink-500/20 to-amber-500/20', label: 'Team Retreats', icon: <Plane className="w-12 h-12 text-amber-500/50" /> },
  { id: 5, color: 'from-orange-500/20 to-amber-500/20', label: 'Learning', icon: <BookOpen className="w-12 h-12 text-amber-500/50" /> },
  { id: 6, color: 'from-indigo-500/20 to-amber-500/20', label: 'Celebrations', icon: <Trophy className="w-12 h-12 text-amber-500/50" /> },
]

// ==================== COMPONENTS ====================

// Gradient Badge Component
const GradientBadge = ({ icon, text, className = '' }: { icon?: React.ReactNode; text: string; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className={`inline-flex items-center gap-2 bg-amber-500/10 px-4 py-2 rounded-full border border-amber-500/20 ${className}`}
  >
    {icon && <span className="text-amber-500">{icon}</span>}
    <span className="text-amber-500 text-sm font-semibold">{text}</span>
  </motion.div>
)

// Section Heading Component
const SectionHeading = ({ title, subtitle, gradient = 'from-amber-300 to-amber-500', align = 'center' }: { title: string; subtitle?: string; gradient?: string; align?: 'left' | 'center' | 'right' }) => {
  const alignmentClasses = { left: 'text-left', center: 'text-center', right: 'text-right' }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`mb-12 ${alignmentClasses[align]}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className={`bg-linear-to-r ${gradient} bg-clip-text text-transparent`}>
          {title}
        </span>
      </h2>
      {subtitle && <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">{subtitle}</p>}
    </motion.div>
  )
}

// Hero Section
const CareerHero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-b from-amber-950/20 via-black to-black pointer-events-none" />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
        <GradientBadge icon={<Briefcase className="w-4 h-4" />} text="JOIN OUR TEAM" className="mb-6" />
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
          <span className="bg-linear-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">Build the Future</span>
          <br />
          <span className="text-white">with AhmadSols</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
          Join a team of innovators dedicated to transforming businesses through AI and technology.
          We're looking for passionate people who want to make a difference.
        </p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-wrap gap-4 justify-center">
          <a href="#openings" className="group bg-linear-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2">
            View Open Positions <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#benefits" className="border border-amber-500/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-amber-500/10 transition-colors">
            Learn About Benefits
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

// Why Join Us Section
const WhyJoinUs = () => {
  const reasons = [
    { icon: <Rocket className="w-8 h-8" />, title: "Impactful Work", description: "Work on projects that truly matter. Our solutions help businesses grow and succeed." },
    { icon: <Users className="w-8 h-8" />, title: "Amazing Team", description: "Join a diverse, collaborative team of experts who support each other's growth." },
    { icon: <Globe className="w-8 h-8" />, title: "Global Reach", description: "Work with clients from 30+ countries and make a global impact." },
    { icon: <Heart className="w-8 h-8" />, title: "Culture First", description: "We prioritize work-life balance, inclusivity, and employee wellbeing." }
  ]
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Why Join Us?" subtitle="Discover what makes AhmadSols a great place to work" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {reasons.map((reason, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}
              className="bg-zinc-900/50 rounded-xl p-6 text-center border border-amber-500/20">
              <div className="text-amber-500 mb-4 flex justify-center">{reason.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Benefits Section
const BenefitsSection = () => (
  <section id="benefits" className="py-20 bg-linear-to-b from-amber-500/5 to-transparent">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Benefits & Perks" subtitle="We take care of our team so you can focus on doing your best work" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {benefits.map((benefit, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}
            className="bg-zinc-900/50 rounded-xl p-6 border border-amber-500/20 hover:border-amber-500/50 transition-colors">
            <div className="text-amber-500 mb-4">{benefit.icon}</div>
            <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
            <p className="text-gray-400 text-sm">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// Position Card Component
const PositionCard = ({ position, onClick }: { position: JobPosition; onClick: () => void }) => {
  const getDepartmentColor = (dept: string) => {
    const colors: Record<string, string> = {
      'Engineering': 'from-blue-500 to-amber-500',
      'Product': 'from-purple-500 to-amber-500',
      'Design': 'from-pink-500 to-amber-500',
      'Sales': 'from-green-500 to-amber-500',
      'Marketing': 'from-orange-500 to-amber-500',
      'AI/ML': 'from-indigo-500 to-amber-500'
    }
    return colors[dept] || 'from-amber-500 to-amber-600'
  }
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
      onClick={onClick} className="bg-zinc-900/50 rounded-xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition-all cursor-pointer group">
      <div className={`h-2 bg-linear-to-r ${getDepartmentColor(position.department)}`} />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">{position.title}</h3>
          <span className="text-xs bg-amber-500/10 text-amber-500 px-2 py-1 rounded-full">{position.type}</span>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm"><Briefcase className="w-4 h-4" /><span>{position.department}</span></div>
          <div className="flex items-center gap-2 text-gray-400 text-sm"><MapPin className="w-4 h-4" /><span>{position.location}</span></div>
          <div className="flex items-center gap-2 text-gray-400 text-sm"><Clock className="w-4 h-4" /><span>{position.experience} experience</span></div>
          <div className="flex items-center gap-2 text-gray-400 text-sm"><Calendar className="w-4 h-4" /><span>Posted {position.posted}</span></div>
        </div>
        <p className="text-gray-300 text-sm line-clamp-2 mb-4">{position.description}</p>
        <div className="flex flex-wrap gap-2">
          {position.skills.slice(0, 3).map((skill, i) => (
            <span key={i} className="text-xs bg-zinc-800 text-gray-300 px-2 py-1 rounded-full">{skill}</span>
          ))}
          {position.skills.length > 3 && <span className="text-xs bg-zinc-800 text-gray-300 px-2 py-1 rounded-full">+{position.skills.length - 3}</span>}
        </div>
      </div>
    </motion.div>
  )
}

// Position Modal Component
const PositionModal = ({ position, onClose }: { position: JobPosition | null; onClose: () => void }) => {
  if (!position) return null
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
        <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
          className="bg-zinc-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-amber-500/20" onClick={(e) => e.stopPropagation()}>
          <div className="sticky top-0 bg-zinc-900 border-b border-amber-500/20 p-6 flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{position.title}</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-1 text-gray-400"><Briefcase className="w-4 h-4" />{position.department}</span>
                <span className="flex items-center gap-1 text-gray-400"><MapPin className="w-4 h-4" />{position.location}</span>
                <span className="flex items-center gap-1 text-gray-400"><Clock className="w-4 h-4" />{position.experience}</span>
                <span className="flex items-center gap-1 text-gray-400"><Calendar className="w-4 h-4" />Posted {position.posted}</span>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-full transition-colors"><X className="w-5 h-5 text-gray-400" /></button>
          </div>
          <div className="p-6 space-y-6">
            <div><h3 className="text-lg font-bold text-white mb-3">About the Role</h3><p className="text-gray-300 leading-relaxed">{position.description}</p></div>
            <div><h3 className="text-lg font-bold text-white mb-3">Responsibilities</h3>{position.responsibilities.map((item, i) => (
              <div key={i} className="flex gap-2 text-gray-300 mb-2"><CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /><span>{item}</span></div>
            ))}</div>
            <div><h3 className="text-lg font-bold text-white mb-3">Requirements</h3>{position.requirements.map((item, i) => (
              <div key={i} className="flex gap-2 text-gray-300 mb-2"><CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /><span>{item}</span></div>
            ))}</div>
            <div><h3 className="text-lg font-bold text-white mb-3">Skills</h3><div className="flex flex-wrap gap-2">
              {position.skills.map((skill, i) => (<span key={i} className="bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full text-sm">{skill}</span>))}
            </div></div>
            <div><h3 className="text-lg font-bold text-white mb-3">Benefits</h3>{position.benefits.map((item, i) => (
              <div key={i} className="flex gap-2 text-gray-300 mb-2"><CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /><span>{item}</span></div>
            ))}</div>
            <div className="pt-6 border-t border-amber-500/20">
              <a href={`mailto:careers@Ahmadsols.com?subject=Application for ${position.title}`}
                className="group bg-linear-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
                <Mail className="w-5 h-5" /> Apply for this position
              </a>
              <p className="text-gray-500 text-sm mt-4">Send your resume and cover letter to careers@Ahmadsols.com</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// Open Positions Section
const OpenPositionsSection = () => {
  const [selectedPosition, setSelectedPosition] = useState<JobPosition | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [departmentFilter, setDepartmentFilter] = useState<string>('all')
  const departments = ['all', ...new Set(jobPositions.map(p => p.department))]
  const filteredPositions = jobPositions.filter(p =>
    (p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (departmentFilter === 'all' || p.department === departmentFilter)
  )
  return (
    <section id="openings" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Open Positions" subtitle="Join us in building the future of AI-powered business solutions" />
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input type="text" placeholder="Search positions..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900/50 border border-amber-500/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-amber-500" />
          </div>
          <div className="flex gap-2 items-center">
            <Filter className="text-gray-500 w-5 h-5" />
            <select value={departmentFilter} onChange={(e) => setDepartmentFilter(e.target.value)}
              className="bg-zinc-900/50 border border-amber-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500">
              {departments.map(dept => (<option key={dept} value={dept} className="bg-zinc-900">{dept === 'all' ? 'All Departments' : dept}</option>))}
            </select>
          </div>
        </div>
        <p className="text-gray-400 mb-6">Showing {filteredPositions.length} {filteredPositions.length === 1 ? 'position' : 'positions'}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPositions.map((position) => (<PositionCard key={position.id} position={position} onClick={() => setSelectedPosition(position)} />))}
        </div>
        {filteredPositions.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-gray-400 text-lg">No positions match your criteria.</p>
            <button onClick={() => { setSearchTerm(''); setDepartmentFilter('all') }} className="mt-4 text-amber-500 hover:text-amber-400 transition-colors">Clear filters</button>
          </motion.div>
        )}
        <PositionModal position={selectedPosition} onClose={() => setSelectedPosition(null)} />
      </div>
    </section>
  )
}

// Hiring Process Section
const HiringProcessSection = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Our Hiring Process" subtitle="We've designed a transparent and straightAhmad process to find the best fit" />
      <div className="grid md:grid-cols-5 gap-4 mt-12">
        {hiringSteps.map((step, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}
            className="relative">
            <div className="bg-zinc-900/50 rounded-xl p-6 border border-amber-500/20 text-center h-full">
              <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-500">{step.step}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
            {index < hiringSteps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-5 h-5 text-amber-500/50" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// Life at AhmadSols Section
const LifeAtAhmadSolsSection = () => (
  <section className="py-20 bg-linear-to-b from-amber-500/5 to-transparent">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Life at AhmadSols" subtitle="More than just work - we're a community of innovators" />
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {cultureImages.map((image, index) => (
          <motion.div key={image.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}
            className={`aspect-square bg-linear-to-br ${image.color} rounded-xl border border-amber-500/20 flex flex-col items-center justify-center p-6 group hover:scale-105 transition-transform`}>
            <div className="text-amber-500 mb-4">{image.icon}</div>
            <p className="text-white font-semibold text-lg">{image.label}</p>
            <p className="text-gray-400 text-sm text-center mt-2">We believe in having fun while building great things</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// CTA Section
const CareerCTA = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
        className="bg-linear-to-br from-amber-500/10 to-purple-500/10 rounded-3xl p-12 text-center border border-amber-500/20">
        <Sparkles className="w-12 h-12 text-amber-500 mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Don't See the Right Role?</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
        </p>
        <a href="mailto:careers@Ahmadsols.com"
          className="group bg-linear-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2">
          Send General Application <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </div>
  </section>
)

// ==================== MAIN PAGE ====================

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <CareerHero />
      <WhyJoinUs />
      <BenefitsSection />
      <OpenPositionsSection />
      <HiringProcessSection />
      <LifeAtAhmadSolsSection />
      <CareerCTA />
    </div>
  )
}

export default CareerPage