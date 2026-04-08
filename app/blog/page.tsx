// app/blog/page.tsx
"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Calendar,
  Clock,
  User,
  Tag,
  Search,
  Filter,
  ArrowRight,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Eye,
  TrendingUp,
  Zap,
  Brain,
  Code,
  Smartphone,
  Globe,
  Shield,
  Database,
  Cpu,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react'

// ==================== BLOG DATA ====================

export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  author: {
    name: string
    role: string
    avatar: string
    bio: string
  }
  category: string
  tags: string[]
  publishedAt: string
  readTime: number
  views: number
  likes: number
  comments: number
  image: string
  featured: boolean
  trending: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Business: Trends to Watch in 2026",
    slug: "future-of-ai-in-business-2026",
    excerpt: "Explore the cutting-edge AI trends that will transform how businesses operate, from autonomous agents to predictive analytics.",
    content: "Artificial Intelligence is no longer a futuristic concept—it's a business imperative. As we move through 2026, several key trends are emerging that will reshape how companies leverage AI...",
    author: {
      name: "Ahmad",
      role: "Founder & CEO",
      avatar: "/images/team/ahmad.jpg",
      bio: "AI visionary with 15+ years experience in software development and digital transformation."
    },
    category: "Artificial Intelligence",
    tags: ["AI", "Machine Learning", "Business Strategy", "Innovation"],
    publishedAt: "2026-02-15",
    readTime: 8,
    views: 1245,
    likes: 89,
    comments: 24,
    image: "/images/blog/ai-future.jpg",
    featured: true,
    trending: true
  },
  {
    id: 2,
    title: "How to Implement Machine Learning in Your Startup (Without a PhD)",
    slug: "implement-ml-in-startup",
    excerpt: "A practical guide for startups looking to leverage machine learning without needing a team of data scientists.",
    content: "Many startup founders believe that implementing machine learning requires a team of PhDs and millions in funding. The reality is quite different...",
    author: {
      name: "Michael Chen",
      role: "Head of AI Research",
      avatar: "/images/team/michael.jpg",
      bio: "PhD in Machine Learning with 8 years of experience in neural networks and deep learning research."
    },
    category: "Machine Learning",
    tags: ["Startups", "Machine Learning", "Practical Guide", "AI"],
    publishedAt: "2026-02-10",
    readTime: 6,
    views: 987,
    likes: 67,
    comments: 18,
    image: "/images/blog/ml-startup.jpg",
    featured: false,
    trending: true
  },
  {
    id: 3,
    title: "The Complete Guide to Next.js 15: What's New and How to Use It",
    slug: "nextjs-15-complete-guide",
    excerpt: "Discover the latest features in Next.js 15 and learn how to leverage them to build faster, more efficient web applications.",
    content: "Next.js 15 has arrived with a host of new features that promise to revolutionize how we build React applications. From improved performance to new rendering strategies...",
    author: {
      name: "Emily Rodriguez",
      role: "Lead Developer",
      avatar: "/images/team/emily.jpg",
      bio: "Full-stack expert with passion for building elegant web applications using React and Next.js."
    },
    category: "Web Development",
    tags: ["Next.js", "React", "Web Development", "JavaScript"],
    publishedAt: "2026-02-05",
    readTime: 10,
    views: 2156,
    likes: 156,
    comments: 42,
    image: "/images/blog/nextjs.jpg",
    featured: true,
    trending: true
  },
  {
    id: 4,
    title: "10 SEO Strategies That Actually Work in 2026",
    slug: "seo-strategies-2026",
    excerpt: "Search engine optimization has evolved. Here are the proven strategies that will help your website rank higher in 2026.",
    content: "SEO in 2026 is more sophisticated than ever. With Google's algorithms becoming increasingly intelligent, traditional SEO tactics no longer cut it...",
    author: {
      name: "David Kim",
      role: "Head of Marketing",
      avatar: "/images/team/david.jpg",
      bio: "Growth hacker with track record of scaling startups from 0 to $10M+ revenue through digital strategy."
    },
    category: "Digital Marketing",
    tags: ["SEO", "Digital Marketing", "Growth", "Strategy"],
    publishedAt: "2026-01-28",
    readTime: 7,
    views: 876,
    likes: 54,
    comments: 12,
    image: "/images/blog/seo.jpg",
    featured: false,
    trending: false
  },
  {
    id: 5,
    title: "Building Scalable Cloud Infrastructure: Lessons from Enterprise Clients",
    slug: "scalable-cloud-infrastructure",
    excerpt: "Learn from our experience building cloud infrastructure for Fortune 500 companies and how to apply these lessons to your own architecture.",
    content: "Over the past 7 years, we've helped dozens of enterprise clients build scalable, reliable cloud infrastructure. Here are the key lessons we've learned...",
    author: {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      avatar: "/images/team/sarah.jpg",
      bio: "Former lead architect at Google Cloud, specializing in scalable AI systems and cloud infrastructure."
    },
    category: "Cloud Computing",
    tags: ["Cloud", "AWS", "DevOps", "Scalability"],
    publishedAt: "2026-01-20",
    readTime: 9,
    views: 723,
    likes: 48,
    comments: 15,
    image: "/images/blog/cloud.jpg",
    featured: false,
    trending: false
  },
  {
    id: 6,
    title: "The Role of AI in Cybersecurity: Protecting Your Business in 2026",
    slug: "ai-in-cybersecurity",
    excerpt: "As cyber threats become more sophisticated, AI-powered security solutions are becoming essential for businesses of all sizes.",
    content: "Cybersecurity threats are evolving at an alarming rate. Traditional security measures are no longer sufficient to protect against modern attacks...",
    author: {
      name: "James Wilson",
      role: "Lead Security Engineer",
      avatar: "/images/team/james.jpg",
      bio: "Security expert with 12+ years experience in cybersecurity and threat detection."
    },
    category: "Cybersecurity",
    tags: ["Cybersecurity", "AI", "Security", "Threat Detection"],
    publishedAt: "2026-01-15",
    readTime: 7,
    views: 654,
    likes: 42,
    comments: 9,
    image: "/images/blog/cybersecurity.jpg",
    featured: false,
    trending: true
  },
  {
    id: 7,
    title: "Mobile App Development Trends Shaping 2026",
    slug: "mobile-app-trends-2026",
    excerpt: "From AI-powered apps to cross-platform frameworks, discover the trends that will define mobile development this year.",
    content: "The mobile app landscape continues to evolve at breakneck speed. Here are the key trends that every mobile developer should be aware of...",
    author: {
      name: "Emily Rodriguez",
      role: "Lead Developer",
      avatar: "/images/team/emily.jpg",
      bio: "Full-stack expert with passion for building elegant web applications."
    },
    category: "Mobile Development",
    tags: ["Mobile", "iOS", "Android", "React Native"],
    publishedAt: "2026-01-08",
    readTime: 6,
    views: 543,
    likes: 38,
    comments: 7,
    image: "/images/blog/mobile.jpg",
    featured: false,
    trending: false
  },
  {
    id: 8,
    title: "How to Build a Data-Driven Culture in Your Organization",
    slug: "data-driven-culture",
    excerpt: "Transforming your organization to be truly data-driven requires more than just tools—it requires a cultural shift.",
    content: "Many companies invest in data tools but fail to become truly data-driven because they neglect the human element. Here's how to build a culture that embraces data...",
    author: {
      name: "Priya Patel",
      role: "Data Science Lead",
      avatar: "/images/team/priya.jpg",
      bio: "Data scientist specializing in predictive analytics and business intelligence solutions."
    },
    category: "Data Science",
    tags: ["Data Science", "Analytics", "Business Intelligence", "Culture"],
    publishedAt: "2026-01-02",
    readTime: 8,
    views: 432,
    likes: 31,
    comments: 5,
    image: "/images/blog/data-culture.jpg",
    featured: false,
    trending: false
  },
  {
    id: 9,
    title: "The Ethics of AI: Navigating the Challenges",
    slug: "ethics-of-ai",
    excerpt: "As AI becomes more powerful, understanding and addressing ethical considerations is crucial for responsible innovation.",
    content: "With great power comes great responsibility. As AI systems become more capable, we must grapple with important ethical questions...",
    author: {
      name: "Ahmad",
      role: "Founder & CEO",
      avatar: "/images/team/ahmad.jpg",
      bio: "AI visionary with 15+ years experience in software development and digital transformation."
    },
    category: "Artificial Intelligence",
    tags: ["AI Ethics", "Responsible AI", "Technology", "Society"],
    publishedAt: "2025-12-20",
    readTime: 9,
    views: 876,
    likes: 67,
    comments: 23,
    image: "/images/blog/ai-ethics.jpg",
    featured: true,
    trending: true
  }
]

const categories = [
  { name: "All", count: blogPosts.length },
  { name: "Artificial Intelligence", count: blogPosts.filter(p => p.category === "Artificial Intelligence").length },
  { name: "Machine Learning", count: blogPosts.filter(p => p.category === "Machine Learning").length },
  { name: "Web Development", count: blogPosts.filter(p => p.category === "Web Development").length },
  { name: "Digital Marketing", count: blogPosts.filter(p => p.category === "Digital Marketing").length },
  { name: "Cloud Computing", count: blogPosts.filter(p => p.category === "Cloud Computing").length },
  { name: "Cybersecurity", count: blogPosts.filter(p => p.category === "Cybersecurity").length },
  { name: "Mobile Development", count: blogPosts.filter(p => p.category === "Mobile Development").length },
  { name: "Data Science", count: blogPosts.filter(p => p.category === "Data Science").length }
]

const popularTags = [
  "AI", "Machine Learning", "Web Development", "Next.js", "React", 
  "Cloud", "Cybersecurity", "SEO", "Digital Marketing", "Data Science",
  "Mobile", "Startups", "Innovation", "Strategy", "Technology"
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
const BlogHero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-b from-amber-950/20 via-black to-black pointer-events-none" />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
        <GradientBadge icon={<Sparkles className="w-4 h-4" />} text="INSIGHTS & INNOVATION" className="mb-6" />
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
          <span className="bg-linear-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
            ForwardSols Blog
          </span>
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Insights, trends, and expert perspectives on AI, technology, and business transformation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-zinc-900/50 border border-amber-500/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
  
  // Featured Post Component
  const FeaturedPost = ({ post }: { post: BlogPost }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative group cursor-pointer"
    >
      <div className="grid lg:grid-cols-2 gap-8 items-center bg-linear-to-br from-amber-500/5 to-purple-500/5 rounded-3xl border border-amber-500/20 p-6 lg:p-8">
        {/* Content */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <GradientBadge icon={<Zap className="w-3 h-3" />} text="FEATURED" />
            <span className="text-amber-500 text-sm">{post.category}</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-amber-500 transition-colors">
            {post.title}
          </h2>
          
          <p className="text-gray-400">{post.excerpt}</p>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="text-xs bg-zinc-800 text-gray-300 px-2 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
          
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-semibold group/link"
          >
            Read Full Article
            <ArrowRight className="w-4 h-4 group/link-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        {/* Image Placeholder */}
        <div className="relative aspect-video bg-linear-to-br from-amber-500/20 to-purple-500/20 rounded-xl border border-amber-500/20 flex items-center justify-center">
          <Cpu className="w-16 h-16 text-amber-500/30" />
          <div className="absolute bottom-4 right-4 flex items-center gap-3 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{post.views}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>{post.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" />
              <span>{post.comments}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
  
  // Blog Card Component
  const BlogCard = ({ post, onClick }: { post: BlogPost; onClick: () => void }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="bg-zinc-900/50 rounded-xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition-all cursor-pointer group"
    >
      {/* Image Placeholder */}
      <div className="aspect-video bg-linear-to-br from-amber-500/10 to-purple-500/10 flex items-center justify-center relative">
        {post.trending && (
          <div className="absolute top-3 left-3 bg-amber-500/90 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            Trending
          </div>
        )}
        {post.featured && (
          <div className="absolute top-3 right-3 bg-purple-500/90 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Featured
          </div>
        )}
        <Brain className="w-12 h-12 text-amber-500/30" />
      </div>
      
      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-amber-500 font-semibold">{post.category}</span>
          <span className="text-xs text-gray-500">•</span>
          <span className="text-xs text-gray-500">{post.readTime} min read</span>
        </div>
        
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-500 transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
          {post.excerpt}
        </p>
        
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
          <User className="w-3 h-3" />
          <span>{post.author.name}</span>
          <span>•</span>
          <Calendar className="w-3 h-3" />
          <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>{post.views}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-3 h-3" />
              <span>{post.likes}</span>
            </div>
          </div>
          
          <Link
            href={`/blog/${post.slug}`}
            className="text-amber-500 hover:text-amber-400 text-sm font-semibold"
            onClick={(e) => e.stopPropagation()}
          >
            Read More →
          </Link>
        </div>
      </div>
    </motion.div>
  )
  
  // Blog Modal Component
  const BlogModal = ({ post, onClose }: { post: BlogPost | null; onClose: () => void }) => {
    if (!post) return null
    
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-zinc-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-amber-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image */}
            <div className="h-48 bg-linear-to-br from-amber-500/20 to-purple-500/20 flex items-center justify-center relative">
              <Brain className="w-16 h-16 text-amber-500/30" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-8">
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="text-amber-500 font-semibold">{post.category}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
              
              {/* Title */}
              <h1 className="text-3xl font-bold text-white mb-4">{post.title}</h1>
              
              {/* Author */}
              <div className="flex items-center gap-3 mb-6 p-4 bg-zinc-800/50 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-amber-500 to-amber-700 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">{post.author.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-white font-semibold">{post.author.name}</p>
                  <p className="text-amber-500 text-sm">{post.author.role}</p>
                  <p className="text-gray-400 text-xs mt-1">{post.author.bio}</p>
                </div>
              </div>
              
              {/* Excerpt */}
              <div className="mb-6">
                <p className="text-gray-300 italic border-l-4 border-amber-500 pl-4">{post.excerpt}</p>
              </div>
              
              {/* Content Preview */}
              <div className="mb-6">
                <p className="text-gray-300 leading-relaxed">{post.content}</p>
                <p className="text-gray-500 mt-4">[Full content would be displayed here...]</p>
              </div>
              
              {/* Tags */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Engagement */}
              <div className="flex items-center gap-6 pt-6 border-t border-amber-500/20">
                <button className="flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span>{post.likes} Likes</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>{post.comments} Comments</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors">
                  <Bookmark className="w-5 h-5" />
                  <span>Save</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  }
  
  // Categories Section
  const CategoriesSection = ({ activeCategory, onCategoryChange }: { activeCategory: string; onCategoryChange: (category: string) => void }) => (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => onCategoryChange(cat.name)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat.name
                  ? 'bg-linear-to-r from-amber-500 to-amber-600 text-white'
                  : 'bg-zinc-900/50 text-gray-400 hover:text-amber-500 border border-amber-500/20'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </div>
    </section>
  )
  
  // Trending Tags Section
  const TrendingTags = ({ onTagClick }: { onTagClick: (tag: string) => void }) => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-gray-400 text-sm">Popular tags:</span>
        {popularTags.slice(0, 8).map((tag, i) => (
          <button
            key={i}
            onClick={() => onTagClick(tag)}
            className="text-xs bg-zinc-800 text-gray-300 px-3 py-1 rounded-full hover:bg-amber-500/20 hover:text-amber-500 transition-colors"
          >
            #{tag}
          </button>
        ))}
      </div>
    </div>
  )
  
  // Newsletter Section
  const NewsletterSection = () => (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-linear-to-br from-amber-500/10 to-purple-500/10 rounded-3xl p-12 text-center border border-amber-500/20"
        >
          <Sparkles className="w-12 h-12 text-amber-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Never Miss an Update</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-zinc-900/50 border border-amber-500/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-amber-500"
            />
            <button className="bg-linear-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-semibold">
              Subscribe
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </motion.div>
      </div>
    </section>
  )
  
  // ==================== MAIN PAGE ====================
  
  const BlogPage = () => {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [activeCategory, setActiveCategory] = useState('All')
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 6
  
    const featuredPost = blogPosts.find(p => p.featured)
    const otherPosts = blogPosts.filter(p => !p.featured)
  
    const filteredPosts = otherPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.author.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory
      return matchesSearch && matchesCategory
    })
  
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  
    return (
      <div className="min-h-screen bg-black text-white">
        <BlogHero />
       
  
        {/* Categories */}
        <CategoriesSection activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
  
        {/* Trending Tags */}
        <TrendingTags onTagClick={(tag) => setSearchTerm(tag)} />
  
        {/* Featured Post */}
        {featuredPost && searchTerm === '' && activeCategory === 'All' && (
          <section className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FeaturedPost post={featuredPost} />
            </div>
          </section>
        )}
  
        {/* Blog Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentPosts.map((post) => (
                <BlogCard key={post.id} post={post} onClick={() => setSelectedPost(post)} />
              ))}
            </div>
  
            {currentPosts.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
                <button
                  onClick={() => { setSearchTerm(''); setActiveCategory('All') }}
                  className="mt-4 text-amber-500 hover:text-amber-400 transition-colors"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
  
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-12">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-full bg-zinc-900/50 border border-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-amber-500/10 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-gray-400">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-full bg-zinc-900/50 border border-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-amber-500/10 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </section>
  
        {/* Newsletter */}
        <NewsletterSection />
  
        {/* Blog Modal */}
        <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
        </div>
    )
  }
  
  export default BlogPage