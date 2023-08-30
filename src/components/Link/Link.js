import './Link.css'
import axios from 'axios'

const Link = () => {


   async function shortenUrl (e){
    e.preventDefault();

    const linkRequest = document.getElementById('inputValue').value;  
   
    const apiCall = {
        method:'POST',
        url:'https://api.rebrandly.com/v1/links',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            apikey: '80656ef771314fc4a7d3ef2b316e554a',
        },
        data: {destination: linkRequest}
    }


        try{
            fetchUrl(apiCall).then((res) => {
                console.log(res);
              
                const shortLink = res.shortUrl;
                const oldLink = res.destination;
                const body = document.querySelector('.link_collection');
                
                const div = document.createElement('div');
                div.classList.add('clipboard');

                const clipBody = document.createElement('div');
                clipBody.classList.add('clip_body');

                const p1 = document.createElement('p');
                p1.innerText= `${oldLink}`

                const clip_left = document.createElement('div');
                clip_left.classList.add('clip_left');
                clip_left.appendChild(p1);

                const copyBtn = document.createElement('button');
                copyBtn.innerText= 'Copy';

                const p2 = document.createElement('p');
                p2.innerText = `${shortLink}`;  

                const clip_right = document.createElement('div');
                clip_right.classList.add('clip_right');
                clip_right.appendChild(p2);
                clip_right.appendChild(copyBtn);

                clipBody.appendChild(clip_left);
                clipBody.appendChild(clip_right);

                div.appendChild(clipBody);

                body.appendChild(div);

               

            })
            
        } 
        
        
        
        catch (err) {
            console.error(err);
        }
    }

    async function fetchUrl(apiCall){
        const data = await axios.request(apiCall);
        const res = await data.data
        return res;
    }

    return (
        <> 
        <div className="link_body"> 
        <div className='link_top'>
                <input type="text" id="inputValue" className="one" name="url" placeholder="Shorten a link here..." required/>
                <button type="submit" onClick={shortenUrl} className="two sbmtbtn" > Shorten It!</button>
            </div>
                {/* <div className='link_bottom'> Please add a link </div> */}
        </div>
        <div className='link_collection'> 
   
        </div>
          
        </>
    )
}
export default Link