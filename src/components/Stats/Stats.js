import Stat from './Stat';
import './Stats.css';
import BrandIcon from '../../assets/images/icon-brand-recognition.svg'
import RecordIcon from '../../assets/images/icon-detailed-records.svg'
import CustomIcon from '../../assets/images/icon-fully-customizable.svg'

const Stats = (props) => {
    return (
        <div className="stats_body">
            <div className="divider">
        </div>
            <div className="stats_top">
                <h2>Advanced Statistics</h2>
                <p> Track how your links are performing across the web with 
                    our advanced statistics dashboard.
                </p>
            </div>
            <div className='stats_bottom'>
                <div className="card top">
                <div className="icon"> <img className='img' src={BrandIcon} alt='' /> </div>
                    <Stat 
                    title="Brand Recgonition"
                    body="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
                    />
                    
                </div>
                <div className="card middle">
                    <div className="icon"> <img className='img' src={RecordIcon} alt=''/> </div>
                    <Stat
                    title="Detailed Records"
                    body='Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
                    />

                </div>
                <div className="card bottom">
                    <div className="icon"> <img className='img' src={CustomIcon} alt=''/> </div>
                    <Stat
                    title="Fully Customizable"
                    body='Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
                    />
                </div>
            </div>
        </div>

    )
}
export default Stats