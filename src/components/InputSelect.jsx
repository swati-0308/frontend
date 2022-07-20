const InputSelect=(props) =>   {
    const{ label, options}=props

   return( 
    <>
    <div>
        {label}
    </div>
    <select>
        {options.map((item) => 
            <option key={item.key}>{item.label}</option>)}
    </select>
    </>);
       
};
export default InputSelect;