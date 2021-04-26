import React, {Component} from 'react';
import {Tabs, Row, Col, Table, Divider, Space, Button, Upload, Modal, InputNumber} from 'antd';
import cl from "./inDocument.module.css";
import Header from "../Header/Header";
import {PaperClipOutlined, UploadOutlined} from "@ant-design/icons";

const {TabPane} = Tabs;

// function callback(key) {
//   console.log(key);
// }

class InDocument extends Component {
    state = {
        isModalVisible: false
    }

    render() {

        const showModal = () => {
            this.setState({
                isModalVisible: true
            })
        };

        const handleOk = () => {
            this.setState({
                isModalVisible: false
            })
        };

        const handleCancel = () => {
            this.setState({
                isModalVisible: false
            })
        };

        const onChange = (value) => {
            console.log('changed', value);
        }

        const dataSource = [
            {
                key: '0',
                index: <b>1</b>,
                sending: <b>Muzafarov A.</b>,
                exercise: <a href="/public/logo512.png" download>
                    <Button type="link" icon={<PaperClipOutlined/>}>File name</Button>
                </a>,
                doc_name: <b>Lorem ipsum dolor.</b>,
                day_left: <b>19.04.2021</b>,
                critery_ball: <div>
                    <Space direction="vertical">
                        <div>
                            <Button className={cl.mr5}>O'z vaqtida bajarish</Button>
                            <Button>0</Button>
                            <Button type="primary">5</Button>
                        </div>
                        <div>
                            <Button className={cl.mr5}>Vazifani to'liq bajarilganligi</Button>
                            <Button>0</Button>
                            <Button type="primary">5</Button>
                        </div>
                    </Space>
                </div>,
                max_ball: <p className={cl.mt5}>
                    <Button>0</Button>
                    <Button type="primary"><b>10</b></Button>
                </p>,
            },
            {
                key: '0',
                index: <b>2</b>,
                sending: <b>Nizomov S.</b>,
                exercise: <a href="/public/logo512.png" download>
                    <Button type="link" icon={<PaperClipOutlined/>}>File name</Button>
                </a>,
                doc_name: <b>Sit amet, consectetur.</b>,
                day_left: <b>25.05.2021</b>,
                critery_ball: <div>
                    <Space direction="vertical">
                        <div>
                            <Button className={cl.mr5}>O'z vaqtida bajarish</Button>
                            <Button>0</Button>
                            <Button type="primary">3</Button>
                        </div>
                        <div>
                            <Button className={cl.mr5}>Muammo hal qilinganligi</Button>
                            <Button>0</Button>
                            <Button type="primary">2</Button>
                        </div>
                    </Space>
                </div>,
                max_ball: <p className={cl.mt5}>
                    <Button>0</Button>
                    <Button type="primary"><b>5</b></Button>
                </p>,
            }
        ];

        const columns = [
            {
                title: '№',
                dataIndex: 'index',
                key: '1',
            },
            {
                title: 'Yuboruvchi',
                dataIndex: 'sending',
                key: '2',
            },
            {
                title: 'Topshiriq',
                dataIndex: 'exercise',
                key: '3',
            },
            {
                title: 'Hujjat nomi',
                dataIndex: 'doc_name',
                key: '4',
            },
            {
                title: 'Topshiriq muddati',
                dataIndex: 'day_left',
                key: '5',
            },
            {
                title: 'Kriteriya | Bal',
                dataIndex: 'critery_ball',
                key: '6',
            },
            {
                title: 'Bal | Max',
                dataIndex: 'max_ball',
                key: '7',
            },
            {
                title: 'File',
                key: '8',
                render: (text, record) => (
                    <Space size="middle">
                        <Button onClick={showModal} type="primary">Baholash</Button>
                    </Space>
                ),
            },

        ];

        return (
            <>
                <Header/>

                <Row className={cl.mt25}>
                    <Col offset={1} span={22}>
                        <Divider orientation="left">
                            <h3>Kelib tushgan hujjatlar</h3>
                        </Divider>
                        <Table bordered dataSource={dataSource} columns={columns} scroll={{x: '80vw',}}/>
                    </Col>
                </Row>


                <Modal title="Kriteriyalar bo'yicha baholang" visible={this.state.isModalVisible} onOk={handleOk}
                       onCancel={handleCancel}>
                    <div>
                        <Button className={cl.mr5_baho}>O'z vaqtida bajarish</Button>
                        <InputNumber placeholder={"baholang"} max={10} onChange={onChange}/>
                        <Button type="primary">5</Button>
                    </div>
                    <div>
                        <Button className={cl.mr5_baho}>Vazifani to'liq bajarilganligi</Button>
                        <InputNumber placeholder={"baholang"} max={10} onChange={onChange}/>
                        <Button type="primary">5</Button>
                    </div>
                    <Divider></Divider>
                    <div>
                        <Button className={cl.mr5_baho}>Umumiy baho</Button>
                        <InputNumber placeholder={"baholang"} max={10} onChange={onChange}/>
                        <Button type="primary">10</Button>
                    </div>
                </Modal>
            </>
        )
    }
}

export default InDocument