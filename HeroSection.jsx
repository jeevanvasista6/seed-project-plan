import { Lock } from "lucide-react"
import LuxuryBadge from "./LuxuryBadge"

const HeroSection = () => {
  return (
    <section className="ql-hero-bg ql-hash-pattern ql-section">
      <div className="ql-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content - Institutional Authority */}
          <div className="space-y-8 ql-fade-in-up">
            <div className="ql-badge-orange mb-6">
              🔐 Zero-Knowledge Legal Compliance
            </div>
            
            <h1 className="ql-h1">
              Legal Compliance
              <br />
              <span className="text-quentlex-amber">Without the</span>
              <br />
              <span className="text-quentlex-amber">Documents</span>
            </h1>
            
            <p className="ql-body-large">
              Generate verifiable compliance badges for token launches, VC diligence, and DAO legal workflows — zero PDFs, zero oversharing.
            </p>
            
            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="ql-btn-primary ql-focus-visible">
                Request Badge Simulation →
              </button>
              <button className="ql-btn-secondary ql-focus-visible flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-current rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                </div>
                View Demo
              </button>
            </div>
            
            {/* Trust Signals */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 text-quentlex-green">
                <div className="w-4 h-4 rounded-full bg-quentlex-green/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-quentlex-green"></div>
                </div>
                <span>Auto-detect clause gaps</span>
              </div>
              <div className="flex items-center gap-2 text-quentlex-green">
                <div className="w-4 h-4 rounded-full bg-quentlex-green/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-quentlex-green"></div>
                </div>
                <span>ZK-proof verification</span>
              </div>
            </div>
          </div>
          
          {/* The ONE Luxury 3D Element - Interactive Badge */}
          <LuxuryBadge />
        </div>
      </div>
    </section>
  )
}

export default HeroSection

