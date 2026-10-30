
import {type ChangeEvent, useState} from "react";
import TextField from "@mui/material/TextField";

type EditableSpanPropsType = {
    title: string
    onChange: (newValue: string) => void


}

export const EditableSpan = (props: EditableSpanPropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState("")


    const activateEditMode = () => {
        setEditMode(true)
        setTitle(props.title)
    }

    const activateViewMode = () => {
        setEditMode(false)
        props.onChange(title)

    }
    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            activateViewMode()

        }
    }
    const onTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    return (

        <>
            {editMode ? (
                <TextField variant={'standard'}
                           value={title}
                           size={'small'}
                           onChange={onTitleChangeHandler}
                           onBlur={activateViewMode}
                           onKeyDown={onKeyDownHandler}
                           autoFocus/>
            ) : (
                <span onDoubleClick={activateEditMode}>{props.title}</span>
            )}
        </>
    )


}

