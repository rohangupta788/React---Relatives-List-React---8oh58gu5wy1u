import React, {Component, useState} from "react";
import '../styles/App.css';
import List from "./List";


const family = ["Rohan","Rahul","Shailesh","Akash"]

class App extends Component {

    render() {

        return(
            <div id="main">
               <ol>
                   {
                    family.map((member,index)=>{
                    const key = `relativeListItem${index +1}`
                       return <List name={member} key = {key} />
                       })
                   }
                   </ol>
            </div>
        )
    }
}


export default App;
