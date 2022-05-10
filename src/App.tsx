import { AppRouters } from "./routers/AppRouters";
import './styles/styleapp.scss'

function App() {
  return (
    <>
      <AppRouters/>
      <div className="subtitle-section">
      <h6>Desarrollado por el ingeniero Alex Eduardo Zambrano Perez</h6>
      <a href="https://www.linkedin.com/in/alex-eduardo-zambrano-perez-aa445915b/">linkedIn</a>
      </div>
    </>
  );
}

export default App;
