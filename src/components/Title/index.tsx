import Navbar from "../Navbar";

export function Title(props:{
  title:string
  description:string
}) {
  return (
    
    <div className="w-full">
      
      <div className="border-b-2 p-8">
        <p className="text-gray-600">{props.description}</p>
        <h1 className="font-extrabold text-3xl">{props.title}</h1>
      </div>

      <div className="p-4 text-lg flex border-b-2">
        <input
          type="text"
          className="border rounded-md p-1 "
          placeholder="Pesquisar " />
      </div>
    </div>
  )
}