type ButtonProps = {
    name: string;
    type: string;
    onClick: ()=> void;
}

const Button = ({ name, type, onClick }: ButtonProps)=> {
    return(
        <button 
            onClick={onClick}
            type="button" 
            className={`btn btn-${type}`} >{name}</button>
    );
}

export default Button;