import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../src/SearchBar/SearchBar';
import Jobs from '../src/Jobs/Jobs';
import { JobContextProvider } from './Context/JobContext';
function App() {


  return (
    <div >
      <JobContextProvider>
        <SearchBar />
        <Jobs />
      </JobContextProvider>
    </div>
  );
}

export default App;
