import express from 'express';
import dotenv from 'dotenv';

dotenv.config();


const app = express();


app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to ToAniMe API');
});

app.listen (process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

