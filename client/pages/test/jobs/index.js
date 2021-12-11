import {getJobs} from '../../api/getJobs'

import {JobsList} from '../../../sections'


const index = ({data}) => {
    console.log(data)
    return (
        <div>
            <JobsList jobs={data.jobs}/>
        </div>
    )
}

export default index

export const getStaticProps = async () => {
    const req_payload={
        "companySkills": true,
        "dismissedListingHashes": [],
        "fetchJobDesc": true,
        "jobTitle": "Business Analyst",
        "locations": [],
        "numJobs": 20,
        "previousListingHashes": []
        }

    const response = await getJobs(req_payload)
    const data = response.data
  
    return {
      props: {
        data,
      },
    }
  }
