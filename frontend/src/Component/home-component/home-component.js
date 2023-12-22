import React from 'react'
import ListComponent from '../list-component/list-component.js';
import AddComponent from '../add-component/add-component.js';

const HomeComponent = () => {
  return (
    <div>
        <AddComponent/>
        <div className='mt-5'></div>
        <ListComponent/>
    </div>
  )
}

export default HomeComponent;