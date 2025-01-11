import { useEffect, useState } from 'react';
import { BsPeople } from 'react-icons/bs';
import { HiOutlineInformationCircle } from 'react-icons/hi2';
import { TfiHome } from 'react-icons/tfi';
import { useMediaQuery } from 'react-responsive';
import { twMerge } from 'tailwind-merge';
import FloatMenu from './float-menu';


interface IconInfo {
  icon: React.ReactNode;
  label: string;
  target: string;
}

const TopBar = () => {
  const iconClass = 'h-full w-full';
  const navClass = 'm-4 flex justify-center';

  // const isXsView = useMediaQuery({ query: '(max-width: 500px)' })
  // const isSmView = useMediaQuery({ query: '(max-width: 640px)' })
  // const isMdView = useMediaQuery({ query: '(max-width: 768px)' })
  const isLgViewPoint = useMediaQuery({ query: '(max-width: 1024px)' })
  // const isXlView = useMediaQuery({ query: '(max-width: 1280px)' })

  const iconItems: IconInfo[] = [
    { 
      icon: <TfiHome className={iconClass} />,
      label: 'Home',
      target: 'home'
    },
    { 
      icon: <HiOutlineInformationCircle className={iconClass} />,
      label: 'More About Me',
      target: 'about'
    },
    { 
      icon: <BsPeople  className={iconClass} />,
      label: 'Let\'s  Connect!',
      target: 'connect'
    },
  ];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      console.log("Scroll event triggered", window.scrollY); // To remove later
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderLGview = (): JSX.Element => {
    return (
      <div className='flex justify-between'>
        <div className={twMerge(navClass)}>
          My Portfolio(lg)
        </div>
        <div className={twMerge(navClass, 'cursor-pointer')}>
          <div className='flex'>
            {iconItems.map((item: IconInfo, index: number) => (
              <div key={index} className={twMerge(
                'mx-2 px-2 flex justify-center items-center',
                'hover hover:bg-[#54473F] hover:rounded-lg hover:font-medium',
                'text-lg'
              )}>
                <a href={`#${item.target}`}>
                  <div className='flex'>
                    <div className='mx-0.5'>
                      {item.icon}
                    </div>
            
                    <div className='mx-0.5'>
                      {item.label}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className={twMerge(
          navClass,
          'mx-2 px-2',
          'cursor-pointer',
          'hover:bg-[#54473F] hover:rounded-lg hover:font-medium'
        )}>
          <a href="https://github.com/Air4s" target="_blank" rel="noopener noreferrer">
            Checkout my github
          </a>
        </div>
      </div>
    );
  };

  const renderSMview = () : JSX.Element => {
    return (
      <div className='flex'>
        <div className='flex m-4'>
          <div className='mr-2'>
            My Portfolio
          </div>
          <div className='flex items-center'>
            <FloatMenu />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={twMerge(
      'h-full w-full',
      'text-lg',
      'transition-colors duration-300',
      isScrolled ? 'bg-[#AB886D]' : 'bg-[#493628]'
    )}>
      <div className=''>
        {
          isLgViewPoint ? renderSMview() : renderLGview()
        }
        {}
      </div>
    </div>
  );
};

export default TopBar;