import Link from 'next/link'
import Navbar from '../../components/Navbar'

export default function Home() {
  return (
    <main className="">
      <div id='hero_section'>
        <Navbar />
        <div className='px-10 text-center text-5xl py-20 leading-snug'>
          <p>Your Comprehensive Resource Center for Past Exam Questions and Preparation Materials</p>
        </div>
      </div>
    </main>
  )
}
