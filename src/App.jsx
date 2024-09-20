import './App.css'
import { store } from './redux/sotre'
import { Provider } from 'react-redux'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Header from './componet/header/Header'
import Hero from './componet/hero/Hero'
import PopupMenue from './componet/PopupMenue'
import Projects from './componet/projects/Projects'
import Skills from './componet/skills/Skills'

function App() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
      disable: "mobile",
    })
  }, [])
  return (
    <Provider store={store}>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <PopupMenue />
    </Provider>
  )
}

export default App
