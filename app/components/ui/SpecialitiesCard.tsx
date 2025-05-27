import Image from "next/image";

interface SpecialitiesCardProps {
  title: string;
  content: string;
  imgUrl: string;
  price: string;
}

const SpecialitiesCard: React.FC<SpecialitiesCardProps> = ({
  imgUrl,
  title,
  content,
  price,
}) => {
  return (
    <div className="w-full rounded-3xl overflow-hidden shadow-md flex flex-col bg-white">
      <div className="relative aspect-[4/3] w-full">
        <Image
          fill
          src={imgUrl}
          alt={`Image de ${title}`}
          className="object-cover rounded-t-3xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 bg-gray-200 px-3 py-1 text-sm rounded-md">
          <p>{price}</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 text-sm">{content}</p>
      </div>
    </div>
  );
};

export default SpecialitiesCard;
