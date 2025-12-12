import React from 'react'
import Header from '../Other/Header'
import Alltask from '../Other/Alltask'
import AdminformCreate from '../Other/AdminformCreate'

const AdminDashboard = () => {
    return (
        <div className='h-screen w-screen p-10'>
            <Header />
            <AdminformCreate />
            <Alltask />

        </div>
    )
}

export default AdminDashboard