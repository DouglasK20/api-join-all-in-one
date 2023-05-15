import express from "express";
import router from "./routers/routes";
import { errorMiddleware } from "./middlewares/error";

const app = express();

app.use(express.json());

app.use(router);

app.use(errorMiddleware);

app.listen(8080, () => {console.log("Server is running on PORT 8080")});
