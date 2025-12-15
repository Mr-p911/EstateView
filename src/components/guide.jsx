import './guide.css'
import Card from './guidecard.jsx'

function guide(){
    return(
        <div className='G' id='guide'>
            <p className='GTXT'>How We Operate?</p>
            <div className='TXTD'><p className='GTXT2'>We serve as the trusted digital marketplace, seamlessly connecting you with curated properties for sale and rent, and providing the tools for confident transactions. We offer Amazing Apartments and comforts at affordable prices that meets our clients taste and offer satisfaction.</p></div>
            <div className='GCCON'>
                <Card num='01' text='Find Your Location'
                explanation='Look for a Location that suits you and your desire to own or rent a property. We have propertiess spread across all countries of the World'
                link='Find Your Location'
                />
                <Card num='02' text='Find Apartment'
                explanation='Look for an apartment that suits your taste in your choice of location. Ranging from Duplexes to Bungalows to Mansions'
                link='Find Apartment'
                />
                <Card num='03' text='Make Contact' 
                explanation='Contact any of our agents located in the location you found your Dream Home for a Swift Fast and Reliable Purhase'
                lj
                link='Make Contact'
                />
            </div>
        </div>
    )
}

export default guide;