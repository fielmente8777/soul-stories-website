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
    <div className="w-full box-shadow h-full overflow-hidden rounded-lg box-shadow bg-white">
      <div className="relative w-full aspect-[4/2.5]">
        <Image
          src={src}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="px-4 py-5 flex flex-col gap-3">
        <h3 className="text-[1.375rem] text-primary font-aboreto uppercase grow">
          {title}
        </h3>
        <p className="text-dark">{date}</p>
        <p className="text-primary">
          {description.slice(0, 100)}...
          <Link href={link.href} className="text-primary font-semibold">
            {link.label}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
