//project to chnage
import QuentlexLogo from "./src/components/ui/QuentlexLogo";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <header className="sticky top-0 z-50 bg-quentlex-white/80 backdrop-blur-xl border-b border-quentlex-gold/10 shadow-lg">
      {/* Luxury shimmer effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-shimmer-gradient opacity-30 animate-shimmer"></div>
      </div>
      
      <div className="ql-container relative z-10">
        <div className="flex justify-between items-center py-4">
          {/* Enhanced Logo with glow effect */}
          <div className="flex items-center group">
            <div className="flex items-center space-x-4 p-2 rounded-xl bg-quentlex-white/50 hover:bg-quentlex-gold/5 transition-all duration-300 hover:shadow-lg hover:scale-105">
              <div className="relative">
                <QuentlexLogo size="header" showText={true} />
                <div className="absolute inset-0 rounded-full bg-quentlex-gold/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Navigation */}
          <nav className="hidden md:flex relative">
            <ul className="flex space-x-2 bg-quentlex-white/30 rounded-2xl backdrop-blur-sm p-2 border border-quentlex-gold/20">
              {[
                { href: "#problem", label: "Problem", icon: "⚡" },
                { href: "#solutions", label: "Solutions", icon: "🔧" },
                { href: "#compliance", label: "Compliance", icon: "✓" },
                { href: "#backed-by", label: "Backed By", icon: "🏛️" }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="group relative px-6 py-3 rounded-xl text-quentlex-warm hover:text-quentlex-dark transition-all duration-300 flex items-center gap-2 hover:bg-quentlex-white/80"
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                    
                    {/* Luxury hover indicator */}
                    {hoveredItem === index && (
                      <div className="absolute inset-0 bg-gold-gradient opacity-10 rounded-xl animate-luxury-glow"></div>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Enhanced CTA Button */}
          <div className="hidden md:block">
            <button className="group relative overflow-hidden px-8 py-4 bg-navy-gradient text-quentlex-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-quentlex-gold/30">
              <div className="relative z-10 flex items-center gap-2">
                <span>Book a Demo</span>
                <div className="w-2 h-2 bg-quentlex-gold rounded-full animate-pulse"></div>
              </div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-shimmer-gradient opacity-0 group-hover:opacity-60 animate-shimmer"></div>
              
              {/* Gold accent border */}
              <div className="absolute inset-0 rounded-xl border border-quentlex-gold/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg bg-quentlex-white/50 hover:bg-quentlex-gold/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-quentlex-dark" />
            ) : (
              <Menu className="w-6 h-6 text-quentlex-dark" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-quentlex-white/95 backdrop-blur-xl border-b border-quentlex-gold/20 shadow-2xl">
            <div className="px-4 py-6 space-y-4">
              {[
                { href: "#problem", label: "Problem" },
                { href: "#solutions", label: "Solutions" },
                { href: "#compliance", label: "Compliance" },
                { href: "#backed-by", label: "Backed By" }
              ].map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="block px-4 py-3 text-quentlex-warm hover:text-quentlex-dark hover:bg-quentlex-gold/10 rounded-lg transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              <button className="w-full mt-4 px-6 py-4 bg-navy-gradient text-quentlex-white font-semibold rounded-xl shadow-lg">
                Book a Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

