import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render () {
        return (
            <div id='homePage' className='container mt-5'>
                <header>
                    <h1 className='display-1 text-light mt-4 pt-3'>GIAN</h1>
                    <h3 className='text-primary'>An assistant for Drama Workshops</h3>
                </header>
                <hr />
                <section id='service-description' className='text-light'>
                    <p title='Service description'>
                        <b>GIAN</b> is a helpful companion for anyone handling Drama Workshops. <br/>
					It helps you find the right exercise or game for every occasion.
                    </p>
                </section>
                <section id='partners' className='text-light'>
                    <h3 className='text-primary'>Partners</h3>
                    <ul>
                        <li><a href='https://tpz-brixen.org/' target='_blank' rel='noreferrer'>Theaterpädagogisches Zentrum Brixen</a></li>
                    </ul>
                </section>
                <section id='mission-description' className='text-light'>
                    <h3 className='text-primary'>Mission</h3>
                    <p title='Mission description'>
					One of the biggest challenges in the development of a play is the preparation. GIAN aims to solve this problem, by providing a library of exercises and games.
                    </p>
                </section>
                <section id='feature-overview' className='text-light'>
                    <h3 className='text-primary'>Feature overview</h3>
                    <p title='Feature overview'>
					GIAN features:
                    </p>
                    <ul>
                        <li>A library of exercises and games for drama workshops</li>
                        <li>An estimated duration, strain and goal of each exercise and game</li>
                        <li>Adding new exercises and games</li>
                        <li>The possibility to search and find exercises and games in the library of the app</li>
                        <li>The possibility to make lists of exercises and games</li>
                    </ul>
                </section>
                <hr />
            </div>
        );
    }
}

export default Home;
