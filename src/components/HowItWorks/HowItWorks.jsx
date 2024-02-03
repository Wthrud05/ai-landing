import React from 'react'
import styles from './HowItWorks.module.scss'
import {motion} from 'framer-motion'
import scheme from '../../assets/scheme.png'
import input from '../../assets/inputdata.png'
import hidden from '../../assets/hiddenlayer.png'
import output from '../../assets/outputdata.png'

const textVariants = {
  initial: {
    x: -300,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
      delay: 0.3,
    },
  },
}

const imgVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
}

const sloganVariants = {
  initial: {
    right: -150,
    opacity: 0,
  },
  animate: {
    right: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
}

const HowItWorks = () => {
  return (
    <div className={styles.HowItWorks}>
      <div className={styles.Wrapper}>
        <motion.h2 initial="initial" whileInView="animate" variants={textVariants}>
          Искусственный интеллект (ИИ) работает по принципу нейронных сетей. Простыми словами, это
          система, которая имитирует работу человеческого мозга.
        </motion.h2>

        <div className={styles.InfoBox}>
          <motion.div
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            className={styles.TextsBox}
          >
            <motion.div className={styles.TextItem}>
              <img src={input} alt="inputData" />
              <p>
                Входные данные: На первом этапе в систему поступают входные данные, например текст.
                Эти данные представляются в виде чисел, которые можно подавать на вход нейронной
                сети.
              </p>
            </motion.div>

            <motion.div variants={textVariants} className={styles.TextItem}>
              <img src={hidden} alt="hiddenLayer" />
              <p>
                Скрытый слой: Эти данные проходят через скрытые слои нейронной сети. Каждый слой
                состоит из нейронов, которые обрабатывают входные данные и передают результаты
                следующему слою
              </p>
            </motion.div>

            <motion.div variants={textVariants} className={styles.TextItem}>
              <img src={output} alt="outputData" />
              <p>
                Выходные данные: На последнем этапе нейронная сеть выдаёт результат. Это выходные
                данные, которые получаются после обработки информации в скрытых слоях.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            variants={imgVariants}
            initial="initial"
            whileInView="animate"
            className={styles.ImgBox}
          >
            <img src={scheme} alt="scheme of ai" />
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={sloganVariants}
        initial="initial"
        whileInView="animate"
        className={styles.Slogan}
      >
        <p>
          Обучение ИИ: <br /> <span>новая эволюция с каждым этапом</span>
        </p>
      </motion.div>
    </div>
  )
}

export default HowItWorks
