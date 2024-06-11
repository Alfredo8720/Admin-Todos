import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'
import { todo } from 'node:test';

export async function GET(request: Request) { 
   //Insercion Basica
    /*const todo = await prisma.todo.create({
        data: {
            description: 'Piedra del Alma',
            complete: true
        }

    });*/
    //Borramos la Tabla Todo
    await prisma.todo.deleteMany(); //Es igual a delete * from todo
    //Insercion Masiva
    const todo = await prisma.todo.createMany({
        data:[
            {description:'Gema del Alma', complete: true},
            {description:'Gema del Tiempo',},
            {description:'Gema de la Mente',},
            {description:'Gema de la Realidad',},
            {description:'Gema del Poder',},
            {description:'Gema del espacio',},
        ]
    });
    console.log(todo);
 return NextResponse.json({
    message: 'Seed Execute...'
 });
}