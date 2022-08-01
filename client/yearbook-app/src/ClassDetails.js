import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import url from "./index.js";

import StudentList from "./StudentList";
import { Link } from 'react-router-dom';

const ClassDetails = () => {
  const { id } = useParams();
  const { data: cl, error, isPending } = useFetch(url + '/classes/' + id);

  //const history = useHistory();

 /* const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }*/
  return (
    <div className="class-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { cl && (
          <article>
          <h2>{ cl.title }</h2>
          <p>Class of { cl.year }</p>
          </article>
        )}
        { cl && <div className="mem-crbutton">
             <Link to={`/addstudent/${id}`}>
                <h2>Add student</h2>   
              </Link>
          </div>
            }
        { cl &&  <StudentList studentids={cl.studentids} /> }
    </div>
  );
}
 
export default ClassDetails;