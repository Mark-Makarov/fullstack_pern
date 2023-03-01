import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../main";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box, Button, CardActionArea, CardActions, List, Stack} from '@mui/material';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const BrandBar = observer(() => {

    const {device} = useContext(Context)

    return (
        <Box sx={{m: '16px 16px 0px 166px', display: 'flex', justifyContent: 'center'}}>
            <List dense sx={{m: 1, flexDirection: 'row', display: 'flex'}}>
                {device.brands.map(brands =>
                    <ListItem
                        key={brands.id}
                        disablePadding
                        sx={{borderRadius: 2, maxWidth: 150, m: 1}}
                    >
                        <ListItemButton onClick={() => device.setSelectedBrand(brands)} sx={{borderRadius: 2}}
                                        selected={brands.id === device.selectedBrand.id}
                        >
                            <ListItemText id={brands.id} primary={brands.name}/>
                        </ListItemButton>
                    </ListItem>
                )}
            </List>
        </Box>
    );
});

export default BrandBar;