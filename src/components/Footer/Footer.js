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
                        <li> Link Shortening</li>
                        <li> Branded Links</li>
                        <li> Analytics</li>
                    </ul>
            </div>
            <div className='footer_middle'>
                
                    <h5>Resources</h5>
                    <ul>
                        <li> Blog</li>
                        <li> Developers</li>
                        <li> Support</li>
                    </ul>
            </div>
            <div className='footer_middle'>
                
                    <h5>Company</h5>
                    <ul>
                        <li> About</li>
                        <li> Our Team</li>
                        <li> Careers</li>
                        <li> Contact</li>
                    </ul>
            </div>
            <div className="footer_right">
                <span> <img src={Facebook} alt="Facebook Logo" /> </span>
                <span> <img src={Twitter} alt="Twitter Logo" />  </span>
                <span> <img src={Pinterest} alt="Pinterest Logo" />  </span>
                <span> <img src={Instagram} alt="Instagram Logo" />  </span>

            </div>

        </footer>
    )
}
export default Footer