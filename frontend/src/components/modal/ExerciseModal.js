import React from 'react';

const ExerciseModal = props => {
    if (!props.exercise)
        return null;

    return (
        <div className='modal fade' id='exerciseModal' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1' aria-labelledby='exerciseModalLabel' aria-hidden='true'>
            <div className='modal-dialog modal-lg'>
                <div className='modal-content'>
                    <div className='modal-header bg-primary'>
                        <h1 className='modal-title fs-5 text-light' id='exerciseModalLabel'>{ props.exercise.title }</h1>
                        <button type='button' className='btn-close text-light' data-bs-dismiss='modal' aria-label='Close' onClick={ () => props.selectExercise('') } />
                    </div>
                    <div className='modal-body text-light'>
                        <ul className='list-group'>
                            <li className='list-group-item text-light'>{ props.exercise.description }</li>
                            <li className='list-group-item text-light'>Workshop: { props.exercise.workshop }</li>
                            <li className='list-group-item text-light'>Category: { props.exercise.category }</li>
                            <li className='list-group-item text-light'>Target: { props.exercise.target }</li>
                            <li className='list-group-item text-light'>Exhaustion: { props.exercise.exhaustion }</li>
                            <li className='list-group-item text-light'>by { props.exercise.author } (Curated by { props.exercise.curator })</li>
                            {
                                (props.exercise.minTime !== 0) && (props.exercise.maxTime !== 0) ?
                                    <li className='list-group-item text-light'>Duration: { props.exercise.minTime } - { props.exercise.maxTime } min.</li>
                                    : null
                            }
                            {
                                (props.exercise.minParticipants !== 0) && (props.exercise.maxParticipants !== 0) ?
                                    <li className='list-group-item text-light'>For { props.exercise.minParticipants } - { props.exercise.maxParticipants } Participants</li>
                                    : null
                            }
                        </ul>
                    </div>
                    <div className='modal-footer'>
                        <button type='button' className='btn btn-secondary' data-bs-dismiss='modal' onClick={ () => props.selectExercise('') }>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExerciseModal;
