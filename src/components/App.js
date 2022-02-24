import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               <ol key="relativeList">
            <li key="relativeListItem1">Saurabh</li>
            <li key="relativeListItem2">Deepmani</li>
            <li key="relativeListItem3">Chandra</li>
            </ol>
            </div>
        )
    }
}


export default App;
