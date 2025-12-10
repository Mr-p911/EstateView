import './agentcard.css'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

function Card({image, agentName}){
    return(
        <div className='CADIV'>
            <img src={image} className='AGTIMG'/>
            <p className='AGTNAME'>{agentName}</p>
            <div className='ICNBX'>
                <FaFacebook size={25} className='FBICN'/>
                <FaInstagram size={25} className='IGICN'/>
                <FaTwitter size={25} className='XICN'/>
            </div>
        </div>
    )
}

export default Card;