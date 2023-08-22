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
                        <a href="#"> Features </a>
                        <a href="#"> Pricing </a>
                        <a href="#"> Resources </a>
                    </div>
                </div>
                <div>
                        <a href="#"> Login </a>
                        <button> Sign Up</button>
                </div>
            </nav>
        </header>
    )
}

export default Header;