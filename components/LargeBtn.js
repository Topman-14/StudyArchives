import Link from 'next/link'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './styles/LargeBtn.module.css'

export default function LargeBtn(props) {

  return (
    <Link href={props.href} className={styles.btn}>
        <button style={{paddingRight: 8}}>{props.text}</button>
        <ArrowForwardIcon />
    </Link>
  )
}
