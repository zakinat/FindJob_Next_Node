import React,{useState} from 'react'
import {IoIosArrowDroprightCircle ,IoIosArrowDropleftCircle} from "react-icons/io"
import {JobCard} from '../components'

const Carousel = ({jobs}) => {

    
const [current,setCurrent] =useState(0)
const [hoverRight,setHoverRight] =useState(false)
const [hoverLeft,setHoverLeft] =useState(false)


const length=jobs.length

const nextFeedbacks=()=>{
    setCurrent( current===length-1?0:current+2)
}

const prevtFeedbacks=()=>{
    setCurrent( current===0?length-1:current-2)
}



    return (
        <div className='carousel'>
               
                <div className='carousel__content'>
                                {
                                jobs.map((job,index)=>{
                            return (
                                <div className={(index ===current || index===current+1)? 'jobCard jobCard__active':'jobCard'} key={job.jobId}>
                                    {
                                        (index ===current ) &&
                                        (
                                            <JobCard 
                                                    title={job.jobTitle} company={job.companyName}
                                                    desc={job.shortDesc} estSalary={job.estimatedSalary}
                                                    location={job.location} postedDate={job.OBJpostingDate}/>
                                        )
                                    }
                                </div> 
                            )
                        })
                    }
                </div>
                <IoIosArrowDropleftCircle className='leftArrow' color={hoverLeft?'#0B7ACD':"#97CBF1"} size={60} onClick={prevtFeedbacks} onMouseEnter={()=>setHoverLeft(true)} onMouseLeave={()=>setHoverLeft(false)}/>
                <IoIosArrowDroprightCircle className='rightArrow' color={hoverRight?'#0B7ACD':"#97CBF1"} size={60} onClick={nextFeedbacks} onMouseEnter={()=>setHoverRight(true)} onMouseLeave={()=>setHoverRight(false)}/>
        </div>
    )
}

export default Carousel
