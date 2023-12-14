import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function SurveySelector({ title, data, onChange }) {

    return (
        <>
            <FormControl fullWidth>
                    <InputLabel id={`${title}-select`}>{title}</InputLabel>
                    <Select value={title} labelId={`${title}-select`} label={title} onChange={(event) => onChange(event.target.value)}>
                        {
                            data.map((i) => (
                                <MenuItem value={i}>{i.name}</MenuItem>
                            ))
                        }
                    </Select>
            </FormControl>
        </>
    );
    

};

export default SurveySelector;