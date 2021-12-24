const express = require("express");

const app = express();

app.use(express.json());

const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the databse!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "OK" });
});

require("./routes/locations")(app);
require("./routes/cities")(app);
require("./routes/provinces")(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
