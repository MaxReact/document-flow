import React, {Component} from 'react';
import {Row, Col, Divider} from 'antd';


import cl from './addDocument.module.css';
import AddForm from './AddForm/AddForm';
import Header from "../Header/Header";


class AddDocument extends Component {
    render() {
        return (
            <div>
                <Header/>

                <div className={cl.mt25}>
                    <Divider orientation="left">
                        <h3>Hujjatni ro'yhatga olish</h3>
                    </Divider>
                    <Row>
                        <Col offset={1} span={22}>
                            <AddForm/>
                        </Col>
                    </Row>

                </div>
            </div>
        )
    }
}

export default AddDocument