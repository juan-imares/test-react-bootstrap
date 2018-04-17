import React from "react";
import styles from '../styleSheets/main.css';

export default class extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={styles.test}>
                react-test
            </div>
        )
    }
}