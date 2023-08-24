import './Link.css'
import axios from 'axios'

const Link = () => {

//     const options = {
//         method:'POST',
//         url:'https://api.rebrandly.com/v1/links',
//         headers: {
//             accept: 'application/json',
//             'content-type': 'application/json',
//             apikey: '80656ef771314fc4a7d3ef2b316e554a',
//         },
//         data: {destination: 'https://www.google.com'}
//     }

//    async function getUrl (options){

//         const inputData = document.getElementsByName('input').value

//         try{
//             const response = await axios.request(options);
//             console.log(response);
//         } catch (err) {
//             console.error(err);
//         }
//     }


    return (
        <div className="link_body"> 
        <div className='link_top'>
                <input type="text" className="one" placeholder="Shorten a link here..." required/>
                <button className="two sbmtbtn" > Shorten It!</button>
            </div>
                <div className='link_bottom'> Please add a link </div>
            
        </div>
    )
}
export default Link