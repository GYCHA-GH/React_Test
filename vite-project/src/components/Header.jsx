//Портированые картинки не работают(
import './Header.css'
import Logotip from '../assets/Logo.png'
import Language from '../assets/Language_Selection.png'
export default function Header() {
  return(
    <header>
      <nav>
        <div className='container'>
          <a href="https://www.figma.com/design/Cy6i1bosgIuGfDASwABzFu/IT-Support-Group-%7C-Site-(Copy)-(Copy)?node-id=372-556&node-type=frame&t=o4SJIm3z4api6S0g-0">
           <img src={Logotip} alt='logotip'/>
          </a>
          <ul>
            <li><a href="">about</a></li>
          </ul>
          <ul>
            <li><a href="">our services</a></li>
          </ul>
          <ul>
            <li><a href="">job openings</a></li>
          </ul>
          
          <div className='Lbutton'>
            <a href="">
              <img src={Language} alt='Language'/>
            </a>
            <button className='buttonHeader'>contact us</button>
          </div>
        </div>
      </nav>
    </header>
  )
}