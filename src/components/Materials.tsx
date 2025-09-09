import { Button } from "@/components/ui/button";
import { Github, Download, FileText, Video, BookOpen } from "lucide-react";

const Materials = () => {
  const resources = [
    {
      icon: <Github className="w-6 h-6" />,
      title: "Repositório GitHub",
      description: "Códigos, projetos e exemplos práticos de todos os cursos",
      action: "Acessar Repositório",
      highlight: true
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Apostilas PDF",
      description: "Material didático completo para download gratuito",
      action: "Download PDFs"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Vídeo Aulas",
      description: "Tutoriais em vídeo com passo a passo detalhado",
      action: "Ver Vídeos"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Recursos Extras",
      description: "Templates, bibliotecas e ferramentas complementares",
      action: "Baixar Recursos"
    }
  ];

  return (
    <section id="materiais" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Materiais e
            <span className="gradient-text"> Repositório</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Acesse nossa biblioteca completa de recursos educacionais e 
            repositório open-source com todos os projetos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => (
            <div 
              key={index} 
              className={`tech-card text-center ${resource.highlight ? 'ring-2 ring-primary/20' : ''}`}
            >
              <div className="mb-4 flex justify-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {resource.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {resource.description}
              </p>
              <Button 
                variant={resource.highlight ? "default" : "outline"} 
                size="sm" 
                className="w-full"
              >
                {resource.action}
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 text-center border">
          <BookOpen className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Acesso Completo aos Materiais</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Todos os nossos cursos incluem acesso vitalício aos materiais, 
            repositório GitHub e atualizações constantes de conteúdo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Github className="w-5 h-5 mr-2" />
              Acessar Repositório
            </Button>
            <Button size="lg" variant="outline">
              <Download className="w-5 h-5 mr-2" />
              Download Materiais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;