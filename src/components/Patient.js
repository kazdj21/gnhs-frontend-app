import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardActions from '@mui/material/CardActions';

function Patient({ name, description, letter }) {

    return (
        <>
          <Card>
            <CardHeader avatar={<Avatar>{letter}</Avatar>} title={name} subheader={description}/>
          </Card>
        </>
    );

};

export default Patient;