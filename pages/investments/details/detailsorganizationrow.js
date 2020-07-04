import React , { Component } from 'react';
import {Table} from 'semantic-ui-react';

class DetailsOrganizationRow extends Component {
    render() {
        const { Row, Cell } = Table;
        const {id, details} = this.props; //209 -- 4:38

        return (
            <Row>
                <Cell>{id}</Cell>
                <Cell>{details}</Cell>
            </Row>
        );
    }
}
export default DetailsOrganizationRow;
