import React, {useContext, useEffect, useState} from 'react';
import {Box, Button} from "@mui/material";
import CreateType from "../components/adminPanel/CreateType";
import CreateBrand from "../components/adminPanel/CreateBrand";
import CreateDevice from "../components/adminPanel/CreateDevice";
import {fetchBrands, fetchTypes} from "../api/deviceAPI";
import {Context} from "../main";

const Admin: React.FC = () => {

    const [activeTab, setActiveTab] = useState('')

    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])

    return (
        <>
        <Box m={2}>
            <Button sx={{width: '100%', my: 1}} variant={"contained"} onClick={() => setActiveTab('newType')}>
                Добавить тип
            </Button>
            <Button sx={{width: '100%', my: 1}} variant={"contained"} onClick={() => setActiveTab('newBrand')}>
                Добавить бренд
            </Button>
            <Button sx={{width: '100%', my: 1}} variant={"contained"} onClick={() => setActiveTab('newDevice')}>
                Добавить устройство
            </Button>
        </Box>
            <Box mb={1} sx={{display: 'flex', justifyContent: 'center'}}>
            {activeTab === 'newType' &&
               <CreateType/>
            }
            {activeTab === 'newBrand' &&
                <CreateBrand/>
            }
            {activeTab === 'newDevice' &&
			        <CreateDevice/>
            }
            </Box>
        </>
    );
};

export default Admin;