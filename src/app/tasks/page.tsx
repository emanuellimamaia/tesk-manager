import { Title } from "@/components/Title";
import KanbanBoard from "@/components/kanban/KanbanBoard";
import React from "react";

export default function Tesks() {

  return (
    < >
      <div>
        <Title 
        title="Minhas Tarefas"
        description="Gerenciador de tarefas"
        />
      </div>
      <div className="flex p-x-4 bg-[#F6F6F6] max-h-screen max-w-screen">
        <KanbanBoard/>
      </div>
    </>

  
  )
}