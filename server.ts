import routerApi from "./routes/index";
import express from "express";
import bodyParser from "body-parser";
import {sequelize} from "./config/database";

const app = express();
const port = 3000;

app.use(bodyParser.json());

routerApi(app);

sequelize
  .sync()
  .then(() => {
    console.log("Database synced successfully.");
  })
  .catch((error) => {
    console.error("Error syncing database:", error.message);
  });

app.listen(port, () => {
  console.log("Mi port" + port);
});
