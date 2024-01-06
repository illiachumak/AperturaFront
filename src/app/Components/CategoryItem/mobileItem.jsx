import Link from "next/link";
import Image from "next/image";
export default function MobileCategoryItem({ bodyObj }) {
  const { preview_image, name, id } = bodyObj;

  /*
   * Responsible for routing and rendering pages
   */
  return (
    <div className="group flex justify-between text-center relative overflow-hidden cursor-pointer">
      <Image
      objectFit="cover"
        src={preview_image}
        alt={name}
        width={400}
        height={400}
        className="w-[400px] h-[400px] max-[1100px]:w-[200px] max-[1100px]:h-[400px]
            max-[935px]:w-[300px] max-[935px]:h-[300px] max-[690px]:w-[230px] max-[570px]:w-[199px] max-[570px]:h-[250px] 
            max-[490px]:w-[180px]  max-[490px]:h-[235px] max-[450px]:w-[150px] max-[450px]:h-[200px] max-[390px]:w-[135px]
            max-[360px]:w-[125px] max-[330px]:w-[115px]"
            unoptimized
      />
      <div className="group absolute bg-black w-full h-full transition-opacity duration-500 opacity-80 flex flex-col justify-center items-center px-4">
        <h2 className="font-bold text-[18px] capitalize my-8 max-[450px]:text-[16px]">{name}</h2>
        <Link href={`shop/${id}`} passHref className="w-full">
            <button className="main_button w-3/4 h-[32px]">Магазин</button>
        </Link>
      </div>
    </div>
  );
}
