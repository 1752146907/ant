import React from 'react';
import { Modal, Button } from 'antd';

export default class Dialogue extends React.Component {
    state = {
        ModalText: '这是一个对话框，您可以点击确定或者取消',
        visible: false,
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = () => {
        this.setState({
            ModalText: '正在提交',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    }
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    }
    render() {
        const { visible, confirmLoading, ModalText } = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>Open</Button>
                <Modal title="Title"
                       visible={visible}
                       onOk={this.handleOk}
                       confirmLoading={confirmLoading}
                       onCancel={this.handleCancel}
                >
                    <p>{ModalText}</p>
                </Modal>
            </div>
        );
    }
}