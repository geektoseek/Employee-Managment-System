import React from 'react'

const NewTasklistNumber = ({ data }) => {
    console.log('Employee Data:', data);
    console.log('Tasks:', data.tasks);

    return (

        <div className='flex justify-between mt-10 gap-5'>
            <div className='border-gray-500 bg-gray-900 border-2 w-[45%] px-6 py-10 rounded-2xl'>
                <h2 className='text-3xl text-white font-bold'>{data.newTasks}</h2>
                <h3 className='text-3xl text-white font-bold'>New Task</h3>
            </div>
            <div className='border-gray-500 bg-gray-700 border-2 w-[45%] px-6 py-10 rounded-2xl'>
                <h2 className='text-3xl text-white font-bold'>{data.activeTasks}</h2>
                <h3 className='text-3xl text-white font-bold'>Active Task</h3>
            </div>
            <div className='border-gray-500 bg-gray-700 border-2 w-[45%] px-6 py-10 rounded-2xl'>
                <h2 className='text-3xl text-white font-bold'>{data.completedTasks}</h2>
                <h3 className='text-3xl text-white font-bold'>Completed Task</h3>
            </div>
            <div className='border-gray-500 bg-gray-700 border-2 w-[45%] px-6 py-10 rounded-2xl'>
                <h2 className='text-3xl text-white font-bold'>{data.failedTasks}</h2>
                <h3 className='text-3xl text-white font-bold'>Failed Task</h3>
            </div>
        </div>
    )
}

export default NewTasklistNumber