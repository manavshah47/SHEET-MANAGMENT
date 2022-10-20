const mongoose = require("mongoose");
require('dotenv').config();
const MONGODB_ATLAS_URL = process.env.MONGODB_ATLAS_URL;

mongoose.connect(`${MONGODB_ATLAS_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(() => console.log('MongoDB connection established.'))
.catch((error) => console.error("MongoDB connection failed:", error.message))

