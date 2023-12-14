import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';
import { Button } from "@mui/material"
import { deepPurple } from '@mui/material/colors';

function Profile() {

    return (
        <>
            <Grid container direction="row" spacing={10} justifyContent="center" alignItems="center" xs={12}>
                <Grid container justifyContent="center" alignItems="center">
                    <Avatar sx={{ bgcolor: deepPurple[500] }}>U</Avatar>
                </Grid>
                <Grid container direction="column" spacing={2} justifyContent="center" alignItems="center">
                    <Grid>
                        <p>Good Morning, User!</p>
                    </Grid>
                    <Grid>
                        <p>Let's collect some data!</p>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" alignItems="center">
                    <Button variant="outlined">Log Off</Button>
                </Grid>
            </Grid>
        </>
    );

};

export default Profile;