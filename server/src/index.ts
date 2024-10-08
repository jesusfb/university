import express from "express";
import { config } from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import { errorsHandlerMiddleware } from "./middlewares";
import { apiRoute } from "./routes";

config();

const app = express();
const port = process.env.PORT || 9069;
const origin = process.env.ORIGIN || "http://localhost:5173";

// Middleware configuration
app.use(
    cors({
        origin,
        credentials: true,
    })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

apiRoute(app);

app.use(errorsHandlerMiddleware);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
