'use client'
import { addTodo, addTodoList, setIsEditing } from '@/lib/features/todoSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hook'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import * as yup from 'yup'
const schema = yup.object().shape({
  id: yup.string(),
  checked: yup.boolean(),
  todo: yup.string().required()
})
type SchemaType = yup.InferType<typeof schema>

export default function AddButton() {
  const dispatch = useAppDispatch()
  const { isEditing, selectedTodo, todoList } = useAppSelector(
    (state) => state.todoStore
  )

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const submitTodo = (data: SchemaType) => {
    if (isEditing) {
      const updatedTodoList = todoList.map((todo) =>
        todo.id === selectedTodo?.id ? { ...todo, todo: data.todo } : todo
      )

      dispatch(addTodoList(updatedTodoList))
    } else {
      dispatch(
        addTodo({
          id: uuidv4(),
          checked: false,
          todo: data.todo
        })
      )
    }

    reset()
    dispatch(setIsEditing(false))
  }

  useEffect(() => {
    if (selectedTodo?.id) {
      setValue('todo', selectedTodo?.todo!)
      dispatch(setIsEditing(true))
    } else {
      setValue('todo', '')
    }
  }, [selectedTodo?.id])

  return (
    <form className=" mt-6 " onSubmit={handleSubmit(submitTodo)}>
      <div className="flex flex-row w-full">
        <input
          placeholder="todo name"
          {...register('todo', { required: true })}
          className="appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          type="submit"
          defaultValue={`${isEditing ? 'Edit' : 'Add'}`}
          className={` ${isEditing ? 'hover:bg-sky-700 border-sky-500 hover:border-sky-700 bg-sky-500 ' : 'hover:bg-teal-700 border-teal-500 hover:border-teal-700 bg-teal-500 '}  text-sm border-4 text-white py-1 px-2 ml-2 rounded`}
        />
      </div>

      {errors.todo?.type === 'required' && (
        <p className="text-red-700 text-xs">กรุณากรอกข้อมูล</p>
      )}
    </form>
  )
}
