import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Clearfix from 'react-bootstrap/lib/Clearfix';
import ContentStyle from '../styleSheets/Content.css';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Grid className={ContentStyle.wrapper}>
                    <Row className="show-grid">
                        <Col xs={4} md={4} lg={4} className={ContentStyle.colStyle}>测试模块一</Col>
                        <Col xs={4} md={4} lg={4} className={ContentStyle.colStyle}>测试模块二</Col>
                        <Col xs={4} md={4} lg={4} className={ContentStyle.colStyle}>测试模块三</Col>
                    </Row>
                </Grid>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={6} md={6} lg={3} className={ContentStyle.colStyle}>测试模块一</Col>
                        <Col xs={6} md={6} lg={3} className={ContentStyle.colStyle}>测试模块二</Col>
                        <Clearfix visibleSmBlock></Clearfix>
                        <Col xs={6} md={6} lg={3} className={ContentStyle.colStyle}>测试模块三</Col>
                        <Col xs={6} md={6} lg={3} className={ContentStyle.colStyle}>测试模块四</Col>
                    </Row>
                </Grid>
                <Clearfix visibleSmBlock></Clearfix>
            </div>
        )
    }
}