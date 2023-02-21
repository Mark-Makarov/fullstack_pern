import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import {authRoutes, publicRoutes} from '../routes';
import {Context} from "../main";
import {observer} from 'mobx-react-lite';
import NotFound from "../pages/NotFound";

const AppRouter = observer(() => {

    const {user} = useContext(Context);

    return (
            <Routes>
                {user.isAuth &&
                    authRoutes.map(({path, Component}) => (
                        <Route key={path} path={path} element={<Component/>}/>
                    ))}
                {publicRoutes.map(({path, Component}) => (
                    <Route key={path} path={path} element={<Component/>}/>
                ))}
                <Route path="*" element={<NotFound />} />
            </Routes>
    );
});

export default AppRouter;