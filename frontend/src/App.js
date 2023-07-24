import React, { useState } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import NavBar from './components/navbar';
import Exercises from './pages/Exercises';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Exercise from './pages/Exercise';
import CreateUpdateExercise from './pages/CreateUpdateExercise';
import Lists from './pages/Lists';
import UserLogin from './pages/UserLogin';

const App = () => {
    const [state, setState] = useState({
        userId: -1,
        userName: '',
        fullName: '',
        authToken: '',
        loggedIn: false,
    });

    const setUser = (newUserId, newUserName, newAuthToken, newFullName) => {
        setState({
            ...state,
            userId: newUserId,
            userName: newUserName,
            authToken: newAuthToken,
            fullName: newFullName,
            loggedIn: (newUserId !== ''),
        });
    };

    const resetUser = () => {
        localStorage.removeItem('gian-auth-token');
        setState({
            ...state,
            userId: -1,
            userName: '',
            fullName: '',
            authToken: '',
            loggedIn: false,
        });
    };

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={ <NavBar appState={ state } resetUser={ resetUser } /> } >
                <Route index element={ <Home /> } />
                <Route path='exercises' element={ <Exercises appState={ state } userId={ state.userId } authToken={ state.authToken } /> } />
                <Route path='exercises/:exerciseId' element={ <Exercise /> } />
                <Route path='exercises/:exerciseId/edit' element={ <CreateUpdateExercise authToken={ state.authToken } /> } />
                <Route path='exercises/new' element={ <CreateUpdateExercise authToken={ state.authToken } /> } />
                <Route path='lists' element={ <Lists userId={ state.userId } authToken={ state.authToken } /> } />
                <Route path='login' element={ <UserLogin userId={ state.userId } setUser={ setUser } resetUser={ resetUser } authToken={ state.authToken } /> } />
                <Route path='aboutus' element={ <AboutUs /> } />
                <Route path='*' element={ <NoPage /> } />
            </Route>
        )
    );

    return (
        <RouterProvider router={router} />
    );

};

export default App;
