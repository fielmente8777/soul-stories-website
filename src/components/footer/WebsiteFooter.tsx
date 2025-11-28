import Link from "next/link";
import { Container } from "../sectionComponants";
import { webSiteFooterData } from "./footerdata";
import Image from "next/image";
import LinkButton from "../buttons/LinkButton";

const WebsiteFooter = () => {
  return (
    <footer className="max_screen_width bg-primary">
      <Container>
        <div className="flex max-md:flex-col gap-6 items-center justify-between py-6 md:py-12 border-b border-white">
          {/* social media links */}
          <ul className="flex items-center gap-4 max-md:order-2">
            {webSiteFooterData.lists[0].links.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-10 h-10 rounded-sm flex items-center justify-center bg-white text-secondary transition-all"
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
          {/* logo */}
          <Link
            href="/"
            className="md:w-[350px] lg:-mr-36 w-full relative max-md:order-1 md:aspect-[4/1] aspect-[5/1]"
          >
            <Image
              src={webSiteFooterData.logo}
              alt="logo"
              fill
              className="object-contain"
            />
          </Link>
          {/* call contact */}
          <div className="flex flex-col gap-2 max-md:order-3">
            <p className="text-white ">{webSiteFooterData.description}</p>
            <div className="md:ml-auto max-md:mx-auto w-fit flex items-center">
              <LinkButton
                href={webSiteFooterData.link.href}
                label={webSiteFooterData.link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-secondary border-white"
              />
            </div>
          </div>
        </div>
        <div className="grid md:py-12 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.1fr_1.1fr_1.1fr_1.4fr] gap-4 md:gap-4">
          {webSiteFooterData.lists.slice(1).map((list, index) => (
            <div key={index}>
              <h2 className="md:text-[2rem] text-white font-aboreto  text-xl mb-4">
                {list.title}
              </h2>
              <ul className={`flex flex-col gap-2`}>
                {list.links.map((item, suIndex) => (
                  <li className="flex gap-2" key={suIndex}>
                    {item.icon && (
                      <span
                        className={`mt-1 ${
                          index === 1
                            ? "text-secondary flex items-center justify-center rounded-sm bg-white w-10 aspect-square"
                            : "text-white inline-block"
                        }`}
                      >
                        {item.icon}
                        <span className="sr-only">{item.label}</span>
                      </span>
                    )}
                    {item?.title && (
                      <span
                        className="md:text-lg text-white inline-block capitalize"
                      >
                        {item.title}
                      </span>
                    )}
                    <Link
                      target={item.href.includes("https") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      href={item.href}
                      className="flex gap-2"
                    >
                      <span className="md:text-lg text-white capitalize">
                        {item.label}
                      </span>
                    </Link>
                    {item.label2 && <span className="text-white -ml-1">,</span>}
                    {item.label2 && item.href2 && (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.href2}
                        className="flex gap-2"
                      >
                        <span
                          className={`${
                            index === 1
                              ? "text-white font-aboreto text-2xl my-auto"
                              : "md:text-lg text-white"
                          }`}
                        >
                          {item.label2}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
      <div className="bg-secondary">
        <Container className="py-4">
          <div className="flex max-md:flex-col items-center justify-center gap-2 text-primary md:text-lg">
            {" "}
            <p className="">© {new Date().getFullYear()} Soul Storries Hotel</p>
            <span className="md:block hidden">|</span>
            <p className="">All Rights Reserved</p>
            <span className="md:block hidden">|</span>
            <p className="">Powered by Eazotel</p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default WebsiteFooter;
