import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import {AddItemForm} from "@/common/components/AddItemForm/AddItemForm.tsx";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {createTodolistAC} from "@/features/todolists/model/todolists-reducer.ts";
import {Todolists} from "@/features/todolists/ui/Todolists/Todolists.tsx";


export const Main = () => {
    const dispatch = useAppDispatch()

    const addTodoList = (title: string) => {

        dispatch(createTodolistAC(title))

    }




    return (
        <Container maxWidth="md">
            <Grid container sx={{mb: '30px'}}>
                <AddItemForm addItem={addTodoList}/>
            </Grid>
            <Grid container spacing={4}>

               <Todolists/>
            </Grid>
        </Container>
    );
};

