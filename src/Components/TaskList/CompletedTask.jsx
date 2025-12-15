import React from 'react'

const CompletedTask = () => {
    return (
        <div>

            < div className='h-full w-[400px] bg-green-950 border border-gray-400 rounded-2xl shrink-0 p-5' >
                <div className='flex items-center justify-between'>
                    <h3 className='bg-red-600 px-4 py-2 rounded-sm text-white'>High</h3>
                    <h4 className='text-white'>24 Feb 2025</h4>
                </div>
                <h2 className='text-3xl text-white mt-10 font-bold'>I have completed this task Make a HR management System</h2>
                <p className='text-white mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae tempora quibusdam labore. Sint temporibus autem delectus deleniti dolorum accusamus.</p>
                <div className='mt-4'>
                    <button className='bg-green-500 rounded w-full py-2 px-4 text-white text-sm'>Completed</button>
                </div>
            </div >

        </div>
    )
}

export default CompletedTask