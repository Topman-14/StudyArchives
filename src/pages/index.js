import {useRef, useState} from 'react'
import Navbar from '../../components/Navbar'
import LargeBtn from '../../components/LargeBtn'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Link from 'next/link';

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
          <button className='mt-auto py-2 lg:self-end ' onClick={scrollDown} >Learn More <KeyboardDoubleArrowDownIcon className='animate-bounce'/></button>
        </div>
      </div>
      <div id='more_info' ref={moreInfo} className='text-center p-8 '>
        <div className='flex mx-auto flex-wrap gap-20 justify-center p-8 max-w-6xl fade-up sm:text-base text-sm'>
          <div
          className='more-info-section xl:mr-40 lg:text-left'>Welcome to Study Archives - your ultimate source for examination past questions and study materials! <Link href="./maintainers" className='gen-link'>We</Link> understand the challenges university students face in finding extensive preparation resources. Our mission is to provide easy access to an ever-expanding collection of exam past questions for the Faculty of Basic Medical and Applied Sciences, as well as the Faculty of Administrative and Managerial Social Sciences.

          </div>
          <img
          className='more-info-section lg:block hidden' />
          <img
          className='more-info-section lg:block hidden' />
          <div
          className='more-info-section xl:ml-40 lg:text-right'> With continuous updates, our Google Drive ensures you have access to the most thorough content we have available. We intend our resources to cover all levels and semesters, including tests and examinations. We value student contributors and foster a collaborative environment where students can support each other's academic journey. Find out how you can contribute <Link href="./contribute" className='gen-link'>here</Link></div>
        </div>
      </div>
    </main>
  )
}
