import Grid from '@mui/material/Unstable_Grid2';
import Auth from "../components/Auth";

function Home() {

    return (
        <Grid container justifyContent="center" alignItems="center" sx={{height: "100vh", width: "100vw"}} spacing={1}>
            <Grid container xs={12} justifyContent="center" alignItems="center">
                <h1>Guma Tinemtom</h1>
            </Grid>
            <Grid container xs={12} justifyContent="center" alignItems="center">
                <Auth />
            </Grid>
            <Grid container xs={12} justifyContent="center" alignItems="center">
                <p>Copyright 2023. All Rights Reserved</p>
            </Grid>
        </Grid>
    );

};

export default Home;