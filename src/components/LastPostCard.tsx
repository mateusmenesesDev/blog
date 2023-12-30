import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

type Props = {
  title: string;
  category: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  date: string;
};

export default function LastPostCard({
  date,
  description,
  category,
  image,
  imageAlt,
  title,
}: Props) {
  return (
    <div className="gap-4 border-2 p-2 lg:flex">
      <div className="flex-1">
        <Image
          src={image}
          alt={imageAlt}
          className="h-[150px] w-full object-cover lg:h-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <div>
          <span className="text-xs font-bold text-gray-500">{category}</span>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <h2 className="my-2 text-xl font-bold lg:text-2xl">{title}</h2>
        <p className="mb-4">{description}</p>
        <div className="mt-auto">
          <Link href="#" className="font-bold text-blue-500 hover:underline">
            Ler artigo
          </Link>
        </div>
      </div>
    </div>
  );
}
