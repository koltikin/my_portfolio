import './App.css'
import { store } from './redux/sotre'
import { Provider } from 'react-redux'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Wrapper from './componet/Wrapper'
import { useTranslation } from 'react-i18next'

function App() {
  const { i18n } = useTranslation();
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
      <Wrapper />
    </Provider>
  )
}

export default App
