import './Footer.css';
import Logo from '../../assets/images/logo.svg'
import Facebook from '../../assets/images/icon-facebook.svg'
import Twitter from '../../assets/images/icon-twitter.svg'
import Pinterest from '../../assets/images/icon-pinterest.svg'
import Instagram from '../../assets/images/icon-instagram.svg'


const Footer = () => {

    return(
        <footer>
            <div className="footer_left"> 
                <img src={Logo} className="footer_img" alt="Company Logo"/>
            </div>
            <div className='footer_middle'>
                
                    <h5>Features</h5>
                    <ul>
                        <li> <a href="#" className='footer_link'> Link Shortening </a></li>
                        <li> <a href="#" className='footer_link'>Branded Links</a></li>
                        <li> <a href="#" className='footer_link'>Analytics</a></li>
                    </ul>
            </div>
            <div className='footer_middle'>
                
                    <h5>Resources</h5>
                    <ul>
                        <li> <a href="#" className='footer_link'>Blog</a></li>
                        <li> <a href="#" className='footer_link'>Developers</a></li>
                        <li> <a href="#" className='footer_link'>Support</a></li>
                    </ul>
            </div>
            <div className='footer_middle'>
                
                    <h5>Company</h5>
                    <ul>
                        <li> <a href="#" className='footer_link'>About</a></li>
                        <li> <a href="#" className='footer_link'>Our Team</a></li>
                        <li> <a href="#" className='footer_link'>Careers</a></li>
                        <li> <a href="#" className='footer_link'>Contact</a></li>
                    </ul>
            </div>
            <div className="footer_right">
                <span> <img src={Facebook} alt="Facebook Logo" className='footer_socials'/> </span>
                <span> <img src={Twitter} alt="Twitter Logo" className='footer_socials'/>  </span>
                <span> <img src={Pinterest} alt="Pinterest Logo" className='footer_socials'/>  </span>
                <span> <img src={Instagram} alt="Instagram Logo" className='footer_socials'/>  </span>

            </div>

        </footer>
    )
}
export default Footer