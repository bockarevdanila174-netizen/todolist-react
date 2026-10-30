import type {RootState} from "../../../app/store.ts";
import type {TodolistType} from "../../../app/App.tsx";

export const selectorTodolist = (state: RootState):TodolistType[] => state.todolists