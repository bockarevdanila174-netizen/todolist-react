import type { FilterType, TodolistType } from '@/app/App.tsx'
import type { TaskType } from '@/features/todolists/ui/Todolists/TodolistItem/TodolistItem.tsx'
import List from '@mui/material/List'
import { useAppSelector } from '@/common/hooks/useAppSelector.ts'
import { selectorTasks } from '@/features/todolists/model/tasks-selectors.ts'
import { TaskItem } from './TasksItem/TaskItem.tsx'

type TasksProps = {
    todolist: TodolistType
}

export const Tasks = ({ todolist }: TasksProps) => {
    const { id, filter } = todolist

    const tasks = useAppSelector(selectorTasks)
    const todolistTasks = tasks[id] ?? []

    const getFilteredTasks = (
        tasks: TaskType[],
        filter: FilterType,
    ): TaskType[] => {
        switch (filter) {
            case 'active':
                return tasks.filter(task => !task.isDone)
            case 'completed':
                return tasks.filter(task => task.isDone)
            case 'all':
                return tasks
        }
    }

    const filteredTasks = getFilteredTasks(todolistTasks, filter)

    return (
        <>
            {filteredTasks.length > 0 ? (
                <List>
                    {filteredTasks.map(task => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            todolistId={id}
                        />
                    ))}
                </List>
            ) : (
                <span>No tasks</span>
            )}
        </>
    )
}