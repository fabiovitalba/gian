import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExerciseTable = props => {
    const navigate = useNavigate();

    const onClickEdit = (exerciseId) => {
        navigate(`/exercises/${exerciseId}/edit`);
    };

    var exercisesPage = document.getElementById('exercisesPage');
    var maxNoOfCharactersInDesc = exercisesPage.clientWidth / 10;

    return (
        <div className='container'>
            <ul className='list-group'>
                {
                    props.exercises.length > 0 ? (
                        props.exercises.map (exercise => (
                            <li key={ exercise.id } className='list-group-item list-group-item-action' >
                                <h5 className='d-flex flex-row text-primary'>
                                    { exercise.title }
                                    {
                                        (exercise.minTime !== 0) && (exercise.maxTime !== 0)
                                            ? <p className='card-text ms-auto mb-0'>
                                                <small className='text-light'>{ exercise.minTime } - { exercise.maxTime } min.</small>
                                                <a className='text-light ms-5' href='#' onClick={ () => props.selectExercise(exercise.id) } data-bs-toggle='modal' data-bs-target='#exerciseModal'><i className='bi bi-zoom-in' /></a>
                                            </p>
                                            : <a className='text-light ms-auto' href='#' onClick={ () => props.selectExercise(exercise.id) } data-bs-toggle='modal' data-bs-target='#exerciseModal'><i className='bi bi-zoom-in' /></a>
                                    }
                                    { props.appState.loggedIn
                                        ? <>
                                            <a className='text-light ms-3' href='#' onClick={ () => onClickEdit(exercise.id) } ><i className='bi bi-pencil' /></a>
                                            <a className='text-light ms-3' href='#' onClick={ () => props.selectExercise(exercise.id) } data-bs-toggle='modal' data-bs-target='#starExerciseModal'><i className='bi bi-star' /></a>
                                            <a className='text-light ms-3' href='#' onClick={ () => props.selectExercise(exercise.id) } data-bs-toggle='modal' data-bs-target='#deleteExerciseModal'><i className='bi bi-trash' /></a>
                                        </>
                                        : null
                                    }
                                </h5>
                                <p className='text-light mb-0'>{ exercise.description.substr(0, maxNoOfCharactersInDesc) + (exercise.description.length > maxNoOfCharactersInDesc ? '...' : '') }</p>
                                <div className='row'>
                                    <div className='col-6 col-md-3'>
                                        <small className='text-secondary'>Workshop: { exercise.workshop }</small>
                                    </div>
                                    <div className='col-6 col-md-3'>
                                        <small className='text-secondary'>Category: { exercise.category }</small>
                                    </div>
                                    <div className='col-6 col-md-3'>
                                        <small className='text-secondary'>Exhaustion: { exercise.exhaustion }</small>
                                    </div>
                                    <div className='col-6 col-md-3'>
                                        <small className='text-secondary'>Target: { exercise.target }</small>
                                    </div>
                                </div>
                            </li>
                        ))
                    ) : (
                        <li className='list-group-item'>
                            <p>No exercises</p>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default ExerciseTable;
