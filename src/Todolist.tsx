// import React from 'react';
export type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}

type TodolistProps = {
    title: string,
    tasks: Array<TaskType>,
}

export const Todolist = (props: TodolistProps) => {
    const todolistContent= props.tasks.length ? <ul>
        {props.tasks.map((task) => (
            <li key={task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
            </li>
        ))}
    </ul>
        : <span>No tasks</span>

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button type="submit">отправить</button>
            </div>
            {todolistContent}




            {/*<ul>*/}
            {/*    <li><input type="checkbox" checked={true}/> <span>CSS&HTML</span></li>*/}
            {/*    <li><input type="checkbox" checked={false}/> <span>JS</span></li>*/}
            {/*    <li><input type="checkbox" checked={true}/> <span>React</span></li>*/}
            {/*</ul>*/}
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

