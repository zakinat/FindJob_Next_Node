import {BaseUrl,config} from '../../config'
import axios from 'axios'

const getJobs=(req_payload)=>axios.post(`${BaseUrl}/jobs`,req_payload,config) 

export {getJobs}