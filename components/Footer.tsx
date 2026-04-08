// components/Footer.tsx
"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  Mail,
  Phone,
  MapPin,
  Globe,
  Clock,
  ArrowRight,
  Send,
  Heart,
  Sparkles,
  Cpu,
  Brain,
  Code2,
  Smartphone,
  Server,
  Shield
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/career' },
    { name: 'Blog', href: '/blog' },
    { name: 'Press', href: '/press' },
  ]

  const serviceLinks = [
    { name: 'AI Development', href: '/services/ai', icon: <Brain className="w-4 h-4" /> },
    { name: 'Web Development', href: '/services/web', icon: <Code2 className="w-4 h-4" /> },
    { name: 'Mobile Apps', href: '/services/mobile', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Cloud Solutions', href: '/services/cloud', icon: <Server className="w-4 h-4" /> },
    { name: 'Cybersecurity', href: '/services/security', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Consulting', href: '/services/consulting', icon: <Cpu className="w-4 h-4" /> },
  ]

  const solutionLinks = [
    { name: 'Enterprise AI', href: '/solutions/enterprise-ai' },
    { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
    { name: 'Data Analytics', href: '/solutions/data-analytics' },
    { name: 'Process Automation', href: '/solutions/automation' },
    { name: 'IoT Solutions', href: '/solutions/iot' },
  ]

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Status', href: '/api-status' },
    { name: 'Contact Support', href: '/contact' },
    { name: 'Report Issue', href: '/report' },
  ]

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/forwardsols', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/forwardsols', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/forwardsols', label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/forwardsols', label: 'Instagram' },
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/forwardsols', label: 'GitHub' },
  ]

  return (
    <footer className="relative bg-black text-white border-t border-amber-500/20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* Top Section - Logo & Newsletter */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12 pb-12 border-b border-amber-500/20">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="inline-block mb-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                FORWARDSOLS
              </h2>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming businesses with AI-powered solutions. We engineer intelligent systems 
              to automate, optimize, and scale your operations.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>123 Innovation Street, Tech Valley, CA 94043</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-amber-500" />
                <a href="mailto:contact@forwardsols.com" className="hover:text-amber-500 transition-colors">
                  contact@forwardsols.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-amber-500" />
                <a href="tel:+15550000000" className="hover:text-amber-500 transition-colors">
                  +1 (555) 000-0000
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Clock className="w-5 h-5 text-amber-500" />
                <span>Mon-Fri: 9:00 AM - 6:00 PM (PST)</span>
              </div>
            </div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:pl-12"
          >
            <div className="bg-gradient-to-br from-amber-500/10 to-purple-500/10 rounded-2xl p-8 border border-amber-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-amber-500" />
                <h3 className="text-xl font-bold text-white">Stay Updated</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Subscribe to our newsletter for the latest in AI, tech trends, and industry insights.
              </p>
              
              <form className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-black/50 border border-amber-500/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all"
                  >
                    Subscribe
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates.
                </p>
              </form>

              {/* Trust Badges */}
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-amber-500/20">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber-500" />
                  <span className="text-xs text-gray-400">SSL Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-amber-500" />
                  <span className="text-xs text-gray-400">Global Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-amber-500" />
                  <span className="text-xs text-gray-400">99.9% Uptime</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-amber-500 font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-amber-500 font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="text-amber-500">{link.icon}</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-amber-500 font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-amber-500 font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-amber-500/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} ForwardSols. All rights reserved. | 
              <Link href="/privacy" className="hover:text-amber-500 transition-colors ml-1">Privacy</Link> | 
              <Link href="/terms" className="hover:text-amber-500 transition-colors ml-1">Terms</Link> | 
              <Link href="/cookies" className="hover:text-amber-500 transition-colors ml-1">Cookies</Link>
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Made with love */}
            <p className="text-gray-500 text-xs flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-amber-500" /> by ForwardSols
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer