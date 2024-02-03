import { TodoItemType } from '@/app/[locale]/types/todo-type'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface TodoState {
  todoList: TodoItemType[]
  selectedTodo: TodoItemType | null
  isEditing: boolean
}

const initialState: TodoState = {
  todoList: [],
  selectedTodo: null,
  isEditing: false
}
const authSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<TodoItemType>) => {
      state.todoList = [...state.todoList, payload]
    },
    addTodoList: (state, { payload }: PayloadAction<TodoItemType[]>) => {
      state.todoList = payload
    },
    setSelectedTodo: (
      state,
      { payload }: PayloadAction<TodoItemType | null>
    ) => {
      state.selectedTodo = payload
    },
    setIsEditing: (state, { payload }: PayloadAction<boolean>) => {
      state.isEditing = payload
    }
  }
})
export const { addTodo, addTodoList, setSelectedTodo, setIsEditing } =
  authSlice.actions

export default authSlice.reducer
