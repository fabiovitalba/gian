import React, { useEffect, useState } from 'react';
import api from '../services/api';
import ExerciseCardList from '../components/list/ExerciseCardList';
import ExerciseModal from '../components/modal/ExerciseModal';
import ExerciseCompactList from '../components/list/ExerciseCompactList';
import StarExerciseModal from '../components/modal/StarExerciseModal';
import DeleteExerciseModal from '../components/modal/DeleteExerciseModal';

const Exercises = (props) => {
    const [state, setState] = useState({
        listType: 'card',
        selectedExerciseId: '',
        selectedExercise: {},
    });
    const [exercises, setExercises] = useState([]);
    const [lists, setLists] = useState([]);

    useEffect(() => {
        refreshExercises();
        refreshLists();
    }, []);

    useEffect(() => {
        refreshLists();
    }, [ props.userId ]);

    const refreshExercises = () => {
        api.get('api/exercise')
            .then(response => response.data)
            .then(response => setExercises(response.data))
            .catch(() => {});
    };

    const refreshLists = () => {
        if (props.userId > 0) {
            api.get(`api/userlistwithexercise?user_id=${props.userId}`)
                .then(response => response.data)
                .then(response => setLists(response.data))
                .catch(() => {});
        }
    };

    const selectExercise = (id) => {
        var selectedExercise = exercises.filter(exercise => exercise.id === id)[0];
        if (!selectedExercise)
            selectedExercise = {};
        setState({
            ...state,
            selectedExerciseId: id,
            selectedExercise,
        });
    };

    const deleteExercise = (id) => {
        api.delete(`api/exercise/${id}`)
            .then(() => refreshExercises());
    };

    const changeListType = (newType) => {
        setState({
            ...state,
            listType: newType,
        });
    };

    const saveStarSelection = (updatedSelection) => {
        api.put('/api/listexercisemassupdate', {
            data: JSON.stringify(updatedSelection),
            userId: props.userId,
            exerciseId: state.selectedExerciseId,
        }).then(() => {
            refreshLists();
        });
    };

    var { listType, selectedExercise } = state;

    var selectedExerciseLists = lists.map((list) => {
        var listContainsExercise = list.exercises.length > 0
            ? list.exercises.filter((listExercise) => listExercise.exercise_id === selectedExercise.id).length > 0
            : false;

        return {
            listId: list.id,
            active: listContainsExercise,
            description: list.name,
            exerciseId: selectedExercise.id,
        };
    });

    return (
        <div id='exercisesPage' className='container mt-5'>
            <div className='row'>
                <div className='col mt-4'>
                    <div className='d-flex flex-row mb-3'>
                        <h2 className='text-light mb-0'>Exercises</h2>
                        <div className='btn-group align-self-end ms-auto col-4 col-md-2 col-lg-1' role='group' aria-label='Basic example'>
                            <button type='button' className={`btn btn-secondary ${ ( listType === 'card' ) ? 'disabled' : '' }`} onClick={ () => changeListType('card') }>
                                <i className='bi bi-view-list' />
                            </button>
                            <button type='button' className={`btn btn-secondary ${ ( listType === 'compact' ) ? 'disabled' : '' }`} onClick={ () => changeListType('compact') }>
                                <i className='bi bi-list-columns' />
                            </button>
                        </div>
                    </div>
                    {
                        listType === 'card'
                            ? <ExerciseCardList appState={ props.appState } exercises={ exercises } selectExercise={ selectExercise } />
                            : <ExerciseCompactList appState={ props.appState } exercises={ exercises } selectExercise={ selectExercise } />
                    }
                    <ExerciseModal exercise={ selectedExercise } selectExercise={ selectExercise } />
                    <StarExerciseModal exercise={ selectedExercise } selectExercise={ selectExercise } lists={ selectedExerciseLists } saveStarSelection={ saveStarSelection } />
                    <DeleteExerciseModal exercise={ selectedExercise } selectExercise={ selectExercise } deleteExercise={ deleteExercise } />
                </div>
            </div>
        </div>
    );
};

export default Exercises;
