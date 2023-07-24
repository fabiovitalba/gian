import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExerciseCard = props => {
    const navigate = useNavigate();

    const onClickEdit = () => {
        navigate(`/exercises/${props.exercise.id}/edit`);
    };

    return (
        <div className='card mb-3 border-primary shadow text-bg-dark g-0' style={{ maxWidth: 540 }}>
            <h5 className='card-header bg-primary d-flex flex-row'>
                { props.exercise.title }
                <a className='text-light ms-auto' href='#' onClick={ () => props.selectExercise(props.exercise.id) } data-bs-toggle='modal' data-bs-target='#exerciseModal'><i className='bi bi-zoom-in' /></a>
                { props.appState.loggedIn
                    ? <>
                        <a className='text-light ms-3' href='#' onClick={ onClickEdit } ><i className='bi bi-pencil' /></a>
                        <a className='text-light ms-3' href='#' onClick={ () => props.selectExercise(props.exercise.id) } data-bs-toggle='modal' data-bs-target='#starExerciseModal'><i className='bi bi-star' /></a>
                        <a className='text-light ms-3' href='#' onClick={ () => props.selectExercise(props.exercise.id) } data-bs-toggle='modal' data-bs-target='#deleteExerciseModal'><i className='bi bi-trash' /></a>
                    </>
                    : null
                }
            </h5>
            <div className='card-body d-flex flex-column'>
                <p className='card-text'>{ props.exercise.description }</p>
                <div className='mt-auto'>
                    <div className='card-text row'>
                        <div className='col-3 align-self-end'>
                            <small className='text-body-secondary fw-bold'>Workshop</small>
                        </div>
                        <div className='col-3 align-self-end'>
                            <small className='text-body-secondary fw-bold'>Categories</small>
                        </div>
                        <div className='col-3 align-self-end'>
                            <small className='text-body-secondary fw-bold'>Exhaustion</small>
                        </div>
                        <div className='col-3 align-self-end'>
                            <small className='text-body-secondary fw-bold'>Target</small>
                        </div>
                    </div>
                    <div className='card-text row'>
                        <div className='col-3'>
                            <small className='text-body-secondary'>{ props.exercise.workshop }</small>
                        </div>
                        <div className='col-3'>
                            <small className='text-body-secondary'>{ props.exercise.category }</small>
                        </div>
                        <div className='col-3'>
                            <small className='text-body-secondary'>{ props.exercise.exhaustion }</small>
                        </div>
                        <div className='col-3'>
                            <small className='text-body-secondary'>{ props.exercise.target }</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-footer d-flex flex-row'>
                <p className='card-text'><small className='text-body-secondary'>by { props.exercise.author } (Curated by { props.exercise.curator })</small></p>
                {
                    (props.exercise.minTime !== 0) && (props.exercise.maxTime !== 0) ?
                        <p className='card-text ms-auto'><small className='text-light'>{ props.exercise.minTime } - { props.exercise.maxTime } min.</small></p>
                        : null
                }
            </div>
        </div>
    );
};

export default ExerciseCard;
