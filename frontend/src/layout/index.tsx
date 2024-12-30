// import { Outlet } from 'react-router-dom';
import TopBar from './topbar';
import { twMerge } from 'tailwind-merge';


const MainLayout = () => {

  return (
    <div className={twMerge(
      'flex flex-col h-full w-full text-white',
      'font-playfair tracking-wider' // Web project font-fam
    )}>
      <div id='topbar' className='h-16 sticky top-0'>
        <TopBar />
      </div>
      <main className='items-center justify-center'> {/* overflow-y-scroll */}
        <div className='bg-[#AB886D] h-full'> {/* h-screen */}
          Main content here, outlet
        </div>
      </main>
    </div>
  );
};

export default MainLayout;