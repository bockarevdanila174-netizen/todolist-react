import type {FilterType, TodolistType} from "@/app/App.tsx";
import {changeTodolistFilterAC} from "@/features/todolists/model/todolists-reducer.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import Box from "@mui/material/Box";
// import {containerSx} from "@/features/todolists/ui/Todolists/TodolistItem/Tasks/TasksItem/TodolistItem.styles.ts";
import Button from "@mui/material/Button";
import {containerSx} from "@/common/styles/container.styles.ts";


export type TodolistProps = {
    todolist: TodolistType
}

export const FilterButtons = ({todolist}: TodolistProps) => {

    const {id, filter} = todolist
    const dispatch = useAppDispatch()
    const changeFilter = (filter: FilterType) => {
        dispatch(changeTodolistFilterAC({id, filter}))
    }

    return (
        <>
            <Box sx={containerSx}>
                <Button
                    variant={filter === 'all' ? 'contained' : 'text'}
                    color="inherit"
                    onClick={() => changeFilter('all')}
                >
                    All
                </Button>

                <Button
                    variant={filter === 'active' ? 'contained' : 'text'}
                    color="primary"
                    onClick={() => changeFilter('active')}
                >
                    Active
                </Button>

                <Button
                    variant={filter === 'completed' ? 'contained' : 'text'}
                    color="secondary"
                    onClick={() => changeFilter('completed')}
                >
                    Completed
                </Button>
            </Box>
        </>
    );
};
