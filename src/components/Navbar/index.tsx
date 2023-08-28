import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" w-[1820px] ">
      <div className="h-[4.625rem] border-b-2 flex items-center justify-end ">
        <div className="flex pr-12">
          <p className="font-medium pr-[10px]"><strong>Geferson Oliveira</strong></p>
          <div className="font-medium border-2 w-[30px] pl-[8px] h-[30px] rounded-full bg-items-gray">
            <p>G</p>
          </div>
        </div>
      </div>
      <nav className="h-20 flex border-b-2">
        <ul className="flex flex-row">
          <li className="flex items-center ml-8">
            <Link href="/tasks" className="flex" >
              <Image
                width={18}
                height={18}
                className=""
                src="./icons/task.svg"
                alt="category"
              />
              <span className="pl-2 hover:text-nav-item">Task</span>
            </Link>
          </li>

          <li className="flex items-center ml-8">
            <Link href="/Note" className="flex" >
              <Image
                width={18}
                height={18}
                className=""
                src="./icons/paragraph.svg"
                alt="task-quare.svg"
              />
              <span className="pl-2 hover:text-nav-item">Notas</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}