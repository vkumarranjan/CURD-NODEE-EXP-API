import express from 'express';

const router = express.Router(); // Initialising router here 

// all routes in here are staring with /users 

router.get('/', (req, res) => {
      res.send('Hello');
});

export default router;
