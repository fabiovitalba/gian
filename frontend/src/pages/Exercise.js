import React, { Component } from 'react';

class Exercise extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        /*
        let location = useLocation();
        let urlParams = useParams();
        let [urlSearchParams] = useSearchParams();
        */
    }

    render () {
        return (
            <div id='exercisePage' className='container mt-5'>
                <div className='row'>
                    <h1>Exercise { this.props.exercise?.title }</h1>
                </div>
            </div>
        );
    }
}

export default Exercise;
