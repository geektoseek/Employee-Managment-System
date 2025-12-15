import React from 'react'
import AcceptTask from './AcceptTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'
import { data } from 'react-router-dom'
const NewTaskList = ({ data }) => {
    return (
        <div id='newtasklist' className='flex h-[60%] w-full flex-nowrap rounded-2xl py-10  px-2 mt-10 overflow-x-auto gap-5 items-stretch '>
            {data.tasks.map((task, index) => {

                if (task.newTask) {
                    return <NewTask key={index} data={task} />
                }

                if (task.active) {
                    return <AcceptTask key={index} data={task} />
                }

                if (task.completed) {
                    return <CompletedTask key={index} data={task} />
                }

                if (task.failed) {
                    return <FailedTask key={index} data={task} />
                }

            })}
        </div >
    )
}

export default NewTaskList