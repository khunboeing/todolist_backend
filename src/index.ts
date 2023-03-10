import express, { Application, Request, Response } from "express";
import { isRight } from "fp-ts/lib/Either";
import * as t from "io-ts";
import { AppRoutes } from "./routes";
import cors from "cors";
import { db } from "./config/dbConnecter";

const app: Application = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

AppRoutes.map((route) => {
  app[route.method as keyof Application](
    route.path,
    (request: Request, response: Response) => route.action(request, response)
  );
});

app.listen(process.env.PORT || 4002, async () => {
  await db.connect();
  console.log(`Sever start on port ${process.env.PORT}`);
});
