import CardNote from "@/components/CardNote";
import { Title } from "@/components/Title";

export default function Note (){
  return(
    <div>
      <div>
        <Title
        title="Minhas anotações"
        description="Crie e gerencie suas anotações"
        />
      </div>
      <div className="h-screen p-8 bg-[#F6F6F6]">
          <CardNote
          title="Titulo da anotação"
          data="21 Oct 24 Oct, 2022"
          id={1}
          done={true}

          />

          
      </div>
    </div>
  )
}