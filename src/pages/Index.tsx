import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TargetAudience from "@/components/TargetAudience";
import TechCourses from "@/components/TechCourses";
import Materials from "@/components/Materials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TargetAudience />
        <TechCourses />
        <Materials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
