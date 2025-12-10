import './statcard.css'

function Card({NO, NOSTU}){
    return(
        <div className='CBD'>
            <p className='NOAPT'>{NO}</p>
            <p className='APT'>{NOSTU}</p>
        </div>
    )
}

export default Card;