import React, { Component } from 'react';
import Typed from 'typed.js';

// import './Project.css';



class SplashAnimation extends Component {

    componentDidMount() {
        // const { strings } = this.props;

        const options = {
            strings: [
                'RAISE is ^800a pan-Asian\nundocumented youth group^400\nbased in NYC.'
            ],
            typeSpeed: 50,
            fadeOut: true,
            fadeOutClass: 'typed-fade-out',
            fadeOutDelay: 500,
        };
        // this.el refers to the <span> in the render() method
        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        // destroy Typed instance on unmounting to prevent mem leaks
        this.typed.destroy();
    }

    render() {

        return (
            <div className="SplashAnimation">
                <span
                    ref={(el) => {this.el = el; }}
                />

            </div>
        );
    }
}

export default SplashAnimation;
