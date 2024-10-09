import { InputFields} from "./InputFilds"
function SocialDetails(){
    return(
        <div className="d-flex flex-column">
        <InputFields label='Facebook profile' type='text' id='facebookProfile' changeFunction={(e)=>{
            console.log(e.target.value)
        }} className='col-10' placeholder="Enter Facebook Profile Here" />
        <InputFields label='Linkeddin Profile' type='email' id='LinkeddinProfile' changeFunction={(e)=>{
            console.log(e.target.value)
        }}  className='col-10 mt-2' placeholder="Enter Linkeddin Profile Here" />
         <div className="row g-0 justify-content-end mt-4">
               <button className='col-3 edit-btn p-2 rounded-2' >Submit</button>
         </div>        
      </div>
    )
}
export default SocialDetails