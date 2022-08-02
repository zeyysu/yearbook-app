import { useState } from "react";
import url from "./index.js";
import { useNavigate, useParams} from "react-router-dom";
const MemCreate = () => {
    const {id} = useParams();
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
    const navigate= useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const mem = { body, author };
    mem.stid=id;

    fetch(url + '/mems', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mem)
    }).then(response => response.json())
    .then((data) => {
      console.log(data);
     navigate(-1);
     
    }).catch(err => console.log(err));
  }

  return (
    <div className="create-mem">
      <h2>Add a New Entry</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Enter author:</label>
        <textarea style={{ height: "50px" }} 
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
 
export default MemCreate;