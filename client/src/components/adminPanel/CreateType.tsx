import React, {ChangeEvent, FC, useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";

const CreateType: FC = () => {

    const [inputType, setInputType] = useState('')

    const inputHandler = (event : ChangeEvent<HTMLInputElement>) => {
        setInputType(event.target.value)
    }

    return (
        <Box>
            <Typography fontSize={30}>
                Добавить новый тип
            </Typography>
            <TextField label={'Введите новый тип...'} sx={{width: '100%', mt: 2, mb: 1}} value={inputType} onChange={inputHandler}/>
            <Button variant={'contained'} fullWidth={true}>
                Добавить
            </Button>
        </Box>
    );
};

export default CreateType;