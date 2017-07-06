import React from 'react';
import { Card } from 'antd';





export default class CascaderDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // define this.state in constructor
            isEditing: false
        }
    }


    render() {
        return (
            <Card extra="ReactNode" style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                    <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>
                <div className="custom-card">
                    <h3>Europe Street beat</h3>
                    <p>www.instagram.com</p>
                </div>
            </Card>
        )
    }


}


