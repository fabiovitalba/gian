import React from 'react';
import UserLoginForm from '../components/form/UserLoginForm';

const UserLogin = ({ setUser, resetUser }) => {
    return (
        <div id='userLoginPage' className='container mt-5'>
            <div className='row col-lg-6 mx-auto'>
                <div className='col mt-4'>
                    <div className='mb-3'>
                        <h2 className='text-light mb-3'>User Login</h2>
                        <UserLoginForm setUser={ setUser } resetUser={ resetUser } />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
