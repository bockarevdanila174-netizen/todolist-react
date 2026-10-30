import {TodolistItem} from '@/features/todolists/ui/Todolists/TodolistItem/TodolistItem.tsx'
import Paper from '@mui/material/Paper'
import {useAppSelector} from '@/common/hooks/useAppSelector.ts'
import {selectorTodolist} from '@/features/todolists/model/todolists-selectors.ts'


export const Todolists = () => {
    const todoLists = useAppSelector(selectorTodolist)


    return (
        <>
            {todoLists.map(todolist => {


                return (
                    <Paper
                        key={todolist.id}
                        elevation={2}
                        sx={{p: '0 20px 20px'}}
                    >
                        <TodolistItem todolist={todolist} />
                    </Paper>
                )
            })}
        </>
    )
}


