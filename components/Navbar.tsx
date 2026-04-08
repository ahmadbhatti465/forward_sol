"use client"
import React, { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import {
  Cpu,
  Bot,
  Brain,
  Blocks,
  Eye,
  Code2,
  Smartphone,
  Database,
  Server,
  Globe,
  HeartPulse,
  Landmark,
  GraduationCap,
  Megaphone,
  PieChart,
  Target,
  Briefcase,
  Info,
} from "lucide-react"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null)

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
        setActiveMobileMenu(null)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const handleMouseEnter = (menuName: string) => {
    if (window.innerWidth >= 1024) {
      setOpenMenu(menuName)
    }
  }
  
  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setOpenMenu(null)
    }
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (!mobileMenuOpen) {
      setActiveMobileMenu(null)
    }
  }

  const handleMobileSubMenu = (menuName: string) => {
    setActiveMobileMenu(activeMobileMenu === menuName ? null : menuName)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setActiveMobileMenu(null)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-white relative">
        
        {/* Logo - Left Side */}
        <div className="text-xl sm:text-2xl font-semibold tracking-wide cursor-pointer whitespace-nowrap">
          AHMAD
        </div>

        {/* Desktop Menu - Center (Hidden on mobile/tablet) */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-12 absolute left-1/2 transform -translate-x-1/2">
          {/* Services */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="cursor-pointer text-sm xl:text-base font-medium hover:text-gray-300 transition py-2 px-1 whitespace-nowrap bg-transparent border-none">
              Services
            </button>
            {openMenu === "services" && <MegaMenu menuType="services" />}
          </div>

          {/* Marketing */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter("marketing")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="cursor-pointer text-sm xl:text-base hover:text-gray-300 transition py-2 px-1 whitespace-nowrap bg-transparent border-none">
              Marketing
            </button>
            {openMenu === "marketing" && <MegaMenu menuType="marketing" />}
          </div>

          {/* Business Servicing */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter("business")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="cursor-pointer text-sm xl:text-base hover:text-gray-300 transition py-2 px-1 whitespace-nowrap bg-transparent border-none">
              Business Servicing
            </button>
            {openMenu === "business" && <MegaMenu menuType="business" />}
          </div>

          {/* About */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="cursor-pointer text-sm xl:text-base hover:text-gray-300 transition py-2 px-1 whitespace-nowrap bg-transparent border-none">
              About
            </button>
            {openMenu === "about" && <MegaMenu menuType="about" />}
          </div>
        </div>

        {/* Right Side - Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Book Demo Button - Hidden on mobile, visible on tablet and up */}
          <Button
            size="default"
            className="hidden sm:inline-flex rounded-xl border border-white/20 bg-linear-to-t from-zinc-800 to-zinc-900 hover:from-zinc-700 hover:to-zinc-800 transition-all duration-300 whitespace-nowrap px-4 sm:px-6 text-sm sm:text-base"
          >
            BOOK A DEMO
          </Button>

          {/* Mobile Menu Toggle (Visible on tablet and mobile) */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-white hover:text-gray-300 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Small Mobile Demo Button - Only on very small screens when menu is closed */}
        {!mobileMenuOpen && (
          <Button
            size="sm"
            className="sm:hidden rounded-xl border border-white/20 bg-linear-to-t from-zinc-800 to-zinc-900 hover:from-zinc-700 hover:to-zinc-800 transition-all duration-300 whitespace-nowrap px-3 text-xs"
          >
            DEMO
          </Button>
        )}
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={closeMobileMenu}
          />
          
          {/* Menu Panel */}
          <div className="lg:hidden fixed right-0 top-[57px] sm:top-[65px] w-full max-w-sm h-[calc(100vh-57px)] sm:h-[calc(100vh-65px)] bg-zinc-900/95 backdrop-blur-xl border-l border-white/10 z-50 overflow-y-auto animate-slideIn">
            <div className="p-6 space-y-2">
              {/* Mobile Menu Items */}
              <MobileMenuItem 
                title="Services" 
                isActive={activeMobileMenu === "services"}
                onClick={() => handleMobileSubMenu("services")}
              >
                <MobileMegaMenu menuType="services" />
              </MobileMenuItem>

              <MobileMenuItem 
                title="Marketing" 
                isActive={activeMobileMenu === "marketing"}
                onClick={() => handleMobileSubMenu("marketing")}
              >
                <MobileMegaMenu menuType="marketing" />
              </MobileMenuItem>

              <MobileMenuItem 
                title="Business Servicing" 
                isActive={activeMobileMenu === "business"}
                onClick={() => handleMobileSubMenu("business")}
              >
                <MobileMegaMenu menuType="business" />
              </MobileMenuItem>

              <MobileMenuItem 
                title="About" 
                isActive={activeMobileMenu === "about"}
                onClick={() => handleMobileSubMenu("about")}
              >
                <MobileMegaMenu menuType="about" />
              </MobileMenuItem>

              {/* Mobile Demo Button */}
              <div className="pt-6 mt-4 border-t border-white/10">
                <Button
                  size="lg"
                  className="w-full rounded-xl border border-white/20 bg-linear-to-t from-zinc-800 to-zinc-900 hover:from-zinc-700 hover:to-zinc-800 transition-all duration-300"
                  onClick={closeMobileMenu}
                >
                  BOOK A DEMO
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}

export default Navbar

// Add this CSS to your global styles or create a style tag
const styles = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  
  .animate-slideIn {
    animation: slideIn 0.3s ease-out;
  }
`

// 🔹 Mobile Menu Item Component
const MobileMenuItem = ({ 
  title, 
  children, 
  isActive, 
  onClick 
}: { 
  title: string; 
  children: React.ReactNode; 
  isActive: boolean; 
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full text-left py-4 text-white font-medium hover:text-gray-300 transition flex justify-between items-center focus:outline-none"
      >
        <span className="text-base">{title}</span>
        <span className="text-xl text-gray-400">{isActive ? '−' : '+'}</span>
      </button>
      <div className={`transition-all duration-300 ease-in-out ${
        isActive ? 'max-h-[1000px] opacity-100 pb-4' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        {children}
      </div>
    </div>
  )
}

// 🔹 Mobile Mega Menu Component
const MobileMegaMenu = ({ menuType }: { menuType: string }) => {
  let columns: { title: string; items: { icon: React.ReactNode; text: string }[] }[] = []

  switch (menuType) {
    case "services":
      columns = [
        {
          title: "AI & Technology",
          items: [
            { icon: <Cpu size={16} />, text: "AI Monitoring & Integration" },
            { icon: <Bot size={16} />, text: "AI Chatbot Development" },
            { icon: <Brain size={16} />, text: "Machine Learning" },
            { icon: <Blocks size={16} />, text: "Blockchain Solutions" },
            { icon: <Eye size={16} />, text: "Computer Vision" },
          ],
        },
        {
          title: "Development Services",
          items: [
            { icon: <Code2 size={16} />, text: "MERN Stack Development" },
            { icon: <Smartphone size={16} />, text: "Hybrid Mobile Apps" },
            { icon: <Database size={16} />, text: "Python / Django Stack" },
            { icon: <Server size={16} />, text: ".NET Development" },
            { icon: <Globe size={16} />, text: "Ruby on Rails" },
          ],
        },
        {
          title: "Industry Solutions",
          items: [
            { icon: <Globe size={16} />, text: "E-Commerce Solutions" },
            { icon: <HeartPulse size={16} />, text: "Healthcare IT Solutions" },
            { icon: <Landmark size={16} />, text: "Fintech Solutions" },
            { icon: <GraduationCap size={16} />, text: "Education Platforms" },
          ],
        },
      ]
      break

    case "marketing":
      columns = [
        {
          title: "Digital Marketing",
          items: [
            { icon: <Megaphone size={16} />, text: "Social Media Marketing" },
            { icon: <PieChart size={16} />, text: "SEO & SEM" },
            { icon: <Target size={16} />, text: "Targeted Ads Campaigns" },
          ],
        },
        {
          title: "Content & Branding",
          items: [
            { icon: <Briefcase size={16} />, text: "Brand Strategy" },
            { icon: <Megaphone size={16} />, text: "Content Marketing" },
            { icon: <PieChart size={16} />, text: "Email Marketing" },
          ],
        },
        {
          title: "Analytics & Optimization",
          items: [
            { icon: <Target size={16} />, text: "Marketing Analytics" },
            { icon: <Database size={16} />, text: "Conversion Optimization" },
          ],
        },
      ]
      break

    case "business":
      columns = [
        {
          title: "Consulting",
          items: [
            { icon: <Briefcase size={16} />, text: "Business Strategy" },
            { icon: <Target size={16} />, text: "Operations Consulting" },
          ],
        },
        {
          title: "Solutions",
          items: [
            { icon: <Database size={16} />, text: "Enterprise Solutions" },
            { icon: <Server size={16} />, text: "Cloud Integration" },
          ],
        },
        {
          title: "Support",
          items: [
            { icon: <Info size={16} />, text: "Customer Support" },
            { icon: <HeartPulse size={16} />, text: "HR & Payroll Systems" },
          ],
        },
      ]
      break

    case "about":
      columns = [
        {
          title: "Company",
          items: [
            { icon: <Info size={16} />, text: "About Us" },
            { icon: <Globe size={16} />, text: "Our Mission & Vision" },
            { icon: <Landmark size={16} />, text: "Industry Recognition" },
          ],
        },
        {
          title: "Team",
          items: [
            { icon: <Brain size={16} />, text: "Leadership" },
            { icon: <GraduationCap size={16} />, text: "Experts & Advisors" },
          ],
        },
        {
          title: "Careers",
          items: [
            { icon: <Briefcase size={16} />, text: "Open Positions" },
            { icon: <Target size={16} />, text: "Internship Programs" },
          ],
        },
      ]
      break
  }

  return (
    <div className="space-y-4">
      {columns.map((col, idx) => (
        <div key={idx}>
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{col.title}</h4>
          <div className="space-y-2">
            {col.items.map((item, i) => (
              <MobileMegaItem key={i} icon={item.icon} text={item.text} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

// 🔹 Mobile Mega Item Component
const MobileMegaItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <div className="flex items-center gap-3 text-gray-300 hover:text-white transition duration-200 cursor-pointer py-1.5">
      <div className="text-gray-400">{icon}</div>
      <span className="text-sm">{text}</span>
    </div>
  )
}

// 🔹 Mega Item Component (Desktop)
const MegaItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <div className="flex items-center gap-3 text-gray-300 hover:text-white hover:translate-x-1 transition duration-200 cursor-pointer">
      <div className="text-gray-400">{icon}</div>
      <span>{text}</span>
    </div>
  )
}

// 🔹 Mega Menu Component (Desktop)
const MegaMenu = ({ menuType }: { menuType: string }) => {
  let columns: { title: string; items: { icon: React.ReactNode; text: string }[] }[] = []

  switch (menuType) {
    case "services":
      columns = [
        {
          title: "AI & Technology",
          items: [
            { icon: <Cpu size={18} />, text: "AI Monitoring & Integration" },
            { icon: <Bot size={18} />, text: "AI Chatbot Development" },
            { icon: <Brain size={18} />, text: "Machine Learning" },
            { icon: <Blocks size={18} />, text: "Blockchain Solutions" },
            { icon: <Eye size={18} />, text: "Computer Vision" },
          ],
        },
        {
          title: "Development Services",
          items: [
            { icon: <Code2 size={18} />, text: "MERN Stack Development" },
            { icon: <Smartphone size={18} />, text: "Hybrid Mobile Apps" },
            { icon: <Database size={18} />, text: "Python / Django Stack" },
            { icon: <Server size={18} />, text: ".NET Development" },
            { icon: <Globe size={18} />, text: "Ruby on Rails" },
          ],
        },
        {
          title: "Industry Solutions",
          items: [
            { icon: <Globe size={18} />, text: "E-Commerce Solutions" },
            { icon: <HeartPulse size={18} />, text: "Healthcare IT Solutions" },
            { icon: <Landmark size={18} />, text: "Fintech Solutions" },
            { icon: <GraduationCap size={18} />, text: "Education Platforms" },
          ],
        },
      ]
      break

    case "marketing":
      columns = [
        {
          title: "Digital Marketing",
          items: [
            { icon: <Megaphone size={18} />, text: "Social Media Marketing" },
            { icon: <PieChart size={18} />, text: "SEO & SEM" },
            { icon: <Target size={18} />, text: "Targeted Ads Campaigns" },
          ],
        },
        {
          title: "Content & Branding",
          items: [
            { icon: <Briefcase size={18} />, text: "Brand Strategy" },
            { icon: <Megaphone size={18} />, text: "Content Marketing" },
            { icon: <PieChart size={18} />, text: "Email Marketing" },
          ],
        },
        {
          title: "Analytics & Optimization",
          items: [
            { icon: <Target size={18} />, text: "Marketing Analytics" },
            { icon: <Database size={18} />, text: "Conversion Optimization" },
          ],
        },
      ]
      break

    case "business":
      columns = [
        {
          title: "Consulting",
          items: [
            { icon: <Briefcase size={18} />, text: "Business Strategy" },
            { icon: <Target size={18} />, text: "Operations Consulting" },
          ],
        },
        {
          title: "Solutions",
          items: [
            { icon: <Database size={18} />, text: "Enterprise Solutions" },
            { icon: <Server size={18} />, text: "Cloud Integration" },
          ],
        },
        {
          title: "Support",
          items: [
            { icon: <Info size={18} />, text: "Customer Support" },
            { icon: <HeartPulse size={18} />, text: "HR & Payroll Systems" },
          ],
        },
      ]
      break

    case "about":
      columns = [
        {
          title: "Company",
          items: [
            { icon: <Info size={18} />, text: "About Us" },
            { icon: <Globe size={18} />, text: "Our Mission & Vision" },
            { icon: <Landmark size={18} />, text: "Industry Recognition" },
          ],
        },
        {
          title: "Team",
          items: [
            { icon: <Brain size={18} />, text: "Leadership" },
            { icon: <GraduationCap size={18} />, text: "Experts & Advisors" },
          ],
        },
        {
          title: "Careers",
          items: [
            { icon: <Briefcase size={18} />, text: "Open Positions" },
            { icon: <Target size={18} />, text: "Internship Programs" },
          ],
        },
      ]
      break
  }

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-6 z-50">
      <div className="w-[800px] xl:w-5xl bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 xl:p-10 shadow-2xl">
        <div className="grid grid-cols-3 gap-6 xl:gap-10">
          {columns.map((col, idx) => (
            <div key={idx}>
              <h3 className="text-base xl:text-lg font-semibold mb-4 xl:mb-6 text-white">{col.title}</h3>
              <div className="space-y-3 xl:space-y-4">
                {col.items.map((item, i) => (
                  <MegaItem key={i} icon={item.icon} text={item.text} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}