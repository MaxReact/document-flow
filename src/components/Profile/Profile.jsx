import React, {Component} from 'react';
import {Row, Col, Table, Divider, Space, Button, Upload, Modal, InputNumber, Form, Input, Checkbox} from 'antd';
import cl from "./profile.module.css";
import Header from "../Header/Header";

class Profile extends Component {




    render() {

        const onFinish = (values) => {
            console.log('Success:', values);
        };

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };

        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };
        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };

        return (
            <>
                <Header/>

                <Row className={cl.mt25}>
                    <Col offset={1} span={22}>
                        <Divider orientation="left">
                            <h3>Mening ma'lumotlarim</h3>
                        </Divider>
                    </Col>

                    <Col offset={2} span={10}>
                        <Form
                            className={cl.formBorder}
                            {...layout}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="Eski parol"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                label="Yangi parol"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                label="Parolni tasdiqlash"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Saqlash
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>

                </Row>

            </>
        )
    }
}

export default Profile