import React, {useEffect, useState} from 'react';
import {Box, Button, Stack} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import {useParams} from "react-router-dom";
import {fetchOneDevice} from "../api/deviceAPI";

const DevicePage = () => {

    const [device, setDevice] = useState({info: []})
    const params = useParams()

    useEffect(() => {
         fetchOneDevice(params.id).then(data => setDevice(data))
    }, [])


    const formatter = new Intl.NumberFormat('ru-RU', {style: 'currency', currency: 'RUB'});

    return (
        <Box sx={{m: 2, display: 'flex', justifyContent: 'center'}}>
            <Stack sx={{flexDirection: 'column', display: 'flex'}}>
                <Stack flexDirection={'row'}>
                    <Box component={'img'} src={import.meta.env.VITE_REACT_APP_API_URL + device.img} sx={{width: 300, height: 400, borderRadius: 2, mr: 4}}/>
                    <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                        <Typography fontSize={35} component="div">
                            Рейтинг: {device.rating}
                            <StarIcon fontSize={'large'} sx={{color: 'gold'}}/>
                        </Typography>
                        <Typography fontSize={20} component="div" my={1}>
                            Стоимость: {formatter.format(device.price)}
                        </Typography>
                        <Button variant={'contained'}>
                            Добавить в корзину
                        </Button>
                    </Box>
                </Stack>
                <Box mt={2}>
                    <Typography fontSize={20} sx={{ml: 2}}>
                        Характеристики:
                    </Typography>
                    {device?.info.map(item =>
                        <Box m={1} p={1} sx={{
                            borderRadius: 2,
                            backgroundColor: item.id % 2 != 0 ? 'rgb(10%, 46%, 82%, 0.1)' : 'white'
                        }}>
                            <Typography key={item.id}>
                                {item.title} {item.description}
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Stack>
        </Box>
    );
};

export default DevicePage;