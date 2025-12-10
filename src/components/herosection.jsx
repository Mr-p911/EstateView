import './herosection.css'
import bannerimg from '../assets/Banner.jpg'

function banner(){
    return(
        <>
        <div className='HeroContainer'>
            <img src={bannerimg} className='bannerimg'/>
            <div className='OverlayContent'>
                <p className='OverlayTXT'>Find Your <span className='brkTXT'>Dream Home</span></p>
                <div className='SearchbarCon'>
                    <input type='text'placeholder='Search Location' className='Searchbar'/>
                    <button className='SearchBTN'>Search</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default banner;