import React from 'react';
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';

import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,
    InputNumber,
    Space, Cascader
} from 'antd';

import {Row, Col, Upload} from 'antd';

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import cl from './addForm.module.css';




const AddForm = () => {

    const rangeConfig = {
        rules: [
            {
                type: 'array',
                required: true,
                message: 'Please select time!',
            },
        ],
    };

    const {RangePicker} = DatePicker;


    const normFile = (e) => {
        console.log('Upload event:', e);
    }

    const onFinish = values => {
        console.log('Received values of form:', values);
    };

    return (
        <>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: "default",
                }}
                size="default"
                onFinish={onFinish}
                autoComplete="off"
            >

                <Form.Item name={['user', 'introduction1']} label="Hujjat nomi">
                    <Input.TextArea/>
                </Form.Item>

                <Form.Item label="Ma'sul">
                    <Cascader
                        options={[
                            {
                                value: `Birinchi bo'lim`,
                                label: `Birinchi bo'lim`,
                                children: [
                                    {
                                        value: 'Muzafarov A.',
                                        label: 'Muzafarov A.',
                                    },
                                    {
                                        value: 'Abdujalilov X.',
                                        label: 'Abdujalilov X.',
                                    },
                                    {
                                        value: 'Suyunov X.',
                                        label: 'Suyunov X.',
                                    },
                                ],
                            },
                            {
                                value: `Ikkinchi bo'lim`,
                                label: `Ikkinchi bo'lim`,
                                children: [
                                    {
                                        value: 'Nizomov S.',
                                        label: 'Nizomov S.',
                                    },
                                    {
                                        value: 'Ochilov N.',
                                        label: 'Ochilov N.',
                                    },
                                ],
                            },
                        ]}
                        placeholder="Tanlang"
                    />
                </Form.Item>


                <Form.Item name="range-picker" label="Kiruvchi va chiquvchi sana" {...rangeConfig}>
                    <RangePicker/>
                </Form.Item>

                <Form.Item label="Yuklash">
                    <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                        <Upload.Dragger name="files" action="/upload.do">
                            <p className="ant-upload-drag-icon">
                                <ArrowDownwardIcon/>
                            </p>
                            <p className="ant-upload-text">Yuklash uchun bosing</p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>
                <Form.Item label="Hujjat uchun maximum ball">
                    <InputNumber className={cl.w100} placeholder="max balni kiriting"/>
                </Form.Item>
                <Row>
                    <Col offset={4} span={12}>
                        <Form.List name="users">
                            {(fields, {add, remove}) => (
                                <>
                                    {fields.map(({key, name, fieldKey, ...restField}) => (
                                        <Space className={cl.ml15} key={key} style={{display: 'flex', marginBottom: 8}} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'first']}
                                                fieldKey={[fieldKey, 'first']}
                                                rules={[{required: true, message: 'Missing first name'}]}

                                            >
                                                <Select className={cl.w100} placeholder={"Kriteriya"}>
                                                    <Select.Option value="demo">O'z vaqtida bajarish</Select.Option>
                                                    <Select.Option value="demo1">Vazifani to'liq bajarilganligi</Select.Option>
                                                    <Select.Option value="demo2">Muammo hal qilinganligi</Select.Option>
                                                </Select>
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'last']}
                                                fieldKey={[fieldKey, 'last']}
                                                rules={[{required: true, message: 'Missing last name'}]}
                                            >
                                                <InputNumber placeholder={"max ball"}/>
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(name)}/>
                                        </Space>
                                    ))}
                                    <Form.Item>
                                                <Button className={cl.ml25} type="dashed" onClick={() => add()} block icon={<PlusOutlined/>}>
                                                    Kriteriya qo'shish
                                                </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>

                    </Col>
                </Row>


                <Form.Item>
                    <Button className={cl.ml25} type="primary" htmlType="submit">Jo'natish</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default AddForm;