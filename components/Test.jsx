import React from 'react';

class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = { // define this.state in constructor
            isEditing: false
        }
    }
    render(){
        return <div>test</div>
    }
}

export default Test;