import React from 'react'
import styles from './Links.module.scss'
import {motion} from 'framer-motion'

const links = ['Главная', 'Что это такое?', 'Как это работает?', 'Преимущества', 'Будущее']

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const linksVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
}

const Links = ({setIsOpen}) => {
  return (
    <motion.div className={styles.Links} variants={variants}>
      {links.map((link) => (
        <motion.a
          href={`#${link}`}
          key={link}
          variants={linksVariants}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.95}}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {link}
        </motion.a>
      ))}
    </motion.div>
  )
}

export default Links
