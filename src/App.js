import React from 'react';
import './App.css';
import photo from "./Assets/myphoto.jpg"
import instagram from "./Assets/instagram.png"
import Disney from "./Assets/Disney+.png"
import facebook from "./Assets/facebook.png"
import twitter from "./Assets/twitter.png"
import linkedin from "./Assets/linkedin.png"
import Insta from "./Assets/insta-clone.png"
import Youtube from "./Assets/Youtube.png"
import Tesla from "./Assets/tesla.png"
import Work from './Work';
import { Badge } from '@chakra-ui/layout';



function App() {
  return (
    <div className="App">
      {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#a2d9ff" fill-opacity="1" d="M0,32L48,74.7C96,117,192,203,288,250.7C384,299,480,309,576,272C672,235,768,149,864,122.7C960,96,1056,128,1152,128C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
    </svg>*/}
      <div className="home">
        <img className="image" src={photo} alt="myphoto"></img>
        <h1 className="text">Kshitij Upmanyu</h1>
        <p className="info">Hi👋🏻 My name is Kshitij. Currently I'm pursuing my B.Tech degree. Always in love with technology. I am a RF fan🎾 and a React Developer⚛️.</p>
      </div>
      <div className="work">
        <h2 className="work-text">Works</h2>
        <div className="work_tile">
          <a href="https://test-insta-clone-8576c.web.app/"><Work
            badge = {false}
            image={Insta}
            name="Instagram"
            description="It is a clone of Instagram made by using Reactjs and Firebase. In this you can sign up or sign in to upload images and video and after uploading you can logout." />
          </a>
          <a href="https://tclone-c986f.web.app/"><Work
            badge = {false}
            image={Tesla}
            name="Tesla"
            description="Tesla Clone powered by Reactjs and Firebase." />
          </a>
          <a href="https://disneyplus-clone-ca3f2.web.app/"><Work
            badge = {true}
            image={Disney}
            name="Disney+"
            description="Disney+ Clone powered by Reactjs, Firebase, Redux and Styled Components." />
          </a>
          <a href="https://clone-a6679.web.app/"><Work
            badge = {false}
            image={Youtube}
            name="Youtube"
            description="Youtube Clone powered by Reactjs, Firebase and Rapid API." />
          </a>
        </div>
      </div>
      <div className="contact">
        <h2 className="cnt-text">Contact</h2>
        <div className="logos">
          <a href="https://www.instagram.com/kshitij.upmanyu/">
            <img className="logos" src={instagram} alt="insta" />
          </a>
          <a href="https://www.facebook.com/kshitij.upmanyu">
            <img className="logos" src={facebook} alt="fb" />
          </a>
          <a href="https://twitter.com/upmanyukshitij">
            <img className="logos" src={twitter} alt="twitter" />
          </a>
          <a href="https://in.linkedin.com/in/kshitij-upmanyu-45a7b5191">
            <img className="logos" src={linkedin} alt="linkedin" />
          </a>
        </div>

        {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#a2d9ff" fill-opacity="1" d="M0,32L48,74.7C96,117,192,203,288,250.7C384,299,480,309,576,272C672,235,768,149,864,122.7C960,96,1056,128,1152,128C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>*/}
      </div>

    </div>
  );
}

export default App;
