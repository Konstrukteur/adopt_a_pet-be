import express from "express";
import routes from "./routes/animals.mjs";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`\ndev server listening on port: ${PORT}\nPress CTRL+C to close`);
});
