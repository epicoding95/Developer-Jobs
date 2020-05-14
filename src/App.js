import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../src/SearchBar/SearchBar';
import Jobs from '../src/Jobs/Jobs';
import { JobContextProvider } from './Context/JobContext';
import PaginationButtons from './PaginationButtons/PaginationButton';
import Header from './Header/Header';

function App() {


  return (
    <div >
      <JobContextProvider>
        <SearchBar />
        <Header />
        <Jobs />
        <PaginationButtons />
      </JobContextProvider>
    </div>
  );
}

export default App;
