import React,{useState,useEffect} from 'react'
import {Modal,FormDateJob} from '../components'

import {MdOutlineViewCarousel} from "react-icons/md"
import {BsFillGrid3X3GapFill} from "react-icons/bs"
const FormControlJobs = ({jobDateFilter,setJobDateFilter,carousel,setCarousel}) => {
    

    const onSubmitDataFilter = (event) => {
        event.preventDefault(event)
        console.log(event.target.name.value)
        console.log(event.target.email.value)
      }
      
    return (
        <div className='formControl'>

                <div className='formControl__jobDate control__wrap'>
                            <button className="clickme" onClick={() => setJobDateFilter(!jobDateFilter)}>
                            {jobDateFilter?'Date Posted 7 day ago':'Date Posted'}
                            </button>
                </div>
                <span>
                    {
                        carousel? <BsFillGrid3X3GapFill className='svg__animation' size={25} onClick={()=>setCarousel(!carousel)}/> :<MdOutlineViewCarousel className='svg__animation' size={25} onClick={()=>setCarousel(!carousel)}/>
                    }
                </span>
                
        </div>
    )
}

export default FormControlJobs
