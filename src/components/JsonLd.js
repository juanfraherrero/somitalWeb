// En App Router `next/head` no hace nada: el JSON-LD se renderiza como <script> dentro del body
const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
  />
);

export default JsonLd;
