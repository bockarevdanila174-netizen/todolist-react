import type {TasksStateType} from "../../../app/App.tsx";
import {
    createTodolistAC,

    deleteTodolistAC,

} from "./todolists-reducer.ts";
// import type {TaskType} from "../TodolistItem.tsx";
import {createAction, createReducer, nanoid} from "@reduxjs/toolkit";



const initialState: TasksStateType = {}


export const createTaskAC = createAction<{todolistId: string
    title: string}>('Tasks/createTask')

export const deleteTaskAC = createAction<{todolistId: string
    taskId: string}>('Tasks/deleteTask')

export const changeTaskStatusAC = createAction<{todolistId: string
    taskId: string, isDone:boolean}>('Tasks/changeTaskStatus')

export const changeTaskTitleAC = createAction<{todolistId: string
    taskId: string,title: string}>('Tasks/changeTaskTitle')


export const tasksReducer = createReducer(initialState,(builder)=>{
    builder
        .addCase(deleteTodolistAC,(state, action)=>{
          delete   state[action.payload.id]
        })
        .addCase(createTodolistAC,(state, action)=>{
            state[action.payload.id] = []
        })
        .addCase(createTaskAC,(state, action)=>{
            state[action.payload.todolistId].unshift({ id: nanoid(),
                title: action.payload.title,
                isDone: false})
        })
        .addCase(changeTaskStatusAC,(state,action)=>{
            state[action.payload.todolistId].find(
                task => task.id === action.payload.taskId
            )!.isDone = action.payload.isDone
        })
        .addCase(deleteTaskAC, (state, action) => {
            const tasks = state[action.payload.todolistId]
            const index = tasks.findIndex(t => t.id === action.payload.taskId)

            if (index !== -1) {
                tasks.splice(index, 1)
            }
        })
        .addCase(changeTaskTitleAC, (state, action) => {
            const task = state[action.payload.todolistId].find(
                t => t.id === action.payload. taskId
            )

            if (task) {
                task.title = action.payload.title
            }
        })
})

