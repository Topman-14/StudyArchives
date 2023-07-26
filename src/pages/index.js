import {useRef, useState} from 'react'
import Navbar from '../../components/Navbar'
import LargeBtn from '../../components/LargeBtn'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function Home() {
  const moreInfo = useRef(null);
  function scrollDown(){
    moreInfo.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const [heroText, setHeroText] = useState("The Comprehensive Resource Center for Past Exam Questions and Preparation Materials");

  // const heroTexts =["The Comprehensive Resource Center for Past Exam Questions and Preparation Materials", "The Crazy Resource Center for Past Exam Questions and Preparation Materials", "The Madd Resource Center for Past Exam Questions and Preparation Materials"]

  
  // for(let text in heroText){
  //   setTimeout(setHeroText(heroTexts[text]), 3000)
  // }

  return (
    <main className="">
      <div id='hero_section'>
        <Navbar />
        <div className='px-10 sm:pt-20 pt-32  flex flex-col gap-4 h-3/4'> 
          <p className='max-w-xl mx-auto text-center sm:text-4xl text-2xl leading-snug fade-up'>{heroText}</p>
          <p className='text-sm text-center fade pb-4 sm:mt-14 mt-5'>Choose a faculty</p>
          <div id="heroBtns" className='fade flex justify-center gap-7 '>
          <LargeBtn href="https://drive.google.com/drive/folders/1CnuD0Of_iiJRiyP5vM798kKhCM3yuNpm" text="FBMAS" />
          <LargeBtn href="https://drive.google.com/drive/folders/1CnuD0Of_iiJRiyP5vM798kKhCM3yuNpm" text="FAMSS" />
          </div>
          <button className='mt-auto pt-4 lg:self-end ' onClick={scrollDown} >Learn More <KeyboardDoubleArrowDownIcon className='animate-bounce'/></button>
        </div>
      </div>
      <div id='more_info' ref={moreInfo}></div>
    </main>
  )
}
