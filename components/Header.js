import React from 'react';
import {Menu, MenuItem} from "semantic-ui-react";
import {Link} from '../routes';


export default () => {
    return (
        <Menu  style={{marginTop: '10px'}} stackable>
            <Menu.Item>
                <img src='https://www.lifo.gr/uploads/image/559279/LOGO-THIREOS-PAN.jpg'/>
            </Menu.Item>
            <Menu.Item name='home'>
                <Link route={`/`}>
                    <a>Home</a>
                </Link>
            </Menu.Item>
            <Menu.Item name='investments'>
                <Link route={`/investments/showinvestments`}>
                    <a>Έρευνες</a>
                </Link>
            </Menu.Item>
            <Menu.Item name='investmentcreate'>
                <Link route={`/investments/newinvestment`}>
                    <a>Δημιουργία Έρευνας</a>
                </Link>
            </Menu.Item>
            <Menu.Item position='right' name='about'>
                <Link route={`/aboutdapp`}>
                    <a>About DApp</a>
                </Link>
            </Menu.Item>
        </Menu>
    );
};