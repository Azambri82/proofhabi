import { useState } from "react";
import { useDispatch } from "react-redux";
import useNavigation from "../hooks/useNavigation";
import PreviewSumary from "./PreviewSumary";
import ModalSumary from "./ModalSumary";
import Stepper from "./Stepper";
import "../styles/styleapp.scss";
import { bbq, socialroom, park } from "../actions/socialAreasUpdate";

const CommonAreas = () => {
  const { handleNavigate } = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  const [userBbq, setUserBbq] = useState(false);
  const [userSocialroom, setUserSocialroom] = useState(false);
  const [userPark, setUserPark] = useState(false);
  const dispatch = useDispatch();
  const handleChangeBbq = (e: any) => {
    setUserBbq(e.target.checked);
  };
  const handleChangeSR = (e: any) => {
    setUserSocialroom(e.target.checked);
  };
  const handleChangePark = (e: any) => {
    setUserPark(e.target.checked);
  };
  const handleContinueForm = () => {
    dispatch(bbq(userBbq));
    dispatch(socialroom(userSocialroom));
    dispatch(park(userPark));
    handleNavigate("resumen");
  };

  return (
    <div>
      <div className="container-form">
        <div className="form-card">
          <h1 className="title-section">Áreas comunes</h1>
          <Stepper />
          <div className="form-container">
            <label>Áreas comunes</label>
            <div className="checkbox-container">
              <label htmlFor="bbq" className="checkbox-label">
                Zona BBQ:
                <input
                  type="checkbox"
                  id="bbq"
                  checked={userBbq}
                  onChange={handleChangeBbq}
                />
              </label>
              <label htmlFor="salon" className="checkbox-label">
                Salón comunal:
                <input
                  type="checkbox"
                  id="salon"
                  checked={userSocialroom}
                  onChange={handleChangeSR}
                />
              </label>
              <label htmlFor="salon" className="checkbox-label">
                Parque de juegos:
                <input
                  type="checkbox"
                  id="parque"
                  checked={userPark}
                  onChange={handleChangePark}
                />
              </label>
            </div>
          </div>
          <div className="button-container">
            <button onClick={() => handleNavigate("piso")} className="primary">
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
        <div></div>
      </div>
      <div className="button-show-sumary">
        <button onClick={() => setShowModal(true)} className="primary">
          Ver resumen
        </button>
      </div>
      <div>{showModal && <ModalSumary setShowModal={setShowModal} />}</div>
    </div>
  );
};

export default CommonAreas;
