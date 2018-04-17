import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';

export default class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                    <Col xs={6} md={4}>
                        <Image src="../assets/images/favicon.png" rounded responsive />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="../assets/images/favicon.png" circle responsive />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="../assets/images/favicon.png" thumbnail responsive />
                    </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
