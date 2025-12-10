import './guidecard.css'

function guideCard({num, text, explanation, link}){
    return(
        <>
            <div className='CB'>
                <p className='S1'>{num}</p>
                <p className='S1TXT'>{text}</p>
                <p className='S1EX'>{explanation}</p>
                <p className='S1S'>{link}</p>
            </div>
        </>
    )
}

export default guideCard;