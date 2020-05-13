import React, { createContext, useState } from 'react';

export const JobContext = createContext();


export const JobContextProvider = (props) => {

    const [jobs, setJobs] = useState([])
    return (
        <JobContext.Provider value={{ jobs, setJobs }}>
            {props.children}
        </JobContext.Provider>
    );
};

export default JobContextProvider;