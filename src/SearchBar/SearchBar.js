import React, { useContext, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import classes from './SearchBar.module.css';
import { JobContext } from '../Context/JobContext';
import Spinner from '../Spinner/Spinner';
const GET_JOBS = gql`
query jobs{
    jobs{
      id
      title
      applyUrl
    cities{
      name
    createdAt
    }
    company{
      name
    }
  }
}
`
const SearchBar = ({ getJobsHandler }) => {

    const { jobs, setJobs, paginationJobs, setPaginationJobs } = useContext(JobContext)
    const { data, loading, error, fetchMore } = useQuery(GET_JOBS)

    useEffect(() => {
        if (data) {
            console.log(data.jobs.slice(0, 10), 'data in useEffect')
            setJobs(data.jobs)
            setPaginationJobs(data.jobs)
        }

    }, [data, paginationJobs])
    if (loading) return <Spinner />
    if (error) return 'error'
    return (
        <>
            <form >
                <div className={classes.SearchBarContainer}>
                    <div className={classes.InfoContainer}>
                        <label style={{ marginRight: '180px' }}
                            htmlFor='title'>Job title</label>
                        <select
                            // onChange={(e) => setTitle(e.target.value)}
                            // value={title}
                            id='title'
                            className={classes.DropDownContainer}
                            name='jobs'>
                            <option value='frontenddeveloper'> Front End Developer</option>
                            <option value='backenddeveloper'> Back End Developer</option>
                            <option value='fullstackdeveloper'> Full Stack Developer</option>
                            ))}
                    </select>
                    </div>

                    <div className={classes.InfoContainer}>
                        <label style={{ marginRight: '135px' }}
                            htmlFor='title'>Location</label>
                        <input
                            id='location'
                            placeholder='Location...'
                            className={classes.InputLocation}
                        // value={location}
                        // onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <input
                        className={classes.CheckBoxFullTime}
                        type="checkbox"
                        id="checkBox"
                    // value={fullTime}
                    // onChange={() => setFullTime(() => !fullTime)}
                    />
                    <label
                        style={{ marginTop: '15px' }}
                        htmlFor='checkbox'>Full-time only</label>

                    <button
                        className={classes.SearchButton}>Search</button>
                </div>
            </form>
        </>
    );
};

export default SearchBar;