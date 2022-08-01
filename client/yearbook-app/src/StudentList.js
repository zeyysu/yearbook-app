import { Link } from 'react-router-dom';

const StudentList = ({ students }) => {
    

    return (
        <div className="student-list">
            
          { students && students.map(student => (
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