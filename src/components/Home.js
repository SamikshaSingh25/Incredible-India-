import React, { useState, useEffect } from 'react';
import a from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAnglesDown, faArrowRight, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import img from './Assets/Untitled design (1).png';
import post from './Assets/postal.png';
import mela from './Assets/kumbh mela.png';
import tajmahal from './Assets/tajmahal.jpg';
import minar from './Assets/minar.jpg';
import fort from './Assets/redfort.jpg'
import goldentemple from './Assets/goldentemple.jpg'
import hawa from './Assets/hawa.jpg'
import gateway from './Assets/gateway.jpg'


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {



  const settings = {
    dots: true,
    
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  
const data = [
  {
    name: 'Taj Mahal ',
    img: tajmahal,
    review: 'Located in Agra, the Taj Mahal is white marbled mausoleum built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal. Renowned for its stunning architecture and Considered one of the Seven Wonders of the World.' ,
    wikipediaLink: 'https://en.wikipedia.org/wiki/Taj_Mahal'
  },
  {
    name: 'Qutub Minar',
    img: minar,
    review: 'Situated in Delhi, the Qutub Minar is a UNESCO World Heritage Site and the tallest brick minaret in the world. Built in 1193 by Qutb-ud-din Aibak, it is an excellent example of Indo-Islamic architecture.',
    wikipediaLink: 'https://en.wikipedia.org/wiki/Qutub_Minar'
  },
  {
    name: 'Red Fort',
    img: fort,
    review: 'Also in Delhi, the Red Fort was the main residence of the Mughal emperors for nearly 200 years. It is known for its massive enclosing walls of red sandstone and its significant role in Indian history.',
    wikipediaLink: 'https://en.wikipedia.org/wiki/Red_Fort'
  },
  {
    name: 'Hawa Mahal',
    img: hawa,
    review: 'Also known as the Palace of Winds, this five-story palace in Jaipur is famed for its 953 small windows, called jharokhas, which allowed royal ladies to observe street festivals unseen. Its unique honeycomb structure.',
    wikipediaLink: 'https://en.wikipedia.org/wiki/Hawa_Mahal'
  },
  {
    name: 'Golden Temple',
    img: goldentemple,
    review: ' Located in Amritsar, Punjab, the Golden Temple is the holiest gurdwara of Sikhism. Its gold-covered sanctum and surrounding sacred pool attract millions of pilgrims and visitors annually.',
    wikipediaLink: 'https://en.wikipedia.org/wiki/Golden_Temple'
  },
  {
    name: 'Gateway of India',
    img: gateway,
    review: 'Located in Mumbai, this arch-monument was built during the 20th century to commemorate the visit of King George V and Queen Mary. It is a major tourist attraction and a symbol of the city.',
    wikipediaLink: 'https://en.wikipedia.org/wiki/Gateway_of_India'
  }
];

  return (
    <div className={a.mainContainer}>
      {/* Main section */}
      <div className={a.homeContainer}>
        <div className={a.headings}>
          <div className={a.subtitle}>Explore Incredible India</div>
          <hr className={a.headingline}></hr>
          <div className={a.mainHeading}>Discover the Timeless Beauty<br />of India</div>
        </div>
        <div className={a.socialLinks}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <div className={a.scrollDown}>
          <FontAwesomeIcon icon={faAnglesDown} /><br />
          Scroll Down
        </div>
      </div>

      {/* Video section */}
      <div className={a.videoSection}>
        <div className={a.videoHeading}>
          <div className={a.vSubHeading}>Discover India </div>
          <div className={a.vMainHeading}>
            <span className={a.vWhite}>Indian </span> <span className={a.vBlack}>history</span>
          </div>
        </div>
        <div className={a.vcontentSection}>
          <div className={a.paragraphLeft}>
            <p>Explore India's kaleidoscope of history and culture. From the majestic Taj Mahal to bustling markets, each city narrates a unique story of India's diversity.</p>
          </div>
          <div className={a.paragraphRight}>
            <p>Journey through India's rich heritage and vibrant landscapes. Discover royal palaces in Rajasthan and tranquil backwaters in Kerala, where every corner reveals a new adventure.</p>
          </div>
        </div>
        <div className={a.VvideoSection}>
          <a href="https://youtu.be/rTDaZoDDW5g?si=TumezupANRXk3oSk" target="_blank" rel="noopener noreferrer">
            <img src={img} alt="logo" style={{ width: "560px", height: "315px" }} />
          </a>
        </div>
      </div>

      {/* Facts section */}
      <div className={a.factSection}>
        <div className={a.videoHeading}>
          <div className={a.vSubHeading}>10 Things </div>
          <div className={a.vMainHeading}>
            <span className={a.vWhite}>You probably didn't know<br /> about </span> <span className={a.vBlack}>India</span>
          </div>
        </div>

        {/* Fact 1 */}
        <div className={`${a.factContentSection} ${a.reversed}`}>
          <div className={a.factImageContainer}>
            <a href="https://youtu.be/NtX9BF1Sl80?si=BHgsB-Ow8OfnlYZc" target="_blank" rel="noopener noreferrer">
              <img src={mela} alt="Interesting fact 2" className={a.factImage} />
            </a>
          </div>
          <div className={a.factTextContainer}>
            <h3 className={a.factHeading}>Kumbh Mela Gathering</h3>
            <p className={a.factContent}>The Kumbh Mela is a spiritual event held once in 12 years in India. It is the largest human gathering in the world.</p>
          </div>
        </div>
        {/* Fact 2 */}
        <div className={a.factContentSection}>
          <div className={a.factImageContainer}>
            <a href="https://youtu.be/vfE7JqRT9oI?si=S3zA75A3Pxk9IXz2" target="_blank" rel="noopener noreferrer">
              <img src={post} alt="Interesting fact 1" className={a.factImage} />
            </a>
          </div>
          <div className={a.factTextContainer}>
            <h3 className={a.factHeading}>Largest Postal Network</h3>
            <p className={a.factContent}>India is home to the largest postal network in the world with over 1,55,015 post offices.</p>
          </div>
        </div>
        <button className={a.readMoreButton}>Show More <FontAwesomeIcon icon={faArrowRight} /></button>
      </div>



















      {/* Slider section */}
      <div className={a.sliderSection}>
        <Slider {...settings} >
          {data.map((item, index) => (
            <div key={index} className={a.sliderItem}>
              <div className={a.sliderImageContainer}>
                <img src={item.img} alt={item.name} className={a.sliderImage} />
              </div>
              <div className={a.sliderContent}>
                <div className={a.sliderName}>{item.name}</div>
                <div className={a.sliderReview}>{item.review}</div>
                <a href={item.wikipediaLink} target="_blank" rel="noopener noreferrer" className={a.sliderLink}>
                <button className={a.sliderButton}>
                  Read more <FontAwesomeIcon icon={faArrowRight} />
                </button>
                </a>
              </div>
            </div>
          ))}
          
        </Slider>
        <style jsx>{`
    .slick-dots li button:before {
      color: #fff;
    }
    .slick-dots li.slick-active button:before{
      color: #fff;
    }
  `}</style>
    </div>

    <div className={a.lastsection}>
    <div className={a.contactSection}>
        <div className={a.contactHeading}>
          Contact Us
        </div>
                <div className={a.contactsummary}> Contact us for your next marvelous adventure! Explore new horizons and create unforgettable memories<br></br> with our expert guidance and support.  </div>
        <div className={a.contactContent}>
        <div className={a.contactInfo}>
            <div className={a.contactDetails}>
              <div className={a.contactIcon}>
                <FontAwesomeIcon icon={faPhone} />
                
              </div>
              <div>
                <div className={a.phone}>Phone:</div>
                <div>+91 1234567890</div>
              </div>
            </div>
            <div className={a.contactDetails}>
              <div className={a.contactIcon}>
                <FontAwesomeIcon icon={faEnvelope} />
                
              </div>
              <div>
                <div className={a.phone}>Email:</div>
                <div>info@incredibleindia.com</div>
              </div>
            </div>
          </div>
          {/* Contact form */}
          <form className={a.contactForm}>
            <div className={a.formSection}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name..."  className={`${a.contactInput} ${a.inputFocused}`}/>
            </div>
            <div className={a.formSection}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your email..."   className={`${a.contactInput} ${a.inputFocused}`} />
            </div>
            <div className={a.formSection}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your message..." rows="4" className={`${a.contactInput} ${a.inputFocused}`}></textarea>
            </div>
            <button type="submit" className={a.submitButton}>Submit</button>
          </form>

          {/* Contact information */}
          
          
        </div>
      </div>












      <div className={a.footer}>

    <div className={a.footerContainer}>
        <hr className={a.footerLine} />
        <div className={a.footerContent}>
          <div className={a.footerLeft}>
          <div className={a.footerLogo}>Incredible India</div>
           
          </div>
          <div className={a.footerCenter}>
            <div className={a.rights}>All rights reserved © 2024</div>
          </div>
          <div className={a.footerRight}>
          <div className={a.footerContact}>Contact Us</div>
            <button className={a.footerButton}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
    

  );
};

export default Home;










