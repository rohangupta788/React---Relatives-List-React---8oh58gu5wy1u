import React from "react";

class List extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <li key={this.props.key}>{this.props.name}</li>
        )
    }
}

export default List;