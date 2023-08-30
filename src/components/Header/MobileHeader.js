import { useState } from 'react';
import Logo from '../../assets/images/logo.svg'
import './MobileHeader.css'

const MobileHeader = () => {

    const [open, setOpen] = useState(true)

    return(

  
    <header>
            <nav>
                <div className='mobile_body'>
                    <div>
                        <img src={Logo} alt='brand logo'/>
                    </div>
                    <div className="nav_links"> 
                    <div className='hamburger' onClick={() => {open ? setOpen(false) : setOpen(true)}}><div></div></div>
                    <div className={open ? 'hidden' : ''} > 
                    <div className='hamburger_menu'>
                        <div className='menu_top'>
                        <a href="#" > Features </a>
                        <a href="#" > Pricing </a>
                        <a href="#" > Resources </a>
                        </div>
                        <div className="nav_divider"> </div>
                        <div className='menu_bottom'>
                        <a href="#" > Login </a>
                        <button> Sign Up</button>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
          )
}

export default MobileHeader


