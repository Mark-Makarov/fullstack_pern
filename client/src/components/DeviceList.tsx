import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../main";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box, CardActionArea, Stack} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import {useNavigate} from "react-router-dom";
import Pages from "./Pages";

const DeviceList = observer(() => {

    const {device} = useContext(Context)

    const formatter = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' });

    const navigate = useNavigate()
    
        return (
            <Box sx={{m: '0px 0px 0px 166px', height: '100%'}}>
            <Stack sx={{flexDirection: 'row', flexWrap: 'wrap', display: 'flex', justifyContent: 'center'}}>
                {device.devices.map(device =>
                    <Card sx={{ width: 200, maxHeight: 350, m: 1 }} key={device.id} onClick={() => navigate(`/device/${device.id}`)}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={import.meta.env.VITE_REACT_APP_API_URL + device.img}
                            />
                            <CardContent>
                                <Typography fontSize={20} component="div">
                                    {device.name}
                                </Typography>
                                <Typography fontSize={15} component="div" my={1}>
                                   Стоимость: {formatter.format(device.price)}
                                </Typography>
                                <Typography fontSize={15} component="div" sx={{display: 'flex', alignItems: 'start'}}>
                                    Рейтинг: {device.rating}
                                    <StarIcon fontSize={'small'} sx={{color: 'gold'}}/>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                )}
            </Stack>
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', mt: 2}}>
                    <Pages/>
                </Box>
            </Box>
        );
    }
);

export default DeviceList;