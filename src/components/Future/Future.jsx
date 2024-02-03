import React from 'react'
import styles from './Future.module.scss'
import {motion} from 'framer-motion'

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const textVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}

const elementVariants = {
  initial: {
    rotate: 0,
    scale: 1,
    x: 0,
  },
  animateOne: {
    scale: [1, 1.3, 1.3, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    x: [300, -300],
    borderRadius: ['20%', '20%', '50%', '50%', '20%'],
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 2,
      delay: 1,
    },
  },
  animateTwo: {
    scale: [1, 1.3, 1.3, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    x: [-300, 300],
    borderRadius: ['20%', '20%', '50%', '50%', '20%'],
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 2,
      delay: 1,
    },
  },
}

const Future = () => {
  return (
    <div className={styles.Future}>
      <h1>Будущее</h1>
      <motion.div
        variants={boxVariants}
        initial="initial"
        whileInView="animate"
        className={styles.TextContainer}
      >
        <motion.div variants={textVariants}>
          <p>
            Искусственный интеллект (ИИ) продолжает развиваться и находить все новые и новые
            применения в различных областях. В будущем, ИИ будет играть все более важную роль в
            нашей жизни, помогая нам решать сложные задачи, улучшать качество жизни и повышать
            производительность
          </p>
          <motion.div
            variants={elementVariants}
            initial="initital"
            animate="animateOne"
            className={styles.Element}
          ></motion.div>
        </motion.div>
        <motion.div variants={textVariants}>
          <p>
            Он будет использоваться в медицине для диагностики и лечения заболеваний, в транспорте
            для улучшения безопасности и эффективности, в образовании для предоставления
            персонализированного обучения и т.д
          </p>
          <motion.div
            variants={elementVariants}
            initial="initital"
            animate="animateTwo"
            className={styles.Element}
          ></motion.div>
        </motion.div>
        <motion.div variants={textVariants}>
          <p>
            Однако, важно помнить, что ИИ не заменяет человеческий интеллект, а дополняет его,
            предоставляя новые инструменты и возможности для решения сложных задач и улучшения
            производительности
          </p>
        </motion.div>
      </motion.div>
      <div className={styles.Footer}>
        <p>Большинство материалов сайта было сгенерировано с помощью ИИ</p>
        <motion.a whileHover={{scale: 1.15}} whileTap={{scale: 0.95}} href="#Главная">
          В начало
        </motion.a>
      </div>
    </div>
  )
}

export default Future
