import React, {Component} from 'react';
import Layout from "../../components/Layout";
import creator from "../../ethproject/creator";
import Investment from "../../ethproject/investment";
import {Card, GridColumn, Icon, Grid, Button, GridRow} from 'semantic-ui-react';
import web3 from '../../ethproject/web3';
import AddOrganizationsForm from "../../components/AddOrganizationsForm";
import AddActivityForm from "../../components/AddActivityForm";
import OrganizationsPayment from "../../components/OrganizationsPayment";
import {Link} from '../../routes';


class ShowInvestment extends Component{
    static async getInitialProps(props) {
        const investment = Investment(props.query.address);
        const investmentsummary = await investment.methods.getInvestmentSummary().call();

            return {
                address: props.query.address,
                master: investmentsummary[0],
                numOrganizations: investmentsummary[1],
                nowOrganizationsAddedDeclaireMaster: investmentsummary[2],
                nowOrganizationsAdded: investmentsummary[3],
                contributionorganization: investmentsummary[4],
                numInvestors: investmentsummary[5],
                nowInvestorsAdded: investmentsummary[6],
                contribution: investmentsummary[7],
                activities: investmentsummary[8],
                activitiesTable_length: investmentsummary[9],
                statusOfResearch: investmentsummary[10],
            };
        }

        renderCards(){
            const {
                master,
                numOrganizations,
                nowOrganizationsAddedDeclaireMaster,
                nowOrganizationsAdded,
                contributionorganization,
                numInvestors,
                nowInvestorsAdded,
                contribution,
                activities,
                activitiesTable_length,
                statusOfResearch
            } = this.props;


            let statusOfResearchPrev = this.props;


            if (statusOfResearch == 0){
                statusOfResearchPrev = 'Inactive';  //Προσθήκη Συνθηκών σε δεύτερο χρόνο
            }

            const items = [
                {
                    header: '1. Επόπτης Έρευνας',
                    meta : master,
                    description: 'Ο επόπτης της Έρευνας',
                    style: {overflowWrap: 'break-word'}
                },
                {
                    header: '2. Οργανισμοί' ,
                    meta: (<Link route={`/investments/${this.props.address}/details/detailsorganizations`}>
                        <a>
                            {nowOrganizationsAdded + '/' + nowOrganizationsAddedDeclaireMaster + '/' + numOrganizations + '  -- Λεπτομέρειες'}
                        </a>
                    </Link>),
                    description: 'O αρθιμός των Οργανισμών που έχουν συμμετάσχει σε σχέση με αυτούς που πρέπει να συμμετάσχουν.'
                },
                {
                    header: '3. Επενδυτές',
                    meta:  (<Link route={`/investments/${this.props.address}/requests`}>
                        <a>
                            {nowInvestorsAdded + '/' + numInvestors }
                        </a>
                    </Link>) ,
                    description: 'O αρθιμός των Επενδυτών που έχουν συμμετάσχει σε σχέση με αυτούς που πρέπει να συμμετάσχουν.'
                },
                {
                    header: '4. Συνεισφορά ανά Επένδυτή',
                    meta: web3.utils.fromWei(contribution, 'ether'),
                    description: 'Το ποσό σε ether που πρέπει να καταθέσει ο κάθε επενδυτής'
                },
                {
                    header: '5. Συνεισφορά ανά Οργανισμών',
                    meta: web3.utils.fromWei(contributionorganization,'ether'),
                    description: 'Το ποσό σε ether που πρέπει να καταθέσει ο κάθε Οργανισμός σαν εγγύηση'
                },
                {
                    header: '6. Αριθμός Activities',
                    meta: (<Link route={`/investments/${this.props.address}/details/detailsactivities`}>
                        <a>
                            {activitiesTable_length + '/' + activities + '  -- Λεπτομέρειες Activity'}
                        </a>
                    </Link>),
                    description: 'Ο αριθμός των Activities που θα αποτελείται η έρευνα'
                },
                {
                    header: '7. Κατάσταση Έρευνας',
                    meta: statusOfResearchPrev,
                    description: ''
                }
            ];

            return <Card.Group items={items}/>;


        }

        render() {
            return (<Layout>
                <h3>Λεπτομέρειες</h3>
                <Grid>
                    <GridRow>
                        <Grid.Column width={10}>
                            {this.renderCards()}
                        </Grid.Column>
                        <Grid.Column width={5}><AddOrganizationsForm address={this.props.address}
                                                                     nowOrganizationsAdded={this.props.nowOrganizationsAdded}
                                                                     numOrganizations={this.props.numOrganizations}/>
                                                                     <br></br>
                            <AddActivityForm address={this.props.address}/>
                        </Grid.Column>
                    </GridRow>
                    <GridRow>
                        <Grid.Column width={10}><OrganizationsPayment address={this.props.address}/>
                            <br></br>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Link route={`/investments/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>Προβολή Οργανισμών</Button>
                                </a>
                            </Link>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Link route={`/investments/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>Λεπρομέριες Activity</Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </GridRow>

                </Grid>
            </Layout>);
        }
}

export default ShowInvestment;