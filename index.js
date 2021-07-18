import express, { request } from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(express.json());


app.use('/users', usersRoutes);

// listen for incoming request 
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

app.get('/', (req, res) => {

   console.log('[TEST]!');

   res.send('Hello from HomePage')

});