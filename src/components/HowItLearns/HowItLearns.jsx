import React from 'react'
import styles from './HowItLearns.module.scss'
import Image from '../../assets/imgicon.svg?react'
import Text from '../../assets/texticon.svg?react'
import Sound from '../../assets/soundicon.svg?react'
import Impulse from '../../assets/impulse.png'
import Learning from '../../assets/learning.png'
import {motion} from 'framer-motion'

const textsVariants = {
  initial: {
    x: -300,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
}

const blocksVariants = {
  initialLeft: {
    x: -300,
    opacity: 0,
  },
  initialRight: {
    x: 300,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.7,
    },
  },
}

const HowItLearns = () => {
  return (
    <div className={styles.HowItLearns}>
      <div className={styles.Wrapper}>
        <motion.h2 variants={textsVariants} initial="initial" whileInView="animate">
          ИИ использует алгоритмы и большие объемы данных для обучения и принятия решений
        </motion.h2>
        <div className={styles.InfoBox}>
          <motion.div
            variants={blocksVariants}
            initial="initialLeft"
            whileInView="animate"
            className={styles.CardsBox}
          >
            <h4>ИИ обучается на данных, которые могут быть:</h4>
            <div className={styles.Cards}>
              <motion.div
                whileHover={{scale: 1.15, boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.5)'}}
                className={styles.Card}
              >
                <Text className={styles.Icon} />
                <span>Текстами</span>
              </motion.div>
              <motion.div
                whileHover={{scale: 1.15, boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.5)'}}
                className={styles.Card}
              >
                <Image className={styles.Icon} />
                <span>Изображениями</span>
              </motion.div>
              <motion.div
                whileHover={{scale: 1.15, boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.5)'}}
                className={styles.Card}
              >
                <Sound className={styles.Icon} />
                <span>Звуками</span>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            variants={blocksVariants}
            initial="initialRight"
            whileInView="animate"
            className={styles.RightImg}
          >
            <img src={Impulse} alt="ai-impulse" />
          </motion.div>
          <motion.div
            variants={blocksVariants}
            initial="initialLeft"
            whileInView="animate"
            className={styles.LeftImg}
          >
            <img src={Learning} alt="learning-img" />
          </motion.div>
          <motion.div
            variants={blocksVariants}
            initial="initialRight"
            whileInView="animate"
            className={styles.Info}
          >
            <p>
              Основной принцип машинного обучения заключается в обучении компьютера на примерах,
              чтобы он мог самостоятельно решать задачи, не требуя явного программирования.
            </p>
            <p>
              Это означает, что вместо того, чтобы программировать компьютер для выполнения
              конкретной задачи, мы предоставляем ему набор данных, на которых он может учиться.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HowItLearns
