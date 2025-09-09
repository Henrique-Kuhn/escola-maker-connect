import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-maker.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section text-primary-foreground">
      <div className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm">Para Educadores Maker</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transforme Sua
            <span className="block text-accent">Sala de Aula</span>
            com Tecnologia
          </h1>
          
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-lg">
            Capacite-se para ensinar LEGO, micro:bit, Arduino e ESP32. 
            Cursos práticos desenvolvidos especialmente para professores.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <BookOpen className="w-5 h-5 mr-2" />
              Começar Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-primary-foreground hover:bg-white/10"
            >
              Ver Materiais Grátis
            </Button>
          </div>
          
          <div className="mt-8 grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
            <div>
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-primary-foreground/70">Professores</div>
            </div>
            <div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-primary-foreground/70">Projetos</div>
            </div>
            <div>
              <div className="text-2xl font-bold">4</div>
              <div className="text-sm text-primary-foreground/70">Tecnologias</div>
            </div>
          </div>
        </div>
        
        <div className="lg:justify-self-end">
          <img 
            src={heroImage} 
            alt="Professores e alunos trabalhando com tecnologias maker" 
            className="rounded-2xl shadow-2xl w-full max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;