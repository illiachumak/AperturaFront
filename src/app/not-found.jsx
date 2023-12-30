import Link from "next/link"

function NotFoundPage() {
	return <div className="flex flex-col gap-8 h-[60vh] w-1/3 mx-auto items-center mt-[28vh]">
		<h1 className="text-[28px] cursor-default">Сторінку не знайдено :{`(`}</h1>
		<div className="flex w-full justify-center gap-12">
			<Link href='/' className="main_button !w-[45%]">На головну</Link>
			<Link href='/shop/1' className="main_button !w-[45%]">В Магазин</Link>
		</div>
		</div>
}

export default NotFoundPage