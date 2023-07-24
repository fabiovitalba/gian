import React , { useState } from 'react';
import qs from 'querystring';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

const UserLoginForm = ({ setUser, resetUser }) => {
    const [formState, setFormState] = useState({
        username: '',
        password: '',
        errorMsg: '',
        email: '',
        name: '',
        newUser: false,
    });

    const navigate = useNavigate();

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        if (formState.newUser) {
            var registrationParams = {
                name: formState.name,
                username: formState.username,
                password: formState.password,
                email: formState.email,
            };
            // Create a new User
            api.post('api/user', qs.stringify(registrationParams))
                .then((resp) => {
                    // If the Data Length is too short, no user was created.
                    if (resp.data.data.length <= 0) {
                        setFormState({
                            ...formState,
                            errorMsg: 'User could not be created.',
                        });
                        resetUser();
                    } else {
                        // If everything went well, we received a token which we can store.
                        localStorage.setItem('gian-auth-token', resp.data.token);
                        setUser(resp.data.data.id, resp.data.data.username, resp.data.token, resp.data.data.name);
                        navigate('/exercises');
                    }
                })
                .catch((error) => {
                    setFormState({
                        ...formState,
                        errorMsg: error.response?.data?.error ? `${error.code}: ${error.response.data.error}` : `${error.code}: User could not be created.`,
                    });
                    resetUser();
                });
        } else {
            var loginParams = {
                username: formState.username,
                password: formState.password,
            };
            // Login with existing user
            api.post('api/login', qs.stringify(loginParams))
                .then((resp) => {
                    localStorage.setItem('gian-auth-token', resp.data.token);
                    setUser(resp.data.userId, resp.data.username, resp.data.token, resp.data.name);
                    navigate('/exercises');
                })
                .catch((error) => {
                    setFormState({
                        ...formState,
                        errorMsg: `${error.code}: ${error.response.data.errorMsg}`,
                    });
                    resetUser();
                });
        }
    };

    const toggleNewUserForm = (event) => {
        event.preventDefault();
        setFormState({
            ...formState,
            newUser: !formState.newUser,
        });
    };

    const onInputChange = (event) => {
        setFormState({
            ...formState,
            [event.target.id]: event.target.value,
        });
    };

    return (
        <form onSubmit={ handleLoginSubmit }>
            { (formState.errorMsg !== '')
                ? <div className='alert alert-danger' role='alert'>{ formState.errorMsg }</div>
                : null
            }
            <div className='input-group mb-3'>
                <span className='input-group-text col-3' id='usernameLabel'>Username</span>
                <input id='username' type='text' className='form-control' placeholder='Username' aria-label='Username' aria-describedby='usernameLabel' value={ formState.username } onChange={ onInputChange } required />
            </div>
            <div className='input-group mb-3'>
                <span className='input-group-text col-3' id='passwordLabel'>Password</span>
                <input id='password' type='password' className='form-control' placeholder='Password' aria-label='Password' aria-describedby='PasswordLabel' value={ formState.password } onChange={ onInputChange } required />
            </div>
            { formState.newUser
                ? <>
                    <div className='input-group mb-3'>
                        <span className='input-group-text col-3' id='nameLabel'>Name</span>
                        <input id='name' type='text' className='form-control' placeholder='Full Name' aria-label='Name' aria-describedby='nameLabel' value={ formState.name } onChange={ onInputChange } />
                    </div>
                    <div className='input-group mb-3'>
                        <span className='input-group-text col-3' id='emailLabel'>E-Mail</span>
                        <input id='email' type='email' className='form-control' placeholder='E-Mail' aria-label='E-Mail' aria-describedby='emailLabel' value={ formState.email } onChange={ onInputChange } />
                    </div>
                </>
                : null
            }
            <div className='mb-3'>
                <a onClick={ toggleNewUserForm } href='#'>{ formState.newUser ? 'Already have an account?' : 'No account? Sign up!' }</a>
            </div>
            <button type='submit' className='btn btn-primary'>{ formState.newUser ? 'Sign up' : 'Login' }</button>
        </form>
    );
};

export default UserLoginForm;
