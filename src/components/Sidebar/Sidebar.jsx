import React, {useRef, useState} from 'react'
import styles from './Sidebar.module.scss'
import Links from './Links/Links'
import ToggleButton from './ToggleButton/ToggleButton'
import {motion} from 'framer-motion'
import {useClickOutside} from '../../hooks/useClickOutside'

const variants = {
  open: {
    clipPath: 'circle(1200px at 50px 50px)',
    backgroundColor: 'rgba(66, 234, 254, 0.5)',
    transition: {
      type: 'spring',
      stiffnes: 400,
    },
  },
  closed: {
    clipPath: 'circle(30px at 50px 50px)',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    transition: {
      delay: 0.3,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()

  useClickOutside(ref, () => {
    setIsOpen(false)
  })

  return (
    <motion.div ref={ref} className={styles.Sidebar} animate={isOpen ? 'open' : 'closed'}>
      <motion.div className={styles.Bg} variants={variants}>
        <Links setIsOpen={setIsOpen} />
      </motion.div>
      <ToggleButton setIsOpen={setIsOpen} />
    </motion.div>
  )
}

export default Sidebar
