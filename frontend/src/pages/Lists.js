import React, { Component } from 'react';
import qs from 'querystring';
import api from '../services/api';
import UserListCompactList from '../components/list/UserListCompactList';

class Lists extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: props.userId,
            selectedListId: '',
            selectList: {},
            lists: []
        };
    }

    componentDidMount() {
        if (this.state.lists.length === 0)
            this.refreshLists();
    }

    refreshLists = () => {
        api.get(`api/userlistwithexercise?user_id=${this.state.userId}`)
            .then(response => response.data)
            .then(data => {
                this.setState({
                    ...this.state,
                    lists: data.data,
                });
            });
    };

    createList = name => {
        var newList = {
            user_id: this.state.userId,
            name: name,
        };
        api.post('api/userlist', qs.stringify(newList))
            .then(() => {
                this.refreshLists();
            });
    };

    deleteList = id => {
        api.delete(`api/userlist/${id}`)
            .then(() => {
                this.refreshLists();
            });
    };

    selectList = id => {
        var selectedList = this.state.lists.filter(list => list.id === id)[0];
        if (!selectedList)
            selectedList = {};
        this.setState({
            ...this.state,
            selectedListId: id,
            selectedList,
        });
    };

    render () {
        var { lists } = this.state;

        return (
            <div id='listsPage' className='container mt-5'>
                <div className='row'>
                    <div className='col mt-4'>
                        <div className='d-flex flex-row mb-3'>
                            <h2 className='text-light mb-0'>Lists</h2>
                        </div>
                    </div>
                </div>
                <UserListCompactList lists={ lists } selectedListId={ this.state.selectedListId } selectList={ this.selectList } createList={ this.createList } deleteList={ this.deleteList } />
            </div>
        );
    }
}

export default Lists;
