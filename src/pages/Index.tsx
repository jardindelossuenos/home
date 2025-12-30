import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import VideoSection from "@/components/VideoSection";
import {
  Leaf,
  Heart,
  Users,
  Mail,
  Phone,
  MapPin,
  Compass,
  Sprout,
  TreePine,
  Recycle,
  Lightbulb,
  Home,
  Link,
  Ear,
  ShieldCheck,
  Palette,
  Smile,
  Gift,
} from "lucide-react";
import logo from "@/assets/logo.png";
// import heroBg from "@/assets/logo.png";
import oldTree from "@/assets/arbol_viejo.jpeg";
import walking from "@/assets/paseando.jpg";
import LocalVideoSection from "@/components/LocalVideoSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Jardín de los Sueños - Jardín escuela"
              className="h-12 w-12"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">
                Jardín de los Sueños
              </h1>
              <p className="text-xs text-muted-foreground">Jardín escuela</p>
            </div>
          </div>
          <a href="mailto:eljds2020@gmail.com?subject=Consulta%20-%20Jardín%20de%20los%20Sueños">
            <Button className="bg-primary hover:bg-primary/90">
              CONTÁCTANOS
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          // style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-muted-foreground text-balance">
              Jardín Escuela
            </h2>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-muted-foreground text-balance">
              JARDÍN DE LOS SUEÑOS
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
              ESPACIO DE EDUCACIÓN CONSCIENTE EN LA NATURALEZA EN YECLA
            </p>
          </div>
        </div>
      </section>

      {/* Nuestros valores Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <img
                src={oldTree}
                alt="Arbol viejo"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                Nuestros valores
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                En el Jardín de los Sueños consideramos la familia como el punto
                de partida para favorecer el desarrollo integral del niño, el
                juego creativo y experiencias de aprendizaje consciente.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                La familia está presente y se implica en los procesos de
                aprendizaje. Creemos que los niños prosperan cuando están
                conectados con la naturaleza. Nuestro enfoque de educación
                consciente nutre al niño en su totalidad (mente, cuerpo y
                espíritu) a través de la exploración al aire libre, el juego
                creativo y experiencias de aprendizaje consciente.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 pt-4">
                <Card className="p-6 text-center space-y-2 border-primary/20 hover:border-primary/40 transition-colors">
                  <Home className="w-8 h-8 mx-auto text-primary" />
                  <h3 className="font-semibold">Familia</h3>
                  <p className="text-sm text-muted-foreground">
                    Juntos para crecer
                  </p>
                </Card>
                <Card className="p-6 text-center space-y-2 border-secondary/20 hover:border-secondary/40 transition-colors">
                  <Link className="w-8 h-8 mx-auto text-secondary" />
                  <h3 className="font-semibold">Conexión</h3>
                  <p className="text-sm text-muted-foreground">
                    Ayudamos al niño a conectar consigo mismo
                  </p>
                </Card>
                <Card className="p-6 text-center space-y-2 border-accent/20 hover:border-accent/40 transition-colors">
                  <Users className="w-8 h-8 mx-auto text-accent" />
                  <h3 className="font-semibold">Comunidad</h3>
                  <p className="text-sm text-muted-foreground">
                    Acompañado de una tribu
                  </p>
                </Card>
                <Card className="p-6 text-center space-y-2 border-primary/20 hover:border-primary/40 transition-colors">
                  <Ear className="w-8 h-8 mx-auto text-primary" />
                  <h3 className="font-semibold">Respeto</h3>
                  <p className="text-sm text-muted-foreground">
                    Sintiéndose escuchado
                  </p>
                </Card>
                <Card className="p-6 text-center space-y-2 border-secondary/20 hover:border-secondary/40 transition-colors">
                  <Lightbulb className="w-8 h-8 mx-auto text-secondary" />
                  <h3 className="font-semibold">Curiosidad</h3>
                  <p className="text-sm text-muted-foreground">
                    Potenciamos su habilidad de expresar su curiosidad
                  </p>
                </Card>
                <Card className="p-6 text-center space-y-2 border-accent/20 hover:border-accent/40 transition-colors">
                  <ShieldCheck className="w-8 h-8 mx-auto text-accent" />
                  <h3 className="font-semibold">Confianza</h3>
                  <p className="text-sm text-muted-foreground">
                    Confiamos en la vida como un aprendizaje
                  </p>
                </Card>
                <Card className="p-6 text-center space-y-2 border-primary/20 hover:border-primary/40 transition-colors">
                  <Palette className="w-8 h-8 mx-auto text-primary" />
                  <h3 className="font-semibold">Creatividad</h3>
                  <p className="text-sm text-muted-foreground">
                    No hay límites para aprender
                  </p>
                </Card>
                <Card className="p-6 text-center space-y-2 border-secondary/20 hover:border-secondary/40 transition-colors">
                  <Smile className="w-8 h-8 mx-auto text-secondary" />
                  <h3 className="font-semibold">Diversión</h3>
                  <p className="text-sm text-muted-foreground">
                    Aprendemos de manera natural y profunda
                  </p>
                </Card>
                <Card className="p-6 text-center space-y-2 border-accent/20 hover:border-accent/40 transition-colors">
                  <Gift className="w-8 h-8 mx-auto text-accent" />
                  <h3 className="font-semibold">Gratitud</h3>
                  <p className="text-sm text-muted-foreground">
                    Transmitimos gratitud por lo que acontece en la vida como
                    parte del aprendizaje
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <img
                src={walking}
                alt="Children learning in nature"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                Metodología
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Nos basamos en el aprendizaje al aire libre y en la naturaleza,
                utilizando el entorno como aula principal para el desarrollo
                integral del niño a través del juego, la exploración y la
                conexión con el medio ambiente. Enfocándonos en el desarrollo de
                la motricidad, la creatividad, la resiliencia y la
                autoestima.{" "}
              </p>
              <div className="grid sm:grid-cols-3 gap-6 pt-4">
                <Card className="p-6 text-center space-y-2 border-primary/20 hover:border-primary/40 transition-colors">
                  <Leaf className="w-8 h-8 mx-auto text-primary" />
                  <h3 className="font-semibold">Naturaleza como aula</h3>
                  <p className="text-sm text-muted-foreground">
                    Aprendizaje al aire libre
                  </p>
                </Card>
                <Card className="p-6 text-center space-y-2 border-secondary/20 hover:border-secondary/40 transition-colors">
                  <Compass className="w-8 h-8 mx-auto text-secondary" />
                  <h3 className="font-semibold">
                    Aprendizaje a través del juego y exploración
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Aprendemos de forma espontánea
                  </p>
                </Card>
                <Card className="p-6 text-center space-y-2 border-accent/20 hover:border-accent/40 transition-colors">
                  <Sprout className="w-8 h-8 mx-auto text-accent" />
                  <h3 className="font-semibold">
                    Desarrollo integral del niño
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Fomentamos la autoestima, la autonomía y la creatividad
                  </p>
                </Card>
                <Card className="p-6 text-center space-y-2 border-primary/20 hover:border-primary/40 transition-colors">
                  <TreePine className="w-8 h-8 mx-auto text-primary" />
                  <h3 className="font-semibold">
                    Materiales didácticos naturales
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Utilizamos elementos del entorno
                  </p>
                </Card>
                <Card className="p-6 text-center space-y-2 border-secondary/20 hover:border-secondary/40 transition-colors">
                  <Recycle className="w-8 h-8 mx-auto text-secondary" />
                  <h3 className="font-semibold">Sostenibilidad</h3>
                  <p className="text-sm text-muted-foreground">
                    Integramos en forma vivencial los principios
                  </p>
                </Card>
                <Card className="p-6 text-center space-y-2 border-accent/20 hover:border-accent/40 transition-colors">
                  <Lightbulb className="w-8 h-8 mx-auto text-accent" />
                  <h3 className="font-semibold">Curiosidad</h3>
                  <p className="text-sm text-muted-foreground">
                    Encendemos la curiosidad como motor del aprendizaje
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="metodologia" className="py-16 md:py-24 bg-muted/30">
        <LocalVideoSection
          title="Presentación de la metodología y los valores"
          description=""
          videoPath="presentacion.mp4"
        />
      </section>

      {/* Nuestros dia */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <img
                src={oldTree}
                alt="Arbol viejo"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                Un día en el Jardín de los Sueños
              </h2>
              <h2 className="text-lg md:text-xl lg:text-1xl font-bold text-balance">
                Juego espontáneo y libre
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Dedicamos momentos diarios al juego libre, que fomenta la
                exploración y el trabajo en equipo.
              </p>
              <h2 className="text-lg md:text-xl lg:text-1xl font-bold text-balance">
                Actividades en naturaleza
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Realizamos excursiones para correr, trepar, conocer el medio
                ambiente, nuestro cuerpo y observar.
              </p>
              <h2 className="text-lg md:text-xl lg:text-1xl font-bold text-balance">
                Actividades cognitivas con recursos naturales
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Utilizamos elementos del propio entorno y a traves del taller.
              </p>
              <h2 className="text-lg md:text-xl lg:text-1xl font-bold text-balance">
                Desarrollo psicomotor
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Las actividades en la naturaleza, como trepar o correr,
                contribuyen al desarrollo de la motricidad además de las
                posturas de yoga para niños.
              </p>
              <h2 className="text-lg md:text-xl lg:text-1xl font-bold text-balance">
                Concentración y bienestar
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                La exposición constante al aire libre mejora la concentración,
                reduce el estrés y promueve un mejor descanso. También a través
                del yoga desarrollamos la atención plena y meditación para
                niños, y una adecuada relajación.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 pt-4"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="presentacion" className="py-16 md:py-24 bg-muted/30">
        <div className="bg-muted/30">
          <LocalVideoSection
            title="Bienvenidos al Jardín de los Sueños"
            description=""
            videoPath="bienvenidos.mp4"
          />
        </div>
      </section>

      <section id="contacto" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Contacta con nosotros
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                ¿Preparados para dar a vuestro hijo/a una educación consciente,
                respetuosa y en la naturaleza? ¡Nos encantaría que nos
                escribieses!
              </p>
            </div>
            <Card className="p-8 md:p-12">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Ubicación</h3>
                      <p className="text-muted-foreground">
                        Carretera de Montealegre 1 km
                        <br />
                        Yecla (Murcia)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <p className="text-muted-foreground">
                        (+34) 613 07 26 47
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        eljds2020@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 center">
                  <a href="mailto:eljds2020@gmail.com?subject=Consulta%20-%20Jardín%20de%20los%20Sueños">
                    <Button className="bg-primary hover:bg-primary/90">
                      CONTÁCTANOS
                    </Button>
                  </a>
                </div>

                {/* <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nombre</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary outline-none"
                      placeholder="Escribe tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary outline-none"
                      placeholder="tu.email@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Mensaje</label>
                    <textarea 
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary outline-none resize-none"
                      rows={3}
                      placeholder="Cuéntanos sobre tu hijo..."
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Enviar el mensaje
                  </Button>
                </div> */}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Jardín de los Sueños - Jardín escuela"
                className="h-12 w-12"
              />
              <div>
                <h3 className="font-bold">Jardín de los Sueños</h3>
                <p className="text-sm opacity-80">
                  Creciendo con la naturaleza desde 2021
                </p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              2025 Jardín escuela, espacio de educación consciente.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
