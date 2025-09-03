import { GraduationCap, Scale, Award } from "lucide-react"

const ReviewerSection = () => {
  const reviewers = [
    {
      name: "Sarah Chen, Esq.",
      license: "NY Bar #1234567",
      jurisdiction: "US Securities Law",
      initials: "SC",
      specialty: "Digital Assets",
      gradient: "from-quentlex-gold/20 to-quentlex-blue/10"
    },
    {
      name: "Michael Rodriguez, Esq.",
      license: "CA Bar #7654321", 
      jurisdiction: "US Corporate Law",
      initials: "MR",
      specialty: "Fintech Compliance",
      gradient: "from-quentlex-blue/20 to-quentlex-green/10"
    },
    {
      name: "Dr. Emma Thompson, QC",
      license: "UK Solicitor #9876543",
      jurisdiction: "UK Financial Services",
      initials: "ET",
      specialty: "Cross-border Regulation",
      gradient: "from-quentlex-green/20 to-quentlex-gold/10"
    },
    {
      name: "James Liu, Partner",
      license: "Singapore Bar #1111222",
      jurisdiction: "APAC Securities",
      initials: "JL",
      specialty: "Crypto Regulation",
      gradient: "from-quentlex-navy/20 to-quentlex-blue/10"
    },
    {
      name: "Dr. Amanda Foster, JD",
      license: "TX Bar #3333444",
      jurisdiction: "US Banking Law",
      initials: "AF",
      specialty: "DeFi Protocols",
      gradient: "from-quentlex-amber/20 to-quentlex-gold/10"
    },
    {
      name: "Robert Kim, Senior Counsel",
      license: "Korea Bar #5555666",
      jurisdiction: "Korean FSC",
      initials: "RK",
      specialty: "Digital Assets",
      gradient: "from-quentlex-blue/20 to-quentlex-navy/10"
    }
  ]

  return (
    <section className="ql-section bg-luxury-gradient">
      <div className="ql-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-quentlex-gold/10 rounded-full border border-quentlex-gold/20 mb-6">
            <Scale className="w-5 h-5 text-quentlex-gold" />
            <span className="text-quentlex-gold font-semibold">Harvey Grade</span>
          </div>
          
          <h2 className="ql-h2 mx-auto mb-6">
            Reviewed by world-class legal minds
          </h2>
          <p className="ql-body-large text-quentlex-warm max-w-3xl mx-auto">
            All reviewers are verified licensed attorneys in their respective jurisdictions. Each review includes full attorney identification and digital signature for complete accountability.
          </p>
        </div>

        {/* Scrolling Reviewers Container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for scrolling effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-quentlex-white via-quentlex-white/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-quentlex-white via-quentlex-white/80 to-transparent z-10"></div>
          
          {/* Scrolling Container */}
          <div className="flex animate-scroll-left hover:pause">
            {/* First set of reviewers */}
            {reviewers.map((reviewer, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 w-80 mx-4 group"
              >
                <div className={`relative ql-card hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden bg-gradient-to-br ${reviewer.gradient}`}>
                  {/* Premium border effect */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${reviewer.gradient} border-2 border-quentlex-gold/30 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                          <GraduationCap className="w-8 h-8 text-quentlex-gold" />
                        </div>
                        
                        {/* Luxury glow */}
                        <div className="absolute inset-0 rounded-xl bg-quentlex-gold/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 animate-pulse"></div>
                        
                        {/* Verification badge */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-quentlex-green rounded-full flex items-center justify-center border-2 border-quentlex-white shadow-lg">
                          <Award className="w-3 h-3 text-quentlex-white" />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-lg text-quentlex-dark group-hover:text-quentlex-gold transition-colors duration-300">
                          {reviewer.name}
                        </h3>
                        <p className="text-sm font-semibold text-quentlex-gold">
                          {reviewer.specialty}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-quentlex-gold rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-quentlex-dark">
                          License: {reviewer.license}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-quentlex-blue rounded-full animate-pulse"></div>
                        <span className="text-sm text-quentlex-warm">
                          Jurisdiction: {reviewer.jurisdiction}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 bg-shimmer-gradient opacity-0 group-hover:opacity-20 animate-shimmer pointer-events-none"></div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {reviewers.map((reviewer, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 w-80 mx-4 group"
              >
                <div className={`relative ql-card hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden bg-gradient-to-br ${reviewer.gradient}`}>
                  {/* Premium border effect */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${reviewer.gradient} border-2 border-quentlex-gold/30 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                          <GraduationCap className="w-8 h-8 text-quentlex-gold" />
                        </div>
                        
                        {/* Luxury glow */}
                        <div className="absolute inset-0 rounded-xl bg-quentlex-gold/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 animate-pulse"></div>
                        
                        {/* Verification badge */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-quentlex-green rounded-full flex items-center justify-center border-2 border-quentlex-white shadow-lg">
                          <Award className="w-3 h-3 text-quentlex-white" />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-lg text-quentlex-dark group-hover:text-quentlex-gold transition-colors duration-300">
                          {reviewer.name}
                        </h3>
                        <p className="text-sm font-semibold text-quentlex-gold">
                          {reviewer.specialty}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-quentlex-gold rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-quentlex-dark">
                          License: {reviewer.license}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-quentlex-blue rounded-full animate-pulse"></div>
                        <span className="text-sm text-quentlex-warm">
                          Jurisdiction: {reviewer.jurisdiction}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Shimmer effect on hover */}
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

export default ReviewerSection