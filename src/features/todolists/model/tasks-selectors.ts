import type {RootState} from "../../../app/store.ts";
import type {TasksStateType} from "../../../app/App.tsx";

export const selectorTasks = (state: RootState):TasksStateType => state.tasks