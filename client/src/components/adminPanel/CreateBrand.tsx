import React, {ChangeEvent, FC, SyntheticEvent, useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {createBrand, createType} from "../../api/deviceAPI";

const CreateBrand: FC = () => {

    const [inputBrand, setInputBrand] = useState('')
    const [showEvent, setShowEvent] = useState(false)

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputBrand(e.target.value)
    }

    const addBrand = () => {
        createBrand({name: inputBrand}).then(data => {
            setInputBrand('')
            setShowEvent(true)
        })
    }

    return (
        <Box>
            <Typography fontSize={30} sx={{textAlign: 'center'}}>
                Добавить новый бренд
            </Typography>
            <TextField label={'Введите новый тип...'} sx={{width: '100%', mt: 2, mb: 1}} value={inputBrand} onChange={inputHandler}/>
            <Button variant={'contained'} fullWidth onClick={addBrand}>
                Добавить
            </Button>
            {showEvent && <Typography fontSize={20} sx={{textAlign: 'center', mt: 2, color: 'green'}}>
					    Бренд успешно добавлен!
				    </Typography>}
        </Box>
    );
};

export default CreateBrand;