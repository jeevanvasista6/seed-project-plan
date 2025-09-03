import { Crown, Gavel, DiamondIcon, CheckCircle2, ArrowRight, Sparkles } from "lucide-react"

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: Crown,
      title: "Founder Input",
      subtitle: "Guided Excellence", 
      description: "Complete structured workflows based on regulatory frameworks for your jurisdiction and business model.",
      gradient: "from-quentlex-gold/20 to-quentlex-amber/10",
      accent: "quentlex-gold"
    },
    {
      number: "02", 
      icon: Gavel,
      title: "Lawyer Review",
      subtitle: "Named and Licensed",
      description: "Licensed attorneys review your submission, attach their professional credentials, and provide detailed analysis.",
      gradient: "from-quentlex-blue/20 to-quentlex-navy/10", 
      accent: "quentlex-blue"
    },
    {
      number: "03",
      icon: DiamondIcon,
      title: "Snapshot",
      subtitle: "Pass, Conditional, or Fail with Score",
      description: "Receive a comprehensive compliance snapshot with clear scoring and specific recommendations for improvement.",
      gradient: "from-quentlex-green/20 to-quentlex-blue/10",
      accent: "quentlex-green"
    },
    {
      number: "04",
      icon: CheckCircle2,
      title: "Verify",
      subtitle: "One Click with On-Chain Proof", 
      description: "Share cryptographically verifiable snapshots with regulators, exchanges, or investors instantly.",
      gradient: "from-quentlex-navy/20 to-quentlex-gold/10",
      accent: "quentlex-navy"
    }
  ]

  return (
    <section className="ql-section bg-luxury-gradient">
      <div className="ql-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-quentlex-gold/10 rounded-full border border-quentlex-gold/20 mb-6">
            <Sparkles className="w-5 h-5 text-quentlex-gold" />
            <span className="text-quentlex-gold font-semibold">Enterprise Process</span>
          </div>
          
          <h2 className="ql-h2 mx-auto mb-6">
            From founder to gatekeeper, without the chaos
          </h2>
          <p className="ql-body-large mx-auto text-quentlex-warm">
            A clear, linear process that reduces complexity and builds trust
          </p>
        </div>
        
        {/* Process Flow */}
        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="flex items-start justify-between mb-8 relative">
              {/* Connecting line */}
              <div className="absolute top-16 left-20 right-20 h-1 bg-gradient-to-r from-quentlex-gold via-quentlex-blue to-quentlex-green opacity-30"></div>
              
              {steps.map((step, index) => (
                <div key={index} className="flex items-center group">
                  {/* Step */}
                  <div className="text-center relative z-10">
                    <div className="relative mb-4 mx-auto">
                      <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.gradient} border-2 border-quentlex-gold/30 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110`}>
                        <step.icon className={`w-12 h-12 text-${step.accent} group-hover:text-quentlex-gold transition-colors duration-300`} />
                      </div>
                      
                      {/* Premium glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-quentlex-gold/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 animate-luxury-glow"></div>
                      
                      {/* Step number badge */}
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-gold-gradient rounded-full flex items-center justify-center border-2 border-quentlex-white shadow-lg">
                        <span className="text-xs font-bold text-quentlex-white">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="ql-h3 mb-2 group-hover:text-quentlex-gold transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className={`text-sm font-semibold text-${step.accent} mb-4 group-hover:text-quentlex-gold transition-colors duration-300`}>
                      {step.subtitle}
                    </p>
                    <p className="ql-body text-sm max-w-xs text-quentlex-warm group-hover:text-quentlex-charcoal transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Luxury Arrow */}
                  {index < steps.length - 1 && (
                    <div className="mx-8 mt-[-20px] relative z-0">
                      <div className="flex items-center">
                        <ArrowRight className="w-8 h-8 text-quentlex-gold opacity-60 animate-float" />
                        <div className="ml-2 flex space-x-1">
                          {[0, 1, 2].map((dot) => (
                            <div 
                              key={dot}
                              className="w-2 h-2 bg-quentlex-gold/40 rounded-full animate-pulse"
                              style={{ animationDelay: `${dot * 0.2}s` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Flow */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="group">
                <div className={`ql-card bg-gradient-to-br ${step.gradient} hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden`}>
                  {/* Premium border */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient"></div>
                  
                  <div className="flex gap-6 relative z-10">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} border-2 border-quentlex-gold/30 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                          <step.icon className={`w-8 h-8 text-${step.accent} group-hover:text-quentlex-gold transition-colors duration-300`} />
                        </div>
                        
                        {/* Step number badge */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold-gradient rounded-full flex items-center justify-center border-2 border-quentlex-white shadow-lg">
                          <span className="text-xs font-bold text-quentlex-white">
                            {step.number}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="ql-h3 mb-2 group-hover:text-quentlex-gold transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className={`text-sm font-semibold text-${step.accent} mb-3 group-hover:text-quentlex-gold transition-colors duration-300`}>
                        {step.subtitle}
                      </p>
                      <p className="ql-body text-quentlex-warm group-hover:text-quentlex-charcoal transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-shimmer-gradient opacity-0 group-hover:opacity-20 animate-shimmer pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection

