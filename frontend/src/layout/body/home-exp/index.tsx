import { useMediaQuery } from 'react-responsive';
import { twMerge } from 'tailwind-merge';
import teacherPic from '../../../assets/teacher.png';
import jrDeveloperPic from '../../../assets/jr-developer.png'
import srDeveloperPic from '../../../assets/sr-developer.png' 
import itServiceDeskPic from '../../../assets/it-service-desk.png';
import FlipCard from '../../../common/image-flipper/';

interface IExpGallery {
  src: string;
  alt: string;
  target: string;
}

const HomeExp = () => {

  const isMdView = useMediaQuery({ query: '(max-width: 768px)' })

  const renderExpGallery = () => {

    const expGallery: IExpGallery[] = [
      { 
        src: srDeveloperPic,
        alt: 'Home',
        target: 'home'
      },
      { 
        src: jrDeveloperPic,
        alt: 'More About Me',
        target: 'about'
      },
      { 
        src: itServiceDeskPic,
        alt: 'More About Me',
        target: 'about'
      },
      { 
        src: teacherPic,
        alt: 'More About Me',
        target: 'about'
      }
    ];
      
    return (
      <div className='w-full h-auto flex justify-center'>
        <div className='mt-10 w-5/6 rounded-xl shadow-2xl'>
          <div className={twMerge(
            isMdView ? 'text-center' : '',
            'mx-8 mt-6 text-2xl tracking-widest'
          )}>
            My past Job Experiences
          </div>
          <div className={twMerge(
            isMdView ? '' : 'grid grid-cols-2 gap-8',
            'm-8 grid gap-8'
          )}>
            {expGallery.map((item: IExpGallery, index: number) => (
              <div key={index} className={twMerge(
                'bg-[#D6C0B3] flex justify-center rounded-2xl shadow-lg cursor-pointer'
              )}>
                <img
                  key={index}
                  src={item.src}
                  alt='to change'
                  className='w-full h-[350px]'
                />
                {/* <FlipCard
                  front={<img src={item.src} alt={item.alt} className="w-full h-[350px] z-0" />}
                  back={<div>Details about this experience</div>}
                  flipDirection="horizontal"
                /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='h-auto'>
      {renderExpGallery()}
    </div>
  )
  
}
export default HomeExp;