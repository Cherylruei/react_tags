import { useState } from 'react'
import './Tag.scss'
import {ReactComponent as BusIcon} from '../assets/icon1.svg'
import {ReactComponent as ShipIcon}  from '../assets/icon2.svg'
import {ReactComponent as TrainIcon}  from '../assets/icon3.svg'

const Tag = ({text, icon, isShipActive, setIsShipActive, isTrainActive, setIsTrainActive}) => {
 const [isTagActive, setIsTagActive] = useState(false)

 const handleTagActive = () => {
   setIsTagActive(() => !isTagActive)
   
   if(icon ==="01"){
    setIsShipActive(() => !isShipActive)
   }
   if(icon==="03"){
    setIsTrainActive(() => !isTrainActive)
   }
 }

  return (
    <>
      <div className={`tag ${isTagActive && "active"}`} onClick={handleTagActive}>
        {icon && <TripIcon icon={icon}/>}
      {text}</div>
    </>
  )
}

export default Tag


function TripIcon({icon}){
  switch(icon){
    case "01":
      return <ShipIcon className='icon'/>
    case "02":
      return  <BusIcon className='icon'/>
      case "03":
      return <TrainIcon className='icon'/>
     default:
      return null 
  }

}