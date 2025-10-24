import { ArrowUpIcons } from "@/utils/icons";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  label: string;
  className?: string;
  [key: string]: unknown;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  label,
  className = "",
  ...props
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`flex items-center gap-2 border w-fit px-4 py-2 rounded-lg font-semibold hover:scale-95 transition-all duration-300 ease-in-out hover:shadow-lg ${className}`}
      {...props}
    >
      {label}
      <span>
        <ArrowUpIcons />
      </span>
    </Link>
  );
};

export default LinkButton;
