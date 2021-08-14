const { Router } = require('express')
const router = Router()

router.get('/api/users', (req, res) => {
    res.json('User List')
})

module.exports = router