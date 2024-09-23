import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/Header.jsx'
import Zagalovoc from './components/Zagalovoc.jsx'
import Estimate_Project_button from './components/Estimate_Project.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
    <Header></Header>
    <Zagalovoc></Zagalovoc>
    <Estimate_Project_button></Estimate_Project_button>
  </StrictMode>
  
)
