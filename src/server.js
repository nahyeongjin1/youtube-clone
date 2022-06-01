import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const Home = (req, res) => {
  return res.send("Home");
};

const login = (req, res) => {
  return res.send("Login");
};

app.use(logger);
app.get("/", Home);
app.get("/login", login);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localost:${PORT} 🚀`);

app.listen(PORT, handleListening);
