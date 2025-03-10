import React from 'react'

const ProfileSettings = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8'>
      <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8'>
        <h1 className='text-3xl font-bold text-gray-800 mb-8'>
        profile settings
        </h1>

        {/* profile picture settings */}
        <section className='mb-8'>
          <h2 className='text-xl font-semibold text-gray-800 mb-4'>
            Profile Picture
          </h2>
          <div className='flex items-center space-x-4'>
            <div className='w-24 h-24 rounded-full bg-gray-300'>
              <img src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="" className='w-full h-full rounded-full object-cover' />
            </div>
          </div>
          <div>
            <button className='px-6 mt-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors'>Change Picture</button>
          </div>
        </section>

        {/* profie information section  */}
        <section className='mb-8'>
          <h2 className='text-xl font-semibold text-gray-800 mb-4'>Profile Information</h2>
           <div className='space-y-4'>
            <div>
              <label htmlFor="" className='block text-sm font-medium text-gray-700'>
                Full name
             </label>
             <input type="text" defaultValue="John Doe" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label htmlFor="" className='block text-sm font-medium text-gray-700'>
                User name
             </label>
             <input type="text" defaultValue="John Doe" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
           </div>
        </section>
      </div>
     
    </div>
  )
}

export default ProfileSettings
