import { useState } from "react"

const LuxuryBadge = () => {
  const [isHovered, setIsHovered] = useState(false)


  return (
    <div className="flex justify-center lg:justify-end">
      <div 
        className="verification-demo-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Clean Verification Flow Visualization */}
        <div className="verification-flow-card">
          {/* Header with Verification Badge */}
          <div className="verification-header">
            <div className="verification-badge">
              <div className="w-3 h-3 bg-quentlex-green rounded-full"></div>
              <span>Verifiable Proof</span>
            </div>
          </div>
          
          {/* Process Flow */}
          <div className="process-flow">
            {/* Step 1 */}
            <div className="process-step">
              <div className="step-icon bg-quentlex-green/10 text-quentlex-green">
                <div className="w-6 h-6 rounded-md bg-quentlex-green/20 flex items-center justify-center">
                  📄
                </div>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="process-arrow">→</div>
            
            {/* Step 2 */}
            <div className="process-step">
              <div className="step-icon bg-quentlex-blue/10 text-quentlex-blue">
                <div className="w-6 h-6 rounded-md bg-quentlex-blue/20 flex items-center justify-center">
                  ⚙️
                </div>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="process-arrow">→</div>
            
            {/* Step 3 */}
            <div className="process-step">
              <div className="step-icon bg-quentlex-green/10 text-quentlex-green">
                <div className="w-6 h-6 rounded-md bg-quentlex-green/20 flex items-center justify-center">
                  ✓
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Badge */}
          <div className="bottom-badges">
            <div className="security-badge">
              <div className="w-2 h-2 bg-quentlex-amber rounded-full animate-pulse"></div>
              <span>Zero Data Leakage</span>
            </div>
            <div className="enterprise-badge">
              Enterprise Process
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .verification-demo-container {
          max-width: 400px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .verification-demo-container:hover {
          transform: translateY(-4px);
        }
        
        .verification-flow-card {
          background: 
            linear-gradient(135deg, #FFFFFF 0%, #FCFCFC 100%);
          border: 1px solid rgba(181, 134, 59, 0.1);
          border-radius: 24px;
          padding: 32px 28px;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.04),
            0 4px 16px rgba(0, 0, 0, 0.02),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .verification-flow-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(16, 185, 129, 0.3) 30%, 
            rgba(245, 158, 11, 0.3) 70%, 
            transparent 100%);
        }
        
        .verification-demo-container:hover .verification-flow-card {
          box-shadow: 
            0 12px 48px rgba(0, 0, 0, 0.08),
            0 6px 24px rgba(0, 0, 0, 0.04),
            inset 0 1px 0 rgba(255, 255, 255, 0.95);
          border-color: rgba(181, 134, 59, 0.2);
        }
        
        .verification-header {
          display: flex;
          justify-content: center;
          margin-bottom: 28px;
        }
        
        .verification-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(16, 185, 129, 0.08);
          color: #10B981;
          padding: 8px 16px;
          border-radius: 24px;
          font-size: 14px;
          font-weight: 600;
          border: 1px solid rgba(16, 185, 129, 0.15);
        }
        
        .process-flow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 28px;
        }
        
        .process-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        
        .step-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          transition: all 0.3s ease;
        }
        
        .process-arrow {
          color: #6B7280;
          font-size: 18px;
          font-weight: 600;
          margin: 0 4px;
        }
        
        .bottom-badges {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }
        
        .security-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(245, 158, 11, 0.08);
          color: #F59E0B;
          padding: 6px 12px;
          border-radius: 16px;
          font-size: 12px;
          font-weight: 600;
          border: 1px solid rgba(245, 158, 11, 0.15);
        }
        
        .enterprise-badge {
          background: rgba(107, 114, 128, 0.08);
          color: #6B7280;
          padding: 6px 12px;
          border-radius: 16px;
          font-size: 12px;
          font-weight: 600;
          border: 1px solid rgba(107, 114, 128, 0.15);
        }
        
        @media (max-width: 768px) {
          .verification-demo-container {
            max-width: 320px;
          }
          
          .verification-flow-card {
            padding: 24px 20px;
          }
          
          .process-flow {
            gap: 12px;
          }
          
          .step-icon {
            width: 40px;
            height: 40px;
          }
          
          .process-arrow {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  )
}

export default LuxuryBadge

