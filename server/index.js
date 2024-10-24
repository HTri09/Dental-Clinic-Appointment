const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const appointmentRoutes = require('./routes/appointment');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/appointments', appointmentRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
