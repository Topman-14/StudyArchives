import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import styles from './styles/Navbar.module.css'
import MobileMenu from './MobileMenu';


export default function Navbar() {
  const router = useRouter();

  const isLinkActive = (href) => {
    return router.pathname === href;
  };

  const [menuIsClicked, setMenuIsClicked] = useState(false);

  function closeMenu() {
    setMenuIsClicked(false)
  }
  function openMenu() {
    setMenuIsClicked(true)
  }

  return (
    <div className='flex justify-between p-5 font-bold fade text-white'>
        <Link className= {isLinkActive('/') ? styles.activeLink : styles.navlinks} href="/">Study Archives</Link>
        <ul className='gap-5 justify-between sm:flex hidden'>
            <li><Link className= {isLinkActive('/maintainers') ? styles.activeLink : styles.navlinks} href="/maintainers">Maintainers</Link></li>
            <li><Link className= {isLinkActive('/contribute') ? styles.activeLink : styles.navlinks} href="/contribute">Contribute</Link></li>
            <li><Link className={styles.navlinks} href="https://github.com/Topman-14/studyArchives">Github</Link></li>
        </ul>
        <MenuRoundedIcon onClick={openMenu} className={styles.menuIcon} />
        {menuIsClicked && <MobileMenu handleClick={closeMenu}/>}
    </div>
  )
}
