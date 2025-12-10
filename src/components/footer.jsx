import './footer.css'
import Logo from '../assets/EstateViewLogo.png'

function Footer(){
    return(
        <div className='FTDIV'> 
            <div className='IMGD'>
                <img src={Logo} className='FTLOGO'/>
            </div>
            <p className='SUBTXT'>Subscribe to Our Newsletter</p>
            <div className='SUBD'> 
                <input type='text' className='NLI' placeholder='Your Email Address'/>
                <button className='SUBBTN'>Subscribe</button>
            </div>
        </div>
    )
}

export default Footer;