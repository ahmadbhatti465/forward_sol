"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { 
  Cpu,
  Brain,
  Code2,
  Smartphone,
  Database,
  Cloud,
  Gauge,
  Activity,
  Clock,
  Zap,
  TrendingUp,
  BarChart3,
  LineChart,
  PieChart,
  ArrowRight,
  Shield,
  Globe,
  Rocket,
  Users,
  DollarSign,
  Target,
  Bot,
  Network,
  Server
} from 'lucide-react'

const StatisticsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content - No fixed backgrounds */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              AI-Powered Business Intelligence
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Real-time analytics and machine learning insights for your digital growth
          </p>
        </motion.div>

        {/* Key Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <MetricCard 
            icon={<Brain className="w-6 h-6" />}
            value="94%"
            label="AI Model Accuracy"
            change="+12%"
          />
          <MetricCard 
            icon={<Users className="w-6 h-6" />}
            value="2.4M"
            label="Active Users"
            change="+18.2%"
          />
          <MetricCard 
            icon={<DollarSign className="w-6 h-6" />}
            value="$3.2M"
            label="Revenue Generated"
            change="+24.5%"
          />
          <MetricCard 
            icon={<Zap className="w-6 h-6" />}
            value="99.9%"
            label="Uptime SLA"
            change="100%"
          />
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          
          {/* Web Development Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-900/80 rounded-2xl p-6 border border-amber-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-500/10 rounded-xl">
                <Code2 className="w-6 h-6 text-amber-500" />
              </div>
              <h2 className="text-xl font-bold text-white">Web Development</h2>
            </div>
            
            <div className="space-y-4">
              <StatItem label="Page Load Time" value="2.3s" change="-40%" />
              <StatItem label="First Byte Delay" value="0.3s" change="-25%" />
              <StatItem label="LCP" value="2.1s" change="-35%" />
              <StatItem label="CLS" value="0.08" change="Good" />
              <StatItem label="Time to Interactive" value="3.2s" change="-30%" />
              <StatItem label="Core Web Vitals" value="85%" change="Pass" />
            </div>
          </motion.div>

          {/* App Development Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-zinc-900/80 rounded-2xl p-6 border border-amber-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-500/10 rounded-xl">
                <Smartphone className="w-6 h-6 text-amber-500" />
              </div>
              <h2 className="text-xl font-bold text-white">App Development</h2>
            </div>
            
            <div className="space-y-4">
              <StatItem label="App Launch Time" value="1.8s" change="-45%" />
              <StatItem label="Crash Rate" value="0.2%" change="-60%" />
              <StatItem label="User Retention" value="76%" change="+15%" />
              <StatItem label="Path Length" value="4.2" change="Optimized" />
              <StatItem label="CTR" value="5.8%" change="+2.1%" />
              <StatItem label="Conversion Rate" value="3.2%" change="+0.8%" />
            </div>
          </motion.div>

          {/* AI/ML Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-zinc-900/80 rounded-2xl p-6 border border-amber-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-500/10 rounded-xl">
                <Brain className="w-6 h-6 text-amber-500" />
              </div>
              <h2 className="text-xl font-bold text-white">AI & ML Performance</h2>
            </div>
            
            <div className="space-y-4">
              <StatItem label="Model Accuracy" value="94.2%" change="+5.2%" />
              <StatItem label="Inference Time" value="42ms" change="-28%" />
              <StatItem label="Training Speed" value="2.4x" change="Faster" />
              <StatItem label="Prediction Precision" value="91%" change="+3%" />
              <StatItem label="Data Throughput" value="1.2GB/s" change="+40%" />
              <StatItem label="AutoML Efficiency" value="87%" change="+12%" />
            </div>
          </motion.div>
        </div>

        {/* Business Statistics Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {/* Business Growth */}
          <div className="bg-gradient-to-br from-amber-500/10 to-purple-500/10 rounded-2xl p-6 border border-amber-500/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-amber-500" />
              Business Growth Metrics
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <BusinessMetric value="+156%" label="Revenue Growth" />
              <BusinessMetric value="3.2x" label="ROI Multiple" />
              <BusinessMetric value="2.4M" label="New Users" />
              <BusinessMetric value="89%" label="Market Reach" />
            </div>
          </div>

          {/* Infrastructure Stats */}
          <div className="bg-gradient-to-br from-amber-500/10 to-purple-500/10 rounded-2xl p-6 border border-amber-500/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Server className="w-5 h-5 text-amber-500" />
              Infrastructure & Cloud
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <BusinessMetric value="99.99%" label="Uptime" />
              <BusinessMetric value="&lt;50ms" label="Latency" />
              <BusinessMetric value="1.2M" label="API Calls/day" />
              <BusinessMetric value="45%" label="Cost Optimized" />
            </div>
          </div>
        </motion.div>

        {/* Engagement & Performance Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          
          {/* Engagement Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-zinc-900/80 rounded-2xl p-6 border border-amber-500/20"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-amber-500" />
              User Engagement Metrics
            </h3>
            
            <div className="space-y-4">
              <ProgressBar label="Daily Active Users" value={85} />
              <ProgressBar label="Session Duration" value={72} />
              <ProgressBar label="Retention Rate" value={68} />
              <ProgressBar label="Feature Adoption" value={45} />
              <ProgressBar label="User Satisfaction" value={94} />
            </div>
          </motion.div>

          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-zinc-900/80 rounded-2xl p-6 border border-amber-500/20"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Gauge className="w-5 h-5 text-amber-500" />
              System Performance
            </h3>
            
            <div className="space-y-4">
              <ProgressBar label="CPU Utilization" value={62} />
              <ProgressBar label="Memory Usage" value={48} />
              <ProgressBar label="Network Speed" value={88} />
              <ProgressBar label="Database Response" value={76} />
              <ProgressBar label="Cache Hit Rate" value={92} />
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <BottomStat icon={<Rocket />} value="2.3s" label="Faster Load" sublabel="vs Industry" />
          <BottomStat icon={<Shield />} value="53+" label="Factors" sublabel="Monitored" />
          <BottomStat icon={<Globe />} value="100%" label="Uptime" sublabel="99.99% SLA" />
          <BottomStat icon={<Brain />} value="94%" label="AI Accuracy" sublabel="ML Models" />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <h3 className="text-2xl font-bold text-white">Ready to Transform Your Digital Presence?</h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2"
            >
              BOOK A DEMO
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <p className="text-gray-500 text-sm">Schedule a free consultation with our AI experts</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Helper Components
const MetricCard = ({ icon, value, label, change }: { icon: React.ReactNode; value: string; label: string; change: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-zinc-900/80 rounded-xl p-4 border border-amber-500/20"
  >
    <div className="flex items-start justify-between">
      <div className="text-amber-500">{icon}</div>
      <span className="text-green-500 text-xs font-semibold">{change}</span>
    </div>
    <p className="text-xl font-bold text-white mt-2">{value}</p>
    <p className="text-gray-400 text-xs">{label}</p>
  </motion.div>
)

const StatItem = ({ label, value, change }: { label: string; value: string; change: string }) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-400 text-sm">{label}</span>
    <div className="flex items-center gap-2">
      <span className="text-white font-semibold">{value}</span>
      <span className={`text-xs ${
        change.includes('+') ? 'text-green-500' : 
        change.includes('-') ? 'text-red-500' : 
        'text-amber-500'
      }`}>{change}</span>
    </div>
  </div>
)

const BusinessMetric = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <p className="text-xl font-bold text-amber-500">{value}</p>
    <p className="text-gray-400 text-sm">{label}</p>
  </div>
)

const ProgressBar = ({ label, value }: { label: string; value: number }) => (
  <div>
    <div className="flex justify-between text-sm mb-1">
      <span className="text-gray-400">{label}</span>
      <span className="text-white font-semibold">{value}%</span>
    </div>
    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
      />
    </div>
  </div>
)

const BottomStat = ({ icon, value, label, sublabel }: { icon: React.ReactNode; value: string; label: string; sublabel: string }) => (
  <div className="bg-zinc-900/80 rounded-xl p-4 border border-amber-500/20 text-center">
    <div className="flex justify-center text-amber-500 mb-2">{icon}</div>
    <p className="text-lg font-bold text-white">{value}</p>
    <p className="text-gray-400 text-xs">{label}</p>
    <p className="text-gray-500 text-[10px]">{sublabel}</p>
  </div>
)

export default StatisticsPage