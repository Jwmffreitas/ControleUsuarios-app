const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000
app.use(cors());

app.use(express.json());

app.listen(port, function() {
    console.log(`Server runing on port ${port}`)
});


(async () => {

    const database = require('./db');
    const User = require('./models/user')
    await database.sync()


})();