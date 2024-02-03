'use client'
import AddButton from '../../components/todo-button'
import TodoItem from '../../components/todo-item/todo-item'
import TodoTitle from '../../components/todo-title'

export default function Main() {
  return (
    <div className="flex flex-grow items-center justify-center h-full text-gray-600 bg-gray-100">
      <div className="max-w-full p-8 bg-white rounded-lg shadow-lg w-[500px]">
        <TodoTitle />
        <TodoItem />
        <AddButton />
      </div>
    </div>
  )
}
