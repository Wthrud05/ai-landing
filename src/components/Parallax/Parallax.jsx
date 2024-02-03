import React, {useRef} from 'react'
import styles from './Parallax.module.scss'
import {motion, useScroll, useTransform} from 'framer-motion'
import planets1 from '../../assets/planets1.png'
import planets2 from '../../assets/planets2.png'
import mountains1 from '../../assets/mountains.png'
import mountains2 from '../../assets/mountains2.png'

const Parallax = ({type}) => {
  const ref = useRef(null)

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%'])
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={ref} className={styles.Parallax}>
      <motion.h1 style={{y: yText}}>
        {type === 'WhatIsThis' ? 'Что это такое?' : 'Как это работает?'}
      </motion.h1>
      <motion.div
        style={{
          backgroundImage: `url(${type === 'WhatIsThis' ? `${mountains1}` : `${mountains2}`})`,
        }}
        className={styles.Mountains}
      ></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${type === 'WhatIsThis' ? `${planets2}` : `${planets1}`})`,
        }}
        className={styles.Planets}
      ></motion.div>
      <motion.div style={{x: yBg}} className={styles.Stars}></motion.div>
    </div>
  )
}

export default Parallax
