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
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
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