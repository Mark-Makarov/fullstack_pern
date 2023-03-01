import React, {ChangeEvent, FC, useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {createType} from "../../api/deviceAPI";

const CreateType: FC = () => {

    const [inputType, setInputType] = useState('')
    const [showEvent, setShowEvent] = useState(false)

    const inputHandler = (event : ChangeEvent<HTMLInputElement>) => {
        setInputType(event.target.value)
    }

    const addType = () => {
        createType({name: inputType}).then(data => {
            setInputType('')
            setShowEvent(true)
        })
    }

    return (
        <Box>
            <Typography fontSize={30} sx={{textAlign: 'center'}}>
                Добавить новый тип
            </Typography>
            <TextField label={'Введите новый тип...'} sx={{width: '100%', mt: 2, mb: 1}} value={inputType} onChange={inputHandler}/>
            <Button variant={'contained'} fullWidth onClick={addType}>
                Добавить
            </Button>
            {showEvent && <Typography fontSize={20} sx={{textAlign: 'center', mt: 2, color: 'green'}}>
                Тип успешно добавлен!
            </Typography>}
        </Box>
    );
};

export default CreateType;