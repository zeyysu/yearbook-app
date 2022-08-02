import { useState } from "react";
import url from "./index.js";
import { useNavigate, useParams} from "react-router-dom";
import { useEffect } from "react";

const MemEdit= () => {
    const {id} = useParams();
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [mem, setMem] = useState({});
    
    
    useEffect(() => {
        fetch(url + '/mems/'+ id, { method: 'GET' })
      .then(res => {
        return res.json();
        
      })
      .then(data => {
          
        setAuthor(data.author);
        setBody(data.body);
        setMem(data);
       
        return;
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          
        }
      })
    }, [])

  const navigate= useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    mem.body=body;
    mem.author=author;
    fetch(url + '/mems/' + id, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mem)
    }).then(()=>
        navigate(-1)
    ).catch(err => console.log(err));
     
    };

  return (
    <div className="create-mem">
      <h2>Edit entry</h2>
      {mem&&
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
        }
    </div>

  );
}
 
export default MemEdit;