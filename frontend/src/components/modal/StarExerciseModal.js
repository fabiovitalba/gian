import React, { useEffect, useState } from 'react';
import MultiSelect from '../form/MultiSelect';

const StarExerciseModal = props => {
    if (!props.exercise)
        return null;

    const [selection, setSelection] = useState(props.lists);

    useEffect(() => {
        setSelection(props.lists);
    }, [props.lists]);

    const onChange = (updatedSelection) => {
        setSelection(updatedSelection);
    };

    const onSave = () => {
        props.saveStarSelection(selection);
    };

    return (
        <div className='modal fade' id='starExerciseModal' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1' aria-labelledby='exerciseModalLabel' aria-hidden='true'>
            <div className='modal-dialog modal-md'>
                <div className='modal-content'>
                    <div className='modal-header bg-primary'>
                        <h1 className='modal-title fs-5 text-light' id='starExerciseModalLabel'>{ props.exercise.title }</h1>
                        <button type='button' className='btn-close text-light' data-bs-dismiss='modal' aria-label='Close' onClick={ () => props.selectExercise('') } />
                    </div>
                    <div className='modal-body text-light'>
                        <MultiSelect elements={ selection } keyProp='listId' activeProp='active' nameProp='description' placeholderText='select List...' onChange={ onChange } />
                    </div>
                    <div className='modal-footer'>
                        <button type='button' className='btn btn-secondary' data-bs-dismiss='modal' onClick={ () => props.selectExercise('') }>Close</button>
                        <button type='button' className='btn btn-primary' data-bs-dismiss='modal' onClick={ onSave } >Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StarExerciseModal;
