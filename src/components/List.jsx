import React from "react";
import ListItem from "./ListItem";

function List(){

    const family = [{id:1,member:"Rohan"},{id:2,member:"golu"},{id:3,member:"Kishu"},{id:4,member:"Guddan"}];

        return(
            <ol type="1">
                   {
                    family.map((fam)=>(
                        <ListItem name={fam.member} key = {`relativeListItem${fam.id}`} />
                    ))
                   }
                   </ol>
        )
    
}

export default List;