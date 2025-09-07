'use client'
import { useState } from 'react';
import Head from 'next/head';

import faqs from '@/data/faq.json'

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  // Structured Data for SEO
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="max-w-7xl mx-auto mt-16 px-6 mb-16">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      </Head>

      <div className="text-center">
        <h2 className="my-heading2 mb-4">
          Preguntas Frecuentes
        </h2>
        <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <dl className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-4 shadow-sm border border-muted transition-all duration-200"
            >
              <dt
                className="text-md font-semibold text-secondary cursor-pointer flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <span className="text-primary text-2xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </dt>
              <dd
                className={`text-secondary/90 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 mt-3 ' : 'max-h-0'}`}
              >
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FaqSection;
