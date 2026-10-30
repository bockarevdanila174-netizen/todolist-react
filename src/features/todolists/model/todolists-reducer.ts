import type {FilterType, TodolistType} from "../../../app/App.tsx";
// import {v1} from "uuid";
import {createAction, createReducer, nanoid} from "@reduxjs/toolkit";


export const deleteTodolistAC = createAction<{id:string}>('Todolists/deleteTodolist')

export const changeTodolistTitleAC = createAction<{id: string, title: string}>('Todolists/changeTodolistTitle')

export const changeTodolistFilterAC = createAction<{id: string, filter: FilterType}>('todolist/changeTodolistFilter')

export const createTodolistAC = createAction('todolist/createTodolist', (title:string)=> ({payload:{title,id:nanoid()}})
)




const initialState: TodolistType[] = []

export const todolistsReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(deleteTodolistAC,(state, action)=>{
            const index = state.findIndex(todo => todo.id === action.payload.id)
            if (index !== -1) state.splice(index, 1)
        })
        .addCase(changeTodolistTitleAC,(state,action)=>{
            const index = state.findIndex(todo => todo.id === action.payload.id)
            if (index !== -1) state[index].title = action.payload.title

        })
        .addCase(changeTodolistFilterAC,(state, action)=>{
            const index = state.findIndex(todo => todo.id === action.payload.id)
            if (index !== -1) state[index].filter = action.payload.filter
        })
        .addCase(createTodolistAC,(state,action)=>{
            state.unshift({
                id: action.payload.id,
                title: action.payload.title,
                filter: "all"
            })

        })
})










