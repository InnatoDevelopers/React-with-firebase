import React,{Component} from 'react';
import firebase from 'firebase';
import './App.css';

class App extends Component {

  state = {
    usuarios:[]
  }

  getUsuarios(){
    firebase.database().ref("usuarios").on('value',(snapshot)=>{
       if(snapshot.val()){
          console.log(snapshot.val());
          this.setState({usuarios:snapshot.val()})
       }
    });
  }

  componentWillMount(){
    this.getUsuarios();
  }

  render(){
    return (
      <div className="App">
        <div>
          {
            JSON.stringify(this.state.usuarios)
          }
        </div>
      </div>
    )
  }
  
}

export default App;
