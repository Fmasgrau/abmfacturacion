import routerApi from "./routes/index";
import express from 'express'


const app = express();
const port = 3000;

app.use(express.json());

routerApi(app);

app.listen(port, () => {
  console.log("Mi port" + port);
});
