import express from "express";
import cors from "cors";
import setContentType from "./middlewares/setContentType.middleware.js";
import setCORPHeader from "./middlewares/setCORPHeader.middleware.js";
import instagramRoutes from "./routes/instagram.routes.js";
import threadsRoutes from "./routes/threads.routes.js";

const app = express();

app.use(cors());
app.use(express.text({ type: ["text/plain", "application/json"] }));
app.use(setCORPHeader);

app.use("/api/v1/instagram", instagramRoutes);
app.use("/api/v1/threads", threadsRoutes);

app.use("/media", setContentType, express.static("media"));

export default app;
