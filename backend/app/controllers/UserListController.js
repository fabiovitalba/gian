const { UserList } = require('../models/UserList.js');
const { ListExercise } = require('../models/ListExercise.js');

module.exports = {
    index(req, res) {
        const { list_id, user_id } = req.query;
        const filter = {};
        if (list_id)
            filter['id'] = list_id;
        if (user_id)
            filter['user_id'] = user_id;
        const whereClause = (filter.id || filter.user_id) ? { where: filter } : {};
        UserList.findAll(whereClause)
            .then(userLists => res.json({
                error: false,
                data: userLists
            }))
            .catch(error => res.json({
                error:true,
                data: [],
                error: error
            }));
    },

    indexWithExercises(req, res) {
        const { list_id, user_id } = req.query;
        const filter = {};
        if (list_id)
            filter['id'] = list_id;
        if (user_id)
            filter['user_id'] = user_id;
        const whereClause = (filter.id || filter.user_id) ? { where: filter } : {};
        UserList.findAll(whereClause)
            .then(async userLists => {
                const userListsWithExercises = await Promise.all(userLists.map(async (list) => {
                    return await ListExercise.findAll({ where: { list_id: list.id, } })
                        .then((listExercises) => {
                            const newList = list;
                            newList.dataValues['exercises'] = listExercises;
                            return newList;
                        })
                        .catch(() => {
                            const newList = list;
                            newList.dataValues['exercises'] = [];
                            return newList;
                        })
                }));
                res.json({
                    error: false,
                    data: userListsWithExercises
                });
            })
            .catch(error => res.json({
                error:true,
                data: [],
                error: error
            }));
    },

    create(req, res) {
        const {
            user_id, name
        } = req.body;
        UserList.create({
            user_id, name
        })
        .then(userList => res.status(201).json({
            error: false,
            data: userList,
            message: "A new entry has been created successfully"
        }))
        .catch(error => res.json({
            error:true,
            data: [],
            error: error
        }));
    },

    update(req, res) {
        const list_id = req.params.listId;

        const {
            name
        } = req.body;

        UserList.update({
            name
        }, {
            where: {
                id: list_id,
            }
        })
        .then(userList => res.status(201).json({
            error: false,
            data: userList,
            message: 'The entry has been updated successfully'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
    },

    destroy(req, res) {
        const list_id = req.params.listId;

        UserList.destroy({ where: {
            id: list_id,
        }})
        .then(status => res.status(201).json({
            error: false,
            message: 'The entry has been deleted successfully'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
    }
}
