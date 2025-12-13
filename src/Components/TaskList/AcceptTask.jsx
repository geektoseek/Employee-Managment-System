import React from 'react'

const AcceptTask = () => {
    return (
        <div>
            < div className='h-full w-[400px] bg-gray-600 border-[1] border-gray-400 rounded-2xl flex-shrink-0 p-5' >
                <div className='flex items-center justify-between'>
                    <h3 className='bg-red-600 px-4 py-2 rounded-sm text-white'>High</h3>
                    <h4 className='text-white'>24 Feb 2025</h4>
                </div>
                <h2 className='text-3xl text-white mt-10 font-bold'>Make a HR management System</h2>
                <p className='text-white mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae tempora quibusdam labore. Sint temporibus autem delectus deleniti dolorum accusamus.</p>
                <div className='flex items-center justify-between mt-4'>
                    <button className='bg-emerald-600 py-1 px-2 text-white text-sm rounded'>Mark as Completed</button>
                    <button className='bg-red-500 py-1 px-2 text-white text-sm rounded'>Mark as Failed</button>
                </div>
            </div >

        </div>
    )
}

export default AcceptTask