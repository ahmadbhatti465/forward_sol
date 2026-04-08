// app/NewClientReviewsSection.tsx
"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ThreeDReviewCarousel from '@/components/ThreeDReviewCarousel'
import { 
  Star,
  Quote,
  Award,
  TrendingUp,
  Users,
  Heart,
  Sparkles,
  Globe,
  Rocket,
  MessageCircle,
  ThumbsUp
} from 'lucide-react'

const NewClientReviewsSection = () => {
  const [selectedReview, setSelectedReview] = useState(0)

  const reviews = [
    {
      text: "ForwardSols transformed our business with their AI-powered solutions. Our revenue increased by 200% within 6 months. Their team's expertise and dedication are unmatched.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      rating: 5,
      company: "TechStart",
      location: "San Francisco, CA"
    },
    {
      text: "The team's expertise in web development and AI integration is unparalleled. They delivered beyond our expectations and helped us scale faster than we thought possible.",
      author: "Michael Chen",
      role: "CTO, InnovateLabs",
      rating: 5,
      company: "InnovateLabs",
      location: "Singapore"
    },
    {
      text: "Outstanding results with their SEO and digital marketing strategies. We're now ranking #1 for our target keywords and seeing record-breaking traffic.",
      author: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      rating: 5,
      company: "GrowthCo",
      location: "London, UK"
    },
    {
      text: "Their AI monitoring system saved us 40% in operational costs. The ROI has been incredible, and their support team is always available when we need them.",
      author: "David Kim",
      role: "Operations Manager, GlobalTech",
      rating: 5,
      company: "GlobalTech",
      location: "Seoul, South Korea"
    },
    {
      text: "Professional, innovative, and results-driven. They're not just vendors, they're true partners in our success. Highly recommended!",
      author: "Lisa Thompson",
      role: "Founder, DigitalFirst",
      rating: 5,
      company: "DigitalFirst",
      location: "Toronto, Canada"
    },
    {
      text: "The mobile app they developed for us has 4.9 stars on the App Store. User engagement is through the roof! Their attention to detail is amazing.",
      author: "James Wilson",
      role: "Product Lead, AppVenture",
      rating: 5,
      company: "AppVenture",
      location: "Berlin, Germany"
    }
  ]

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "500+", label: "Happy Clients", sublabel: "Worldwide" },
    { icon: <Award className="w-6 h-6" />, value: "98%", label: "Satisfaction Rate", sublabel: "Client Feedback" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "200%", label: "Average ROI", sublabel: "Within 12 months" },
    { icon: <Heart className="w-6 h-6" />, value: "150+", label: "5-Star Reviews", sublabel: "And counting" }
  ]

  const achievements = [
    { icon: <Globe />, text: "Serving clients in 30+ countries" },
    { icon: <Rocket />, text: "Delivered 500+ successful projects" },
    { icon: <MessageCircle />, text: "24/7 Client Support" },
    { icon: <ThumbsUp />, text: "98% Client Retention Rate" }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        
        {/* Header with animated badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-linear-to-r from-amber-500/20 to-amber-600/20 px-4 py-2 rounded-full border border-amber-500/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-amber-500 text-sm font-semibold">TRUSTED BY INDUSTRY LEADERS</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-linear-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with our AI-powered solutions
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-linear-to-br from-zinc-900/90 to-black rounded-2xl p-6 border border-amber-500/20 text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-linear-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="flex justify-center text-amber-500 mb-3">{stat.icon}</div>
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-amber-500 text-sm font-semibold mb-1">{stat.label}</p>
              <p className="text-gray-500 text-xs">{stat.sublabel}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 3D Review Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-150 mb-20 rounded-3xl overflow-hidden border border-amber-500/20 bg-black/40"
        >
          <ThreeDReviewCarousel reviews={reviews} />
          
          {/* Overlay text */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-amber-500/30">
            <p className="text-amber-500 text-sm font-semibold">✨ Experience the 3D Carousel • Drag to rotate ✨</p>
          </div>
        </motion.div>

        {/* Featured Review Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {/* Main Featured Review */}
          <div className="bg-linear-to-br from-zinc-900/90 to-black rounded-3xl p-8 border border-amber-500/20">
            <div className="flex items-center gap-2 mb-6">
              <Quote className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">FEATURED REVIEW</span>
            </div>

            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
              ))}
            </div>

            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              "{reviews[selectedReview].text}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-amber-500 to-amber-700 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {reviews[selectedReview].author.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{reviews[selectedReview].author}</h3>
                <p className="text-amber-500">{reviews[selectedReview].role}</p>
                <p className="text-gray-500 text-sm">{reviews[selectedReview].location}</p>
              </div>
            </div>
          </div>

          {/* Review Selection Grid */}
          <div className="grid grid-cols-2 gap-4">
            {reviews.map((review, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02, y: -2 }}
                onClick={() => setSelectedReview(index)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  selectedReview === index
                    ? 'bg-linear-to-br from-amber-500/20 to-amber-600/20 border-amber-500'
                    : 'bg-zinc-900/50 border-amber-500/20 hover:border-amber-500/50'
                }`}
              >
                <div className="flex gap-1 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-white font-semibold text-sm mb-1">{review.author}</p>
                <p className="text-gray-500 text-xs">{review.company}</p>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Achievements Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-zinc-900/50 rounded-xl p-4 border border-amber-500/20"
            >
              <div className="text-amber-500">{item.icon}</div>
              <span className="text-gray-300 text-sm">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-r from-amber-500/20 to-purple-500/20" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(245, 158, 11, 0.1) 2px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
          
          <div className="relative p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Experience the same transformative results as our 500+ happy clients
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-linear-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2"
            >
              Start Your Journey
              <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default NewClientReviewsSection