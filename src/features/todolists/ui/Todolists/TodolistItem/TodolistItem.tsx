import {AddItemForm} from '@/common/components/AddItemForm/AddItemForm.tsx'
import {createTaskAC,} from '@/features/todolists/model/tasks-reducer.ts'
import {useAppDispatch} from '@/common/hooks/useAppDispatch.ts'
import {TodolistTitle} from "@/features/todolists/ui/Todolists/TodolistItem/TodolistTitle/TodolistTitle.tsx";
import type {TodolistType} from '@/app/App.tsx'
import {Tasks} from "@/features/todolists/ui/Todolists/TodolistItem/Tasks/Tasks.tsx";
import {FilterButtons} from "@/features/todolists/ui/Todolists/TodolistItem/FilterButtons/FilterButtons.tsx";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TodolistProps = {
    todolist: TodolistType
}

export const TodolistItem = ({todolist}: TodolistProps) => {



    const dispatch = useAppDispatch()

    // Работа со списком
    const addTask = (title: string) => {
        dispatch(createTaskAC({todolistId: todolist.id, title}))
    }


    return (
        <div>
            <TodolistTitle todolist={todolist}/>
            <AddItemForm addItem={addTask}/>
            <Tasks todolist={todolist}/>
           <FilterButtons todolist={todolist}/>
        </div>
    )
}

