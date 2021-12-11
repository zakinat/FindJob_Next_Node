import React,{useState,useEffect} from 'react'
import moment from 'moment'
import {getJobs} from '../../api/getJobs'
import {JobsList,FormControlJobs,Carousel} from '../../../sections'
const cardsPerLoad=10
let holdingArr=[]
const index = ({jobs}) => {
    //state to control when data filtered
    const [filteredJobs,setFilteredJobs]=useState(jobs)
    //state to manage when the user asks to fliter by date
    const [jobDateFilter,setJobDateFilter] =useState(false)
    //state to manage when to show cards in carousil
    const [carousel,setCarousel] =useState(false)
    //state to manage wich cards to show in page by deefault 10 per every load
    const [cardsToShow,setCardsToShow] =useState([])
    //state to manage button load another 10 cards
    const [next,setNext]=useState(0)

    //helper function to slice fron data to show in page
    const sliceArr=(start,end)=>{
      const slicedJobs= filteredJobs.slice(start,end)
      holdingArr=[...holdingArr,...slicedJobs]
      setCardsToShow(holdingArr)
    }
    //fleter data by date less than 7 day ago
    useEffect(() => {
      if(jobDateFilter){
        const cutOffDate = moment().subtract(7, 'days');
        const filtered = filteredJobs.filter((job) => moment(job.OBJpostingDate) > cutOffDate)
        setFilteredJobs(filtered)
        holdingArr=[]
        setCardsToShow([])
      }
    }, [jobDateFilter])


    //every time  data filtered change show the new filtered data
    useEffect(() => {
      if (filteredJobs.length<11){
        setCardsToShow(filteredJobs)
        setNext(0)
      }
      else{
        sliceArr(0,cardsPerLoad)
        setNext(cardsPerLoad)
      }
    }, [filteredJobs])


    //set the first initial cards when first time page load
    useEffect(() => {
      holdingArr=[]
      if (filteredJobs.length<11){
        setCardsToShow(filteredJobs)
        setNext(0)
      }
      else{
        sliceArr(0,cardsPerLoad)
        setNext(cardsPerLoad)
      }
      
    }, [])

    //helper function to load more cards to the page
    const loadMore=()=>{
      if ((next+cardsPerLoad)<filteredJobs.length){
        sliceArr(next,next+cardsPerLoad)
        setNext(next+cardsPerLoad)
      }else{
        sliceArr(next,filteredJobs.length)
        setNext(0)
      }
      
    }
    


    return (
        <div className='container'>
          <div className='jobsPage'>
            <FormControlJobs jobDateFilter={jobDateFilter} setJobDateFilter={setJobDateFilter} carousel={carousel} setCarousel={setCarousel} />
            {!carousel && <JobsList jobs={cardsToShow}/>}
            {(next>0 && !carousel) && <button  onClick={loadMore}>Load More</button>}
            {carousel && <Carousel jobs={filteredJobs}/>}
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
