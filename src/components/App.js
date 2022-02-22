import React from "react";
import '../styles/App.css';
import List from "./List";



function App() {
        const keyvalue= `relativeList`;
        return(
            <div id="main">
              <List key={keyvalue} />
            </div>
        )
    
}


export default App;
