import React , { Component } from 'react';
import {Table} from 'semantic-ui-react';
import Button from "semantic-ui-react/dist/commonjs/elements/Button";
import {Link} from "../../../routes";
import Layout from "../../../components/Layout";

class DetailsActivitiesRow extends Component {
 render() {
  const { Row, Cell } = Table;
    const {id, details} = this.props; //209 -- 4:38
     let statusOfActivityPrev = this.props;


     if (details.statusActivity == 0){
         statusOfActivityPrev = 'Inactive';
     }else if (details.statusActivity == 1){
         statusOfActivityPrev = 'Active';
     }else if (details.statusActivity == 2){
         statusOfActivityPrev = 'Pending';
     }else if (details.statusActivity == 3){
         statusOfActivityPrev = 'Cancelled';
     }else if (details.statusActivity == 4){
         statusOfActivityPrev = 'Completed';
     }

     let timeStart = "Investment have not started yet";
     let timeStop = "Investment have not started yet";

     if(details.timeStartActivity == 0){
         timeStart = 'Investment have not started yet';
         timeStop = 'Investment have not started yet';
     }else {
         timeStart = Intl.DateTimeFormat('en-US',{
             year: "numeric",
             month: "short",
             day: "2-digit",
             hour: "numeric",
             minute: "2-digit",
             second: "2-digit"
         }).format((details.timeStartActivity)*1000);
         timeStop = Intl.DateTimeFormat('en-US',{
             year: "numeric",
             month: "short",
             day: "2-digit",
             hour: "numeric",
             minute: "2-digit",
             second: "2-digit"
         }).format((details.timeStopActivity)*1000);
     }



  return (
      <Row>
       <Cell>{id}</Cell>
          <Cell>{details.detail}</Cell>
          <Cell>{details.perscentagecoverage}</Cell>
          <Cell>{details.value}</Cell>
          <Cell>{details.leftvalue}</Cell>
          <Cell>{statusOfActivityPrev}</Cell>
          <Cell>{details.timeSecStartActivity}</Cell>
          <Cell>{details.timeSecStopActivity}</Cell>
          <Cell>{timeStart}</Cell>
          <Cell>{timeStop}</Cell>
          <Cell>
              <Link route={`/investments/${this.props.address}/${id}/requests/newperscentageinactivity`}>
                  <a>
                      <Button color={"red"} basic>Λεπτομέρειες</Button>
                  </a>
              </Link>
          </Cell>
          <Cell>
              <Link route={`/investments/${this.props.address}/${id}/requests/newpayment`}>
                  <a>
                      <Button color={"green"} basic>Πληρωμή</Button>
                  </a>
              </Link>
          </Cell>
          <Cell>
              <Link route={`/investments/${this.props.address}/${id}/requests/changeactivitystatus`}>
                  <a>
                      <Button color={"red"} basic>Αλλαγή</Button>
                  </a>
              </Link>
          </Cell>
      </Row>
  );
 }
}
 export default DetailsActivitiesRow;
