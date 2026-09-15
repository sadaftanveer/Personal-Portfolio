interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span>{label}</span>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}

export default SectionHeading;