import DeleteIcon from "@mui/icons-material/Delete";
import {EditableSpan} from "@/common/components/EditableSpan/EditableSpan.tsx";
import IconButton from "@mui/material/IconButton";
import {changeTodolistTitleAC, deleteTodolistAC} from "@/features/todolists/model/todolists-reducer.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import type {TodolistType} from "@/app/App.tsx";
import styles from "./TodolistTitle.module.css"
export type TodolistProps = {
    todolist: TodolistType
}


export const TodolistTitle = ({todolist}: TodolistProps) => {

    const {id, title} = todolist
    const dispatch = useAppDispatch()
    const deleteTodolist = () => {
        dispatch(deleteTodolistAC({id}))
    }

    const changeTodolistTitle = (title: string) => {
        dispatch(changeTodolistTitleAC({id, title}))
    }

    return (
        <div className={styles.container}>
            <EditableSpan
                title={title}
                onChange={changeTodolistTitle}
            />

            <IconButton
                aria-label="delete todolist"
                onClick={deleteTodolist}
            >
                <DeleteIcon/>
            </IconButton>

        </div>
    );
};

