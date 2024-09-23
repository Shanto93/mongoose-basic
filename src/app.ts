import express, { type Request, type Response } from "express";
const app = express();
const port = 3000;

//parsers
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello worlds!");
});
app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("got data");
});

export default app;
