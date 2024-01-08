import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/pngwing.com.png'
function Home() {
    const navigate = useNavigate();
    return (
        <div className='w-screen bg-blue-900 h-screen flex flex-col gap-4 justify-center items-center'>
            <img src={logo} alt="#" className='w-60' />
            <h1 className="text-3xl font-semibold text-slate-200 shadow-xl italic underline mb-6">Welcome to the Home Page</h1>

            <div className='flex gap-2'>

                <button onClick={() => { navigate('/insertpoetry') }} className="shadow-xl bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Insert Poetry</button>
                <button onClick={() => { navigate('/showpoetry') }} className="shadow-xl bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Show All Poetries</button>

            </div>
        </div>
    )
}

export default Home