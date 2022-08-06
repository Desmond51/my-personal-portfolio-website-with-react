import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {

  return (
    <div className='home'>
    <div className='row'> 
    <div className='about'>  
       <h1> Hi, My name is Desmond Tekum</h1>
       <div className='prompt'> <p>A software developer with passion for learning and creating solutions.
       I'm curious about software development. I don't mind spending most of my time learning. I believe in hardwork.</p>
        <EmailIcon />
        <LinkedInIcon />
        <GithubIcon />
        {

        }
       </div>
       </div>
    
    </div>
    

       <div className='skills'> 
       <h1>Skills</h1>
       <ol className='list'>
       <li className='item'> 
       <h2> Front-End</h2>
       <span> 
       CSS, HTML, Javascript(newbie), React(newbie)
       </span>
       </li>

       <li className='item'> 
       <h2>Wordpress</h2>
       I build amazing websites with Wordpress. Hey wait a little, do you also know i build e-commerce websites? Well, very proud to say YES.
       <span> 

       </span>
       </li>

       <li className='item'> 
       <h2>Digital Marketing</h2>
       <span> 
       I'm good at digital marketing even though not a pro in all the areas in digital marketing. 
       In this field, i'm good at running Google ads, Facebook ads and Instagram ads. I create, monetize and maintain Facebook pages. I also run google SEO and and SEM.   

      </span>
       </li>

       <li className='item'> 
       <h2>Hardware Maintenance(newbie)</h2> 
       <span> 
       I repair computers. In this field i am a newbie who's doing great things.
      </span>

       </li>
       <li className='item'> 
       <h2>Electrical Technician(newbie)</h2>
       <span> 
       I repair simple electronics 

      </span>
       </li>

       </ol>
       
       </div>
    
     </div>
  )
}

export default Home