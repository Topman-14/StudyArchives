import React from 'react'
import styles from './styles/MobileMenu.module.css'
import navstyle from './styles/Navbar.module.css'
import { useRouter } from 'next/router'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import Link from 'next/link'

export default function (props) {
    const router = useRouter();

    console.log(router.pathname)
    const isLinkActive = (href) => {
    return router.pathname === href;
    };

  return (
    <div className={styles.wrapper} >
        <ArrowBackIosRoundedIcon onClick={props.handleClick} className={styles.backBtn}/>
        <ul className='flex flex-col gap-5 justify-between text-xl'>
            <li><Link className= {isLinkActive('/') ? navstyle.activeLink : navstyle.navlinks} href="/">Home</Link></li>
            <li><Link className= {isLinkActive('/maintainers') ? navstyle.activeLink : navstyle.navlinks} href="/maintainers">Maintainers</Link></li>
            <li><Link className= {isLinkActive('/contribute') ? navstyle.activeLink : navstyle.navlinks} href="/contribute">Contribute</Link></li>
            <li><Link className={navstyle.navlinks} href="https://github.com/Topman-14/studyArchives">GitHub</Link></li>
        </ul>
    </div>
  )
}
