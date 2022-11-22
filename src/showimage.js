import React from 'react';
import './showimage.css';


export class ShowImages extends React.Component{
  constructor(){
    super()
    this.state = {
      loaded:false,
      imgpaths: [],
    }
  }

async componentDidMount(){
    
    const res = await fetch('http://192.168.11.6:8000/images/' + this.props.rgno);
    const data = await res.json();
    console.log(data);

    this.setState({
        loaded: true,
        imgpaths: data.imgpaths
    })
  }

render() {
    const { loaded, imgpaths } = this.state
    if (!loaded){
      return <div>Loading...</div>;
    }else if (imgpaths.length === 0){
      return <div>No Image Uploaded</div>;
    }else{
      return <div>
        {imgpaths.map(imgpath => {
          console.log(imgpath.path);
          const realimgpath = "/" + imgpath.path;
          return <img src={process.env.PUBLIC_URL + realimgpath}/>
          }
        )}
        
      </div>
    }
  }
}