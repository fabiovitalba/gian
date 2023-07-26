# gian
gian is a Web-App that allows you to manage and share games and exercises that you use or want to use during your drama workshops.

It allows you to create and manage personal lists that may hold a set of exercises and/or games.

Each exercise (games are subsequently referenced to as exercises) contains a set of information that helps you generate a plan for a single workshop or event a whole workshop course.


# Index
- [Features](#1-features)
- [Usage](#2-usage)
  - [Running the Server](#21-run-the-server)
  - [Running the Client](#22-run-the-web-client)
- [Contribute](#3-contribute)
- [Authors](#4-authors)

# 1. Features
gian will provide the following features for its users:

#### Basic features
These features will provide basic utility for any drama workshop leader.
- [X] Create, Update, Delete Exercises
- [ ] Language Filter on Exercise Titles, Description, Authors and more
- [ ] Share Exercises by defining them as public or keep them to yourself
- [X] Create, Update, Delete Lists of Exercises
- [ ] Share Lists of Exercises by defining them as public or keep them to yourself
- [ ] Sort and reorder Lists of Exercises
- [ ] Quickly assign Exercises to workshops and lists
- [ ] Create and List Workshops
- [ ] Assign Exercises to Workshops
- [ ] Assign Lists to Workshops
- [ ] Sort and reorder Workshop contents
- [ ] Workshop-View that provides a list with all the exercises (in order) that can be used during a workshop to keep track of what to do.
- [X] Create a User that can create Workshops, Lists and Exercises
- [X] View (public) Exercises even when logged out
- [ ] View (public) Lists even when logged out

#### Advanced features
These utilities will help supercharge the way in which workshops are prepared and how they are held.
- [ ] Create, Update, Delete Drama Groups (Drama Groups contain, avg. age, group size, ...)
- [ ] Assign Lists (public or not) to a Drama Group
- [ ] Rate exercises or lists for Drama Groups to see which exercises/lists work better
- [ ] Quickly generate a list of exercises based on a user-set of boundaries (time constraint, exclude exercises from list XYZ, only games, only a certain category ...)

#### Administration
These utilities will help maintain the platform.
- [ ] Enable Admin Users with elevated privileges
- [ ] Admin Users may create, update and delete Exercise-Categories, Exercise-Targets, Exercise-Exhaustions
- [ ] Admin Users may view all active Users
- [ ] Admin Users may reset a Password of a User, sending them an E-Mail (only if an Email was provided)
- [ ] Admin Users may block and/or unblock a User
- [ ] Admin Users may create/update/delete any Exercise/List/Workshop
- [ ] Admin Users may render a public Exercise private


# 2. Usage
In order to run gian you will need to run both a server and a client.
To do this, follow the two steps below:
### 2.1. Run the Server
*The following commands need to be executed by command line (terminal). This guide assumes you have basic knowledge of the command line interface.*

Firstly navigate to the `backend` folder of this repository.

If this is the first time running the server, you'll first need to install all the dependencies. To do so, run the following command:
```
npm install
```

In order to start the server, run the command:
```
npm start
```
And the server will start up. After a few seconds you can proceed with the start of the Web-Client.

### 2.2. Run the Web-Client
*The following commands need to be executed by command line (terminal). This guide assumes you have basic knowledge of the command line interface.*

Firstly navigate to the `frontend` folder of this repository.

If this is the first time running the client, you'll first need to install all the dependencies. To do so, run the following command:
```
npm install
```

In order to start the client, run the command:
```
npm start
```
The Web-App will start right up and a browser window pointing to it will open up.

You're now good to go!

# 3. Contribute
// TODO

# 4. Authors
Fabio Vitalba
// TODO
