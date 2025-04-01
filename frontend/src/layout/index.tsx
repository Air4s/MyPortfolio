import { Outlet } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import TopBar from './topbar';


const MainLayout = () => {

  return (
    <div className={twMerge(
      'flex flex-col h-full w-full text-white',
      'font-playfair tracking-wider' // Web project font-fam
    )}>
      <div id='topbar' className='h-16 sticky top-0'>
        <TopBar />
      </div>
      <main className='items-center justify-center'>
        <div className='bg-[#AB886D] h-full'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;