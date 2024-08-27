import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const theme = localStorage.getItem('theme') || 'light';
if (theme === 'dark') {
  document.documentElement.classList.add('dark');
}

createRoot(document.getElementById('root')).render(

  <App />
)
