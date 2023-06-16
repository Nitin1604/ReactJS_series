import './App.css';
import React from 'react'
import Student from './Student'
class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      show:true
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.show?<Student />
          :<h4>Component is removed</h4>
        }
        <button type="button" className="btn btn-danger my-3" onClick={()=>this.setState({show:false})}> Toogle Student Component</button>
      </div>
    )
  }
}

export default App;