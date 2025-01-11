import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { FunctionComponent, ReactElement, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export interface IProps { 
  source: string | ReactElement,
  children: string | ReactElement,
  panelClassName?: string,
  type: 'onclick' | 'onhover', 
}

const Popup: FunctionComponent<IProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  
  if(props.type === 'onhover') {
    return (
      <Popover as='div' className='relative'>
        <div 
          className='flex place-content-center'
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {props.source}
        </div>
        {isOpen && (
          <PopoverPanel
            static
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className={twMerge(
              'absolute w-max rounded-md shadow-lg bg-white py-2 p-4 z-40',
              props.panelClassName
            )}
          >
            {props.children}
          </PopoverPanel>
        )}
      </Popover>
    );
  }
  
  return (
    <Popover as='div' className='relative'>
      {({ open, close }) => (
        <>
          <PopoverButton className='flex place-content-center'>
            {props.source}
          </PopoverButton>
         
          {open && (
            <PopoverPanel
              static
              className={twMerge(
                'absolute w-max rounded-md shadow-lg bg-white py-2 p-4 z-40',
                props.panelClassName
              )}
              onClick={() => close()}
            >
              {props.children}
            </PopoverPanel>
          )}
         
        </>
      )}
    </Popover>
  );
  
};

export default Popup;