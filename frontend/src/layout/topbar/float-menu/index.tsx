import { LuCircleChevronDown } from 'react-icons/lu';
import Popup from '../../../common/popover';

interface ItopBarMenu {
  icon: React.ReactNode;
  label: string;
  target: string;
}

const FloatMenu: React.FC<{ menu: ItopBarMenu[] }> = ({ menu }) => {
  return (
    <div>
      <Popup
        source={<LuCircleChevronDown className='h-4 w-4 cursor-pointer' />}
        type='onclick'
        panelClassName='bg-[#54473F] top-0 left-6'
      >
        <div className='flex flex-col gap-2 p-2'> {/* To change classNames */}
          {menu.map((item, index) => (
            <a
              key={index}
              href={`#${item.target}`}
              className='flex items-center gap-2 px-3 py-1 text-white hover:bg-[#6b5e4c] rounded-md transition-colors duration-200'
            >
              <span className='flex items-center'>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </Popup>
    </div>
  );
};

export default FloatMenu;