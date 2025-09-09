import { Button } from "@/components/ui/button";
import { Blocks, Cpu, CircuitBoard, Wifi } from "lucide-react";

const TechCourses = () => {
  const courses = [
    {
      icon: <Blocks className="w-12 h-12 text-tech-lego" />,
      title: "LEGO Education",
      description: "Robótica educacional com LEGO SPIKE Prime, WeDo 2.0 e metodologias de aprendizagem criativa.",
      color: "tech-lego",
      topics: ["LEGO SPIKE Prime", "WeDo 2.0", "Programação Visual", "Projetos STEAM"]
    },
    {
      icon: <Cpu className="w-12 h-12 text-tech-microbit" />,
      title: "micro:bit",
      description: "Programação com micro:bit usando MakeCode e Python para projetos de IoT educacional.",
      color: "tech-microbit", 
      topics: ["MakeCode Editor", "MicroPython", "Sensores", "Comunicação Radio"]
    },
    {
      icon: <CircuitBoard className="w-12 h-12 text-tech-arduino" />,
      title: "Arduino",
      description: "Eletrônica e programação com Arduino para criar projetos interativos e automatizados.",
      color: "tech-arduino",
      topics: ["Arduino IDE", "Eletrônica Básica", "Sensores & Atuadores", "Projetos Práticos"]
    },
    {
      icon: <Wifi className="w-12 h-12 text-tech-esp32" />,
      title: "ESP32",
      description: "Desenvolvimento IoT com ESP32, WiFi, Bluetooth e integração com plataformas cloud.",
      color: "tech-esp32",
      topics: ["WiFi & Bluetooth", "IoT Cloud", "Sensores Avançados", "Aplicações Web"]
    }
  ];

  return (
    <section id="cursos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Nossos
            <span className="gradient-text"> Cursos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Domine as principais tecnologias maker com metodologia prática 
            desenvolvida especialmente para educadores.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="tech-card group">
              <div className="mb-6">
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `hsl(var(--${course.color}) / 0.1)` }}
                >
                  {course.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {course.description}
                </p>
              </div>
              
              <div className="space-y-2 mb-6">
                {course.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className="flex items-center text-xs">
                    <div 
                      className="w-1.5 h-1.5 rounded-full mr-2"
                      style={{ backgroundColor: `hsl(var(--${course.color}))` }}
                    />
                    {topic}
                  </div>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full group-hover:border-primary group-hover:text-primary"
              >
                Ver Curso
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90">
            Ver Todos os Cursos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechCourses;