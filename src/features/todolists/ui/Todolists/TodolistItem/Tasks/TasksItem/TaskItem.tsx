import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import ListItem from '@mui/material/ListItem'
import {EditableSpan} from '@/common/components/EditableSpan/EditableSpan.tsx'
import {useAppDispatch} from '@/common/hooks/useAppDispatch.ts'

import {
    changeTaskStatusAC,
    changeTaskTitleAC,
    deleteTaskAC,
} from '@/features/todolists/model/tasks-reducer.ts'

import type {TaskType} from '@/features/todolists/ui/Todolists/TodolistItem/TodolistItem.tsx'
import {getListItemSx} from "./TaskItem.styles.ts";

type TaskItemProps = {
    task: TaskType
    todolistId: string
}

export const TaskItem = ({task, todolistId}: TaskItemProps) => {
    const dispatch = useAppDispatch()

    const changeTaskStatus = (isDone: boolean) => {
        dispatch(
            changeTaskStatusAC({
                todolistId,
                taskId: task.id,
                isDone,
            }),
        )
    }

    const changeTaskTitle = (title: string) => {
        dispatch(
            changeTaskTitleAC({
                todolistId,
                taskId: task.id,
                title,
            }),
        )
    }

    const deleteTask = () => {
        dispatch(
            deleteTaskAC({
                todolistId,
                taskId: task.id,
            }),
        )
    }

    return (
        <ListItem sx={getListItemSx(task.isDone)}>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Checkbox
                    checked={task.isDone}
                    onChange={(_, checked) => changeTaskStatus(checked)}
                />

                <EditableSpan
                    title={task.title}
                    onChange={changeTaskTitle}
                />
            </Box>

            <IconButton
                aria-label="delete task"
                onClick={deleteTask}
            >
                <DeleteIcon/>
            </IconButton>
        </ListItem>
    )
}