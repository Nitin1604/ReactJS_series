import './App.css';
import React from 'react'
class App extends React.Component {
  constructor() {
    super();
    this.state={
      count:0
    }
  }
  shouldComponentUpdate()
  {
    console.warn("shouldComponentUpdate",this.state.count)
   if(this.state.count<5)
   {
     return true;
   }

  }

  render() {
    return (
      <div className="App">
        <h1> Should Component Update  {this.state.count}</h1>
        <button type="button" className="btn btn-danger my-3" onClick={()=>this.setState({count:this.state.count+1})}>Update Counter</button>
      </div>
    );
  }
}

export default App;