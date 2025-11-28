import { TestimonialsProps } from "@/@types/types";

const TestimonialCard2: React.FC<TestimonialsProps["cards"][0]> = ({
  name,
  description,
}) => {
  return (
    <div className="space-y-4">
      <p className="md:text-lg text-primary">{description}</p>

      <p className="md:text-lg text-primary font-semibold uppercase">{name}</p>
    </div>
  );
};

export default TestimonialCard2;
