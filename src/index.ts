import express from "express";
import cors from "cors";
import { ICars, Response } from "utils/types";
import { cars } from "./cars";

const app = express();

app.use(cors());
app.use(express.json());

const response: Response = {
  message: "",
  status: 200,
  success: true,
  data: [],
};

app.get("/api/cars", (req, res) => {
  response.message = "Success loading cars";
  response.data = cars;

  return res.send(response);
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});