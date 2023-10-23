import {useRef, useState, useEffect} from 'react'
import Navbar from '../../components/Navbar'
import LargeBtn from '../../components/LargeBtn'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Link from 'next/link';
import Head from 'next/head';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Home() {
  const moreInfo = useRef(null);
  function scrollDown(){
    moreInfo.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const [heroText, setHeroText] = useState("The Comprehensive Resource Center for Past Exam Questions and Preparation Materials🚀");

  const [isVisible, setVisible] = useState(false);
  const [isVisible2, setVisible2] = useState(false);
  const domRef = useRef();
  const domRef2 = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setVisible(entry.isIntersecting)
      });
    });
    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setVisible2(entry.isIntersecting)
      });
    });
    observer.observe(domRef.current);
    observer2.observe(domRef2.current);
    return () => {
      observer.disconnect()
      observer2.disconnect()
    };
  }, []);

  return (
    <main className="">
      <Head>
        <meta property="og:image" content="https://study-archives.vercel.app/images/studyarchives.png" />
        <meta property="og:title" content="StudyArchives - Relevant past questions for better exam preparation" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://study-archives.vercel.app/" />
      </Head>
      <div id='hero_section'>
        <Navbar />
        <div className='px-10 sm:pt-20 pt-32  flex flex-col gap-4 h-3/4'> 
          <p className='max-w-xl mx-auto text-center sm:text-4xl text-2xl leading-snug fade-up'>{heroText}</p>
          <p className='text-sm text-center fade pb-4 sm:mt-14 mt-5'>Choose your Faculty</p>
          <div id="heroBtns" className='fade flex justify-center gap-7 '>
          <LargeBtn href="https://drive.google.com/drive/folders/16prr0Jt3vQnk-zDEaoSbZlvPIF6PL2m4" text="FBMAS" />
          <LargeBtn href="https://drive.google.com/drive/folders/1kKWZ-tDAEXJl06XEicATYprJdHtZ57np" text="FAMSS" />
          </div>
          <button className='mt-auto py-2 lg:self-end noSelect' onClick={scrollDown} >Learn More <KeyboardDoubleArrowDownIcon className='animate-bounce'/></button>
        </div>
      </div>
      <div ref={moreInfo} className='text-center p-8 more_info flex flex-col justify-center content-evenly'>
        <div className={`flex flex-wrap gap-10 justify-between p-8 sm:text-base text-sm content-center h-5/6 fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
          <div className='more-info-section my-auto lg:text-left mx-auto'>
            Welcome to StudyArchives - your ultimate source for examination past questions and study materials! <Link href="./maintainers" className='gen-link'>We</Link> understand the challenges university students face in finding extensive preparation resources. Our mission is to provide easy access to an ever-expanding collection of exam past questions for the Faculty of Basic Medical and Applied Sciences, as well as the Faculty of Arts and Management Social Sciences.
          </div>
          <img src="/images/more_info_pic2.png" className='more-info-section lg:h-full mx-auto h-1/2' />
        </div>
      </div>
      <div className='text-center p-8 more_info flex flex-col justify-center content-evenly more-info2' >
        <div className={`flex flex-wrap gap-10 justify-between p-8  fade-up sm:text-base text-sm content-center h-5/6 fade-in-section ${isVisible2 ? 'is-visible' : ''}`} ref={domRef2}>
          <img src="/images/more_info_pic1.png" className='more-info-section lg:h-full mx-auto h-1/2' />
          <div className='more-info-section my-auto lg:text-right mx-auto'> 
            With continuous updates, our Google Drive ensures you have access to the most thorough content we have available. We intend our resources to cover all levels and semesters, including tests and examinations. We value student contributors and foster a collaborative environment where students can support each other's academic journey. Find out how you can contribute <Link href="./contribute" className='gen-link'>here<ArrowForwardIcon /></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
