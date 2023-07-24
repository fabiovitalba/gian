const jsonwebtoken = require('jsonwebtoken');

const { User } = require('../models/User.js');

module.exports = {

    index(req, res) {
        User.findAll({})
            .then(users => res.json({
                error: false,
                data: users.map((user) => {
                    return {
                        ...user,
                        password: '',
                    }
                })
            }))
            .catch(error => res.json({
                error:true,
                data: [],
                error: error
            }));
    },

    create(req, res) {
        const { name, username, password, email } = req.body;
        User.create({
            name, username, password, email
        })
        .then(user => res.status(201).json({
            error: false,
            data: user,
            token: jsonwebtoken.sign({ username: user.username }, process.env.TOKEN_SECRET, { expiresIn: '1800s' }),
            message: 'A new user has been created successfully.'
        }))
        .catch(error => res.json({
            error:true,
            data: [],
            error: error
        }));
    },

    update(req, res) {
        const user_id = req.params.id;

        const { name, username, password, email } = req.body;

        User.update({
            name, username, password, email
        }, {
            where: {
                id: user_id
            }
        })
        .then(user => res.status(201).json({
            error: false,
            data: user,
            message: 'The entry has been updated successfully'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
    },

    destroy(req, res) {
        const user_id = req.params.id;

        User.destroy({ where: {
            id: user_id
        }})
        .then(status => res.status(201).json({
            error: false,
            message: 'The entry has been deleted successfully'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
    },

    login(req, res) {
        const { username, password } = req.body;
        // Passwords should be hashed and only the hashes should be compared
        User.findOne({ where: { username: username, password: password, } })
            .then((user) => {
                res.status(200).json({
                    error: false,
                    userId: user.id,
                    username: user.username,
                    name: user.name,
                    token: jsonwebtoken.sign({ user: username }, process.env.TOKEN_SECRET, { expiresIn: '1800s' }),
                    errorMsg: null,
                })
            })
            .catch(() => {
                const errorMsg = 'Username or Password incorrect.';
                res.status(401).json({
                    error: true,
                    userId: null,
                    username: null,
                    name: null,
                    token: null,
                    errorMsg: errorMsg,
                });
            });
    },
}
