import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  src: string;
  title: string;
  description: string;
  date: string;
  link: {
    href: string;
    label: string;
  };
}
const BlogCard: React.FC<BlogCardProps> = ({
  src,
  title,
  description,
  date,
  link,
}) => {
  return (
        <div className="w-full box-shadow h-full overflow-hidden rounded-lg box-shadow bg-[#F9FFEB]">
      <div className="relative w-full aspect-[4/2.5]">
        <Image
          src={src}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="px-6 py-5 space-y-2">
        <h3 className="text-[1.375rem] text-primary font-aboreto uppercase">
          {title}
        </h3>
        <p className="text-dark">{date}</p>
        <p className="md:text-lg text-primary">
          {description.slice(0, 90)}...
          <Link href={link.href} className="text-primary font-medium">
            {link.label}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
