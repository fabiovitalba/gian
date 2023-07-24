import React from 'react';

const ExerciseSearch = props => {
    var { exercises, filteredExercises } = props;

    const onChangeSearchTerm = (e) => {
        var searchTerm = e.target.value.toUpperCase();
        if (searchTerm.length > 0) {
            filteredExercises = exercises.filter(exercise => {
                var exerciseString = JSON.stringify(exercise);
                if (exerciseString.toUpperCase().includes(searchTerm))
                    return true;
                else
                    return false;
            });
        } else {
            filteredExercises = exercises;
        }
    };

    const onSubmitSearch = (e) => {
        e.preventDefault();
        props.assingFilteredExercises(filteredExercises);
    };

    return (
        <form className='col-6 col-md-4 d-flex' role='search'>
            <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' onChange={ onChangeSearchTerm } />
            <button className='btn btn-outline-info' type='submit' onClick={ onSubmitSearch }>Search</button>
        </form>
    );
};

export default ExerciseSearch;
