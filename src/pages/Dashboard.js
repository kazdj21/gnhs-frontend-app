import Grid from '@mui/material/Unstable_Grid2';

import Profile from "../components/Profile";
import Patients from '../components/Patients';

function Dashboard() {

    return (
        <>
            <Grid container direction="column">
                <Grid container justifyContent="center" alignItems="center">
                    <Profile />
                </Grid>
                <Grid container justifyContent="center" alignItems="center">
                    <Patients />
                </Grid>
                <Grid container justifyContent="center" alignItems="center">
                </Grid>
            </Grid>
        </>
    );

};

export default Dashboard;