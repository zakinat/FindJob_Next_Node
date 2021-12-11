import React,{useState,useEffect} from 'react'
import {getJobs} from '../../api/getJobs'
import {JobsList,FormControlJobs} from '../../../sections'
const cardsPerLoad=10
let holdingArr=[]
const index = ({jobs}) => {

  

    const [cardsToShow,setCardsToShow] =useState([])
    const [next,setNext]=useState(0)

    const sliceArr=(start,end)=>{
    const slicedJobs= jobs.slice(start,end)
    holdingArr=[...holdingArr,...slicedJobs]
    setCardsToShow(holdingArr)
    }

    useEffect(() => {
      holdingArr=[]
      if (jobs.length<11){
        setCardsToShow(jobs)
        setNext(0)
      }
      else{
        sliceArr(0,cardsPerLoad)
        setNext(cardsPerLoad)
      }
      
    }, [])

    
    const loadMore=()=>{
      if ((next+cardsPerLoad)<jobs.length){
        sliceArr(next,next+cardsPerLoad)
        setNext(next+cardsPerLoad)
      }else{
        sliceArr(next,jobs.length)
        setNext(0)
      }
      
    }
    


    return (
        <div className='container'>
          <div className='jobsPage'>
            <FormControlJobs/>
            <JobsList jobs={cardsToShow}/>
            {next>0 && <button  onClick={loadMore}>Load More</button>}
          </div>
            
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
