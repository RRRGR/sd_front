import { React, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { ShowImages } from "./showimage";
import { ClassName } from "./coursename";

export const Course = () => {
  
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [image, setImage] = useState()
  const [errorMessage, setErrorMessage] = useState('')
  const URL = 'http://192.168.11.6:8000/upload/' + id //適宜設定

  const getImage = (e) => {
      if(!e.target.files) return
      const img= e.target.files[0]
      setImage(img)
  }
  const Submit = async () => {
      const formdata = new FormData()
      formdata.append('upload_file', image)
      const requestOptions={
          method:"POST",
          body:formdata,
      }
      const response = await fetch(URL,requestOptions)
      const data = await response.json()
  }
  const handleSubmit=(e)=>{
      e.preventDefault()
      Submit()
    }

  return (
  <div>
    <ClassName id={id}/>
    <form className="box" onSubmit={handleSubmit}>
      <label className="label" htmlFor="img">画像のアップロード</label>
      <div>
          <input id="img" type="file" accept="image/*,.png,.jpg,.jpeg" onChange={getImage}/>
      </div>
      <br/>
      <button className="button is-primary" type="submit">Submit</button> 
  </form>
  <br/>
  <h2>これまでにアップロードされた画像</h2>
  <ShowImages rgno={id}/>
  </div>
  );
  
}
