import { useState } from "react";
import url from "./index.js";
import { useNavigate, useParams} from "react-router-dom";
const StudentAdd = () => {
    const {id} = useParams();
  const [name, setName] = useState('');
  const [quote, setQuote] = useState('');
  const navigate= useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const student = { name, quote };
    student.classid=id;

    fetch(url + '/students', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    }).then(response => response.json())
    .then((data) => {
      console.log(data);
      navigate(-1);
        }).catch(err=> console.log(err));
  }

  return (
    <div className="create-mem">
      <h2>Add student </h2>
      <form onSubmit={handleSubmit}>
        <label>Enter name:</label>
        <textarea style={{ height: "50px" }} 
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></textarea>
        <label>Enter quote:</label>
        <textarea style={{ height: "50px" }} 
          required
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
 
export default StudentAdd;