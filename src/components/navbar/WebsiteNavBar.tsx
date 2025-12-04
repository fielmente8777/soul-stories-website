import Link from "next/link";
import LandingNavBar from "./LandingNavBar";
import { BottomNav } from "./navData";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { contact } from "@/utils/constent";
import { usePathname } from "next/navigation";
import { useWebContext } from "@/context-api/WebContext";
import MobileNav from "./MobileNav";

const WebsiteNavBar = () => {
  const pathName = usePathname();
  const isActive = (href: string) => pathName === href;
  const { isMobile, setIsMobile } = useWebContext();
  return (
    <header className="max_screen_width">
      <LandingNavBar />
      <div className="bg-primary text-white">
        <nav className="max_width">
          <ul className="flex items-center justify-between gap-8 py-2">
            <li>
              <Link href="/" className="relative w-30 aspect-[4/3.15] block">
                <Image
                  src={BottomNav.logo}
                  alt="logo"
                  fill
                  className="object-contain"
                />
              </Link>
            </li>
            {BottomNav.links.slice(0, 5).map((link, index) => (
              <li key={index} className="lg:block hidden">
                <Link
                  href={link.href}
                  className={`uppercase text-lg transition-all duration-300 ease-in-out relative after:absolute hover:after:w-full after:left-0 after:w-0  after:bottom-0 after:h-px after:bg-white ${
                    isActive(link.href) ? "after:w-full" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="lg:hidden block">
              <button onClick={() => setIsMobile(!isMobile)}>
                {!isMobile ? (
                  <AiOutlineMenu className="text-2xl" />
                ) : (
                  <AiOutlineClose className="text-2xl" />
                )}
              </button>
            </li>
            <li className="lg:block hidden">
              <Link
                href={contact.WhatsappCta}
                target="_blank"
                rel="noreferrer"
                className="uppercase bg-secondary px-5 py-3 rounded-lg flex  items-center gap-2 justify-center"
              >
                <span className="">
                  <span className="sr-only">WhatsappIcon</span>
                  <WhatsappIcon />
                </span>
                Chat with us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <MobileNav />
    </header>
  );
};

export default WebsiteNavBar;

export const WhatsappIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_337_9127)">
      <path
        d="M0.512578 11.8564C0.512016 13.8728 1.04302 15.8418 2.0527 17.5772L0.416016 23.5067L6.53152 21.9156C8.22299 22.8293 10.1181 23.308 12.044 23.3082H12.0491C18.4067 23.3082 23.582 18.1749 23.5847 11.8654C23.586 8.808 22.3871 5.93302 20.2089 3.77005C18.0311 1.60726 15.1347 0.415534 12.0486 0.414139C5.6902 0.414139 0.515297 5.54716 0.512672 11.8564"
        fill="url(#paint0_linear_337_9127)"
      />
      <path
        d="M0.100313 11.8527C0.0996563 13.9417 0.649687 15.981 1.69537 17.7786L0 23.9207L6.33478 22.2726C8.08022 23.2168 10.0454 23.7147 12.0451 23.7154H12.0502C18.636 23.7154 23.9972 18.3975 24 11.8621C24.0011 8.69488 22.7591 5.71656 20.5031 3.47609C18.2468 1.23591 15.2468 0.00130233 12.0502 0C5.46337 0 0.102938 5.31721 0.100313 11.8527ZM3.87291 17.469L3.63637 17.0965C2.64206 15.5277 2.11725 13.7149 2.118 11.8534C2.12006 6.4213 6.57544 2.00186 12.054 2.00186C14.7071 2.00298 17.2005 3.02921 19.0759 4.89116C20.9512 6.7533 21.9831 9.22865 21.9824 11.8614C21.98 17.2935 17.5245 21.7135 12.0502 21.7135H12.0463C10.2638 21.7126 8.51569 21.2376 6.99113 20.34L6.62831 20.1265L2.86912 21.1045L3.87291 17.469Z"
        fill="url(#paint1_linear_337_9127)"
      />
      <path
        d="M9.06383 6.89749C8.84014 6.40418 8.60473 6.39423 8.39202 6.38558C8.21783 6.37814 8.0187 6.37869 7.81977 6.37869C7.62064 6.37869 7.29711 6.45302 7.02364 6.7493C6.74989 7.04586 5.97852 7.76251 5.97852 9.22009C5.97852 10.6777 7.04848 12.0864 7.19764 12.2843C7.34698 12.4818 9.26323 15.5686 12.2981 16.7562C14.8204 17.7431 15.3336 17.5468 15.881 17.4973C16.4285 17.448 17.6477 16.7808 17.8964 16.089C18.1453 15.3973 18.1453 14.8044 18.0707 14.6805C17.996 14.557 17.7969 14.4829 17.4983 14.3348C17.1997 14.1867 15.7317 13.4699 15.458 13.371C15.1843 13.2722 14.9853 13.2229 14.7861 13.5195C14.587 13.8157 14.0152 14.4829 13.841 14.6805C13.6669 14.8785 13.4926 14.9032 13.1941 14.755C12.8953 14.6063 11.9337 14.2939 10.7929 13.2846C9.90523 12.4993 9.30598 11.5296 9.1318 11.2329C8.95761 10.9367 9.11314 10.7762 9.26286 10.6286C9.39702 10.4958 9.56155 10.2826 9.71098 10.1097C9.85986 9.93665 9.90955 9.81321 10.0091 9.61562C10.1088 9.41786 10.0589 9.24483 9.98436 9.09665C9.90955 8.94846 9.32933 7.48325 9.06383 6.89749Z"
        fill="white"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_337_9127"
        x1="1158.85"
        y1="2309.67"
        x2="1158.85"
        y2="0.414139"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1FAF38" />
        <stop offset={1} stopColor="#60D669" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_337_9127"
        x1={1200}
        y1="2392.07"
        x2={1200}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F9F9F9" />
        <stop offset={1} stopColor="white" />
      </linearGradient>
      <clipPath id="clip0_337_9127">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
