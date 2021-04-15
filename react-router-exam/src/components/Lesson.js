import React, { Component } from 'react';
import lessonsData from '../static-data/lessonsData'; 

class Lesson extends Component {

  render(){

    const lessonId = this.props.match.params.lessonId;

    console.log("@@@ " + lessonId);

    const selectedLesson = lessonsData.find( lesson => {
      return lesson.id === Number(lessonId);
    })
    
    return <h2>{selectedLesson.description}</h2>
    // return <h2>hello</h2>
  }
} 

export default Lesson; 