import React from 'react'
import styles from './styles/MaintainerTile.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

export default function MaintainerTile(props) {
  return (
    <div className={styles.tile}>
        <div className={styles.bg2}></div>
        <div className={styles.imgFrame}>
            <img src={props.img} alt="" />
        </div>
        <h2 className='pt-20'>{props.name}</h2>
        <div className='flex gap-5 mt-2'>
          <Link href={props.github}><GitHubIcon /></Link>
          <Link href={props.linkedin}><LinkedInIcon /></Link>
        </div>
    </div>
  )
}
