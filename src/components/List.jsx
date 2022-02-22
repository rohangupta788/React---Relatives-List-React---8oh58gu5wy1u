import React from "react";
import ListItem from "./ListItem";

function List(props){

    const family = [{id:1,member:"Rohan"},{id:2,member:"golu"},{id:3,member:"Kishu"},{id:4,member:"Guddan"}];

        return(
            <ol type="1">
                   {
                    family.map((fam)=>(
                        <ListItem name={fam.member} key = {fam.id} />
                    ))
                   }
                   </ol>
        )
    
}

export default List;