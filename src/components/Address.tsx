
import { useState } from "react";
import {useDispatch} from 'react-redux'
import useNavigation from "../hooks/useNavigation";
import PreviewSumary from "./PreviewSumary";
import ModalSumary from "./ModalSumary";
import Stepper from "./Stepper";
import {address} from '../actions/addressUpdate'
import "../styles/styleapp.scss";

const Address = () => {
    const {handleNavigate}=useNavigation();
    const [showModal, setShowModal] = useState(false);
    const [isRequired, setIsRequired] = useState(false);
    const [userAddress, setUserAddress] = useState("");
    const dispatch = useDispatch();
    const handleUpdateAddress = (e:any)=>{
      setUserAddress(e.target.value)
    }
    const handleContinueForm = () => {
      if(handleValidateData()){
        dispatch(address(userAddress))
        handleNavigate("piso")
      }
    }
    const handleValidateData =() => {
      if(userAddress.length>8){
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
      <h1 className='title-section'>Dirección</h1>
         <Stepper/>
         <div className="form-container">
          <label htmlFor="name">Dirección:</label>
          {isRequired && 
        <span style={{ color: 'red' }}>Este campo es obligatorio y debe ser la direccion completa</span>
          }
          <input
            type="text"
            id="address"
            placeholder="Dirección"
            className="input"
            onChange={handleUpdateAddress}
          />
        </div>
        <div className="button-container">
        <button
        onClick={()=>handleNavigate('correo')} className="primary">
            Anterior
        </button>
        <button
        onClick={()=>handleContinueForm()}className="primary">
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
  )
}

export default Address