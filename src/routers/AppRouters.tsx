
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Start from "../components/Start";
import DataUser from "../components/DataUser";
import Address from "../components/Address";
import CommonAreas from "../components/CommonAreas";
import Floor from "../components/Floor";
import Mail from "../components/Mail";
import Sumary from "../components/Sumary";
import logo from "../commons/icons/logo.svg";
import ModalSumary from "../components/ModalSumary";

export const AppRouters = () => {
  return (<>
    <BrowserRouter>
      <img src={logo} alt="logohabi" height="40px" width="40px" />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="datosUsuario" element={<DataUser />} />
        <Route path="correo" element={<Mail />} />
        <Route path="direccionApto" element={<Address />} />
        <Route path="piso" element={<Floor />} />
        <Route path="areascomunes" element={<CommonAreas />} />
        <Route path="resumen" element={<Sumary />} />
      </Routes>
    </BrowserRouter>
 
  </>
  );
};
