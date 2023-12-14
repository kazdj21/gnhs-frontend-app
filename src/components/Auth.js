import { TextField, Button } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from "react-router-dom";

function Auth() {

    return (
        <>
            <Grid container direction="column" spacing={2}>
                <Grid>
                    <TextField variant="outlined" label="Username" />
                </Grid>
                <Grid>
                    <TextField variant="outlined" label="Password" type="password" />
                </Grid>
                <Grid>
                    <Link to={"/dashboard"}><Button variant="contained">Log In</Button></Link>
                </Grid>
            </Grid>
        </>
    );

};

export default Auth;