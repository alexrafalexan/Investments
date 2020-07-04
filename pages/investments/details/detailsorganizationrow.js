import React , { Component } from 'react';
import {Table} from 'semantic-ui-react';
import Button from "semantic-ui-react/dist/commonjs/elements/Button";
import Investment from '../../../ethproject/investment';
import web3 from "../../../ethproject/web3";


class DetailsOrganizationRow extends Component {


    onInsert = async () => {
        const investment = Investment (this.props.address);
        const accounts = await web3.eth.getAccounts();
        await investment.methods. E_OrganizationsPayment().send({
            from: accounts[0],
            value: web3.utils.toWei(this.props.contributionorganization, 'wei')
        });

    };



    render() {

        this.props.organizationsaddressesbypaymentmapping.then(function(val) {
            console.log(val)
            const temp = val;
            console.log(temp);
            return {temp};
        });

        const { Row, Cell } = Table;
        const {id, details} = this.props; //209 -- 4:38

        return (
            <Row>
                <Cell>{id}</Cell>
                <Cell>{details}</Cell>
                                <Cell>{details}</Cell>
                <Cell>
                    <Button color="green" basic onClick={this.onInsert}>Συμμετοχή</Button>
                </Cell>
            </Row>
        );
    }
}
export default DetailsOrganizationRow;
