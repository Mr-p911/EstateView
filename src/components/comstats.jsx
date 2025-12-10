import './comstats.css'
import Card from './statcard.jsx'

function comstats(){
    return(
        <div className='SB'>
            <p className='STATSTXT'>Our Company's Satistics</p>
            <div className='CDIV'>
                <Card NO='999+' NOSTU='Apartment'/>
                <Card NO='4566' NOSTU='Clients'/>
                <Card NO='25' NOSTU='Employees'/>
                <Card NO='12' NOSTU='Awards'/>
            </div>
        </div>
    )
}

export default comstats;