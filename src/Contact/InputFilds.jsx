export const InputFields = ({label,type,id,className,placeholder,changeFunction}) =>{
     return(
        <div className={`${className} form-floating`}>
            <input type={type} className="form-control" id={id}  placeholder={placeholder} onChange={(e)=>{
                {changeFunction(e.target.value)}
            }}/>
            <label htmlFor={id}>{label}</label>
        </div>
     )
}