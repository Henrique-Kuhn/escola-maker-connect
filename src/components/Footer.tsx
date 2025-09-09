import { Button } from "@/components/ui/button";
import { Mail, Github, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">EM</span>
              </div>
              <span className="text-lg font-bold gradient-text">Escola Maker</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Capacitando professores para o ensino de tecnologias maker 
              com metodologia prática e inovadora.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Youtube className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Cursos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">LEGO Education</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">micro:bit</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Arduino</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">ESP32</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Recursos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Repositório GitHub</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Materiais PDF</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Vídeo Aulas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Comunidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contato</h4>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Tem dúvidas? Entre em contato conosco!
              </p>
              <Button size="sm" className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Escola Maker. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;