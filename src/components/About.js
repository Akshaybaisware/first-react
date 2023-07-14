import react from "react";
import img from "../images/img.jpg";


const About =()=>{
            
 return (
    <div className="about">
    <h1>About</h1>
    <img src={img} alt="Akshay pic" />
    <p>My name is Akshay Baisware, and I am thrilled to be joining this esteemed IT 
        company as a fresher. I bring with me a deep passion for 
        technology and a strong desire to contribute to the ever-evolving world of information technology.

    Having recently graduated with a degree in [Civil Engineering], 
    I have gained a solid foundation in various programming languages,
     database management, and software development methodologies.
      Throughout my academic journey, I have actively sought out
       opportunities to apply my knowledge through internships and 
       personal projects, which have helped me develop practical skills
        and a keen problem-solving mindset.

        While I may be new to the professional world,
         I am a quick learner with a strong work ethic and 
         an insatiable curiosity to explore emerging technologies.
         I am grateful for the opportunity to be a part of this company,
          and I look forward to working alongside all of you, contributing
          
           to its success, and making meaningful contributions in the field of IT.
     </p>
   </div>
  )
 }
export default About;

