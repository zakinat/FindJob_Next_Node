import axios from 'axios'

import {BaseUrl,config} from '../../config'


const getJobs=(req_payload)=>axios.post(`${BaseUrl}/jobs`,req_payload,config) 

export {getJobs}