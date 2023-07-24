import React, { Component } from 'react';

class NoPage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render () {
        return (
            <div id='noPage' className='container mt-5'>
                <div className='row'>
                    <h1>Oops! We couldn&apos;t find what you were looking for.</h1>
                </div>
            </div>
        );
    }
}

export default NoPage;
