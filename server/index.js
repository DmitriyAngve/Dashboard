import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
// in node.js we need to specify the ".js"
import productRoutes from "./routes/product.js";
import Product from "./models/Product.js";
import KPI from "./models/KPI.js";
import { kpis } from "./data/data.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/kpi", kpiRoutes); // enter points for specific routes
app.use("/product", productRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000; // backup for port
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

    /* ADD DATA ONE TIME ONLY OR AS NEEDED */
    /*
    await mongoose.connection.db.dropDatabase();
    // before we're going to seed our DB with information we want to drop the current DB that we already have and the reason why we do it is so what we don't have duplicate data or we don't have it we don't run into specific errors we're just going to run this particular thing once and then we're going seed that see the information as needed (in really prod need backup)
    KPI.insertMany(kpis);
    // we're passing in the array and by doing so we can input this information
    */
  })
  .catch((error) => console.log(`${error} did not connect`));
