const { ListExercise } = require('../models/ListExercise.js');

module.exports = {
    index(req, res) {
        ListExercise.findAll({})
            .then(listExercises => res.json({
                error: false,
                data: listExercises
            }))
            .catch(error => res.json({
                error: true,
                data: [],
                error: error
            }));
    },

    create(req, res) {
        const {
            list_id, exercise_id, position_no
        } = req.body;
        ListExercise.create({
            list_id, exercise_id, position_no
        })
        .then(listExercise => res.status(201).json({
            error: false,
            data: listExercise,
            message: "A new entry has been created successfully"
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
    },

    update(req, res) {
        const list_exercise_id = req.params.listExerciseId;
        const {
            list_id,
            exercise_id,
            positionNo
        } = req.body;

        ListExercise.update({
            list_id,
            exercise_id,
            positionNo,
        }, {
            where: {
                id: list_exercise_id,
            }
        })
        .then(listExercise => res.status(201).json({
            error: false,
            data: listExercise,
            message: 'The entry has been updated successfully'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
    },

    destroy(req, res) {
        const list_exercise_id = req.params.listExerciseId;

        ListExercise.destroy({ where: {
            id: list_exercise_id,
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

    massUpdate(req, res) {
        const updatedSelection = JSON.parse(req.body.data);
        const { userId, exerciseId } = req.body;
        ListExercise.destroy({ where: {
            exercise_id: exerciseId,
            user_id: userId,
        }}).then(status => {
            const recordsToInsert = updatedSelection
                .filter((selection) => selection.active)
                .map((selection) => {
                    return {
                        exercise_id: selection.exerciseId,
                        user_id: userId,
                        list_id: selection.listId,
                        position_no: 0,
                    }});
            ListExercise.bulkCreate(recordsToInsert)
                .then(listExercise => res.status(201).json({
                    error: false,
                    data: listExercise,
                    message: "New entries created successfully."
                }))
                .catch(error => res.json({
                    error: true,
                    data: [],
                    error: error
                }));
        })
        .catch(error => res.json({
            error: true,
            error: error
        }));
    }
}
