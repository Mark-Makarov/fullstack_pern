import React, {ChangeEvent, FC, SyntheticEvent, useContext, useEffect, useState} from 'react';
import Typography from "@mui/material/Typography";
import {Box, Button, FormControl, InputLabel, Select, SelectChangeEvent, TextField} from "@mui/material";
import {Context} from "../../main";
import DeleteIcon from '@mui/icons-material/Delete';
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import {createDevice, fetchBrands, fetchTypes} from "../../api/deviceAPI";
import {observer} from "mobx-react-lite";

interface Description {
    title: string,
    description: string,
    number: number
}

const CreateDevice: FC = observer(() => {

    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])

    const [selectedBrand, setSelectedBrand] = useState('')
    const [selectedInputBrand, setSelectedInputBrand] = useState('')
    const [selectedType, setSelectedType] = useState('')
    const [selectedInputType, setSelectedInputType] = useState('')
    const [inputDeviceName, setInputDeviceName] = useState('')
    const [inputDevicePrice, setInputDevicePrice] = useState('')
    const [inputFile, setInputFile] = useState('')
    const [descriptionData, setDescriptionData] = useState<Description[]>([])
    const [showEvent, setShowEvent] = useState(false)

    const selectBrandHandler = (event: SelectChangeEvent) => {
        const selectedBrandName = event.target.value;
        const selectedBrand = device.brands.find((brand) => brand.name === selectedBrandName);
        setSelectedBrand(selectedBrand.id);
        setSelectedInputBrand(selectedBrandName)
    }

    const selectTypeHandler = (event: SelectChangeEvent) => {
        const selectedTypeName = event.target.value;
        const selectedBrand = device.types.find((type) => type.name === selectedTypeName);
        setSelectedType(selectedBrand.id);
        setSelectedInputType(selectedTypeName)
    }

    const inputDeviceNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputDeviceName(e.target.value)
    }

    const inputDevicePriceHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputDevicePrice(e.target.value)
    }

    const inputFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputFile(e.target.files[0])
    }

    const addDescription = () => {
        setDescriptionData([...descriptionData, {title: '', description: '', number: Date.now()}])
    }

    const removeDescription = (number: number) => {
        setDescriptionData(descriptionData.filter(i => i.number !== number))
    }

    const changeDescriptionData = (key, value, number) => {
        setDescriptionData(descriptionData.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', inputDeviceName)
        formData.append('price', inputDevicePrice)
        formData.append('img', inputFile)
        formData.append('brandId', selectedBrand)
        formData.append('typeId', selectedType)
        formData.append('info', JSON.stringify(descriptionData))
        createDevice(formData).then(data => setShowEvent(true))

        setSelectedBrand('')
        setSelectedInputBrand('')
        setSelectedType('')
        setSelectedInputType('')
        setInputDeviceName('')
        setInputDevicePrice('')
        setInputFile('')
        setDescriptionData([])
    }

    return (
        <Box sx={{flexDirection: 'column', width: '500px'}}>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography fontSize={30}>
                    Добавить новый девайс
                </Typography>
                <FormControl fullWidth sx={{mt: 2, width: '100%'}}>
                    <InputLabel>{selectedInputBrand || 'Выберите бренд'}</InputLabel>
                    <Select label={selectedInputBrand || 'Выберите бренд'} value={selectedInputBrand} onChange={selectBrandHandler}>
                        {device.brands.map((brand) => (
                            <MenuItem value={brand.name} key={brand.id}>
                                {brand.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{mt: 2, width: '100%'}}>
                    <InputLabel>{selectedInputType || 'Выберите тип'}</InputLabel>
                    <Select label={selectedInputType || 'Выберите тип'} value={selectedInputType} onChange={selectTypeHandler}>
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
                            value={descriptionData.title}
                            onChange={(e) => changeDescriptionData('title', e.target.value, descriptionData.number)}
                            label={'Название хар-ки...'}
                            sx={{m: 1, width: '200px'}}
                        />
                        <TextField
                            value={descriptionData.description}
                            onChange={(e) => changeDescriptionData('description', e.target.value, descriptionData.number)}
                            label={'Описание хар-ки...'}
                            sx={{m: 1, width: '200px'}}
                        />
                        <IconButton sx={{width: 50, height: 50}}
                                    onClick={() => removeDescription(descriptionData.number)}>
                            <DeleteIcon fontSize={'large'} sx={{color: 'red'}}/>
                        </IconButton>
                    </Box>
                )}
            </Box>
            <Button fullWidth variant={'contained'} onClick={addDevice} sx={{
                backgroundColor: 'rgb(0%, 50%, 0%, 0.9);',
                '&:hover': {
                    backgroundColor: 'rgb(0%, 50%, 0%, 0.7);'
                }
            }}>
                Добавить
            </Button>
            {showEvent && <Typography fontSize={20} sx={{textAlign: 'center', mt: 2, color: 'green'}}>
			        Бренд успешно добавлен!
		        </Typography>}
        </Box>
    );
});

export default CreateDevice;