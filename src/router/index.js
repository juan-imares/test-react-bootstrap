import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './history';
import { AnimatedSwitch, spring } from 'react-router-transition';
import IndexPage from '../pages/Index';
import AboutPage from '../pages/About';

function mapStyles(styles) {
    return {
      opacity: styles.opacity,
      // transform: `scale(${styles.scale})`,
      transform: `translate3d(${styles.offset}px,0,0)`,
    };
}
  
function bounce(val) {
    return spring(val, {
      stiffness: 330,
      damping: 22,
    });
}
  
// child matches will...
const bounceTransition = {
    atEnter: {
      opacity: 0,
      // scale: 1.2,
      offset: -400
    },
    atLeave: {
      opacity: bounce(0),
      // scale: bounce(0.8),
      offset: bounce(-400),
    },
    atActive: {
      opacity: bounce(1),
      offset: bounce(0),
    },
}

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Router forceRefresh={!('pushState' in window.history)} history={history}>
                <AnimatedSwitch atEnter={bounceTransition.atEnter} atLeave={bounceTransition.atLeave} atActive={bounceTransition.atActive} mapStyles={mapStyles} className="route-wrapper">
                    <Route exact path="/" component={IndexPage} />
                    <Route exact path="/about" component={AboutPage} />
                </AnimatedSwitch>
            </Router>
        )
    }
}