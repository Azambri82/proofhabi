import useNavigation from "../hooks/useNavigation";
import PreviewSumary from "./PreviewSumary";
import "../styles/styleapp.scss";

const Sumary = () => {
  const { handleNavigate } = useNavigation();
  return (
    <div className="container-form">
      <div className="form-card-single">
        
          <PreviewSumary />
        <div className="button-container-single">
          <button onClick={() => handleNavigate("areascomunes")}  className="primary">
            Anterior
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sumary;
