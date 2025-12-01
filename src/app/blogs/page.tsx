import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { blogPageData } from "./blogPageData";
import { BlogCard } from "@/components/cards";

export default function Blogs() {
  return (
    <main>
      <SectionWithContainer sectionClassName="bg-[#F9FFEB]">
        <SectionHeading
          title={blogPageData.bannerData.title}
          subTitle={blogPageData.bannerData.subTitle}
          line
          titleClassName="uppercase"
          titleColor="primary"
        />
        <div
          className="grid
          grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
          mt-8"
        >
          {blogPageData.cards.map((card, index) => (
            <BlogCard key={index} {...card} />
          ))}
        </div>
      </SectionWithContainer>
    </main>
  );
}
