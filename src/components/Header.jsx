import './Styles/Header.css'
import logo from './png/logo.png'
export function Header(){
    return(
        <header className="header">
        <div className='logotip'> 
          <img src={logo} alt=''/>
          <h2>Discuss forum</h2>
        </div>
        <div className='navigation'>
          <nav>
          </nav>
        </div>
      </header>
    )
}