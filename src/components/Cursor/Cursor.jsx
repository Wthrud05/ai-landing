import React, {useEffect, useState} from 'react'
import styles from './Cursor.module.scss'
import {motion} from 'framer-motion'

const Cursor = () => {
  const [position, setPosititon] = useState({x: 0, y: 0})

  useEffect(() => {
    const mouseMove = (e) => {
      setPosititon({x: e.clientX, y: e.clientY})
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <motion.div
      animate={{x: position.x + 10, y: position.y + 10}}
      className={styles.Cursor}
    ></motion.div>
  )
}

export default Cursor
