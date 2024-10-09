import { useState } from "react"
import { InputFields} from "../Contact/InputFilds"

function GeneralDetails(){
    return(
          <div className="d-flex">
            <InputFields label='UserName' type='text' id='username' changeFunction={(e)=>{
                console.log(e.target.value)
            }} className='col-5' placeholder="Enter Nmae Here" />
            <InputFields label='email' type='email' id='email' changeFunction={(e)=>{
                console.log(e.target.value)
            }}  className='col-5 offset-1' placeholder="Enter email Here" />        
          </div>
    )
}
export default GeneralDetails