import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import styles from './styles/Navbar.module.css'


export default function Navbar() {
  const router = useRouter();

  console.log(router.pathname)
  const isLinkActive = (href) => {
    return router.pathname === href;
  };

  return (
    <div className='flex justify-between p-5 font-bold fade text-white'>
        <Link className= {isLinkActive('/') ? styles.activeLink : styles.navlinks} href="/">Study Archives</Link>
        <ul className='flex justify-between gap-8'>
            <li><Link className= {isLinkActive('/maintainers') ? styles.activeLink : styles.navlinks} href="/maintainers">Maintainers</Link></li>
            <li><Link className= {isLinkActive('/contribute') ? styles.activeLink : styles.navlinks} href="/contribute">Contribute</Link></li>
            <li><Link className={styles.navlinks} href="https://github.com/Topman-14/studyArchives">Github</Link></li>
        </ul>
    </div>
  )
}
