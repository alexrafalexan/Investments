import React, {Component} from "react";
import {Button, Grid, GridRow} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Layout from "../../../components/Layout";
import AddOrganizationsForm from "../../../components/AddOrganizationsForm";
import AddActivityForm from "../../../components/AddActivityForm";

class CreateActivity extends Component {
    static async getInitialProps(props){
        const { address } = props.query;
        return {address};
    }

    render() {
        return (
            <Layout>
                <h3>Δημιουργία Activity από τον Master</h3>
                <Grid>
                    <GridRow>
                        <Grid.Column>
                            <AddActivityForm address={this.props.address}/>
                        </Grid.Column>
                    </GridRow>
                </Grid>
            </Layout>
        );
    }
}

export default CreateActivity;