import './App.css';
import React from 'react'
class App extends React.Component {
  constructor()
  {
    super();
    console.warn("constructor")
    this.state={
      count:0
    }
  }
  componentDidUpdate(preProps , preState , snapshot)
  {
    // console.warn("componentDidUpdate", preState.count, this.state.count)
    console.warn("componentDidUpdate",snapshot)
    if (preState.count === this.state.count)
    {
      console.log("Data is already same")
    }

  }
  render()
  {
    console.warn("render")

    return (
      <div className="App">
        <h1>Component Did Update {this.state.count}</h1>
        <button  type="button" className="btn btn-danger" onClick={()=>{this.setState({count: this.state.count })}}>Update</button>
      </div>
    );
  }
}

export default App;