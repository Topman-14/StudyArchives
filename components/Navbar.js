import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
        <h2>Study Archives</h2>
        <ul>
            <li><Link href="/maintainers">Maintainers</Link></li>
            <li><Link href="/contribute">Contribute</Link></li>
            <li><Link href="https://github.com/Topman-14/studyArchives">Github</Link></li>
        </ul>
    </div>
  )
}
