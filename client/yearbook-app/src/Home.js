import ClassList from "./ClassList";
import useFetch from "./useFetch";
import url from "./index.js";
const Home = () => {
  const { error, isPending, data: classes } = useFetch(url + '/classes')
  return (
    <div className="home">
         <h1>Classes</h1>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { classes && <ClassList classes={classes} /> }
    </div>
  );
}
 
export default Home;