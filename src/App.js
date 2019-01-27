import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Notes from './Notes.js'
class App extends Component {
  constructor(){
    super();
    this.state ={
      count: 0
    }
  }
  tambah = () =>{
    this.props.dispatch({type:'INCR'})
  }
  tambah2 = () =>{
    this.props.dispatch({type:'INCR2', plus:2})
  }
  kurang = () =>{
    this.props.dispatch({type:'DECR'})
  }
  render() {
    return (
      <div className="App">
      <div>
        <center>
          <Notes />
          <button onClick={this.tambah}>Tambah</button>
          <button onClick={this.tambah2}>Tambah2</button>
          <button onClick={this.kurang}>Kurang</button>
        </center>
      </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    count : state.count
  }
}
export default connect(mapStatetoProps)(App);
