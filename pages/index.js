import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles}>
      <h1>Hello next js</h1>
      <p>another text</p>
    </div>
  )
}
