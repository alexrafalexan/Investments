import React from 'react';
import {Menu, MenuItem} from "semantic-ui-react";
import {Link} from '../routes';


export default () => {
  return(
      <Menu style={{marginTop: '10px'}}>
          <Link route="/">
              <a className="item">
                  Έρευνες
              </a>
          </Link>
          <Menu.Menu position="right">
              <Link route="/">
                  <a className="item">
                      Έρευνες
                  </a>
              </Link>
              <Link route="/investments/newinvestment">
                  <a className="item">
                      +
                  </a>
              </Link>
          </Menu.Menu>
      </Menu>
  );
};