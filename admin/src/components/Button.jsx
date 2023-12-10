import './Button.css'

const Button = (props) => {
  return (
    <button className="mybutton">{props.text}</button>
  )
}

export default Button