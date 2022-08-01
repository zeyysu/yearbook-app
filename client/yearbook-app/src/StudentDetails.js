import { useParams} from "react-router-dom";
import useFetch from "./useFetch";
import url from "./index.js";
import { Link } from 'react-router-dom';
import MemList from "./MemList";

const StudentDetails = () => {
  const { id } = useParams();
  const { data: st, error, isPending } = useFetch(url + '/students/' + id);
  
  //const history = useHistory();

 /* const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }*/
  return (
    
    
   

    <div className="student-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { st && (
          <article>
          <h2>{ st.name }</h2>
          <p>"{st.quote}"</p>
          </article>
        )}
        { st && (<div className="mem-crbutton">
             <Link to={ `/createmem/${id}`}  >
                <h2>Add entry</h2>   
              </Link>
        </div>)}
        { st &&  <MemList mems={st.entries} /> }
    </div>
    
  );
}
 
export default StudentDetails;