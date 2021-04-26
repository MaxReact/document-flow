import React, {Component} from 'react';
import {Row, Input, Checkbox, Col, Button, Form} from 'antd';

import cl from './login.module.css';
import {connect} from "react-redux";
import {auth} from "../../store/actions/auth";
import {Redirect} from "react-router-dom";


class Login extends Component {
    state = {
        loading: false
    }


    render() {

        const onFinish = (values) => {
            console.log('Success:', values);
            this.setState({
                loading: true
            })
            this.props.auth(values.username, values.password, true)
        };

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
            alert(errorInfo)
        };


        return (
            <div>
                {
                    this.props.isAuth
                        ? <Redirect to="/home"/>
                        : <Row className={cl.mt50}>
                            <Col span={8} offset={7}>
                                <Form
                                    className={cl.formBorder}
                                    name="basic"
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                >
                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                    >
                                        <Input/>
                                    </Form.Item>

                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                        ]}
                                    >
                                        <Input.Password/>
                                    </Form.Item>

                                    <Form.Item name="remember" valuePropName="checked">
                                        <Checkbox>Eslab qolish</Checkbox>
                                    </Form.Item>

                                    <Form.Item>
                                        <Button loading={this.state.loading} type="primary" htmlType="submit">
                                            Yuborish
                                        </Button>
                                    </Form.Item>
                                    <div>
                                        <b>Username</b>: admin@gmail.com
                                        <br/>
                                        <b>Password</b>: admin123
                                    </div>
                                </Form>
                            </Col>
                        </Row>

                }

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuth: !!state.auth.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        auth: (login, password, isLogin) => dispatch(auth(login, password, isLogin))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)