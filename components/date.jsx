import { DatePicker } from 'antd';
import React from 'react';
const { MonthPicker, RangePicker } = DatePicker;

function onChange(date, dateString) {
    console.log(date, dateString);
}

export default class date extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // define this.state in constructor
            isEditing: false
        }
    }

    render(){
        return   <div>
                    <DatePicker onChange={onChange} />
                    <br />
                    <MonthPicker onChange={onChange} placeholder="Select month" />
                    <br />
                    <RangePicker onChange={onChange} />
                </div>
    }
}