import "./Button.css"
type Props={
    onclick?: ()=> void;
}

const Button = ({onclick}:Props) => {
    return(
        <button onClick={onclick} className="Button">Learn more</button>
    )
}

export default Button