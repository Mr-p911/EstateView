import './propertycard.css'
import {FaBath} from 'react-icons/fa';
import {FaBed} from 'react-icons/fa';

function Card({id, image, description, price, baths, beds, type, onViewDetails}){

    const formattedPrice = new Intl.NumberFormat('en-us',{
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    }).format(price);
    const cardClassName = `GCON type-${type}`;
    return(
        <>
        <div className={cardClassName}>
            <img src={image} className='FIMG'/>
            <p className='PADD'>{description}</p>
            <div className='HPROP'>
                <p className='PP'>{formattedPrice}</p>
                <div className='BRICNNUMBR'>
                    <FaBath className='BRICN'/>
                    <p className='NUMBR'>{baths}ba</p>
                </div>
                <div className='BDICNNUMBD'>
                    <FaBed className='BDICN'/>
                    <p className='NUMBD'>{beds}bd</p>
                </div>
            </div>
            <div className='VPBTND'>
                <button className='VPBTN' onClick={() => onViewDetails(id)}>Check out</button>
            </div>
        </div>
        </>
    )
}

export default Card;