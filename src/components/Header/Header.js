import Logo from '../../assets/images/logo.svg'
import './Header.css'

const Header = () => {

    return(
        <header>
            <nav>
                <div>
                    <div>
                        <img src={Logo} alt='brand logo'/>
                    </div>
                    <div>
                        <a href="#" className='nav_links'> Features </a>
                        <a href="#" className='nav_links'> Pricing </a>
                        <a href="#" className='nav_links'> Resources </a>
                    </div>
                </div>
                <div>
                        <a href="#" className='nav_links'> Login </a>
                        <button> Sign Up</button>
                </div>
            </nav>
        </header>
    )
}

export default Header;