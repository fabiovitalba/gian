import React, { Component } from 'react';

class AboutUs extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render () {
        return (
            <div id='aboutUsPage' className='container mt-5'>
                <header>
                    <h2 className='text-light mb-0 mt-5 pt-4'>About Us</h2>
                    <h4 className='text-primary'>Meet the Team behind GIAN</h4>
                </header>
                <hr />
                <section id='team-description'>
                    <p title='Team Description' className='text-light'><b>GIAN</b> is driven by a passionate people for passionate people. <br/>
				Meet the Team developing GIAN:</p>
                    <div className='d-flex justify-content-evenly'>
                        <div className='card' style={{ width: '18rem' }}>
                            <div className='card-body text-light'>
                                <h5 className='card-title text-primary'>Fabio Vitalba</h5>
                                <p className='card-text'>Fabio is an amateur actor and theatre teacher (Theaterpädagoge). <br />
								He{'\''}s the main developer behind the project and uses his background as an actor at the {'"'}Theaterpädagogisches Zentrum Brixen{'"'} in order to constantly add new games and exercises.</p>
                            </div>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>Lead Developer</li>
                            </ul>
                        </div>
                        <div className='card' style={{ width: '18rem' }}>
                            <div className='card-body text-light'>
                                <h5 className='card-title text-primary'>Theaterpädagogisches Zentrum Brixen</h5>
                                <p className='card-text'>The {'"'}Theaterpädagogisches Zentrum Brixen{'"'} (short TPZ) is a home to many young actors and drama teachers. <br />
								A select team of drama teachers will be testing the Web application.</p>
                            </div>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>Tester</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <hr />
            </div>
        );
    }
}

export default AboutUs;
