import Link from 'next/link';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './styles/LargeBtn.module.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function LargeBtn(props) {

  return (
    <Link href={props.href} className={styles.btn} target="_blank">
        {props.icon && ((props.icon == "gmail")? <EmailOutlinedIcon /> : <WhatsAppIcon />)}
        <button className='sm:pr-1 pl-1'>{props.text}</button>
        <ArrowForwardIcon />
    </Link>
  )
}
