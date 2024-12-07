'use client' // Ensure this is a client-side component

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'  // Correct import for the app directory
import styles from './styles/python.module.css'

export default function Home() {
  const router = useRouter()  // Correct hook from next/navigation for the app directory

  useEffect(() => {
    console.log('Welcome to the homepage')
  }, [])

  // Function to handle button click and navigate to /course
  const handleClick = () => {
    router.push('/course')  // Navigate to the /course page
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Homepage</h1>
      <button className={styles.button} onClick={handleClick}>Click Me</button>
    </div>
  )
}
