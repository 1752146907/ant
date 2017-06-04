import { Input } from 'antd';
import React from 'react';

export default class input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // define this.state in constructor
            isEditing: false
        }
    }

    render(){
        return   <div className="example-input">
                    <Input size="large" placeholder="large size" />
                    <Input placeholder="default size" />
                    <Input size="small" placeholder="small size" />
                    <Input placeholder="default size" />
                </div>
    }
}