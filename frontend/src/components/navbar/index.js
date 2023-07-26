import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';

const NavBar = ({ appState, resetUser }) => {
    const navigate = useNavigate();

    const onClickLogin = () => {
        navigate('/login');
    };

    const onClickLogout = () => {
        resetUser();
        navigate('/');
    };

    return (
        <>
            <nav className='navbar navbar-expand-lg bg-primary fixed-top'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='/'>WIE 2023 Project - GIAN</a>
                    <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <NavLink to='/' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} >Home</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='/exercises' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} >Exercises</NavLink>
                            </li>
                            { appState.loggedIn
                                ? <li className='nav-item'>
                                    <NavLink to='/lists' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} >Lists</NavLink>
                                </li>
                                : null
                            }
                            <li className='nav-item'>
                                <NavLink to='/aboutus' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} >About us</NavLink>
                            </li>
                        </ul>
                        { (!appState.loggedIn)
                            ? <div className='d-flex' role='login'>
                                <button className='btn btn-info mt-2' type='button' onClick={ onClickLogin }>Login</button>
                            </div>
                            : <div className='d-flex' role='logout'>
                                <button className='btn btn-outline-warning mt-2' type='button' onClick={ onClickLogout }>Logout</button>
                            </div>
                        }
                    </div>
                    <button className='navbar-toggler' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasNavbar' aria-controls='offcanvasNavbar' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='offcanvas offcanvas-end d-block d-lg-none' tabIndex='-1' id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel'>
                        <div className='offcanvas-header'>
                            <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>WIE 2023 Project - GIAN</h5>
                            <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
                        </div>
                        <div className='offcanvas-body'>
                            <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                                <li className='nav-item'>
                                    <NavLink to='/' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} >Home</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink to='/exercises' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} >Exercises</NavLink>
                                </li>
                                { appState.loggedIn
                                    ? <li className='nav-item'>
                                        <NavLink to='/lists' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} >Lists</NavLink>
                                    </li>
                                    : null
                                }
                                <li className='nav-item'>
                                    <NavLink to='/aboutus' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} >About us</NavLink>
                                </li>
                            </ul>
                            { (!appState.loggedIn)
                                ? <div className='d-flex' role='login'>
                                    <button className='btn btn-info mt-2' type='button' onClick={ onClickLogin }>Login</button>
                                </div>
                                : <div className='d-flex' role='logout'>
                                    <button className='btn btn-outline-warning mt-2' type='button' onClick={ onClickLogout }>Logout</button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    );
};

export default NavBar;
