import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../main";
import {Box, List, Stack} from "@mui/material";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const TypeBar = observer(() => {

        const {device} = useContext(Context)

        return (
            <Box sx={{maxWidth: 150, height: '80%', position: 'fixed'}}>
                <List dense sx={{maxWidth: 150, bgcolor: 'background.paper', m: 1}}>
                    {device.types.map(type =>
                        <ListItem
                            key={type.id}
                            disablePadding
                        >
                            <ListItemButton onClick={() => device.setSelectedType(type)} sx={{my: 1, borderRadius: 2}}
                            selected={type.id === device.selectedType.id}
                            >
                                <ListItemText id={type.id} primary={type.name}/>
                            </ListItemButton>
                        </ListItem>
                    )}
                </List>
            </Box>
        )
    }
);

export default TypeBar;