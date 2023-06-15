import './App.css';
import React ,{useRef} from 'react'
import User from './User'
function App() {
  let inputRef=useRef(null)
  function updateInput()
  {
    inputRef.current.value="react js series";
    inputRef.current.style.color="red"
    inputRef.current.focus()
   

  }
  return (
    <div className="App">
      <h1>forwardRef in React </h1>
      <User ref={inputRef} />
      <button  type="button" className="btn btn-danger my-3" onClick={updateInput} >Update Input Box</button>
    </div>
  );

}
export default App;