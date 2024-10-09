import ProfileData from "./ProfileData"
import Profileimage from "./ProfileImage"

const Home = () =>{
    return(
        <>
         <div className="container">
           <div className="row d-flex justify-content-between m-3 ">
              <div className="col-md-3">
                   <Profileimage/>
              </div> 
              <div className="col-md-8">
                   <ProfileData/>
               </div>
            </div>
           
         </div>
        </>
    )
}

export default Home