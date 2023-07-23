import React from 'react'
import Link from 'next/link'




export default function Navbar() {
  return (
    <div className='flex justify-between p-5 font-bold'>
        <Link href="/">Study Archives</Link>
        <ul className='flex justify-between gap-4'>
            <li><Link href="/maintainers">Maintainers</Link></li>
            <li><Link href="/contribute">Contribute</Link></li>
            <li><Link href="https://github.com/Topman-14/studyArchives">Github</Link></li>
        </ul>
    </div>
  )
}
