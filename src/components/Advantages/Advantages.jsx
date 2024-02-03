import React, {useRef} from 'react'
import styles from './Advantages.module.scss'
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'
import authomatization from '../../assets/automatization.jpeg'
import analyzing from '../../assets/analyzing.jpeg'
import security from '../../assets/security.jpg'
import availability from '../../assets/availability.jpg'
import quality from '../../assets/quality.jpg'

const items = [
  {
    id: 1,
    title: 'Улучшение эффективности',
    img: authomatization,
    description:
      'Искусственный интеллект может автоматизировать рутинные и повторяющиеся задачи, что позволяет людям сосредоточиться на более сложных и творческих задачах. Это может привести к повышению эффективности и производительности',
  },
  {
    id: 2,
    title: 'Улучшение точности',
    img: analyzing,
    description:
      'Искусственный интеллект может обрабатывать и анализировать данные более точно и надежно, чем человек. Это может помочь в принятии более обоснованных и информированных решений',
  },
  {
    id: 3,
    title: 'Улучшение безопасности',
    img: security,
    description:
      'Искусственный интеллект может использоваться для обеспечения безопасности в различных областях, таких как медицина, финансы, производство и т.д. Он может обнаруживать аномалии, предсказывать потенциальные угрозы и принимать меры для предотвращения или минимизации рисков',
  },
  {
    id: 4,
    title: 'Улучшение доступности',
    img: availability,
    description:
      'Искусственный интеллект может быть использован для предоставления услуг и информации людям, которые не имеют доступа к традиционным источникам информации или услугам',
  },
  {
    id: 5,
    title: 'Улучшение качества жизни',
    img: quality,
    description:
      'Искусственный интеллект может быть использован для улучшения качества жизни людей, например, в области медицины, транспорта, образования и т.д. Он может помочь в диагностике и лечении заболеваний, улучшении транспортных систем, предоставлении персонализированного образования и т.д',
  },
]

const SingleAdvantage = ({item}) => {
  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target: ref,
  })

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

  return (
    <section>
      <div className={styles.Container}>
        <div className={styles.Wrapper}>
          <div className={styles.ImgContainer} ref={ref}>
            <img src={item.img} alt="advantage img" />
          </div>
          <motion.div style={{y}} className={styles.TextContainer}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Advantages = () => {
  const ref = useRef()

  const {scrollYProgress} = useScroll({target: ref, offset: ['end end', 'start start']})

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div className={styles.Advantages} ref={ref}>
      <div className={styles.Progress}>
        <h1>Преимущества</h1>
        <motion.div style={{scaleX}} className={styles.ProgressBar}></motion.div>
      </div>
      {items.map((item) => (
        <SingleAdvantage key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Advantages
