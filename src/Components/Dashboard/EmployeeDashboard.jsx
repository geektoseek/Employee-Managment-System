import React from 'react';
import Header from '../Other/Header';
import NewTasklistNumber from '../Other/NewTasklistNumber';
import NewTaskList from '../TaskList/NewTaskList';

const EmployeeDashboard = ({ data }) => {
    return (
        <div className='bg-[#1c1c1c] p-10 h-screen'>
            <Header data={data} />
            <NewTasklistNumber data={data} />
            <NewTaskList data={data} />
        </div>
    )
}

export default EmployeeDashboard;
