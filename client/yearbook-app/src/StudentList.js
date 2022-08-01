import { Link } from 'react-router-dom';
import url from "./index.js";
import useFetch from "./useFetch";

const StudentList = ({ studentids }) => {
    const { data: students, error, isPending } = useFetch(url + '/students');

    return (
        <div className="student-list">
         { isPending && <div>Loading...</div> }
        { error && <div>{ error }</div> }
            
          { students && students.filter(student => (studentids.includes(student.id))).map(student => (
            <div className="student-preview" key={student.id} >
              <Link to={`/students/${student.id}`}>
                <h2>{ student.name } </h2>
                <h1> "{ student.quote }"</h1>
              </Link>
            </div>
          ))}
          
        </div>
      
      );
    }
 
export default StudentList;