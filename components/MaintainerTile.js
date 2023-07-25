import React from 'react'
import styles from './styles/MaintainerTile.module.css'

export default function MaintainerTile(props) {
  return (
    <div className={styles.tile}>
        <div className={styles.bg2}></div>
        <div className={styles.imgFrame}>
            <img src={props.img} alt="" />
        </div>
        <h2 className='pt-20'>{props.name}</h2>
    </div>
  )
}
