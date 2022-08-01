
import { useNavigate } from "react-router-dom";
const Navbutton = () => {
  const navigate = useNavigate();
  
  return (
    <div className="Navbutton">
    <button  onClick={() => navigate(-1)}>
        <img src={require('./back2.png')} alt="back" height = "20" ></img>
    </button>
    <button onClick={() => navigate(1)}>
    <img src={require('./forward.png')} alt="back" height = "20" ></img>
    </button> 
    </div>
  );
}

export default Navbutton;