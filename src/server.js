import { express } from "express";
import router from "./routes";

const server = express();
server.use(router);

server.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000 🚀");

});
