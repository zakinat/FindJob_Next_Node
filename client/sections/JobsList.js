import {JObCard} from '../components'
import { JobCard } from '../components/JobCard'


const JobsList = ({jobs}) => {
    return (
        <div>
            {jobs.map((job,index)=>
                <JobCard title={job.jobTitle} company={job.companyName} desc={job.shortDesc} key={job.jobId}/>)}
        </div>
    )
}

export default JobsList
