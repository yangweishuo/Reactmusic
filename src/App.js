import React, { Component } from 'react';

import {

    HashRouter as Router,
	Route
	
} from 'react-router-dom'

import {Tab1} from './components/index/home/Tab1'
import {Tab2} from './components/index/songlist/Tab2'
import {Tab3} from './components/index/rank/Tab3'
import {Tab4} from './components/index/search/Tab4'
import {Detailed} from './components/index/songdetailed/Detailed'
import {Playmusic} from "./components/index/playmusic/playmusic";
import {Pplaymusic} from "./components/index/Pplaymusic/Pplaymusic";


class App extends Component {
  render() {
    return (
    	
    	<Router>
	      <div className="router">
	        <Route path='/' exact component={Tab1}></Route>
	        <Route path='/index/home' component={Tab1}></Route>
	        <Route path='/index/songlist' component={Tab2}></Route>
	        <Route path='/index/rank' component={Tab3}></Route>
	        <Route path='/index/search' component={Tab4}></Route>
	        <Route path='/index/songdetailed/:id' component={Detailed}></Route>
	        <Route path='/index/playmusic/:id' component={Playmusic}></Route>
	        <Route path='/index/Pplaymusic/:id' component={Pplaymusic}></Route>
	      </div>
      </Router>
    );
  }
}

export default App;
