import { GraduationCap, Users, Target, Lightbulb } from "lucide-react";

const TargetAudience = () => {
  const audiences = [
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "Professores de Tecnologia",
      description: "Educadores que querem implementar projetos maker em suas aulas e precisam de capacitação prática."
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Coordenadores Pedagógicos",
      description: "Profissionais que desejam estruturar currículos de robótica e programação nas escolas."
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Educadores STEAM",
      description: "Professores focados em metodologias ativas e aprendizagem baseada em projetos."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-tech-arduino" />,
      title: "Iniciantes em Maker",
      description: "Profissionais da educação que querem começar do zero no mundo maker e robótica educacional."
    }
  ];

  return (
    <section id="publico" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Desenvolvido Para
            <span className="gradient-text block mt-2">Educadores Como Você</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nossa plataforma foi criada especificamente para atender às necessidades 
            de professores que querem revolucionar o ensino com tecnologia.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="tech-card text-center group">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {audience.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3">{audience.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;