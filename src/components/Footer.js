import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Clearfix from 'react-bootstrap/lib/Clearfix';
import FooterStyle from '../styleSheets/Footer.css';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={FooterStyle.wrapper}>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={12} lg={4} className={FooterStyle.textStyle}>测试模块一内容介绍测试模块一内容介绍</Col>
                        <Col xs={12} md={6} lg={4} className={FooterStyle.textStyle}>测试模块二公司信息</Col>
                        <Col xs={12} md={6} lg={4} className={FooterStyle.textStyle}>测试模块三</Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}