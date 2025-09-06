import { Landmark, TrendingUp, Users, Crown, Star, Globe } from "lucide-react"

const TrustSection = ({id}) => {
  const trustCategories = [
    {
      icon: Landmark,
      title: "Accelerators",
      logos: ["Techstars", "Y Combinator", "500 Startups", "Plug and Play"],
      gradient: "from-quentlex-gold/20 to-quentlex-amber/10"
    },
    {
      icon: TrendingUp,
      title: "Exchanges", 
      logos: ["Coinbase", "Kraken", "Binance", "Gemini"],
      gradient: "from-quentlex-blue/20 to-quentlex-navy/10"
    },
    {
      icon: Users,
      title: "Investors",
      logos: ["Andreessen Horowitz", "Sequoia Capital", "Paradigm", "Coinbase Ventures"],
      gradient: "from-quentlex-green/20 to-quentlex-blue/10"
    }
  ]

  const advisors = [
    {
      name: "Dr. Patricia Williams",
      title: "Former SEC Commissioner",
      description: "20+ years in financial regulation and compliance oversight",
      gradient: "from-quentlex-gold/30 to-quentlex-amber/20",
      icon: Crown
    },
    {
      name: "James Chen",
      title: "Ex-Goldman Sachs MD",
      description: "Former head of digital assets compliance at major investment bank",
      gradient: "from-quentlex-blue/30 to-quentlex-navy/20",
      icon: Star
    },
    {
      name: "Dr. Sarah Martinez",
      title: "Former CFTC Director",
      description: "Leading expert in cryptocurrency derivatives and trading regulations",
      gradient: "from-quentlex-green/30 to-quentlex-blue/20",
      icon: Globe
    },
    {
      name: "Michael Thompson",
      title: "Ex-Coinbase Chief Legal",
      description: "Pioneer in digital asset regulatory strategy and institutional adoption",
      gradient: "from-quentlex-navy/30 to-quentlex-gold/20",
      icon: Crown
    }
  ]

  return (
    <section id={id} className="ql-section bg-luxury-gradient">
      <div className="ql-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-quentlex-gold/10 rounded-full border border-quentlex-gold/20 mb-6">
            <Crown className="w-5 h-5 text-quentlex-gold" />
            <span className="text-quentlex-gold font-semibold">Enterprise Grade</span>
          </div>
          
          <h2 className="ql-h2 mx-auto mb-6">
            Backed by those who matter
          </h2>
          <p className="ql-body-large mx-auto text-quentlex-warm">
            Institutional validation from the organizations that set industry standards
          </p>
        </div>
        
        {/* Trust Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {trustCategories.map((category, index) => (
            <div 
              key={index} 
              className="group ql-card hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden"
            >
              {/* Luxury background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 text-center">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 border-quentlex-gold/30`}>
                      <category.icon className="w-8 h-8 text-quentlex-gold group-hover:text-quentlex-dark transition-colors duration-300" />
                    </div>
                    
                    {/* Luxury glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-quentlex-gold/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 animate-pulse"></div>
                  </div>
                </div>
                
                <h3 className="ql-h3 mb-6 group-hover:text-quentlex-gold transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.logos.map((logo, logoIndex) => (
                    <div 
                      key={logoIndex} 
                      className="py-3 px-4 bg-quentlex-white/80 hover:bg-quentlex-gold/10 rounded-lg text-center transition-all duration-300 border border-quentlex-gold/20 group-hover:border-quentlex-gold/40"
                    >
                      <span className="font-medium text-quentlex-dark group-hover:text-quentlex-gold transition-colors duration-300">
                        {logo}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-shimmer-gradient opacity-0 group-hover:opacity-20 animate-shimmer pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Advisory Board with Scrolling */}
        <div className="relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-quentlex-navy/10 rounded-full border border-quentlex-navy/20 mb-4">
              <Star className="w-5 h-5 text-quentlex-navy" />
              <span className="text-quentlex-navy font-semibold">Advisory Board</span>
            </div>
            <h3 className="ql-h3 text-center">Industry Leaders & Regulators</h3>
          </div>

          {/* Scrolling Advisors Container */}
          <div className="relative overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-quentlex-white via-quentlex-white/80 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-quentlex-white via-quentlex-white/80 to-transparent z-10"></div>
            
            {/* Scrolling Container - Right Direction */}
            <div className="flex animate-scroll-right hover:pause">
              {/* First set of advisors */}
              {advisors.map((advisor, index) => (
                <div 
                  key={`first-${index}`}
                  className="flex-shrink-0 w-96 mx-4 group"
                >
                  <div className={`relative ql-card-elevated hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden bg-gradient-to-br ${advisor.gradient}`}>
                    {/* Premium border effect */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-navy-gradient"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-6 mb-4 pl-4">
                        <div className="relative">
                          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${advisor.gradient} border-2 border-quentlex-navy/30 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300`}>
                            <advisor.icon className="w-10 h-10 text-quentlex-navy group-hover:text-quentlex-gold transition-colors duration-300" />
                          </div>
                          
                          {/* Executive glow */}
                          <div className="absolute inset-0 rounded-2xl bg-quentlex-navy/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 animate-luxury-glow"></div>
                          
                          {/* VIP badge */}
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold-gradient rounded-full flex items-center justify-center border-2 border-quentlex-white shadow-lg">
                            <Crown className="w-4 h-4 text-quentlex-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-4">
                          <h4 className="font-bold text-xl text-quentlex-dark group-hover:text-quentlex-navy transition-colors duration-300">
                            {advisor.name}
                          </h4>
                          <p className="font-semibold text-quentlex-navy mb-2 group-hover:text-quentlex-gold transition-colors duration-300">
                            {advisor.title}
                          </p>
                          <p className="text-sm text-quentlex-warm group-hover:text-quentlex-charcoal transition-colors duration-300">
                            {advisor.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-shimmer-gradient opacity-0 group-hover:opacity-30 animate-shimmer pointer-events-none"></div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {advisors.map((advisor, index) => (
                <div 
                  key={`second-${index}`}
                  className="flex-shrink-0 w-96 mx-4 group"
                >
                  <div className={`relative ql-card-elevated hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden bg-gradient-to-br ${advisor.gradient}`}>
                    {/* Premium border effect */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-navy-gradient"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-6 mb-4 pl-4">
                        <div className="relative">
                          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${advisor.gradient} border-2 border-quentlex-navy/30 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300`}>
                            <advisor.icon className="w-10 h-10 text-quentlex-navy group-hover:text-quentlex-gold transition-colors duration-300" />
                          </div>
                          
                          {/* Executive glow */}
                          <div className="absolute inset-0 rounded-2xl bg-quentlex-navy/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 animate-luxury-glow"></div>
                          
                          {/* VIP badge */}
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold-gradient rounded-full flex items-center justify-center border-2 border-quentlex-white shadow-lg">
                            <Crown className="w-4 h-4 text-quentlex-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-4">
                          <h4 className="font-bold text-xl text-quentlex-dark group-hover:text-quentlex-navy transition-colors duration-300">
                            {advisor.name}
                          </h4>
                          <p className="font-semibold text-quentlex-navy mb-2 group-hover:text-quentlex-gold transition-colors duration-300">
                            {advisor.title}
                          </p>
                          <p className="text-sm text-quentlex-warm group-hover:text-quentlex-charcoal transition-colors duration-300">
                            {advisor.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-shimmer-gradient opacity-0 group-hover:opacity-30 animate-shimmer pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Enhanced Legal Disclaimer */}
        <div className="text-center mt-12">
          <div className="inline-block p-6 bg-quentlex-white/50 border border-quentlex-gold/20 rounded-xl backdrop-blur-sm">
            <p className="text-sm text-quentlex-warm">
              Logos represent LOIs or partnerships in progress where noted. Advisory relationships confirmed through signed agreements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSection

