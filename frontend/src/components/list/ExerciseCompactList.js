import React, { useEffect, useState } from 'react';
import ExerciseTable from '../table/ExerciseTable';
import ExerciseSearch from '../form/ExerciseSearch';
import { Link } from 'react-router-dom';

const ExerciseCompactList = props => {
    const [filteredExercises, setFilteredExercises] = useState(props.exercises.map(ex => ex));

    const assingFilteredExercises = (newFilteredExercises) => {
        setFilteredExercises(newFilteredExercises);
    };

    useEffect(() => {
        // Update List of exercises when receiving them from parent component.
        setFilteredExercises(props.exercises.map(ex => ex));
    },[props.exercises]);

    return (
        <div className='container'>
            <div className='row mb-3 justify-content-end'>
                { props.appState.loggedIn
                    ? <Link className='col-2 col-md-1' to='/exercises/new'>
                        <button type='button' className='btn btn-success w-100'>
                            <i className='bi-plus-lg' />
                        </button>
                    </Link>
                    : null
                }
                <ExerciseSearch exercises={ props.exercises } filteredExercises={ filteredExercises } assingFilteredExercises={ assingFilteredExercises } />
            </div>
            <div className='row row-cols-1 justify-content-evenly'>
                {
                    filteredExercises.length > 0 ? (
                        <ExerciseTable appState={ props.appState } exercises={ filteredExercises } selectExercise={ props.selectExercise } />
                    ) : (
                        <div className='col'>
                            <p>No exercises</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ExerciseCompactList;
