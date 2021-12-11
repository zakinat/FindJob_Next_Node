import {getJobs} from '../../api/getJobs'
import axios from 'axios'
const index = ({data}) => {
    console.log(data)
    return (
        <div>
            heloo from jobs page
        </div>
    )
}

export default index

export const getStaticProps = async () => {
    const response = await getJobs()
  const data = response.data
  
    return {
      props: {
        data,
      },
    }
  }
