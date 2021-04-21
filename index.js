import express from 'express';
import birthdayRoutes from './routes/birthdays.js';
import bodyParser from 'body-parser';


const app = express();
// const PORT = 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello from home page');
})

app.use('/birthdays', birthdayRoutes);



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server Running in port: http://localhost:${PORT}`);
})
