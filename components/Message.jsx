import React from 'react';
import { message, Button } from 'antd';

const success = () => {
    message.success('This is a message of success');
};

const error = () => {
    message.error('This is a message of error');
};

const warning = () => {
    message.warning('This is message of warning');
};


function onChange(value) {
    console.log(value);
}

// Just show the latest item.
function displayRender(label) {
    return label[label.length - 1];
}
export default class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // define this.state in constructor
            isEditing: false
        }
    }


    render() {
        return (
            <div>
                <Button onClick={success}>Success</Button>
                <Button onClick={error}>Error</Button>
                <Button onClick={warning}>Warning</Button>
            </div>
        )
    }


}


