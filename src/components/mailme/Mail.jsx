import { Link } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'

const Mail = () => {
  return (
    <div  data-tooltip-id='mail' data-tooltip-content='mail me' className='mail'>
      <Link to='mailto:hossam.m.elsheikh@gmail.com' target='_blank'><i className="fa-solid fa-envelope"></i></Link>
    <Tooltip id='mail'/>
    </div>
  )
}

export default Mail