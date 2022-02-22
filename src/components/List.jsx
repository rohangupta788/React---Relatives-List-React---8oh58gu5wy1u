import React from "react";
import ListItem from "./ListItem";

function List(props){

    const family = ["Rohan","Rahul","Shailesh","Akash"];

        function addkey(index){
         const key=`relativeListItem${index +1}`;
         return key;
        }
        return(
            <ol type="1">
                   {
                    family.map((member,index)=>(
                        <ListItem name={member} key = {addkey(index)} />
                    ))
                   }
                   </ol>
        )
    
}

export default List;