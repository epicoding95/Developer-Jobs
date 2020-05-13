import React from 'react';
import classes from './Job.module.css'
const Job = ({ jobTitle, cityName, companyName, applyUrl, createdAtTime }) => {

    // console.log(cityName.name)
    let cName;
    if (cityName) {
        cName = cityName.name
    } else {
        cName = 'not found'
    }

    let cTime;
    if (createdAtTime) {
        cTime = createdAtTime.createdAt.toLocaleString()
    } else {
        cTime = 'now'
    }
    return (
        <>
            <li className={classes.JobListItem}>
                <div>{jobTitle}</div>
                <div>{companyName}</div>
                <div>{cName}</div>
                <a
                    target="_blank"
                    href={applyUrl}> apply here</a>
                <div>{cTime}</div>
            </li>
        </>
    );
};

export default Job;