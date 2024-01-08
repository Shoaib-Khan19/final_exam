import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

function InsertPoetry() {
  const navigate = useNavigate();

  const [poetryTitle, setPoetryTitle] = useState([]);
  const [poetryData, setPoetryData] = useState([]);
  const server = "http://localhost:5000/api/v1/createPoetry"

  const handleTitleChange = (e) => {
    setPoetryTitle(e.target.value)

  }
  const handleDataChange = (e) => {
    setPoetryData(e.target.value)

  }
  const handlePoetry = async (e) => {
    e.preventDefault()
    // isDataValid()
    const poetryInfo = {
      poetryTitle,
      poetryData
    }
    // console.log(poetryInfo);
    try {
      const response = await axios.post("http://localhost:5000/api/v1/createPoetry", poetryInfo)
      console.log(response);
    } catch {
      console.log("Error")
    }
  }

  return (
    <div className="w-screen bg-blue-900 h-screen flex flex-col gap-4 justify-center items-center">
      <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-semibold text-slate-200 shadow-xl italic  mb-6">Insert Poetries</h1>

        <label className="block text-slate-100 text-sm font-bold mb-2" htmlFor="poetryInput">
          Poetry Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="poetryInput"
          type="text"
          placeholder="Enter poetry title"
          onChange={handleTitleChange}
        />
        <label className="block text-slate-100 text-sm font-bold mt-4 mb-2" htmlFor="poetryTextarea">
          Poetry Content
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="poetryTextarea"
          placeholder="Enter poetry content"
          onChange={handleDataChange}
        />
        <button onClick={handlePoetry} className="shadow-xl mr-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Insert Poetry</button>
        <button onClick={() => { navigate('/showpoetry') }} className="shadow-xl bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Show All Poetries</button>

      </div>
    </div>
  );
}

export default InsertPoetry