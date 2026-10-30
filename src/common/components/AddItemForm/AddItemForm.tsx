// import React from 'react';
// import Button from '@mui/material/Button';
// import {Button} from "./Button.tsx";
import AddBoxIcon from '@mui/icons-material/AddBox'
import IconButton from '@mui/material/IconButton'

import {type ChangeEvent, type KeyboardEvent, useState} from "react";
import {TextField} from "@mui/material";

type AddItemFormPropsType = {
    addItem: (title: string) => void

}

export const AddItemForm = (props: AddItemFormPropsType) => {
    const [newTaskTitle, setNewTaskTitle] = useState("")
    const [error, setError] = useState("")
    const addTaskClickHandler = () => {
        const trimmedTaskTitle = newTaskTitle.trim()
        if (trimmedTaskTitle === "") {
            setError("Field is required")
            return
        }

        props.addItem(trimmedTaskTitle)
        setNewTaskTitle("")
        setError("")
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        const trimmedTaskTitle = newTaskTitle.trim()
        if (e.key === "Enter" && trimmedTaskTitle !== "") {
            props.addItem(trimmedTaskTitle)
            setNewTaskTitle("")
        } else {
            setError("Field is required")
        }
    }


    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
        setError("")
    }
    return (
        <div>
            <TextField label={'Enter a title'}
                       variant={'outlined'}
                       value={newTaskTitle}
                       size={'small'}
                       error={!!error}
                       slotProps={{
                           htmlInput: {
                               maxLength: 15
                           }
                       }}
                       helperText={error}
                       onChange={onNewTitleChangeHandler}
                       onKeyDown={onKeyDownHandler}/>



            <IconButton onClick={addTaskClickHandler} color={'primary'}>
                <AddBoxIcon />
            </IconButton>

        </div>
    );
};

