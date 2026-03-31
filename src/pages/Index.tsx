import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ContrastSection from "@/components/ContrastSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LiaChatSection from "@/components/LiaChatSection";
import LiaSchedulingSection from "@/components/LiaSchedulingSection";
import ZapSignAdvBoxSection from "@/components/ZapSignAdvBoxSection";
import PostContractSection from "@/components/PostContractSection";
import KanbanSection from "@/components/KanbanSection";
import DashboardSection from "@/components/DashboardSection";
import ComparisonTableSection from "@/components/ComparisonTableSection";
import AppShowcaseSection from "@/components/AppShowcaseSection";
import {
  ConnectSection,
  SquadSection,
  ComplianceSection,
  ResultsSection,
  CTASection,
  FooterSection,
} from "@/components/AdditionalSections";

const Index = () => (
  <div className="min-h-screen w-full max-w-full min-w-0 overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
    <NavBar />
    <HeroSection />
    <ContrastSection />
    <ProblemSection />
    <SolutionSection />
    <HowItWorksSection />
    <LiaChatSection />
    <LiaSchedulingSection />
    <ZapSignAdvBoxSection />
    <PostContractSection />
    <KanbanSection />
    <DashboardSection />
    <ConnectSection />
    <ComparisonTableSection />
    <AppShowcaseSection />
    <SquadSection />
    <ComplianceSection />
    <ResultsSection />
    <CTASection />
    <FooterSection />
  </div>
);

export default Index;
