import React from 'react';
import { Grid, Cell } from 'react-mdl';
import project1 from '../images/project1.png'
import project3 from '../images/project3.png'

export default class Projects extends React.Component {

render(){
  return(


<div className="container">
      <h1> Projects </h1>
 <section>
  <div className="project1">
   <img src={project1} />
  <div className="description">
    <h3> FIND THE BALL </h3>
    <p> Javascript based game that resembles three-card Monte where the users
    must find the ball in the correct cup </p>
  </div>
  </div>
   </section>
    <section>
  <div className="project1">
   <img src={project3} />
  <div className="description">
    <h3> SearchWoo </h3>
    <p> This app is a rendition of the functionality and flow of Four Square
    where users can sign up, log in, and leave reviews for businesses.</p>
  </div>
  </div>
  </section>
  <section>
  <div className="project1">
   <img src={project3} />
  <div className="description">
    <h3> EduFlash </h3>
    <p>Application where users can store information on a flashcard from a
    particular subject to review later on a study guide.</p>
  </div>
  </div>
   </section>
  </div>

    );
}

}


