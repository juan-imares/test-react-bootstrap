import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';
import BannerStyle from '../styleSheets/Banner.css';

export default class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={BannerStyle.wrapper}>
                {/* <Image src="../assets/images/pc-banner.jpg" /> */}
                <Grid>
                    <Row>
                        <Col><h2>这是页面标题</h2></Col>
                    </Row>
                    <Row>
                        <Col>这是子标题-标题介绍内容</Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
