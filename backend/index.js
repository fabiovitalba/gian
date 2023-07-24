const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { expressjwt: jwt } = require('express-jwt');

const AuthorController = require('./app/controllers/AuthorController');
const CategoryController = require('./app/controllers/CategoryController');
const ExerciseController = require('./app/controllers/ExerciseController');
const TargetController = require('./app/controllers/TargetController');
const WorkshopController = require('./app/controllers/WorkshopController');
const UserController = require('./app/controllers/UserController');
const UserListController = require('./app/controllers/UserListController');
const ListExerciseController = require('./app/controllers/ListExerciseController');

const app = express();
dotenv.config();
const port = 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Login API
app.post('/api/login', UserController.login);

// Data API
app.get('/api/author', AuthorController.index);
app.post('/api/author', AuthorController.create);
app.put('/api/author/:id', AuthorController.update);
app.delete('/api/author/:id', AuthorController.destroy);

app.get('/api/category', CategoryController.index);
app.post('/api/category', CategoryController.create);
app.put('/api/category/:id', CategoryController.update);
app.delete('/api/category/:id', CategoryController.destroy);

app.get('/api/exercise', ExerciseController.index);
app.post('/api/exercise', ExerciseController.create);
app.put('/api/exercise/:id', ExerciseController.update);
app.delete('/api/exercise/:id', ExerciseController.destroy);

app.get('/api/target', TargetController.index);
app.post('/api/target', TargetController.create);
app.put('/api/target/:id', TargetController.update);
app.delete('/api/target/:id', TargetController.destroy);

app.get('/api/user', UserController.index);
app.post('/api/user', UserController.create);
app.put('/api/user/:id', UserController.update);
app.delete('/api/user/:id', UserController.destroy);

app.get('/api/userlist', UserListController.index);
app.get('/api/userlistwithexercise', UserListController.indexWithExercises);
app.post('/api/userlist', UserListController.create);
app.put('/api/userlist/:listId', UserListController.update);
app.delete('/api/userlist/:listId', UserListController.destroy);

app.get('/api/listexercise', ListExerciseController.index);
app.post('/api/listexercise', ListExerciseController.create);
app.put('/api/listexercise/:listExerciseId', ListExerciseController.update);
app.put('/api/listexercisemassupdate', ListExerciseController.massUpdate);
app.delete('/api/listexercise/:listExerciseId', ListExerciseController.destroy);

app.get('/api/workshop', WorkshopController.index);
app.post('/api/workshop', WorkshopController.create);
app.put('/api/workshop/:id', WorkshopController.update);
app.delete('/api/workshop/:id', WorkshopController.destroy);

// JWT Middleware
app.use(jwt({ secret: process.env.TOKEN_SECRET, algorithms: ['HS256'] }).unless({
    path: ['/api/login'],
    methods: ['GET']
}));

app.listen(port, () => {
    console.log(`Server started at: http://localhost:${port}`);
});
