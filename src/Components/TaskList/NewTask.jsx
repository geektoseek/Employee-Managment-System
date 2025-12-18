import React from 'react'
import { data } from 'react-router-dom'

const NewTask = () => {
    return (
        <div>

            < div className='h-full w-[400px] bg-gray-600 border-[1] border-gray-400 rounded-2xl shrink-0 p-5' >
                <div className='flex items-center justify-between'>
                    <h3 className='bg-red-600 px-4 py-2 rounded-sm text-white'>{data.category}</h3>
                    <h4 className='text-white'>{data.date}</h4>
                </div>
                <h2 className='text-3xl text-white mt-10 font-bold'>{data.title}</h2>
                <p className='text-white mt-5'>{data.description}</p>

                <div className='flex items-center w-full justify-between mt-4'>
                    <button className='bg-emerald-600 py-2 px-3 w-[45%] font-semibold text-white text-sm rounded'>Accept </button>
                    <button className='bg-red-500 py-2 px-3 w-[45%] font-semibold text-white text-sm rounded'>Reject</button>
                </div>
            </div >
        </div>
    )
}

export default NewTask