import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { LazyLoadedVideo } from "@/components/Video";

interface CelebrationBannerProps {
  title: string;
  subTitle: string;
  cards: {
    thumbnails: string;
    videoSrc: string;
  }[];
}
const CelebrationBanner: React.FC<CelebrationBannerProps> = ({
  title,
  subTitle,
  cards,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-[#F9FFEB]">
      <SectionHeading title={title} subTitle={subTitle} line />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="relative w-full aspect-[4/4.5]">
            <LazyLoadedVideo
              src={card.videoSrc}
              poster={card.thumbnails}
              loop
              muted
              autoPlay
              controls={false}
            />
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default CelebrationBanner;
