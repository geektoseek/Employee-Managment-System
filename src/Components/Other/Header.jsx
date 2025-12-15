import React from 'react';

const Header = ({ data }) => {
    return (
        <div className='flex items-end justify-between'>
            <h1 className='leading-14 font-semibold text-4xl text-white'>
                Hello <br />
                <span className='text-5xl font-bold'>{data?.name} 👋</span>
            </h1>
            <button className='bg-red-600! px-5 text-lg py-2 rounded-md text-amber-50'>Log Out</button>
        </div>
    )
}

export default Header;
