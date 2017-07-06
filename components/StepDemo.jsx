import React from 'react';
import { Steps } from 'antd';

const Step = Steps.Step;
export default class StepDemo extends React.Component {

    constructor(props){
        super(props);
        this.state = { // define this.state in constructor
            isEditing: false
        }
    }
    render(){
        return  <Steps size="small" current={1}>
            <Step title="Finished" />
            <Step title="In Progress" />
            <Step title="Waiting" />
        </Steps>
    }
}
