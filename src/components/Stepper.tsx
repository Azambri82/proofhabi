import {useSelector} from 'react-redux'
import '../styles/styleapp.scss'

const Stepper = () => {
  const todo :any = useSelector((state)=>state);
  return (
    <div><div className="wrapper ">
    <ol className='order-list'>
      <li className={todo.name===''?'c-stepper__item':'c-stepper__item_select'}>
        <h3 className="c-stepper__title">Uno</h3>
        <p className="c-stepper__desc">Tu Nombre</p>
      </li>
      <li className={todo.mail===''?'c-stepper__item':'c-stepper__item_select'}>
        <h3 className="c-stepper__title">Dos</h3>
        <p className="c-stepper__desc">Tu correo</p>
      </li>
      <li className={todo.address===''?'c-stepper__item':'c-stepper__item_select'}>
        <h3 className="c-stepper__title">Tres</h3>
        <p className="c-stepper__desc">Dirección</p>
      </li>
      <li className={todo.floor===''?'c-stepper__item':'c-stepper__item_select'}>
        <h3 className="c-stepper__title">Cuatro</h3>
        <p className="c-stepper__desc">Piso</p>
      </li>
      <li className={todo.bbq==='' || todo.socialroom==='' || todo.park===''?'c-stepper__item':'c-stepper__item_select'}>
        <h3 className="c-stepper__title">Cinco</h3>
        <p className="c-stepper__desc">Zonas comunes</p>
      </li>
    </ol>
  </div></div>
  )
}

export default Stepper