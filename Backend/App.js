import http from "http";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import nameroute from "./AppRoutes.js";
const PORT = 3000;
const app = express();
http.createServer(app);
app.use(bodyParser.json());
app.use(cors({ origine: "*" }));
app.use("/name/", nameroute);
app.listen(PORT, () => {
  console.log(`you'r connected to the server ${PORT}`);
});
