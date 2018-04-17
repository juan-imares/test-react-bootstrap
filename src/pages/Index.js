import React from 'react';
import Header from '../components/Header';
import Block from '../components/Block';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Header />
                <Block />
            </div>
        )
    }
}