import React from 'react';


export class ClassName extends React.Component{
  constructor(){
    super()
    this.state = {
      loaded:false,
      courseInfo: {},
    }
  }

async componentDidMount(){
    
    const res = await fetch('http://192.168.11.6:8000/syllabus/2022/courses/'+this.props.id);
    const data = await res.json();

    this.setState({
        loaded: true,
        courseInfo: data
    })
  }

render() {
    const { loaded, courseInfo } = this.state
    if (!loaded){
      return <div>Loading...</div>;
    }else{
      return <div>
        <h1>{courseInfo.j}</h1>
      </div>
    }
  }
}
