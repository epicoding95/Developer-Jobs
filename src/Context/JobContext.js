import React, { createContext, useState } from 'react';

export const JobContext = createContext();


export const JobContextProvider = (props) => {

    const [jobs, setJobs] = useState([])
    const [paginationJobs, setPaginationJobs] = useState([])
    const [whichPage, setWhichPage] = useState([])
    return (
        <JobContext.Provider value={{ jobs, setJobs, paginationJobs, setPaginationJobs, whichPage, setWhichPage }}>
            {props.children}
        </JobContext.Provider>
    );
};

export default JobContextProvider;