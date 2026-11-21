import JsonLd from '@/components/JsonLd';
import SectionHeading from '@/components/SectionHeading';
import { faqSchema } from '@/lib/seo';

import defaultFaqs from '@/data/faq.json'

// <details> nativo: el contenido queda en el HTML (indexable) y no necesita JS
const FaqSection = ({ faqs = defaultFaqs, title = "Preguntas frecuentes" }) => {
  return (
    <section className="container-site py-20 md:py-28">
      <JsonLd data={faqSchema(faqs)} />

      <SectionHeading eyebrow="Dudas" title={title} />

      <div className="mx-auto mt-12 max-w-3xl divide-y divide-secondary/10 rounded-3xl bg-white shadow-sm ring-1 ring-secondary/10">
        {faqs.map((faq) => (
          <details key={faq.question} className="group p-5 md:p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-secondary [&::-webkit-details-marker]:hidden">
              <h3 className="font-sans text-base md:text-lg">{faq.question}</h3>
              <span className="text-2xl text-primary transition group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p className="mt-3 text-secondary/80">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
