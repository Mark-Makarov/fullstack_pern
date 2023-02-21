import React, {useContext} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Context} from "./main";
import {observer} from 'mobx-react-lite';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";

const App = observer(() => {

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
});

export default App;