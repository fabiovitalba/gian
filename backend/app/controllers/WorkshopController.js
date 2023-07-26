const { Workshop } = require('../models/Workshop.js');

module.exports = {
    index(req, res) {
        Workshop.findAll({})
            .then(workshops => res.json({
                error: false,
                data: workshops
            }))
            .catch(error => res.json({
                error:true,
                data: [],
                error: error
            }));
    },

    create(req, res) {
        const {
            name, held_by_id, color
        } = req.body;
        Workshop.create({
            name, color
        })
        .then(workshop => res.status(201).json({
            error: false,
            data: workshop,
            message: "A new entry has been created successfully"
        }))
        .catch(error => res.json({
            error:true,
            data: [],
            error: error
        }));
    },

    update(req, res) {
        const workshop_id = req.params.id;

        const {
            name, held_by_id, color
        } = req.body;

        Workshop.update({
            name, color
        }, {
            where: {
                id: workshop_id
            }
        })
        .then(workshop => res.status(201).json({
            error: false,
            data: workshop,
            message: 'The entry has been updated successfully'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
    },

    destroy(req, res) {
        const workshop_id = req.params.id;

        Workshop.destroy({ where: {
            id: workshop_id
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
