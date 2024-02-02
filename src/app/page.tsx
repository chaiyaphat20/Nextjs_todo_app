'use client'
import { TodoItemType } from '@/app/types/todo-type'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AddButton from './components/todo-add-button'
import TodoItem from './components/todo-item'
import TodoTitle from './components/todo-title'

export default function Main() {
  const [todoList, setTodoList] = useState<TodoItemType[]>([])
  useEffect(() => {
    const arr: TodoItemType[] = []
    for (let index = 0; index < 5; index++) {
      const data: TodoItemType = {
        id: uuidv4(),
        checked: false,
        todo: `${index} data test`
      }
      arr.push(data)
    }
    setTodoList(arr)
  }, [])

  console.log(todoList)
  return (
    <div className="flex flex-grow items-center justify-center h-full text-gray-600 bg-gray-100">
      <div className="max-w-full p-8 bg-white rounded-lg shadow-lg w-96">
        <TodoTitle />
        <TodoItem todoList={todoList} />
        <AddButton />
      </div>
    </div>
  )
}
