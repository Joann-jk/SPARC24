import React from 'react'
import './Tickets.css'
import t1 from "../../assets/Images/blue ticket.png";
import t2 from "../../assets/Images/white ticket.png";
import t3 from"../../assets/Images/green ticket.png"
import Heading from "../Heading/Heading"
import CornerIcon from "../RCornericon/RCornericon";
import WhiteBg from '../WhiteBg/WhiteBg';

function Tickets() {
  return (
    <section id='tickets' className='sectionstyle'>
      <WhiteBg height="auto" className="cont">
        <CornerIcon/>
        <Heading className='tkt-head' text= "GRAB YOUR TICKETS"/>
        <div className="cards">
          <div className="ticket t1">
            <img src={t1} className='tkt-icon' alt='tkt-icon'></img>
            <h2>IEEE MEMBERS</h2>
            <span className='price'>₹399</span>
            <button className='reg-btn'>Register Now↗</button>
          </div>
          <div className="ticket t3">
            <img src={t3} alt='tkt-icon' className='tkt-icon'></img>
            <h2>NON IEEE MEMBERS</h2>
            <span className='price'>₹499</span>
            <button className='reg-btn'>Register Now↗</button>
          </div>
          <div className="ticket t2">
            <img src={t2} alt='tkt-icon' className='tkt-icon'></img>
            <h2>NON  MACIANS</h2>
            <span className='price'>₹599</span>
            <button className='reg-btn'>Register Now↗</button>
          </div>
          
        </div>
      </WhiteBg>
    </section>
  )
}


export default Tickets
