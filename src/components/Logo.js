import logo from '../img/logo.png';

export default function Logo(props) {
  return (
    <img src={logo} width={props.width} alt={props.alt} />
  )
}