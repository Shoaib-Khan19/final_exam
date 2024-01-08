import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home,InsertPoetry,ShowPoetry} from '../src/routes/pages'
function App() {
  return (
    <div className="App">
			<BrowserRouter>
				<Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/insertpoetry" element={<InsertPoetry />} />
        <Route exact path="/showpoetry" element={<ShowPoetry />} />

				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
