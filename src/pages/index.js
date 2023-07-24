import Link from 'next/link'
import Navbar from '../../components/Navbar'
import LargeBtn from '../../components/LargeBtn'

export default function Home() {
  return (
    <main className="">
      <div id='hero_section'>
        <Navbar />
        <div className='px-10  py-20'> 
          <p className='max-w-xl mx-auto text-center text-4xl leading-snug fade-up'>Your Comprehensive Resource Center for Past Exam Questions and Preparation Materials</p>
          <div id="heroBtns" className='flex justify-center gap-7 mt-20'>
          <LargeBtn href="https://drive.google.com/drive/folders/1CnuD0Of_iiJRiyP5vM798kKhCM3yuNpm" text="FBMAS" />

          <LargeBtn href="https://drive.google.com/drive/folders/1CnuD0Of_iiJRiyP5vM798kKhCM3yuNpm" text="FMASS" />
          </div>
        </div>
      </div>
      <div id='more_info'></div>
    </main>
  )
}
