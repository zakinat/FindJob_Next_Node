import {JobCard} from '../components'



const JobsList = ({jobs}) => {
    return (
        <div className='jobList'>
            {jobs.map((job)=>
                <JobCard 
                    title={job.jobTitle} company={job.companyName}
                    desc={job.shortDesc} estSalary={job.estimatedSalary}
                    location={job.location} postedDate={job.OBJpostingDate}
                    key={job.jobId}/>)}
        </div>
    )
}

export default JobsList
