import React, {useContext, useState} from 'react';
import {Button, Stack, TextField, Typography} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../api/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../main";

const Auth = observer(() => {
        const {user} = useContext(Context)
        const [inputLogin, setInputLogin] = useState('')
        const [inputPass, setInputPass] = useState('')
        const [errorText, setErrorText] = useState('')


        const handleChangeInputLogin = (e) => {
            setInputLogin(e.target.value)
        }

        const handleChangeInputPass = (e) => {
            setInputPass(e.target.value)
        }

        const navigate = useNavigate()

        const authHandler = async (args: string) => {
            if (inputPass && inputLogin) {
                try {
                    const res = args === 'login' ? await login({
                        email: inputLogin,
                        password: inputPass
                    }) : await registration({email: inputLogin, password: inputPass})
                    user.setUser(res)
                    user.setIsAuth(true)
                    navigate(SHOP_ROUTE)
                } catch (e: any) {
                    setErrorText(e.response.data.message)
                }
            } else {
                setErrorText('Заполните поля')
            }
        }

        return (
            <Stack direction='column' spacing={2} justifyContent='center' alignItems='center'
                   style={{height: 'calc(100vh - 70px)'}}>
                <Typography fontSize={35}>Авторизируйтесь</Typography>
                <TextField label="Логин" value={inputLogin}
                           variant="outlined" onChange={e => handleChangeInputLogin(e)}/>
                <TextField label="Пароль" value={inputPass}
                           variant="outlined" onChange={e => handleChangeInputPass(e)}/>
                <Button variant="contained" sx={{color: "secondary.contrastText"}} onClick={() => authHandler('login')}>
                    <Typography pr={1} sx={{fontSize: 15}}>Войти</Typography>
                    <LoginIcon/>
                </Button>
                <Button variant="contained" sx={{color: "secondary.contrastText"}}
                        onClick={() => authHandler('registration')}>
                    <Typography pr={1} sx={{fontSize: 15}}>Зарегистрироваться</Typography>
                    <AddIcon/>
                </Button>
                {errorText !== '' && <Typography mt={2} sx={{fontSize: 20, color: 'red'}}>{errorText}!</Typography>}
            </Stack>
        )
    }
)


export default Auth;