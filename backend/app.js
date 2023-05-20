
const cors = require('cors')
require('dotenv').config();
const express = require('express')

const app = express()


app.use(express.json());
app.use(cors());

//connect to DB
const connectDB = require('./db/connect')

//error-handler

//routes











const port = process.env.PORT || 5000;

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();