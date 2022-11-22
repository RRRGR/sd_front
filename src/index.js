import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Router } from "./router"
import { Link } from "react-router-dom";


export class ShowClasses extends React.Component{
  constructor(){
    super()
    this.state = {
      loaded:false,
      courses: [],
    }
  }

async componentDidMount(){
    
    const res = await fetch('http://192.168.11.6:8000/syllabus/2022/search?season=autumn');
    const data = await res.json();
    console.log(data);

    this.setState({
        loaded: true,
        courses: data.courses
    })
  }

render() {
    const { loaded, courses } = this.state
    if (!loaded){
      return <div>Loading...</div>;
    }else{
      return <div>
        <h1>{"Share Past Exams!"}</h1>
        <ul>
          {courses.map(course => 
            <li><Link to={"courses?id="+course.rgno}>{course.j} {course.schedule} {course.instructor}</Link></li>)}
        </ul>
      </div>
    }
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);