import { useAppSelector } from '@/lib/hook'
import ButtonDelete from './delete-button'
import ButtonEdit from './edit-button'

export default function TodoItem() {
  const { todoList } = useAppSelector((state) => state.todoStore)
  return (
    <>
      {todoList.map((item) => (
        <div key={item.id} className="mt-4 flex flex-row bg-slate-100">
          <input
            className="hidden"
            type="checkbox"
            id="task_1"
            defaultChecked
          />
          <label
            className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100"
            htmlFor="task_1"
          >
            <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full">
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="ml-4 text-sm">{item.todo}</span>
          </label>
          <ButtonDelete />
          <ButtonEdit />
        </div>
      ))}
    </>
  )
}
