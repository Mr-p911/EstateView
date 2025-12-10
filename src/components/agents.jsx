import './agents.css'
import Card from './agentcard.jsx'
import Agent1 from '../assets/Agent1.avif'
import Agent2 from '../assets/Agent2.avif'
import Agent3 from '../assets/Agent3.avif'
import Agent4 from '../assets/Agent4.avif'

function Agents(){
    return(
        <div className='ADIV'>
            <p className='ATXT'>Meet Our Top Agents</p>
            <div className='GDIV'>
                <Card image={Agent2} agentName='John Oluwatobi'/>
                <Card image={Agent4} agentName='Sarah Benson'/>
                <Card image={Agent3} agentName='Rose Brooke'/>
            </div>
        </div>
    )
}

export default Agents;