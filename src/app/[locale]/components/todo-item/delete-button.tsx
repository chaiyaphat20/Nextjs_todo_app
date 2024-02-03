import { addTodoList } from '@/lib/features/todoSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hook'
import { IoClose } from 'react-icons/io5'
import { TodoItemType } from '../../types/todo-type'
type PropsType = {
  todoItem: TodoItemType
}
export default function ButtonDelete({ todoItem }: Readonly<PropsType>) {
  const dispatch = useAppDispatch()
  const { todoList } = useAppSelector((state) => state.todoStore)
  const deleteTodoItem = (todoId: string) => {
    const todoDeleteItem = todoList.filter((todo) => todo.id !== todoId)
    dispatch(addTodoList(todoDeleteItem))
  }
  return (
    <button
      className="bg-red-300 hover:bg-red-400  items-center justify-center h-[40px]"
      onClick={() => deleteTodoItem(todoItem.id)}
    >
      <IoClose size={25} color="white" />
    </button>
  )
}
