import React , { Component } from 'react';
import {Table} from 'semantic-ui-react';

class DetailsActivitiesRow extends Component {
 render() {
  const { Row, Cell } = Table;
const {id, details} = this.props; //209 -- 4:38

     let statusOfActivityPrev = this.props;


     if (details.statusActivity == 0){
         statusOfActivityPrev = 'Inactive';  //Προσθήκη Συνθηκών σε δεύτερο χρόνο
     }else if (details.statusActivity == 1){
         statusOfActivityPrev = 'Active';
     }else if (details.statusActivity == 2){
         statusOfActivityPrev = 'Pending';
     }else if (details.statusActivity == 3){
         statusOfActivityPrev = 'Cancelled';
     }else if (details.statusActivity == 4){
         statusOfActivityPrev = 'Completed';
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
          <Cell>{details.timeStartActivity}</Cell>
          <Cell>{details.timeStopActivity}</Cell>
      </Row>
  );
 }
}
 export default DetailsActivitiesRow;
