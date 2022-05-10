
import { useState } from "react";
import {useDispatch} from 'react-redux'
import useNavigation from "../hooks/useNavigation";
import PreviewSumary from "./PreviewSumary";
import ModalSumary from "./ModalSumary";
import Stepper from "./Stepper";
import "../styles/styleapp.scss";
import {mail} from '../actions/mailUpdate'
const Mail = () => {
  const { handleNavigate } = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  const [userMail, setUserMail] = useState("");
  const dispatch = useDispatch();
  const handleUpdateMail = (e:any)=>{
    setUserMail(e.target.value)
  }
  const handleContinueForm = () => {
    if(handleValidateData()){
      dispatch(mail(userMail))
      handleNavigate("direccionApto")
    }
  }
  const handleValidateData =() => {
    if(userMail!==""){
      if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(userMail)){
        return true
      }else{
        setIsRequired(true);
      }
    }else{
      setIsRequired(true);
      return false
    }
  }

  return (
    <div>
    <div className="container-form">
      <div className="form-card">
        <h1 className="title-section">Correo electrónico</h1>
        <Stepper />
        <div className="form-container">
          <label htmlFor="name">Correo:</label>
          {isRequired && 
        <span style={{ color: 'red' }}>Este campo es obligatorio y debe ser un correo valido</span>
          }
          <input
            type="mail"
            id="name"
            placeholder="correo electrónico"
            className="input"
            onChange={handleUpdateMail}
          />
        </div>
        <div className="button-container">
          <button onClick={() => handleNavigate("datosUsuario")} className="primary">
            Anterior
          </button>
          <button onClick={() => handleContinueForm()} className="primary">
            Siguiente
          </button>
        </div>
      </div>
      <div className="preview-sumary">
        <PreviewSumary />
        </div>
      <div>
      </div>
    </div>
    <div className="button-show-sumary">
      <button onClick={() => setShowModal(true)} className="primary">
            Ver resumen
          </button>
    </div>
    <div>
      {
        showModal &&
        <ModalSumary 
        setShowModal={setShowModal}/>
      }
      </div>
    </div>
  );
};

export default Mail;
