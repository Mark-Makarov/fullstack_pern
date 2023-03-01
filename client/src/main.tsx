import './index.css';
import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import UserStore from "./store/UserStore";
import App from "./App";
import DeviceStore from "./store/DeviceStore";

export const Context = createContext({})

ReactDOM.render(
    <React.StrictMode>
        <Context.Provider value={{
            user: new UserStore(),
            device: new DeviceStore(),
        }}>
        <App/>
        </Context.Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
