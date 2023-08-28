"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Sidebar() {

  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      <div className={`border-r-2 h-screen relative flex flex-col  ${open ? "w-[14rem]" : "w-20"} duration-700`}>
        <div>
          <div className="h-[4.625rem]  border-b-2 flex items-center justify-center">
            <Image
              width={25}
              height={25}
              className={`cursor-pointer absolute  pl-2 ${open && "hidden"}`}
              src="./images/logo.svg"
              alt="logo"></Image>
            <Image
              width={150}
              height={100}
              className={`cursor-pointer absolute pl-2 ${!open && "hidden"}`}
              src="/images/navegam.png"
              alt="logo"></Image>


            <Image
              onClick={() => setOpen(!open)}
              width={32}
              height={18}
              className={`absolute translate-x-[140px] ${open && "rotate-180"} ${!open && "translate-x-[80px]"}`}
              src="./icons/menu-expand.svg"
              alt="task-quare.svg"
            />
          </div>

          <div className="flex flex-col items-center pt-2 h-[10.600rem]">
            <div className="flex flex-row items-center justify-center hover:text-[#1C90E3]">
              < Link className="flex " href="/">
                <Image
                  width={18}
                  height={18}
                  className=""
                  src="./icons/category.svg"
                  alt="category"
                />

                <span className={`pl-2 ${!open && "hidden"} `}>Página Inicial  </span>
              </Link>
            </div>

            <div className="flex pt-5 flex-row items-center hover:text-[#1C90E3] ">
              <Link className="flex" href="/tasks">
                <Image
                  width={18}
                  height={18}
                  className=""
                  src="./icons/task-quare.svg"
                  alt="task-quare.svg"
                />
                <span className={`pl-2 ${!open && "hidden"}`}>Minhas tarefas</span>
              </Link>
            </div>

            <div className="flex pt-5 flex-row items-center hover:text-[#1C90E3]">
              <Link  className="flex" href="/" >
                <Image
                  width={16}
                  height={16}
                  className="bg-"
                  src="./icons/add-square.svg"
                  alt="add-quare"
                />
              <span className={`pl-2 ${!open && "hidden"}`}>Projetos</span>
              </Link>
            </div>
            <div></div>
          </div>
        </div>

        <div className="h-[70rem]">

        </div>
        <div className="flex items-center border-y-2 justify-center">
          <Image
            width={100}
            height={100}
            className={`pt-5 w-11  ${open && "border-none"} `}
            src="/images/logo_footer_sidebar.png"
            alt="add-quare"
          />
          <Image
            width={100}
            height={100}
            className={`cursor-pointer absolute pl-2   pt-2 ${!open && "hidden"}`}
            src="/images/navegam.png"
            alt="logo"></Image>
        </div>
      </div>
    </div>
  )
}