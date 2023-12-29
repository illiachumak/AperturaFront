import Link from "next/link";
import Image from "next/image";

export default function CategoryItem({ bodyObj }) {
  const { preview_image, name, id } = bodyObj;

  /*
   * Responsible for routing and rendering pages
   */
  return (
    <div className="group flex justify-between text-center relative overflow-hidden cursor-pointer">
      <Image src={preview_image} alt={name} width={250} height={550} className="w-[250px] h-[550px]" unoptimized/>
      <div className="group absolute bg-black w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-80 flex flex-col justify-center items-center">
        <h2 className="font-bold text-2xl capitalize my-8">{name}</h2>
        <Link href={`shop/${id}`} passHref>
            <button className="main_button w-[180px] h-[32px]">Магазин</button>
        </Link>
      </div>
    </div>
  );
}
