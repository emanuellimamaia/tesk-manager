import Image from "next/image"

export default function CardNote (props:{
  title:string;
  data:string;
  done:boolean;
  id:number;

}) {
  return(
    <div className="p-4 mb-4 w-[82rem] border-2 rounded-lg shadow-lg
     bg-white flex items-center justify-between">
      <div className="border-1 ">
        <h2 className="font-bold pb-2">{props.title}</h2>
        <p className="font-normal  text-[#5C5F62]">{props.data}</p>
      </div>
      <div>
        <Image
        width={16}
        height={2}
        src="../icons/Group.svg"
        className="cursor-pointer mr-3 "
        alt="Editar"
        />
      </div>
    </div>
  )
}