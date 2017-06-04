import React from 'react';

export default class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.state = { // define this.state in constructor
            isEditing: false
        }
    }
    render(){
        return <div>Home</div>
    }
}