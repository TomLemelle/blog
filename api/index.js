const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 4001;
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    info: "node js started",
  });
});

//route endpoint
const routes = require("./routes/routes");
routes(app);

//listen port
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
