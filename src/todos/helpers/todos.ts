import { Todo } from "@prisma/client";

 
 export const updateTodo = async (id:string, complete: boolean):Promise<Todo> => {
    const body = {complete: complete};

    //creamos la petiticon http
    const todo = await fetch(`/api/todos/${id}`, 
        {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'consten-type': 'application/json'
            }
        }
    ).then(res => res.json());

    return todo;
 }

 export const createTodo = async (description: string):Promise<Todo> => {
    const body = {description: description};

    //creamos la petiticon http
    const todo = await fetch('/api/todos/', 
        {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'consten-type': 'application/json'
            }
        }
    ).then(res => res.json());

    return todo;
 }
 
 export const deleteCompletedTodos = async ():Promise<Boolean> => {

    //creamos la petiticon http
    await fetch('/api/todos/', 
        {
            method: 'DELETE',
            headers: {
                'consten-type': 'application/json'
            }
        }
    ).then(res => res.json());

    return true;
 }