import React, {Component} from "react";
import Nav from './components/nav';
import Header from './components/header';

class App extends Component {
	render(){
	  return (
	    <div className="App">
	    	<Nav />
	    	<Header />
	    </div>
	  
	  );
	}
}

export default App;
