import React from 'react'

const Notifications = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8'>
        <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8'>
            <h1 className='text-3xl font-bold text-gray-800 mb-8'>Notifications</h1>

            {/* notifications settings */}
            <div className='mb-8'>
                <h2 className='text-xl font-semibold text-gray-800 mb-4'>
                    Notifications Prefrences
                </h2>
                <div className='space-y-4'>
                    <div>
                        <label htmlFor="">Email Notifications</label>
                        <select name="" id="" className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'>
                            <option value="">Enable</option>
                            <option value="">Disable</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Sms Notifications</label>
                        <select name="" id="" className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'>
                            <option value="">Enable</option>
                            <option value="">Disable</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="" className='block text-sm font-medium text-gray-700'>Push Notifications</label>
                        <select name="" id="" className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'>
                            <option value="">Enable</option>
                            <option value="">Disable</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* actions settings */}
            <div className='flex justify-end space-x-4'>
                <button className='px-6 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors'>Cancel</button>
                <button className='px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors'>Save Changes</button>
            </div>
        </div>
      
    </div>
  )
}

export default Notifications
