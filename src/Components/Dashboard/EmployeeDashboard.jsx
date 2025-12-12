import React from 'react';
import Header from '../Other/Header';
import NewTasklistNumber from '../Other/NewTasklistNumber';
import NewTaskList from '../TaskList/NewTaskList';

const EmployeeDashboard = ({ data }) => {

    return (
        <div className='bg-[#1c1c1c] p-10 h-screen'>
            <h2>{data?.id}</h2>
            <Header />
            <NewTasklistNumber />
            <NewTaskList />

        </div>
    )
}

export default EmployeeDashboard