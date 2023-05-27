import './globals.scss'
import Link from "next/link";
import {prisma} from "@/db";
import Todoitem from "@/components/Todoitem";

async function toggleTodo(id: string, complete: boolean) {
    'use server'

    await prisma.todo.update({where:{id}, data:{complete}})
}

export default async function Home() {
    const todos = await getTodos();

  return (
    <>
      <header className='header'>
        <h1>Todos</h1>
          <Link className='new-todo' href={'/new'}>New</Link>
      </header>
        <ul className='todos'>
            {todos.map(todo => (
                <Todoitem key={todo.id} {...todo} toggleTodo={toggleTodo}/>
            ))}
        </ul>
    </>
  )
}

const getTodos = () => {
    return prisma.todo.findMany();
}
