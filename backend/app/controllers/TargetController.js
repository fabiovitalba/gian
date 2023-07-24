const { Target } = require('../models/Target.js');

module.exports = {
    index(req, res) {
        Target.findAll({})
            .then(targets => res.json({
                error: false,
                data: targets
            }))
            .catch(error => res.json({
                error:true,
                data: [],
                error: error
            }));
    },

    create(req, res) {
        const {
            name, color
        } = req.body;
        Target.create({
            name, color
        })
        .then(target => res.status(201).json({
            error: false,
            data: target,
            message: "A new entry has been created successfully"
        }))
        .catch(error => res.json({
            error:true,
            data: [],
            error: error
        }));
    },

    update(req, res) {
        const target_id = req.params.id;

        const {
            name, color
        } = req.body;

        Target.update({
            name, color
        }, {
            where: {
                id: target_id
            }
        })
        .then(target => res.status(201).json({
            error: false,
            data: target,
            message: 'The entry has been updated successfully'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
    },

    destroy(req, res) {
        const target_id = req.params.id;

        Target.destroy({ where: {
            id: target_id
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
