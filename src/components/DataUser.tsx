import { useState } from "react";
import {useDispatch} from 'react-redux'
import useNavigation from "../hooks/useNavigation";
import PreviewSumary from "./PreviewSumary";
import ModalSumary from "./ModalSumary";
import Stepper from "./Stepper";
import "../styles/styleapp.scss";
import {name} from '../actions/nameUpdate'

const DataUser = () => {
  const { handleNavigate } = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  const handleUpdateName = (e:any)=>{
    setUserName(e.target.value)
  }
  const handleContinueForm = () => {
    if(handleValidateData()){
      dispatch(name(userName))
      handleNavigate("correo")
    }
  }
  const handleValidateData =() => {
    if(userName!==""){
      return true
    }else{
      setIsRequired(true);
      return false
    }
  }
  return (
    <div>
    <div className="container-form">
      <div className="form-card">
        <h1 className="title-section">Nombre completo</h1>
        <Stepper />
        <div className="form-container">
          <label htmlFor="name">Nombre:</label>
          {isRequired && 
        <span style={{ color: 'red' }}>Este campo es obligatorio</span>
          }
          <input
            type="text"
            id="name"
            placeholder="Nombre completo"
            className="input"
            onChange={handleUpdateName}
          />
        </div>
        <div className="button-container">
          <button onClick={() => handleNavigate("")} className="primary">
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

export default DataUser;
