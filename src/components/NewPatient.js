import Grid from '@mui/material/Unstable_Grid2';
import { TextField, Button } from "@mui/material";
import { useState } from "react";

function NewPatient() {

    const [ age, setAge ] = useState(null);

    return (
        <>
            <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center" sx={{height: "100vh", width: "100vw"}}>
                <Grid>
                    <p>{ age >= 18 ? "Adult" : age < 18 && age !== null ? "Child" : "No age specification"}</p>
                </Grid>
                <Grid>
                    <TextField label="First Name" variant="outlined" />
                </Grid>
                <Grid>
                    <TextField label="Last Name" variant="outlined" />
                </Grid>
                <Grid>
                    <TextField label="Age" variant="outlined" value={age} onChange={(e) => setAge(e.target.value)}/>
                </Grid>
                <Grid>
                    <TextField label="Sex" variant="outlined" />
                </Grid>
                <Grid>
                    <TextField label="Race" variant="outlined" />
                </Grid>
                <Grid>
                    <TextField label="Marital Status" variant="outlined" />
                </Grid>
                <Grid>
                    <TextField label="Education" variant="outlined" />
                </Grid>
                <Grid>
                    <TextField label="Address" variant="outlined" />
                </Grid>
                <Grid>
                    <Button variant="outlined">Create Patient</Button>
                </Grid>
            </Grid>
        </>
    );

};

export default NewPatient;