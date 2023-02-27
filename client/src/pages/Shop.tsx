import React from 'react';
import {Box} from "@mui/material";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";

const Shop = () => {
    return (
        <Box m={2} alignItems={'center'}>
            <TypeBar/>
            <BrandBar/>
            <DeviceList/>
        </Box>
    );
};

export default Shop;