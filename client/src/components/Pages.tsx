import React, {ChangeEvent, FC, useContext} from 'react';
import {Pagination} from "@mui/material";
import {Context} from "../main";

const Pages: FC = () => {

    const {device} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    const pagesNavigation = (e: ChangeEvent<unknown>) => {
        const target = e.target as HTMLInputElement;
        device.setPage(target.textContent);
    }

    if (pages.length > 1) {
        return (
            <Pagination hideNextButton hidePrevButton count={pages.length} size="large" onChange={pagesNavigation}/>
        );
    } else {
        return <></>
    }
};

export default Pages;