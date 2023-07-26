const { Author } = require('../models/Author.js');

module.exports = {
    index(req, res) {
        Author.findAll({})
            .then(authors => res.json({
                error: false,
                data: authors
            }))
            .catch(error => res.json({
                error:true,
                data: [],
                error: error
            }));
    },

    create(req, res) {
        const {
            name, name_2
        } = req.body;
        Author.create({
            name, name_2
        })
        .then(author => res.status(201).json({
            error: false,
            data: author,
            message: "A new entry has been created successfully"
        }))
        .catch(error => res.json({
            error:true,
            data: [],
            error: error
        }));
    },

    update(req, res) {
        const author_id = req.params.id;

        const {
            name, name_2
        } = req.body;

        Author.update({
            name, name_2
        }, {
            where: {
                id: author_id
            }
        })
        .then(author => res.status(201).json({
            error: false,
            data: author,
            message: 'The entry has been updated successfully'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
    },

    destroy(req, res) {
        const author_id = req.params.id;

        Author.destroy({ where: {
            id: author_id
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
