import '../styles/styleapp.scss'
import PreviewSumary from './PreviewSumary';

const ModalSumary = ({...props}) => {
    const {setShowModal}=props;
  return (
    <div id="miModal" className="modal">
  <div className="modal-contenido">
    <PreviewSumary/>
    <div className='title'>
    <button onClick={() => setShowModal(false)} className="primary">
    Cerrar
    </button>
    </div>
  </div>  
</div>
  )
}

export default ModalSumary