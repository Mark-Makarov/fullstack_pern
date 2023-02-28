import React, {useContext, useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import AddIcon from '@mui/icons-material/Add';
import {useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../api/userAPI";
import jwtDecode from "jwt-decode";
import {observer} from "mobx-react-lite";
import {Context} from "../main";

const Auth = observer(() => {
        const {user} = useContext(Context)
        const [inputLogin, setInputLogin] = useState('')
        const [inputPass, setInputPass] = useState('')


        const handleChangeInputLogin = (e) => {
            setInputLogin(e.target.value)
        }

        const handleChangeInputPass = (e) => {
            setInputPass(e.target.value)
        }

        const location = useLocation()
        const navigate = useNavigate()

        // const login = () => {
        //     navigate(LOGIN_ROUTE)
        // }
        //
        // const registration = () => {
        //     navigate(REGISTRATION_ROUTE)
        // }

        const signIn = async () => {
            const res = await login(inputLogin, inputPass)
            user.setUser(res)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        }

        const singUP = async () => {
            const res = await registration(inputLogin, inputPass)
            user.setUser(res)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        }

        return (
            <Stack direction='column' spacing={2} justifyContent='center' alignItems='center'
                   style={{height: 'calc(100vh - 70px)'}}>
                <Typography fontSize={35}>Авторизируйтесь</Typography>
                <TextField label="Логин" value={inputLogin}
                           variant="outlined" onChange={e => handleChangeInputLogin(e)}/>
                <TextField label="Пароль" value={inputPass}
                           variant="outlined" onChange={e => handleChangeInputPass(e)}/>
                <Button variant="contained" sx={{color: "secondary.contrastText"}} onClick={signIn}>
                    <Typography pr={1} sx={{fontSize: 15}}>Войти</Typography>
                    <LoginIcon/>
                </Button>
                <Button variant="contained" sx={{color: "secondary.contrastText"}} onClick={singUP}>
                    <Typography pr={1} sx={{fontSize: 15}}>Зарегистрироваться</Typography>
                    <AddIcon/>
                </Button>
            </Stack>
        )
    }
)


export default Auth;