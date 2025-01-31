'use client';
import { Todo } from '@prisma/client';
import { TodoItem } from './TodoItem';
import * as api from '@/todos/helpers/todos';
import { updateTodo } from '../helpers/todos';
import { useRouter } from 'next/navigation';
import { toggleTodo } from '../actions/todo-actions';

interface Props {
    todos?: Todo[];
}

export const TodosGrid = ({todos = []}:Props) => {
  const router = useRouter();
  
  //Comentamos el esta parte del codigo porque usaremos Server Actions
  /*const toggleTodo = async (id:string, complete:boolean) => {
    const updateTodo = await api.updateTodo(id, complete);
    router.refresh();
  }*/

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {
            todos.map(todo => (
              //Importamos el toggleTodo del todo-actions 
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
            ))
        }
    </div>
  )
}
