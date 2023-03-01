import React, {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import {Context} from "../main";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";


const NavBar = observer(() => {

        const navigate = useNavigate();
        const {user} = useContext(Context);

        const logOut = () => {
            user.setIsAuth(false)
            user.setUser({})
            navigate(LOGIN_ROUTE)
        }

        return (
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <HomeIcon sx={{display: 'flex', mr: 1}}/>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: 'flex',
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            PERN SHOP
                        </Typography>
                        <Box sx={{flexGrow: 1, justifyContent: 'end', display: 'flex'}}>
                            {user.isAuth ?
                                <>
                                    <Button
                                        onClick={() => navigate(SHOP_ROUTE)}
                                        sx={{m: 2, color: 'white', display: 'block'}}
                                    >
                                        Магазин
                                    </Button>
                                    <Button
                                        onClick={() => navigate(ADMIN_ROUTE)}
                                        sx={{m: 2, color: 'white', display: 'block'}}
                                    >
                                        Админ панель
                                    </Button>
                                    <Button
                                        onClick={logOut}
                                        sx={{m: 2, color: 'white', display: 'block'}}
                                    >
                                        Выйти
                                    </Button>
                                </>
                                : <Button
                                    onClick={() => navigate(LOGIN_ROUTE)}
                                    sx={{m: 2, color: 'white', display: 'block'}}
                                >
                                    Авторизация
                                </Button>
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        );
    }
);

export default NavBar;