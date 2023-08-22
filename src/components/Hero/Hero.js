import './Hero.css'
import HeroImage from '../../assets/images/illustration-working.svg'

const Hero = () => {
    return(
        <section className="hero_body">
            <div className='hero_left'>
                <h1>
                    More than just shorter Links
                </h1>
                <div className='hero_description'>  
                        Build you brand's recognition and get detailed insights on how your links are performing.
                </div>
                <div> <button className="lrgbtn" href="#" alt="Starting point">Get Started</button> </div>
            </div>
            <div className='hero_right'>
            <img src={HeroImage} alt='Person Working at Desktop' />
            </div>
        </section>
    )
}

export default Hero 