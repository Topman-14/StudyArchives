import {useRef} from 'react'
import Navbar from '../../components/Navbar'
import LargeBtn from '../../components/LargeBtn'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function Home() {
  const moreInfo = useRef(null);
  function scrollDown(){
    moreInfo.current?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <main className="">
      <div id='hero_section'>
        <Navbar />
        <div className='px-10  pt-20'> 
          <p className='max-w-xl mx-auto text-center text-4xl leading-snug fade-up'>The Comprehensive Resource Center for Past Exam Questions and Preparation Materials</p>
          <p className='text-sm text-center fade pb-4 mt-14'>Choose a faculty</p>
          <div id="heroBtns" className='flex justify-center gap-7 '>
          <LargeBtn href="https://drive.google.com/drive/folders/1CnuD0Of_iiJRiyP5vM798kKhCM3yuNpm" text="FBMAS" />
          <LargeBtn href="https://drive.google.com/drive/folders/1CnuD0Of_iiJRiyP5vM798kKhCM3yuNpm" text="FAMSS" />
          </div>
        <button className='float-right pt-3' onClick={scrollDown} >Learn More <KeyboardDoubleArrowDownIcon className='animate-bounce'/></button>
        </div>
      </div>
      <div id='more_info' ref={moreInfo}></div>
    </main>
  )
}
