
import url from "./index.js";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
const MemList = ({ memids, stid }) => {
    const navigate = useNavigate();
    const { data: mems, error, isPending } = useFetch(url + '/mems');
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
         { isPending && <div>Loading...</div> }
        { error && <div>{ error }</div> }
            
          { mems && mems.filter(mem => (memids.includes(mem.id))).map(mem => (
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