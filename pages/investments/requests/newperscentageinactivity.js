import React, {Component} from "react";
import {Button, Grid, GridRow} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Layout from "../../../components/Layout";
import AddPercentageInActivityForm from '../../../components/AddPercentageInActivityForm'
import RequestDetails from "../../../components/RequestDetails";

class AddOrganizationPerscentage extends Component {
    static async getInitialProps(props){
        const { address } = props.query;
        const { id } = props.query;
        return {address, id};
    }

    render() {
        return (
            <Layout>
                <h3>Ποσοστά Κάλυψης Activity</h3>
                <Grid>
                    <GridRow>
                        <Grid.Column>
                            <RequestDetails address= {this.props.address} id = {this.props.id}/>
                        </Grid.Column>
                    </GridRow>
                        <GridRow>
                        <Grid.Column>
                            <AddPercentageInActivityForm address= {this.props.address} id = {this.props.id}/>
                        </Grid.Column>
                    </GridRow>
                </Grid>
            </Layout>
        );
    }
}

export default AddOrganizationPerscentage;