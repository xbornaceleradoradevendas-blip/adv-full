import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ContrastSection from "@/components/ContrastSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LiaChatSection from "@/components/LiaChatSection";
import LiaSchedulingSection from "@/components/LiaSchedulingSection";
import KanbanSection from "@/components/KanbanSection";
import DashboardSection from "@/components/DashboardSection";
import {
  ConnectSection,
  SquadSection,
  ComplianceSection,
  ResultsSection,
  CTASection,
  FooterSection,
} from "@/components/AdditionalSections";

const Index = () => (
  <div className="min-h-screen selection:bg-primary selection:text-primary-foreground">
    <NavBar />
    <HeroSection />
    <ContrastSection />
    <ProblemSection />
    <SolutionSection />
    <HowItWorksSection />
    <LiaChatSection />
    <LiaSchedulingSection />
    <KanbanSection />
    <DashboardSection />
    <ConnectSection />
    <SquadSection />
    <ComplianceSection />
    <ResultsSection />
    <CTASection />
    <FooterSection />
  </div>
);

export default Index;
