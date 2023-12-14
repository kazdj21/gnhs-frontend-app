import Grid from '@mui/material/Unstable_Grid2';
import Patient from './Patient';

function Patients() {

    return (
        <>
            <Grid container direction="column" xs={8} spacing={3}>
                <Grid>
                    <h2>Patients</h2>
                </Grid>
                <Grid container direction="column">
                    <Grid>
                        <Patient name="foo bar" description="a patient" letter="F" />
                    </Grid>
                    <Grid>
                        <Patient name="soo bar" description="a patient" letter="S" />
                    </Grid>
                    <Grid>
                        <Patient name="loo bar" description="a patient" letter="L" />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );

};

export default Patients;