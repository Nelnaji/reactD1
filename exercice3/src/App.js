import React, {Component} from 'react';
class App extends Component{


  render() {
      let actualDate = new Date();
    
  
    return (
      <div>
  <h1>{actualDate.getDate()}/ {actualDate.getMonth() + 1}/{actualDate.getFullYear()}::{actualDate.getHours()}:{actualDate.getMinutes()}</h1>
    </div>
  );
}
}

export default App;
