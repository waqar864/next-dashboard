import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8'>
        <div className='max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8'>
            <div className='flex flex-col'>
                <h1 className='text-4xl font-extrabold text-gray-800 mb-4 sm:mb-0'>
                    Dashboard
                </h1>
                <p className='text-lg text-gray-600 mt-3'>Welcome back! Here you can manage your tasks, view analytics, and make adjustments</p>
            </div>
            {/* Dashboard grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {/* Task card  */}
                <Link className='bg-blue-100 hover:bg-blue-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105' href='dashboard/tasks'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-xl font-semibold text-blue-800'>Tasks</h2>
                        <span className='text-blue-500 text-2xl'>📝</span>
                    </div>
                    <p className='text-gray-700 mt-2'>View, organize, and manage your daily tasks</p>
                </Link>
                {/* analytic card */}
                <Link className='bg-green-100 hover:bg-green-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105' href='dashboard/analytics'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-xl font-semibold text-blue-800'>Analytics</h2>
                        <span className='text-blue-500 text-2xl'>📊</span>
                    </div>
                    <p className='text-gray-700 mt-2'>Gain insight into performance and trends</p>
                </Link>
                {/* settings card */}
                <Link className='bg-purple-100 hover:bg-purple-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105' href='dashboard/analytics'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-xl font-semibold text-blue-800'>Settings</h2>
                        <span className='text-blue-500 text-2xl'>⚙️</span>
                    </div>
                    <p className='text-gray-700 mt-2'>
                        Customize your dashboard to suit your needs
                    </p>
                </Link>
            </div>
        </div>
      
    </div>
  )
}

export default Dashboard
