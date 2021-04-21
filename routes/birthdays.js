import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let birthdays = [
    {
        firstName: "John",
        lastName: "Doe",
        birthday: '01-05-95',
        id: 1
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        birthday: '04-22-91',
        id: 2
    }
]

// Get all users
router.get('/', (req, res) => {
    res.send(birthdays)
})


// Posting birthday item into the list
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

// Deleting birthday item
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    birthdays = birthdays.filter((birthday) => birthday.id !== id);
    res.send(`User with id ${id} was removed from database`)
})

// Modifying birthday item
router.patch('/:id', (req,res) => {
    const {id} = req.params;
    const {firstName, lastName, birthday} = req.body;

    const matchBirthday = birthdays.find((birthday) => birthday.id === id)

    if (firstName) {
        matchBirthday.firstName = firstName;
    }

    if (lastName) {
        matchBirthday.lastName = lastName;
    }
    if (birthday) {
        matchBirthday.age = age;
    }
    res.send(`User with the id ${id} has been updated`);
})


export default router;