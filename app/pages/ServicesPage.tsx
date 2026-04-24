"use client"
import React, { useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import Image from "next/image"
import {
  Target,
  Globe,
  TrendingUp,
  Zap,
  ArrowRight,
  Brain,
  Rocket,
} from "lucide-react"

const ServicesPage = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.95])
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0.8])

  return (
    <div
      ref={containerRef}
      className="relative bg-black min-h-screen overflow-x-hidden z-10"
    >
      {/* ✅ Background Layers (Fixed Properly) */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/10 via-black to-black pointer-events-none -z-10" />

      <div className="absolute inset-0 opacity-20 -z-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(245, 158, 11, 0.1) 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* ================= HERO ================= */}
      <motion.section
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative pt-32 pb-20 px-4 max-w-7xl mx-auto text-center"
      >
        <span className="inline-block text-amber-500 font-mono text-sm tracking-widest mb-4">
          OUR SERVICES
        </span>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
            Solutions We
          </span>
          <br />
          Deliver
        </h1>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          AI-powered solutions for enhanced customer experience, improved
          efficiency, and streamlined operations.
        </p>
      </motion.section>

      {/* ================= SECTION 1 - AI-Powered Solutions ================= */}
      <section className="relative px-4 max-w-7xl mx-auto py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <ServiceCard number="01" title="AI-Powered Solutions" delay={0.2}>
            <ServiceItem
              icon={<Brain className="w-5 h-5 text-amber-500" />}
              title="AI-Optimized Solutions"
              description="Our expert AI engineers utilize machine learning to create customized, data-driven solutions that outperform traditional methods and improve efficiency."
            />
            <ServiceItem
              icon={<Target className="w-5 h-5 text-amber-500" />}
              title="Precision-Targeted Ads"
              description="Clients average 300% ROI on ad spend with our AI-optimized campaigns and 70% lower cost per lead."
            />
            <ServiceItem
              icon={<Globe className="w-5 h-5 text-amber-500" />}
              title="Web & Mobile Application Development"
              description="Build smarter Digital Experiences: We create conversion-optimized websites with integrated AI tools to boost engagement by 200%."
            />
          </ServiceCard>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/3.svg"
                alt="AI Technology"
                fill
                className="object-cover"
              />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-6 left-6 bg-black/80 backdrop-blur-xl rounded-xl p-4 border border-amber-500/20"
              >
                <p className="text-amber-500 text-2xl font-bold">300%</p>
                <p className="text-white text-sm">Average ROI</p>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-xl rounded-xl p-4 border border-amber-500/20"
              >
                <p className="text-amber-500 text-2xl font-bold">70%</p>
                <p className="text-white text-sm">Lower Cost Per Lead</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2 - Competitive Edge ================= */}
      <section className="relative px-4 max-w-7xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-amber-500 font-mono text-sm tracking-widest mb-4">
            [ 02 ]
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Competitive Edge
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            AhmadSols specializes in transforming businesses through technology. 
            Here's how we solve critical pain points
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/6.svg"
                alt="Competitive Edge"
                fill
                className="object-cover"
              />

              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-6 right-6 bg-black/80 backdrop-blur-xl rounded-xl p-4 border border-amber-500/20"
              >
                <p className="text-amber-500 text-2xl font-bold">30%</p>
                <p className="text-white text-sm">Reduced IT Costs</p>
              </motion.div>
              
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-xl rounded-xl p-4 border border-amber-500/20"
              >
                <p className="text-amber-500 text-2xl font-bold">50%</p>
                <p className="text-white text-sm">Improved Efficiency</p>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <EdgeCard
              icon={<Zap className="w-6 h-6 text-amber-500" />}
              title="Streamline Operations"
              description="Our scalable solutions reduce IT costs by 30% and improve system efficiency by 50% with automated workflows."
              stats={[
                { value: "30%", label: "Reduce IT Costs" },
                { value: "50%", label: "Improve Efficiency" }
              ]}
            />

            <EdgeCard
              icon={<TrendingUp className="w-6 h-6 text-amber-500" />}
              title="Stop Burning Budgets"
              description="Our AI-driven paid marketing cuts wasted spend by 80% while tripling conversion rates for measurable ROI."
              stats={[
                { value: "80%", label: "Less Wasted Spend" },
                { value: "3x", label: "Conversion Rate" }
              ]}
            />

            <motion.div 
              className="bg-gradient-to-br from-amber-500/10 to-transparent rounded-2xl p-6 border border-amber-500/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Rocket className="w-8 h-8 text-amber-500" />
                <h3 className="text-xl font-bold text-white">Proven Results</h3>
              </div>
              <p className="text-gray-300 mb-4">
                AhmadSols clients see 200% higher ROI and 150% more revenue within 12 months. 
                We merge technical expertise with growth hacking to unlock your digital potential.
              </p>
              <p className="text-amber-400 font-semibold">
                Partner with us to future-proof your business with AI, automation, and proven marketing strategies.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center">
                  <p className="text-amber-500 text-2xl font-bold">200%</p>
                  <p className="text-gray-400 text-sm">Higher ROI</p>
                </div>
                <div className="text-center">
                  <p className="text-amber-500 text-2xl font-bold">150%</p>
                  <p className="text-gray-400 text-sm">More Revenue</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

/* ================= COMPONENTS ================= */

const ServiceCard = ({
  number,
  title,
  children,
  delay,
}: {
  number: string
  title: string
  children: React.ReactNode
  delay: number
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="space-y-6"
    >
      <div className="flex items-center gap-4">
        <span className="text-amber-500 font-mono text-2xl">[{number}]</span>
        <h2 className="text-3xl font-bold text-white">{title}</h2>
      </div>
      <div className="space-y-6">{children}</div>
    </motion.div>
  )
}

const ServiceItem = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) => (
  <motion.div
    className="flex gap-4"
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </motion.div>
)

const EdgeCard = ({
  icon,
  title,
  description,
  stats,
}: {
  icon: React.ReactNode
  title: string
  description: string
  stats: { value: string; label: string }[]
}) => (
  <motion.div 
    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-amber-500/10 rounded-xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    
    <div className="grid grid-cols-2 gap-4 mb-4">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <p className="text-amber-500 text-2xl font-bold">{stat.value}</p>
          <p className="text-gray-400 text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
    
    <p className="text-gray-300">{description}</p>
  </motion.div>
)

export default ServicesPage