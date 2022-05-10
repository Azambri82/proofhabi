import {useSelector} from 'react-redux'
import '../styles/styleapp.scss'

const PreviewSumary = () => {
    const todo :any = useSelector((state)=>state);
  return (
    <>
        <h1 className='title'>
            Resumen 
        </h1>
        <ol>
            <li>
                Nombre : {todo.name}
            </li>
            <li>
                Correo :{todo.mail}
            </li>
            <li>
                Dirección :{todo.address}
            </li>
            <li>
                Piso :{todo.floor}
            </li>
            <li>
                Zonas comunes :
                {todo.bbq} 
                {todo.socialroom} 
                {todo.park} 
            </li>
        </ol>
        </>
  )
}

export default PreviewSumary