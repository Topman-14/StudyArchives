import Link from 'next/link'
import React from 'react'

export default function LargeBtn(props) {
  return (
    <Link href={props.href} className='bg-white text-black py-4 px-6 rounded-lg'>
        <button >{props.text}</button>
    </Link>
  )
}
