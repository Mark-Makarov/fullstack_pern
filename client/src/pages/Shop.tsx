import React, {FC, useContext, useEffect} from 'react';
import {Box} from "@mui/material";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../main";
import {fetchBrands, fetchDevices, fetchTypes} from "../api/deviceAPI";

const Shop: FC = observer(() => {

    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices().then(data => device.setDevices(data.rows))
    }, [])

    return (
        <Box m={2} alignItems={'center'}>
            <TypeBar/>
            <BrandBar/>
            <DeviceList/>
        </Box>
    );
});

export default Shop;