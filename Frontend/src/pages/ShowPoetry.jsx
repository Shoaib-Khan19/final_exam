import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ShowPoetry() {
    const navigate = useNavigate();

    const [poetry, setPoetry] = useState([]);

    useEffect(() => {
        // Fetch data from your API endpoint
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/getAllPoetry');
                if (response.status === 200) {
                    console.log(response.data.getPoetry);
                    setPoetry(response.data.getPoetry);
                } else {
                    alert("Error fetching Poetry");
                }

            } catch (error) {
                console.error('Error fetching Poetry:', error.message);
            }
        };

        // Call the fetchData function
        fetchData();
    }, []);

    return (
        <div className='bg-blue-900 h-screen'>
            <div className='text-center text-4xl p-8 text-slate-100 italic underline '>
                <h1>Poetries</h1>
            </div>

            <div className="flex flex-wrap justify-center ">
                {
                    poetry.map(key => (
                        <div className="w-full md:w-1/3 p-4">
                            <div className="bg-white py-6 px-5 rounded-md shadow-md h-48">
                                <h2 className="text-blue-900 text-xl font-bold mb-4">{key.poetryTitle}</h2>
                                <p className="text-gray-700 h-12 overflow-hidden">{key.poetryData}</p>
                            </div>
                        </div>
                    ))}
            </div>
            <div className=' flex justify-center gap-4'>

            <button onClick={() => { navigate('/insertpoetry') }} className="shadow-xl bg-slate-100 text-blue-900 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Insert Poetry</button>
                
            <button onClick={() => { navigate('/') }} className="shadow-xl bg-slate-100 text-blue-900 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Back to Home</button>
            </div>

        </div>
    )
}

export default ShowPoetry