import React from 'react';
import {Menu, MenuItem} from "semantic-ui-react";
import {Link} from '../routes';


export default () => {
    return (
        <Menu stackable>
            <Menu.Item
                name = 'copyright'
                position='center'
                fitted='vertically'>
                2020 © Copyright Πανεπιστήμιο Πειραιώς
            </Menu.Item>
        </Menu>
    );
};