import React, { useContext } from 'react';
import { JobContext } from '../Context/JobContext';
import Job from './Job/Job';
import classes from './Jobs.module.css'
const Jobs = () => {
    const { jobs, setJobs, whichPage } = useContext(JobContext)
    console.log(jobs.jobs, 'get jobs in jobs')
    let rendered;
    if (jobs) {
        rendered = <ul className={classes.JobsContainer}>

            {jobs.slice(whichPage[0], whichPage[1] || 10).map((job, index) => {
                return < Job
                    key={job.id}
                    jobTitle={job.title}
                    //city name might need to change
                    cityName={job.cities[0]}
                    createdAtTime={job.cities[0]}
                    companyName={job.company.name}
                    applyUrl={job.applyUrl}

                />
            })}
        </ul>
    } else {
        rendered = 'not ready yet'
    }

    return (
        <div>
            {rendered}
        </div>
    );
};

export default Jobs;