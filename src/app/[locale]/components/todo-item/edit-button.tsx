import { setSelectedTodo } from '@/lib/features/todoSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hook'
import { MdEdit } from 'react-icons/md'
import { TodoItemType } from '../../types/todo-type'

type PropsType = {
  todoItem: TodoItemType
}

export default function ButtonEdit({ todoItem }: Readonly<PropsType>) {
  const dispatch = useAppDispatch()
  const { todoList } = useAppSelector((state) => state.todoStore)
  const editTodoItem = (todoId: string) => {
    const selectedTodo = todoList.find((todo) => todo.id === todoId)
    dispatch(setSelectedTodo(selectedTodo!))
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
