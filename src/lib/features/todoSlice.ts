import { TodoItemType } from '@/app/[locale]/types/todo-type'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface TodoState {
  todoList: TodoItemType[]
  selectedTodoId: string
}

const initialState: TodoState = {
  todoList: [],
  selectedTodoId: ''
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
    setSelectedTodoId: (state, { payload }: PayloadAction<string>) => {
      state.selectedTodoId = payload
    }
  }
})
export const { addTodo, addTodoList, setSelectedTodoId } = authSlice.actions

export default authSlice.reducer
