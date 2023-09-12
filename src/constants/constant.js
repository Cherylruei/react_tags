import { ReactComponent as BusIcon } from '../assets/icon1.svg';
import { ReactComponent as ShipIcon } from '../assets/icon2.svg';
import { ReactComponent as TrainIcon } from '../assets/icon3.svg';

export function TripIcon({ typeCode }) {
  switch (typeCode) {
    case '01':
      return <ShipIcon className='icon' />;
    case '02':
      return <BusIcon className='icon' />;
    case '03':
      return <TrainIcon className='icon' />;
    default:
      return null;
  }
}
