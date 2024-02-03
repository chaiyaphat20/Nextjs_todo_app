import { useAppSelector } from '@/lib/hook'
import ButtonDelete from './delete-button'
import ButtonEdit from './edit-button'

export default function TodoItem() {
  const { todoList } = useAppSelector((state) => state.todoStore)
  return (
    <>
      {todoList.map((item, index) => (
        <div
          key={item.id}
          className="mt-4  bg-slate-50 rounded-sm flex flex-row justify-between items-center cursor-pointer hover:bg-gray-100"
        >
          <div>
            <input className="hidden" type="checkbox" id="task_1" />
            <div className="flex flex-row">
              <div className="ml-4 text-sm w-6 h-6 bg-slate-200 flex justify-center items-center rounded-full">
                {index + 1}
              </div>
              <span className="ml-4 text-sm">{item.todo}</span>
            </div>
          </div>

          <div className="flex items-center h-[40px]">
            <ButtonDelete todoItem={item} />
            <ButtonEdit todoItem={item} />
          </div>
        </div>
      ))}
    </>
  )
}
