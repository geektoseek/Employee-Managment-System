import React from 'react'

const CompletedTask = ({ data }) => {
    return (
        <div>

            < div className='h-full w-[400px] bg-green-950 border border-gray-400 rounded-2xl shrink-0 p-5' >
                <div className='flex items-center justify-between'>
                    <h3 className='bg-red-600 px-4 py-2 rounded-sm text-white'>{data.category}</h3>
                    <h4 className='text-white'>{data.date}</h4>
                </div>
                <h2 className='text-3xl text-white mt-10 font-bold'>{data.title}</h2>
                <p className='text-white mt-5'>{data.description}</p>
                <div className='mt-4'>
                    <button className='bg-green-500 rounded w-full py-2 px-4 text-white text-sm'>Completed</button>
                </div>
            </div >

        </div>
    )
}

export default CompletedTask