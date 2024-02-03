import React, {useRef} from 'react'
import styles from './WhatIsThis.module.scss'
import pc from '../../assets/pc-ai.png'
import {motion, useInView} from 'framer-motion'

const imgVariants = {
  initial: {
    x: -300,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}

const sloganVariants = {
  initial: {
    left: -200,
    opacity: 0,
  },
  animate: {
    left: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1.2,
    },
  },
}

const textBoxVariants = {
  initial: {
    x: 300,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}

const textsVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      staggeredChildren: 0.1,
      delay: 0.5,
    },
  },
}

const WhatIsThis = () => {
  return (
    <div className={styles.WhatIsThis}>
      <div className={styles.Wrapper}>
        <motion.div
          variants={imgVariants}
          initial="initial"
          whileInView="animate"
          className={styles.ImageBox}
        >
          <motion.img src={pc} alt="pc-ai" />
        </motion.div>
        <motion.div
          className={styles.TextsBox}
          variants={textBoxVariants}
          initial="initial"
          whileInView="animate"
        >
          <motion.h1 variants={textsVariants} whileHover={{scale: 1.05}}>
            Искусственный <span>Интеллект</span>
          </motion.h1>
          <motion.p variants={textsVariants}>
            это область компьютерных наук, которая занимается созданием интеллектуальных машин и
            программ
          </motion.p>
          <motion.p variants={textsVariants}>
            способных выполнять задачи, которые традиционно считаются прерогативой человека, такие
            как распознавание образов, обработка естественного языка, прогнозирование и многое
            другое.
          </motion.p>
          <motion.button variants={textsVariants}>
            <a
              href="https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D0%B9%D1%80%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F_%D1%81%D0%B5%D1%82%D1%8C"
              target="_blank"
            >
              Узнать больше
            </a>
          </motion.button>
        </motion.div>
      </div>
      <motion.div
        variants={sloganVariants}
        initial="initial"
        whileInView="animate"
        className={styles.Slogan}
      >
        <p>
          Искусственный интеллект: <br /> <span>расширяя границы человеческого потенциала</span>
        </p>
      </motion.div>
    </div>
  )
}

export default WhatIsThis
