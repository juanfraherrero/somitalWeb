import reviews from '@/data/reviews.json';
import site from '@/data/site.json';
import SectionHeading from '@/components/SectionHeading';

// Reseñas copiadas a mano desde la ficha de Google Maps (ver site.googleMapsUrl)
const Stars = ({ rating }) => (
  <div className="flex gap-0.5 text-lg text-primary" aria-label={`${rating} de 5 estrellas`}>
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i} aria-hidden="true" className={i < rating ? "" : "opacity-25"}>★</span>
    ))}
  </div>
);

const ReviewsSection = () => {
  if (reviews.length === 0) return null;

  return (
    <section id="opiniones" className="bg-surface py-20 md:py-28">
      <div className="container-site">
        <SectionHeading eyebrow="Opiniones en Google" title="Qué dicen nuestros clientes">
          Personas, familias y colegios que ya salieron con nosotros a la naturaleza.
        </SectionHeading>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map(({ author, rating, text }) => (
            <figure key={author} className="flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-secondary/10">
              <Stars rating={rating} />
              <blockquote className="mt-4 flex-1 text-secondary/80">&ldquo;{text}&rdquo;</blockquote>
              <figcaption className="mt-5 font-bold text-secondary">{author}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href={site.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Ver todas las reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
