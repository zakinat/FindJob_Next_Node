import moment from 'moment'
 const JobCard = ({title, company, desc, estSalary, location, postedDate}) => {
    return (
        <div className="jobList__card">
            <div className="jobList__card-hero">
                <h3>{company}</h3>
                <span>{location}</span>
                <h2>{title}</h2>
            </div>
        
            <div className="jobList__card-desc">
                <p>{desc}</p>
            </div>
        
            <div className="jobList__card-footer">
                <div className='jobList__card-footer-date'>
                    <span>{moment(postedDate).format('Do MM YY')}</span>
                    <span>{moment(postedDate).fromNow()}</span>
                </div>
                <span>{estSalary}</span>
            </div>
        </div>
    )
}

export default JobCard