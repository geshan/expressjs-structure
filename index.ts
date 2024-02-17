import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import authRouter from "./src/routes/auth.route";
import couriersRouter from "./src/routes/couriers.route";
import offersRouter from "./src/routes/offers.route";
import deliveriesRouter from "./src/routes/deliveries.route";
import locationsRouter from "./src/routes/locations.route";
import earningsRouter from "./src/routes/earnings.route";
import payoutsRouter from "./src/routes/payouts.route";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port: number = +(process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req: Request, res: Response) => {
  res.json({'message': 'ok'});
})

app.use('/auth', authRouter);
app.use('/couriers', couriersRouter);
app.use('/offers', offersRouter);
app.use('/deliveries', deliveriesRouter);
app.use('/locations', locationsRouter);
app.use('/earnings', earningsRouter);
app.use('/payouts', payoutsRouter);


/* Error handler middleware */
app.use((err: any, req: Request, res: Response, next: any) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});

app.listen(port, '0.0.0.0', () => {
  console.log(`OpenDeli app listening at http://localhost:${port}`)
});
