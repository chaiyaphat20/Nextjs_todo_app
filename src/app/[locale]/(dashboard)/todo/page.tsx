'use client'
import { signOut } from 'next-auth/react'
import { FaSignOutAlt } from 'react-icons/fa'
import AddButton from '../../components/todo-button'
import TodoItem from '../../components/todo-item/todo-item'
import TodoTitle from '../../components/todo-title'

export default function Main() {
  const handleSignOut = () => {
    signOut({ callbackUrl: '/' })
  }
  return (
    <div className="flex flex-col justify-center items-center  h-full">
      <button
        onClick={handleSignOut}
        className="bg-gray-300 mt-2 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
      >
        <FaSignOutAlt size={30} />
        <span className="ml-2">Sign Out</span>
      </button>
      <div className="flex flex-grow items-center justify-center h-full text-gray-600">
        <div className="max-w-full p-8 bg-white rounded-lg shadow-lg w-[500px]">
          <TodoTitle />
          <TodoItem />
          <AddButton />
        </div>
      </div>
    </div>
  )
}
