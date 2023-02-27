import React, {useState} from 'react';
import {Box, Button} from "@mui/material";

const Admin: React.FC = () => {

    const [activeTab, setActiveTab] = useState('')

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
            <Box m={2} sx={{display: 'flex', justifyContent: 'center'}}>
            {activeTab === 'newType' &&
                <Box>
                  type
                </Box>
            }
            {activeTab === 'newBrand' &&
			        <Box>
				        brand
			        </Box>
            }
            {activeTab === 'newDevice' &&
			        <Box>
				        device
			        </Box>
            }
            </Box>
        </>
    );
};

export default Admin;