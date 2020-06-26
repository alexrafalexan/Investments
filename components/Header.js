import React from 'react';
import {Menu, MenuItem} from "semantic-ui-react";


export default () => {
  return(
      <Menu style={{marginTop: '10px'}}>
          <Menu.Item>
              Έρευνες
          </Menu.Item>

          <Menu.Menu position="right">
              <MenuItem>
                  Δημιουργία Έρευνας
              </MenuItem>
              <MenuItem>
                  +
              </MenuItem>
          </Menu.Menu>
      </Menu>
  );
};