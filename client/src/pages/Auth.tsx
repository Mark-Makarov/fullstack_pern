import React, {useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import AddIcon from '@mui/icons-material/Add';
import {useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const [inputLogin, setInputLogin] = useState('')
    const [inputPass, setInputPass] = useState('')

    const location = useLocation()
    const navigate = useNavigate()

    const handleChangeInputLogin = (e) => {
        setInputLogin(e.target.value)
    }

    const handleChangeInputPass = (e) => {
        setInputPass(e.target.value)
    }

    const login = () => {
        navigate(LOGIN_ROUTE)
    }

    const registration = () => {
        navigate(REGISTRATION_ROUTE)
    }

    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Stack direction='column' spacing={2} justifyContent='center' alignItems='center'
               style={{height: 'calc(100vh - 70px)'}}>
            <Typography>{isLogin ? 'Авторизация' : 'Регистрация'}</Typography>
            <TextField id="outlined-basic" label="Логин" value={inputLogin}
                       variant="outlined" onChange={e => handleChangeInputLogin(e)}/>
            <TextField id="outlined-basic" label="Пароль" value={inputPass}
                       variant="outlined" onChange={e => handleChangeInputPass(e)}/>
            {isLogin ? <Button variant="contained" sx={{color: "secondary.contrastText"}} onClick={login}>
                <Typography pr={1} sx={{fontSize: 15}}>Войти</Typography>
                <LoginIcon/>
            </Button>
                : <Button variant="contained" sx={{color: "secondary.contrastText"}} onClick={registration}>
                <Typography pr={1} sx={{fontSize: 15}}>Зарегистрироваться</Typography>
                <AddIcon/>
                </Button>}
            {!isLogin ? <Button variant="contained" sx={{color: "secondary.contrastText"}} onClick={login}>
                    <Typography pr={1} sx={{fontSize: 15}}>Войти</Typography>
                    <LoginIcon/>
                </Button>
                : <Button variant="contained" sx={{color: "secondary.contrastText"}} onClick={registration}>
                    <Typography pr={1} sx={{fontSize: 15}}>Зарегистрироваться</Typography>
                    <AddIcon/>
                </Button>}
        </Stack>
    );
};

export default Auth;