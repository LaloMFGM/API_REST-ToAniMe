import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router as routes } from "./routes/app.routes";



// Load environment variables from .env file
dotenv.config();
const app = express();


//Application use
app.use(express.json());
app.use(cors());
app.use("/api", routes);

// Import Middleware


// Import Routes





app.get('/', (req, res) => {
    res.send('Welcome to ToAniMe API');
});

app.listen (process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

