import { Rate } from 'antd';
import { Menu, Dropdown, Icon } from 'antd';
import React from 'react';

export default class Rater extends React.Component {
    constructor() {
        super();
        this.state = {  // define this.state in constructor
            isEditing: false
        }
    }
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3d menu item</a>
                </Menu.Item>
            </Menu>
        );
        return (<div>
                    <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                        Hover me <Icon type="down"/>
                    </a>
                    </Dropdown>
                </div>)
     }
}


