import React, {Component} from 'react';
import {Table, Form, Message} from 'semantic-ui-react';
import Button from "semantic-ui-react/dist/commonjs/elements/Button";
import Investment from '../../../ethproject/investment';
import web3 from "../../../ethproject/web3";
import {Router} from "../../../routes";


class DetailsOrganizationRow extends Component {
    state = {
        errMessage: '',
        loading: false
    };


    onInsert = async () => {
        this.props.organizationsaddressesbypaymentmapping.then(function (val) {
            console.log(val);
        });
        console.log(this.props.organizationsaddressesbypaymentmapping);

        this.setState({loading: true, errMessage: ''});
        try {
            const investment = Investment(this.props.address);
            const accounts = await web3.eth.getAccounts();
            await investment.methods.E_OrganizationsPayment().send({
                from: accounts[0],
                value: web3.utils.toWei(this.props.contributionorganization, 'wei')
            });

            Router.replaceRoute(`/investments/${this.props.address}/details/detailsorganizations`)

        } catch (err) {
            this.setState({errMessage: err.message});
        }

        this.setState({loading: false, value: ''})
    };


    render() {

        const {Row, Cell} = Table;
        const {id, details} = this.props; //209 -- 4:38

        return (
            <Row>
                <Cell>{id}</Cell>
                <Cell>{details}</Cell>
                <Cell>{details}</Cell>
                    <Cell>
                        <Form onSubmit={this.onInsert} error={!!this.state.errMessage}>
                        <Button color="green" floated="right" basic loading={this.state.loading}>Συμμετοχή</Button>
                        </Form>
                    </Cell>
            </Row>
        );
    }
}

export default DetailsOrganizationRow;
