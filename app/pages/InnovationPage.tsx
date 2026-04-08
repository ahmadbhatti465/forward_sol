"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { 
  Sparkles,
  Shield,
  Mail,
  Phone,
  User,
  Building2,
  Briefcase,
  Hash,
  Send,
  Lock,
  CheckCircle2,
  Globe,
  Clock
} from 'lucide-react'

const InnovationPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content - No fixed backgrounds */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 px-4 py-2 rounded-full border border-amber-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-amber-500 text-sm font-semibold">LET'S INNOVATE TOGETHER</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Ready to Innovate
            </span>
            <br />
            <span className="text-white">with AHMAD?</span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Complete the form, and our team will reach out to discuss how we can create 
            custom software solutions to meet your business needs.
          </p>
        </motion.div>

        {/* Form and Info Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-900/80 rounded-2xl p-8 border border-amber-500/20"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Get Started Today</h2>
            
            <form className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-gray-300 flex items-center gap-2">
                  <User className="w-4 h-4 text-amber-500" />
                  Full name <span className="text-amber-500">*</span>
                </Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  className="bg-zinc-800/80 border-amber-500/20 text-white placeholder:text-gray-600 focus:border-amber-500 focus:ring-amber-500/20"
                />
              </div>

              {/* Company Name */}
              <div className="space-y-2">
                <Label htmlFor="company" className="text-gray-300 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-500" />
                  Company name <span className="text-amber-500">*</span>
                </Label>
                <Input
                  id="company"
                  placeholder="Your Company Ltd."
                  className="bg-zinc-800/80 border-amber-500/20 text-white placeholder:text-gray-600 focus:border-amber-500 focus:ring-amber-500/20"
                />
              </div>

              {/* Business Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-500" />
                  Business email <span className="text-amber-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  className="bg-zinc-800/80 border-amber-500/20 text-white placeholder:text-gray-600 focus:border-amber-500 focus:ring-amber-500/20"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-300 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-500" />
                  Phone number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="bg-zinc-800/80 border-amber-500/20 text-white placeholder:text-gray-600 focus:border-amber-500 focus:ring-amber-500/20"
                />
              </div>

              {/* Job Title */}
              <div className="space-y-2">
                <Label htmlFor="jobTitle" className="text-gray-300 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-amber-500" />
                  Job title
                </Label>
                <Input
                  id="jobTitle"
                  placeholder="CTO, Product Manager, etc."
                  className="bg-zinc-800/80 border-amber-500/20 text-white placeholder:text-gray-600 focus:border-amber-500 focus:ring-amber-500/20"
                />
              </div>

              {/* How did you hear about us? */}
              <div className="space-y-2">
                <Label htmlFor="source" className="text-gray-300 flex items-center gap-2">
                  <Hash className="w-4 h-4 text-amber-500" />
                  How did you hear about us?
                </Label>
                <select
                  id="source"
                  className="w-full bg-zinc-800/80 border border-amber-500/20 rounded-lg px-3 py-2 text-white focus:border-amber-500 focus:ring-amber-500/20"
                >
                  <option value="" className="bg-zinc-900">Select an option</option>
                  <option value="google" className="bg-zinc-900">Google Search</option>
                  <option value="linkedin" className="bg-zinc-900">LinkedIn</option>
                  <option value="referral" className="bg-zinc-900">Referral</option>
                  <option value="social" className="bg-zinc-900">Social Media</option>
                  <option value="event" className="bg-zinc-900">Event/Conference</option>
                  <option value="other" className="bg-zinc-900">Other</option>
                </select>
              </div>

              {/* Privacy Notice */}
              <div className="bg-amber-500/5 rounded-lg p-4 border border-amber-500/20">
                <div className="flex gap-3">
                  <Lock className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-400">
                    Your privacy is important to us. All information submitted through this form 
                    will be kept confidential and secure. We will not share your details with 
                    third parties without your consent.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-6 text-lg font-semibold group"
              >
                VERIFY EMAIL
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          {/* Right Column - Benefits & Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Why Choose Us Card */}
            <div className="bg-zinc-900/80 rounded-2xl p-8 border border-amber-500/20">
              <h3 className="text-xl font-bold text-white mb-6">Why Partner With Us?</h3>
              
              <div className="space-y-4">
                <BenefitItem 
                  icon={<CheckCircle2 />}
                  title="24/7 Support"
                  description="Round-the-clock assistance from our expert team"
                />
                <BenefitItem 
                  icon={<Shield />}
                  title="Secure & Confidential"
                  description="Enterprise-grade security for your data"
                />
                <BenefitItem 
                  icon={<Globe />}
                  title="Global Reach"
                  description="Serving clients across 30+ countries"
                />
                <BenefitItem 
                  icon={<Clock />}
                  title="Fast Response"
                  description="Average response time under 2 hours"
                />
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-gradient-to-br from-amber-500/10 to-purple-500/10 rounded-2xl p-8 border border-amber-500/20">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-amber-500">500+</p>
                  <p className="text-gray-400 text-sm">Projects Delivered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-amber-500">98%</p>
                  <p className="text-gray-400 text-sm">Client Satisfaction</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-amber-500">24/7</p>
                  <p className="text-gray-400 text-sm">Support Available</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-amber-500">30+</p>
                  <p className="text-gray-400 text-sm">Countries Served</p>
                </div>
              </div>
            </div>

            {/* Testimonial Preview */}
            <div className="bg-zinc-900/80 rounded-2xl p-6 border border-amber-500/20">
              <div className="flex gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-gray-300 text-sm italic mb-3">
                "The team at AHMAD transformed our business with their innovative solutions. 
                Highly recommended!"
              </p>
              <p className="text-white font-semibold">— Michael Chen</p>
              <p className="text-gray-500 text-xs">CTO, TechStart</p>
            </div>
          </motion.div>
        </div>

        {/* Footer with Weather */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-amber-500/20 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm">
            © 2026 AHMAD. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <Globe className="w-4 h-4" />
              <span className="text-sm">Islamabad, Pakistan</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-sm">17°C</span>
              <span className="text-xs bg-zinc-800 px-2 py-1 rounded-full">Mostly clear</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Benefit Item Component
const BenefitItem = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex gap-3">
    <div className="text-amber-500 flex-shrink-0 mt-1">
      {icon}
    </div>
    <div>
      <h4 className="text-white font-semibold">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </div>
)

// Star Component for ratings
const Star = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

export default InnovationPage