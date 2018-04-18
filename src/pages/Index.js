import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Content from '../components/Content';
import Footer from '../components/Footer';
import IndexStyle from '../styleSheets/Index.css';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className={IndexStyle.bg}>
                    <Header history={this.props.history}/>
                    <Banner />
                </div>
                <Content />
                <Footer />
            </div>
        )
    }
}