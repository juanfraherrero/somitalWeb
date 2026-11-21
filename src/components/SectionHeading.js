const SectionHeading = ({ eyebrow, title, children, as: Tag = "h2", align = "center" }) => (
  <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <Tag className="my-heading2 mt-3">{title}</Tag>
    {children && <div className="mt-5 text-lg text-secondary/80">{children}</div>}
  </div>
);

export default SectionHeading;
