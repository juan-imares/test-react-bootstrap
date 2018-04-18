import React from 'react';
import Header from '../components/Header';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Header history={this.props.history}/>
            </div>
        )
    }
}