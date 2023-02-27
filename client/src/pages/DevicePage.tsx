import React from 'react';
import {Box, Button, Stack} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";

const DevicePage = () => {

    const device = {
        id: 11,
        name: 'Iphone 112',
        price: 9999,
        rating: 4,
        img: `https://wallbox.ru/resize/800x480/wallpapers/main2/201730/glaza.jpg`
    }

    const description = [
        {id: 1, title: 'Процессор: ', description: 'A9X 2.8Ггц'},
        {id: 2, title: 'Оперативная память: ', description: '8Гб'},
        {id: 3, title: 'Дисплей: ', description: 'Retina 2080x1040'},
        {id: 4, title: 'Камера: ', description: '42Мп'},
        {id: 5, title: 'Память: ', description: '128Гб'},
        {id: 6, title: 'Год выхода модели: ', description: '2022'},
        {id: 7, title: 'Аккамулятор: ', description: '3700Mah'},
    ]

    const formatter = new Intl.NumberFormat('ru-RU', {style: 'currency', currency: 'RUB'});

    return (
        <Box sx={{m: 2, display: 'flex', justifyContent: 'center'}}>
            <Stack sx={{flexDirection: 'column', display: 'flex'}}>
                <Stack flexDirection={'row'}>
                    <Box component={'img'} src={device.img} sx={{width: 300, height: 400, borderRadius: 2, mr: 4}}/>
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
                    {description.map(item =>
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