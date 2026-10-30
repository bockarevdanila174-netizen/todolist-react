import styles from './App.module.css'
import {type TaskType} from "@/features/todolists/ui/Todolists/TodolistItem/TodolistItem.tsx";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {useAppSelector} from "../common/hooks/useAppSelector.ts";
import {selectorThemeMode} from "./app-selectors.ts";
import {getTheme} from "../common/theme/theme.ts";
import {Header} from "@/common/components/Header/Header.tsx";
import {Main} from "@/app/Main.tsx";

export type FilterType = 'all' | 'active' | 'completed'

export type TodolistType = {
    id: string,
    title: string,
    filter: FilterType,
}
export type TasksStateType = {
    [todolistId: string]: TaskType[]
}


function App() {


    const themeMode = useAppSelector(selectorThemeMode)


    const theme = getTheme(themeMode)


    return (
        <ThemeProvider theme={theme}>
        <div className={styles.app}>

                <CssBaseline/>

                <Header/>
                <Main/>

        </div>
            </ThemeProvider>


    )
}


export default App


