import React, { useContext, useEffect } from 'react';
import { JobContext } from '../Context/JobContext';

const PaginationButtons = () => {
    const { jobs, setJobs, paginationJobs, setWhichPage, whichPage } = useContext(JobContext)

    console.log(paginationJobs, 'paginationjobs')

    console.log(whichPage, 'which page')
    const setPaginationButtons = () => {
        let buttonsLength = Math.ceil(paginationJobs.length / 10);
        const array = Array(buttonsLength).fill(1);
        const mapped = array.map((_, index) => {
            return <button key={index} onClick={() => setWhichPage([index * 10, (index * 10) + 10])}>{index + 1}</button>
        })
        console.log(mapped, 'mapped buttons')
        return mapped
    }

    return (
        <div>
            {paginationJobs && setPaginationButtons()}
        </div>
    );
};

export default PaginationButtons;