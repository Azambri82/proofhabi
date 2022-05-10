import { useState } from "react";
import {useDispatch} from 'react-redux'
import useNavigation from "../hooks/useNavigation";
import PreviewSumary from "./PreviewSumary";
import ModalSumary from "./ModalSumary";
import Stepper from "./Stepper";
import "../styles/styleapp.scss";
import {floor} from '../actions/floorUpdate'

const Floor = () => {
  const [showModal, setShowModal] = useState(false);
    const {handleNavigate}=useNavigation();
    const [isRequired, setIsRequired] = useState(false);
    const [userFloor, setUserFloor] = useState("");
    const dispatch = useDispatch();
    
  const handleUpdateFloor = (e:any)=>{
    setUserFloor(e.target.value)
  }
  const handleContinueForm = () => {
    if(handleValidateData()){
      dispatch(floor(userFloor))
      handleNavigate("areascomunes")
    }
  }
  const handleValidateData =() => {
    const number = parseInt(userFloor)
    if(number>-2 && number<=50){
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
        <h1 className="title-section">Piso</h1>
        <Stepper />
        <div className="form-container">
          <label htmlFor="floor">Piso #:</label>
          {isRequired && 
        <span style={{ color: 'red' }}>Este campo es obligatorio debe ser un piso entre -2 y 50</span>
          }
          <input
            type="number"
            id="floor"
            placeholder="piso #"
            className="input"
            min='-2'
            max='50'
            onChange={handleUpdateFloor}
          />
        </div>
        <div className="button-container">
         <button
        onClick={()=>handleNavigate('direccionApto')} className="primary">
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

export default Floor