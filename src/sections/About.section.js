import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section
      className="max-w-7xl mx-auto flex flex-wrap justify-center mt-16 px-6"
    >
      <div className="text-center">
        <h2 className="my-heading2 mb-4">
          Quiénes Somos
        </h2>
        <div className="w-20 h-1 bg-secondary mx-auto mb-8 "></div>
        <p className="max-w-4xl text-left mx-auto text-lg text-secondary">
          Somos Alfredo y Claudia, y desde 2005 damos vida a Somital con un propósito: acercar la naturaleza y la aventura a todas las personas.
          <br className='mb-2' />
          Nuestros comienzos fueron con salidas educativas junto a colegios, experiencias que nos mostraron la fuerza transformadora de la montaña: chicos y chicas que superaban miedos, ganaban confianza y descubrían sus capacidades en contacto directo con la naturaleza.
          <br className='mb-2' />
          Hoy mantenemos intacta esa pasión. Diseñamos experiencias de turismo aventura donde se combinan profesionalismo, seguridad y emoción, para que cada salida no sea solo un recorrido, sino un momento de aprendizaje, disfrute y conexión profunda con la naturaleza.
        </p>
      </div>

      <div className="text-center mt-12">
        <h2 className="my-heading2 mb-4">
          Nuestro Equipo
        </h2>
        <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-6xl mx-auto px-4">
          {/* Team Member 1 - Alfredo */}
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="relative w-48 h-48 lg:w-60 lg:h-60 rounded overflow-hidden border-4 border-muted bg-muted flex-shrink-0">
              <Image
                src="/alfredo.jpg"
                alt="Alfredo"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-muted/60 text-primary-foreground py-2 text-center">
                <h3 className="font-bold text-lg">Alfredo</h3>
              </div>
            </div>
            <div className="text-left">
              <p className="text-lg font-semibold text-secondary mb-2">Guía de alta montaña y profesor de biología </p>
              <p className="text-secondary">
                Apasionado de la montaña, la naturaleza y la educación, combina la técnica y el conocimiento científico para que cada experiencia sea segura y enriquecedora.
              </p>
            </div>
          </div>

          {/* Team Member 2 - Claudia */}
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="relative w-48 h-48 lg:w-60 lg:h-60 rounded overflow-hidden border-4 border-muted bg-muted flex-shrink-0">
              <Image
                src="/claudia.jpg"
                alt="Alfredo"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-muted/60 text-primary-foreground py-2 text-center">
                <h3 className="font-bold text-lg">Claudia</h3>
              </div>
            </div>
            <div className="text-left">
              <p className="text-lg font-semibold text-secondary mb-2">Profesora de educación física y especialista en recreación</p>
              <p className="text-secondary">
                Su energía y calidez hacen que cada salida sea dinámica y divertida. Su objetivo es que cada persona descubra de lo que es capaz a través del movimiento y el juego.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <h2 className="my-heading2 mb-4">
          Nuestra Visión
        </h2>
        <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
        <div className="relative max-w-4xl mx-auto px-8 py-6 bg-background/50 rounded-lg border-l-4 border-primary">
          <p className="text-lg italic text-secondary/90 leading-relaxed mb-4">
            Nuestra visión en Somital es clara
          </p>
          <p className="text-2xl md:text-3xl font-medium text-secondary leading-normal mb-6">
&ldquo;Crear experiencias donde las personas puedan conectar con el entorno natural, superar sus miedos y descubrir nuevas fortalezas.&rdquo;
          </p>
          <p className="text-lg text-secondary/90 leading-relaxed">
            Queremos que cada salida sea más que una excursión: una experiencia única de crecimiento personal y colectivo, donde quienes nos elijan descubran que la verdadera aventura también está dentro de ellos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
