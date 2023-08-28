import NotesBoard from "@/components/NotesManagement/NotesBoard";
import { Title } from "@/components/Title";


export default function Notas () {
  return(
    <div>
      <div>
        <Title
        title="Minhas anotações"
        description="Crie e gerencie suas anotações"
        />
      </div>
      <div>
        <NotesBoard/>
      </div>
    </div>
  )
}