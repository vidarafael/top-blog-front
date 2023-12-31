import { Suspense } from "react";
import { AiOutlineLeft, AiOutlineSearch } from "react-icons/ai";
import { ServerPost } from "./ServerPost";
import Link from "next/link";
import { Skeleton } from "@/components/Skeleton";
import { ContainerUseClientComponents } from "./ContainerUseClientComponents";

export default function Page({
  params,
}: {
  params: { id: string }
}) {

  return ( 
    <>
      <ContainerUseClientComponents />

      <div className="mt-[20px] mb-8 flex mx-auto max-w-[1040px] w-full px-4">
        <div className="mx-auto w-full max-w-[800px]">
          <Link href="/" className="text-blue-700 mt-[100px] flex items-center hover:text-blue-500 transition-all">
            <AiOutlineLeft /> Voltar ao início
          </Link>

          <Suspense fallback={<Skeleton />}>
            <ServerPost id={params.id}  />
          </Suspense>

        </div>
        <div className="mt-[200px] ml-4 hidden lg:block">
          <div className="relative max-w-[240px]">
            <input type="text" placeholder="Pesquisar" className="h-full w-full pl-2 py-2 pr-8 rounded"/>
            <AiOutlineSearch className="absolute top-0 right-2 text-2xl text-gray-400 translate-y-[25%]"/>
          </div>

          <ul className="mt-4">
            <li className="p-1 hover:bg-slate-200 cursor-pointer"><a href="#" className="text-blue-800 text-base before:content-[''] before:inline-block before:h-[8px] before:w-[8px] before:bg-gray-400 before:rounded-full before:mr-4">Todas</a></li>
            <li className="p-1 hover:bg-slate-200 cursor-pointer"><a href="#" className="text-blue-800 text-base before:content-[''] before:inline-block before:h-[8px] before:w-[8px] before:bg-blue-800 before:rounded-full before:mr-4">Lançamentos</a></li>
            <li className="p-1 hover:bg-slate-200 cursor-pointer"><a href="#" className="text-blue-800 text-base before:content-[''] before:inline-block before:h-[8px] before:w-[8px] before:bg-blue-400 before:rounded-full before:mr-4">Melhorias</a></li>
            <li className="p-1 hover:bg-slate-200 cursor-pointer"><a href="#" className="text-blue-800 text-base before:content-[''] before:inline-block before:h-[8px] before:w-[8px] before:bg-red-100 before:rounded-full before:mr-4">Mudanças</a></li>
          </ul>
        </div>
      </div>
    </>
  )

}