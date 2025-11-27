import Image from "next/image";

interface NearByPlacesCardProps {
  src: string;
  title: string;
  description: string;
}
const NearByPlacesCard: React.FC<NearByPlacesCardProps> = ({
  src,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-4 box-shadow">
      <div className="w-full relative aspect-[4/3]">
        <Image
          src={src}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="px-4 pb-5 space-y-4">
        <h3 className="text-[1.375rem] text-primary font-aboreto uppercase">
          {title}
        </h3>
        <p className="md:text-lg text-[#686868]">{description}</p>
      </div>
    </div>
  );
};

export default NearByPlacesCard;
