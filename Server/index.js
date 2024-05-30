const express = require('express');
const connectDB = require('./db.js');
const Form = require('./models/Form');
const cors = require('cors');
const app = express();


const corsOptions = {
  origin: 'https://vista-flame.vercel.app', // Replace with your frontend URL
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.post('/api/forms', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        const newForm = new Form({ name, email, phone, message });
        await newForm.save();
        res.status(201).send(newForm);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

const port = process.env.PORT || 3000;

app.listen(port, async () => {
    await connectDB();
    console.log(`App is running on port ${port}`);
});
