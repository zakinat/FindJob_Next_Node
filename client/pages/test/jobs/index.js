

import {getJobs} from '../../api/getJobs'
import {Jobssection} from '../../../sections'


const Jobs = ({jobs}) => {
    return (
        <Jobssection jobs={jobs}/>
    )
}

export default Jobs

export async function getStaticProps() {
    const req_payload={
        "companySkills": true,
        "dismissedListingHashes": [],
        "fetchJobDesc": true,
        "jobTitle": "Business Analyst",
        "locations": [],
        "numJobs":25,
        "previousListingHashes": []
        }

    const response = await getJobs(req_payload)
    const data = response.data
    const jobs=data.jobs
  
    return {
      props: {
        jobs,
      },
    }
  }
