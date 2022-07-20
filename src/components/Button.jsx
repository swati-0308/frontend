
const Button = (props) => {
    const {label, handleClick, className} = props;

    return (
        <button id="loginbtn" onClick={handleClick} className={className}>
            {label}
        </button>
    );
}

export default Button;