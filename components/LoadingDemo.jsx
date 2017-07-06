import React from 'react';
import { Spin, Alert } from 'antd';

class LoadingDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // define this.state in constructor
            isEditing: false
        }
    }

    render(){
        return (
            <Spin tip="Loading...">
                <Alert
                    message="Alert message title"
                    description="Further details about the context of this alert."
                    type="info"
                />
            </Spin>
        )
    }
}

export default LoadingDemo;
