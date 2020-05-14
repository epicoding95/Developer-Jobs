import React from 'react';
import classes from './Job.module.css'
const Job = ({ jobTitle, cityName, companyName, applyUrl, createdAtTime }) => {


    let cName;
    if (cityName) {
        cName = cityName.name
    } else {
        cName = 'not found'
    }

    let cTime;
    if (createdAtTime) {
        cTime = createdAtTime.createdAt.slice(0, 10)
    } else {
        cTime = 'unknown'
    }
    return (
        <>
            <li className={classes.JobListItem}>
                <div className={classes.JobTitle}>{jobTitle}</div>
                <div className={classes.Info}>{companyName}</div>
                <div className={classes.Info}>{cName}</div>
                <div className={classes.ApplyContainer}>
                    <a className={classes.ApplyLink}
                        target="_blank"
                        href={applyUrl}>Apply</a>

                </div>
                <div className={classes.Time}>{cTime}</div>
            </li>
        </>
    );
};

export default Job;