import React from 'react'
import styles from './Navbar.module.scss'
import logo from '../../assets/logo.svg'
import telegram from '../../assets/telegram.svg'
import vk from '../../assets/vk.svg'
import {motion} from 'framer-motion'
import Sidebar from '../Sidebar/Sidebar'

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <Sidebar />
      <div className={styles.Wrapper}>
        <motion.div
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
          className={styles.Logo}
        >
          <img src={logo} alt="logo" />
          <span>ai web</span>
        </motion.div>
        <div className={styles.Socials}>
          <motion.a
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}}
            href="https://t.me/LoAlexander"
            target="_blank"
          >
            <img src={telegram} alt="telegram" />
          </motion.a>
          <motion.a
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}}
            href="https://vk.com/provider1"
            target="_blank"
          >
            <img src={vk} alt="vk" />
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
