import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let birthdays = [
    {
        firstName: "John",
        lastName: "Doe",
        birthday: '01-05-95',
        id: ''
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        birthday: '04-22-91'
    }
]

// Get all users
router.get('/', (req, res) => {
    res.send(birthdays)
})


// 
router.post('/', (req, res) => {
    const birthday = req.body;
    const birthdayId = uuidv4();
    const birthdayWithId = { ...birthday, id: birthdayId }
    birthdays.push(birthdayWithId);
    res.send(`User with username ${birthday.firstName} added to the database!`)
});


// get specific user based on id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundBirthday = birthdays.find((birthday) => birthday.id === id)

    res.send(foundBirthday);
})






export default router;