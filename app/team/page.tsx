"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Linkedin,
  Mail,
  Github,
  Twitter,
  Globe,
  MapPin,
  Award,
  Users,
  Brain,
  Code2,
  Smartphone,
  Server,
  Database,
  Cpu,
  Heart,
  Sparkles,
  Quote,
  Briefcase,
  GraduationCap,
  Clock,
  MessageCircle,
  Coffee,
  Target,
  TrendingUp,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react'

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null)
  const [filterRole, setFilterRole] = useState<string>('all')

  const teamMembers = [
    {
      id: 1,
      name: "Ahmad",
      role: "Founder & CEO",
      department: "Executive",
      email: "ahmad@forwardsols.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      bio: "Visionary leader with 15+ years of experience in AI and software development. Founded ForwardSols with a mission to democratize AI for businesses of all sizes.",
      longBio: "Ahmad started his career as a software engineer at Google, where he spent 8 years working on machine learning infrastructure. In 2018, he founded ForwardSols to bring enterprise-grade AI solutions to businesses that previously couldn't access such technology. Under his leadership, the company has grown to serve 500+ clients across 30+ countries.",
      expertise: ["AI Strategy", "Leadership", "Innovation", "Product Development"],
      skills: [
        { name: "Strategic Planning", level: 95 },
        { name: "AI/ML Knowledge", level: 90 },
        { name: "Business Development", level: 95 },
        { name: "Team Leadership", level: 98 }
      ],
      education: "M.S. Computer Science, Stanford University",
      experience: "15+ years in tech leadership",
      achievements: [
        "Founded ForwardSols, now serving 500+ clients",
        "Former Lead Engineer at Google",
        "Speaker at 20+ tech conferences",
        "Patent holder in ML optimization"
      ],
      social: {
        linkedin: "https://linkedin.com/in/ahmad",
        twitter: "https://twitter.com/ahmad",
        github: "https://github.com/ahmad",
        email: "mailto:ahmad@forwardsols.com"
      },
      image: "/images/team/ahmad.jpg",
      color: "from-amber-500 to-amber-600"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      department: "Executive",
      email: "sarah@forwardsols.com",
      phone: "+1 (555) 234-5678",
      location: "San Francisco, CA",
      bio: "Former lead architect at Google Cloud, specializing in scalable AI systems and cloud infrastructure.",
      longBio: "Sarah brings 12 years of experience in cloud architecture and distributed systems. At Google Cloud, she led the design of infrastructure handling millions of requests per second. She now applies this expertise to ensure ForwardSols' solutions are scalable, reliable, and performant for enterprise clients.",
      expertise: ["Cloud Architecture", "AI/ML Systems", "Scalability", "DevOps"],
      skills: [
        { name: "Cloud Architecture", level: 98 },
        { name: "System Design", level: 95 },
        { name: "Team Leadership", level: 88 },
        { name: "DevOps", level: 92 }
      ],
      education: "Ph.D. Computer Science, MIT",
      experience: "12+ years in cloud infrastructure",
      achievements: [
        "Led infrastructure for 10+ Fortune 500 companies",
        "Google Cloud Certified Fellow",
        "Published 8 research papers",
        "Open source contributor to Kubernetes"
      ],
      social: {
        linkedin: "https://linkedin.com/in/sarahjohnson",
        twitter: "https://twitter.com/sarahjohnson",
        github: "https://github.com/sarahjohnson",
        email: "mailto:sarah@forwardsols.com"
      },
      image: "/images/team/sarah.jpg",
      color: "from-purple-500 to-amber-500"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Head of AI Research",
      department: "AI/ML",
      email: "michael@forwardsols.com",
      phone: "+1 (555) 345-6789",
      location: "San Francisco, CA",
      bio: "PhD in Machine Learning with 8 years of experience in neural networks and deep learning research.",
      longBio: "Michael completed his PhD at Carnegie Mellon University, focusing on deep learning architectures. Before joining ForwardSols, he worked at OpenAI where he contributed to large language model development. He now leads our AI research team, pushing the boundaries of what's possible with machine learning.",
      expertise: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP"],
      skills: [
        { name: "Machine Learning", level: 98 },
        { name: "Python", level: 95 },
        { name: "Research", level: 96 },
        { name: "TensorFlow/PyTorch", level: 94 }
      ],
      education: "Ph.D. Machine Learning, Carnegie Mellon",
      experience: "8+ years in AI research",
      achievements: [
        "Published 15+ research papers",
        "Former researcher at OpenAI",
        "Developed proprietary AI models",
        "Patent in neural network optimization"
      ],
      social: {
        linkedin: "https://linkedin.com/in/michaelchen",
        twitter: "https://twitter.com/michaelchen",
        github: "https://github.com/michaelchen",
        email: "mailto:michael@forwardsols.com"
      },
      image: "/images/team/michael.jpg",
      color: "from-blue-500 to-amber-500"
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Lead Developer",
      department: "Engineering",
      email: "emily@forwardsols.com",
      phone: "+1 (555) 456-7890",
      location: "San Francisco, CA",
      bio: "Full-stack expert with passion for building elegant, performant web applications using React and Next.js.",
      longBio: "Emily has been building web applications for over 10 years. She specializes in creating seamless user experiences with modern frameworks. She leads our development team, ensuring code quality, performance, and best practices across all projects.",
      expertise: ["React/Next.js", "TypeScript", "Node.js", "UI/UX"],
      skills: [
        { name: "React/Next.js", level: 98 },
        { name: "TypeScript", level: 95 },
        { name: "Node.js", level: 92 },
        { name: "UI/UX Design", level: 85 }
      ],
      education: "B.S. Computer Science, UC Berkeley",
      experience: "10+ years in web development",
      achievements: [
        "Developed 50+ production web apps",
        "React Community Contributor",
        "Tech speaker at 12 conferences",
        "Mentor at coding bootcamps"
      ],
      social: {
        linkedin: "https://linkedin.com/in/emilyrodriguez",
        twitter: "https://twitter.com/emilyrodriguez",
        github: "https://github.com/emilyrodriguez",
        email: "mailto:emily@forwardsols.com"
      },
      image: "/images/team/emily.jpg",
      color: "from-green-500 to-amber-500"
    },
    {
      id: 5,
      name: "David Kim",
      role: "Head of Marketing",
      department: "Marketing",
      email: "david@forwardsols.com",
      phone: "+1 (555) 567-8901",
      location: "San Francisco, CA",
      bio: "Growth hacker with track record of scaling startups from 0 to $10M+ revenue through digital strategy.",
      longBio: "David brings 12 years of marketing experience, having led growth for 5 successful startups. He specializes in data-driven marketing strategies that deliver measurable ROI. At ForwardSols, he ensures our message reaches the right audience with maximum impact.",
      expertise: ["SEO/SEM", "Content Strategy", "Analytics", "Brand Development"],
      skills: [
        { name: "SEO Strategy", level: 96 },
        { name: "Content Marketing", level: 94 },
        { name: "Data Analytics", level: 90 },
        { name: "Brand Strategy", level: 92 }
      ],
      education: "MBA, Harvard Business School",
      experience: "12+ years in marketing leadership",
      achievements: [
        "Scaled 5 startups to $10M+ revenue",
        "Forbes Contributor",
        "Marketing Award Winner 2023",
        "Published author on digital strategy"
      ],
      social: {
        linkedin: "https://linkedin.com/in/davidkim",
        twitter: "https://twitter.com/davidkim",
        github: "https://github.com/davidkim",
        email: "mailto:david@forwardsols.com"
      },
      image: "/images/team/david.jpg",
      color: "from-red-500 to-amber-500"
    },
    {
      id: 6,
      name: "Lisa Thompson",
      role: "Client Success Director",
      department: "Client Relations",
      email: "lisa@forwardsols.com",
      phone: "+1 (555) 678-9012",
      location: "San Francisco, CA",
      bio: "Ensuring every client achieves their business goals with our solutions through dedicated support.",
      longBio: "Lisa has spent 9 years in client success roles at top SaaS companies. She believes that a company's success is directly tied to its clients' success. She leads our client success team to ensure every ForwardSols client gets maximum value from our solutions.",
      expertise: ["Client Relations", "Account Management", "Support", "Training"],
      skills: [
        { name: "Client Management", level: 98 },
        { name: "Communication", level: 97 },
        { name: "Problem Solving", level: 95 },
        { name: "Training", level: 92 }
      ],
      education: "B.A. Communications, NYU",
      experience: "9+ years in client success",
      achievements: [
        "98% client satisfaction rate",
        "Built client success team from scratch",
        "Developed onboarding program",
        "Client Retention Award 2024"
      ],
      social: {
        linkedin: "https://linkedin.com/in/lisathompson",
        twitter: "https://twitter.com/lisathompson",
        github: "https://github.com/lisathompson",
        email: "mailto:lisa@forwardsols.com"
      },
      image: "/images/team/lisa.jpg",
      color: "from-pink-500 to-amber-500"
    },
    {
      id: 7,
      name: "James Wilson",
      role: "Lead Mobile Developer",
      department: "Engineering",
      email: "james@forwardsols.com",
      phone: "+1 (555) 789-0123",
      location: "San Francisco, CA",
      bio: "Expert in native and cross-platform mobile development with 20+ apps in production.",
      longBio: "James has been building mobile apps since the early days of iOS. He's developed apps for Fortune 500 companies and successful startups alike. He leads our mobile development team, creating beautiful, performant apps that users love.",
      expertise: ["iOS", "Android", "React Native", "Flutter"],
      skills: [
        { name: "iOS Development", level: 96 },
        { name: "Android Development", level: 94 },
        { name: "React Native", level: 92 },
        { name: "UI/UX", level: 88 }
      ],
      education: "B.S. Computer Science, University of Washington",
      experience: "12+ years in mobile development",
      achievements: [
        "20+ apps in App Store/Play Store",
        "5M+ total app downloads",
        "Apple Design Award nominee",
        "Open source contributor"
      ],
      social: {
        linkedin: "https://linkedin.com/in/jameswilson",
        twitter: "https://twitter.com/jameswilson",
        github: "https://github.com/jameswilson",
        email: "mailto:james@forwardsols.com"
      },
      image: "/images/team/james.jpg",
      color: "from-orange-500 to-amber-500"
    },
    {
      id: 8,
      name: "Priya Patel",
      role: "Data Science Lead",
      department: "AI/ML",
      email: "priya@forwardsols.com",
      phone: "+1 (555) 890-1234",
      location: "San Francisco, CA",
      bio: "Data scientist specializing in predictive analytics and business intelligence solutions.",
      longBio: "Priya has a PhD in Statistics and 8 years of experience applying data science to business problems. She's helped companies across industries leverage their data for better decision-making. She leads our data science team, developing models that deliver actionable insights.",
      expertise: ["Data Science", "Predictive Analytics", "Python/R", "Visualization"],
      skills: [
        { name: "Data Analysis", level: 98 },
        { name: "Machine Learning", level: 94 },
        { name: "Python/R", level: 96 },
        { name: "Visualization", level: 90 }
      ],
      education: "Ph.D. Statistics, UC Berkeley",
      experience: "8+ years in data science",
      achievements: [
        "Built predictive models for 30+ clients",
        "Published research in ML journals",
        "Patent in predictive analytics",
        "Data Science Award 2023"
      ],
      social: {
        linkedin: "https://linkedin.com/in/priyapatel",
        twitter: "https://twitter.com/priyapatel",
        github: "https://github.com/priyapatel",
        email: "mailto:priya@forwardsols.com"
      },
      image: "/images/team/priya.jpg",
      color: "from-indigo-500 to-amber-500"
    }
  ]

  const departments = [
    { id: 'all', name: 'All Team', count: teamMembers.length },
    { id: 'Executive', name: 'Executive', count: teamMembers.filter(m => m.department === 'Executive').length },
    { id: 'AI/ML', name: 'AI & ML', count: teamMembers.filter(m => m.department === 'AI/ML').length },
    { id: 'Engineering', name: 'Engineering', count: teamMembers.filter(m => m.department === 'Engineering').length },
    { id: 'Marketing', name: 'Marketing', count: teamMembers.filter(m => m.department === 'Marketing').length },
    { id: 'Client Relations', name: 'Client Success', count: teamMembers.filter(m => m.department === 'Client Relations').length },
  ]

  const filteredMembers = filterRole === 'all' 
    ? teamMembers 
    : teamMembers.filter(m => m.department === filterRole)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-black to-black pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/10 px-4 py-2 rounded-full border border-amber-500/20 mb-6">
              <Users className="w-4 h-4 text-amber-500" />
              <span className="text-amber-500 text-sm font-semibold">OUR TEAM</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Meet the Minds
              </span>
              <br />
              <span className="text-white">Behind ForwardSols</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              We're a diverse team of innovators, engineers, and problem-solvers dedicated 
              to transforming businesses through technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 rounded-xl p-6 text-center border border-amber-500/20"
            >
              <Users className="w-8 h-8 text-amber-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-gray-400 text-sm">Team Members</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 rounded-xl p-6 text-center border border-amber-500/20"
            >
              <Brain className="w-8 h-8 text-amber-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white">15+</p>
              <p className="text-gray-400 text-sm">AI Experts</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 rounded-xl p-6 text-center border border-amber-500/20"
            >
              <GraduationCap className="w-8 h-8 text-amber-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white">25+</p>
              <p className="text-gray-400 text-sm">Advanced Degrees</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 rounded-xl p-6 text-center border border-amber-500/20"
            >
              <Globe className="w-8 h-8 text-amber-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white">15+</p>
              <p className="text-gray-400 text-sm">Nationalities</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setFilterRole(dept.id)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                  filterRole === dept.id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white'
                    : 'bg-zinc-900/50 text-gray-400 hover:text-amber-500 border border-amber-500/20'
                }`}
              >
                {dept.name} ({dept.count})
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedMember(member.id)}
                className="bg-zinc-900/50 rounded-xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition-all cursor-pointer group"
              >
                {/* Card Header with Gradient */}
                <div className={`h-24 bg-gradient-to-r ${member.color} opacity-80`} />
                
                {/* Avatar */}
                <div className="relative px-6">
                  <div className="absolute -top-12 left-6 w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 border-4 border-black flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-12">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-500 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-amber-500 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-400 text-xs mb-4 line-clamp-2">{member.bio}</p>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.expertise.slice(0, 2).map((skill, i) => (
                      <span key={i} className="text-xs bg-amber-500/10 text-amber-500 px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                    <span className="text-xs bg-zinc-800 text-gray-400 px-2 py-1 rounded-full">
                      +{member.expertise.length - 2}
                    </span>
                  </div>

                  {/* Social Icons */}
                  <div className="flex gap-3 text-gray-500">
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" 
                       className="hover:text-amber-500 transition-colors"
                       onClick={(e) => e.stopPropagation()}>
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer"
                       className="hover:text-amber-500 transition-colors"
                       onClick={(e) => e.stopPropagation()}>
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer"
                       className="hover:text-amber-500 transition-colors"
                       onClick={(e) => e.stopPropagation()}>
                      <Github className="w-4 h-4" />
                    </a>
                    <a href={member.social.email}
                       className="hover:text-amber-500 transition-colors"
                       onClick={(e) => e.stopPropagation()}>
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">What Makes Our </span>
              <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Team Special
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 rounded-xl p-6 border border-amber-500/20 text-center"
            >
              <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Shared Vision</h3>
              <p className="text-gray-400">We're united by a common goal: transforming businesses through innovation.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 rounded-xl p-6 border border-amber-500/20 text-center"
            >
              <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Continuous Growth</h3>
              <p className="text-gray-400">We're always learning, adapting, and pushing the boundaries of what's possible.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 rounded-xl p-6 border border-amber-500/20 text-center"
            >
              <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Client First</h3>
              <p className="text-gray-400">Every team member is dedicated to your success and satisfaction.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-500/10 to-purple-500/10 rounded-3xl p-12 text-center border border-amber-500/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Team
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for passionate innovators to join our growing family.
            </p>
            <Link
              href="/careers"
              className="group bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Team Member Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-zinc-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-amber-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              {teamMembers.find(m => m.id === selectedMember) && (
                <div>
                  {/* Modal Header with Gradient */}
                  <div className={`h-32 bg-gradient-to-r ${teamMembers.find(m => m.id === selectedMember)?.color}`} />
                  
                  <div className="p-8 -mt-16">
                    {/* Avatar and Basic Info */}
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 border-4 border-black flex items-center justify-center flex-shrink-0">
                        <span className="text-3xl font-bold text-white">
                          {teamMembers.find(m => m.id === selectedMember)?.name.charAt(0)}
                        </span>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h2 className="text-3xl font-bold text-white">
                              {teamMembers.find(m => m.id === selectedMember)?.name}
                            </h2>
                            <p className="text-amber-500 text-lg">
                              {teamMembers.find(m => m.id === selectedMember)?.role}
                            </p>
                          </div>
                          <button
                            onClick={() => setSelectedMember(null)}
                            className="p-2 hover:bg-zinc-800 rounded-full transition-colors"
                          >
                            <X className="w-6 h-6 text-gray-400" />
                          </button>
                        </div>
                        
                        {/* Contact Info */}
                        <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Mail className="w-4 h-4" />
                            <span>{teamMembers.find(m => m.id === selectedMember)?.email}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{teamMembers.find(m => m.id === selectedMember)?.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <div className="mt-8">
                      <h3 className="text-xl font-bold text-white mb-3">About</h3>
                      <p className="text-gray-300 leading-relaxed">
                        {teamMembers.find(m => m.id === selectedMember)?.longBio}
                      </p>
                    </div>

                    {/* Details Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      {/* Expertise */}
                      <div>
                        <h3 className="text-lg font-bold text-white mb-3">Expertise</h3>
                        <div className="flex flex-wrap gap-2">
                          {teamMembers.find(m => m.id === selectedMember)?.expertise.map((skill, i) => (
                            <span key={i} className="bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Education */}
                      <div>
                        <h3 className="text-lg font-bold text-white mb-3">Education</h3>
                        <div className="flex items-start gap-2">
                          <GraduationCap className="w-5 h-5 text-amber-500 mt-1" />
                          <p className="text-gray-300">
                            {teamMembers.find(m => m.id === selectedMember)?.education}
                          </p>
                        </div>
                      </div>

                      {/* Experience */}
                      <div>
                        <h3 className="text-lg font-bold text-white mb-3">Experience</h3>
                        <div className="flex items-start gap-2">
                          <Briefcase className="w-5 h-5 text-amber-500 mt-1" />
                          <p className="text-gray-300">
                            {teamMembers.find(m => m.id === selectedMember)?.experience}
                          </p>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h3 className="text-lg font-bold text-white mb-3">Key Achievements</h3>
                        <ul className="space-y-2">
                          {teamMembers.find(m => m.id === selectedMember)?.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Award className="w-4 h-4 text-amber-500 mt-1" />
                              <span className="text-gray-300 text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Skills Bars */}
                    <div className="mt-8">
                      <h3 className="text-lg font-bold text-white mb-4">Skills</h3>
                      <div className="space-y-4">
                        {teamMembers.find(m => m.id === selectedMember)?.skills.map((skill, i) => (
                          <div key={i}>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-300">{skill.name}</span>
                              <span className="text-amber-500">{skill.level}%</span>
                            </div>
                            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: i * 0.1 }}
                                className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="mt-8 flex gap-4">
                      <a href={teamMembers.find(m => m.id === selectedMember)?.social.linkedin} 
                         target="_blank" rel="noopener noreferrer"
                         className="p-3 bg-zinc-800 rounded-full hover:bg-amber-500/20 transition-colors">
                        <Linkedin className="w-5 h-5 text-amber-500" />
                      </a>
                      <a href={teamMembers.find(m => m.id === selectedMember)?.social.twitter}
                         target="_blank" rel="noopener noreferrer"
                         className="p-3 bg-zinc-800 rounded-full hover:bg-amber-500/20 transition-colors">
                        <Twitter className="w-5 h-5 text-amber-500" />
                      </a>
                      <a href={teamMembers.find(m => m.id === selectedMember)?.social.github}
                         target="_blank" rel="noopener noreferrer"
                         className="p-3 bg-zinc-800 rounded-full hover:bg-amber-500/20 transition-colors">
                        <Github className="w-5 h-5 text-amber-500" />
                      </a>
                      <a href={teamMembers.find(m => m.id === selectedMember)?.social.email}
                         className="p-3 bg-zinc-800 rounded-full hover:bg-amber-500/20 transition-colors">
                        <Mail className="w-5 h-5 text-amber-500" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default TeamPage