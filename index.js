require('dotenv').config();
const express = require('express');
let app = express();
const db = require("./src/config/db.config");
const organizationController = require('./src/controller/OrganizationController');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * Register your controllers
 */
app.use('/api/organization', organizationController);







async function runServer(){
    try {
        await db.sequelize.sync({ force: true });
        const port = process.env.PORT || 3000;
        app.listen(port, () => `App is listenning on port: ${port}`);
        
    } catch (error) {
        console.log('**********', 'Retrying sequelize sync after 5s', '**********');
        setTimeout(runServer, 5000);
    }
}

runServer();
