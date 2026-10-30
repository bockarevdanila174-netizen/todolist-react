

import type {RootState} from "../app/store.ts";
import type {ThemeMode} from "./app-reducer.ts";

export const selectorThemeMode = (state: RootState):ThemeMode => state.app.themeMode