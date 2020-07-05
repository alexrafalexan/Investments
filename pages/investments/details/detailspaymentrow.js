import React , { Component } from 'react';
import {Table} from 'semantic-ui-react';
import Button from "semantic-ui-react/dist/commonjs/elements/Button";
import {Link} from "../../../routes";
import Layout from "../../../components/Layout";

class DetailsPaymentrowRow extends Component {
    render() {
        const { Row, Cell } = Table;
        const {id, details} = this.props; //209 -- 4:38

        return (
            <Row>
                <Cell>{id}</Cell>
                <Cell>{details.activityNumber}</Cell>
                <Cell>{details.value}</Cell>
                <Cell>{details.detail}</Cell>
                <Cell>{details.seller}</Cell>
            </Row>
        );
    }
}
export default DetailsPaymentrowRow;
