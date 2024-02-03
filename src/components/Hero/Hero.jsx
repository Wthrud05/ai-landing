import {motion} from 'framer-motion'
import {ReactTyped} from 'react-typed'
import styles from './Hero.module.scss'
import hero from '../../assets/hero.png'
import mouse from '../../assets/mouse-icon.svg'

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
      staggeredChildren: 0.1,
    },
  },
  scrollAnimate: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
}

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-1000%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
    },
  },
}

const imgVariants = {
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

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.Wrapper}>
        <motion.div
          className={styles.TextsBox}
          variants={textVariants}
          initial="initial"
          whileInView="animate"
        >
          <motion.h1 variants={textVariants}>Искусственный интеллект это</motion.h1>
          <div className={styles.AnimText}>
            <ReactTyped
              className={styles.Text}
              strings={['инновация', 'будущее', 'эволюция']}
              typeSpeed={100}
              backSpeed={20}
              startDelay={500}
              loop
            />
          </div>
          <motion.p variants={textVariants}>Технология, вдохновляющая будущее</motion.p>
          <motion.button variants={textVariants}>
            <a href="#Что это такое?">Исследовать</a>
          </motion.button>
          <motion.img
            variants={textVariants}
            animate="scrollAnimate"
            src={mouse}
            alt="mouse-scroll"
          />
        </motion.div>
        <motion.div
          variants={sliderVariants}
          initial="initial"
          animate="animate"
          className={styles.SlidingTextBox}
        >
          Нейросети Алгоритмы Искусственный Интеллект
        </motion.div>
        <motion.div
          className={styles.ImagesBox}
          variants={imgVariants}
          initial="initial"
          whileInView="animate"
        >
          <motion.img variants={imgVariants} className={styles.Hand} src={hero} alt="hero" />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
