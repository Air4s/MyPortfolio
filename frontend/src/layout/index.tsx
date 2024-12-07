// import { Outlet } from 'react-router-dom';
import TopBar from './topbar';


const MainLayout = () => {

  return (
    <div className='flex flex-col h-full w-full text-white'>
      <div id='topbar' className='h-16 sticky top-0'>
        <TopBar />
      </div>
      <main className='items-center justify-center'> {/* overflow-y-scroll */}
        <div className='bg-[#1d3f58] h-screen'>
          Main content here, outlet
        </div>
      </main>
    </div>
  );
};

export default MainLayout;