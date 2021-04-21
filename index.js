import express from 'express';
import birthdayRoutes from './routes/birthdays.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';


const url =
    `mongodb+srv://d00363593:d00363593@cluster0.dvshs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const birthdaySchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    birthday: String
})

const Birthday = mongoose.model('Birthday', birthdaySchema)



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
