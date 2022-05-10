import useNavigation from '../hooks/useNavigation';
import Stepper from './Stepper';
import '../styles/styleapp.scss'

const Start = () => {
    const {handleNavigate}=useNavigation();
   
  return (
    <>
      <div className="container-form">
      <div className="form-card-single">
      <div><h1 className="title-section">Compramos</h1>
      <h2 className="title-section">tu vivienda en 10 días*</h2>
      <p className='subtitle-section'>
        Solicita una oferta gratis ingresando la dirección, características del
        inmueble y tus datos de contacto. Uno de nuestros expertos te hará una
        oferta.
      </p>
      <Stepper/>
      <div className="button-container-single">
      <button onClick={() => handleNavigate("datosUsuario")}  className="primary">Inicio</button></div>
      </div>
      </div>
    </div>
      
     
      
    </>
  );
}

export default Start