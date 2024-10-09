import { InputFields} from "./InputFilds"
function Address(){
    return(
        <div className="d-flex">
            <InputFields label='Address' type='text' id='address' changeFunction={(e)=>{
                console.log(e.target.value)
            }} className='col-5' placeholder="Enter Address Here" />
            <InputFields label='state' type='email' id='state' changeFunction={(e)=>{
                console.log(e.target.value)
            }}  className='col-5 offset-1' placeholder="Enter state Here" />        
          </div>
    )
}
export default Address