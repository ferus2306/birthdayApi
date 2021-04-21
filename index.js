import express from 'express';
import birthdayRoutes from './routes/birthdays.js';


const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Hello from home page');
})

app.use('/birthdays', birthdayRoutes);


app.listen(PORT, () => console.log(`Server is running on port# ${PORT}`));