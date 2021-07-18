import express from 'express';

const router = express.Router(); // Initialising router here 

// all routes in here are staring with /users 

var users = []

router.get('/', (req, res) => {
      console.log(users);
      res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;
    users.push(user);
    res.send(`User with the name ${user.firstName} added to the database`);
});

export default router;
