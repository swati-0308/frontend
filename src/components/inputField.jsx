
const InputField=(props) =>   {
    const {label,onChange}=props

   return( 
    <div>
        <div>{label}</div>
        <input type="text" onChange={(event)=>onChange(event.target.value)}/> 
    </div>
    );
    };
export default InputField;