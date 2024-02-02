import { TodoItemType } from '@/app/[locale]/types/todo-type'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface TodoState {
  todoList: TodoItemType[]
}

const initialState: TodoState = {
  todoList: []
}

const authSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodoList: (state, { payload }: PayloadAction<TodoItemType>) => {
      state.todoList = [...state.todoList, payload]
    }
  }
})
export const { setTodoList } = authSlice.actions

export default authSlice.reducer
