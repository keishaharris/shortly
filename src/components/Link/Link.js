import './Link.css'

const Link = () => {

    return (
        <div className="link_body"> 
    
            <input type="text" className="one" placeholder="Shorten a link here..." required/>
            <button className="two sbmtbtn" > Shorten It!</button>
        </div>
    )
}
export default Link