import {server} from '../../config'
import axios from 'axios'
const req_payload={
    "companySkills": true,
    "dismissedListingHashes": [],
    "fetchJobDesc": true,
    "jobTitle": "Business Analyst",
    "locations": [],
    "numJobs": 20,
    "previousListingHashes": []
    }
const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      
//const getJobs=()=>axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=cdf1b3e2caf191ef0d92715d311461ea`)
const getJobs=()=>axios.post(`https://www.zippia.com/api/jobs`,req_payload,config) 

export {getJobs}