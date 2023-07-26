import React, { useState } from 'react';
import UserListTable from '../table/UserListTable';

const UserListCompactList = props => {
    const [ name, setName ] = useState('');

    const onListNameChange = (event) => {
        var { value } = event.target;
        setName(value);
    };

    const onSubmitNewList = () => {
        props.createList(name);
        setName('');
    };

    return (
        <div className='container'>
            <div className='row mb-3 justify-content-end'>
                <div className='col input-group'>
                    <span className='input-group-text' id='basic-addon1'>List name</span>
                    <input type='text' className='form-control' placeholder='List name' aria-label='List name' aria-describedby='basic-addon1' value={ name } onChange={ onListNameChange } />
                </div>
                <button type='button' className='col-3 btn btn-success' onClick={ onSubmitNewList }>
                    <i className='bi-plus-lg' />
                </button>
            </div>
            <div className='row row-cols-1 justify-content-evenly'>
                {
                    props.lists.length > 0 ? (
                        <UserListTable lists={ props.lists } selectedListId={ props.selectedListId } selectList={ props.selectList } deleteList={ props.deleteList } />
                    ) : (
                        <div className='col'>
                            <p>No lists</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default UserListCompactList;
