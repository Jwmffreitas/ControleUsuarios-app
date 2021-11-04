const { Router } = require('express')
const router = Router()

const User = require('../models/user')

const faker = require('faker')

router.get('/api/users', async (req, res) => {
    const users = await User.findAll()
    res.json({users: users})
})

router.get('/api/users/create', async (req, res) => {
    for(let i = 0; i < 5; i++) {
        await User.create({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            avatar: faker.image.avatar()
        })
    }
    res.json({message: '5 Users Created'})
})

module.exports = router