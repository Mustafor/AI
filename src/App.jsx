import './App.css'
import {LogoIcon, WatchIcon} from './assets/images/logo'
import rocket from './assets/images/rocket.png'
import img1 from './assets/images/img1.png'
import img2 from './assets/images/img2.png'
import img3 from './assets/images/img3.png'
import img4 from './assets/images/img4.png'
import phone from './assets/images/phone.png'
import telephonePlan from './assets/images/telephonePlan.png'

function App() {

  return (
    <>
      <div className='px-[150px] py-[21px] flex items-center justify-between bg-slate-800'>
        <div className='flex items-center gap-[15px]'>
          <a href="/">
          <LogoIcon/>
          </a>
        <span className='text-[22px] text-[#3A68B8] font-medium'>Artificial Intelligence</span>
        </div>
        <ul className='flex items-center gap-[40px]'>
          <li>
            <a className='text-[16px] text-white hover:text-[#3A68B8] duration-300' href="#">Home</a>
          </li>
          <li>
            <a className='text-[16px] text-white hover:text-[#3A68B8] duration-300' href="#">About</a>
          </li>
          <li>
            <a className='text-[16px] text-white hover:text-[#3A68B8] duration-300' href="#">Services</a>
          </li>
          <li>
            <a className='text-[16px] text-white hover:text-[#3A68B8] duration-300' href="#">Blog</a>
          </li>
          <li>
            <a className='text-[16px] text-white hover:text-[#3A68B8] duration-300' href="#">Contact</a>
          </li>
        </ul>
        <button className='w-[112px] py-[15px] hover:bg-transparent duration-300 border-[2px] border-[#3A68B8] hover:border-[2px] font-bold text-white text-[16px] bg-[#3A68B8] rounded-md'>Sign In</button>
      </div>
      <div className='px-[150px] pb-[99px] bg-slate-900 flex justify-between'>
        <div className='pt-[100px]'>
          <strong className='text-[18px] font-bold text-[#3A68B8] mb-[10px]'>Next genaretion platform</strong>
          <h2 className='text-[55px] font-extrabold w-[604px] mb-[40px] text-white'>Artificial intelligence & Syber security</h2>
          <p className='text-[18px] w-[558px] text-white font-medium mb-[50px]'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          <div className='flex items-center gap-[50px]'>
          <button className='bg-[#3A68B8] border-[2px] border-[#3A68B8] duration-300 hover:border-[2px] hover:bg-transparent w-[171px] py-[15px] rounded-md text-white text-[20px] font-medium'>Get Started</button>
          <button className='bg-[#3A68B8] border-[2px] border-[#3A68B8] duration-300 hover:border-[2px] hover:bg-transparent flex items-center justify-center gap-[10px] w-[171px] py-[15px] rounded-md text-white text-[20px] font-medium'>
            <WatchIcon/>
            <span>Watch Video</span>
          </button>
          </div>
        </div>
        <img src={rocket} alt="img" width={532} height={534}/>
      </div>
      <div className='flex bg-slate-900 pb-[99px] items-center justify-center gap-[71px]'>
        <img src={img1} alt="img" width={217} height={58}/>
        <img src={img2} alt="img" width={217} height={58}/>
        <img src={img3} alt="img" width={217} height={58}/>
        <img src={img4} alt="img" width={217} height={58}/>
      </div>
      <div className='flex items-center justify-between bg-slate-950 px-[150px] py-[130px]'>
        <img src={phone} alt="telephone" width={525} height={469}/>
        <div>
          <h2 className='text-white w-[484px] text-[40px] font-bold mb-[30px]'>Apply AI, Deep Learning and Data Sciece to solve</h2>
          <p className='w-[460px] text-white text-[16px] mb-[50px]'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          <button className='bg-[#3A68B8] border-[2px] border-[#3A68B8] duration-300 hover:border-[2px] hover:bg-transparent py-[15px] w-[150px] rounded-md text-white text-[16px]'>Learn More</button>
        </div>
      </div>
      <div className='bg-slate-950 px-[150px] flex items-center justify-between py-[150px]'>
        <div>
          <h2 className='text-[40px] font-bold w-[548px] text-white mb-[40px]'>What our clients say about our awesome solutions</h2>
          <p className='text-[16px] w-[460px] text-white mb-[20px]'>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know.</p>
          <p className='text-white w-[460px] text-[16px] mb-[20px]'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing .</p>
          <p className='text-white w-[460px] text-[16px] mb-[20px]'>Lorem ipsum is placeholder previewing layouts and visual mockups.</p>
          <p className='text-white w-[460px] text-[16px]'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
        <img src={telephonePlan} alt="phone" width={542} height={451}/>
      </div>
    </>
  )
}

export default App
