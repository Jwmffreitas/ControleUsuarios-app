(async () => {

    const database = require('./db');
    const User = require('./models/user')
    await database.sync()


})();