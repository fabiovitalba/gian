const { Category } = require('../models/Category.js');

module.exports = {
    index(req, res) {
        Category.findAll({})
            .then(categories => res.json({
                error: false,
                data: categories
            }))
            .catch(error => res.json({
                error:true,
                data: [],
                error: error
            }));
    },

    create(req, res) {
        const {
            name, parent_id, color
        } = req.body;
        Category.create({
            name, parent_id, color
        })
        .then(category => res.status(201).json({
            error: false,
            data: category,
            message: "A new entry has been created successfully"
        }))
        .catch(error => res.json({
            error:true,
            data: [],
            error: error
        }));
    },

    update(req, res) {
        const category_id = req.params.id;

        const {
            name, parent_id, color
        } = req.body;

        Category.update({
            name, parent_id, color
        }, {
            where: {
                id: category_id
            }
        })
        .then(category => res.status(201).json({
            error: false,
            data: category,
            message: 'The entry has been updated successfully'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
    },

    destroy(req, res) {
        const category_id = req.params.id;

        Category.destroy({ where: {
            id: category_id
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
