
const Button = ({children, className, onClick}) => {
    return(
        <button 
            type="button" 
            className={className}
            onClick={onClick} //chama a função
        >
            {children}
        </button>
    )
}

export default Button;