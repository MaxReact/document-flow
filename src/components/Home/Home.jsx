import React, {Component} from 'react';
import {Row, Col, Divider, Upload} from 'antd';
import cl from './home.module.css'
import {Calendar, Badge, Alert, Table, Space, Button} from 'antd';
import moment from 'moment';
import Header from "../Header/Header";
import {PaperClipOutlined, UploadOutlined} from "@ant-design/icons";

class Home extends Component {

    state = {
        value: moment('2021-04-06'),
        selectedValue: moment('2021-04-06'),
    };

    onSelect = value => {
        this.setState({
            value,
            selectedValue: value,
        });
    };

    onPanelChange = value => {
        this.setState({value});
    };

    dateCellRender(value) {
        function getListData(value) {
            let listData;
            switch (value.date()) {
                case 10:
                    listData = [
                        {type: 'error'},
                    ];
                    break;
                case 15:
                    listData = [
                        {type: 'error'},
                        {type: 'error'},
                    ];
                    break;
                default:
            }
            return listData || [];
        }

        const listData = getListData(value);
        return (
            <div>
                {listData.map(item => (
                    <Badge status={item.type}/>
                ))}
            </div>
        );
    }

    render() {
        const {value, selectedValue} = this.state;

        const dataSource = [
            {
                key: '0',
                index: <b>1</b>,
                day_left: moment('02-05-2020').format('L'),
                sending: <b>Rasulov I.</b>,
                doc_name: <b>Lorem ipsum dolor.</b>,
                exercise: <a href="/public/logo512.png" download>
                    <Button type="link" icon={<PaperClipOutlined/>}>File name</Button>
                </a>,
                max_ball: <p className={cl.mt5}>
                    <Button>3</Button>
                    <Button type="primary"><b>5</b></Button>
                </p>,
                ozlashtirish: <b>60%</b>
            },
            {
                key: '1',
                index: <b>2</b>,
                day_left: moment('02-12-2020').format('L'),
                sending: <b>Mamatqulov O.</b>,
                doc_name: <b>Lorem ipsum dolor.</b>,
                exercise: <a href="/public/logo512.png" download>
                    <Button type="link" icon={<PaperClipOutlined/>}>File name</Button>
                </a>,
                max_ball: <p className={cl.mt5}>
                    <Button>7</Button>
                    <Button type="primary"><b>10</b></Button>
                </p>,
                ozlashtirish: <b>70%</b>
            },
            {
                key: '0',
                index: <b>3</b>,
                day_left: moment('10-10-2019').format('L'),
                sending: <b>Qobilov Z.</b>,
                doc_name: <b>Lorem ipsum dolor.</b>,
                exercise: <a href="/public/logo512.png" download>
                    <Button type="link" icon={<PaperClipOutlined/>}>File name</Button>
                </a>,
                max_ball: <p className={cl.mt5}>
                    <Button>4</Button>
                    <Button type="primary"><b>5</b></Button>
                </p>,
                ozlashtirish: <b>80%</b>
            }
        ];

        const columns = [
            {
                title: '№',
                dataIndex: 'index',
                key: '1',
            },
            {
                title: 'Topshiriq muddati',
                dataIndex: 'day_left',
                sorter: (a, b) => new Date(a.date) - new Date(b.date),
                key: '2',
            },
            {
                title: 'Yuboruvchi',
                dataIndex: 'sending',
                key: '3',
            },
            {
                title: 'Hujjat nomi',
                dataIndex: 'doc_name',
                key: '4',
            },
            {
                title: 'Topshiriq',
                dataIndex: 'exercise',
                key: '5',
            },
            {
                title: 'Bal | Max',
                dataIndex: 'max_ball',
                key: '6',
            },
            {
                title: `O'zlashtirish`,
                dataIndex: 'ozlashtirish',
                key: '7',
            },


        ];

        const dataSource_deadline = [
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

        const columns_deadline = [
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
                        <Upload>
                            <Button type="primary" icon={<UploadOutlined/>}>Yuklash</Button>
                        </Upload>
                    </Space>
                ),
            },

        ];

        const dataSource_all = [
            {
                key: '0',
                exercise_count: <b>12</b>,
                bal: <div>
                    <Button>36</Button>
                    <Button type={"primary"}>69</Button>
                </div>,
                persant: <b>52%</b>
            }
        ];

        const columns_all = [
            {
                title: 'Topshiriqlar soni',
                dataIndex: 'exercise_count',
                key: '1',
            },
            {
                title: `O'zlashtirilgan | Max bal`,
                dataIndex: 'bal',
                key: '2',
            },
            {
                title: `O'zlashtirish`,
                dataIndex: 'persant',
                key: '1',
            },
        ]


        return (
            <>
                <Header/>

                <Row>
                    <Col offset={1} span={22}>

                        <div className={cl.mt50}>
                            <Divider orientation="left">
                                <h3>Topshiriqlar</h3>
                            </Divider>
                        </div>
                        <Table dataSource={dataSource_deadline} columns={columns_deadline} scroll={{x: '90vw',}}/>


                        <Divider orientation="left">
                            <h3>Nazoratdagi topshiriqlar kalendari</h3>
                        </Divider>
                        {/*<Alert*/}
                        {/*    message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}*/}
                        {/*/>*/}
                        <Calendar dateCellRender={this.dateCellRender} value={value} onSelect={this.onSelect}
                                  onPanelChange={this.onPanelChange}/>

                        <Divider orientation="left">
                            <h3>Umumiy statistika</h3>
                        </Divider>

                        <Table dataSource={dataSource} columns={columns} scroll={{x: '90vw',}} />

                        <Table className={cl.mb5} bordered pagination={false}
                               dataSource={dataSource_all} columns={columns_all} scroll={{x: '90vw',}} />

                    </Col>
                </Row>

            </>
        )
    }
}

export default Home