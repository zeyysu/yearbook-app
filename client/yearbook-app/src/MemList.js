
import url from "./index.js";
import { useNavigate } from "react-router-dom";
const MemList = ({ mems }) => {
    const navigate = useNavigate();
    const handleDelete = (memid) => {
        
        fetch( url + '/mems/' + memid, {
          method: 'DELETE'
        }).then(() => {
          navigate(0);
          //window.location.reload();
        }) 
      }
      const handleEdit =(memid) => navigate(`/editmem/${memid}`);
    return (
        <div className="mem-list">
            
          { mems && mems.map(mem => (
            <div className="mem-preview" key={mem.id} >
                <p >{ mem.body } </p>
                <h1> from { mem.author }</h1>
                
                <button onClick={() => { handleEdit(mem.id)}} >edit</button>
                <button onClick={() => { handleDelete(mem.id)}} >delete</button>
            </div>
          ))}
          
        </div>
      
      );
    }
 
export default MemList;