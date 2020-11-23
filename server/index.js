const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router  = require('./routes/posts')

const app = express();
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

app.use("/posts", router);

const CONNECTION_URL = 'mongodb+srv://mongodb_123:mongodb_123@cluster0.3s2xn.mongodb.net/test?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch(error => console.log(error.message));

    mongoose.set('useFindAndModify', false);