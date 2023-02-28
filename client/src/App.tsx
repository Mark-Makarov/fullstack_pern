import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Context} from "./main";
import {observer} from 'mobx-react-lite';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {check} from "./api/userAPI";

const App = observer(() => {

    const {user} = useContext(Context)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
    check().then(data => {
        user.setIsAuth(true)
    }).finally(() => setLoading(false))
    }, [])

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
});

export default App;