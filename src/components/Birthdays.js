import React from 'react';
import {Container, Row} from 'react-bootstrap'
import List from './sub-components/List'
import {data} from './sub-components/data'

const d = new Date();
const a = d.toString();
const Data = data;

let current_month = a.substring(4,7)

if (current_month === 'Jan') {
  current_month = 'January';
} else if (current_month === 'Feb') {
  current_month = 'February'
} else if (current_month === 'Mar') {
  current_month = 'March'
} else if (current_month === 'Apr') {
  current_month = 'April'
} else if (current_month === 'Jun') {
  current_month = 'June'
} else if (current_month === 'Jul') {
  current_month = 'July'
} else if (current_month === 'Aug') {
  current_month = 'August'
} else if (current_month === 'Sep') {
  current_month = 'September'
} else if (current_month === 'Oct') {
  current_month = 'October'
} else if (current_month === 'Nov') {
  current_month = 'November'
} else if (current_month === 'Dec') {
  current_month = 'December'
}

const num_birthdays = Data.length;

const Birthdays = () => {
    return (
        <main>
          <Container fluid className='container'>
            <Row>
              <h3>{num_birthdays} Birthdays in {current_month}</h3>
            </Row>
            <Row>
              <List />
            </Row>
            <Row>
              <button className='clear-btn' onClick={() => console.log('button clicked')}> Clear All</button>
            </Row>
      </Container>
    </main>
    )
}

export default Birthdays;