'use server';

import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const toggleTodo = async (id: string, complete: boolean):Promise<Todo|void> => {
    const todo = await prisma.todo.findFirst({
        where: {
            id
        }
    });

    if (!todo) {
        throw `Todo con id ${id} no existe.`;
    }

    const updatedTodo = await prisma.todo.update({
        where:{id},            
        data: {complete: complete}
    });
    
    revalidatePath('/dashboard/servers-todos ');
    return updatedTodo;
}


export const addTodo = async (description: string): Promise<Todo|void> => {
    try {
        const todo = await prisma.todo.create({
            data:{
                description: description
            }
        });
        revalidatePath('/dashboard/servers-todos');
        return todo;
    } catch (error) {
        console.log('Error al crear todo', error);
    }
}

export const deleteCompleted = async():Promise<Todo|void> => {
    try{
        await prisma.todo.deleteMany({
            where: {
                complete: true
            }
        });
        revalidatePath('/dashboard/servers-todos');
    }catch(error){
        return console.log('Error: No se pudo borrar la tarea.');
    }
}