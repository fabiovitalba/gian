import React from 'react';
import { useParams } from 'react-router-dom';
import ExerciseForm from '../components/form/ExerciseForm';

const CreateUpdateExercise = () => {
    const params = useParams();

    return (
        <div id='createUpdateExercisePage' className='container mt-5'>
            <div className='row'>
                <div className='col mt-4'>
                    <h2 className='text-light'>{ params.exerciseId > 0 ? 'Modify exercise' : 'Create new exercise' }</h2>
                </div>
                <ExerciseForm exerciseId={ params.exerciseId } />
            </div>
        </div>
    );
};

export default CreateUpdateExercise;
