import { InputFields} from "./InputFilds"
function PersonalDetails(){
    return(
        <div className="d-flex">
        <InputFields label='FirstName' type='text' id='FirstName' changeFunction={(e)=>{
            console.log(e.target.value)
        }} className='col-5' placeholder="Enter First Nmae Here" />
        <InputFields label='LastName' type='email' id='LastName' changeFunction={(e)=>{
            console.log(e.target.value)
        }}  className='col-5 offset-1' placeholder="Enter Last Name Here" />        
      </div>
    )
}
export default PersonalDetails