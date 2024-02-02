'use client'
import { setTodoList } from '@/lib/features/todoSlice'
import { useAppDispatch } from '@/lib/hook'
import { v4 as uuidv4 } from 'uuid'

export default function AddButton() {
  const dispatch = useAppDispatch()
  const addNewTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(
      setTodoList({
        id: uuidv4(),
        checked: false,
        todo: `data test ${uuidv4()} `
      })
    )
  }
  return (
    <form
      className="bg-gray-100 border-t border-t-1 border-color-grey mt-6 px-6 pt-6 pb-8"
      onSubmit={addNewTodo}
    >
      <label
        htmlFor="item"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Add To-Do Item
      </label>
      <div className="flex">
        <input
          type="text"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="item"
          name="item"
          placeholder="Pick up groceries"
        />{' '}
        <input
          type="submit"
          defaultValue="Add Item"
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 ml-2 rounded"
        />
      </div>
    </form>
  )
}
