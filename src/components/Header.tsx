import { Button } from "@/components/ui/button";
import { BookOpen, Github } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card/80 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">EM</span>
          </div>
          <span className="text-xl font-bold gradient-text">Escola Maker</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#cursos" className="text-muted-foreground hover:text-primary transition-colors">
            Cursos
          </a>
          <a href="#publico" className="text-muted-foreground hover:text-primary transition-colors">
            Para Professores
          </a>
          <a href="#materiais" className="text-muted-foreground hover:text-primary transition-colors">
            Materiais
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Github className="w-4 h-4 mr-2" />
            Repositório
          </Button>
          <Button size="sm">
            <BookOpen className="w-4 h-4 mr-2" />
            Inscrever-se
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;