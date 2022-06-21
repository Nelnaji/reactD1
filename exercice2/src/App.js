import React, {Component} from 'react';



class App extends Component {
    render(){
      let b = 123765   
    return (
      <div>
        <h1>
          {b+b/3}
        </h1>
      </div>
      );
    }
      
}

export default App;
