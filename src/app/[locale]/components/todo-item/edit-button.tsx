import { setSelectedTodoId } from '@/lib/features/todoSlice'
import { useAppDispatch } from '@/lib/hook'
import { MdEdit } from 'react-icons/md'
import { TodoItemType } from '../../types/todo-type'

type PropsType = {
  todoItem: TodoItemType
}

export default function ButtonEdit({ todoItem }: Readonly<PropsType>) {
  const dispatch = useAppDispatch()
  const editTodoItem = (todoId: string) => {
    dispatch(setSelectedTodoId(todoId))
  }
  return (
    <button
      className="bg-sky-500 hover:bg-sky-600  items-center justify-center h-[40px]"
      onClick={() => editTodoItem(todoItem.id)}
    >
      <MdEdit size={25} color="white" />
    </button>
  )
}
