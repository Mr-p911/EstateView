import './footer.css'
import Logo from '../assets/EstateViewLogo.png'

function Footer(){
    return(
        <div className='FTDIV' id='contact'> 
            <div className='IMGD'>
                <img src={Logo} className='FTLOGO'/>
            </div>
            <div className='TXTAINP'>
                <p className='SUBTXT'>Subscribe to Our Newsletter</p>
                <div className='SUBD'> 
                    <input type='text' className='NLI' placeholder='Your Email Address'/>
                    <button className='SUBBTN'>Subscribe</button>
                </div>
            </div>
            <div className='FooterLinks'>
                <a href="#homepage" className='FHOME'>Home</a>
                <a href="#property-listings" className='FBUY'>Buy</a>
                <a href="#property-listings" className='FRENT'>Rent</a>
                <a href="#agent-listings" className='FAGENTS'>Agents</a> 
                <a href="#guide" className='FGUIDE'>How It Works</a>  
                <a href="" className='FSOC'>Socials</a>    
            </div>
            <p className='contacts'>Contacts: +234 509 8899 <span className='EXTNUM'>+234 887 6672</span></p>
            <p className='COPYTXT'>&copy; 2025-Created By Pascal</p>
        </div>
    )
}

export default Footer;