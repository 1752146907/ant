import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './css/LogIn.css';

const FormItem = Form.Item;



class LogInn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // define this.state in constructor
            isEditing: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    denglu(){
        reqwest({
            url: 'http://api.b2b-purchase.dingxingyun.cn/v1/users/login'
            , method: 'post'
            , data: { usertype: 'member', password: '13929747075',username:'13929747075' }
            , success: function (resp) {
                alert("ok")
            }
        })
    }



    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <p className="login-title">登陆</p>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入您的用户账号!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入您的用户密码!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" onClick={this.denglu.bind(this)} className="login-form-button login-but" >
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </FormItem>
            </Form>
            </div>
        );
    }
}

const LogIn = Form.create()(LogInn);
export default LogIn;
