import React,{useState,useEffect} from 'react'
import moment from 'moment'
import {JobsList,FormControlJobs,Carousel} from './index'
const cardsPerLoad=10
let holdingArr=[]

export const Jobssection = ({jobs}) => {
     //collect companies' name for auto complete suggestion
     const [suggestions,setSuggestions]=useState(jobs.map((job)=>job.companyName.toLowerCase()))
     //do we have a name of company to filter by?
     const [nameCompany, setNameCompany]=useState(null)
     //satate of filtering data by name of company
     const [filterByNameComp,setFilterByNameComp]=useState(false)
     //data filtered by the namae of company
     const [dataFilteredByNameComp,setDataFilteredByNameComp]=useState([])
 
     //state to control when data filtered 
     const [filteredJobs,setFilteredJobs]=useState(jobs)
 
     //state to manage when the user asks to fliter by date
     const [jobDateFilter,setJobDateFilter] =useState(false)
     //data filtered by date
     const [dataFilteredByDate,setDataFilteredByDate]=useState([])
 
     //state to manage when to show cards in carousil
     const [carousel,setCarousel] =useState(false)
     //state to manage wich cards to show in page by deefault 10 per every load
     const [cardsToShow,setCardsToShow] =useState([])
     //state to manage button load another 10 cards
     const [next,setNext]=useState(0)
 
     //helper function to slice from data to show in page
     const sliceArr=(start,end)=>{
       const slicedJobs= filteredJobs.slice(start,end)
       holdingArr=[...holdingArr,...slicedJobs]
       setCardsToShow(holdingArr)
     }
 
 
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
 
 //generate filtered data substracting from all filters
     useEffect(() => {
       if(jobDateFilter && filterByNameComp){
         const idsJobsByName=dataFilteredByNameComp.map((job)=>job.jobId)
         const idsJobsByDate=dataFilteredByDate.map((job)=>job.jobId)
         const subIds=idsJobsByDate.filter(id => idsJobsByName.includes(id))
         const subArr=filteredJobs.filter(job => subIds.includes(job.jobId) )
         setFilteredJobs(subArr)
       } else if (jobDateFilter){
         setFilteredJobs(dataFilteredByDate)
       }else if (filterByNameComp){
         setFilteredJobs(dataFilteredByNameComp)
       }else{
         setFilteredJobs(jobs)
       }
     }, [dataFilteredByDate,dataFilteredByNameComp])
 
 //every time  data filtered change show the new filtered data
     useEffect(() => {
       holdingArr=[]
       setCardsToShow([])
     if (filteredJobs.length<11){
       setCardsToShow(filteredJobs)
       setNext(0)
     }
     else{
       sliceArr(0,cardsPerLoad)
       setNext(cardsPerLoad)
     }
     }, [filteredJobs])
 
     //fleter data by date less than 7 day ago
     useEffect(() => {
       if(jobDateFilter){
         const cutOffDate = moment().subtract(7, 'days');
         const filtered = filteredJobs.filter((job) => moment(job.OBJpostingDate) > cutOffDate)
         setDataFilteredByDate(filtered)
       }else{
         setDataFilteredByDate([])
       }
     }, [jobDateFilter])
 
     
 
 //filter data by name of company
     useEffect(() => {
       if(nameCompany?.length>0 && filterByNameComp){
         const filtered = filteredJobs.filter((job) =>job.companyName.toLowerCase()===nameCompany?.toLowerCase() )
         setDataFilteredByNameComp(filtered)
       } else{
         setDataFilteredByNameComp([])
       }
     }, [nameCompany])
 
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
             <FormControlJobs jobDateFilter={jobDateFilter} setJobDateFilter={setJobDateFilter} carousel={carousel} setCarousel={setCarousel} suggestions={suggestions} nameCompany={nameCompany} setNameCompany={setNameCompany} filterByNameComp={filterByNameComp} setFilterByNameComp={setFilterByNameComp} />
             {!carousel && <JobsList jobs={cardsToShow}/>}
             {(next>0 && !carousel) && <button  onClick={loadMore}>Load More</button>}
             {carousel && <Carousel jobs={filteredJobs}/>}
           </div>
             
         </div>
     )
}

export default Jobssection