
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClassDetails from './ClassDetails';
import StudentDetails from './StudentDetails';
import Navbutton from './Navbutton';
import MemCreate from './MemCreate';
import StudentAdd from './StudentAdd';
import MemEdit from './MemEdit';
function App() {

  
  return (
    <Router>
    <div className="App">
      <div>
    <Navbutton/>
    </div>
      <div className="content">
          <Routes>

          <Route exact path="/" element={<Home />}  />
          <Route exact path="/classes/:id" element={<ClassDetails />}  />
          <Route exact path="/students/:id" element={<StudentDetails />}  />
          <Route exact path="/createmem/:id" element={<MemCreate />}  />
          <Route exact path="/editmem/:id" element={<MemEdit />}  />
          <Route exact path="/addstudent/:id" element={<StudentAdd />}  />
          </Routes>
      
      </div>
      
    </div>
  </Router>
  );
}

export default App;
