import React, {Component} from 'react';
import {Table, Form, Message} from 'semantic-ui-react';
import Button from "semantic-ui-react/dist/commonjs/elements/Button";
import Investment from '../../../ethproject/investment';
import web3 from "../../../ethproject/web3";
import {Router} from "../../../routes";


class DetailsOrganizationRowByMaster extends Component {
    state = {
        errMessage: '',
        loading: false
    };



    render() {

        const {Row, Cell} = Table;
        const {id, details} = this.props; //209 -- 4:38

        return (
            <Row>
                <Cell>{id}</Cell>
                <Cell>{details}</Cell>
            </Row>
        );
    }
}

export default DetailsOrganizationRowByMaster;
