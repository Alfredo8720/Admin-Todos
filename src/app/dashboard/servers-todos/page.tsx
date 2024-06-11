export const dynamic = 'force-dynamic';
export const revalidate = 0;

import prisma from "@/lib/prisma";
import { FormGoogle } from "@/todos/components/FormGoogle";
import { NewTodo } from "@/todos/components/NewTodo";
import { TodosGrid } from "@/todos/components/TodosGrid";
import { todo } from "node:test";


export const metadata = {
 title: 'Listado de Tareas',
 description: 'SEO Title',
};

export default async function ServerTodoPage() {
  const todos = await prisma.todo.findMany({
    orderBy:{
      description: 'asc',
    }
  });
  console.log("Construido... ");
  return (
    <>
    <span className="text-3xl mb-10">Server Actions</span>
      <div>
        <div className="w-full px-3 mx-5 mb-5">
         <NewTodo/>
         
        </div>
         
        <TodosGrid todos={todos}/> 
      </div>
    </>
  );
}