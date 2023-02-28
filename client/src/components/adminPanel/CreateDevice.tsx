import React, {ChangeEvent, FC, SyntheticEvent, useContext, useState} from 'react';
import Typography from "@mui/material/Typography";
import {Box, Button, FormControl, InputLabel, Select, SelectChangeEvent, TextField} from "@mui/material";
import {Context} from "../../main";
import DeleteIcon from '@mui/icons-material/Delete';
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";

interface Description {
    title: string,
    description: string,
    number: number
}

const CreateDevice: FC = () => {

    const {device} = useContext(Context)

    const [selectedBrand, setSelectedBrand] = useState('')
    const [selectedType, setSelectedType] = useState('')
    const [inputDeviceName, setInputDeviceName] = useState('')
    const [inputDevicePrice, setInputDevicePrice] = useState('')
    const [inputFile, setInputFile] = useState('')
    const [descriptionData, setDescriptionData] = useState<Description[]>([])

    const selectBrandHandler = (event: SelectChangeEvent) => {
        setSelectedBrand(event.target.value)
    }

    const selectTypeHandler = (event: SelectChangeEvent) => {
        setSelectedType(event.target.value)
    }

    const inputDeviceNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputDeviceName(e.target.value)
    }

    const inputDevicePriceHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputDevicePrice(e.target.value)
    }

    const inputFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputFile(e.target.value)
    }

    const addDescription = () => {
        setDescriptionData([...descriptionData, {title: '', description: '', number: Date.now()}])
    }

    const removeDescription = (number: number) => {
        setDescriptionData(descriptionData.filter(i => i.number !== number))
    }

    return (
        <Box sx={{flexDirection: 'column', width: '500px'}}>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography fontSize={30}>
                    Добавить новый девайс
                </Typography>
                <FormControl fullWidth sx={{mt: 2, width: '100%'}}>
                    <InputLabel>Выберите бренд</InputLabel>
                    <Select label="Выберите бренд" value={selectedBrand} onChange={selectBrandHandler}>
                        {device.brands.map((brand) => (
                            <MenuItem value={brand.name} key={brand.id}>
                                {brand.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{mt: 2, width: '100%'}}>
                    <InputLabel>Выберите тип</InputLabel>
                    <Select label="Выберите бренд" value={selectedType} onChange={selectTypeHandler}>
                        {device.types.map((type) => (
                            <MenuItem value={type.name} key={type.id}>
                                {type.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    type={'text'}
                    label={'Введите название устройства...'}
                    sx={{width: '100%', mt: 2, mb: 1}}
                    value={inputDeviceName}
                    onChange={inputDeviceNameHandler}
                />
                <TextField
                    type={'text'}
                    label={'Введите стоимость устройства...'}
                    sx={{width: '100%', my: 1}}
                    value={inputDevicePrice}
                    onChange={inputDevicePriceHandler}
                />
                <TextField
                    type={'file'}
                    sx={{width: '100%', my: 1}}
                    value={inputFile}
                    onChange={inputFileHandler}
                />
            </Box>
            <Box>
                <Button sx={{my: 1}} variant={'contained'} fullWidth onClick={addDescription}>
                    Добавить характеристики
                </Button>
                {descriptionData.map(descriptionData =>
                    <Box my={1} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
                         key={descriptionData.number}>
                        <TextField
                            type={'text'}
                            label={'Название характеристики...'}
                            sx={{m: 1, width: '200px'}}
                        />
                        <TextField
                            type={'text'}
                            label={'Описание характеристики...'}
                            sx={{m: 1, width: '200px'}}
                        />
                        <IconButton sx={{width: 50, height: 50}}
                                    onClick={() => removeDescription(descriptionData.number)}>
                            <DeleteIcon fontSize={'large'} sx={{color: 'red'}}/>
                        </IconButton>
                    </Box>
                )}
            </Box>
            <Button fullWidth variant={'contained'} sx={{
                backgroundColor: 'rgb(0%, 50%, 0%, 0.9);',
                '&:hover': {
                    backgroundColor: 'rgb(0%, 50%, 0%, 0.7);'
                }
            }}>
                Добавить
            </Button>
        </Box>
    );
};

export default CreateDevice;