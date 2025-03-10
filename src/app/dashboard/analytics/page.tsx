
import React from 'react'

const Analytics = () => {
    const metrics = [
        {
            title: "Total Sales",
            value: "$10,000",
            change: "+12%",
            isPositive: true
        },
        {
            title:"Active Users",
            value: "1200",
            change: "-5%",
            isPositive: false
        },
        {
            title:"Website Visits",
            value:"8500",
            change: "+10%",
            isPositive: true
        },
        {
            title:"New Sign-Ups",
            value:"500",
            change: "+15%",
            isPositive: true
        }
    ]
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8'>
        <div className='max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-8'>
            <h1 className='text-4xl font-bold text-gray-800 mb-6'>
                Analaytics Dashboard
            </h1>
            {/* overview matrics */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
                {metrics.map((metric, index) => (
                    <div key={index} className={`flex justify-between items-center bg-white rounded-lg shadow-md p-6 border-l-4 ${
                        metric.isPositive ? "border-green-500" : "border-red-500"}`}>
                            <div>
                                <h3>{metric.title}</h3>
                                <p className='text-lg text-gray-600 mt-2'>
                                    {metric.value}
                                </p>
                            </div>
                            <div className='text-right'>
                                <p className={`text-sm mt-2 ${metric.isPositive ? "text-green-500" : "text-red-500"}`}>
                                    {metric.change}
                                </p>
                            </div>
                        </div>
                ))}
            </div>
            {/* charts section  */}

                <div className='mb-8'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                        Website trafic
                    </h2>
                    <div className='bg-gray-100 rounded-lg h-72'>Charts Placeholder</div>
                </div>

                 {/* Total Sales section  */}

                 <div className='mb-8'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                        Total Sales
                    </h2>
                    <div className='bg-gray-100 rounded-lg h-72'>Charts Placeholder</div>
                </div>
                {/* Recent Activity section  */}

                <div className='mb-8'>
                    <h2 className='text-xl font-semibold text-gray-800 mb-4'>
                    Recent Activities
                    </h2>
                <ul className="space-y-4">
                <li className='flex items-center justify-between bg-white rounded-lg shadow-md p-4'>
                    <div>
                        <h3 className='text-lg font-semibold text-gray-800'>
                            User Registration
                        </h3>
                        <p className='text-sm text-gray-600 mt-2'>
                            New User signed up on 2023-08-15
                        </p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-600'>+12%</p>
                    </div>
                </li>
                <li className='flex items-center justify-between bg-white rounded-lg shadow-md p-4'>
                    <div>
                        <h3 className='text-lg font-semibold text-gray-800'>
                            User Registration
                        </h3>
                        <p className='text-sm text-gray-600 mt-2'>
                            New User signed up on 2023-08-15
                        </p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-600'>+12%</p>
                    </div>
                </li>
                <li className='flex items-center justify-between bg-white rounded-lg shadow-md p-4'>
                    <div>
                        <h3 className='text-lg font-semibold text-gray-800'>
                            User Registration
                        </h3>
                        <p className='text-sm text-gray-600 mt-2'>
                            New User signed up on 2023-08-15
                        </p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-600'>+12%</p>
                    </div>
                </li>
                <li className='flex items-center justify-between bg-white rounded-lg shadow-md p-4'>
                    <div>
                        <h3 className='text-lg font-semibold text-gray-800'>
                            User Registration
                        </h3>
                        <p className='text-sm text-gray-600 mt-2'>
                            New User signed up on 2023-08-15
                        </p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-600'>+12%</p>
                    </div>
                </li>
                </ul>
            </div>
        
</div>
         
      
    </div>
  )
}

export default Analytics
