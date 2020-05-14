import React, { useContext } from 'react';
import { JobContext } from '../Context/JobContext';

const Header = () => {

    const { paginationJobs } = useContext(JobContext)
    let info
    if (paginationJobs.length) {
        info = <div >
            <h1 >Software Developer Jobs currently hiring</h1>
            <div>There is currently {paginationJobs.length} job openings</div>
        </div>
    } else {
        info = null
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
            {info || null}
        </div>
    );
};

export default Header;