import React from 'react';

const UserListTable = props => {
    return (
        <div className='container'>
            <ul className='list-group'>
                {
                    props.lists.length > 0 ? (
                        props.lists.map (list => (
                            <li key={ list.id } className='list-group-item list-group-item-action'>
                                <h5 className='d-flex flex-row text-primary justify-content-between'>
                                    { list.name }
                                    <button type='button' className='col-3 btn btn-danger' onClick={ () => props.deleteList(list.id) }>
                                        <i className='bi-trash' />
                                    </button>
                                </h5>
                            </li>
                        ))
                    ) : (
                        <li className='list-group-item'>
                            <p>No lists</p>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default UserListTable;
