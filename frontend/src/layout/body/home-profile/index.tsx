import { useMediaQuery } from 'react-responsive';
import { twMerge } from 'tailwind-merge';
import profilePic from '../../../assets/profile-picture.jpg';


const HomeProfile = () => {

  const isMdView = useMediaQuery({ query: '(max-width: 768px)' })

  const renderProfileImage = () => {
    return (
      <div className='w-full h-80 flex justify-center'>
        <div className={twMerge(
          isMdView ? 'justify-center' : 'justify-start',
          'px-2 w-3/4 h-auto flex'
        )}>
          <div className='flex items-end'>
            <img
              src={profilePic}
              alt='Profile picture'
              className="w-[160px] h-[180px] rounded-xl shadow-2xl cursor-pointer"
            />
          </div>
        </div>
      </div>
    )
  }

  const renderProfileInfo = () => {
    return (
      <div className='mt-4 h-auto w-full flex justify-center'>
        <div className='px-1 w-3/4 bg-[#493628] rounded-xl shadow-2xl'>
          <div className=''>
            <div className={twMerge(
              isMdView ? 'text-center' : '',
              'm-4 text-3xl tracking-widest'
            )}>
              Airden Gonzaga
              <div className='text-lg mt-4'>
                🚀 Full-Stack Software Engineer | DevOps Enthusiast | Tech Educator
              </div>
            </div>
            <hr className='mx-4' />
            <div className={twMerge(
              isMdView ? 'text-center mx-10' : '',
              'm-4 text-base tracking-widest'
            )}>
              <p>
                Experienced Full-Stack Developer with 3 years building scalable
                web apps and automating deployments using DevOps practices.
                Proficient in frontend and backend technologies like JavaScript,
                React, Node.js, Python, and cloud platforms (AWS, Azure). With
                4 years as an IT Instructor, I simplify complex tech and mentor
                future developers. My 1 year in service desk sharpens my
                problem-solving skills and system troubleshooting.
                <br />
                <br />
                Let us create impactful, efficient solutions! 🌍
              </p>     
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='h-full'>
      {renderProfileImage()}
      {renderProfileInfo()}
    </div>
  )
  
}
export default HomeProfile;