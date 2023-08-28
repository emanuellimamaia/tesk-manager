"use client"

import KanbanBoard from "@/components/ColumnContainer/KanbanBoard";
import { Title } from "@/components/Title";
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
      <div className="flex p-x-4 bg-[#F6F6F6] h-screen">
        <KanbanBoard/>
      </div>
    </>

  
  )
}