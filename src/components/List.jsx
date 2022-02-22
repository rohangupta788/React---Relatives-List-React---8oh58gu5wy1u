import React from "react";

class List extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <li>{this.props.name}</li>
        )
    }
}

export default List;