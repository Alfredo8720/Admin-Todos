import prisma from '@/lib/prisma';
import { Todo } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup';

interface Segments {
    params:{
        id: string;
    }
}
const getTodo = async (id:string):Promise<Todo | null> => {
    const findTodo = await prisma.todo.findUnique({ where: { id: id } });
    return findTodo;
}

export async function GET(request: Request, {params}: Segments) { 
    const findTodo = await getTodo(params.id);
    if (!findTodo) {
        return NextResponse.json({msj:"El Todo no existe."}, {status: 400});
    }
  return NextResponse.json(findTodo);
}

const putSchema = yup.object({
    complete: yup.boolean().optional(),
    description: yup.string().optional(),
})

export async function PUT(request: Request, { params }: Segments) {
    const findTodo = await getTodo(params.id);
    if (!findTodo) {
        return NextResponse.json({ msj: "El Todo no existe." }, { status: 400 });
    }
    try {
        const {complete,description, ...rest} = await putSchema.validate(await request.json()); 
        const updateTodo = await prisma.todo.update({ where: { id: params.id }, 
            data: { 
                complete: complete, 
                description: description} 
            });

        return NextResponse.json(updateTodo);
    } catch (error) {
        return NextResponse.json(error, {status: 400});
    }

}
