const { Exercise } = require('../models/Exercise.js');

module.exports = {
    index(req, res) {
        Exercise.findAll({})
            .then(exercises => res.json({
                error: false,
                data: exercises
            }))
            .catch(error => res.json({
                error:true,
                data: [],
                error: error
            }));
    },

    create(req, res) {
        const {
            title, description, language, author, curator, workshop,
            category, exhaustion, target, minTime, maxTime, minParticipants,
            maxParticipants
        } = req.body;
        Exercise.create({
            title, description, language, author, curator, workshop,
            category, exhaustion, target, minTime, maxTime, minParticipants,
            maxParticipants
        })
        .then(exercise => res.status(201).json({
            error: false,
            data: exercise,
            message: "A new entry has been created successfully"
        }))
        .catch(error => res.json({
            error:true,
            data: [],
            error: error
        }));
    },

    update(req, res) {
        const exercise_id = req.params.id;

        const {
            title, description, language, author, curator, workshop,
            category, exhaustion, target, minTime, maxTime, minParticipants,
            maxParticipants
        } = req.body;

        Exercise.update({
            title, description, language, author, curator, workshop,
            category, exhaustion, target, minTime, maxTime, minParticipants,
            maxParticipants
        }, {
            where: {
                id: exercise_id
            }
        })
        .then(exercise => res.status(201).json({
            error: false,
            data: exercise,
            message: 'The entry has been updated successfully'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
    },

    destroy(req, res) {
        const exercise_id = req.params.id;

        Exercise.destroy({ where: {
            id: exercise_id
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
