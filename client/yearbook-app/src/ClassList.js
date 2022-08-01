import { Link } from 'react-router-dom'

const ClassList = ({ classes }) => {
    return (
        <div className="class-list">
          {classes.map(cl => (
            <div className="class-preview" key={cl.id} >
              <Link to={`/classes/${cl.id}`}>
                <h2>{ cl.title }</h2>
                <h1>{ cl.year }</h1>
              </Link>
            </div>
          ))}
        </div>
      );
    }
 
export default ClassList;