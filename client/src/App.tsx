import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Context} from "./main";
import {observer} from 'mobx-react-lite';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {check} from "./api/userAPI";
import {Box, CircularProgress} from "@mui/material";

const App = observer(() => {

    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    return (
        <BrowserRouter>
            {loading ? <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <CircularProgress size={100}/>
                </Box>
                : <>
                    <NavBar/>
                    <AppRouter/>
                </>}
        </BrowserRouter>
    );
});

export default App;