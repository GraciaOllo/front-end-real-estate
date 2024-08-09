import React from 'react';
import './LandPage.css'
import Header from './Header';
import bed from '../assets/images/bed.jpg';
import kitchen from '../assets/images/kitchen.jpg';
import palour from '../assets/images/palour.jpg';
import vid from '../assets/images/vid.mp4'
import { FaCalendarAlt, FaComments } from'react-icons/fa';
import { GiFamilyHouse } from "react-icons/gi";
import './Footer.css'

function Landpage()
{
  return(
    <div >
    <div >
      <Header/>
       </div>
    
    <div className='news-events'>
    <h2 className="news-title">
 <GiFamilyHouse />Explore & Rent 
</h2>
<div className="news-cards">
  <div className="news-card">
    <img src={kitchen} alt="News 1" />
    <div className="news-content">
      <h3>Your next adventure starts here—reserve now!</h3>
      <h4>70000XAF/Per Month</h4>
      <div className="news-meta">
        <span><FaCalendarAlt /> 20th August, 2024</span>
      </div>
      <p>"Your sanctuary is just a booking away."
      </p>
      <a href="book_now" className="read-more">Book Now &gt;</a>
    </div>
  </div>
  <div className="news-card">
    <img src={bed} alt="News 2" />
    <div className="news-content">
      <h3>Your dream home awaits—book your stay today!</h3>
      <h4>7000XAF/Per Day</h4>
      <div className="news-meta">
        <span><FaCalendarAlt /> 20th July, 2024</span>
      </div>
      <p>
      "Discover paradise—rent your escape now."
      </p>
      <a href="book_now" className="read-more">Book Now &gt;</a>
    </div>
  </div>
  <div className="news-card">
    <img src={palour} alt="News 3" />
    <div className="news-content">
      <h3>Find your haven—book today and relax tomorrow.</h3>
      <h4>15000XAF/Per month</h4>
      <div className="news-meta">
        <span><FaCalendarAlt /> 20th May, 2024</span>
       
      </div>
      <p>
      "Make memories in style—rent your dream space."
      </p>
      <a href="book_now" className="read-more">Book Now &gt;</a>
    </div>
  </div>
</div>

    </div>

      {/* <h2>t1</h2> */}
      

    <div >
    <div className="video-container">
      <div className="video-overlay">
      <video autoPlay muted loop className="background-video">
          <source src={vid} type="video/mp4" />
          
        </video>
      </div>
      </div>
    </div>

    <div className='news-events'>
    <h2 className="news-title">
  <FaCalendarAlt /> News & Events
</h2>
<div className="news-cards">
  <div className="news-card">
    <img src={kitchen} alt="News 1" />
    <div className="news-content">
      <h3>Hotel companies tipped the scales</h3>
      <div className="news-meta">
        <span><FaCalendarAlt /> 20th Nov, 2018</span>
        <span><FaComments /> 03 Comments</span>
      </div>
      <p>
        Not thoughts all exercise blessing Indulgence way everything joy alteration boisterous the attachment party we years to order
      </p>
      <a href="read_more" className="read-more">Read More &gt;</a>
    </div>
  </div>
  <div className="news-card">
    <img src={bed} alt="News 2" />
    <div className="news-content">
      <h3>Rent your dream house, the ball is in your court</h3>
      <div className="news-meta">
        <span><FaCalendarAlt /> 20th Nov, 2018</span>
        <span><FaComments /> 03 Comments</span>
      </div>
      <p>
        Not thoughts all exercise blessing Indulgence way everything joy alteration boisterous the attachment party we years to order
      </p>
      <a href="read_more" className="read-more">Read More &gt;</a>
    </div>
  </div>
  <div className="news-card">
    <img src={palour} alt="News 3" />
    <div className="news-content">
      <h3>mi casa es tu casa</h3>
      <div className="news-meta">
        <span><FaCalendarAlt /> 20th May, 2024</span>
        <span><FaComments /> 03 Comments</span>
      </div>
      <p>
        Not thoughts all exercise blessing Indulgence way everything joy alteration boisterous the attachment party we years to order
      </p>
      <a href="read_more" className="read-more">Read More &gt;</a>
    </div>
  </div>
</div>

    </div>

    {/* <div >
      <Footer/>
    </div> */}
    </div>
    
   
    
  );
 
}
export default Landpage;






<div className="">

</div>
