import React from 'react'

const AdminformCreate = () => {
    return (
        <div>
            <div className='bg-gray-600 p-10 rounded-2xl border-[1px] border-white mt-10'>
                <form className='flex items-start justify-between gap-8 '>
                    <div className='text-white w-[45%]'>
                        <div className='flex gap-3 flex-col my-2'>
                            <h3 className='font-semibold'>Task Title</h3>
                            <input className='w-full border-2 border-gray-300 px-4 py-3 rounded-lg  focus:outline-none' type="text" placeholder='Make a UI/UX Design' />
                        </div>

                        <div className='flex gap-3 flex-col my-2'>
                            <h3 className='font-semibold'>Date</h3>
                            <input className='w-full border-2 border-gray-300 px-4 py-3 rounded-lg  focus:outline-none' type="date" />
                        </div>
                        <div className='flex gap-3 flex-col my-2'>
                            <h3 className='font-semibold'>Category</h3>
                            <input type="text" className='w-full border-2 border-gray-300 px-4 py-3 rounded-lg  focus:outline-none' placeholder='design, dev, etc' />
                        </div>
                        <div className='flex gap-3 flex-col my-2'>
                            <h3 className='font-semibold'>Assign to</h3>
                            <input className='w-full border-2 border-gray-300 px-4 py-3 rounded-lg  focus:outline-none' type="text" placeholder='Employee Name' />
                        </div>


                    </div>
                    <div className=' w-[45%] flex items-start justify-between flex-wrap flex-col gap-3'>
                        <h3 className='font-semibold text-white'>Descripton</h3>
                        <textarea className='w-full border-2 border-gray-300 text-white px-4 py-2  h-[300px] rounded-2xl focus:outline-none ' placeholder='Task detais'></textarea>
                        <button className='bg-emerald-500 w-full py-3 text-lg font-semibold rounded-lg text-white hover:bg-emerald-700'>Create Task</button>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default AdminformCreate