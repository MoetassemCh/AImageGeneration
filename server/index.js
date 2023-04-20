import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/posts', postRoutes);
app.use("/api/v1/dalles", dalleRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
