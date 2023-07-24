import React, { useEffect, useState } from 'react';
import qs from 'querystring';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

const ExerciseForm = ({ exerciseId }) => {
    const [ exercise, setExercise ] = useState({
        title: '',
        description: '',
        language: '',
        author: '',
        curator: '',
        workshop: '',
        category: '',
        exhaustion: '',
        target: '',
        minTime: 0,
        maxTime: 0,
        minParticipants: 0,
        maxParticipants: 0,
    });
    const [ metadata, setMetadata ] = useState({
        workshops: [],
        categories: [],
        targets: [],
        exhaustions: ['Low', 'Medium', 'High', 'Very high'],
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (exerciseId > 0) {
            api.get(`api/exercise?id=${exerciseId}`)
                .then(res => {
                    var exerciseToModify = res.data.data.filter((ex) => ex.id === parseInt(exerciseId));
                    if (exerciseToModify[0]) {
                        setExercise(exerciseToModify[0]);
                    }
                });
        }
    }, [ exerciseId ]);

    useEffect(() => {
        async function getApiData() {
            var [ apiCategories, apiTargets, apiWorkshops ] = await Promise.all([
                api.get('api/category'),
                api.get('api/target'),
                api.get('api/workshop')
            ]);
            setMetadata({
                workshops: apiWorkshops.data.data,
                categories: apiCategories.data.data,
                targets: apiTargets.data.data,
                exhaustions: metadata.exhaustions,
            });
        }
        getApiData();
    }, []);

    const handleInputChange = (event) => {
        var { name, value } = event.target;
        setExercise({
            ...exercise,
            [name]: value
        });
    };

    const cancelEdit = () => {
        navigate('/exercises');
    };

    const submitForm = (event) => {
        event.preventDefault();
        if (exercise.id > 0) {
            api.put(`api/exercise/${exercise.id}`, qs.stringify(exercise))
                .then(() => navigate('/exercises'));
        } else {
            api.post('api/exercise', qs.stringify(exercise))
                .then(() => navigate('/exercises'));
        }
    };

    return (
        <form onSubmit={ submitForm }>
            <div className='mb-3'>
                <label htmlFor='exerciseTitle' className='form-label'>Title</label>
                <input type='text' className='form-control' id='exerciseTitle' name='title' required value={ exercise.title } onChange={ handleInputChange } />
            </div>
            <div className='mb-3'>
                <label htmlFor='exerciseDescription' className='form-label'>Description</label>
                <textarea className='form-control' id='exerciseDescription' name='description' rows='10' value={ exercise.description } onChange={ handleInputChange }></textarea>
            </div>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-evenly'>
                <div className='col'>
                    <select className='form-select' aria-label='Workshop' id='exerciseWorkshop' name='workshop' required value={ exercise.workshop } onChange={ handleInputChange } >
                        <option>select Workshop...</option>
                        {
                            metadata.workshops.map((workshop) => (
                                <option key={ workshop.id } value={ workshop.name }>{ workshop.name }</option>
                            ))
                        }
                    </select>
                </div>
                <div className='col'>
                    <select className='form-select' aria-label='Category' id='exerciseCategory' name='category' required value={ exercise.category } onChange={ handleInputChange } >
                        <option>select Category...</option>
                        {
                            metadata.categories.map((category) => (
                                <option key={ category.id } value={ category.name }>{ category.name }</option>
                            ))
                        }
                    </select>
                </div>
                <div className='col'>
                    <select className='form-select' aria-label='Target' id='exerciseTarget' name='target' required value={ exercise.target } onChange={ handleInputChange } >
                        <option>select Target...</option>
                        {
                            metadata.targets.map((target) => (
                                <option key={ target.id } value={ target.name }>{ target.name }</option>
                            ))
                        }
                    </select>
                </div>
                <div className='col'>
                    <select className='form-select' aria-label='Exhaustion' id='exerciseExhaustion' name='exhaustion' required value={ exercise.exhaustion } onChange={ handleInputChange } >
                        <option>select Exhaustion...</option>
                        {
                            metadata.exhaustions.map((exhaustion) => (
                                <option key={ exhaustion } value={ exhaustion }>{ exhaustion }</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className='mb-3'>
                <label htmlFor='exerciseAuthor' className='form-label'>Author</label>
                <input type='text' className='form-control' id='exerciseAuthor' name='author' required value={ exercise.author } onChange={ handleInputChange } />
            </div>
            <div className='mb-3'>
                <label htmlFor='exerciseTime' className='form-label'>Time (min.)</label>
                <div id='exerciseTime' className='input-group mb-3'>
                    <input type='number' className='form-control' id='exerciseMinTime' name='minTime' placeholder='Min. Time' aria-label='Min. Time' step={ 5 } value={ exercise.minTime } onChange={ handleInputChange } />
                    <span className='input-group-text'> - </span>
                    <input type='number' className='form-control' id='exerciseMaxTime' name='maxTime' placeholder='Max. Time' aria-label='Max. Time' step={ 5 } value={ exercise.maxTime } onChange={ handleInputChange } />
                </div>
            </div>
            <button type='button' className='btn btn-danger' onClick={ cancelEdit }>Cancel</button>
            <button type='submit' className='ms-5 btn btn-success'>Save</button>
        </form>
    );
};

export default ExerciseForm;
