import React from 'react';
import List from './sub-components/List'

const Birthdays = () => {
    return (
        <main>
      <section className='container'>
        <h3>0 birthdays for </h3>
        <List />
        <List />
        <List />
        <List />
        <button className='clear-btn' onClick={() => console.log('button clicked')}> Clear All</button>
      </section>
    </main>
    )
}

export default Birthdays;