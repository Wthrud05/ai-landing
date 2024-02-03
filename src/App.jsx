import './styles/App.scss'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Parallax from './components/Parallax/Parallax'
import WhatIsThis from './components/WhatIsThis/WhatIsThis'
import HowItWorks from './components/HowItWorks/HowItWorks'
import HowItLearns from './components/HowItLearns/HowItLearns'
import Advantages from './components/Advantages/Advantages'
import Future from './components/Future/Future'
import Cursor from './components/Cursor/Cursor'

function App() {
  return (
    <div className="App">
      <Cursor />
      <section id="Главная">
        <Navbar />
        <Hero />
      </section>
      <section id="Что это такое?">
        <Parallax type={'WhatIsThis'} />
      </section>
      <section>
        <WhatIsThis />
      </section>
      <section id="Как это работает?">
        <Parallax type={'HowItWorks'} />
      </section>
      <section>
        <HowItWorks />
      </section>
      <section>
        <HowItLearns />
      </section>
      <div id="Преимущества">
        <Advantages id="Преимущества" />
      </div>
      <section id="Будущее">
        <Future />
      </section>
    </div>
  )
}

export default App
