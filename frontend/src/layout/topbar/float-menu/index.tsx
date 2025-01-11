import { LuCircleChevronDown } from 'react-icons/lu';
import Popup from '../../../common/popover';

const FloatMenu = () => {
  return (
    <div className=''>
      <Popup
        source={<LuCircleChevronDown className='h-4 w-4 cursor-pointer' />}
        type='onclick'
        panelClassName='bg-[#54473F] top-0 left-6'
      >
        <div className=''> 
          To put topbar menu here
        </div>
      </Popup>
    </div> 
  )
};

export default FloatMenu;