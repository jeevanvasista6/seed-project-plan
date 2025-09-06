import { Zap, AlertOctagon, TrendingDown, ArrowUpCircle, Shield, Sparkles } from "lucide-react"

const ProblemSection = ({id}) => {
  const problems = [
    {
      icon: Zap,
      title: "Founders drown in PDFs and shifting rules",
      description: "Compliance requirements change constantly, leaving teams scrambling through hundreds of documents without clear guidance.",
      gradient: "from-quentlex-amber/20 to-quentlex-gold/10"
    },
    {
      icon: AlertOctagon,
      title: "Regulators and exchanges cannot rely on self-reported claims",
      description: "Current compliance reporting lacks verification, creating risk for gatekeepers who must trust unsubstantiated assertions.",
      gradient: "from-red-400/20 to-quentlex-amber/10"
    },
    {
      icon: TrendingDown,
      title: "Legal fees burn months of runway without clarity",
      description: "Traditional compliance reviews cost $50k+ and take 6+ weeks, with no guarantee of regulatory acceptance.",
      gradient: "from-quentlex-navy/20 to-quentlex-dark/10"
    }
  ]

  return (
    <section id={id} className="ql-section bg-luxury-gradient">
      <div className="ql-container">
        <div className="text-center mb-16 ql-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-quentlex-gold/10 rounded-full border border-quentlex-gold/20 mb-6">
            <AlertOctagon className="w-5 h-5 text-quentlex-gold" />
            <span className="text-quentlex-gold font-semibold">Critical Issues</span>
          </div>
          
          <h2 className="ql-h2 mx-auto mb-6">
            Compliance today is broken
          </h2>
          <p className="ql-body-large mx-auto text-quentlex-warm">
            The current system fails founders, regulators, and exchanges alike
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="group ql-card hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden"
            >
              {/* Luxury background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 text-center">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${problem.gradient} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                      <problem.icon className="w-8 h-8 text-quentlex-dark group-hover:text-quentlex-gold transition-colors duration-300" />
                    </div>
                    
                    {/* Luxury glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-quentlex-gold/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 animate-pulse"></div>
                  </div>
                </div>
                
                <h3 className="ql-h3 mb-4 group-hover:text-quentlex-dark transition-colors duration-300">
                  {problem.title}
                </h3>
                
                <p className="ql-body text-quentlex-warm group-hover:text-quentlex-charcoal transition-colors duration-300">
                  {problem.description}
                </p>

                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-shimmer-gradient opacity-0 group-hover:opacity-20 animate-shimmer pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Visual Comparison */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Before - Chaos */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-quentlex-amber/5 rounded-2xl blur-xl opacity-50"></div>
            
            <div className="relative ql-card bg-gradient-to-br from-quentlex-white to-red-50/30 border-2 border-red-200/20">
              <div className="flex items-center gap-3 mb-6">
                <TrendingDown className="w-6 h-6 text-red-500" />
                <h4 className="ql-h3 text-red-600">Current State</h4>
              </div>
              
              <div className="space-y-4">
                {[
                  "Scattered PDF documents",
                  "Unverifiable claims", 
                  "6+ week review cycles",
                  "$50k+ legal fees"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-300">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="ql-body text-sm text-quentlex-charcoal">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* After - Clarity */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-quentlex-gold/20 to-quentlex-green/10 rounded-2xl blur-xl opacity-50 animate-luxury-glow"></div>
            
            <div className="relative ql-card bg-gradient-to-br from-quentlex-white to-quentlex-gold/5 border-2 border-quentlex-gold/30">
              <div className="flex items-center gap-3 mb-6">
                <ArrowUpCircle className="w-6 h-6 text-quentlex-green animate-float" />
                <h4 className="ql-h3 text-quentlex-gold">With Quentlex</h4>
                <Sparkles className="w-5 h-5 text-quentlex-gold animate-pulse" />
              </div>
              
              <div className="space-y-4">
                {[
                  "Single compliance snapshot",
                  "Cryptographically verified",
                  "48-hour turnaround", 
                  "60% cost reduction"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-300">
                    <div className="w-3 h-3 bg-quentlex-green rounded-full shadow-lg animate-luxury-glow"></div>
                    <span className="ql-body text-sm font-medium text-quentlex-dark">{item}</span>
                  </div>
                ))}
              </div>

              {/* Premium shine effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient rounded-t-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection

