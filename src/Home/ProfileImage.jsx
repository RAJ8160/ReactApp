import { useRef,useState } from "react";
import './Profile.css'
const Profileimage = () =>{
   const inputRef  =useRef(null);
   const [image,setImage] = useState("")
   
   const handleImageClick = () =>{
     inputRef.current.click('');
   }
    
   const handleImageChange = (event) =>{
    const file = event.target.files[0];
   
    // console.log(file);
    setImage(event.target.files[0]);
  }
    return(
        <>
        <div className="container">
        <div onClick={handleImageClick} className="main">
        {/* <img src="Upload.png"/> */}
        { image ? (<img src={URL.createObjectURL(image)} className="img"/>):(<img src="Upload.png" className="img"/>)}
        <input type="file" 
        ref={inputRef} 
        onChange={handleImageChange}
         style={{display:'none'}}/>
       </div>
        </div>
        </>
       
    );
}
export default Profileimage