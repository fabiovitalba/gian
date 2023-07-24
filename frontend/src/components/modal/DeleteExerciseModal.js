import React from 'react';

const DeleteExerciseModal = props => {
    if (!props.exercise)
        return null;

    return (
        <div className='modal fade' id='deleteExerciseModal' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1' aria-labelledby='exerciseModalLabel' aria-hidden='true'>
            <div className='modal-dialog modal-lg'>
                <div className='modal-content'>
                    <div className='modal-header bg-primary'>
                        <h1 className='modal-title fs-5 text-light' id='deleteExerciseModalLabel'>{ props.exercise.title }</h1>
                        <button type='button' className='btn-close text-light' data-bs-dismiss='modal' aria-label='Close' onClick={ () => props.selectExercise('') } />
                    </div>
                    <div className='modal-body text-light'>
                        <p>Would you like to delete the Exercise {`"${props.exercise.title}"`}?</p>
                    </div>
                    <div className='modal-footer'>
                        <button type='button' className='btn btn-secondary' data-bs-dismiss='modal' onClick={ () => props.selectExercise('') }>Close</button>
                        <button type='button' className='btn btn-danger' data-bs-dismiss='modal' onClick={ () => props.deleteExercise(props.exercise.id) }>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteExerciseModal;
