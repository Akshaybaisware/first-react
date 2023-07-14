import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Section from "./components/Section";


const App = ()=> {
    return (
        <div>
             <Navbar /> 
             <About />
             <Section
             title="Skills" 
             des="Key skills include proficiency in HTML, CSS, and JavaScript for building
             the user interface, along with knowledge of front-end frameworks like 
             React or Angular. On the back-end, familiarity with server-side languages
              like Node.js or Python, databases such as MySQL or MongoDB, and API development 
              are crucial. Additional skills involve version control, deployment, testing,
               debugging, problem-solving, and staying updated with evolving technologies. 
               Full stack developers have a comprehensive understanding of the entire web 
               development process, enabling them to work on both the client and server sides of applications"
               />
             <Section 
             title="Education"
             des="Ram deo baba college of engineering Bachelor of Enginnering (B.E) (August 01, 2017 - May 12, 2021) 
             New English Jr. college HSC (July 01, 2014 - May 01, 2016)"
             />
              
             <Section 
             title="project"
             des="FINAL YEAR PROJECT (B.E):- Project Title : 
             Uses of GIS and Remote Sensing in Surveying Description : 
             for finding a subset of location from a set of potential or candidate location 
             that best serve some existing demand so as minimize some cost . Majorly use in 
             Transportation. Duration : 6 Month INTERSHIP AT HSM EDIFICE PVT.LTD Description:-
              I intern in steel Structure building and there , I learn the importance of structural 
              steel in construction building,  Durability.  Environment friendly.  Affordability..
                light weight.  Constructability Project Management Creativity Communication Skills Attention
                in detail Cooking Travelling Play indore games English Hindi AUTO CAD. MS-CIT ACTIVITIES : 
                >Work in NCC (2018-2020) “Work as a vice president in college event(NEEV). Participate in 
                various webinar related with Civil.” EDUCATION 7 CGPA 65%"
             />
        </div>
    )
}

export default App;
