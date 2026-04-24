// app/about/page.tsx
"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Award,
  Users,
  Target,
  TrendingUp,
  Shield,
  Globe,
  Clock,
  Heart,
  Sparkles,
  Rocket,
  Brain,
  Code2,
  Smartphone,
  Server,
  Database,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Star,
  Quote,
  Building2,
  Briefcase
} from 'lucide-react'

const AboutPage = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "500+", label: "Clients Worldwide" },
    { icon: <Award className="w-6 h-6" />, value: "98%", label: "Client Satisfaction" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "200%", label: "Average ROI" },
    { icon: <Globe className="w-6 h-6" />, value: "30+", label: "Countries Served" },
    { icon: <Clock className="w-6 h-6" />, value: "7+", label: "Years Experience" },
    { icon: <Rocket className="w-6 h-6" />, value: "1000+", label: "Projects Delivered" },
  ]

  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Innovation First",
      description: "We leverage cutting-edge AI and machine learning to solve complex business challenges."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Security",
      description: "Enterprise-grade security and data protection in everything we build."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results Driven",
      description: "We measure success by the tangible business outcomes we deliver."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Partnership",
      description: "We're not just vendors; we're long-term partners in your success."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion for Excellence",
      description: "We take pride in delivering exceptional quality in every project."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Perspective",
      description: "Understanding diverse markets to deliver solutions that work worldwide."
    },
  ]

  const team = [
    {
      name: "Ahmad",
      role: "Founder & CEO",
      bio: "AI visionary with 15+ years experience in software development and digital transformation.",
      expertise: ["AI Strategy", "Leadership", "Innovation"]
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      bio: "Former lead architect at Google, specializing in scalable AI systems and cloud infrastructure.",
      expertise: ["Cloud Architecture", "AI/ML", "System Design"]
    },
    {
      name: "Michael Chen",
      role: "Head of AI Research",
      bio: "PhD in Machine Learning, published researcher in neural networks and deep learning.",
      expertise: ["Deep Learning", "Neural Networks", "Research"]
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Developer",
      bio: "Full-stack expert with passion for building elegant, performant web applications.",
      expertise: ["React/Next.js", "Node.js", "Python"]
    },
    {
      name: "David Kim",
      role: "Head of Marketing",
      bio: "Growth hacker with track record of scaling startups from 0 to $10M+ revenue.",
      expertise: ["SEO", "Digital Strategy", "Growth"]
    },
    {
      name: "Lisa Thompson",
      role: "Client Success Director",
      bio: "Ensuring every client achieves their business goals with our solutions.",
      expertise: ["Client Relations", "Strategy", "Support"]
    },
  ]

  const timeline = [
    {
      year: "2018",
      title: "Company Founded",
      description: "AhmadSols was born with a vision to democratize AI for businesses."
    },
    {
      year: "2019",
      title: "First 100 Clients",
      description: "Reached 100 clients milestone with 98% satisfaction rate."
    },
    {
      year: "2020",
      title: "AI Research Lab",
      description: "Launched our dedicated AI research division."
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Opened offices in Singapore and London."
    },
    {
      year: "2022",
      title: "1000 Projects",
      description: "Celebrated delivering 1000+ successful projects."
    },
    {
      year: "2023",
      title: "Enterprise Partnership",
      description: "Became official partner with major cloud providers."
    },
    {
      year: "2024",
      title: "AI Innovation Award",
      description: "Received industry recognition for AI excellence."
    },
    {
      year: "2025",
      title: "Global Excellence",
      description: "Serving clients in 30+ countries with 500+ happy clients."
    },
  ]

  const clients = [
    "TechStart", "InnovateLabs", "GrowthCo", "GlobalTech", 
    "DigitalFirst", "AppVenture", "CloudNine", "FutureSoft"
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-amber-950/20 via-black to-black pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/10 px-4 py-2 rounded-full border border-amber-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-amber-500 text-sm font-semibold">OUR STORY</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-linear-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Transforming Businesses
              </span>
              <br />
              <span className="text-white">Through Innovation</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8">
              We're on a mission to empower businesses with AI-driven solutions that drive real growth, 
              efficiency, and competitive advantage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 rounded-xl p-4 text-center border border-amber-500/20"
              >
                <div className="flex justify-center text-amber-500 mb-2">{stat.icon}</div>
                <p className="text-xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Our </span>
                <span className="bg-linear-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                  Journey
                </span>
              </h2>
              
              <div className="space-y-4 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Founded in 2018, AhmadSols began with a simple yet powerful vision: to make 
                  enterprise-grade AI and technology solutions accessible to businesses of all sizes.
                </p>
                <p className="text-lg leading-relaxed">
                  What started as a small team of passionate developers and AI researchers has grown 
                  into a global company serving over 500 clients across 30+ countries. Our journey 
                  has been defined by innovation, dedication, and an unwavering commitment to our 
                  clients' success.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we're proud to be at the forefront of AI-driven business transformation, 
                  helping companies leverage cutting-edge technology to solve complex challenges, 
                  automate operations, and achieve remarkable growth.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <Link 
                  href="/contact"
                  className="group bg-linear-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
                >
                  Work With Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/services"
                  className="border border-amber-500/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-500/10 transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>

            {/* Right side - Timeline preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 rounded-2xl p-8 border border-amber-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-6">Our Milestones</h3>
              <div className="space-y-4">
                {timeline.slice(0, 5).map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-amber-500 font-bold w-16">{item.year}</div>
                    <div>
                      <h4 className="text-white font-semibold">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-linear-to-b from-amber-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Our </span>
              <span className="bg-linear-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 rounded-xl p-6 border border-amber-500/20 hover:border-amber-500/50 transition-colors group"
              >
                <div className="text-amber-500 mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              <span className="text-white">Meet Our </span>
              <span className="bg-linear-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experts dedicated to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 rounded-xl p-6 border border-amber-500/20"
              >
                <div className="w-20 h-20 rounded-full bg-linear-to-br from-amber-500 to-amber-700 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-amber-500 text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, i) => (
                    <span key={i} className="text-xs bg-amber-500/10 text-amber-500 px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-linear-to-b from-amber-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">What Our </span>
              <span className="bg-linear-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 rounded-xl p-6 border border-amber-500/20"
              >
                <Quote className="w-8 h-8 text-amber-500/30 mb-4" />
                <p className="text-gray-300 text-sm mb-4">
                  "AhmadSols transformed our business with their AI solutions. 
                  Our revenue increased by 200% within 6 months."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <span className="text-amber-500 font-bold">JD</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">John Doe</p>
                    <p className="text-gray-500 text-xs">CEO, TechStart</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gray-500 text-sm tracking-wider mb-4">TRUSTED BY INNOVATIVE COMPANIES</p>
            <div className="flex flex-wrap justify-center gap-8">
              {clients.map((client, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1, color: '#D4AF37' }}
                  className="text-gray-500 text-lg font-medium"
                >
                  {client}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-linear-to-br from-amber-500/10 to-purple-500/10 rounded-3xl p-12 text-center border border-amber-500/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Join 500+ companies that have already partnered with us to achieve remarkable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group bg-linear-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="border border-amber-500/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-amber-500/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage