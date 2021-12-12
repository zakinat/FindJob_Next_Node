import React,{useState,useEffect} from 'react'
import {AutoComplete} from '../components'

import {MdOutlineViewCarousel} from "react-icons/md"
import {BsFillGrid3X3GapFill,BsSearch} from "react-icons/bs"
const FormControlJobs = ({jobDateFilter,setJobDateFilter,carousel,setCarousel,suggestions,setNameCompany,filterByNameComp,setFilterByNameComp}) => {
    
      const [watchNameComp,setWatchNameComp]=useState('')

      const searchBut=()=>{
          if(filterByNameComp){
            setNameCompany('')
            setWatchNameComp('')
          } else{
            setNameCompany(watchNameComp)
          }
        
        setFilterByNameComp(!filterByNameComp)
      }
    return (
        <div className='formControl'>
                <div className='formControl__filter'>
                    <div className='formControl__filter-jobDate '>
                                <button className="clickme" onClick={() => setJobDateFilter(!jobDateFilter)}>
                                    {jobDateFilter?'Date Posted 7 day ago':'Date Posted'}
                                </button>
                    </div>
                    <div className='formControl__filter-namecompany'>
                        <div className='formControl__filter-namecompany-input'>
                            <AutoComplete suggestions={suggestions} watchNameComp={watchNameComp} setWatchNameComp={setWatchNameComp} />
                        </div>
                        <BsSearch size={20}/>
                        <button onClick={searchBut}>{filterByNameComp?'Clear':'Search'}</button>
                    </div>
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
