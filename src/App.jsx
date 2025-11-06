import { useState, useEffect, useRef } from 'react';

import './App.css'
import { 
  Header,
  Footer,
  HeroSection,
  ProblemSolutionSection,
  PlanCreationSection,
  CommunitySection,
  CoreFeaturesSection,
  HowItWorksSection,
  BuiltForSection,
  ComplianceSection,
  PricingSection,
  FAQSection,
  CTASection,
} from './components';

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If hero is NOT visible, show the header
        setShowHeader(!entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 30% of the hero is visible
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header isVisible={showHeader} />
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <ProblemSolutionSection />
      <PlanCreationSection />
      <CommunitySection />
      <CoreFeaturesSection />
      <HowItWorksSection />
      <BuiltForSection />
      <ComplianceSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;