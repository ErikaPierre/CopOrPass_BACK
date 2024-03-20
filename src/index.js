import express from "express"; // necessaire pour la gestion des routes et des requêtes HTTP.
import dotenv from "dotenv"; // pour appeler les elements caches de notre fichier .env
import mongoose from "mongoose"; // pour pouvoir utiliser notre BDD de MongoDB.
import cors from "cors"; // permette d'ouvrir l'API à des requêtes provenant de domaines différents.
import userRouter from "./routes/userRoute";
import { productRouter } from "./routes/productRoute";
import { CommentRouter } from "./routes/commentRoute";

dotenv.config(); //pour appeler la configuration de l'environnement.

const app = express();

const port = process.env.PORT;
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log(`📁 DATABASE CONNECTED 🐳`);
}

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/products", productRouter);
app.use("/comments", CommentRouter);

app.get("/", (req, res) => {
  res.send("Welcome on CoP's API");
});

app.listen(port, () =>
  console.log(`Server is listening on port : http://localhost:${port}`)
);
